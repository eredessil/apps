import {ParagraphSizeEnum} from "@components/base/paragraph/types/Paragraph.enum.ts";

interface IParagraphWrapperProps {
    children?: React.ReactNode | string | number;
    size?: ParagraphSizeEnum;
}

interface IStyledParagraphProps {
    $size: ParagraphSizeEnum;
}

export type {IParagraphWrapperProps, IStyledParagraphProps};