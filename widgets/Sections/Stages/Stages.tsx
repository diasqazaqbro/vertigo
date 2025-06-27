import { BreakpointsEnum } from "@shared/consts/types";
import { useClientSize } from "@shared/lib/hooks";
import React, { useState } from "react";
import styled from "styled-components";

const stages = [
  {
    id: 1,
    title: "Начало",
    description: [
      "Создание технического задания",
      "Расчет стоимости проекта",
      "Заключение договора",
    ],
  },
  {
    id: 2,
    title: "Аналитика",
    description: [
      "Анализ рынка и конкурентов",
      "Разработка стратегии проекта",
      "Определение ключевых метрик",
    ],
  },
  {
    id: 3,
    title: "Дизайн",
    description: [
      "Создание прототипов",
      "Разработка UI/UX-дизайна",
      "Согласование дизайна с заказчиком",
    ],
  },
  {
    id: 4,
    title: "Разработка",
    description: [
      "Программирование серверной и клиентской части",
      "Интеграция с внешними сервисами",
      "Тестирование и исправление ошибок",
    ],
  },
];

const Stages = () => {
  const [active, setActive] = useState<number>(1);

  const { getIsBreakpoint } = useClientSize();
  const isWidthSm = getIsBreakpoint("s");

  return (
    <div className="container">
      <Root>
        <Wrapper>
          <TextContainer>
            <Category>[ Этапы работы ]</Category>
            <Title>
              Шаг за шагом мы приближаемся к созданию вашего продукта
            </Title>
          </TextContainer>
          <Container>
            {stages.map((stage, index) => (
              <Item
                style={{
                  marginTop: index % 2 !== 0 && !isWidthSm ? "60px" : "0px",
                }}
                key={stage.id}
                active={active === stage.id}
                onClick={() => setActive(stage.id)}
              >
                <Stage>[ {stage.id} Шаг ]</Stage>
                <StageTitle>{stage.title}</StageTitle>
                <Description>
                  {stage.description.map((text, index) => (
                    <li key={index}>- {text}</li>
                  ))}
                </Description>
              </Item>
            ))}
          </Container>
        </Wrapper>
      </Root>
    </div>
  );
};

const Root = styled.section`
  width: 100%;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  height: 100vh;
`

const TextContainer = styled.div`
`;

const Category = styled.span`
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme: { colors } }) => colors.additional.category};
  margin-right: 15%;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 40px;
  text-transform: uppercase;
  color: #282828;
  margin-bottom: 40px;
  @media (max-width: 990px) {
    font-size: 32px;
  }
  @media (max-width: 642px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0px 40px;
  width: 80%;
  margin: 40px auto;
  @media (max-width: 980px) {
    width: 100%;
  }
  @media (max-width: 790px) {
    gap: 0px 20px;
  }
  @media (max-width: ${BreakpointsEnum.s}px) {
    gap: 20px;
  }
`;

const Item = styled.div<{ active: boolean }>`
  margin-top: 20px;
  border-radius: 32px;
  width: 47%;
  height: 100%;
  padding: 36px;
  background: ${({ active }) => (active ? "#fff" : "#F5F5F5")};
  box-shadow: ${({ active }) => (active ? "0 0 130px 30px #fff" : "none")};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 790px) {
    padding: 24px;
  }
  @media (max-width: ${BreakpointsEnum.s}px) {
    width: 100%;
  }
`;

const Stage = styled.div`
  font-weight: 300;
  font-size: 18px;
  text-transform: uppercase;
  color: #7724e8;
`;

const StageTitle = styled.h3`
  font-weight: 500;
  font-size: 44px;
  text-transform: uppercase;
  color: #282828;
  margin-bottom: 24px;
  margin-top: 28px;
  @media (max-width: 740px) {
    font-size: 34px;
  }
`;

const Description = styled.ul`
  font-weight: 300;
  font-size: 18px;
  text-transform: uppercase;
  color: #282828;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 6px;
  }
  @media (max-width: 740px) {
    font-size: 14px;
  }
`;

export default Stages;
