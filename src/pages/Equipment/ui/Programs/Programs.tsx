import { Fragment } from "react";
import s from "./styles.module.sass";
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
  VtbIcon,
} from "shared/ui";
import { CreditForm } from "features/CreditForm";
export const Programs = () => {
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

  return (
    <div className={s.programs}>
      <div className={`${s.top} container`}>
        <span className={s.title}>гибкие программы кредитования</span>
        <p>
          У нас действуют гибкие программы кредитования с минимальными
          процентами. Наши специалисты подберут оптимальную форму финансирования
          с тем расчетом, чтобы нагрузка на ваш бюджет была приемлемой.
        </p>
      </div>
      <div className={`${s.programsList} container`}>
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
      <div className={s.formWrapper}>
        <CreditForm />
      </div>
    </div>
  );
};
