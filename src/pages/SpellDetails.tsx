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
import LikeButton from "../components/like-button";
import { cn, spellClass, spellClassColor } from "../utils";
import Spinner from "../common/Spinner";

function SpellDetails() {
    const { id } = useParams();
    const { spellDetails, loading } = useGetSpellDetails(id);
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

    if (loading) {
        return <Spinner />;
    }

    const detailsComponent = (title: string, value: string | undefined) => {
        return (
            <div className="flex flex-col ">
                <span className="text-xs text-gray-600">{title}</span>
                <span>{value}</span>
            </div>
        );
    };

    return (
        <div className="flex justify-center">
            <Card className="w-[840px]">
                <CardHeader>
                    <div className="flex gap-2">
                        <button onClick={() => navigate(-1)}>
                            <ArrowLeftIcon />
                        </button>
                        <CardTitle className="w-full text-left text-red-600">
                            {spellDetails?.name}
                        </CardTitle>

                        <LikeButton
                            isLiked={value}
                            handleClick={handleToggleLike}
                        />
                    </div>

                    <CardDescription className="text-left ml-6 ">
                        Level {spellDetails?.level}
                    </CardDescription>
                    <CardContent>
                        <div className="flex mt-2 gap-8 justify-between">
                            {detailsComponent(
                                "Casting time",
                                spellDetails?.casting_time
                            )}
                            {detailsComponent(
                                "Range/Area ",
                                spellDetails?.range
                            )}
                            {detailsComponent(
                                "Duration time",
                                spellDetails?.duration
                            )}
                            {detailsComponent(
                                "Components",
                                spellDetails?.components.join(", ")
                            )}
                            {detailsComponent(
                                "Casting time",
                                spellDetails?.school.name
                            )}
                        </div>
                        <p className="mt-4 mb-4 text-sm ">
                            {spellDetails?.desc}
                        </p>

                        <div className="flex gap-5 justify-end mt-2">
                            {spellDetails?.classes.map(c => {
                                const IconComponent = spellClass(c.index);
                                return IconComponent ? (
                                    <div
                                        key={c.index}
                                        className="flex flex-col justify-center items-center"
                                    >
                                        <div
                                            className={cn(
                                                "h-10 w-10 rounded-[50%] flex justify-center items-center",
                                                spellClassColor(c.index)
                                            )}
                                        >
                                            <IconComponent />
                                        </div>
                                        <span className="text-xs mt-1">
                                            {c.name}
                                        </span>
                                    </div>
                                ) : null;
                            })}
                        </div>
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    );
}

export default SpellDetails;
