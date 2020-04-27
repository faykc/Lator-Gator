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
    if (((blocks[9]).text.text) === "Currently, we are seeing no one lator!") {
        (blocks[9]).text.text = `Currently, we will be seeing  @${user} lator`
    } else {
        (blocks[9]).text.text = ((blocks[9]).text.text).replace("lator", `, @${user} lator`);
    }
    return blocks;
};

module.exports = {generateDynamicLator, updateLatorBlocks};