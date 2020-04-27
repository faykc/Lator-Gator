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
			"block_id": "title_id",
			"element": {
				"type": "plain_text_input",
				"action_id": "title_action",
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
			"block_id": "datepicker_id",
			"element": {
				"type": "datepicker",
				"action_id": "datepick_action",
				"initial_date": "2020-01-01",
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
			"block_id": "start_time_id",
			"element": {
				"action_id": "start_time_action",
				"type": "plain_text_input"
			},
			"label": {
				"type": "plain_text",
				"text": "Whats the start time? (24 Hour Format e.g 18:30)",
				"emoji": true
			}
		},
		{
			"type": "input",
			"block_id": "hours_id",
			"element": {
				"action_id": "hours_action",
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
			"block_id": "description_id",
			"element": {
				"action_id": "description_action",
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
			"block_id": "channelselect_id",
			"element": {
				"action_id": "channelselect_action",
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