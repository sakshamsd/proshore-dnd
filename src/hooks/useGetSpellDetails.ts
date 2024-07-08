import { useState, useEffect } from "react";
import axios from "axios";
import { SpellDetails } from "../services/types";
import { envConfig } from "../constants";

interface SpellDetailsResponse {
    spellDetails: SpellDetails | null;
    loading: boolean;
    error: boolean;
}

const useGetSpellDetails = (
    index: string | undefined
): SpellDetailsResponse => {
    const url = `${envConfig.apiEndpoint}/spells/${index}`;
    const [spellDetails, setSpellDetails] = useState<SpellDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setSpellDetails(response.data);
            } catch (err) {
                setError(err as unknown as boolean);
            } finally {
                setLoading(false);
            }
        };
        if (index) {
            fetchData();
        }
    }, [url]);

    return { spellDetails, loading, error };
};

export default useGetSpellDetails;
