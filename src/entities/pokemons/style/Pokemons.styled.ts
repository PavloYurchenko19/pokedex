import styled from "styled-components";
import {CardStyledProps} from "../model/model.ts";

export const ContainerCard = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 425px) {
    width: 90%;
  }
`;


export const Card = styled.div<CardStyledProps>`
  display: flex;
  flex-direction: column;
  flex: 1 0 30%;
  min-width: 150px;
  padding: 10px 15px;
  box-shadow: 0 8px 22px white;
  border-radius: 10px;
  justify-content: space-between;
  transition: all .5s ease;
  cursor: pointer;

  @media (max-width: 425px) {
    flex: 0 0 100%;
  }
  
  img {
    display: block;
    width: 100%;
    max-height: 200px;
    position: relative;
    margin: 20px auto;
  }
  
  &:hover{
   scale: 1.05;
    box-shadow: 0 8px 22px ${props => props.color ?? 'white'};
  }
`;


export const PokeName = styled.div`
  text-align: center;
  font-weight: 600;
`;

export const Types = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0 40px 0;
  flex-wrap: wrap;
  gap: 10px;

  span {
    font-size: 12px;
    letter-spacing: 0.4px;
    font-weight: 600;
    padding: 5px 20px;
    border-radius: 20px;
    background-color: #ffffff;
    color: black;
  }
`;

export const LoadMoreButton = styled.button`
  display: inline-block;
  margin: 20px 0;
  padding: 10px 20px;
  border: none;
  background: radial-gradient(#e03131, #804831);
  border-radius: 10px;
  width: 140px;
  cursor: pointer;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    background: radial-gradient(circle, #ff5555, #ffffff);
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const PokemonsWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ImagePokemon = styled.img`
  width: 120px;
  height: 120px;
`
export const MainWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`