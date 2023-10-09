import { Map as YMap, Placemark, YMaps } from "@pbe/react-yandex-maps";
import s from "./styles.module.sass";
export const Map = () => {
  return (
    <div className={s.map}>
      <YMaps>
        <YMap
          defaultState={{
            center: [55.84742656888428, 37.478171499999995],
            zoom: 16,
          }}
          style={{ width: "100%", height: "100%" }}
        >
          {/* <Placemark
            geometry={[55.86752247044282, 37.579347650787305]}
            options={{
              draggable: false,
              iconLayout: "default#image",
              iconImageHref: pin.src,
              iconImageSize: [232, 32],
            }}
          /> */}
        </YMap>
      </YMaps>
    </div>
  );
};
