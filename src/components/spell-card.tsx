interface SpellCardProps {
    title: string;
    subtitle: string;
    handleClick: () => void;
}
export default function SpellCard({
    title,
    subtitle,
    handleClick,
}: SpellCardProps) {
    return (
        <div
            className="w-60 h-52 bg-[#f5f5f5] shadow-md rounded-sm cursor-pointer"
            onClick={() => handleClick()}
        >
            <div className="flex flex-col justify-center items-center">
                <div className="h-16 w-16 rounded-[50%] mb-4"></div>
                <div className="text-[#333] text-xl font-semibold">{title}</div>
                <div className="text-[#859ba8] text-sm">{subtitle}</div>
            </div>
        </div>
    );
}
