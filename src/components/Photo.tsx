type PhotoProps = {
  name: string;
  alt: string;
  className?: string;
  sizes?: string;
  /** Natural size of the full-size file, so the browser can reserve space. */
  width?: number;
  height?: number;
  position?: string;
};

/** A photo from /public/images, served as a 640w and a full-size WebP. */
export function Photo({
  name,
  alt,
  className = '',
  sizes = '(min-width: 768px) 50vw, 100vw',
  width = 1024,
  height = 768,
  position,
}: PhotoProps) {
  return (
    <img
      src={`/images/${name}.webp`}
      srcSet={`/images/${name}-640.webp 640w, /images/${name}.webp 1024w`}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`block object-cover ${className}`}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
