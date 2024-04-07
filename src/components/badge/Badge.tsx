import React from "react";
import {StyledBadgeBody} from "@components/badge/Badge.styled.tsx";
import type {IBadgeProps} from "@components/badge/types";
import {Label} from "@components/base";
import {BadgeTypesEnum} from "@components/badge/types/BadgeTypes.enum.ts";
import {LabelTypesEnum} from "@components/base/label/types/LabelTypes.enum.ts";
import {LabelFontSizeEnum} from "@components/base/label/types/LabelFontSize.enum.ts";

const mapLabelToBadgeType = (badgeType?: BadgeTypesEnum): LabelTypesEnum | undefined => {
  switch (badgeType) {
    case BadgeTypesEnum.BLUE:
      return LabelTypesEnum.BLUE;
    case BadgeTypesEnum.GREEN:
      return LabelTypesEnum.GREEN;
    case BadgeTypesEnum.MAGENTA:
      return LabelTypesEnum.MAGENTA;
    case BadgeTypesEnum.PURPLE:
      return LabelTypesEnum.PURPLE;
    default:
      return undefined;
  }
}

const Badge: React.FC<IBadgeProps> = ({type, text}) => {
  return (
    <StyledBadgeBody type={type}>
      <Label size={LabelFontSizeEnum.S} type={mapLabelToBadgeType(type)}>{text}</Label>
    </StyledBadgeBody>
  );
}

export default Badge;