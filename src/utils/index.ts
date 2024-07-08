import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SPELL_CLASS_NAMES } from "../constants";
import Artificer from "../assets/icons/Artificer";
import Bard from "../assets/icons/Bard";
import Barbarian from "../assets/icons/Barbarian";
import Cleric from "../assets/icons/Cleric";
import Druid from "../assets/icons/Druid";
import Fighter from "../assets/icons/Fighter";
import Monk from "../assets/icons/Monk";
import Paladin from "../assets/icons/Paladin";
import Ranger from "../assets/icons/Ranger";
import Rogue from "../assets/icons/Rogue";
import Sorcerer from "../assets/icons/Sorcerer";
import Warlock from "../assets/icons/Warlock";
import Wizard from "../assets/icons/Wizard";
export type Primitive = string;

export function sanitizeURL(
    url: string,
    pathVariables?: { [key: string]: Primitive }
) {
    if (pathVariables && Object.keys(pathVariables).length) {
        return Object.entries(pathVariables).reduce((acc, [key, value]) => {
            return acc.replace(`:${key}`, value?.toString());
        }, url);
    }

    return url;
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const spellClass = (
    className: string
): React.FC<React.SVGProps<SVGSVGElement>> | null => {
    switch (className) {
        case SPELL_CLASS_NAMES.ARTIFICIER:
            return Artificer;
        case SPELL_CLASS_NAMES.BARD:
            return Bard;
        case SPELL_CLASS_NAMES.BARBARIAN:
            return Barbarian;
        case SPELL_CLASS_NAMES.CLERIC:
            return Cleric;
        case SPELL_CLASS_NAMES.DRUID:
            return Druid;
        case SPELL_CLASS_NAMES.FIGHTER:
            return Fighter;
        case SPELL_CLASS_NAMES.MONK:
            return Monk;
        case SPELL_CLASS_NAMES.PALADIN:
            return Paladin;
        case SPELL_CLASS_NAMES.RANGER:
            return Ranger;
        case SPELL_CLASS_NAMES.ROGUE:
            return Rogue;
        case SPELL_CLASS_NAMES.SORCERER:
            return Sorcerer;
        case SPELL_CLASS_NAMES.WARLOCK:
            return Warlock;
        case SPELL_CLASS_NAMES.WIZARD:
            return Wizard;

        default:
            return null;
    }
};
// #A08F71
// #B992BB
// #898B8E
// #899354

// #C8B57D
// #4D7D60
// #CA6C72
// #8B43B6

// #4471BE
// #D1775F
// #909293
// #8AC6DF

// #4B4C45

export const spellClassColor = (className: string): string | null => {
    switch (className) {
        case SPELL_CLASS_NAMES.ARTIFICIER:
            return "bg-[#A08F71]";
        case SPELL_CLASS_NAMES.BARD:
            return "bg-[#B992BB]";
        case SPELL_CLASS_NAMES.BARBARIAN:
            return "bg-[#898B8E]";
        case SPELL_CLASS_NAMES.CLERIC:
            return "bg-[#899354]";

        case SPELL_CLASS_NAMES.DRUID:
            return "bg-[#C8B57D]";
        case SPELL_CLASS_NAMES.FIGHTER:
            return "bg-[#4D7D60]";
        case SPELL_CLASS_NAMES.MONK:
            return "bg-[#CA6C72]";
        case SPELL_CLASS_NAMES.PALADIN:
            return "bg-[#8B43B6]";

        case SPELL_CLASS_NAMES.RANGER:
            return "bg-[#4471BE]";
        case SPELL_CLASS_NAMES.ROGUE:
            return "bg-[#D1775F]";
        case SPELL_CLASS_NAMES.SORCERER:
            return "bg-[#909293]";
        case SPELL_CLASS_NAMES.WARLOCK:
            return "bg-[#8AC6DF]";

        case SPELL_CLASS_NAMES.WIZARD:
            return "bg-[#4B4C45]";

        default:
            return null;
    }
};
