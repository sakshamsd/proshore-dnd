import axios from "axios";
import {
    FETCH_SPELL_REQUEST,
    FETCH_SPELL_SUCCESS,
    FETCH_SPELL_ERROR,
    SpellsListResponse,
    FetchSpellRequestType,
    FetchSpellSuccessType,
    FetchSpellErrorType,
    TOGGLE_FAVORITE_SPELL,
    ToggleFavoriteSpellType,
} from "./types.d";
import { envConfig } from "../constants";

export interface SpellsListState {
    data: SpellsListResponse | null;
    loading: boolean;
    error: string | null;
    favorites: string[] | null;
}

const initialState: SpellsListState = {
    data: null,
    loading: false,
    error: null,
    favorites: null,
};

export default function spellsReducer(
    state = initialState,
    action:
        | FetchSpellRequestType
        | FetchSpellSuccessType
        | FetchSpellErrorType
        | ToggleFavoriteSpellType
): SpellsListState {
    switch (action.type) {
        case FETCH_SPELL_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_SPELL_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_SPELL_ERROR:
            return { ...state, loading: false, error: action.payload };
        case TOGGLE_FAVORITE_SPELL:
            const spellId: string = action.payload;
            const favoriteList = state.favorites ? state.favorites : [];
            const newFavorites = favoriteList.includes(spellId)
                ? favoriteList.filter(id => id !== spellId)
                : [...favoriteList, spellId];
            return { ...state, favorites: newFavorites };
        default:
            return state;
    }
}

export const fetchSpellsRequest = (): FetchSpellRequestType => ({
    type: FETCH_SPELL_REQUEST,
});

export const fetchSpellsSuccess = (
    data: SpellsListResponse
): FetchSpellSuccessType => ({
    type: FETCH_SPELL_SUCCESS,
    payload: data,
});

export const fetchSpellsError = (error: string): FetchSpellErrorType => ({
    type: FETCH_SPELL_ERROR,
    payload: error,
});

export const toggleFavoriteSpell = (
    index: string
): ToggleFavoriteSpellType => ({
    type: TOGGLE_FAVORITE_SPELL,
    payload: index,
});

export const getAllSpells = () => async (dispatch: any) => {
    dispatch(fetchSpellsRequest());
    try {
        const response = await axios.get<SpellsListResponse>(
            `${envConfig.apiEndpoint}/spells`
        );
        dispatch(fetchSpellsSuccess(response.data));
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            dispatch(fetchSpellsError(error.response.data as string));
        } else {
            dispatch(fetchSpellsError("Something went wrong"));
        }
    }
};
