const sanitizeHtml = require('sanitize-html');

const mailchimp = (req, res) => {
    const firstName = sanitizeHtml(req.body.fname);
    const lastName = sanitizeHtml(req.body.lname);
    const email = sanitizeHtml(req.body.email);

    console.log(firstName, lastName, email);
    
    const client = require("@mailchimp/mailchimp_marketing");
      client.setConfig({
        apiKey: process.env.MAILCHIMP_API,
        server: process.env.MAILCHIMP_SERVER,
      });

      const run = async () => {
        const listId = process.env.LIST_ID;
        const response = await client.lists.batchListMembers(listId, {
          members: [{
            email_address: email,
            status: 'pending',
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName
          }}],
        });
        console.log(response.total_created, response.error_count);
        
        if(response.total_created > 0){
          res.sendFile(__dirname + '/success.html');
        } 
        else if(response.total_updated > 0){
          res.send('successfully UPDATED')
        }
        else {
          res.sendFile(__dirname + '/failure.html')
        }
        
      };
      run();
      
}

module.exports.mailchimp = mailchimp;