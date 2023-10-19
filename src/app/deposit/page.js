import DepositForm from '../components/DepositForm';

export const metadata = {
    title: 'Deposit Sats',
    description: 'A decentralized Bitcoin lending application',
};

export default function Deposit() {
    return (
        <div className="min-h-screen text-white bg-black">
            <h2 className="mb-6 text-3xl text-center">
                Deposit Sats to Mint sBTC
            </h2>
            <DepositForm />
        </div>
    );
}
