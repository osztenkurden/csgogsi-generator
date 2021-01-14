import * as VDF from "@node-steam/vdf"

export type GSIEntryValue = 0 | 1;

export type GSIDataKeys = "provider"
    | "map"
    | "round"
    | "player_id"
    | "allplayers_id"
    | "player_state"
    | "allplayers_state"
    | "allplayers_match_stats"
    | "allplayers_weapons"
    | "allplayers_position"
    | "phase_countdowns"
    | "allgrenades"
    | "map_round_wins"
    | "player_position"
    | "bomb";

export type GSIData = {
    [P in GSIDataKeys]: GSIEntryValue
}

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

const generateGSI = <T extends string>(name: T, uri: string, token = '', data: Partial<GSIData> = {}, timeout = 0.1, buffer = 0, throttle = 0, heartbeat = 0.01) => {
    const gsi: GSI = {
        uri,
        timeout,
        buffer,
        throttle,
        heartbeat,
        data: {
			provider: 1,
			map: 1,
			round: 1,
			player_id: 1,
			allplayers_id: 1,
			player_state: 1,
			allplayers_state: 1,
			allplayers_match_stats: 1,
			allplayers_weapons: 1,
			allplayers_position: 1,
			phase_countdowns: 1,
			allgrenades: 1,
			map_round_wins: 1,
			player_position: 1,
            bomb: 1,
            ...data
		}
    }
    if(token){
        gsi.auth = { token };
    }
    return ({
        json: {
            [name]: gsi
        },
        vdf: VDF.stringify(gsi)
    }) as { json: { [P in T]: GSI }, vdf: string }
};

export default generateGSI;
