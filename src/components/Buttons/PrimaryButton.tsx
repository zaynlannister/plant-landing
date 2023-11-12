import styled from "styled-components";

const PrimaryButton = (props: any) => {
  return <StyledButton>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  position: relative;
  background-color: #081800;
  color: #ffff;
  font-weight: 600;
  padding: 12px 16px;

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    background-color: #418a1c;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 150ms all;
  }

  &:hover {
    &::after {
      top: 7px;
      left: 7px;
    }
  }
`;

export default PrimaryButton;
