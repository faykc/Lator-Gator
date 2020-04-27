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

const determineAttributes = async (messageText) => {
    const messageArray = messageText.split(" ");
    const date = messageArray[0];
    let returnObject = {date: date ? date : "nd", time: "1"};
    await messageArray.forEach((element, index) => {
      if (element === "hours_") {
        returnObject = {date, time: messageArray[index - 1] ? messageArray[index - 1] : 1};
      }
    });
    return returnObject;
};

module.exports = {generateDynamicLator, updateLatorBlocks, determineAttributes};