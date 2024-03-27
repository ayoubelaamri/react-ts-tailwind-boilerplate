import { FC, ReactElement } from "react";
import Button from "./Button";

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children: ReactElement;
}

export default function Modal(props: ModalProps): ReturnType<FC> {
  return (
    <div
      className={`${"fixed top-0 bottom-0 left-0 right-0 bg-black/30 grid place-items-center rounded-2xl"} ${
        props.open ? "display-block" : "display-none"
      }`}
    >
      <div className="grid place-items-center bg-white rounded-lg shadow-lg min-w-[300px]">
        {/* <div className="modal-head">
          <h1>Modal</h1>
        </div> */}
        <div className="p-6">{props.children}</div>
        <div className="flex items-center justify-center gap-3 border-t border-primary w-full p-3">
          <Button isAction onClick={function (): void {}}>
            Confirm
          </Button>
          <Button onClick={function (): void {}}>Close</Button>
        </div>
      </div>
    </div>
  );
}
