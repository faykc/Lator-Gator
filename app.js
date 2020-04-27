const { App } = require('@slack/bolt');
const {latorGator} = require('./latorModule');
const {latorMessage} = require('./latorMessage');
const {generateDynamicLator, updateLatorBlocks, generateEvent} = require("./utils");
const { createReadStream } = require('fs');

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
  await generateEvent({
    date:dynamicLator.date, 
    start: dynamicLator.startTime, 
    duration: dynamicLator.duration, 
    title: dynamicLator.eventName, 
    description: dynamicLator.description
  });
  try {
    await Promise.all(channels.map(async (channelId) => {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: `${channelId}`,
        blocks: latorMessage({... dynamicLator}),
      });
      await app.client.files.upload({
        token: context.botToken,
        channels: `${channelId}`,
        initial_comment: "Download the lator below! :smile:",
        file: createReadStream(`${dynamicLator.eventName}.ics`)
      });
    }));
  }
  catch (error) {
    console.error(error);
  }
});

app.action('rsvp_action_id', async ({ action, ack, respond, context, body }) => {
  await ack();
  const confirmation = {
    "blocks": updateLatorBlocks(body.user.username, body.message.blocks),
    "replace_original": "true"
  };
  await respond(confirmation);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log(`⚡️ Bolt app is running!`);
})();


