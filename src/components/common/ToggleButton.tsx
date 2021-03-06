import styled from "styled-components";

interface IProp extends React.InputHTMLAttributes<HTMLInputElement> {
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export const Toggle = ({ onToggle, checked, ...rest }: IProp) => {
  return (
    <Container>
      <label>필수</label>
      <ToggleButton
        type="checkbox"
        onChange={onToggle}
        checked={checked}
        {...rest}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
  width: 120px;
  display: flex;
  align-items: center;
  label {
    margin-right: 20px;
  }
`;
const ToggleButton = styled.input`
  all: unset;
  width: 40px;
  height: 14px;
  border-radius: 2em;
  display: flex;
  align-items: center;
  /* toggle off */
  background: ${({ theme }) => theme.colors.toggleOff2};
  ::after {
    content: "";
    z-index: 10;
    left: 0;
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.toggleOff1};
    position: relative;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  }
  /* toggle on */
  &:checked {
    background-color: ${({ theme }) => theme.colors.toggleOn2};
    ::after {
      content: "";
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      left: 20px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.toggleOn1};
      transition: all 0.2s ease-in-out;
    }
  }
`;
