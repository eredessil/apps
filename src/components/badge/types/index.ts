import {BadgeTypesEnum} from "@components/badge/types/BadgeTypes.enum.ts";
import {ThemeType} from "@theme/theme.ts";

interface IBadgeProps {
    type?: BadgeTypesEnum;
    text?: string | number;
}

interface IGetColorProps {
    type?: BadgeTypesEnum;
    colors: ThemeType['colors']
}

interface IStyledBadgeBodyProps {
    type?: BadgeTypesEnum;
}

export type { IBadgeProps, IGetColorProps, IStyledBadgeBodyProps };