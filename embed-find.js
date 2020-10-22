function findInMessage(message, target){
let params = {
    author = false,
    description = true,
    footer = true,
    title = true,
    fields = true
  }
    if (!target || !message) return null;
    let str = target
  
    if (message.content.toLowerCase().includes(str)) return true;
  
    for (let embed of message.embeds) {
      if ((params.author && embed.author.toLowerCase().includes(str)) ||
          (params.description && embed.description.toLowerCase().includes(str)) ||
          (params.footer && embed.footer.toLowerCase().includes(str)) ||
          (params.title && embed.title.toLowerCase().includes(str))
      ) return true;
  
      if (params.fields)
        for (let field of embed.fields) {
          if ([field.name.toLowerCase(), field.value.toLowerCase()].includes(str)) return true;
        }
    }
  
    return false;
  }

  module.exports = findInMessage