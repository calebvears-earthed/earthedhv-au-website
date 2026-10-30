import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: string;
};

export function Photo({
  src,
  alt,
  sizes,
  priority = false,
  objectPosition = "center",
}: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectFit: "cover", objectPosition }}
    />
  );
}
