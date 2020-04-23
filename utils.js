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

module.exports = {generateDynamicLator};