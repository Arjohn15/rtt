import FluentEmojiRescueWorkersHelmet from "./FluentEmojiRescueWorkersHelmet";
function RequestRescuerButton({ onClickOpen }) {

    return (
        <button onClick={onClickOpen} className="fixed bottom-[3rem] right-[1rem] text-red font-arimo font-bold flex items-center text-xs bg-white drop-shadow-xl p-[0.5rem] border-2 border-[rgba(233,75,74,0.5)] rounded-lg lg:text-base lg:bottom-[2rem] lg:right-[2rem]">
            <div className="mr-[0.5rem]">
                <FluentEmojiRescueWorkersHelmet width="18" height="18" />
            </div>
            <span>Request now</span>
        </button>
    );
}

export default RequestRescuerButton;