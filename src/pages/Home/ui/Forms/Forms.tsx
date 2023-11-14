import {
  AlfabankIcon,
  AvangardBankIcon,
  CentrBankIcon,
  FreedomBankIcon,
  GazBankIcon,
  OtpBankIcon,
  RaifBankIcon,
  RennesansIcon,
  RussiaBankIcon,
  SberBankIcon,
  TinkoffBankIcon,
  Title,
  VtbIcon,
} from "shared/ui";
import s from "./styles.module.sass";
import { TradeInForm } from "features/TradeInForm";
import { CreditForm } from "features/CreditForm";
import Image from "next/image";
import { Fragment } from "react";

const programs = [
  { elem: <RennesansIcon /> },
  { elem: <AlfabankIcon /> },
  { elem: <VtbIcon /> },
  { elem: <OtpBankIcon /> },
  { elem: <RaifBankIcon /> },
  { elem: <CentrBankIcon /> },
  { elem: <SberBankIcon /> },
  { elem: <RussiaBankIcon /> },
  { elem: <GazBankIcon /> },
  { elem: <TinkoffBankIcon /> },
  { elem: <FreedomBankIcon /> },
  { elem: <AvangardBankIcon /> },
];

export const Forms = () => {
  return (
    <div className={s.forms}>
      <div className={s.bg} />

      <div className={s.formWrapper}>
        <TradeInForm />
        <CreditForm />
      </div>
      <div className={s.programs}>
        <Title variant="h4">гибкие программы кредитования</Title>
        <p>
          У нас действуют гибкие программы кредитования с минимальными
          процентами. Наши специалисты подберут оптимальную форму финансирования
          с тем расчетом, чтобы нагрузка на ваш бюджет была приемлемой.
        </p>
        <div className={s.programsList}>
          {programs.map((elem, index) => (
            <Fragment key={index}>{elem.elem}</Fragment>
          ))}
        </div>
        <div className={s.programsListMob}>
          <div className={s.innerList}>
            {programs.slice(0, programs.length / 2).map((elem, index) => (
              <Fragment key={index}>{elem.elem}</Fragment>
            ))}
            {programs
              .slice(0, programs.length / 2)
              .reverse()
              .map((elem, index) => (
                <Fragment key={index}>{elem.elem}</Fragment>
              ))}
          </div>
          <div className={s.innerList}>
            {programs
              .slice(programs.length / 2, programs.length)
              .reverse()
              .map((elem, index) => (
                <Fragment key={index}>{elem.elem}</Fragment>
              ))}
            {programs
              .slice(programs.length / 2, programs.length)
              .map((elem, index) => (
                <Fragment key={index}>{elem.elem}</Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
