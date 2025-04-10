export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "خانه طلا",
  description: "خرید و فروش آنلاین طلای آب شده",
  navItems: [
    {
      label: "خانه",
      href: "/",
    },
    {
      label: "درباره ما",
      href: "/#",
    },
    {
      label: "ارتباط با ما",
      href: "/#",
    },
    {
      label: "قوانین و مقررات",
      href: "/terms-and-conditions",
    },
  ],
  navMenuItems: [
    {
      label: "خانه",
      href: "/",
    },
    {
      label: "درباره ما",
      href: "/#",
    },
    {
      label: "ارتباط با ما",
      href: "/#",
    },
    {
      label: "قوانین و مقررات",
      href: "/terms-and-conditions",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
