/* eslint-disable jsx-a11y/no-autofocus */
import Input from "./input";
import Heading from "./headingText";
import VStack from "./vStack";
import ValidatedInput from "./validatedInput";
import { TextShadows } from "types";
import VStackFull from "./vStackFull";

interface InputVStackProps {
  labelSize?: "normal" | "small";
  labelColor?: string;
  labelClassName?: string;
  labelIsCursive?: boolean;
  isValidated?: boolean;
  validationMin?: number;
  validationMax?: number;
  autoFocus?: boolean;
  isRequired?: boolean;
  style?: React.CSSProperties;
  label: string;
  labelShadow?: string;
  isEditable?: boolean;
  className?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputVStack({
  labelColor = "text-col-300",
  labelSize = "normal",
  labelIsCursive = false,
  labelClassName,
  autoFocus = false,
  validationMin,
  validationMax,
  isRequired,
  label,
  style,
  className,
  isValidated,
  name,
  placeholder,
  value,
  defaultValue,
  labelShadow,
  type,
  onChange,
}: InputVStackProps) {
  return (
    <VStackFull
      className={`${className}`}
      align="items-start"
      style={style}
      gap="gap-[0.5vh]"
      tabIndex={-1}
    >
      {labelSize === "small" ? (
        <Heading
          isCursive={labelIsCursive}
          color={labelColor}
          className={`${labelClassName}`}
          layout="text-md"
          text={label}
          tabIndex={-1}
          shadow={labelShadow as TextShadows}
        />
      ) : (
        <>
          <Heading
            isCursive={labelIsCursive}
            color={labelColor}
            className={`${labelClassName}`}
            layout="text-md md:text-lg"
            text={label}
            tabIndex={-1}
            shadow={labelShadow as TextShadows}
          />
        </>
      )}

      {isValidated && validationMax ? (
        <ValidatedInput
          autoFocus={autoFocus}
          isRequired={isRequired}
          min={validationMin}
          max={validationMax}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          className="w-full"
        />
      ) : (
        <Input
          autoFocus={autoFocus}
          required={isRequired}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          type={type}
          onChange={onChange}
          className="w-full"
        />
      )}
    </VStackFull>
  );
}
