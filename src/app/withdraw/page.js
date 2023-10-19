import WithdrawForm from '../components/WithdrawForm';

export const metadata = {
    title: 'Withdraw',
    description: 'A decentralized Bitcoin lending application',
};

export default function Withdraw() {
    return (
        <div className="min-h-screen text-white bg-black">
            <h2 className="mb-6 text-3xl text-center">Withdraw sBTC to BTC</h2>
            <WithdrawForm />
        </div>
    );
}
