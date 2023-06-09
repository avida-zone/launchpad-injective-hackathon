import { toBase64, toUtf8 } from "@cosmjs/encoding";

export function fromNanoSecondsToSeconds(nanoSeconds: string | number): number {
  return Number(nanoSeconds) / 1e6;
}

export function convertMicroDenomToDenom(amount?: number | string, exponent = 6, fixed = 2) {
  if (!amount) return 0;
  if (typeof amount === "string") {
    amount = Number(amount);
  }
  amount = amount / Math.pow(10, exponent);
  return isNaN(amount) ? 0 : Number(amount.toFixed(fixed));
}

export function convertDenomToMicroDenom(amount: number | string, exponent = 6): string {
  if (typeof amount === "string") {
    amount = Number(amount);
  }
  amount = Math.ceil(amount * Math.pow(10, exponent));
  return isNaN(amount) ? "0" : String(amount);
}

export function convertFromMicroDenom(denom: string) {
  return denom?.substring(1).toUpperCase();
}

export function convertToFixedDecimals(amount: number | string): string {
  if (typeof amount === "string") {
    amount = Number(amount);
  }
  if (amount > 0.01) {
    return amount.toFixed(2);
  } else return String(amount);
}

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const coin = (amount: number | string, denom: string) => {
  return {
    amount: typeof amount === "number" ? amount.toString() : amount,
    denom,
  };
};

export const toCosmosMsg = <T = unknown>(msg: T): string => {
  return toBase64(toUtf8(JSON.stringify(msg)));
};
