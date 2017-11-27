const AWS = require('aws-sdk');
const path = require('path');

AWS.config.loadFromPath(path.join(__dirname, 'config', 'aws-keys.json'));

const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

const params = {
  TableName: 'CUSTOMER_LIST',
  Key: {
    'CUSTOMER_ID': { N: '001' },
    'CUSTOMER_NAME': { S: 'Richard Roe'}
  },
  ProjectionExpression: 'CUSTOMER_NAME'
}

ddb.getItem(params, (err, data) => {
  if (err) {
    console.log('Error:', err.message);
  } else {
    console.log('Success:', data.Item);
  }
});