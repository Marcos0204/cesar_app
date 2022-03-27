import styled from "styled-components";

export const ContainerApp = styled.div`
  height: auto;
  width: 100%;
  min-width:320px;
  max-width: 1600px;
  /* background-color: red; */
  margin: 15px  auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (min-width: 767px) {
    flex-direction: row;
    padding: 10px 20px;
  }
`
export const ContainerGif = styled.div`
  height:  100Vh;
  width: 100%;
  @media (min-width: 767px) {
    width: 50%;
    max-height:1000px;
  }
  @media (min-width: 1024px) {
    width: 60%;
    max-height:1000px;
  }
  /* background: blue; */
`
export const ContainerItem = styled.div`
  height:  100Vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 767px) {
    width: 45%;
    max-height:1000px;
    padding-top: -30px;
    
  }
  @media (min-width: 1024px) {
    width: 40%;
    //padding-top: 70px;
    
  }
`

export const ITemCard = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: blanchedalmond; */
`
export const ITemGif = styled.div`
  width: 100%;
  height: 100%;
 
  display: none;
  @media (min-width: 1024px) {
    display: inline-block;
  }
`





export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 0px dashed var(--secondary);
  background-color: var(--accent);
  /* width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  } */
  width:100%;
  height: 100%;

  transition: width 0.5s;
`;