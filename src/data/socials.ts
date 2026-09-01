import { SocialLink } from "@/types";

export const contactInfo = {
  email: "tysontranthai@gmail.com",
  emailDisplay: "tysontranthai@gmail.com",
  phone: "0971319614 (Zalo)",
  zalo: "0971319614",
  zaloUrl: "https://zalo.me/0971319614",
  discord: "tysontran03",
  telegram: "@tysontran",
  telegramUrl: "https://t.me/tysontran",
  facebookName: "Trần Sơn",
  facebookUrl: "https://www.facebook.com/profile.php?id=61578211919007",
  location: "Vietnam · Available Globally (Remote)",
  timezone: "GMT+7 (Indochina Time / ICT)",
  responseExpectation: "Typically replies within 12–24 hours",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    label: "GitHub",
    url: "https://github.com/TysonTranThai",
    username: "TysonTranThai",
    icon: "Github",
    primary: true,
  },
  {
    platform: "Zalo",
    label: "Zalo · 0971319614",
    url: "https://zalo.me/0971319614",
    username: "0971319614",
    icon: "Zalo",
    primary: true,
  },
  {
    platform: "Discord",
    label: "Discord · tysontran03",
    url: "https://discord.com/channels/@me",
    username: "tysontran03",
    icon: "Discord",
    primary: true,
  },
  {
    platform: "Facebook",
    label: "Facebook · Trần Sơn",
    url: "https://www.facebook.com/profile.php?id=61578211919007",
    username: "Trần Sơn",
    icon: "Facebook",
    primary: true,
  },
  {
    platform: "Telegram",
    label: "Telegram",
    url: "https://t.me/tysontran",
    username: "@tysontran",
    icon: "Send",
    primary: false,
  },
  {
    platform: "X / Twitter",
    label: "X (Twitter)",
    url: "https://x.com/tysontran_ai",
    username: "@tysontran_ai",
    icon: "Twitter",
    primary: false,
  },
];
