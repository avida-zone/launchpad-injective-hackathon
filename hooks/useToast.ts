import { useState } from "react";
import toast from "react-hot-toast";
import { TxError } from "~/utils/txErrors";

export const useToast = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const promise = async function <T>(promise: Promise<T>, delay?: number): Promise<T | undefined> {
    try {
      setIsLoading(true);
      return await toast.promise(
        (async () => {
          const result = await promise;
          if (delay) await new Promise((resolve) => setTimeout(resolve, delay));
          return result;
        })(),
        {
          loading: "Loading...",
          success: (e: T) => {
            setIsLoading(false);
            toast.dismiss("tx.loading");
            return `Success`;
          },
          error: (err) => {
            setIsLoading(false);
            toast.dismiss("tx.loading");
            return `Error: ${new TxError(err).pretty()}`;
          },
        },
        {
          error: {
            id: "tx.error",
            style: { maxWidth: "400px" },
          },
          success: {
            id: "tx.success",
          },
          loading: {
            id: "tx.loading",
          },
        }
      );
    } catch (err) {
      setIsLoading(false);
      throw err;
    }
  };

  const error = (err: string) => {
    toast.error(`${err}`, {
      id: "tx.error",
    });
  };

  return {
    isLoading,
    toast: {
      promise,
      error,
    },
  };
};
