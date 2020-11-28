import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Header = ({ toggleBar }) => {
  return (
    <HeaderContainer>
      <Items>
        <LeftItem>
          <svg
            width="80"
            height="64"
            viewBox="0 0 80 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.9798 42.8137H0.606079V63.9999H77.9798V42.8137Z"
              fill="#359444"
            />
            <path
              d="M7.67676 14.1242L0.808081 13.0208C3.0303 20.0828 10.7071 22.069 10.7071 28.6897C10.7071 31.338 9.69696 32.2208 7.87878 32.2208C6.0606 32.2208 5.0505 31.338 5.0505 28.6897V26.0415H0V28.2483C0 34.207 2.62626 37.5173 8.0808 37.5173C13.5353 37.5173 16.1616 34.207 16.1616 28.2483C15.9596 20.7449 10.7071 17.8759 7.67676 14.1242Z"
              fill="#359444"
            />
            <path
              d="M24.4445 16.5517L18.99 15.6689V37.0758H33.1314V31.7793H24.4445V16.5517Z"
              fill="#359444"
            />
            <path
              d="M35.5555 18.0967V37.076H40.808V18.9794L35.5555 18.0967Z"
              fill="#359444"
            />
            <path
              d="M55.1516 28.4692C55.1516 31.1174 54.1414 32.0002 52.3233 32.0002C50.7071 32.0002 49.495 31.1174 49.495 28.4692V20.083L44.2424 19.2002V27.8071C44.2424 33.7657 46.8687 37.0761 52.1212 37.0761C57.3738 37.0761 60.2021 33.7657 60.2021 27.8071V22.9519H55.1516V28.4692Z"
              fill="#359444"
            />
            <path
              d="M68.8888 23.1726L63.6362 22.2898V37.076H78.1818V31.7795H68.8888V23.1726Z"
              fill="#359444"
            />
            <path
              d="M7.47469 8.82758C7.47469 6.17931 8.48479 5.07586 10.1009 5.07586C11.7171 5.07586 12.7272 6.17931 12.7272 8.82758V10.3724H17.7777V9.26896C17.7777 3.31035 15.1515 0 9.89893 0C4.6464 0 2.02014 3.31035 2.02014 9.26896C2.02014 10.8138 2.22216 12.1379 2.6262 13.4621L9.49489 14.5655C8.28277 12.8 7.47469 11.0345 7.47469 8.82758Z"
              fill="#359444"
            />
            <path
              d="M26.2627 0.220947H21.01V15.8899L26.2627 16.7727V0.220947Z"
              fill="#359444"
            />
            <path
              d="M42.8282 0.220947H37.3737V18.5382L42.8282 19.2003V0.220947Z"
              fill="#359444"
            />
            <path
              d="M51.5153 8.82759C51.5153 6.17931 52.5254 5.07587 54.3435 5.07587C55.9597 5.07587 57.1718 6.17931 57.1718 8.82759V12.8H62.2224V9.26897C62.2224 3.31035 59.5961 0 54.1415 0C48.889 0 46.2627 3.31035 46.2627 9.26897V19.8621L51.5153 20.7448V8.82759Z"
              fill="#359444"
            />
            <path
              d="M70.7071 21.1865H78.1819V15.8899H70.7071V5.5175H80.0001V0.220947H65.4546V22.7313L70.7071 23.3934V21.1865Z"
              fill="#359444"
            />
            <path
              d="M29.0909 49.4346V51.4208C29.0909 54.0691 27.8787 55.3932 25.6565 55.3932H24.6464V61.3518H22.4242V45.4622H25.8585C28.0808 45.4622 29.0909 47.007 29.0909 49.4346ZM24.6464 47.8897V53.1863H25.8585C26.6666 53.1863 27.0707 52.7449 27.0707 51.6415V49.2139C27.0707 48.1104 26.6666 47.6691 25.8585 47.6691H24.6464V47.8897Z"
              fill="#181A1D"
            />
            <path
              d="M30.1011 49.4346C30.1011 46.7863 31.3132 45.4622 33.5354 45.4622C35.7576 45.4622 36.9697 47.007 36.9697 49.4346V57.6001C36.9697 60.2484 35.7576 61.5725 33.5354 61.5725C31.3132 61.5725 30.1011 60.0277 30.1011 57.6001V49.4346ZM32.3233 57.8208C32.3233 58.9242 32.7273 59.3656 33.5354 59.3656C34.3435 59.3656 34.7475 58.9242 34.7475 57.8208V49.2139C34.7475 48.1104 34.3435 47.6691 33.5354 47.6691C32.7273 47.6691 32.3233 48.1104 32.3233 49.2139V57.8208Z"
              fill="#181A1D"
            />
            <path
              d="M38.3838 45.4622H40.6061V61.3518H38.3838V45.4622Z"
              fill="#181A1D"
            />
            <path
              d="M44.4445 49.876V61.3518H42.4243V45.4622H45.2526L47.6768 54.9518V45.4622H49.697V61.3518H47.2728L44.4445 49.876Z"
              fill="#181A1D"
            />
            <path
              d="M50.5051 45.4622H57.5758V47.6691H55.1516V61.3518H52.9294V47.6691H50.5051V45.4622Z"
              fill="#181A1D"
            />
          </svg>
        </LeftItem>
        <RightItems>
          <Contacts>
            <Number>+7(999)777-55-55 </Number>
            <Text>Перезвоните мне</Text>
          </Contacts>
          <Icon>
            <IconButton onClick={toggleBar}>
              <svg
                width="32"
                height="25"
                viewBox="0 0 32 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="11" width="32" height="3" fill="#359444" />
                <rect width="32" height="3" fill="#359444" />
                <rect y="22" width="32" height="3" fill="#359444" />
              </svg>
            </IconButton>
          </Icon>
        </RightItems>
      </Items>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 18px;
`;
const Items = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
`;
const LeftItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RightItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Icon = styled.div`
  margin-top: -10px;
`;
export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  font-family: Inter, serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Number = styled.div`
  color: white;
  font-weight: 700;
`;
export const Text = styled.div`
  color: #676767;
  text-decoration: underline;
  :hover {
    color: white;
  }
`;
