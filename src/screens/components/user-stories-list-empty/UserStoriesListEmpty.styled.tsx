import styled from "styled-components";
import ListEmptyIcon from "@icons/list-empty-icon.svg";

const StyledUserStoriesListEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
  
  padding: ${({theme}) => theme.spacing.xxl} 0;
`;

const StyledUserStoriesListEmptyIllustrationWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.gray.s50};
  padding: ${({theme}) => theme.spacing.xxl};
  width: ${({theme}) => theme.spacing.xxl};
  height: ${({theme}) => theme.spacing.xxl};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme}) => theme.spacing.xl};
`;

const StyledUserStoriesListEmptyIllustration = styled(ListEmptyIcon)`
  color: ${({theme}) => theme.colors.gray.s500};
  transform: translateY(-${({theme}) => theme.spacing.xxxs});
`;

export {
  StyledUserStoriesListEmptyContainer,
  StyledUserStoriesListEmptyIllustration,
  StyledUserStoriesListEmptyIllustrationWrapper
};
