import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  position?: string;
  ratio?: string;
};

export function Photo({ src, alt, sizes, priority = false, position = "center", ratio = "16 / 10" }: PhotoProps) {
  return (
    <div className="shot" style={{ aspectRatio: ratio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={70}
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}
