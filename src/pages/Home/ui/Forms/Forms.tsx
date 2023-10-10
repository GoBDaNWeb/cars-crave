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
          <RennesansIcon />
          <AlfabankIcon />
          <VtbIcon />
          <OtpBankIcon />
          <RaifBankIcon />
          <CentrBankIcon />
          <SberBankIcon />
          <RussiaBankIcon />
          <GazBankIcon />
          <TinkoffBankIcon />
          <FreedomBankIcon />
          <AvangardBankIcon />
        </div>
      </div>
    </div>
  );
};
