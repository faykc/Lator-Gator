const { writeFileSync } = require('fs');
const ics = require('ics');

// Generates date for dynamic Lator Message
const generateDynamicLator = (body) => {
    const state = body.view.state.values;
    return ({
        user: `${body.user.name} (@${body.user.username})`,
        date: state.datepicker_id.datepick_action.selected_date,
        startTime: state.start_time_id.start_time_action.value,
        eventName: state.title_id.title_action.value,
        duration: state.hours_id.hours_action.value,
        description: state.description_id.description_action.value
      });
}

// Updates the Lator Blocks with the addition of the usernames of the Gators
const updateLatorBlocks = (user, blocks) => {
    if (((blocks[9]).text.text) === "Currently, we are seeing no one lator!") {
        (blocks[9]).text.text = `Currently, we will be seeing  @${user} lator`
    } else {
        (blocks[9]).text.text = ((blocks[9]).text.text).replace("lator", `, @${user} lator`);
    }
    return blocks;
};

const generateEvent = async ({date, start, duration, title, description}) => {
    const splitDate = date.split("-");
    const startTime = start.split(":")
    ics.createEvent({
        title: `${title}`,
        description: `${description}`,
        busyStatus: 'BUSY',
        start: [splitDate[0], splitDate[1], splitDate[2], startTime[0], startTime[1]],
        duration: { hours: duration }
      }, (error, value) => {
        if (error) {
          console.log(error)
        }
        writeFileSync(`${__dirname}/${title}.ics`, value);
      });
};

module.exports = {generateDynamicLator, updateLatorBlocks, generateEvent};