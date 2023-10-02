import mongoose from "mongoose";
const ctdb = () => {

    mongoose.connect('mongodb+srv://mojada:Am122448132652@magic-notebook.vurf1pq.mongodb.net/')
    .then(
        res=> {console.log('connected')}
        ).catch(er=>console.log(er))
}

export default ctdb
