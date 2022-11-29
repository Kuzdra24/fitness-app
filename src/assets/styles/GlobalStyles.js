import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 *{
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: #202020;
}

body{
    background-color: ${({theme}) => theme.colors.lightPurple};
    color: #303030;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
}
`;