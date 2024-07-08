import { useNavigate, useParams } from "react-router-dom";
import useGetSpellDetails from "../hooks/useGetSpellDetails";
import { useDispatch, useSelector } from "react-redux";
import { SpellsListState, toggleFavoriteSpell } from "../services/spells";
import { AppState } from "../services/store";

function SpellDetails() {
    const { id } = useParams();
    const { spellDetails } = useGetSpellDetails(id);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const { favorites } = useSelector(
        (state: AppState) => state.spellsList as SpellsListState
    );
    const value = favorites?.includes(spellDetails?.index as string)
        ? "unlike"
        : "like";
    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <div>
                <div>{spellDetails?.name}</div>
                <div>
                    Level {spellDetails?.level} {spellDetails?.school.name}
                </div>
                <div className="flex gap-8 justify-between">
                    <div>Casting time{spellDetails?.casting_time}</div>
                    <div>Range/Area{spellDetails?.range}</div>
                    <div>Duration time{spellDetails?.duration}</div>
                    <div>Components{spellDetails?.components}</div>
                </div>
                <div>{spellDetails?.desc}</div>
                <div className="flex gap-5">
                    {spellDetails?.classes.map(c => (
                        <div key={c.index}>{c.name} </div>
                    ))}
                </div>
                <button
                    onClick={() =>
                        dispatch(
                            toggleFavoriteSpell(spellDetails?.index as string)
                        )
                    }
                >
                    {value}
                </button>
            </div>
        </div>
    );
}

export default SpellDetails;
