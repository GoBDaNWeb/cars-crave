import { useState } from "react";
import { Range as ReactRange, getTrackBackground } from "react-range";

export const Range = () => {
  const [values, setValues] = useState({ values: [50] });
  return (
    <ReactRange
      step={0.1}
      min={0}
      max={100}
      values={values.values}
      onChange={(values) => setValues({ values })}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: values.values,
                colors: ["#7434A4", "#F2F4F8"],
                min: 0,
                max: 100,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "15px",
            width: "15px",
            borderRadius: "999px",
            backgroundColor: "#7434A4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #9C9FAE",
          }}
        >
          <div
            style={{
              margin: "auto",
              height: "11px",
              width: "11px",
              borderRadius: "999px",
              backgroundColor: isDragged ? "#7434A4" : "#fff",
            }}
          />
        </div>
      )}
    />
  );
};
