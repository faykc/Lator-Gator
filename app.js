const { App } = require('@slack/bolt');
const {latorGator} = require('./latorModule');

// Initializes your app with your bot token and signing secret
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


// Handle a view_submission event
app.view('latorSubmit', async ({ ack, body, view, context }) => {
  // Acknowledge the view_submission event
  await ack();
  console.log(body);
  console.log(context);
  // Message the user
  try {
    await app.client.chat.postMessage({
      token: context.botToken,
      channel: 'C01206G93AS',
      text: "Hello"
    });
  }
  catch (error) {
    console.error(error);
  }
});


(async () => {
  // Start your app
  await app.start(3000);
  console.log(`⚡️ Bolt app is running! on `);
})();


