// To do
// "as" prop

type WrapperProps = {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg";
  className?: string;
};

let sizeClasses = {
  sm: "max-w-3xl",
  base: "max-w-7xl",
  lg: "max-w-[90%]",
};

export default function Wrapper({
  size = "base",
  className = "",
  children,
}: WrapperProps) {
  return (
    <div className={`mx-auto w-[90%] ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
