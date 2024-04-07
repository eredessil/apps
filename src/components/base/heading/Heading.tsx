import * as StyledHeadings from './Heading.styled';
import React, {useMemo} from "react";
import {HeadingTypesEnum, HeadingTypesWeightEnum} from "@components/base/heading/types/HeadingTypes.enum.ts";
import type {IHeadingProps} from "@components/base/heading/types";

const getHeading = (type: HeadingTypesEnum) => {
    switch (type) {
        case HeadingTypesEnum.H1:
            return StyledHeadings.StyledHeading1;
        case HeadingTypesEnum.H2:
            return StyledHeadings.StyledHeading2;
        case HeadingTypesEnum.H3:
            return StyledHeadings.StyledHeading3;
        case HeadingTypesEnum.H4:
            return StyledHeadings.StyledHeading4;
        case HeadingTypesEnum.H5:
            return StyledHeadings.StyledHeading5;
        case HeadingTypesEnum.H6:
            return StyledHeadings.StyledHeading6;
    }
}

const Heading : React.FC<IHeadingProps> = ({type, children, weight}) => {
    const HeadingComponent = useMemo(() => getHeading(type ?? HeadingTypesEnum.H1), [type]);

    return (
        <HeadingComponent $weight={weight ?? HeadingTypesWeightEnum.BOLD}>{children}</HeadingComponent>
    );
}

export default Heading;
