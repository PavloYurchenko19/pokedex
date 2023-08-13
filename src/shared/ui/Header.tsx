import {HeaderMain} from "../style/shared.styled.ts";
import React from "react";
import {HeaderPropsI} from "../model/model.ts";

export const Header:React.FC<HeaderPropsI> = ({title}) => {
    return (
        <HeaderMain>
            <h1>{title}</h1>
        </HeaderMain>
    );
};

