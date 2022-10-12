import { useRouter } from "next/router"
import { useCookies } from 'react-cookie';
import React from 'react'

export const Lenguajeswitcher = () =>  {

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
      style={{
        position: 'absolute',
        top: '10',
        right: '0',
        backgroundColor: '#33c68baa',
      }}
      onChange={switchLanguage}
      defaultValue={locale}
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}