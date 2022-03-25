import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  /* background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")}; */
  background-size: cover;
  color: ${(props) => props.theme.fontColor};
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  color: ${(props) => props.theme.fontColor};
`;

export const TextTitle = styled.p`
  color: ${(props) => props.theme.fontColor};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

export const TextSubTitle = styled.p`
   color: ${(props) => props.theme.fontColor};
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 20px;
  line-height: 1.6;
  color: ${(props) => props.theme.fontColor};
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
