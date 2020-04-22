module.exports = () => ({
	"type": "modal",
	"title": {
		"type": "plain_text",
		"text": "Lator Gator",
		"emoji": true
	},
	"submit": {
		"type": "plain_text",
		"text": "Submit",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "sl_input",
				"placeholder": {
					"type": "plain_text",
					"text": "E.g Marketing Strategy Meeting"
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Give a title!"
			},
			"hint": {
				"type": "plain_text",
				"text": "Hint text"
			}
		},
		{
			"type": "input",
			"element": {
				"type": "datepicker",
				"initial_date": "1990-04-28",
				"placeholder": {
					"type": "plain_text",
					"emoji": true,
					"text": "Select a date"
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Start Date",
				"emoji": true
			}
		},
        {
    "type": "section",
    "block_id": "section678",
    "text": {
      "type": "mrkdwn",
      "text": "Pick expected duration"
    },
    "accessory": {
      "action_id": "text1234",
      "type": "multi_static_select",
      "placeholder": {
        "type": "plain_text",
        "text": "Select a duration"
      },
      "options": [
        {
          "text": {
            "type": "plain_text",
            "text": "*this is plain_text text*"
          },
          "value":"0.5 hours"
        },
        {
          "text": {
            "type": "plain_text",
            "text": "*this is plain_text text*"
          },
          "value": "1 hour"
        },
        {
          "text": {
            "type": "plain_text",
            "text": "*this is plain_text text*"
          },
          "value": "1.5 hours"
        }
      ]
    }
  },
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "ml_input",
				"multiline": true,
				"placeholder": {
					"type": "plain_text",
					"text": "Discussion over strategy A v B"
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Give some more details!"
			},
			"hint": {
				"type": "plain_text",
				"text": "Hint text"
			}
		}
	]
});