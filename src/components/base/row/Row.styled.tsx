import React from "react";
import styled from "styled-components";
import type {IRowProps, IStyledRowProps} from "@components/base/row/types";
import theme, {SpacingKeys} from "@theme/theme.ts";
import {RowJustifyEnum} from "@components/base/row/types/Row.enum.ts";

const getSize = (size?: SpacingKeys) => {
  return size ? theme.spacing[size] : '0px';
};

const StyledRow = styled.div<IStyledRowProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  flex-wrap: ${({$noWrap}) => $noWrap ? 'nowrap' : 'wrap'};
  row-gap: ${({$rowGap}) => getSize($rowGap)};
  column-gap: ${({$columnGap}) => getSize($columnGap)};
  justify-content: ${({$justify}) => $justify};
  padding-left: ${({$paddingHorizontal}) => getSize($paddingHorizontal)};
  padding-right: ${({$paddingHorizontal}) => getSize($paddingHorizontal)};
  padding-top: ${({$paddingVertical}) => getSize($paddingVertical)};
  padding-bottom: ${({$paddingVertical}) => getSize($paddingVertical)};
`;

const Row: React.FC<IRowProps> = ({
  rowGap,
  columnGap,
  children,
  justify = RowJustifyEnum.START,
  noWrap,
  paddingVertical,
  paddingHorizontal
}) => {
  return (
    <StyledRow
      $rowGap={rowGap}
      $columnGap={columnGap}
      $justify={justify}
      $noWrap={noWrap}
      $paddingHorizontal={paddingHorizontal}
      $paddingVertical={paddingVertical}
    >
      {children}
    </StyledRow>
  );
}

export default Row;
