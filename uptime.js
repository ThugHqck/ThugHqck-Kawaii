exports.run = (client, message, args)  => {

  const os = require('os-utils');
   String.prototype.toHHMMSS = function () {
          var sec_num = parseInt(this, 10); 
          var hours   = Math.floor(sec_num / 3600);
          var days   = Math.floor(hours / 24);
          var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
          var seconds = sec_num - (hours * 3600) - (minutes * 60);
          if (hours   < 10) {hours   = "0"+hours;}
          if (minutes < 10) {minutes = "0"+minutes;}
          if (seconds < 10) {seconds = "0"+seconds;}
          var time    =   " **" +hours+'** horas\n- **'+minutes+'** minutos\n- **'+seconds+'** segundos';
              days > 1 ? time = days+" dias " : time = time
          return time;
      };
  
  message.channel.sendMessage({
      "embed": {
        "title": "**UP TIME**",
        "description": `Estou Online a \n-${os.processUptime().toString().toHHMMSS()}`,
        
        "color": 0xE57380,
      }
  }).then((value) => {
      setTimeout(() => {
          value.delete();
      }, 10000);
  });
  
  }