const { App } = require('@slack/bolt');
const {latorGator} = require('./latorModule');
const {latorMessage} = require('./latorMessage');
const {generateDynamicLator} = require("./utils");

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

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log(`⚡️ Bolt app is running!`);
})();


