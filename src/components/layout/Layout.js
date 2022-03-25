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
`;
const ButtonMode = styled.div`
    width: 100px;
    height: 30px;
    background-color: red;
    border-radius: 10%;
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
        console.log(state)
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

               </ButtonMode>
            </StyledApp>
            {children}
        </>
        // </ThemeProvider>
    )
}

export default Layout
