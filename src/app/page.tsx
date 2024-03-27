'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Wallet from "@/components/wallet";

function Page() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                flexDirection:'column',
                padding: 12,
            }}
        >
            <ConnectButton />
            <Wallet/>
        </div>
    );
}

export default Page;
