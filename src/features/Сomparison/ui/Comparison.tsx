import { useRouter } from "next/router";

import s from "./styles.module.sass";

import { Button, CompareIcon } from "shared/ui";

export const Comparison = () => {
  const { push } = useRouter();
  return (
    <Button className={s.comparison} onClick={() => push("/")}>
      <span className={s.quantity}></span>
      <CompareIcon />
    </Button>
  );
};
