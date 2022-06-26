// TODO
// focus-visible state
// focus ref
// šedá barva (a možná předělat základní barvy na success error.... atd.)
// Dodělat "as" prop
// Vyřešit správnou přístupnost komponentu

import { CgSpinner } from "react-icons/cg";

type ButtonProps = {
  children: string;
  type?: "filled" | "outlined" | "tinted" | "plain";
  color?:
    | "primary"
    | "secondary"
    | "white"
    | "black"
    | "red"
    | "green"
    | "yellow"
    | "blue";
  shape?: "square" | "rounded" | "pill";
  size?: "sm" | "base" | "lg";
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
};

// Type classes
let typeClasses = {
  filled: "",
  outlined:
    "shadow-[inset_0px_0px_0px_2px] bg-opacity-0 hover:bg-opacity-100 hover:text-white",
  tinted: "bg-opacity-10 hover:bg-opacity-20",
  plain: "bg-opacity-0 hover:bg-opacity-10",
};

// Filled color classes
let filledColorClasses = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  white: "bg-white text-gray-900",
  black: "bg-gray-900 text-white",
  red: "bg-rose-600 text-white",
  green: "bg-emerald-600 text-white",
  yellow: "bg-abmer-500 text-gray-900",
  blue: "bg-blue-600 text-white",
};

// Other types color classes
let otherColorClasses = {
  primary: "bg-primary text-primary shadow-primary",
  secondary: "bg-secondary text-secondary shadow-secondary",
  white: "bg-white text-white shadow-white",
  black: "bg-gray-900 text-gray-900 shadow-gray-900",
  red: "bg-rose-600 text-rose-600 shadow-rose-600",
  green: "bg-emerald-600 text-emerald-600 shadow-emerald-600",
  yellow: "bg-amber-500 text-amber-500 shadow-amber-500",
  blue: "bg-blue-600 text-blue-600 shadow-blue-600",
};

// Shape classes
const shapeClasses = {
  square: "rounded-none",
  rounded: "rounded-md",
  pill: "rounded-full",
};

// Size classes
const sizeClasses = {
  sm: "px-4 py-3 text-sm",
  base: "px-6 py-4 text-base",
  lg: "px-8 py-5 text-lg",
};

export default function Button({
  type = "filled",
  color = "primary",
  shape = "square",
  size = "base",
  LeftIcon = null,
  RightIcon = null,
  isLoading = false,
  isDisabled = false,
  className = "",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={`group relative isolate inline-flex items-center justify-center font-semibold leading-none tracking-wide no-underline transition-colors duration-200 ${
        typeClasses[type]
      } ${
        type === "filled" ? filledColorClasses[color] : otherColorClasses[color]
      } 
      ${shapeClasses[shape]} ${sizeClasses[size]}
      ${
        isLoading ? "pointer-events-none cursor-not-allowed" : "cursor-pointer"
      } ${isDisabled ? "pointer-events-none opacity-70 grayscale" : ""} 
      ${className}
      `}
      onClick={onClick}
    >
      {/* Left icon */}
      {LeftIcon !== null && (
        <span className={`z-1 scale-130 mr-3 ${isLoading ? "invisible" : ""}`}>
          {LeftIcon}
        </span>
      )}

      {/* Hover for filled type */}
      {type === "filled" && (
        <span
          className={`absolute inset-0 z-[-1] bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-20  ${
            color === "black" ? "bg-white" : ""
          } ${color === "white" ? "bg-black" : ""}`}
        ></span>
      )}

      {/* Text */}
      <span className={`z-[1] ${isLoading ? "invisible" : ""}`}>
        {children}
      </span>

      {/* Left icon */}
      {RightIcon !== null && (
        <span className={`z-1 scale-130 mr-3 ${isLoading ? "invisible" : ""}`}>
          {RightIcon}
        </span>
      )}

      {/* Loading spinner */}
      {isLoading && (
        <CgSpinner className="z-1 animate-spiner absolute inset-0 m-auto h-[1.8em] w-[1.8em]" />
      )}
    </button>
  );
}
