import { FC, PropsWithChildren } from "react";
import s from "./styles.module.sass";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
