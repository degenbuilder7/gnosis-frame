import React from 'react'
import { HeartBit } from "@fileverse/heartbit-react";
import { useSigner, Web3Button } from "@thirdweb-dev/react";
import {
    getContractForErc721OpenEdition,
  } from "../utils/tx-frame";
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

console.log(getContractForErc721OpenEdition)

export default function hearbitMint () {
    const signer = useSigner();
    console.log(signer)
  return (
    <div>hearbitMint</div>
  )
}

// export default function hearbitMint = () => {
//     const provider = new BrowserProvider((window as any).ethereum);
//     const coreOptions = {
//       chain: "0xaa36a7" as SupportedChain
//     }
  
//     const getSignatureArgsHook = async () => {
//     //   const signer = await provider.getSigner()
//     //   const address = await signer.getAddress();
  
//       const siweMessage = new siweMessage({
//         domain: window.location.host,
//         address,
//         statement: "Hello World!",
//         uri: window.location.origin,
//         version: "1",
//       });
  
//       const message = siweMessage.prepareMessage();
//       const signature = await signer.signMessage(message);
  
//       return {
//         message,
//         signature,
//         onMintCallback: () => {
//           console.log("Minted!")
//         }
//       };
//     };
  
//    const hash = "ipfs//cid"; // This is an identifier for the token, if this hash changes you mint a new token in that case
  
//     return <HeartBit
//             coreOptions={coreOptions}
//             getSignatureArgsHook={getSignatureArgsHook}
//             hash={hash}
//           />;
//   }
