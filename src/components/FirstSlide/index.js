import React from "react";
import styled from "styled-components";
import { Green } from "../styled";
import firstpng from "../images/111 1.png";

export const InvestPP = ({ toggleModal }) => {
  return (
    <InvestPPContainer>
      <Info>
        <Title>
          Инвестируй <br />
          <Green> в правильное питание</Green>
        </Title>
        <List>
          <Item>
            <Image>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="16"
                  y="0.707107"
                  width="21.6274"
                  height="21.6274"
                  transform="rotate(45 16 0.707107)"
                  stroke="white"
                />
                <rect
                  x="16"
                  y="10"
                  width="8"
                  height="8"
                  transform="rotate(45 16 10)"
                  fill="white"
                />
              </svg>
            </Image>
            <Description>
              Откройте корнер или сеть точек со здоровой едой Slice Point{" "}
            </Description>
          </Item>
          <Item>
            <Image>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="16"
                  y="0.707107"
                  width="21.6274"
                  height="21.6274"
                  transform="rotate(45 16 0.707107)"
                  stroke="white"
                />
                <rect
                  x="16"
                  y="10"
                  width="8"
                  height="8"
                  transform="rotate(45 16 10)"
                  fill="white"
                />
              </svg>
            </Image>
            <Description>
              Еда и напитки - от шеф-поваров ресторанов по демократичным ценам
            </Description>
          </Item>
        </List>

        <Button onClick={toggleModal}>Подать заявку</Button>
      </Info>
      <Images>
        <img width="100%" src={firstpng} />
      </Images>
    </InvestPPContainer>
  );
};

const InvestPPContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Images = styled.div``;
const Title = styled.div`
  text-transform: uppercase;
  font-family: Bebas Neue, serif;
  color: white;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: 0em;
  text-align: left;
`;
const Image = styled.div`
  display: flex;
  flex-direction: row;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const Description = styled.div`
  color: white;

  font-family: TRY Clother, serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  margin-left: 24px;
`;
export const Button = styled.div`
  cursor: pointer;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  font-family: TRY Clother, serif;
  width: 225px;
  height: 70px;
  background-color: #181a1d;
  border: 5px solid #359444;
  margin-top: 51px;
  margin-bottom: 24px;
  :hover {
    background-color: #359444;
  }
`;
