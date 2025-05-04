"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";

import NavbarLinks from "./NavbarLinks";
import LoginButton from "./LoginButton";
import { Logo } from "./icons";
import { useState } from "react";

export const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isOpenMenu}
      onMenuOpenChange={setIsOpenMenu}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className=" basis-1 pl-4" justify="center">
        <NavbarLinks />
      </NavbarContent>

      <NavbarContent className="basis-1" justify="end">
        <NavbarItem>
          <LoginButton />
        </NavbarItem>
        <NavbarItem className="md:hidden">
          <NavbarMenuToggle />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="text-slate-800"
                href={item.href}
                size="lg"
                onPress={() => setIsOpenMenu(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
