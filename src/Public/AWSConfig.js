import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }

    docClient.get(params, function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}