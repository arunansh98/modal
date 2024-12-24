import { createPortal } from "react-dom";

export default function Modal(props) {
  const { children } = props;
  return createPortal(
    <div
      style={{
        inset: "0px",
        position: "fixed",
        background: "black",
        opacity: 0.5,
      }}
    >
      <div
        style={{
          background: "white",
          inset: "10rem",
          position: "fixed",
          borderRadius: "5px",
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
