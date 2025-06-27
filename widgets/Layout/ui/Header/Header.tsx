import SvgTg from "@shared/icons/SvgTg";
import SvgWhatsapp from "@shared/icons/SvgWhatsapp";
import { contactLink, Routes } from "@shared/consts/routes";
import { Button, IconButton, Logo } from "@shared/ui";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useClientSize, useToggle } from "@shared/lib/hooks";
import SvgBurgerOpen from "@shared/icons/SvgBurgerOpen";
import Image from "next/image";
import { ContactsModal } from "@widgets/ContactsModal";
import { useRouter } from "next/router";

const Header = () => {
  const { getIsBreakpoint } = useClientSize();
  const isWidthMd = getIsBreakpoint("md");
  const isWidthSm = getIsBreakpoint("s");

  const router = useRouter();

  const { toggle, isOpened } = useToggle();
  const { toggle: toggleModal, isOpened: isOpenedModal } = useToggle();

  return (
    <>
      <ContactsModal onClose={toggleModal} isVisible={isOpenedModal} />
      <Root>
        <InnerContainer>
          <Logo />
          {!isWidthMd && (
            <Navigation>
              {Object.values(Routes).map(({ path, name }) => (
                <NavItem key={path} href={path}>
                  {name}
                </NavItem>
              ))}
            </Navigation>
          )}

          <Buttons>
            {!isWidthSm && (
              <Button onClick={toggleModal} text="ОБСУДИТЬ ПРОЕКТ" />
            )}

            <IconButton
              onClick={() => router.push(contactLink.tg)}
              IconComponent={SvgTg}
            />
            <IconButton
              onClick={() => router.push(contactLink.whatsApp)}
              IconComponent={SvgWhatsapp}
            />
            {isWidthMd && (
              <IconButton onClick={toggle} IconComponent={SvgBurgerOpen} />
            )}
          </Buttons>
        </InnerContainer>
      </Root>
      {isWidthMd && isOpened && (
        <Burger>
          <Background>
            <Bubbles>
              <StyledImage
                src="/assets/bubble2.png"
                alt="Bubbles"
                layout="fill"
                objectFit="contain"
                priority
              />
            </Bubbles>
          </Background>
          <BurgerContainer>
            {Object.values(Routes).map(({ path, name }) => (
              <ResponsiveNavItem onClick={toggle} key={path} href={path}>
                {name}
              </ResponsiveNavItem>
            ))}
          </BurgerContainer>
        </Burger>
      )}
    </>
  );
};

const Root = styled.div`
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1200px;
  margin-right: 500px;
  z-index: 10;
  width: 100%;
  border-radius: 84px;
  padding: 8px 16px 8px 24px;
  width: 100%;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid ${({ theme: { colors } }) => colors.additional.purpleLight};
  @media (max-width: 1200px) {
    left: auto;
    right: auto;
    transform: translateX(1%);
    width: 98%;
    top: 15px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavItem = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.greyScale[100]};
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Burger = styled.div`
  top: -20px;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  position: absolute;
  background-color: ${({ theme: { colors } }) => colors.mainColor.background};
`;

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 48px;
  margin-top: 50px;
  z-index: 10;
  position: relative;
`;

const Background = styled.div`
  position: relative;
  @media (max-width: 730px) {
    display: none;
  }
  z-index: 10;
`;

const Bubbles = styled.div`
  position: absolute;
  width: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -80px;
  top: 90px;
`;

const StyledImage = styled(Image)``;

const ResponsiveNavItem = styled(Link)`
  font-weight: 600;
  font-size: 48px;
  text-transform: uppercase;
  color: #282828;
`;

export default Header;
