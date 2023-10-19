import { showConnect } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';

export default function ConnectWallet({ userSession }) {
    const connect = () => {
        showConnect({
            userSession,
            network: StacksTestnet,
            appDetails: {
                name: 'BitLoan Trial',
                icon: 'https://freesvg.org/img/bitcoin.png',
            },
            onFinish: () => {
                window.location.reload();
            },
        });
    };

    return (
        <button
            className="bg-blue-500 px-4 py-2 font-bold text-white rounded"
            onClick={() => {
                connect();
            }}
        >
            Connect Wallet
        </button>
    );
}
