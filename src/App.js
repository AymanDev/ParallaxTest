import React from "react";
import styled from "styled-components";
import { Background, Parallax } from "react-parallax";

const Wrapper = styled.div`
  width: 100%;
  background: black;
  color: white;
`;

const Section = styled.div`
  position: relative;

  width: 100%;
  height: 500px;
  background: ${props => props.background || "white"};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 7vw;
  font-weight: bolder;
  color: white;

  margin: 0;
`;
const SubText = styled.p`
  font-size: 1vw;
  font-weight: bold;
  color: white;

  margin: 0;
`;

const Block = styled.div`
  position: absolute;

  width: 100px;
  height: fit-content;
  max-width: 100px;
  min-height: 60px;
  padding: 10px;

  text-align: center;

  background: ${props => props.background || "white"};
  color: black;
  z-index: 9999;
`;
const App = ({}) => {
  return (
    <Wrapper>
      <Parallax
        strength={200}
        renderLayer={percentage => (
          <div>
            <Block style={{ left: 500 - percentage * 800, top: 200 }}>
              Какая-то важная информация
            </Block>
            <Block style={{ right: 500 - percentage * 800, top: 200 }}>
              Еще более важная информация
            </Block>
          </div>
        )}
      >
        <Background />
        <Section background="black">
          <Logo>Черный - это строго</Logo>
          <SubText>Какой-то менее важный текст</SubText>
        </Section>
      </Parallax>
      <Parallax
        strength={200}
        renderLayer={percentage => (
          <div>
            <Block
              style={{
                left: percentage * 500,
                bottom: 100
              }}
            >
              Чуть менее важная информация
            </Block>
            <Block
              style={{
                right: percentage * 500,
                bottom: 100
              }}
            >
              А может и нет
            </Block>
          </div>
        )}
      >
        <Background />
        <Section background="green">
          <Logo>Зелененький - это прикольно</Logo>
          <SubText>Не, ну а чо</SubText>
        </Section>
      </Parallax>
      <Parallax
        bgImage={"red"}
        strength={200}
        renderLayer={percentage => (
          <div>
            <Block
              style={{ left: 500 - percentage * 250, bottom: percentage * 200 }}
            >
              Финалочка
            </Block>
            <Block
              style={{
                right: 500 - percentage * 250,
                bottom: percentage * 200
              }}
            >
              ну тут то, точно важная инфа
            </Block>
          </div>
        )}
      >
        <Section background="red">
          <Logo>Красненький</Logo>
          <SubText>Чот не оч прикольный</SubText>
        </Section>
      </Parallax>
    </Wrapper>
  );
};

export default App;
