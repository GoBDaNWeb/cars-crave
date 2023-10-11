import { PATH_PAGE } from "shared/config";
import brand1 from "../../../../public/brand/brand1.jpg";
import brand2 from "../../../../public/brand/brand2.jpg";
import brand3 from "../../../../public/brand/brand3.jpg";
export * from "./section";

export const thumbImages = [
  { image: brand1 },
  { image: brand2 },
  { image: brand3 },
];

export const breadcrumbs = [
  {
    link: PATH_PAGE.root,
    title: "Главная",
  },
  {
    link: PATH_PAGE.stock,
    title: "Hongqi",
  },
];
