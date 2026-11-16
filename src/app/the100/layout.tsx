import type { ReactNode } from "react";
import type { Viewport } from "next";
import Script from "next/script";
import { META_PIXEL_ID } from "./offer";

export const viewport: Viewport = {
  themeColor: "#2b1550",
};

/**
 * Meta Pixel for /the100 only. Do not move this into the root layout.
 * Earthed Energy dataset. Standard base code: PageView on load, plus the noscript image.
 * Lead is fired from The100Form only after a 2xx response.
 * No advanced matching. No name, phone, email or address is sent to Meta.
 */
export default function The100Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
      <Script id="meta-pixel-the100" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`,
        }}
      />
      {children}
    </>
  );
}
