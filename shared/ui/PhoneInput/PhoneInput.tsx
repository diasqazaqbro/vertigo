import "react-phone-input-2/lib/style.css";

import React, { FC } from "react";
import DefaultPhoneInput, { PhoneInputProps } from "react-phone-input-2";
import styled from "styled-components";

export type BaseInputProps = {
  label?: string;
  error?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: (
    value: string,
    country: any,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void;
} & PhoneInputProps;

const PhoneInput: FC<BaseInputProps> = ({
  label,
  disabled,
  error,
  onKeyDown,
  onChange,
  ...inputProps
}) => {
  const countries = ["kz", "ua", "de", "uz", "kg", "az", "tj", "ge"];

  const formatPhoneNumber = (input: string): string => {
    let normalizedInput = input;

    if (normalizedInput.startsWith("+7")) {
      normalizedInput = normalizedInput.slice(2);
    } else if (normalizedInput.startsWith("8")) {
      normalizedInput = normalizedInput.slice(1);
    }

    let phoneNumber = normalizedInput.replace(/\D/g, "");

    while (phoneNumber.startsWith("7") && phoneNumber.length > 10) {
      phoneNumber = phoneNumber.slice(1);
    }

    if (phoneNumber.length > 10) {
      phoneNumber = phoneNumber.slice(-10);
    }

    if (phoneNumber.length < 10) {
      return `+7${phoneNumber}`;
    }

    phoneNumber = `7${phoneNumber}`;

    return phoneNumber;
  };

  const handleOnPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = event.clipboardData.getData("Text");

    const formattedNumber = formatPhoneNumber(pastedData);

    event.preventDefault();

    const inputElement = event.target as HTMLInputElement;

    inputElement.value = formattedNumber;

    if (onChange) {
      onChange(formattedNumber, {}, event as any, formattedNumber);
    }
  };

  const handleOnChange = (
    value: string,
    data: any,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => {
    if (onChange) {
      onChange(value, data, event, formattedValue);
    }
  };

  return (
    <Root>
      <StylePhoneInput
        country="kz"
        isDisabled={!!disabled}
        countryCodeEditable
        onlyCountries={countries}
        preserveOrder={["onlyCountries", "preferredCountries"]}
        placeholder="+7 (___) ___-__-__"
        isValid={!error}
        onKeyDown={onKeyDown}
        inputProps={{
          onPaste: handleOnPaste,
        }}
        onChange={handleOnChange}
        masks={{ kz: "(...) ... .. .." }}
        {...inputProps}
      />
      {error && <Error>{error}</Error>}
    </Root>
  );
};

export default PhoneInput;

const Root = styled.div`
  position: relative;
  width: 100%;
`;

const Error = styled.div`
  font-weight: 400;
  font-size: 10px;

  color: ${({ theme: { colors } }) => colors.additional.red};
  margin-top: 2px;
`;

const StylePhoneInput = styled(DefaultPhoneInput)<{ isDisabled: boolean }>`
  && {
    border-radius: 11px;
    border: 1px solid ${({ theme: { colors } }) => colors.additional.purple};

    cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "text")};

    margin-bottom: 12px;
    &::placeholder {
      color: rgba(86, 86, 86, 0.7);
    }
    .form-control {
      border: none;
      border-radius: 12px;
      padding: 16px;

      width: 100% !important;
      height: 44px !important;
      padding-left: 20px !important;
      background-color: ${({ theme: { colors } }) => colors.greyScale[0]};
      font-weight: 500;
      font-size: 14px;
      text-transform: uppercase;
    }

    &::after {
      content: "";
      left: -1px;
      top: 0;
      border-radius: 5px;
      width: 401px;
      background: #f6f7f9;
      display: ${({ isDisabled }) => (isDisabled ? "block" : "none")};
      position: absolute;
      opacity: 0.6;
      height: 40px;
    }

    .flag-dropdown {
      display: none;
    }

    .invalid-number {
      background-color: ${({ theme: { colors } }) =>
        colors.greyScale[10]} !important;
      border: 1px solid ${({ theme: { colors } }) => colors.additional.red} !important;
    }
  }
`;
