const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  cloud: {
    id: 'es1:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDE1ZWQ5NWM0MGZkMzRhNzg4ZDdlOTExZjY5ZGRhM2RjJDU3M2FkZTk3MTRkNTQ1ZTNiMzA2NmZmNDk5NTQ2Mjky',
  },
  auth: {
    apiKey: 'bUU5VVhJTUJkUlNNUEg1cXBOTEc6Y3pveDI4eDBTRkt0VndORzdlZVhQQQ=='
  }
});

client.search({
  index: 'my_test',
  query: {
    match: { state: 'Pyrami' }
  }
}).then(res => console.log(res.hits.hits))