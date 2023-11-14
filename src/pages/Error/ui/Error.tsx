import { Button, Title } from "shared/ui";
import s from "./styles.module.sass";
import { useRouter } from "next/router";

export const Error = () => {
  const { push } = useRouter();

  return (
    <div className={s.error}>
      <Title variant="h1">404</Title>
      <div className={s.text}>
        <span>Страница не найдена или была удалена</span>
        <Button
          onClick={() => push("/")}
          variant="primary"
          className={s.onMain}
        >
          на главную
        </Button>
      </div>
    </div>
  );
};
