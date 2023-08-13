import styled from "styled-components";
import {PokemonDetailsContainerProps} from "../../../entities/pokemons/model/model.ts";


export const PokemonDetailsContainer = styled.div<PokemonDetailsContainerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid ${props => props.color};
  border-radius: 10px;
  max-width: 250px;
  font-size: 16px;
  transition: all .7s linear;
`;

export const PokemonImage = styled.img`
  max-width: 100%;
  width: 200px;
  height: 200px;
`;

export const PokemonType = styled.span`
  margin-top: 10px;
`;
export const PokemonName = styled.span`
  font-size: 20px;
`;

export const PokemonStatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  
`;

export const PokemonStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const StatLabel = styled.span`
  font-weight: bold;
`;