"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Button from "@/components/Button";

import HamburgerMenuIcon from "@/icons/HamburgerMenuIcon";
import { RoutePaths } from "@/consts/routes";

import { getMenuContents } from "./helper";

const Navbar = () => {
  const router = useRouter();

  const onLogoClick = () => {
    router.push(RoutePaths.HOME);
  };

  return (
    <nav className="flex justify-between w-6/12 lg:w-full ml-auto pt-4 lg:pt-8.75 pb-6.5 lg:pb-14.25 relative z-40">
      <Image
        src="/images/logo.png"
        alt="logo"
        height={72}
        width={169}
        className="w-25.25 lg:w-42.25 h-11 lg:h-18 cursor-pointer transform -translate-x-1/2 lg:translate-x-0"
        onClick={onLogoClick}
      />

      <ul className="hidden lg:flex gap-x-10">
        {getMenuContents().map((item) => (
          <li
            key={item.name}
            className="text-lg leading-none font-semibold font-figtree text-gray-200 cursor-pointer"
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <Button
        label={<HamburgerMenuIcon />}
        containerClassName="lg:hidden"
      ></Button>
    </nav>
  );
};

export default Navbar;
