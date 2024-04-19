import { type Chain } from "viem";

export const lumio: Chain = {
  id: 9990,
  name: "LumioL2Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "LumioL2Testnet",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://testnet.lumio.io"] },
  },
  blockExplorers: {
    default: { name: "lumio", url: "https://explorer.testnet.lumio.io" },
  },
  testnet: true,
};


export const coredao: Chain = {
    id: 1115,
    name: "Core Blockchain Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "Core Blockchain Testnet",
      symbol: "tCORE",
    },
    rpcUrls: {
      default: { http: ["https://rpc.test.btcs.network"] },
    },
    blockExplorers: {
      default: { name: "coredao", url: "https://scan.test.btcs.network" },
    },
    testnet: true,
  };