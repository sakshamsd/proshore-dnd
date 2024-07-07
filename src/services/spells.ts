import axios from "axios";
import {
    FETCH_SPELL_REQUEST,
    FETCH_SPELL_SUCCCESS,
    FETCH_SPELL_ERROR,
    SpellsListResponse,
    FetchSpellRequestType,
    FetchSpellSuccessType,
    FetchSpellErrorType,
} from "./types.d";

export interface SpellsListState {
    data: SpellsListResponse | null;
    loading: boolean;
    error: string | null;
}

const initialState: SpellsListState = {
    data: null,
    loading: false,
    error: null,
};

export default function spellsReducer(
    state = initialState,
    action: FetchSpellRequestType | FetchSpellSuccessType | FetchSpellErrorType
): SpellsListState {
    switch (action.type) {
        case FETCH_SPELL_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_SPELL_SUCCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_SPELL_ERROR:
            return { ...state, loading: false, error: action.payload };
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
    type: FETCH_SPELL_SUCCCESS,
    payload: data,
});

export const fetchSpellsError = (error: string): FetchSpellErrorType => ({
    type: FETCH_SPELL_ERROR,
    payload: error,
});

export const getAllSpells = () => async (dispatch: any) => {
    dispatch(fetchSpellsRequest());
    try {
        const response = await axios.get<SpellsListResponse>(
            "https://www.dnd5eapi.co/api/spells"
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
