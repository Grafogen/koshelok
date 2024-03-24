import { AccountType } from "../src/app/page";

interface HeaderProps extends AccountType {}

export const Header = ({ address, balance, chainId, network }: HeaderProps) => {
    return (
        <div className="px-6 md:px-12 sm:px-2">
            <div className="flex justify-between items-centers">
                <div className="flex-1 px-2 mx-2">
                    <span>🟢 {address ?? "Wallet Address"}</span>
                </div>
                <div className="flex gap-8 items-center">
                    <div className="flex items-center gap-2">
                        <span>{balance ? `Balance :${balance}` : 'Balance:'}</span>

                    </div>
                    <div className="flex gap-2 item-center">
                        <span>{chainId ? `ChainId: ${chainId}` : 'ChainId:'}</span>

                    </div>
                    <div className="flex gap-2 item-center">
                        <span>{network ?`Network: ${network}` : 'Network:'}</span>

                    </div>
                </div>
            </div>
        </div>
    );
};