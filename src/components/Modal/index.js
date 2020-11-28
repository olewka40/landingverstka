import React from "react";
import styled from "styled-components";
import {
  TextField,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Green } from "../styled";
import { Button } from "../FirstSlide";
export const Modal = ({ toggleModal }) => {
  return (
    <ModalContainer>
      <ModalInfo>
        <Title>
          <First>
            Открой <Green>  Slice Point </Green>
          </First>
          <div>в своём городе</div>
        </Title>
        <InputField>
          <Input
            disableUnderline={true}
            placeholder="Имя"
            startAdornment={
              <InputAdornment position="start">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.5C10.7312 10.5 10.5125 10.4531 9.74375 10.7125C9.19687 10.8969 8.60938 11 8 11C7.39062 11 6.80312 10.8969 6.25625 10.7125C5.4875 10.4531 5.27187 10.5 4 10.5C1.79063 10.5 0 12.2906 0 14.5V15C0 15.5531 0.446875 16 1 16H15C15.5531 16 16 15.5531 16 15V14.5C16 12.2906 14.2094 10.5 12 10.5ZM14.5 14.5H1.5C1.5 13.8313 1.75938 13.2031 2.23125 12.7312C2.70312 12.2594 3.33125 12 4 12C5.28438 12 5.28125 11.9656 5.775 12.1313C6.49375 12.375 7.24375 12.5 8 12.5C8.75625 12.5 9.50625 12.375 10.225 12.1313C10.7188 11.9625 10.7156 12 12 12C13.3781 12 14.5 13.1219 14.5 14.5ZM8 10C10.7625 10 13 7.7625 13 5C13 2.2375 10.7625 0 8 0C5.2375 0 3 2.2375 3 5C3 7.7625 5.2375 10 8 10ZM8 1.5C9.93125 1.5 11.5 3.06875 11.5 5C11.5 6.93125 9.93125 8.5 8 8.5C6.06875 8.5 4.5 6.93125 4.5 5C4.5 3.06875 6.06875 1.5 8 1.5Z"
                    fill="#359444"
                  />
                </svg>
              </InputAdornment>
            }
          />
          <hr />
        </InputField>
        <InputField>
          <Input
            disableUnderline={true}
            placeholder="+7(___)___-__-__"
            startAdornment={
              <InputAdornment position="start">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1327 10.3125L11.958 8.95157C11.6731 8.83037 11.3565 8.80475 11.0557 8.87855C10.7549 8.95235 10.4861 9.12159 10.2896 9.36094L9.26775 10.6109C7.62851 9.7175 6.2812 8.37094 5.38684 6.73219L6.63683 5.71032C6.87617 5.51357 7.04539 5.24464 7.11918 4.94372C7.19298 4.64281 7.16737 4.3261 7.04621 4.04095L5.68747 0.868452C5.55632 0.55971 5.32053 0.307085 5.02155 0.154995C4.72258 0.00290402 4.37955 -0.0389148 4.05279 0.0368906L1.10937 0.715327C0.793547 0.787002 0.511564 0.964145 0.309903 1.21756C0.108242 1.47097 -0.00106151 1.78553 7.77134e-06 2.10939C7.77134e-06 9.805 6.23996 16.0031 13.8924 16C14.2162 16.001 14.5307 15.8916 14.784 15.6898C15.0373 15.4881 15.2143 15.2061 15.2858 14.8903L15.964 11.9459C16.0387 11.6194 15.9964 11.277 15.8445 10.9785C15.6926 10.68 15.4407 10.4443 15.1327 10.3125ZM13.833 14.5028C7.03371 14.4716 1.53125 8.96875 1.5 2.16564L4.33404 1.51251L5.64934 4.58188L3.52154 6.32282C4.97122 9.41656 6.58996 11.03 9.67775 12.4791L11.418 10.3506L14.4865 11.6666L13.833 14.5028Z"
                    fill="#359444"
                  />
                </svg>
              </InputAdornment>
            }
          />
          <hr />
        </InputField>

        <InputField>
          <Input
            disableUnderline={true}
            placeholder="Город"
            startAdornment={
              <InputAdornment position="start">
                <svg
                  width="12"
                  height="17"
                  viewBox="0 0 12 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8929 7.14534C10.6587 11.4473 5.92751 16.7271 5.92751 16.7271C5.92751 16.7271 1.88203 11.3561 0.544969 8.64452C-1.25835 5.00739 1.68319 1.13559 5.42011 0.75754C8.34794 0.457704 11.1455 2.40012 11.886 5.229C12.0986 5.90689 11.9614 6.78684 11.8929 7.14534ZM5.96179 15.0258C6.31149 14.5826 6.58575 14.2371 6.84631 13.8916C8.15595 12.1578 9.41073 10.3979 10.357 8.4555C11.0838 6.96935 11.1386 5.50277 10.2473 4.08181C9.12961 2.30886 7.42228 1.61142 5.28983 1.85259C2.05345 2.21109 0.325553 5.46366 1.3952 7.8102C1.86146 8.84007 2.37572 9.8569 2.99282 10.8086C3.91163 12.223 4.93328 13.5788 5.96179 15.0258Z"
                    fill="#359444"
                  />
                  <path
                    d="M8.99997 6.74209C8.99246 8.34358 7.5732 9.73454 5.96621 9.72702C4.39676 9.7195 2.99252 8.29095 3.00003 6.71201C3.00754 5.11053 4.4268 3.71956 6.03379 3.72708C7.59573 3.72708 9.00748 5.15564 8.99997 6.74209ZM7.79848 6.74209C7.80599 5.67443 7.06257 4.92256 5.98874 4.92256C4.96747 4.92256 4.21654 5.65939 4.20152 6.68194C4.1865 7.7496 4.92241 8.50899 5.98874 8.52403C7.02502 8.53906 7.79097 7.78719 7.79848 6.74209Z"
                    fill="#359444"
                  />
                </svg>
              </InputAdornment>
            }
          />
          <hr />
        </InputField>

        <StyledButton>Отправить</StyledButton>

        <Warning>
          Нажимая на кнопку, вы даете согласие <br />
          на 
          <u>обработку персональных данных</u>
        </Warning>
      </ModalInfo>
      <Close>
        <IconButton onClick={toggleModal}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="15.8687"
              y="1.65649"
              width="20"
              height="2"
              transform="rotate(135 15.8687 1.65649)"
              fill="white"
            />
            <rect
              x="1.41406"
              width="20"
              height="2"
              transform="rotate(45 1.41406 0)"
              fill="white"
            />
          </svg>
        </IconButton>
      </Close>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  #root {
  }
  width: 100%;
  margin: 0;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0px;
  left: 0px;
  z-index: 1;
  backdrop-filter: brightness(0.5);
  justify-content: center;
  align-items: center;
`;
const ModalInfo = styled.div`
  width: 508px;
  height: 540px;
  background-color: #181a1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 100%;
  font-size: 40px;
  display: flex;
  color: white;
  font-family: "Bebas Neue Regular", serif;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  flex-direction: column;
`;
const First = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Close = styled.div`
  margin-top: 32px;
`;
const Warning = styled.div`
  color: #bfbfbf;
  font-family: TRY Clother, serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;

  > u {
    cursor: pointer;
  }
`;

const InputField = styled.div`
  ::placeholder {
    color: #ffffff;
    font-size: 1.5em;
  }
  input {
    color: white;
  }
  margin-top: 12px;
  margin-bottom: 12px;
`;
const StyledButton = styled(Button)`
  width: 225px;
  height: 55px;
  margin-top: 32px;
  margin-bottom: 16px;
`;
