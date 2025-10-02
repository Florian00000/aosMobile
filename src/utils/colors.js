export const COLOR_GREEN_TAB_TRANSPARENT = "#cfd6ce"
export const COLOR_GREEN_TAB = "#415f40"
export const COLOR_WHITE_SCREEN = "#f6f6f6"
export const COLOR_BEIGE_SCREEN = "#e7e3d9"
export const COLOR_RED_MELEE = "#881217"
export const COLOR_BLUE_RANGED = "#004a5f"
export const COLOR_BLACK_PASSIF = "#161412"
export const COLOR_YELLOW_HEROES = "#a98f30"
export const COLOR_GREY_MOVEMENT = "#797775"
export const COLOR_PURPLE_END = "#5a316c"
export const COLOR_ORANGE_CHARGE = "#bf6019"

export const phaseColor = (battleAptitude) => {
        const phase = battleAptitude?.phase?.toLowerCase() || "";

        switch (true) {
            case phase.includes("passif"):
                return COLOR_BLACK_PASSIF;
            case phase.includes("mêlée"):
                return COLOR_RED_MELEE;
            case phase.includes("héros"):
                return COLOR_YELLOW_HEROES;
            case phase.includes("tir"):
                return COLOR_BLUE_RANGED;
            case phase.includes("mouvement"):
                return COLOR_GREY_MOVEMENT;
            case phase.includes("fin") && phase.includes("tour"):
                return COLOR_PURPLE_END;
            case phase.includes("charge"):
                return COLOR_ORANGE_CHARGE;
            default:
                return "gray";
        }
    }