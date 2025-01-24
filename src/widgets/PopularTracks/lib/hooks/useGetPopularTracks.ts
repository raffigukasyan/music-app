import {useState, useEffect, useCallback} from "react";
import {fetchPopularTracks} from "@/widgets/PopularTracks/api/fetchPopularTracks.ts";
import {ITrack} from "src/entities/Music";

export const useGetPopularTracks  =  () => {
    const [data, setData] = useState<ITrack[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | unknown>()
    const getPopularTracks = useCallback(async () => {
        try {
            const data = await fetchPopularTracks();
            setData(data);
            setLoading(false);
        }
        catch (error) {
            setError(error instanceof Error ? error : 'Unknown error')
        }
    }, [])

    useEffect(() => {
        getPopularTracks();
    }, []);

    return {data, loading, error}
}