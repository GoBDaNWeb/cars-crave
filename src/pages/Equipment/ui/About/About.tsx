import { options } from "pages/Equipment/config";
import { AboutSwiper } from "../AboutSwiper/AboutSwiper";
import s from "./styles.module.sass";
import { useInView } from "react-intersection-observer";
import { Accordion, Button } from "shared/ui";
import Image from "next/image";
import { useEffect, useState } from "react";

export const About = () => {
  const [swiperIsView, setSwiperView] = useState(true);

  return (
    <div className={`${s.about} container`}>
      <div className={s.left}>
        <AboutSwiper setSwiperView={setSwiperView} />
        <div className={s.decription}>
          <span className={s.title}>описание и характеристики</span>
          <div className={s.text}>
            <p>
              Hongqi относится к китайским премиум-брендам, которые уже
              достаточно давно существуют на рынке. Первый выпуск автомобиля был
              в 1959 г. В течение нескольких десятилетий здесь выпускался ряд
              проверенных моделей, которые постоянно совершенствовались.
              Модельный ряд пережил несколько поколений и перезапусков, поэтому
              цена и комплектация Hongqi может заметно отличаться. Это
              автомобили с действительно оригинальным внешним видом. На
              российский рынок первые поставки начали производиться только в
              2023 году.
            </p>
            <p>
              К характерным чертам модельного ряда Hongqi можно отнести высокий
              уровень надежности, привлекательный внешний вид и хорошее
              техническое оснащение. Современные модели имеют качественную
              электронику.
            </p>
          </div>
        </div>
        <div className={s.accordionList}>
          <Accordion title="общая информация">
            {options.map((option) => (
              <div key={option.label} className={s.option}>
                <span className={s.optionTitle}>{option.label}</span>
                <span className={s.optionLabel}>{option.value}</span>
              </div>
            ))}
          </Accordion>
          <Accordion title="двигатель">
            {options.map((option) => (
              <div key={option.label} className={s.option}>
                <span className={s.optionTitle}>{option.label}</span>
                <span className={s.optionLabel}>{option.value}</span>
              </div>
            ))}
          </Accordion>
          <Accordion title="кузов">
            {options.map((option) => (
              <div key={option.label} className={s.option}>
                <span className={s.optionTitle}>{option.label}</span>
                <span className={s.optionLabel}>{option.value}</span>
              </div>
            ))}
          </Accordion>
          <Accordion title="эксплуатационные характеристики">
            {options.map((option) => (
              <div key={option.label} className={s.option}>
                <span className={s.optionTitle}>{option.label}</span>
                <span className={s.optionLabel}>{option.value}</span>
              </div>
            ))}
          </Accordion>
          <Accordion title="подвеска и тормоза">
            {options.map((option) => (
              <div key={option.label} className={s.option}>
                <span className={s.optionTitle}>{option.label}</span>
                <span className={s.optionLabel}>{option.value}</span>
              </div>
            ))}
          </Accordion>
          <Accordion title="трансмиссия">
            {options.map((option) => (
              <div key={option.label} className={s.option}>
                <span className={s.optionTitle}>{option.label}</span>
                <span className={s.optionLabel}>{option.value}</span>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.content}>
          <div className={`${s.hiddenContent} ${swiperIsView ? "" : s.active}`}>
            <div className={s.imageWrapper}>
              <Image src="/brand/brand-hero.jpg" fill alt="car" />
            </div>
            <div className={s.text}>
              <span className={s.title}>Hongqi E-HS9 </span>
              <div className={s.info}>
                <p>Комплектация:</p>
                <p>Hongqi E-HS9 Sport</p>
              </div>
            </div>
          </div>
          <div className={`${s.mainContent} ${swiperIsView ? "" : s.active}`}>
            <span className={s.price}>7 960 000 ₽</span>
            <div className={s.list}>
              {options.map((option) => (
                <div key={option.label} className={s.option}>
                  <span className={s.optionTitle}>{option.label}</span>
                  <span className={s.optionLabel}>{option.value}</span>
                </div>
              ))}
            </div>
            <div className={s.btns}>
              <Button variant="outline">записаться на тест-драйв</Button>
              <Button variant="primary">Заказать обратный звонок</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
