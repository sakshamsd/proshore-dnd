import { useNavigate } from "react-router-dom";
import SpellCard from "../components/spell-card";
import { sanitizeURL } from "../utils";
import { routePaths } from "../routes/route-path";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../services/store";
import {
    SpellsListState,
    getAllSpells,
    toggleFavoriteSpell,
} from "../services/spells";
import { useEffect } from "react";
import Spinner from "../common/Spinner";
import { Result } from "../services/types";

function SpellsList() {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const { data, loading, favorites } = useSelector(
        (state: AppState) => state.spellsList as SpellsListState
    );

    useEffect(() => {
        dispatch(getAllSpells());
    }, [dispatch]);
    if (loading) {
        return <Spinner />;
    }
    const handleToggleFavoriteSpell = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        favorite: string
    ) => {
        e.stopPropagation();
        dispatch(toggleFavoriteSpell(favorite));
    };
    return (
        <>
            <span className="text-2xl mb-40 text-red-600">
                Dungeons & Dragon Spell
            </span>
            <div className="flex w-full mt-6  gap-4 flex-wrap justify-between">
                {data?.results.map((spell: Result) => {
                    const favorite = favorites?.includes(spell.index);

                    return (
                        <SpellCard
                            key={spell.url}
                            title={spell.name}
                            index={spell.index}
                            liked={favorite || false}
                            subtitle={`Level ${spell.level}`}
                            handleClick={() =>
                                navigate(
                                    sanitizeURL(routePaths.spellDetails, {
                                        id: spell.index,
                                    })
                                )
                            }
                            handleToggleFavoite={handleToggleFavoriteSpell}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default SpellsList;
