import { ChainId, Config, DAppProvider } from "@usedapp/core";

const config: Config = {
  readOnlyChainId: ChainId.xDai,
  readOnlyUrls: {
    [ChainId.xDai]: "https://rpc.xdaichain.com/",
  },
};

export const DappProvider: React.FC = props => {
  return <DAppProvider config={config}>{props.children}</DAppProvider>;
};
