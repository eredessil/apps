import styled from "styled-components";
import type {IStyledGridProps} from "@components/base/grid/types";

const StyledGridWrapper = styled.div<IStyledGridProps>`
  display: grid;
  align-items: normal;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
  grid-column-gap: ${({$gap}) => $gap};
  grid-row-gap: ${({$gap}) => $gap};

  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledGridItem = styled.div`
  width: 100%;
`;

export {StyledGridWrapper, StyledGridItem};