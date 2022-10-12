import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="sidenav">
      <Link href="https://wa.me/1156221524?text=Buenos+dias,+estoy+interesado+en+sus+servicios!" passHref>
        <a target='_blank'>
            <Image
                src='/images/whatsapp.png'
                layout='responsive'
                width={20}
                height={20}
                alt='linkedin-logo'
                // priority
            />
        </a>
        </Link>
        <Link href="https://z-p15.www.instagram.com/teo.coop/?hl=es-la" passHref>
        <a target='_blank'>
            <Image
                src='/images/telegram.png'
                layout='responsive'
                width={50}
                height={50}
                alt='linkedin-logo'
                
            />
        </a>
        </Link>
    </div>
  );
};
