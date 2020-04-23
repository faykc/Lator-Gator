const { App } = require('@slack/bolt');
const {latorGator} = require('./latorModule');
const {latorMessage} = require('./latorMessage');
const {generateDynamicLator} = require("./utils");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Listens for the initial call to the Lator Gator
app.command('/lator', async ({ ack, body, context }) => {
  await ack();
  try {
    const result = await app.client.views.open({
      token: context.botToken,
      trigger_id: body.trigger_id,
      view: latorGator()
    });
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
});

// Handle submission of the Lator Gator Modal
app.view('latorSubmit', async ({ ack, body, view, context }) => {
  await ack();
  try {
    await app.client.chat.postMessage({
      token: context.botToken,
      channel: 'C01206G93AS',
      blocks: latorMessage({... generateDynamicLator(body)})
    });
  }
  catch (error) {
    console.error(error);
  }
});

(async () => {
  await app.start(3000);
  console.log(`⚡️ Bolt app is running!`);
})();


