import React from "react";
import { Input } from "../Inputs";
import { useForm } from "react-hook-form";
import Button from "../Buttons/Button";
import { useToast } from "~/hooks/useToast";
import { useCosmos } from "~/providers/CosmosProvider";

interface Props {
  contractAddress: string;
}

interface FormInputs {
  controllerAddress: string;
  amount: string;
}

const ModalBuyTokens: React.FC<Props> = ({ contractAddress }) => {
  const { watch, setValue, handleSubmit } = useForm<FormInputs>();
  const { txService } = useCosmos();
  const { toast } = useToast();

  const onSubmit = handleSubmit(async (data) => {
    if (!txService) return;
    await toast.promise(txService.buyRgToken(data.controllerAddress, contractAddress, data.amount));
  });

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl">Buy assets</h2>
      <p>
        Its necessary to have a valid credential in your wallet <br />
        <span>The contract will check the validaty of the credential before to mint the token</span>
        <br />
        <span>If the credentials is not valid, the purchase will be canceled</span>
      </p>
      <p>Please insert the controller of your smart contract wallet</p>
      <Input
        placeholder="Controller Address"
        value={watch("controllerAddress")}
        onChange={(e) => setValue("controllerAddress", e.target.value)}
      />
      <Input placeholder="Amount to buy" value={watch("amount")} onChange={(e) => setValue("amount", e.target.value)} />

      <Button onClick={onSubmit}>Buy Token</Button>
    </div>
  );
};

export default ModalBuyTokens;
