// TODO
// Vyřešit správnou přístupnost komponentu
// obsahuje will change - v safari se na hover lehce třese ikona

import { forwardRef } from "react";
import { CgSpinner } from "react-icons/cg";

type ButtonProps = {
  children: string;
  as?: React.ElementType;
  type?: "filled" | "outlined" | "tinted" | "plain";
  color?:
    | "primary"
    | "secondary"
    | "white"
    | "black"
    | "gray"
    | "success"
    | "error"
    | "warning"
    | "info";
  shape?: "square" | "rounded" | "pill";
  size?: "sm" | "base" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export type Ref = HTMLButtonElement;

// Type classes
const typeClasses = {
  filled: "",
  outlined:
    "shadow-[inset_0px_0px_0px_2px] bg-opacity-0 hover:bg-opacity-100 hover:text-white active:bg-opacity-100 active:text-white",
  tinted: "bg-opacity-15 hover:bg-opacity-25 active:bg-opacity-25",
  plain: "bg-opacity-0 hover:bg-opacity-15 active:bg-opacity-15",
};

// Filled type color classes
const filledColorClasses = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  white: "bg-white text-gray-900",
  black: "bg-gray-900 text-white",
  gray: "bg-gray-600 text-white",
  success: "bg-success text-white",
  error: "bg-error text-white",
  warning: "bg-warning text-white",
  info: "bg-info text-white",
};

// Other types color classes
const otherColorClasses = {
  primary: "bg-primary text-primary shadow-primary",
  secondary: "bg-secondary text-secondary shadow-secondary",
  white: "bg-white text-white shadow-white",
  black: "bg-gray-900 text-gray-900 shadow-gray-900",
  gray: "bg-gray-600 text-gray-600 shadow-gray-600",
  success: "bg-success text-success shadow-success",
  error: "bg-error text-error shadow-error",
  warning: "bg-warning text-warning shadow-warning",
  info: "bg-info text-info shadow-info",
};

// Focus classes for each color
const focusClasses = {
  primary: "focus-visible:ring-4 focus-visible:ring-primary/70",
  secondary: "focus-visible:ring-4 focus-visible:ring-secondary/70",
  white: "focus-visible:ring-4 focus-visible:ring-white/70",
  black: "focus-visible:ring-4 focus-visible:ring-black/70",
  gray: "focus-visible:ring-4 focus-visible:ring-gray-600/70",
  success: "focus-visible:ring-4 focus-visible:ring-success/70",
  error: "focus-visible:ring-4 focus-visible:ring-error/70",
  warning: "focus-visible:ring-4 focus-visible:ring-warning/70",
  info: "focus-visible:ring-4 focus-visible:ring-info/70",
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

export const Button = forwardRef<Ref, ButtonProps>(
  (
    {
      as: Tag = "button",
      type = "filled",
      color = "primary",
      shape = "square",
      size = "base",
      leftIcon = null,
      rightIcon = null,
      isLoading = false,
      isDisabled = false,
      className = "",
      onClick,
      children,
      ...rest
    },
    ref
  ) => (
    <Tag
      ref={ref}
      role="button"
      className={`group relative isolate inline-flex items-center justify-center overflow-hidden font-semibold leading-none tracking-wide no-underline outline-none transition-colors duration-200 will-change-transform ${
        typeClasses[type]
      } ${
        type === "filled" ? filledColorClasses[color] : otherColorClasses[color]
      } 
  ${shapeClasses[shape]} ${sizeClasses[size]} ${focusClasses[color]}
  ${isLoading ? "pointer-events-none cursor-not-allowed" : "cursor-pointer"} ${
        isDisabled ? "pointer-events-none opacity-70 grayscale" : ""
      } 
  ${className}
  `}
      onClick={onClick}
      {...rest}
    >
      {/* Left icon */}
      {leftIcon !== null && (
        <span
          className={`z-[1] mr-3 text-[1.1em] ${isLoading ? "invisible" : ""}`}
        >
          {leftIcon}
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
      {rightIcon !== null && (
        <span
          className={`z-[1] mr-3 text-[1.1em] ${isLoading ? "invisible" : ""}`}
        >
          {rightIcon}
        </span>
      )}

      {/* Loading spinner */}
      {isLoading && (
        <CgSpinner className="z-1 absolute inset-0 m-auto h-[1.8em] w-[1.8em] animate-spiner" />
      )}
    </Tag>
  )
);

Button.displayName = "Button"; // viz: https://stackoverflow.com/questions/52992932/component-definition-is-missing-display-name-react-display-name

export default Button;
