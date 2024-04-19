import { http, createConfig } from 'wagmi'
import { baseSepolia  } from 'wagmi/chains'

import { lumio , coredao } from './customchains'

export const config = createConfig({
  chains: [baseSepolia, lumio, coredao],
  transports: {
    [baseSepolia.id]: http(baseSepolia.rpcUrls.default.http[0]),
    [lumio.id]: http(lumio.rpcUrls.default.http[0]),
    [coredao.id]: http(coredao.rpcUrls.default.http[0]),
  },
})