import { contactIcon, facebookMenu, homeIcon, instagramMenu, linkedInMenu, tiktokMenu, xMenu, youTubeMenu } from "../assets";

export const menu = [
  {icon: homeIcon, text: "inicio", href: "/", active:true },
  {icon: contactIcon, text: "contacto", href: "/contacto" },
];

export const socialMenu = [
  { icono: facebookMenu, text: "facebook" },
  { icono: instagramMenu, text: "instagram" },
  { icono: xMenu, text: "x" },
  { icono: youTubeMenu, text: "youTube" },
  { icono: tiktokMenu, text: "tiktok" },
  { icono: linkedInMenu, text: "linkedin" },
];

//FacebookSize
import { facebookSize } from "./facebookSize";
//InstagramSize
import { instagramSize } from "./instagramSize";
//X
import { xSize } from "./xSize";
//YouTube
import { youTubeSize } from "./youTubeSize";
//TikTok
import { tikTokSize } from "./tickTokSize";
//Linkedin
import { linkedinSize } from "./linkedinSize";

export{
    facebookSize,
    instagramSize,
    xSize,
    youTubeSize,
    tikTokSize,
    linkedinSize
}