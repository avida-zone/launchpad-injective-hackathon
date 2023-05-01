import React from "react";
import { Input } from "../Inputs";
import Switch from "../Inputs/InputSwitch";

const Step1: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-full p-4">
      <h2 className="md:col-span-2 lg:col-span-4">Define RG-Token</h2>
      <Input label="Token Name" container="col-span-2" />
      <Input label="Symbol" container="col-span-2" />
      <Input label="Initial Supply" container="col-span-2" />
      <Input label="Decimals" container="col-span-2" />
      <Switch name="burn" label="Allow burn" />
      <Switch name="pause" label="Allow pause" />
      <Switch name="mint" label="Allow mint" />
      <Switch name="blacklist" label="Allow blacklist" />
    </div>
  );
};

export default Step1;
