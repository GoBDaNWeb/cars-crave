import { ModelItem } from "entities/ModelItem";
import s from "./styles.module.sass";

export const Models = () => {
  return (
    <div className={`${s.models} container`}>
      <span className={s.title}>модельный ряд</span>
      <div className={s.modelsList}>
        {[...Array(4)].map((_, index) => (
          <ModelItem key={index} />
        ))}
      </div>
    </div>
  );
};
