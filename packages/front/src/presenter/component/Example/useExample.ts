import { example } from "@tommy_baron/core/example";
import React from "react";

type UseExample = () => {
  isSome: boolean;
  monorepoValue: string;
};
export const useExample: UseExample = () => {
  const [isSome] = React.useState(true);

  return {
    isSome,
    monorepoValue: example(),
  };
};
