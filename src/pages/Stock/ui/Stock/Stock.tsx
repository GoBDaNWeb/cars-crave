import { breadcrumbs } from "pages/Stock/config";

import s from "./styles.module.sass";

import {
  Breadcrumbs,
  Button,
  Checkbox,
  Selector,
  SortBtn,
  Title,
} from "shared/ui";
import { carList } from "shared/config";
import { CarCard } from "entities/CarCard";
import { Comparison } from "features/Сomparison";

export const Stock = () => {
  return (
    <div className={s.stock}>
      <Comparison />
      <div className={`${s.top} container`}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className={s.topContent}>
          <Title variant="h3">авто в наличии</Title>
          <div className={s.filters}>
            <div className={s.selectors}>
              <Selector className={s.select} placeholder="Марка" options={[]} />
              <Selector
                className={s.select}
                placeholder="Модель"
                options={[]}
              />
            </div>

            <div className={s.checkboxes}>
              <span className={s.checkboxesTitle}>Показать авто:</span>
              <label>
                <Checkbox id="trade" />
                <span>Новый</span>
              </label>
              <label>
                <Checkbox id="trade" />
                <span>С пробегом</span>
              </label>
            </div>
            <div className={s.sorted}>
              <span>Сортировать по:</span>
              <SortBtn>По убыванию цены</SortBtn>
            </div>
          </div>
        </div>
      </div>
      <div className={s.content}>
        {carList.map((car) => (
          <CarCard
            key={car.id}
            img={car.img}
            price={car.price}
            title={car.title}
            brand={car.brand}
            options={car.options}
          />
        ))}
      </div>
      <div className={s.btnWrapper}>
        <Button variant="dotted">загрузить еще</Button>
      </div>
    </div>
  );
};
