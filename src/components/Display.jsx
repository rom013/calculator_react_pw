import { ClockCountdown } from "@phosphor-icons/react";

export default function Display({oldValue, valuesDisplay}) {
    return (
        <div
            className="bg-gray-300 w-full px-4 py-2 rounded-lg"
        >
            <div
                className="flex justify-between w-full items-center"
            >
                <button
                    className="hover:bg-zinc-200 transition-colors duration-300 rounded-full p-2"
                >
                    <ClockCountdown size={18} />
                </button>
                <span>
                    {oldValue}
                </span>
            </div>

            <input
                type="text"
                value={valuesDisplay}
                className="w-full bg-inherit text-[2rem] text-zinc-900 focus-visible:outline-none"
            />
        </div>
    )
}