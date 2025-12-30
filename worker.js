export default {
  async fetch(request, env, ctx) {
const params=new URL(request.url).searchParams
const message=params.get("m") || "I couldn't be bothered with your message.";
    await fetch(env.DISCORD_WEBHOOK_URL,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username:"<@1374239016710570114>",content:message})

})

return new Response("sent");
  }
};
