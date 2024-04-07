import styled from "styled-components";
import theme from "@theme/theme.ts";
import {HeadingTypesEnum, HeadingTypesWeightEnum} from "@components/base/heading/types/HeadingTypes.enum.ts";
import type {IStyledHeadingProps} from "@components/base/heading/types";

const getHeadingFontSize = (type: HeadingTypesEnum) => {
    switch (type) {
        case HeadingTypesEnum.H1:
            return '2rem';
        case HeadingTypesEnum.H2:
            return '1.5rem';
        case HeadingTypesEnum.H3:
            return '1.17rem';
        case HeadingTypesEnum.H4:
            return '1rem';
        case HeadingTypesEnum.H5:
            return '0.83rem';
        case HeadingTypesEnum.H6:
            return '0.67rem';
    }
}

const getHeadingStyle = (type: HeadingTypesEnum, weight: HeadingTypesWeightEnum) => {
    return `
        font-size: ${getHeadingFontSize(type)};
        margin: 0;
        padding: 0;
        font-weight: ${weight};
        line-height: 1.2;
        color: ${theme.colors.gray.s950};
    `;

}

const StyledHeading1 = styled.h1<IStyledHeadingProps>`
    ${({$weight}) => getHeadingStyle(HeadingTypesEnum.H1, $weight)} 
`;

const StyledHeading2 = styled.h2<IStyledHeadingProps>`
    ${({$weight}) => getHeadingStyle(HeadingTypesEnum.H2, $weight)}
`;

const StyledHeading3 = styled.h3<IStyledHeadingProps>`
    ${({$weight}) => getHeadingStyle(HeadingTypesEnum.H3, $weight)}
`;

const StyledHeading4 = styled.h4<IStyledHeadingProps>`
    ${({$weight}) => getHeadingStyle(HeadingTypesEnum.H4, $weight)}
`;

const StyledHeading5 = styled.h5<IStyledHeadingProps>`
    ${({$weight}) => getHeadingStyle(HeadingTypesEnum.H5, $weight)}
`;

const StyledHeading6 = styled.h6<IStyledHeadingProps>`
    ${({$weight}) => getHeadingStyle(HeadingTypesEnum.H6, $weight)}
`;

export {
    StyledHeading1,
    StyledHeading2,
    StyledHeading3,
    StyledHeading4,
    StyledHeading5,
    StyledHeading6
}