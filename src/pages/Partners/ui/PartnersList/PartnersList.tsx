import {
  AfterpayIcon,
  AlfabankIcon,
  AtlassianIcon,
  AvangardBankIcon,
  CentrBankIcon,
  FreedomBankIcon,
  GazBankIcon,
  GhostIcon,
  GramarlyIcon,
  OpendoorIcon,
  OtpBankIcon,
  OutreachIcon,
  PendoIcon,
  RaifBankIcon,
  RennesansIcon,
  RussiaBankIcon,
  SberBankIcon,
  SegmentIcon,
  TinkoffBankIcon,
  VtbIcon,
} from "shared/ui";
import s from "./styles.module.sass";
import { PartnerItem } from "../PartnerItem/PartnerItem";

export const PartnersList = () => {
  return (
    <div className={s.partnersList}>
      <div className={s.rowWithText}>
        <p>Среди наших партнёров ведущие российские банки.</p>
        <div className={s.rows}>
          <div className={s.row1}>
            <PartnerItem>
              <RennesansIcon />
            </PartnerItem>
            <PartnerItem>
              <VtbIcon />
            </PartnerItem>
            <PartnerItem>
              <RaifBankIcon />
            </PartnerItem>
          </div>
          <div className={s.row2}>
            <PartnerItem>
              <TinkoffBankIcon />
            </PartnerItem>
            <PartnerItem>
              <SberBankIcon />
            </PartnerItem>
          </div>
        </div>
      </div>
      <div className={s.row3}>
        <PartnerItem>
          <OtpBankIcon />
        </PartnerItem>
        <PartnerItem>
          <AlfabankIcon />
        </PartnerItem>
        <PartnerItem>
          <GazBankIcon />
        </PartnerItem>
      </div>
      <div className={s.row4}>
        <PartnerItem>
          <CentrBankIcon />
        </PartnerItem>
        <PartnerItem>
          <AvangardBankIcon />
        </PartnerItem>
        <PartnerItem>
          <FreedomBankIcon />
        </PartnerItem>
        <PartnerItem>
          <RussiaBankIcon />
        </PartnerItem>
      </div>
      <div className={s.row5}>
        <PartnerItem>
          <OpendoorIcon />
        </PartnerItem>
        <PartnerItem>
          <PendoIcon />
        </PartnerItem>
        <PartnerItem>
          <GhostIcon />
        </PartnerItem>
        <div></div>
      </div>
      <div className={s.row6}>
        <PartnerItem>
          <SegmentIcon />
        </PartnerItem>
        <PartnerItem>
          <OutreachIcon />
        </PartnerItem>
      </div>
      <div className={s.row7}>
        <PartnerItem>
          <GramarlyIcon />
        </PartnerItem>
        <PartnerItem>
          <AtlassianIcon />
        </PartnerItem>
        <PartnerItem>
          <AfterpayIcon />
        </PartnerItem>
        <div></div>
      </div>
    </div>
  );
};
