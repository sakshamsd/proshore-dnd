export interface SpellsListResponse {
    count: number;
    results: Result[];
}

export interface Result {
    index: string;
    name: string;
    level: number;
    url: string;
}

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

export const FETCH_SPELL_REQUEST = "FETCH_SPELL_REQUEST";
export const FETCH_SPELL_SUCCESS = "FETCH_SPELL_SUCCESS";
export const FETCH_SPELL_ERROR = "FETCH_SPELL_ERROR";
export const TOGGLE_FAVORITE_SPELL = "TOGGLE_FAVORITE_SPELL";
interface FetchSpellRequestType {
    type: typeof FETCH_SPELL_REQUEST;
}

interface FetchSpellSuccessType {
    type: typeof FETCH_SPELL_SUCCESS;
    payload: SpellsListResponse;
}

interface FetchSpellErrorType {
    type: typeof FETCH_SPELL_ERROR;
    payload: string;
}

interface ToggleFavoriteSpellType {
    type: typeof TOGGLE_FAVORITE_SPELL;
    payload: string;
}
