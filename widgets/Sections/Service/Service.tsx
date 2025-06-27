import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ServiceId, services } from "./types";
import SvgArrow from "@shared/icons/SvgArrow";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Service = () => {
  const [active, setActive] = useState<ServiceId>(ServiceId.MOBILE_APPS);
  const { t } = useTranslation("common");

  const current = t(`services.${active}`, { returnObjects: true }) as {
    title: string;
    duration: string;
    image: string;
    description1: string;
    description2: string;
  };

  return (
    <div id="services" className="container">
      <Root>
        <Wrapper>
          <TextContainer>
            <Category>{t("service_category")}</Category>
            <Title>{t("service_title")}</Title>
          </TextContainer>
          <Container>
            <Navigation>
              {Object.values(ServiceId).map((id) => (
                <Item
                  key={id}
                  active={active === id}
                  onClick={() => setActive(id)}
                >
                  <StyledLink href={`#${id}`}>
                    {t(`services.${id}.title`)} <SvgArrow />
                  </StyledLink>
                </Item>
              ))}
            </Navigation>
            <View key={active}>
              <LeftView>
                <Duration>{current?.duration}</Duration>
                <Description1>{current?.description1}</Description1>
              </LeftView>
              <RightView>
                <Bubbles>
                  <StyledImage
                    src={current?.image!}
                    alt="Bubbles"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </Bubbles>
                <Description2>{current?.description2}</Description2>
              </RightView>
            </View>
          </Container>
        </Wrapper>
      </Root>
    </div>
  );
};

// 🔹 Анимация появления контента
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 🔹 Анимация при смене изображения
const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Root = styled.section`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const TextContainer = styled.div`
  margin-top: 140px;
  @media (max-width: 900px) {
    margin-bottom: 40px;
  }
`;

const Category = styled.span`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.additional.category};
  margin-right: 15%;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 40px;
  text-transform: uppercase;
  color: #282828;
  @media (max-width: 990px) {
    font-size: 32px;
  }
  @media (max-width: 777px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    scroll-snap-align: start;
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const Navigation = styled.div`
  width: 37%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Item = styled.div<{ active: boolean }>`
  border-bottom: 1px solid #282828;
  padding: 0px 0px 2px 0px;
  font-weight: 300;
  font-size: 20px;
  text-transform: uppercase;
  color: ${({ active }) => (active ? "#282828" : "rgba(40, 40, 40, 0.5)")};
  display: flex;
  align-items: center;
  margin: 22px 0;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #282828;
    transform: translateX(5px);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const View = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-end;
  position: relative;
  top: -20px;
  animation: ${fadeIn} 0.5s ease;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const LeftView = styled.div`
  width: 50%;
`;

const RightView = styled.div`
  width: 50%;
`;

const Duration = styled.div`
  font-weight: 800;
  font-size: 32px;
  text-transform: uppercase;
  color: #282828;
`;

const Description1 = styled.div`
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  color: #282828;
  margin-top: 40px;
  animation: ${fadeIn} 0.5s ease;
`;

const Bubbles = styled.div`
  position: relative;
  width: 334px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 60px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${scaleIn} 0.4s ease-in-out;
`;

const Description2 = styled.div`
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  color: #282828;
  margin-top: 40px;
  animation: ${fadeIn} 0.5s ease;
`;

export default Service;
