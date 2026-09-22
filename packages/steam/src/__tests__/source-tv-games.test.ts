import { describe, expect, it } from "vite-plus/test";

import { isBadSourceTvGamesResponse } from "../source-tv-games";

describe(isBadSourceTvGamesResponse, () => {
  it("identifies a bad SourceTV response", () => {
    expect(isBadSourceTvGamesResponse(null)).toBeTruthy();
  });
});
