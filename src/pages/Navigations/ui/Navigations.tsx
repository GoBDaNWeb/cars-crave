import Link from "next/link";
import s from "./styles.module.sass";
export const Navigations = () => {
  return (
    <div className={s.nav}>
      <Link href={"/"}>Главная</Link>
      <Link href={"/stock"}>Авто в наличии</Link>
      <Link href={"/about"}>О салоне</Link>
      <Link href={"/contacts"}>Контакты</Link>
      <Link href={"/partners"}>Партнеры</Link>
      <Link href={"/brand/Hongqi"}>Бренд</Link>
      <Link href={"/model/Hongqi-E-HS9"}>Модель</Link>
      <Link href={"/equipment/Hongqi-E-HS9"}>Комплектация</Link>
      <Link href={"/comparison"}>Сравнение</Link>
    </div>
  );
};
