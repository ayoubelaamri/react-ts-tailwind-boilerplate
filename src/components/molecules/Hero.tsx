import Button from "components/ui/Button";
import Input from "components/ui/Input";
import LoadingSpin from "components/atoms/animations/LoadingSpin";
import { ChangeEvent } from "react";
import LoadingDots from "components/atoms/animations/LoadingDots";
import Modal from "components/ui/Modal";
import Select from "components/ui/Select";
import TextArea from "components/ui/TextArea";

export default function Hero() {
  return (
    <div>
      <TextArea
        name={""}
        placeholder={""}
        onChange={function (e: ChangeEvent<HTMLTextAreaElement>): void {
          // throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
