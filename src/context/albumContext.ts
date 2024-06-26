import { createContext } from 'react';
import { AlbumState } from '../models/album';

export const initialAlbumState: AlbumState = {
  albums: [],
  setAlbums: () => {},
  onToggleFavorite: () => {},
  scrollTop: 0,
  setScrollTop: () => {},
};
const AlbumContext = createContext<AlbumState>(initialAlbumState);

export default AlbumContext;
