const { App } = require('@slack/bolt');
const {latorGator} = require('./latorModule');
const {latorMessage} = require('./latorMessage');
const {generateDynamicLator, updateLatorBlocks} = require("./utils");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Listens for the slash call to the Lator Gator
app.command('/lator', async ({ ack, body, context }) => {
  await ack();
  try {
    await app.client.views.open({
      token: context.botToken,
      trigger_id: body.trigger_id,
      view: latorGator()
    });
  }
  catch (error) {
    console.error(error);
  }
});

// Handle submission of the Lator Gator Modal
app.view('latorSubmit', async ({ ack, body, view, context }) => {
  await ack();
  const channels = body.view.state.values.channelselect_id.channelselect_action.selected_channels;
  const dynamicLator = generateDynamicLator(body);
  try {
    await Promise.all(channels.map(async (channelId) => {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: `${channelId}`,
        blocks: latorMessage({... dynamicLator})
      });
    }));
  }
  catch (error) {
    console.error(error);
  }
});

app.action('rsvp_action_id', async ({ action, ack, respond, context, body }) => {
  await ack();
  console.log(context);

  const stuff = {user:"u", date:"d", eventName:"e", duration:"de", description:"desc"};

  // WIP:
  // This is the updatedBlocks and such with attachement of the user who RSVP'd... 
  const updatedBlocks = updateLatorBlocks(body.user.username, body.message.blocks);

  const confirmation = {
    "blocks": latorMessage({... stuff}),
    "replace_original": "true"
  };
  await respond(confirmation);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log(`⚡️ Bolt app is running!`);
})();


