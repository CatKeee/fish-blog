export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Fish's Blog",
  description:
    "基于shadcn-ui的项目模板",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/CatKeee",
  },
}
