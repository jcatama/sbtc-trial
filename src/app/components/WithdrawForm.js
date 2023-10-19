export default function WithdrawForm() {
    return (
        <form className="flex items-center justify-center space-x-4">
            <input
                type="number"
                placeholder="Amount of sBTC to withdraw"
                className="w-1/3 px-4 py-2 text-gray-300 bg-gray-700 rounded focus:outline-none"
            />
            <button
                type="submit"
                className="px-6 py-2 bg-blue-500 rounded focus:outline-none"
            >
                Withdraw to BTC
            </button>
        </form>
    );
}
