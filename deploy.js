const { Client } = require('node-scp')

Client({
  host: '113.164.246.6',
  port: 22,
  username: 'dev',
  password: process.env.PITEL_SERVER_PASSWORD
})
  .then(client => {
    client.uploadDir('./build', '/home/dev/pitel-portal-web/docs')
        .then(response => {
          console.log("SCP Finished!");
          client.close() // remember to close connection after you finish
        })
        .catch(error => {
          console.error("SCP Failed: ", error);
        })
  })

