export default function BorrowForm() {
    return (
        <form className="flex flex-col items-center space-y-4">
            <input
                type="number"
                placeholder="Amount to borrow"
                className="w-1/3 px-4 py-2 text-gray-300 bg-gray-700 rounded  focus:outline-none"
            />
            <input
                type="number"
                placeholder="Collateral amount"
                className="w-1/3 px-4 py-2 text-gray-300 bg-gray-700 rounded focus:outline-none"
            />
            <button
                type="submit"
                className="w-1/3 px-6 py-2 bg-blue-500 rounde focus:outline-none"
            >
                Borrow sBTC
            </button>
        </form>
    );
}
