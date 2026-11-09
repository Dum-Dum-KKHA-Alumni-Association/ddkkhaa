export const siteConfig = {
  name: "DDKKHA",
  shortName: "DDKKHA",
  fullName: "Dum Dum Krishna Kumar Hindu Academy (H.S.)",
  bengaliName: "দমদম কৃষ্ণকুমার হিন্দু একাডেমি (উঃ মাঃ)",
  establishedDate: "3 January 1933",
  establishedYear: "1933",
  motto: "Knowledge, Discipline, and Character",
  tagline: "Government Sponsored Higher Secondary School • Affiliated to WBBSE & WBCHSE",
  subTagline: "ESTABLISHED 3 JANUARY 1933 • MOTIJHEEL, KOLKATA",
  description:
    "Dum Dum Krishna Kumar Hindu Academy (H.S.) is a premier Govt. Sponsored Higher Secondary school located in Motijheel, Dum Dum, Kolkata. Nurturing academic excellence, character, and discipline since 1933.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ddkkha.com",
  affiliation: {
    wbbse: "Index: B1-039",
    hsCode: "103084",
    udise: "19114400907",
  },
  contact: {
    address: "Motijheel Avenue, Motijheel, Kolkata – 700074, West Bengal",
    phone: "033-25602704",
    email: "ddkkha33@gmail.com",
    officeHours: "Monday – Friday: 10:30 AM – 4:30 PM | Saturday: 10:30 AM – 2:00 PM",
  },
  externalPortals: {
    banglarShiksha: "https://school.banglarshiksha.gov.in",
    alumniAssociation: "#alumni",
    teacherLogin: "#teacher-login",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Academics", href: "/admission#academics" },
    { title: "Admissions", href: "/admission" },
    { title: "Students & Parents", href: "/#students-parents" },
    { title: "Campus & Activities", href: "/about#campus" },
    { title: "Administration", href: "/managing-committee" },
    { title: "Staff Members", href: "/staff-member" },
    { title: "Contact Us", href: "/contact-us" },
  ],
};

export type SiteConfig = typeof siteConfig;
