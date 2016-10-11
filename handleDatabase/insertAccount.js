module.exports = (db)=>{
    var insertAccount = (collection , data){
        db.collection(collection).insertOne(data, (err, result)=>{
            if(err){
                insertAccount(collection, data);
            }
        });
    }
    return indexAccount;
}
