export default {
  async fetch(request, env, ctx) {
 const params=new URL(request.url).searchParams
 const message=params.get("m") || null;
 const embedTitle=params.get("emt")||null
 const embedDesc=params.get("emd")||null;
 const embedcolor=params.get("emc")||null;
 var mes={};
 var embedz={
  title:embedTitle
 };//embed selection options
 if(!(embedDesc==null)){embedz['description']=embedDesc}
 if(!(embedcolor==null)){embedz['color']=parseInt(embedcolor.replace("#",""),16)}

 //embed/no embed
 if(Boolean(params.get("em"))){mes={
  username:"<@1374239016710570114>",
  content:message,
  avatar_url:"https://api.nasa.gov/assets/img/general/apod.jpg",
  embeds:[
    embedz
  ]
 }}else{
  mes={
    username:"<@1374239016710570114>",
    content:message,
    avatar_url:"https://api.nasa.gov/assets/img/general/apod.jpg",
  
  };
 }//send url
 await fetch(env.DISCORD_WEBHOOK_URL,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(
  mes
 )})

return new Response("sent");
  }
};
