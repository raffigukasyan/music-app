import {useState, useEffect, useCallback} from "react";
import {fetchPopularTracks} from "@/widgets/PopularTracks/api/fetchPopularTracks.ts";
import {IChartTracks} from "@/entities/Song";

export const useGetPopularTracks  =  () => {
    const [data, setData] = useState<IChartTracks[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | unknown>()
    const getPopularTracks = useCallback(async () => {
        try {
            const data = await fetchPopularTracks();
            setData(data);
            setTimeout(() => {
                setLoading(false);
            }, 2000)
        }
        catch (error:Error | unknown) {
            setError(error)
        }
    }, [])

    useEffect(() => {
        getPopularTracks();
    }, []);

    return {data, loading, error}
}