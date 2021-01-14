"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const VDF = __importStar(require("@node-steam/vdf"));
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
        vdf: VDF.stringify(gsi)
    });
};
const test = {
    HUDMANAGERGSI: {
        uri: 'http://localhost:1301/',
        timeout: 0.1,
        buffer: 0,
        throttle: 0,
        heartbeat: 0.01,
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
            bomb: 1
        },
        auth: { token: 'dupa' }
    }
};
console.log(VDF.stringify(test));
exports.default = generateGSI;
