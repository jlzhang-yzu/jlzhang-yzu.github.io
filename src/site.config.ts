export const siteConfig = {
  title: "Jiale Zhang (张佳乐) - Homepage",
  description: "Focusing on AI Security, Federated Learning, and LLM Security",
  language: "en",
  author: {
    name: "Jiale Zhang (张佳乐)",
    affiliation: "Yangzhou University",
    bio: "Focusing on AI Security, Federated Learning, and LLM Security",
    location: "Jiangsu, China",
    avatar: "/images/photo.jpg",
    email: "jialezhang@yzu.edu.cn"
  },
  nav: [
    { label: "Homepage", href: "#about-me", prominent: true },
    { label: "About Me", href: "#about-me" },
    { label: "News", href: "#news" },
    { label: "Publications", href: "#publications" },
    { label: "Students", href: "#students" }
  ],
  links: [
    { label: "Email", href: "mailto:jialezhang@yzu.edu.cn", icon: "✉" },
    { label: "DBLP", href: "https://dblp.org/pid/218/2216-1.html", icon: "DB" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=kgDmOAUAAAAJ&hl", icon: "GS" },
    { label: "ORCID", href: "https://orcid.org/0000-0002-2143-5666", icon: "ID" }
  ],
  footer: {
    text: "Last updated by editing src/site.config.ts and src/content/home.md."
  }
};

export type SiteConfig = typeof siteConfig;
