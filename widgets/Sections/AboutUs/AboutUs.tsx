import React from "react";
import { Trans, useTranslation } from "next-i18next";
import styled from "styled-components";

const AboutUs = () => {
  const { t } = useTranslation("common");

  return (
    <div id="about-us" className="container">
      <Root>
        <div>
          <Category>{t("about_us_category")}</Category>
          <Title>{t("about_us_title")}</Title>
          <Container>
            <Subtitle>
              <Trans
                i18nKey="about_us_subtitle"
                components={{
                  highlight: <Highlight />,
                }}
              />
            </Subtitle>
          </Container>
        </div>
      </Root>
    </div>
  );
};

const Root = styled.section`
  width: 100%;
  margin: 280px 0;
  display: flex;
  align-items: center;
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
  font-size: 40px;
  @media (max-width: 990px) {
    font-size: 32px;
  }
  @media (max-width: 642px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  margin-top: 64px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 28px;
  text-transform: uppercase;
  color: #282828;
  width: 70%;
  @media (max-width: 990px) {
    font-size: 20px;
  }
  @media (max-width: 642px) {
    font-size: 18px;
  }
`;

const Highlight = styled.span<{ color?: string }>`
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.additional.purple};
`;

export default AboutUs;
