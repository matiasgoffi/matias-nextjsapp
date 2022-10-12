import React from "react";
import { useRouter } from "next/router"
import { useCookies } from 'react-cookie';

export const LanguageSwitcher  = () => {
  const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { locale } = router;

  const switchLanguage = (e) => {
    const locale = e.target.value;
    router.push('/','/', { locale });
    if(cookie.NEXT_LOCALE !== locale){
      setCookie("NEXT_LOCALE", locale, { path: "/" });
    }
  }

  return (
    <select
      onChange={switchLanguage}
      defaultValue={locale}
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}