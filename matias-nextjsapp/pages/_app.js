import { useState, useEffect } from "react"
import useDarkMode from "use-dark-mode"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../components/ThemeConfig";
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { Layout } from "../components/Layout";
import {  IntlProvider } from 'react-intl';
import { useRouter } from "next/router";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";




const languages = {
  en: require('/public/locale/en.json'),
  es: require('/public/locale/es.json')
};


function MyApp({ Component, pageProps }) {
 
  const router = useRouter()
  const { locale, defaultLocale } = router;
  const messages = languages[locale];


  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (

    <ThemeProvider theme={theme}>
     <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
      <GlobalStyles />
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
      {/* <button onClick={darkmode.toggle}>Switch Mode</button> */}
      <button className="button-theme"  onClick={darkmode.disable}><LightModeIcon/></button>
      <button className="button-theme" onClick={darkmode.enable}><Brightness3Icon /></button>
      <Layout >
      {isMounted && <Component {...pageProps} darkMode={darkmode}/>}
      </Layout>
      </MuiPickersUtilsProvider>
      </IntlProvider>
    </ThemeProvider>
 
  ) 
}

export default MyApp