import React from "react";
import { Input } from "../Inputs";
import Switch from "../Inputs/InputSwitch";
import TextArea from "../Inputs/TextArea";
import Button from "../Buttons/Button";
import { useFormContext } from "react-hook-form";
import { FormInputsRG20 } from "./StepContainer";

interface Props {
  goBack: () => void;
  goNext: () => void;
}

const Step1: React.FC<Props> = ({ goBack, goNext }) => {
  const { setValue, watch } = useFormContext<FormInputsRG20>();
  const [isTransform, setIsTransform] = React.useState(false);

  return (
    <>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 w-full lg:p-4">
        <h2 className="col-span-2 lg:col-span-4 text-lg">Basic Settings</h2>
        <Input label="Token Name" container="col-span-2" value={watch("name")} onChange={(e) => setValue("name", e.target.value)} />
        <Input label="Initial Supply" container="col-span-2" value={watch("cap")} onChange={(e) => setValue("cap", e.target.value)} />
        <Input label="Symbol" container="col-span-1" value={watch("symbol")} onChange={(e) => setValue("symbol", e.target.value)} />
        <Input label="Decimals" container="col-span-1" value={watch("decimals")} onChange={(e) => setValue("decimals", +e.target.value)} />
        <Input label="Logo/Image url" container="col-span-2" value={watch("imgUrl")} onChange={(e) => setValue("imgUrl", e.target.value)} />
        <Input
          label={`Price per Token (INJ)`}
          container="col-span-2"
          value={watch("price")}
          onChange={(e) => setValue("price", e.target.value)}
        />
        <TextArea
          label="Description"
          container="col-span-2 lg:col-span-4"
          value={watch("description")}
          onChange={(e) => setValue("description", e.target.value)}
        />
        <h2 className="col-span-2 lg:col-span-4 mt-8 text-lg">Define RG-Token</h2>
        {/* <Input label="Token Prospectus URL" container="col-span-2 lg:col-span-4" /> */}
        <Switch name="udenom" label="Transform native token" checked={isTransform} onChange={(e) => setIsTransform(e.target.checked)} />
        <Input
          label="Denom"
          container="lg:col-span-3"
          disabled={!isTransform}
          value={watch("transform")}
          onChange={(e) => setValue("transform", e.target.value)}
        />
      </div>
      <div className="flex w-full items-center justify-end">
        <div>
          <Button onClick={goNext}>Next</Button>
        </div>
      </div>
    </>
  );
};

export default Step1;
