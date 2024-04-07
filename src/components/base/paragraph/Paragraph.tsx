import React from "react";
import type {IParagraphWrapperProps} from "@components/base/paragraph/types";
import {StyledParagraph} from "@components/base/paragraph/Paragraph.styled.tsx";
import {ParagraphSizeEnum} from "@components/base/paragraph/types/Paragraph.enum.ts";

const Paragraph : React.FC<IParagraphWrapperProps> = ({size = ParagraphSizeEnum.MEDIUM, children}) => {
    return <StyledParagraph $size={size}>{children}</StyledParagraph>;
}

export default Paragraph;
