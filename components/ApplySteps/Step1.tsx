import React from "react";
import { Input } from "../Inputs";
import Switch from "../Inputs/InputSwitch";

const Step1: React.FC = () => {
  return (
    <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 w-full p-4">
      <h2 className="col-span-2 lg:col-span-4">Basic Settings</h2>
      <Input label="Token Name" container="col-span-2" />
      <Input label="Symbol" container="col-span-2" />
      <Input label="Initial Supply" container="col-span-2" />
      <Input label="Decimals" container="col-span-2" />
      <h2 className="col-span-2 lg:col-span-4 mt-8">Define RG-Token</h2>
      <Input label="Token Prospectus URL" container="col-span-2 lg:col-span-4" />
      <Switch name="udenom" label="Transform native token" />
      <Input label="Denom" container="lg:col-span-3" disabled />
    </div>
  );
};

export default Step1;
