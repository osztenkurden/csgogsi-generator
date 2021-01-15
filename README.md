# CSGO GSI Config Generator
Absolutely small package to generate config for GameState Integration for CS:GO, both in JSON and in VDF.

## Installation

`npm install csgogsi-generator`

## API

```javascript
generateGSI(name, url, token = "", data = {}, timeout = 0.1, buffer = 0, throttle = 0, heartbeat = 0.01);
```

`data` object appends, not replaces data property of the GSI

## Example
```javascript
import generateGSI from 'csgogsi-generator';

const GSI = generateGSI("CS:GO Observer 1", "http://127.0.0.1:1234/", "", { map: 0 });


/*

GSI.json:

{
  "CS:GO Observer 1": {
    "uri": "http://127.0.0.1:1234/",
    "timeout": 0.1,
    "buffer": 0,
    "throttle": 0,
    "heartbeat": 0.01,
    "data": {
      "provider": 1,
      "map": 1,
      "round": 1,
      "player_id": 1,
      "allplayers_id": 1,
      "player_state": 1,
      "allplayers_state": 1,
      "allplayers_match_stats": 1,
      "allplayers_weapons": 1,
      "allplayers_position": 1,
      "phase_countdowns": 1,
      "allgrenades": 1,
      "map_round_wins": 1,
      "player_position": 1,
      "bomb": 1
    }
  }
}

GSI.vdf:

"CS:GO Observer 1"
{
	"uri"		"http://127.0.0.1:1234/"
	"timeout"		"0.1"
	"buffer"		"0"
	"throttle"		"0"
	"heartbeat"		"0.01"
	"data"
	{
		"provider"		"1"
		"map"		"0"
		"round"		"1"
		"player_id"		"1"
		"allplayers_id"		"1"
		"player_state"		"1"
		"allplayers_state"		"1"
		"allplayers_match_stats"		"1"
		"allplayers_weapons"		"1"
		"allplayers_position"		"1"
		"phase_countdowns"		"1"
		"allgrenades"		"1"
		"map_round_wins"		"1"
		"player_position"		"1"
		"bomb"		"1"
	}
}

*/

```