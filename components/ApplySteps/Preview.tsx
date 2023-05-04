import React, { useEffect } from "react";
import Button from "../Buttons/Button";
import { useFormContext } from "react-hook-form";
import { FormInputsRG20 } from "./StepContainer";
import { useCosmos } from "~/providers/CosmosProvider";
import { useToast } from "~/hooks/useToast";
import { BigNumber } from "@injectivelabs/utils";

interface Props {
  goBack: () => void;
  goNext: () => void;
}

const Preview: React.FC<Props> = ({ goBack, goNext }) => {
  const { formState, handleSubmit, getValues } = useFormContext<FormInputsRG20>();

  const { isSubmitSuccessful } = formState;

  const { cap, decimals, description, imgUrl, name, symbol, trusted_issuers, transform, proof } = getValues();
  const { txService, addresses } = useCosmos();
  const { toast } = useToast();

  const onSubmit = handleSubmit(async (inputs) => {
    if (!txService) return;

    const rg20msg = {
      decimals: inputs.decimals,
      initial_balances: [],
      marketing: {
        logo: { url: inputs.imgUrl },
        description: inputs.description,
      },
      mint: { cap: inputs.cap, minter: addresses.launchpadAddress },
      name: inputs.name,
      req_params: [inputs.proof],
      symbol: inputs.symbol,
      trusted_issuers: [inputs.trusted_issuers],
    };

    const launchMsg = inputs.transform
      ? {
          label: inputs.name,
          launch_type: { transform: inputs.transform },
          msg: rg20msg,
        }
      : {
          label: inputs.name,
          launch_type: {
            new: { cap: inputs.cap, price: [{ amount: BigNumber(Math.pow(10, 18)).multipliedBy(inputs.price).toFixed(), denom: "inj" }] },
          },
          msg: rg20msg,
        };

    await toast.promise(txService.createRgToken({ launch: launchMsg }));
  });

  useEffect(() => {
    if (isSubmitSuccessful) goNext();
  }, [isSubmitSuccessful]);

  return (
    <>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 w-full lg:p-4">
        <h2 className="col-span-2 md:col-span-4 text-lg">Final Preview</h2>

        <div className="col-span-2">
          <span className="text-xs text-gray-400">Token Name</span>
          <p className="text-sm">{name}</p>
        </div>
        <div className="col-span-2 row-span-2 flex items-center lg:justify-end">
          <img src={imgUrl} alt={symbol} className="w-[10rem] h-[10rem] object-cover rounded-full" />
        </div>
        <div>
          <span className="text-xs text-gray-400">Symbol</span>
          <p className="text-sm">{symbol}</p>
        </div>
        <div>
          <span className="text-xs text-gray-400">Cap</span>
          {/*  <p className="text-sm">{formatNumber(data.initialSuply)}</p> */}
          <p className="text-sm">{cap}</p>
        </div>

        <div>
          <span className="text-xs text-gray-400">Decimals</span>
          <p className="text-sm">{decimals}</p>
        </div>
        {transform ? (
          <div>
            <span className="text-xs text-gray-400">Native token</span>
            <p className="text-sm">{transform}</p>
          </div>
        ) : null}
        {/* <div className="col-span-2 flex flex-col">
          <span className="text-xs text-gray-400 ">Token Prospectus URL</span>
          <Link className="text-sm truncate hover:text-java-green-600" href={data.tokenUrl} target="_blank">
            {data.tokenUrl}
          </Link>
        </div> */}

        {/* <div className="col-span-2">
          <span className="text-xs text-gray-400 ">Proof Schema</span>
          <p className="text-sm truncate">pROOF</p>
        </div> */}

        <div className="col-span-2">
          <span className="text-xs text-gray-400 ">Trusted Issuer</span>
          <p className="text-sm truncate">{trusted_issuers}</p>
        </div>

        <div className="col-span-2 md:col-span-4">
          <span className="text-xs text-gray-400 ">Description</span>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <Button variant="cuaternary" onClick={goBack}>
            Back
          </Button>
        </div>
        <div>
          <Button onClick={onSubmit}>Create Token</Button>
        </div>
      </div>
    </>
  );
};

export default Preview;
