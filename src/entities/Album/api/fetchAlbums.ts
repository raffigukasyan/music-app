import {api} from "@/shared";

export const fetchAlbums = async () => {
    try {
        const res = await api.get('/albums');
        const data = res.data;
        return data
    }
    catch (e) {
        return e;
    }
}