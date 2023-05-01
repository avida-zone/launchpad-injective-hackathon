import React from "react";
import { Input } from "../Inputs";
import Switch from "../Inputs/InputSwitch";
import TextArea from "../Inputs/TextArea";

const Step1: React.FC = () => {
  return (
    <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 w-full lg:p-4">
      <h2 className="col-span-2 lg:col-span-4 text-lg">Basic Settings</h2>
      <Input label="Token Name" container="col-span-2" />
      <Input label="Initial Supply" container="col-span-2" />
      <Input label="Symbol" container="col-span-1" />
      <Input label="Decimals" container="col-span-1" />
      <Input label="Logo/Image url" container="col-span-2" />
      <TextArea label="Description" container="col-span-2 lg:col-span-4" />
      <h2 className="col-span-2 lg:col-span-4 mt-8 text-lg">Define RG-Token</h2>
      <Input label="Token Prospectus URL" container="col-span-2 lg:col-span-4" />
      <Switch name="udenom" label="Transform native token" />
      <Input label="Denom" container="lg:col-span-3" disabled />
    </div>
  );
};

export default Step1;
