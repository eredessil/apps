import {CHIP_TYPE} from "./ChipType.enum.ts";
import {ThemeType} from "@theme/theme.ts";

interface IChipProps {
  type?: CHIP_TYPE;
  text: string;
  selected?: boolean;
  onPress?: () => void;
}

interface IGetChipColorProps {
  $type?: CHIP_TYPE;
  colors: ThemeType['colors'];
  $selected?: boolean;
}

interface IChipBodyProps {
  $type?: CHIP_TYPE;
  $selected?: boolean;
}

export type {IChipProps, IGetChipColorProps, IChipBodyProps};
