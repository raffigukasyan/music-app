import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAlbums, selectAlbums, selectLoading} from "@/entities/Album";
import {AlbumList} from "@/entities/Album/ui/AlbumList.tsx";

export const AlbumsSlider = () => {
    const dispatch = useDispatch();
    const albums = useSelector(selectAlbums);
    const loading = useSelector(selectLoading)

    useEffect(() => {
        dispatch(getAlbums());
    }, []);


    return (
      <div>
          {loading ? <div>OK</div> : <AlbumList albums={albums} />}
      </div>
    )
}