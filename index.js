"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vdf_1 = require("@node-steam/vdf");
const generateGSI = (name, uri, token = '', data = {}, timeout = 0.1, buffer = 0, throttle = 0, heartbeat = 0.01) => {
    const gsi = {
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
    };
    if (token) {
        gsi.auth = { token };
    }
    return ({
        json: {
            [name]: gsi
        },
        vdf: vdf_1.stringify({ [name]: gsi })
    });
};
module.exports = generateGSI;
