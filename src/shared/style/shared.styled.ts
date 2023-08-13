import styled, {keyframes} from "styled-components";
import {ScrollToTopButtonProps} from "../model/model.ts";

export const HeaderMain = styled.header`
  border: 1px solid silver;
  width: 40%;
  margin: 20px auto; 
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
  
  
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 140px);
  position: fixed;
  background: transparent;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const Loader = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  background: linear-gradient(to bottom, rgb(254, 0, 1) 50%, white 50%);
  border-radius: 50%;
  border: 8px solid black;
  animation: ${spin} 1s linear infinite;

  &::before {
    content: '';
    position: absolute;
    height: 8px;
    width: 85px;
    background: black;
    top: 50%;
    transform: translateY(-50%);
  }

  &::after {
    content: '';
    position: absolute;
    height: 38px;
    width: 38px;
    border-radius: 50%;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 0 0 0 8px black, inset 0 0 0 10px white, inset 0 0 0 12px black;
  }
`;


export const ScrollToTopButton = styled.button<ScrollToTopButtonProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: #ff1f1f;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ff5555;
    transform: scale(1.05);
  }
`;