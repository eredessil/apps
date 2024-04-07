import {HeadingTypesEnum, HeadingTypesWeightEnum} from "@components/base/heading/types/HeadingTypes.enum.ts";
import React from "react";

interface IHeadingProps {
    children?: React.ReactNode | string | number;
    type?: HeadingTypesEnum;
    weight?: HeadingTypesWeightEnum;
}

interface IStyledHeadingProps {
    $weight: HeadingTypesWeightEnum;
}

export type {IHeadingProps, IStyledHeadingProps};
