client.on("userUpdate", async(eski, yeni) => {
  if(eski.username !== yeni.username) {
  if(!yeni.username.includes("TAG") && client.guilds.cache.get("SUNUCU ID").members.cache.get(yeni.id).roles.cache.has("ROL İD")) {
     client.guilds.cache.get("SUNUCU ID").members.cache.get(yeni.id).roles.remove("ROL İD")
     client.channels.cache.get('KANAL ID').send(`:broken_heart: ${yeni}, TAG tagını çıkardı!`)
    }
     if(yeni.username.includes("TAG") && !client.guilds.cache.get("SUNUCU ID").members.cache.get(yeni.id).roles.cache.has("ROL İD")) {
      client.channels.cache.get('KANAL ID').send(`:heart: ${yeni}, TAG tagını aldı!`)
      client.guilds.cache.get("SUNUCU ID").members.cache.get(yeni.id).roles.add("ROL ID")
     }
  }
  })
