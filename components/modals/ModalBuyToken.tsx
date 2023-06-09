import React from "react";
import { Input } from "../Inputs";
import { useForm } from "react-hook-form";
import Button from "../Buttons/Button";
import { useToast } from "~/hooks/useToast";
import { useCosmos } from "~/providers/CosmosProvider";
import { BigNumber } from "@injectivelabs/utils";
import { useModal } from "~/providers/ModalProvider";

interface Props {
  contractAddress: string;
  issuer: string;
  tokenSymbol: string;
  exponent: number;
  type: "new" | "transform" | "revert";
  price: { amount: string; denom: string };
}

interface FormInputs {
  controllerAddress: string;
  amount: string;
}

const ModalBuyTokens: React.FC<Props> = ({ contractAddress, issuer, tokenSymbol, exponent, price, type }) => {
  const { watch, setValue, handleSubmit } = useForm<FormInputs>();
  const { hideModal } = useModal();
  const { txService } = useCosmos();
  const { toast } = useToast();

  const isNew = type === "new";

  const text = isNew ? "Buy Tokens" : type === "transform" ? "Transform Tokens" : "Revert Tokens";

  const onSubmit = handleSubmit(async ({ controllerAddress, amount }) => {
    if (!txService) return;
    if (isNew) {
      const funds = BigNumber(price.amount).multipliedBy(amount).toFixed();
      await toast.promise(txService.buyRgToken(controllerAddress, contractAddress, amount, { amount: funds, denom: price.denom }, issuer));
    } else if (type === "transform") {
      await toast.promise(txService.transformIntoRgToken(controllerAddress, contractAddress, { amount, denom: "inj" }, issuer));
    } else {
      await toast.promise(txService.transformIntoNativeToken(controllerAddress, contractAddress, amount, issuer));
    }

    hideModal();
  });

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl">{text}</h2>
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
      <Input
        placeholder={isNew ? "Amount to Buy" : type === "revert" ? "Amount to Revert" : "Amount to Trasnsform"}
        value={watch("amount")}
        onChange={(e) => setValue("amount", e.target.value)}
      />

      <Button onClick={onSubmit}>{text}</Button>
    </div>
  );
};

export default ModalBuyTokens;
