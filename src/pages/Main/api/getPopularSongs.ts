import {api} from "@/shared/index.ts";
export const getPopularSongs = async () => {
    const res = await api.get('/chart');
    return res.data;
}
