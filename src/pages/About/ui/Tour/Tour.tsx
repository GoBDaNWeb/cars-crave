import Image from "next/image";
import s from "./styles.module.sass";

export const Tour = () => {
  return (
    <div className={s.tour}>
      <div className={s.type}>360</div>
      <div className={s.imageWrapper}>
        <Image src="/crave-bg.png" fill alt="tour" />
      </div>
      <span>3d - тур по салону</span>
    </div>
  );
};
