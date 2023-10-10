import { Badge, Button, Checkbox, Input, Selector } from "shared/ui";
import s from "./styles.module.sass";

export const CreditForm = () => {
  return (
    <div className={s.creditForm}>
      <span className={s.title}>кредитный калькулятор</span>
      <form className={s.form}>
        <label>
          <Checkbox id="model" />
          <span>Выбрать конкретную модель для расчета</span>
        </label>
        <div className={s.selectors}>
          <Selector placeholder="Марка" options={[]} />
          <Selector placeholder="Модель" options={[]} />
          <Selector placeholder="Комплектация" options={[]} />
        </div>
        <div className={s.inputs}>
          <Input placeholder="Стоимость, руб." />
          <Input placeholder="Взнос, руб." />
          <Input placeholder="Срок, мес." />
        </div>
        <div className={s.checkboxes}>
          <label>
            <Checkbox id="trade" />
            <span>Машина в трейд-ин</span>
          </label>
          <label>
            <Checkbox id="else" />
            <span>Возможно что то еще</span>
          </label>
        </div>
        <div className={s.userData}>
          <Input placeholder="Имя" />
          <Input placeholder="+7" />
        </div>
        <div className={s.calc}>
          <div className={s.calcList}>
            <div className={s.calcItem}>
              <span className={s.label}>Сумма кредита:</span>
              <span className={s.value}>500 000 Р</span>
            </div>
            <div className={s.calcItem}>
              <span className={s.label}>Процентная ставка:</span>
              <span className={s.value}>15 %</span>
            </div>
            <div className={s.calcItem}>
              <span className={s.label}>Срок кредита:</span>
              <span className={s.value}>36 мес</span>
            </div>
            <div className={s.calcItem}>
              <span className={s.label}>Переплата по кредиту:</span>
              <span className={s.value}>150 000 Р</span>
            </div>
            <div className={s.total}>
              <span className={s.label}>Ежемесячный платеж:</span>
              <span className={s.value}>10 535 Р</span>
            </div>
          </div>
          <div className={s.submit}>
            <Button variant="primary" className={s.submitBtn}>
              Получить предложение
            </Button>
            <p>
              Нажимая кнопку «Заказать консультацию» вы даёте свое согласие с
              <a href="#"> правилами обработки персональных данных.</a>
            </p>
          </div>
        </div>
      </form>
      <div className={s.badgeWrapper}>
        <Badge>
          Расчет является предварительным и размещен в информационных целях
        </Badge>
      </div>
    </div>
  );
};
