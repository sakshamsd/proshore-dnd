import { useParams } from "react-router-dom";
import useGetSpellDetails from "../hooks/useGetSpellDetails";

function SpellDetails() {
    const { id } = useParams();
    const { spellDetails } = useGetSpellDetails(id);

    return (
        <div>
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
            </div>
        </div>
    );
}

export default SpellDetails;
