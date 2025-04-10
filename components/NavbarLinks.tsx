"use client";

import { siteConfig } from "@/config/site";
import { NavbarItem } from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

function NavbarLinks() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <ul className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems?.map((item) => (
        <NavbarItem key={item.href}>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              `data-[active=true]:text-primary data-[active=true]:font-medium hover:text-primary easein duration-100 p-2 ${pathname === item.href && "bg-primary text-white hover:text-white rounded-md"}`
            )}
            color="foreground"
            href={item.href}
          >
            {item.label}
          </NextLink>
        </NavbarItem>
      ))}
    </ul>
  );
}

export default NavbarLinks;
