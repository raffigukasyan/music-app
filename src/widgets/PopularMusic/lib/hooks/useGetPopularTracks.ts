import {useState, useEffect, useCallback} from "react";
import {fetchPopularMusic} from "@/widgets/PopularMusic/api/fetchPopularMusic.ts";
import {ITrack} from "src/entities/Music";

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