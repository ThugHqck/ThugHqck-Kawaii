exports.run = (client,message,args)=>{
    return message.channel.send(`${message.author}, use ks_report + @user + @reason`);
  }