const AWS = require('aws-sdk');
const path = require('path');

AWS.config.loadFromPath(path.join(__dirname, 'config', 'aws-keys.json'));

const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

const params = {
  TableName: 'CUSTOMER_LIST'
}

ddb.deleteTable(params, (err, data) => {
  if (err && err.code === 'ResourceNotFoundException') {
    console.log('Error: Table not found');
  } else if (err && err.code === 'ResourceInUseException') {
    console.log('Error: Table in use');
  } else if (err) {
    console.log('Error:', err.message);
  } else {
    console.log('Table deleted:', data.TableDescription.TableName);
  }
});