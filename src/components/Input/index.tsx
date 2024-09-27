import React from "react";
import { CalendarBlank, Clock, Tag } from "@phosphor-icons/react";

import theme from "../../themes";

import { BackgroundInput, Error, InputText } from "./styles";

interface InputProps {
  placeholder: string;
  iconType: "tag" | "calendar" | "clock";
  error: string | undefined;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ iconType, placeholder, error, ...rest }, ref) => (
    <>
      <BackgroundInput>
        {iconType === "tag" && (
          <Tag size={24} color={theme.colors.grayscale.zinc_400} />
        )}
        {iconType === "calendar" && (
          <CalendarBlank size={24} color={theme.colors.grayscale.zinc_400} />
        )}
        {iconType === "clock" && (
          <Clock size={24} color={theme.colors.grayscale.zinc_400} />
        )}

        <InputText placeholder={placeholder} ref={ref} {...rest} />
      </BackgroundInput>

      {!!error && <Error>{error}</Error>}
    </>
  )
);
