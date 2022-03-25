import React, {useState} from 'react'
import { useSelector, useDispatch }  from 'react-redux'

import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../../themes'

const StyledApp = styled.nav`
  color: ${(props) => props.theme.fontColor};
  height:80px;
  width:100vw;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: rgb(0 0 0 / 12%) 0px 5px 11px 2px;
  
 // background:linear-gradient(111.85deg, #07a1cf 16.8%, #2fac66 84.07%);
`;
const ButtonMode = styled.div`
    width: 150px;
    height: 40px;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: ${({darkMode}) => ( !darkMode ? '#2b2d2f' :  '#61a92629')};
    box-shadow: 0px 4px 32px rgb(0 0 0 / 36%);
    //background-color: #2b2d2f; 61a92629
`
const IconMode = styled.div`
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 50%;
    background-color: ${({darkMode}) => ( !darkMode ? '#fff' :  '#fbe304')};
`
const TitleMode = styled.p`
    width: 50px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
`

const Content = styled.div`
    max-width: 100vw;
`

 
const Layout = ({children}) => {
    
    const [theme, setTheme] = useState("light");
    const [darkMode, setDarkMode] = useState(false);
    const dispatch = useDispatch()
    const state = useSelector((state) => state.data.darkMode)

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
        setDarkMode(!darkMode)
        dispatch({
            type: 'THEME',
            payload: darkMode
        })
    };
    const backgroundNav = !darkMode && 'linear-gradient(111.85deg, #07a1cf 16.8%, #2fac66 84.07%)';

    return (
        // <ThemeProvider theme={state ? lightTheme : darkTheme}>
        //     <GlobalStyles />
        <>
            <StyledApp
                style={{
                    background :backgroundNav
                }}
            >
               {/* <button onClick={() => themeToggler()}>cambiar tema</button> */}
               <ButtonMode 
                onClick={() => themeToggler()}
                darkMode={darkMode}
               >
                <IconMode 
                    darkMode={darkMode}
                >

                </IconMode>
                <TitleMode 
                    style={{
                        color:'#fff'
                    }}
                >{!darkMode ? 'Dark' : 'Ligth'}</TitleMode>
               </ButtonMode>
            </StyledApp>
            <Content>
            {children}
            </Content>
            
        </>
        // </ThemeProvider>
    )
}

export default Layout
