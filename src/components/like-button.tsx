import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
interface LikeButtonProps {
    isLiked: boolean;
    handleClick: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
function LikeButton({ isLiked, handleClick }: LikeButtonProps) {
    return (
        <button onClick={e => handleClick(e)}>
            {isLiked ? (
                <HeartFilledIcon
                    className="text-red-600 "
                    width={24}
                    height={24}
                />
            ) : (
                <HeartIcon
                    width={24}
                    height={24}
                />
            )}
        </button>
    );
}

export default LikeButton;
