import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { InvestPP } from "./components/FirstSlide";
import { Modal } from "./components/Modal";
import "./components/fonts/try_clother.css";
import { RightBar } from "./components/RightBar";
export const App = () => {
  const [open, setOpen] = useState(false);
  const [openBar, setOpenBar] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
  };
  const toggleBar = () => {
    setOpenBar(!openBar);
  };
  console.log(openBar);
  return (
    <>
      <MainContainer>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300&display=swap"
          rel="stylesheet"
        />
        <GlobalStyle />
        <Header toggleBar={toggleBar} />
        <InvestPP toggleModal={toggleModal} />
        <MoreInfo>
          <div>Узнать больше</div>
          <div>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="12.6863"
                y="23.2929"
                width="15.9706"
                height="15.9706"
                transform="rotate(-135 12.6863 23.2929)"
                stroke="white"
              />
              <path
                d="M9.50464 10.9395L12.6866 14.1214L15.8686 10.9395"
                stroke="white"
              />
            </svg>
          </div>
        </MoreInfo>
      </MainContainer>
      {open && <Modal toggleModal={toggleModal} />}
      {openBar && <RightBar openBar={openBar} toggleBar={toggleBar} />}
    </>
  );
};
const GlobalStyle = createGlobalStyle`

html{
  background-color: #181a1d;

}
body{
margin: 0;
height: 100%;
width: 100%;
font-family: Inter sans-serif;

}
#root{
      height: 100%;
  width: 100%;
  background-color:   #181a1d;
}

`;

const MoreInfo = styled.div`
  //font-family: "Bebas Neue Regular";
  //font-family: Inter;
  color: white;
  font-family: "TRY Clother", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    margin: 8px;
  }
`;
const MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: #181a1d;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
