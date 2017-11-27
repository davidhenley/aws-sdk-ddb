const AWS = require('aws-sdk');
const path = require('path');

AWS.config.loadFromPath(path.join(__dirname, 'config', 'aws-keys.json'));

const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

ddb.listTables({ Limit: 10 }, (err, data) => {
  if (err) {
    console.log('Error', err.message);
  } else {
    console.log('Table names are', data.TableNames);
  }
})