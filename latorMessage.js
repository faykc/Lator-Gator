const latorMessage = () => ({
	"blocks": [
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
					"text": "*November 12, 2019*  |  Lator by @username",
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
				"text": "`MM/DD/YY` *Name of Lator*  -  _ Time Duration_"
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
				"text": ":wave: *Enter Description* of the entire event right here, it can be short or long, or whatever!",
				"verbatim": false
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
	]
});

module.exports = {latorMessage};