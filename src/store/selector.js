import { createSelector } from "@reduxjs/toolkit";

const selectFactions = (state) => state.faction.factions;

export const selectFactionsByAlliance = createSelector(
  [selectFactions],
  (factions) => {
    const grouped = factions.reduce((acc, faction) => {
      const alliance = faction.alliance || "Sans alliance" ;
      if (!acc[alliance]) acc[alliance] = [];
      acc[alliance].push(faction);
      return acc;
    }, {});

    return Object.keys(grouped).map((alliance) => ({
      allianceName: alliance,
      data: grouped[alliance].sort((a, b) => a.name.localeCompare(b.name)) 
    }));
  }
);
