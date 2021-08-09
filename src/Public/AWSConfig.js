import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"})

export const fetchData = (tableName) => {
    console.log("Processing...");
    const params = {
        Item: {
            date: Date.now(),
            message: event.key1
        },
        TableName: "user"
    };
    const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify('Hello from new Lambda!'),
  };
    
// export const fetchData = (tableName) => {
//     var params = {
//         TableName: tableName
//     }

    docClient.get(params, function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}