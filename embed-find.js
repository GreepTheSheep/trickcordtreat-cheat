function findInMessage(message, target, {
    caseSensitive = false,
    author = false,
    description = true,
    footer = true,
    title = true,
    fields = true
  }) {
    if (!target || !message) return null;
    let str = caseSensitive ? target : target.toLowerCase();
  
    if ((caseSensitive && message.content.includes(str)) ||
      (!caseSensitive && message.content.toLowerCase().includes(str))) return true;
  
    for (let embed of message.embeds) {
      if ((caseSensitive && (
          (author && embed.author.includes(str)) ||
          (description && embed.description.includes(str)) ||
          (footer && embed.footer.includes(str)) ||
          (title && embed.title.includes(str)))) ||
        (!caseSensitive && (
          (author && embed.author.toLowerCase().includes(str)) ||
          (description && embed.description.toLowerCase().includes(str)) ||
          (footer && embed.footer.toLowerCase().includes(str)) ||
          (title && embed.title.toLowerCase().includes(str))))
      ) return true;
  
      if (fields)
        for (let field of embed.fields) {
          if ((caseSensitive && [field.name, field.value].includes(str)) ||
            (!caseSensitive && [field.name.toLowerCase(), field.value.toLowerCase()].includes(str))) return true;
        }
    }
  
    return false;
  }

  module.exports = findInMessage