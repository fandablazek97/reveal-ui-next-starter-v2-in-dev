type ContainerProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  size?: "sm" | "base" | "lg";
  className?: string;
};

let sizeClasses = {
  sm: "max-w-3xl",
  base: "max-w-7xl",
  lg: "",
};

export default function Container({
  as: Tag = "div",
  size = "base",
  className = "",
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-[90%] ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
