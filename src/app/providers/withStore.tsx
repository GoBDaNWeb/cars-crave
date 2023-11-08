import { FC } from "react";

import { MenuProvider } from "widgets/Menu";

export const withStore = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function WithStoreComponent(props: T) {
    return (
      <MenuProvider>
        <Component {...props} />
      </MenuProvider>
    );
  };
};
