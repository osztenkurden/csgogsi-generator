export declare type GSIEntryValue = 0 | 1;
export declare type GSIDataKeys = "provider" | "map" | "round" | "player_id" | "allplayers_id" | "player_state" | "allplayers_state" | "allplayers_match_stats" | "allplayers_weapons" | "allplayers_position" | "phase_countdowns" | "allgrenades" | "map_round_wins" | "player_position" | "bomb";
export declare type GSIData = {
    [P in GSIDataKeys]: GSIEntryValue;
};
export interface GSI {
    uri: string;
    timeout: number;
    buffer: number;
    throttle: number;
    heartbeat: number;
    data: GSIData;
    auth?: {
        token: string;
    };
}
declare const generateGSI: <T extends string>(name: T, uri: string, token?: string, data?: Partial<GSIData>, timeout?: number, buffer?: number, throttle?: number, heartbeat?: number) => {
    json: { [P in T]: GSI; };
    vdf: string;
};
export default generateGSI;
