import { FC, PropsWithChildren } from "react";
import s from "./styles.module.sass";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import { Menu } from "widgets/Menu";
import { Comparison } from "features/Сomparison";

export const LayoutWithComprasion: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <Comparison />
      <main>{children}</main>
      <Footer />
      <Menu />
    </div>
  );
};
