import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/app/store";

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.player
);

export const selectPlayingMusic = createSelector(
  selectBase,
  (state) => state.playingMusic
);
export const selectisPlaying = createSelector(
  selectBase,
  (state) => state.isPlaying
);
export const selectDuration = createSelector(
  selectBase,
  (state) => state.duration
);
export const selectTimeProgress = createSelector(
  selectBase,
  (state) => state.timeProgress
);
