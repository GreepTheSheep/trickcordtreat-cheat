function findInMessage(message, target){
let params = {
    fields: true
  }
    if (!target || !message) return null;
    let str = target
  
    if (message.content.toLowerCase().includes(str)) return true;
  
    for (let embed of message.embeds) {
      if (embed.description.toLowerCase().includes(str)) return true;
  
      if (params.fields)
        for (let field of embed.fields) {
          if ([field.name.toLowerCase(), field.value.toLowerCase()].includes(str)) return true;
        }
    }
  
    return false;
  }

  module.exports = findInMessage