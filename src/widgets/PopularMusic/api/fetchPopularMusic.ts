import {api} from "@/shared/index.ts"

export const fetchPopularMusic = async () => {
        try {
                const res = await api.get('/chart');
                const data = res.data;
                return  data
        }
        catch (e) {
                return  e;
        }
}