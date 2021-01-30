

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10'
});
exports.handler = async (event) => {
    // TODO implement
    console.log(event)
    // var incoming=JSON.parse(event)
      var params = {
        TableName:"redirect",
        Item: {
            'token': event.token,
            "data":event.data
          
        },
        ReturnValues: 'NONE'
    };

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
await sleep(45000);
// async function putdata (){
    await docClient.put(params).promise();
    // return;
// }
    
    
    const response = {
        
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
