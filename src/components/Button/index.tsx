"use client";

import { ButtonHTMLAttributes, JSX, ReactNode } from "react";

import clsx from "clsx";

type ButtonIconPosition = "left" | "right";
type ButtonShadow = "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode;
  icon?: JSX.Element;
  iconPosition?: ButtonIconPosition;
  containerClassName?: string;
  buttonClassName?: string;
  buttonShadow?: ButtonShadow;
}

const getShadow = (shadow?: ButtonShadow): string | undefined => {
  if (!shadow) return;

  const ButtonShadows: { [key in ButtonShadow]: string } = {
    sm: "button-shadow-sm",
  };

  return ButtonShadows?.[shadow];
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
  } = props;

  return (
    <button
      className={clsx(
        "flex justify-center items-center gap-x-2.5 p-2 bg-danger-100 cursor-pointer rounded-10 min-w-max",
        containerClassName,
        getShadow(buttonShadow),
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
