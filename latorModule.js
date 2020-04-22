const latorGator = () => ({
	"type": "modal",
    "callback_id": "latorSubmit",
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
				"text": "What day?",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input"
			},
			"label": {
				"type": "plain_text",
				"text": "How many hours?",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"multiline": true
			},
			"label": {
				"type": "plain_text",
				"text": "Give a short description!",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "multi_channels_select",
				"placeholder": {
					"type": "plain_text",
					"emoji": true,
					"text": "Select channels"
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Where do you want to post this?",
				"emoji": true
			}
		}
	]
});

module.exports = {latorGator};