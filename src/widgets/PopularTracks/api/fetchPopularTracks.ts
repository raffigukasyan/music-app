import {api} from "@/shared/index.ts"

export const fetchPopularTracks = async () => {
        const res = await api.get('/chart');
        const data = res.data;
        return  data
}