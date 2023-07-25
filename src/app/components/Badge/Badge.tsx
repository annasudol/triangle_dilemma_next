import type { FC } from "react";
import clsx from "clsx";

import * as HeroIcons from "@heroicons/react/24/solid";
import { BADGE_ERROR_MESSAGE } from "types/error.types";
import {
  BadgeColourObject,
  BadgeProps,
  BadgeSizeObject,
} from "@components/Badge/Badge.types";

export const colors: BadgeColourObject = {
  "blue-grey-light": "bg-blue-gray-200 text-white",
  "blue-grey": "bg-blue-gray-600 text-blue-gray-100",
  red: "bg-muted-red-100 text-muted-red-900",
  yellow: "bg-yellow-400 text-white",
  "light-yellow": "bg-yellow-100 text-yellow-800",
  "dark-yellow": "bg-yellow-100 text-yellow-400",
  green: "bg-green-100 text-green-600",
  "dark-green": "bg-green-100 text-green-900",
  "light-blue": "bg-light-blue-100 text-light-blue-900",
  violet: "bg-violet-100 text-violet-800",
  turquoise: "bg-turquoise-800 text-white",
};

export const sizes: BadgeSizeObject = {
  basic: "px-2.5 py-0.5 text-xs",
  large: "px-3 py-0.5 text-sm",
};

const Badge: FC<BadgeProps> = ({
  children,
  additionalClasses,
  size = "basic",
  colour,
  link,
  onRemove,
  openicon = false,
  ...props
}) => {
  const pickedColor = colors[colour];

  if (!pickedColor) {
    console.error(BADGE_ERROR_MESSAGE);
    return null;
  }

  const pickedSize = sizes[size];

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full font-medium",
        pickedColor,
        pickedSize,
        additionalClasses
      )}
      {...props}
    >
      {link ? (
        <a href={link} target="noreferrer" rel="noreferrer">
          <div className="flex flex-row space-x-2">
            <div>{children}</div>
            {openicon && (
              <div>
                <HeroIcons.ArrowTopRightOnSquareIcon
                  fill="currentColor"
                  height={14}
                  width={14}
                ></HeroIcons.ArrowTopRightOnSquareIcon>
              </div>
            )}
          </div>
        </a>
      ) : (
        <>{children}</>
      )}
      {onRemove && (
        <button
          type="button"
          className={`ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-${pickedColor} focus:outline-none`}
          onClick={onRemove}
        >
          <span className="sr-only">Remove small option</span>
          <svg
            className="h-2 w-2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M1 1l6 6m0-6L1 7"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Badge;
