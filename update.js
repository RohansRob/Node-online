const  dbConnect = require('./mongodb');

const updateData = async () = > {
    let data= await dbConnect();
    let result = data.updateOne({
        {name:'note'} ,{
            $set:{ }
        }
    })
    console.warn(data)
}

updateData();