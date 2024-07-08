interface SpellCardProps {
    title: string;
    subtitle: string;
    index: string;
    liked: boolean;
    handleClick: () => void;
    handleToggleFavoite: (
        _e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        favorite: string
    ) => void;
}
export default function SpellCard({
    title,
    subtitle,
    index,
    liked,
    handleClick,
    handleToggleFavoite,
}: SpellCardProps) {
    return (
        <div
            className=" group w-60 h-52 bg-[#f5f5f5] shadow-md rounded-sm cursor-pointer"
            onClick={() => handleClick()}
        >
            <div className="flex flex-col justify-center items-center">
                <div className="text-right w-full opacity-0 translate-y-0 transition-transform duration-200 ease-in-out group-hover:translate-y-3 group-hover:opacity-100">
                    <button
                        className="text-[#A5C588]  mr-4"
                        onClick={e => handleToggleFavoite(e, index)}
                    >
                        {liked ? "unlike" : "like"}
                    </button>
                </div>
                <div className="h-16 w-16 rounded-[50%] mb-4"></div>
                <div className="text-[#333] text-xl font-semibold">{title}</div>
                <div className="text-[#859ba8] text-sm">{subtitle}</div>
            </div>
        </div>
    );
}
