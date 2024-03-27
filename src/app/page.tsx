import { ConnectButton } from '@rainbow-me/rainbowkit';
import Wallet from "@/components/wallet";

function Page() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: 12,
            }}
        >
            <ConnectButton />
            <Wallet/>
        </div>
    );
}

export default Page;
