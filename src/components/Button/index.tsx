"use client";

import { ButtonHTMLAttributes, JSX, ReactNode } from "react";

import clsx from "clsx";

type ButtonIconPosition = "left" | "right";
type ButtonShadow = "sm";
type ButtonFill = "contained";
type ButtonVariant = "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode;
  icon?: JSX.Element;
  iconPosition?: ButtonIconPosition;
  containerClassName?: string;
  buttonClassName?: string;
  buttonShadow?: ButtonShadow;
  fill?: ButtonFill;
  variant?: ButtonVariant;
}

const getShadow = (shadow?: ButtonShadow): string | undefined => {
  if (!shadow) return;

  const ButtonShadows: { [key in ButtonShadow]: string } = {
    sm: "button-shadow-sm",
  };

  return ButtonShadows?.[shadow];
};

const getBackgroundColor = ({
  fill,
  variant,
}: {
  fill?: ButtonFill;
  variant?: ButtonVariant;
}): string | undefined => {
  if (!variant) return;

  if (fill === "contained" && variant === "danger") return "bg-danger-100";
};

const Button = (props: ButtonProps) => {
  const {
    label,
    icon,
    iconPosition = "right",
    containerClassName,
    buttonClassName,
    onClick,
    buttonShadow,
    fill = "contained",
    variant,
  } = props;

  return (
    <button
      className={clsx(
        "flex justify-center items-center gap-x-2.5 p-2 cursor-pointer rounded-10 min-w-max",
        containerClassName,
        getShadow(buttonShadow),
        getBackgroundColor({ fill, variant }),
        {
          "flex-row-reverse": iconPosition === "left",
        }
      )}
      onClick={(event) => {
        onClick?.(event);
      }}
    >
      <span
        className={clsx(
          "text-xl leading-none font-bold text-white font-urbanist",
          buttonClassName
        )}
      >
        {label}
      </span>
      {icon}
    </button>
  );
};

export default Button;
