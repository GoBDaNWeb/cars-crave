import { ArrowRight, Breadcrumbs, Button, Title } from "shared/ui";
import s from "./styles.module.sass";
import { breadcrumbs } from "pages/Search/config";
import { CarCard } from "entities/CarCard";
import { carList } from "shared/config";
import Image from "next/image";
import { useRouter } from "next/router";

export const Search = () => {
  const { push } = useRouter();

  return (
    <div className={s.search}>
      <div className={`${s.top} container`}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Title variant="h3">поиск по запросу: Lixiang </Title>
        <p>
          Найдено: <span>15 автомобилей</span>
        </p>
      </div>
      <div className={`${s.content} container`}>
        <div>
          <div className={s.carList}>
            {carList.map((car, index) => (
              <div key={car.id} className={s.carWrapper}>
                <span className={s.count}>
                  {index < 10 ? 0 : null}
                  {index + 1}.
                </span>
                <CarCard
                  img={car.img}
                  price={car.price}
                  title={car.title}
                  brand={car.brand}
                  options={car.options}
                  isRow
                />
              </div>
            ))}
          </div>
          <div className={s.btnWrapper}>
            <Button variant="dotted" className={s.loadBtn}>
              загрузить еще
            </Button>
          </div>
        </div>

        <div className={s.about}>
          <div className={s.aboutContent}>
            <div className={s.imageWrapper}>
              <Image src={"/cars/car2.jpg"} fill alt="brand" />
            </div>
            <div className={s.brand}>
              <div className={s.imageWrapper}>
                <span>
                  <Image src={"/carBrands/brand11.png"} fill alt="brand" />
                </span>
              </div>

              <span className={s.brandTitle}>Lixiang</span>
            </div>
            <p className={s.description}>
              XPeng — молодая компания по производству электромобилей, которая в
              свое время воспользовалась решением Tesla открыть свои патенты для
              всех. Сейчас она отличается очень быстрым ростом продаж за счет
              того, что создает электрокары для среднего класса. Фирма
              зарабатывает как на создании умных машин, так и разработке и
              внедрении новых технологий.
            </p>
            <Button onClick={() => push("/brand/Hongqi")} className={s.viewBtn}>
              <ArrowRight />
              <span> Подробнее о бренде</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
