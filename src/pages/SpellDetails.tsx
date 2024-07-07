export interface SpellDetails {
    higher_level: any[];
    index: string;
    name: string;
    desc: string[];
    range: string;
    components: string[];
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    area_of_effect: AreaOfEffect;
    school: School;
    classes: School[];
    subclasses: School[];
    url: string;
}

export interface AreaOfEffect {
    type: string;
    size: number;
}

export interface School {
    index: string;
    name: string;
    url: string;
}
function SpellDetails() {
    const information: SpellDetails = {
        higher_level: [],
        index: "detect-magic",
        name: "Detect Magic",
        desc: [
            "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.",
            "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
        ],
        range: "Self",
        components: ["V", "S"],
        ritual: true,
        duration: "Up to 10 minutes",
        concentration: true,
        casting_time: "1 action",
        level: 1,
        area_of_effect: {
            type: "sphere",
            size: 30,
        },
        school: {
            index: "divination",
            name: "Divination",
            url: "/api/magic-schools/divination",
        },
        classes: [
            {
                index: "bard",
                name: "Bard",
                url: "/api/classes/bard",
            },
            {
                index: "cleric",
                name: "Cleric",
                url: "/api/classes/cleric",
            },
            {
                index: "druid",
                name: "Druid",
                url: "/api/classes/druid",
            },
            {
                index: "paladin",
                name: "Paladin",
                url: "/api/classes/paladin",
            },
            {
                index: "ranger",
                name: "Ranger",
                url: "/api/classes/ranger",
            },
            {
                index: "sorcerer",
                name: "Sorcerer",
                url: "/api/classes/sorcerer",
            },
            {
                index: "wizard",
                name: "Wizard",
                url: "/api/classes/wizard",
            },
        ],
        subclasses: [
            {
                index: "lore",
                name: "Lore",
                url: "/api/subclasses/lore",
            },
        ],
        url: "/api/spells/detect-magic",
    };

    return (
        <div>
            <div>
                <div>{information.name}</div>
                <div>
                    Level {information.level} {information.school.name}
                </div>
                <div className="flex gap-8 justify-between">
                    <div>Casting time{information.casting_time}</div>
                    <div>Range/Area{information.range}</div>
                    <div>Duration time{information.duration}</div>
                    <div>Components{information.components}</div>
                </div>
                <div>{information.desc}</div>
                <div className="flex gap-5">
                    {information.classes.map(c => (
                        <div key={c.index}>{c.name} </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SpellDetails;
