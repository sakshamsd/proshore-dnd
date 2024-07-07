import { useNavigate } from "react-router-dom";
import SpellCard from "../components/spell-card";
import data from "./../assets/data.json";
import { sanitizeURL } from "../utils";
import { routePaths } from "../routes/route-path";

function SpellsList() {
    const navigate = useNavigate();
    return (
        <>
            <span className="text-2xl mb-40">Dungeons and Dragon Spell</span>
            <div className="flex w-full  gap-4 flex-wrap justify-between">
                {data.results.map(spell => (
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
