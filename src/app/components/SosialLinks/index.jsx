"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SocialLinks = ({ links }) => {
  return (
    <div className="flex flex-col gap-4 text-gray-500/40">
      {links.map((link, index) => (
        <Link key={index} href={link.url} target="_blank">
          <FontAwesomeIcon
            icon={link.icon}
            className={`text-4xl transition-all duration-300 ease-in-out cursor-pointer md:text-5xl hover:${link.hoverColor}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
