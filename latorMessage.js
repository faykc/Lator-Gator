const latorMessage = ({user, date, eventName, duration, description, lators}) => ([
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": ":wave:  *Lator Gator Events!*  :wave:"
		}
	},
	{
		"type": "context",
		"elements": [
			{
				"text": `*Lator by ${user}*`,
				"type": "mrkdwn"
			}
		]
	},
	{
		"type": "divider"
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": ":calendar: |   *SEE YOU LATOR AT*  | :calendar: "
		}
	},
	{
		"type": "section",
		"block_id": "rsvp_block_id",
		"text": {
			"type": "mrkdwn",
			"text": `${date}  *${eventName}*  - _ ${duration} hours_`
		},
		"accessory": {
			"type": "button",
			"action_id": "rsvp_action_id",
			"text": {
				"type": "plain_text",
				"text": "RSVP",
				"emoji": true
			}
		}
	},
	{
		"type": "divider"
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": `:wave: ${description}`,
			"verbatim": false
		}
	},
	{
		"type": "divider"
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*ATTENDEES WE SHALL SEE LATOR*"
		}
	},
	{
		"type": "section",
		"block_id": "lators_block_id",
		"text": {
			"type": "mrkdwn",
			"text": `Currently, we are seeing ${lators ? lators : "no one"} lator!`
		}
	},
	{
		"type": "divider"
	},
	{
		"type": "context",
		"elements": [
			{
				"type": "mrkdwn",
				"text": ":pushpin: Do you want to create a Lator? Use the slash command */lator*."
			}
		]
	}
]);

module.exports = {latorMessage};