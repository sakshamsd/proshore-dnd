import { Card } from "./card";
import LikeButton from "./like-button";

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
        <Card
            className="group w-60 h-52  shadow-md  cursor-pointer"
            onClick={() => handleClick()}
        >
            <div className="flex flex-col justify-center items-center">
                <div className="text-right pr-2 w-full opacity-0 translate-y-0 transition-transform duration-200 ease-in-out group-hover:translate-y-3 group-hover:opacity-100">
                    <LikeButton
                        isLiked={liked}
                        handleClick={e => handleToggleFavoite(e, index)}
                    />
                </div>
                <div className="h-16 w-16 rounded-[50%] mb-4 bg-gradient-to-t from-[#f1e1c1]  to-[#fcbc97] border-gray-200 border-2"></div>
                <div className="text-[#333] text-xl font-semibold">{title}</div>
                <div className="text-[#859ba8] text-sm">{subtitle}</div>
            </div>
        </Card>
    );
}
