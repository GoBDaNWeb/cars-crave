import Image from "next/image";
import { FC } from "react";

interface ILogoIconProps {
  type?: "dark" | "light";
  width?: number;
  height?: number;
}

export const LogoIcon: FC<ILogoIconProps> = ({
  type = "dark",
  width = 167,
  height = 45,
}) => {
  return (
    <>
      {type === "dark" ? (
        <div>
          <Image src="/logo.png" fill alt="logo" />
        </div>
      ) : (
        <div>
          <Image
            src="/logo-light.png"
            width={width}
            height={height}
            alt="logo"
          />
        </div>
      )}
    </>
  );
};
