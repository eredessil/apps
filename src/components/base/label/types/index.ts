import {LabelTypesEnum} from "./LabelTypes.enum.ts";
import {ThemeType} from "@theme/theme.ts";
import {LabelFontSizeEnum} from "@components/base/label/types/LabelFontSize.enum.ts";

interface LabelProps {
  children: React.ReactNode;
  text: string;
  type: LabelTypesEnum;
}


interface GetColorProps {
  type?: LabelTypesEnum;
  colors: ThemeType['colors'];
}

interface StyledLabelProps {
  type?: LabelTypesEnum;
  size?: LabelFontSizeEnum;
}

export type {LabelProps, GetColorProps, StyledLabelProps};
