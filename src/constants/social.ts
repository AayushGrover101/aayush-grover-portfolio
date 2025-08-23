export enum SocialPlatforms {
  INSTA = "Instagram",
  X = "X",
  LINKEDIN = "LinkedIn",
  MEDIUM = "Medium",
  GITHUB = "GitHub",
}

type TSocialInfo = {
  link: string;
};

export const SOCIALS: Record<SocialPlatforms, TSocialInfo> = {
  [SocialPlatforms.INSTA]: {
    link: "https://www.instagram.com/therealaayush_/",
  },
  [SocialPlatforms.X]: {
    link: "https://x.com/AayushGrover_",
  },
  [SocialPlatforms.LINKEDIN]: {
    link: "https://www.linkedin.com/in/aayush-grover-06/",
  },
  [SocialPlatforms.MEDIUM]: {
    link: "https://medium.com/@aayushgrover101",
  },
  [SocialPlatforms.GITHUB]: {
    link: "https://github.com/AayushGrover101",
  },
};
