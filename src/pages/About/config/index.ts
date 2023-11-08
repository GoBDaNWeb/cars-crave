import { PATH_PAGE } from "shared/config";
import about1 from "../../../../public/about/about1.jpg";
import about2 from "../../../../public/about/about2.jpg";
import about3 from "../../../../public/about/about3.jpg";
import about4 from "../../../../public/about/about4.jpg";
import about5 from "../../../../public/about/about5.jpg";
import about6 from "../../../../public/about/about6.jpg";

export const breadcrumbs = [
  {
    link: PATH_PAGE.root,
    title: "Главная",
  },
  {
    link: PATH_PAGE.about,
    title: "О салоне",
  },
];

export const thumbImages = [
  { image: about1 },
  { image: about2 },
  { image: about3 },
  { image: about4 },
  { image: about5 },
  { image: about6 },
];

export * from "./team";
