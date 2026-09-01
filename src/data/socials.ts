import { SocialLink } from "@/types";

export const contactInfo = {
  email: "tysontran.builds@gmail.com", // [PLACEHOLDER — UPDATE TO PREFERRED PRIMARY EMAIL]
  emailDisplay: "tysontran.builds@gmail.com",
  phone: "[PLACEHOLDER — AVAILABLE UPON REQUEST]",
  telegram: "@tysontran", // [PLACEHOLDER]
  telegramUrl: "https://t.me/tysontran",
  location: "Vietnam · Available Globally (Remote)",
  timezone: "GMT+7 (Indochina Time / ICT)",
  responseExpectation: "Typically replies within 12–24 hours",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    label: "GitHub",
    url: "https://github.com/tyson-tran", // [PLACEHOLDER — UPDATE GITHUB USERNAME]
    username: "tyson-tran",
    icon: "Github",
    primary: true,
  },
  {
    platform: "LinkedIn",
    label: "LinkedIn",
    url: "https://linkedin.com/in/tysontran", // [PLACEHOLDER — UPDATE LINKEDIN URL]
    username: "in/tysontran",
    icon: "Linkedin",
    primary: true,
  },
  {
    platform: "Telegram",
    label: "Telegram",
    url: "https://t.me/tysontran",
    username: "@tysontran",
    icon: "Send",
    primary: true,
  },
  {
    platform: "X / Twitter",
    label: "X (Twitter)",
    url: "https://x.com/tysontran_ai", // [PLACEHOLDER]
    username: "@tysontran_ai",
    icon: "Twitter",
    primary: false,
  },
];
