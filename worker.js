export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const message = url.searchParams.get("m");
    const params = url.searchParams;

    const titles = params.getAll("emt");
    const descriptions = params.getAll("emd");
    const colors = params.getAll("emc");

    const embeds = titles.map((title, i) => {
      const embed = { title: title };
      if (descriptions[i]) embed.description = descriptions[i];
      if (colors[i]) embed.color = parseInt(colors[i].replace("#", ""), 16);
      return embed;
    });

    let mes = {
      username: "<@1374239016710570114>",
      content: message,
      avatar_url: "https://live.staticflickr.com/65535/54356431528_f0699f040f_w.jpg",
    };

    if (params.get("em") && embeds.length > 0) {
      mes.embeds = embeds.slice(0, 10);
    }

    // MOVED OUTSIDE: This now sends even if there are no embeds
    if (mes.content || (mes.embeds && mes.embeds.length > 0)) {
      await fetch(env.DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mes)
      });
    }

    return new Response("sent", {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }
};
