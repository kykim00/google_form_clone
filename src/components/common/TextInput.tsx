import styled from "styled-components";

interface TextInputStyledProps {
  width?: string;
  fontSize?: string;
  border?: boolean;
  disabled?: boolean;
  optionId?: number;
}

interface TextInputProps extends TextInputStyledProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const TextInput = ({
  onChange,
  value,
  width = "100%",
  fontSize = "16px",
  border = false,
  placeholder,
  disabled = false,
  optionId,
}: TextInputProps) => {
  return (
    <>
      <Input
        onChange={onChange}
        value={value}
        width={width}
        fontSize={fontSize}
        border={border}
        placeholder={placeholder}
        disabled={disabled}
        name={optionId?.toString()}
      />
    </>
  );
};

const Input = styled.input<TextInputStyledProps>`
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-bottom: ${({ border }) => (border ? "1px solid #e6e6e6" : "none")};
  box-sizing: border-box;
  line-height: 135%;
  &:hover {
    outline: 0;
  }
  &:focus {
    border: none;
    outline: none;
    transition: 0.1s ease;
    border-bottom: 2px solid ${({ theme }) => theme.colors.purple};
  }
  ${({ disabled }) => disabled && `border-bottom: 1px solid #ccc;`}
`;
