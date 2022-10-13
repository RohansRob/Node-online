const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

//middleware
app.use(express.json());

app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
});

app.post('/', async (req, resp) => {
    // resp.send({name:'rohan'})
    let data = await dbConnect();
    let result = await data.insert(req.body)
    resp.send(result)

})

app.put('/', (req, resp) => {
    let data = await dbConnect();
    let result = data.updateOne(
        {
            name:re
        }
    )
    resp.send({ result: "update" })
})


app.listen(7000)    