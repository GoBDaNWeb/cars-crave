import { breadcrumbs } from "pages/Stock/config";

import s from "./styles.module.sass";

import { Breadcrumbs, Title } from "shared/ui";
import { carList } from "shared/config";
import { CarCard } from "entities/CarCard";

export const Stock = () => {
  return (
    <div className={s.stock}>
      <div className={`${s.top} container`}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className={s.topContent}>
          <Title variant="h3">авто в наличии</Title>
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
    </div>
  );
};
