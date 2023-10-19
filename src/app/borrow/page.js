import BorrowForm from '../components/BorrowForm';

export const metadata = {
    title: 'Borrow Sats',
    description: 'A decentralized Bitcoin lending application',
};

export default function Borrow() {
    return (
        <div className="min-h-screen text-white bg-black">
            <h2 className="mb-6 text-3xl text-center">Borrow sBTC</h2>
            <BorrowForm />
        </div>
    );
}
