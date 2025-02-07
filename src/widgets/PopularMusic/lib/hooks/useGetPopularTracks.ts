import {useState, useEffect, useCallback} from "react";

import {ITrack} from "src/entities/Music";

import {fetchPopularMusic} from "@/widgets/PopularMusic/api/fetchPopularMusic.ts";

export const useGetPopularTracks  =  () => {
    const [data, setData] = useState<ITrack[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | unknown>()
    const getPopularMusic = useCallback(async () => {
        try {
            const data = await fetchPopularMusic();
            setData(data);
            setLoading(false);
        }
        catch (error) {
            setError(error instanceof Error ? error : 'Unknown error')
        }
    }, [])

    useEffect(() => {
        getPopularMusic();
    }, []);

    return {data, loading, error}
}