import React, { ButtonHTMLAttributes, FC, ReactNode, SVGProps } from "react";
import styled, { css } from "styled-components";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string | ReactNode;
  isFullWight?: boolean;
  LeftIconComponent?: ReactNode;
  RightIconComponent?: FC<SVGProps<SVGSVGElement>>;
};

const Button: FC<ButtonProps> = ({
  isFullWight = false,
  text,
  disabled,
  RightIconComponent,
  LeftIconComponent,
  ...props
}) => {
  return (
    <Root $isFullWight={isFullWight} $disabled={!!disabled} {...props}>
      <Body>
        {LeftIconComponent && (
          <LeftIconComponentWrapper>
            {LeftIconComponent}
          </LeftIconComponentWrapper>
        )}
        {text}
        {RightIconComponent && (
          <RightIconComponentWrapper>
            <RightIconComponent />
          </RightIconComponentWrapper>
        )}
      </Body>
    </Root>
  );
};

export default Button;

type RootProps = {
  $disabled: boolean;
  $isFullWight: boolean;
};

const Root = styled.button<RootProps>`
  position: relative;
  width: ${({ $isFullWight }) => ($isFullWight ? "100%" : "fit-content")};
  display: flex;
  align-items: center;
  justify-content: center;

  border-width: 0;
  border-style: solid;

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  font-weight: 400;
  font-size: 14px;
  border-radius: 29px;
  padding: 16px;
  color: ${({ theme: { colors } }) => colors.greyScale[0]};

  background-color: ${({ theme: { colors } }) => colors.additional.purple};
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

const IconComponentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftIconComponentWrapper = styled(IconComponentWrapper)`
  margin-right: 16px;
`;

const RightIconComponentWrapper = styled(IconComponentWrapper)`
  margin-left: 8px;
`;
