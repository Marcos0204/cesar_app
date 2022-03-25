import React, {useState} from 'react'
import { useSelector, useDispatch }  from 'react-redux'

import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../../themes'

const StyledApp = styled.nav`
  color: ${(props) => props.theme.fontColor};
  height:60px;
  width:100vw;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: rgb(0 0 0 / 12%) 0px 5px 11px 2px;
`;
const ButtonMode = styled.div`
    width: 100px;
    height: 30px;
    background-color: red;
    border-radius: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const IconMode = styled.div`
    width: 50px;
    height: 26px;
    background-color: black;
`
const TitleMode = styled.p`
    width: 50px;
    height: 26px;
    background-color: brown;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
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


    return (
        // <ThemeProvider theme={state ? lightTheme : darkTheme}>
        //     <GlobalStyles />
        <>
            <StyledApp>
               {/* <button onClick={() => themeToggler()}>cambiar tema</button> */}
               <ButtonMode 
                onClick={() => themeToggler()}
               >
                <IconMode></IconMode>
                <TitleMode>{darkMode ? 'Dark' : 'Ligth'}</TitleMode>
               </ButtonMode>
            </StyledApp>
            {children}
        </>
        // </ThemeProvider>
    )
}

export default Layout
