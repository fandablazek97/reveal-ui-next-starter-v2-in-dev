type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "sm" | "base" | "lg" | "xl";
  hasSeparator?: boolean;
  separatorPosition?: "left" | "center" | "right";
  separatorColor?: "primary" | "secondary" | "white" | "black" | "current";
  className?: string;
  children?: React.ReactNode;
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// Size classes -> https://tailwindcss.com/docs/font-size
const sizeClasses = {
  sm: "text-lg",
  base: "text-2xl",
  lg: "text-3xl md:text-4xl",
  xl: "text-4xl md:text-6xl",
};

// Separator classes
const separatorBaseClasses =
  "relative pb-6 after:absolute after:content-[''] after:bottom-0 after:w-16 after:h-[3px]";

const separatorPositionClasses = {
  left: "after:left-0 after:right-auto",
  center: "after:left-1/2 after:-translate-x-1/2",
  right: "after:left-auto after:right-0",
};

const separatorColorClasses = {
  primary: "after:bg-primary",
  secondary: "after:bg-secondary",
  white: "after:bg-white",
  black: "after:bg-gray-900",
  current: "after:bg-current",
};

export default function Heading({
  level,
  size = "base",
  hasSeparator = false,
  separatorPosition = "left",
  separatorColor = "primary",
  className = "",
  children,
}: HeadingProps) {
  const Tag = `h${level}` as HeadingTag;

  return (
    <Tag
      className={`font-bold leading-[1.15] text-rich ${sizeClasses[size]} ${
        hasSeparator
          ? separatorBaseClasses +
            " " +
            separatorPositionClasses[separatorPosition] +
            " " +
            separatorColorClasses[separatorColor]
          : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
