import { FC, ReactElement } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
}

export default function Modal(props: ModalProps): ReturnType<FC> {
  return (
    <div
      className={`${"fixed top-0 bottom-0 left-0 right-0 bg-black/30 grid place-items-center"} ${props.open ? "display-block" : "display-none"}`}
    >
      <div className="fixed bg-white rounded-lg shadow-lg p-6">
        <div className="modal-head">
          <h1>Modal</h1>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
