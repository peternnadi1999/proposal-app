import { useCallback, useEffect, useState } from "react";
import { Box } from "@radix-ui/themes";
import Layout from "./components/Layout";
import CreateProposalModal from "./components/CreateProposalModal";
import {
    useAppKitAccount,
    useAppKitProvider,
    useWalletInfo,
} from "@reown/appkit/react";
import Proposals from "./components/Proposals";
import useContract from "./hooks/useContract";
import useFetchProposals from "./hooks/useFetchProposals";




function App() {
    const { walletProvider } = useAppKitProvider("eip155");
    const { walletInfo } = useWalletInfo();
    const { address, status, isConnected } = useAppKitAccount();
   

    const readOnlyProposalContract = useContract();

    const { proposals } = useFetchProposals();

   
    return (
        <Layout>
            <Box className="flex justify-end p-4">
                <CreateProposalModal />
            </Box>
            <Box className="">
                <Proposals proposals={proposals} />
            </Box>
        </Layout>
    );
}

export default App;
