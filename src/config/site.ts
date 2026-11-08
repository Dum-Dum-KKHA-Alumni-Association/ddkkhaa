export const siteConfig = {
  name: "DDKKHAA",
  fullName: "DDKKHAA Educational Institution",
  tagline: "Excellence in Education, Character, and Knowledge",
  description:
    "Official portal of DDKKHAA. Providing quality education, fostering discipline, moral values, and academic excellence.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og.png",
  links: {
    facebook: "https://facebook.com/ddkkhaa",
    twitter: "https://twitter.com/ddkkhaa",
    youtube: "https://youtube.com/ddkkhaa",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Admission", href: "/admission" },
    { title: "About & History", href: "/about" },
    { title: "Staff Members", href: "/staff-member" },
    { title: "Managing Committee", href: "/managing-committee" },
    { title: "Contact Us", href: "/contact-us" },
  ],
};

export type SiteConfig = typeof siteConfig;
