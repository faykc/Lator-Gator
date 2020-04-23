// Generates date for dynamic Lator Message
const generateDynamicLator = (body) => {
    const state = body.view.state.values;
    return ({
        user: `${body.user.name} (@${body.user.username})`,
        date: state.datepicker_id.datepick_action.selected_date,
        eventName: state.title_id.title_action.value,
        duration: state.hours_id.hours_action.value,
        description: state.description_id.description_action.value
      });
}

// Updates the Lator Blocks with the addition of the usernames of the Gators
const updateLatorBlocks = (user, blocks) => {
    //const updatedResponse = (body.message.blocks)[9];
    (blocks[9]).text.text += ` @${user} ,`;
    return blocks;
};

module.exports = {generateDynamicLator, updateLatorBlocks};