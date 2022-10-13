const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = db.insert(
        [
       { name: 'note 3', brand: 'iphone', price: 320, category: 'mobile' }         
       { name: 'note 3', brand: 'iphone', price: 320, category: 'mobile' }
        ]
    )
    console.log(result)

}

insert();