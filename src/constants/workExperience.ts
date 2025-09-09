import { ShopifyLogo, NokiaLogo, HackTheNorthLogo, PhronesisAiLogo } from "../assets/img";

export interface WorkExperience {
  jobTitle: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  logo: string;
}

export const workExperienceData: WorkExperience[] = [
  {
    jobTitle: "Machine Learning Engineer",
    company: "Shopify",
    companyUrl: "https://shopify.com",
    startDate: "Jul 2025",
    endDate: "Present",
    logo: ShopifyLogo
  },
  {
    jobTitle: "Machine Learning Engineer",
    company: "Nokia",
    companyUrl: "https://nokia.com",
    startDate: "Apr 2025",
    endDate: "Aug 2025",
    logo: NokiaLogo
  },
  {
    jobTitle: "Frontend Engineer",
    company: "Hack the North",
    companyUrl: "https://hackthenorth.com",
    startDate: "Mar 2025",
    endDate: "Present",
    logo: HackTheNorthLogo
  },
  {
    jobTitle: "Software Engineer",
    company: "Nokia",
    companyUrl: "https://nokia.com",
    startDate: "Jul 2023",
    endDate: "Aug 2023",
    logo: NokiaLogo
  },
  {
    jobTitle: "Machine Learning Research",
    company: "PhronesisAI",
    companyUrl: "https://www.phronesisai.com/",
    startDate: "Jul 2023",
    endDate: "Aug 2023",
    logo: PhronesisAiLogo
  }
];