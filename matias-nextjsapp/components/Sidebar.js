import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="sidenav">
      <Link href="https://www.linkedin.com/company/teo-coop/?originalSubdomain=ar" passHref>
        <a target='_blank'>
            <Image
                src='/images/linkedin.png'
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
                src='/images/instagram.png'
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
