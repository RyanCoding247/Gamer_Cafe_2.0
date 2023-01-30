import { GAMES } from "../../app/shared/GAMES";

export const selectAllGames = () => {
    return GAMES;
}

export const firstGames = () => {
    return GAMES.filter((e) => e.type === 1 || e.type === 2);
}
