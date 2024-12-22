export function DotPattern({ className }) {
  return (
    <div className={`absolute inset-0 w-full h-full [background-image:radial-gradient(#9333ea_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none ${className || ''}`} />
  );
}
