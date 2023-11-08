import { Button, Input, Selector } from "shared/ui";
import s from "./styles.module.sass";

export const TradeInForm = () => {
  return (
    <div className={s.tradeForm}>
      <div className={s.top}>
        <span className={s.title}>авто в трейд-ин</span>
        <p>
          Быстрая покупка вашего автомобиля, без траты времени и сил на поиск
          покупателя.
        </p>
      </div>
      <form className={s.form}>
        <div className={s.formInputs}>
          <Selector placeholder="Марка" options={[]} />
          <Selector placeholder="Модель" options={[]} />
          <Selector placeholder="Комплектация" options={[]} />
          <Input placeholder="Пробег" />
          <Input placeholder="Имя" />
          <Input placeholder="+7" />
        </div>
        <p>
          Нажимая кнопку «Оценить авто» вы даёте свое согласие
          <a href="#"> с правилами обработки персональных данных.</a>
        </p>
        <Button variant="primary" className={s.evaluateBtn}>
          Оценить авто
        </Button>
      </form>
      <div className={s.bottom}>
        <span className={s.title}>у вас есть вопросы о трейд-ин?</span>
        <Button variant="outline" className={s.orderBtn}>
          Заказать консультацию по выкупу
        </Button>
      </div>
    </div>
  );
};
