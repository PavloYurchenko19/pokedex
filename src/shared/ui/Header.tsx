import React from 'react';
import {HeaderMain} from "../style/shared.styled.ts";
interface HeaderPropsI {
    title: string
}

export const Header = ({title}) => {
    return (
        <HeaderMain>
            <h1>{title}</h1>
        </HeaderMain>
    );
};

