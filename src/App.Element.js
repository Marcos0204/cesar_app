import styled from "styled-components";

export const ContainerApp = styled.div`
  height: auto;
  width: 100%;
  min-width:320px;
  max-width: 1600px;
  background-color: red;
  margin: 15px  auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`
export const ContainerGif = styled.div`
  height: calc(100vh - 95px) ;
  width: 100%;
  @media (min-width: 767px) {
    width: 47%;
    max-height:760px;
  }
  background: blue;
`
export const ContainerItem = styled.div`
  height: calc(100vh - 95px) ;
  width: 100%;
  @media (min-width: 767px) {
    width: 47%;
    max-height:760px;
  }
  background: black;
`