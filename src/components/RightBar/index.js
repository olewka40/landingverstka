import React from "react";
import styled from "styled-components";
import { IconButton, Drawer } from "@material-ui/core";
import { Button } from "../FirstSlide";
import { Contacts, Number, Text } from "../Header";

export const RightBar = ({ toggleBar, openBar }) => {
  return (
    <Drawer open={openBar} anchor="right">
      <Menu>
        <Info>
          <Close>
            <IconButton onClick={toggleBar}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="30.9563"
                  height="2.90215"
                  transform="matrix(0.705376 -0.708833 0.705376 0.708833 0.117065 21.9429)"
                  fill="#359444"
                />
                <rect
                  width="30.9563"
                  height="2.90215"
                  transform="matrix(0.705376 0.708833 -0.705376 0.708833 2.04712 0)"
                  fill="#359444"
                />
              </svg>
            </IconButton>
          </Close>

          <Links>
            <Texts> О компании</Texts>
            <Texts>Продукция</Texts>
            <Texts>Форматы открытия</Texts>
            <Texts>Финансовая модель</Texts>
            <Texts>Предложения по локациям</Texts>
            <Texts>Локации</Texts>
            <Texts>Ваканcии</Texts>
            <Texts>Для СМИ</Texts>
          </Links>
          <Button>Подать заявку</Button>
          <Footer>
            <Contacts>
              <Number>+7(999)777-55-55 </Number>
              <Text>Перезвоните мне</Text>
            </Contacts>
          </Footer>
        </Info>
      </Menu>
    </Drawer>
  );
};

const Menu = styled.div`
  width: 516px;
  height: 100%;
  background-color: #181a1d;
`;

const Info = styled.div`
  padding-left: 136px;
  padding-right: 156px;
`;
const Close = styled.div`
  margin-top: 80px;
  margin-left: 200px;
`;
const Links = styled.div``;
export const Texts = styled.div`
  color: #676767;
  font-family: TRY Clother;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin: 12px;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  :hover {
    color: white;
  }
  :last-child {
    margin-bottom: 123px;
  }
`;
const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > div {
    margin: 0;
  }
`;
