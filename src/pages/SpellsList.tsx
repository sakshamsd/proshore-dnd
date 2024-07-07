import { useNavigate } from "react-router-dom";
import SpellCard from "../components/spell-card";
import { sanitizeURL } from "../utils";
import { routePaths } from "../routes/route-path";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../services/store";
import { getAllSpells } from "../services/spells";
import { useEffect } from "react";
import Spinner from "../common/Spinner";

function SpellsList() {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const { data, loading } = useSelector(
        (state: AppState) => state.spellsList
    );

    useEffect(() => {
        dispatch(getAllSpells());
    }, [dispatch]);
    if (loading) {
        return <Spinner />;
    }
    return (
        <>
            <span className="text-2xl mb-40">Dungeons and Dragon Spell</span>
            <div className="flex w-full  gap-4 flex-wrap justify-between">
                {data?.results.map(spell => (
                    <SpellCard
                        key={spell.url}
                        title={spell.name}
                        subtitle={`Level ${spell.level}`}
                        handleClick={() =>
                            navigate(
                                sanitizeURL(routePaths.spellDetails, {
                                    id: spell.index,
                                })
                            )
                        }
                    />
                ))}
            </div>
        </>
    );
}

export default SpellsList;
