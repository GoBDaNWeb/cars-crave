import Image from "next/image";
import { FC } from "react";

interface ILogoIconProps {
  type?: "dark" | "light";
}

export const LogoIcon: FC<ILogoIconProps> = ({ type = "dark" }) => {
  return (
    <>
      {type === "dark" ? (
        <div>
          <Image src="/logo.png" width={167} height={45} alt="logo" />
        </div>
      ) : (
        <div>
          <Image src="/logo-light.png" width={167} height={45} alt="logo" />
        </div>
      )}
    </>
  );
};
