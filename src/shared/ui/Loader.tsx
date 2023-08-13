import {LoaderContainer, Loader as LoaderStyled} from "../style/shared.styled.ts";
import React from "react";
import {LoaderPropsI} from "../model/model.ts";

export const Loader:React.FC<LoaderPropsI> = ({isLoading}) => {
    if (!isLoading) return <></>
    return (
        <LoaderContainer>
            <LoaderStyled/>
        </LoaderContainer>
    );
};

