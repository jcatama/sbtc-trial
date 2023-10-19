export default function ConnectWallet({ userSession, setUserData }) {
    const disconnect = () => {
        userSession.signUserOut(window.location.origin);
        setUserData({});
    };
    return (
        <button
            className="bg-blue-500 px-4 py-2 font-bold text-white rounded"
            onClick={() => {
                disconnect();
            }}
        >
            Disconnect
        </button>
    );
}
