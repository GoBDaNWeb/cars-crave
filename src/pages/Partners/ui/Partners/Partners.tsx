import { Breadcrumbs, Title } from "shared/ui";
import s from "./styles.module.sass";
import { breadcrumbs } from "pages/Partners/config";
import { PartnersList } from "../PartnersList/PartnersList";

export const Partners = () => {
  return (
    <div className={`${s.partners} container`}>
      <div className={s.breadcrumbWrapper}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <Title variant="h3">патнёры</Title>
      <span className={s.mobTitle}>
        Среди наших партнёров ведущие российские банки.
      </span>
      <PartnersList />
    </div>
  );
};
