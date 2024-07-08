import { useNavigate, useParams } from "react-router-dom";
import useGetSpellDetails from "../hooks/useGetSpellDetails";
import { useDispatch, useSelector } from "react-redux";
import { SpellsListState, toggleFavoriteSpell } from "../services/spells";
import { AppState } from "../services/store";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/card";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Badge } from "../components/badge";
import LikeButton from "../components/like-button";

function SpellDetails() {
    const { id } = useParams();
    const { spellDetails } = useGetSpellDetails(id);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const { favorites } = useSelector(
        (state: AppState) => state.spellsList as SpellsListState
    );
    const value = favorites?.includes(spellDetails?.index as string)
        ? true
        : false;

    const handleToggleLike = () => {
        dispatch(toggleFavoriteSpell(spellDetails?.index as string));
    };

    return (
        <div className="flex justify-center">
            <Card className="w-[840px]">
                <CardHeader>
                    <div className="flex gap-2">
                        <button onClick={() => navigate(-1)}>
                            <ArrowLeftIcon />
                        </button>
                        <CardTitle className="w-full text-left">
                            {spellDetails?.name}
                        </CardTitle>

                        <LikeButton
                            isLiked={value}
                            handleClick={handleToggleLike}
                        />
                    </div>

                    <CardDescription className="text-left ml-6 ">
                        Level {spellDetails?.level} {spellDetails?.school.name}
                    </CardDescription>
                    <CardContent>
                        <div className="flex gap-8 justify-between">
                            <div className="flex flex-col ">
                                <span className="text-sm text-gray-600">
                                    Casting time
                                </span>
                                <span>{spellDetails?.casting_time}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-600">
                                    Range/Area
                                </span>
                                <span>{spellDetails?.range}</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-sm text-gray-600">
                                    Duration time
                                </span>
                                <span>{spellDetails?.duration}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-600">
                                    Components
                                </span>
                                <span>{spellDetails?.components}</span>
                            </div>
                        </div>
                        <p className="mt-4 mb-4">{spellDetails?.desc}</p>
                        <div className="flex gap-5">
                            {spellDetails?.classes.map(c => (
                                <Badge key={c.index}>{c.name} </Badge>
                            ))}
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    );
}

export default SpellDetails;
