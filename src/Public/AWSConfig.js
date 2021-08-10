import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1",secretAccessKey: 'KMf1SNphL3AfAEwkg45kiV7wA0S9XciZ8iblBRzo',
accessKeyId: 'AKIAV3IZ7OVN3VYX3UD7'})

export const fetchData = (tableName) => {
    var params = {
        TableName: tableName,
        Key: {
            'userid':'0001'
        }
    }

    docClient.get(params, function (err, data) {
        if(err){
            console.log(err)
        }
        if (!err) {
            console.log(data)
        }
    })
}