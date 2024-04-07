import styled from "styled-components";
import type {IStyledParagraphProps} from "@components/base/paragraph/types";

const StyledParagraph = styled.p<IStyledParagraphProps>`
  font-weight: 400;
  font-size: ${({$size}) => $size};
  line-height: 1.5rem;
  color: ${({theme}) => theme.colors.gray.s800};
  margin: 0;
  padding: 0;
`;

export {StyledParagraph};
