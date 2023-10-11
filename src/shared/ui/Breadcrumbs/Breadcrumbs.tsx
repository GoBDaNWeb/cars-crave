import { FC } from "react";
import Link from "next/link";

import s from "./styles.module.sass";
import { ClearArrowRight } from "../ClearArrowRight";

type BreadcrumbsType = {
  link: string;
  title: string;
};

interface IBreadcrumbsProps {
  breadcrumbs: BreadcrumbsType[];
  color?: "white" | "gray";
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({
  breadcrumbs,
  color = "gray",
}) => {
  const breadcrumbsClass = `${s.breadcrumbs} ${s[color]}`;

  return (
    <div className={breadcrumbsClass}>
      {breadcrumbs.map((breadcrumb) => (
        <Link href={breadcrumb.link} key={breadcrumb.title} className={s.link}>
          <p>{breadcrumb.title}</p>
          <span>
            <ClearArrowRight />
          </span>
        </Link>
      ))}
    </div>
  );
};
