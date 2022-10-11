import { useState, useEffect } from "react"
import useDarkMode from "use-dark-mode"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../components/ThemeConfig";
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <button onClick={darkmode.toggle}>Switch Mode</button> */}
      <button className="button-theme"  onClick={darkmode.disable}><LightModeIcon/></button>
      <button className="button-theme" onClick={darkmode.enable}><Brightness3Icon /></button>
      <Layout >
      {isMounted && <Component {...pageProps} darkMode={darkmode}/>}
      </Layout>
    </ThemeProvider>
  ) 
}

export default MyApp