import { contactLink } from "@shared/consts/routes";
import SvgTg from "@shared/icons/SvgTg";
import SvgWhatsapp from "@shared/icons/SvgWhatsapp";
import { useClientSize, useToggle } from "@shared/lib/hooks";
import { Button, IconButton } from "@shared/ui";
import { ContactsModal } from "@widgets/ContactsModal";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Trans, useTranslation } from "next-i18next";
import styled from "styled-components";

const Welcome = () => {
  const { getIsBreakpoint } = useClientSize();
  const isWidthMd = getIsBreakpoint("md");
  const { t } = useTranslation("common");

  const router = useRouter();

  const { toggle: toggleModal, isOpened: isOpenedModal } = useToggle();

  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ae";

  return (
    <Root id="welcome">
      <ContactsModal onClose={toggleModal} isVisible={isOpenedModal} />

      <Flex>
        <TopContainer>
          <Bubbles>
            <StyledImage
              src={
                isArabic
                  ? isWidthMd
                    ? "/assets/bubbleMobile-ae.png"
                    : "/assets/bubble1-ae.png"
                  : isWidthMd
                  ? "/assets/bubbleMobile.png"
                  : "/assets/bubble1.png"
              }
              alt="Bubbles"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Bubbles>
        </TopContainer>
        <Wrapper className="container">
          <BottomContainer>
            <Buttons>
              <Button
                onClick={() => router.push(contactLink.whatsApp)}
                text={t("welcome_discuss")}
              />
              <IconButton
                onClick={() => router.push(contactLink.tg)}
                IconComponent={SvgTg}
              />
              <IconButton
                onClick={() => router.push(contactLink.whatsApp)}
                IconComponent={SvgWhatsapp}
              />
            </Buttons>
            <Description>
              <Trans
                i18nKey="welcome_description"
                components={{ br: <br /> }}
              />
            </Description>
          </BottomContainer>
        </Wrapper>
      </Flex>
    </Root>
  );
};

const Root = styled.section`
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const TopContainer = styled.div``;

const Wrapper = styled.div`
  margin-bottom: 20px;
  @media (max-width: 990px) {
    position: relative;
    bottom: 10%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  @media (max-width: 990px) {
    flex-direction: column-reverse;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Description = styled.div`
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  color: #696969;
  @media (max-width: 990px) {
    text-align: center;
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

const Bubbles = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  max-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default Welcome;
