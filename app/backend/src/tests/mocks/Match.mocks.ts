const allMatches = [
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
]

const inProgressTrue = [
  {
		"id": 41,
		"homeTeamId": 16,
		"homeTeamGoals": 2,
		"awayTeamId": 9,
		"awayTeamGoals": 0,
		"inProgress": true,
		"homeTeam": {
			"teamName": "São Paulo"
		},
		"awayTeam": {
			"teamName": "Internacional"
		}
	},
]

const inProgressFalse = [
  {
		"id": 41,
		"homeTeamId": 16,
		"homeTeamGoals": 2,
		"awayTeamId": 9,
		"awayTeamGoals": 0,
		"inProgress": false,
		"homeTeam": {
			"teamName": "São Paulo"
		},
		"awayTeam": {
			"teamName": "Internacional"
		}
	},
]

export {
  allMatches,
  inProgressTrue,
  inProgressFalse,
}