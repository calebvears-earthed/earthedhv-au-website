// One-off. Reads the original img/ folder from the previous single-page site
// and writes the photographs now committed under public/images.
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import sharp from "sharp";

const jobs = [
  ["img/hero-render-web.jpg", "public/images/wind-construction.jpg", 1920],
  ["img/IMG_1853.jpg", "public/images/wind-blade.jpg", 1600],
  ["img/bess-site.jpg", "public/images/bess-rows.jpg", 1600],
  ["img/bess-yard.jpg", "public/images/bess-yard.jpg", 1600],
  ["img/IMG_9870-3-cc8bfd00.jpg", "public/images/branded-vehicle.jpg", 1600],
  ["img/solar-panels.jpg", "public/images/solar-panels.jpg", 1600],
  ["img/solar-combiner.jpg", "public/images/combiner.jpg", 1600],
  ["img/tb-inspection.jpg", "public/images/inspection.jpg", 1600],
  ["img/S445-Promo-d3aa454c.jpg", "public/images/switching.jpg", 1600],
  ["img/IMG_2010.jpg", "public/images/terminations.jpg", 1600],
  ["img/IMG_3441.jpg", "public/images/distribution.jpg", 1600],
  ["img/IMG_5801-6.jpg", "public/images/earthing.jpg", 1600],
  ["img/IMG_8584-2-d58cf50c.jpg", "public/images/testing.jpg", 1600],
  ["img/IMG_9125.jpg", "public/images/cabinet.jpg", 1600],
  ["img/UJC-box-complete-0dffc623.jpg", "public/images/junction-complete.jpg", 1800],
  ["img/windfarm-nexans-term-kit-2383836d.jpg", "public/images/nexans-joints.jpg", 1600],
  ["img/UJC-Box-Windfarm-setup-61f18cc2.jpg", "public/images/junction-setup.jpg", 1600],
  ["img/IMG_8210-bff60be1.jpg", "public/images/solar-trench.jpg", 1600],
  ["img/IMG_8709-4-2a818b45.jpg", "public/images/cable-lay.jpg", 1600],
  ["img/IMG_5911-2-cdba68e7.jpg", "public/images/feeder.jpg", 1600],
  ["img/IMG_0038-dbc1f37b.jpg", "public/images/wiring.jpg", 1600],
  ["img/IMG_9819-2.jpg", "public/images/substation-screen.jpg", 1600],
];

mkdirSync("public/images", { recursive: true });

for (const [input, output, width] of jobs) {
  mkdirSync(dirname(output), { recursive: true });
  await sharp(input)
    .rotate()
    .resize({ width, height: width, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 74, mozjpeg: true })
    .toFile(output);
  const meta = await sharp(output).metadata();
  console.log(`${output} ${meta.width}x${meta.height} ${meta.size}`);
}

await sharp("img/logo-white.png")
  .resize({ width: 420, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile("public/logo.png");

const icon = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <rect width="512" height="512" fill="#4B345B"/>
    <rect x="36" y="36" width="440" height="440" fill="none" stroke="#E4D4F4" stroke-width="8"/>
    <text x="256" y="292" text-anchor="middle" font-family="Georgia, serif" font-size="132" fill="#F4EFE8" letter-spacing="4">EHV</text>
  </svg>`,
);

mkdirSync("src/app", { recursive: true });
await sharp(icon).resize(512).png().toFile("src/app/icon.png");
await sharp(icon).resize(180).png().toFile("src/app/apple-icon.png");

const logo = await sharp("img/logo-white.png").resize({ width: 680 }).png().toBuffer();
const og = await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#100C14" },
})
  .composite([
    { input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <rect x="48" y="48" width="1104" height="534" fill="none" stroke="#6E5883"/>
      <text x="88" y="470" fill="#E4D4F4" font-family="Georgia, serif" font-size="28">South Australia</text>
      <text x="88" y="520" fill="#6E5883" font-family="Georgia, serif" font-size="22">PGE 336477</text>
    </svg>`), top: 0, left: 0 },
    { input: logo, top: 150, left: 88 },
  ])
  .jpeg({ quality: 80 })
  .toFile("public/og.jpg");

console.log("og", og);
