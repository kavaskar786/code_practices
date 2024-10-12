import { createPortal } from "react-dom";
const Popup = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copied to Clip Board
        </div>
      )}
    </section>,
    document.querySelector("#test")
  );
};
export default Popup;
