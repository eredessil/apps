import {SpacingKeys} from "@theme/theme.ts";
import React from "react";
import {RowJustifyEnum} from "@components/base/row/types/Row.enum.ts";

interface IStyledRowProps {
    $rowGap?: SpacingKeys;
    $columnGap?: SpacingKeys;
    $justify?: RowJustifyEnum;
    $noWrap?: boolean;
    $paddingVertical?: SpacingKeys;
    $paddingHorizontal?: SpacingKeys;
}

interface IRowProps {
    paddingVertical?: SpacingKeys;
    paddingHorizontal?: SpacingKeys;
    rowGap?: SpacingKeys;
    columnGap?: SpacingKeys;
    children?: React.ReactNode;
    justify?: RowJustifyEnum;
    noWrap?: boolean;
}

export type { IStyledRowProps, IRowProps };