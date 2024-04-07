import React from "react";
import {StyledGridItem, StyledGridWrapper} from "@components/base/grid/Grid.styled.tsx";
import type {IGridItemProps, IGridProps} from "@components/base/grid/types";

const GridWrapper : React.FC<IGridProps> = ({children, gap}) => {
    return <StyledGridWrapper
        $gap={gap}
    >{children}</StyledGridWrapper>
}

const GridItem : React.FC<IGridItemProps> = ({children}) => {
    return <StyledGridItem>{children}</StyledGridItem>
}

export {GridItem, GridWrapper}
