import mongoose from 'mongoose';

const Connection = async () => {

    const URL = `mongodb+srv://daneshwarkumar218:Deepak2020@studentdatabase.qs91mcl.mongodb.net/?retryWrites=true&w=majority`;

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        alert("Error While Connecting to the Database");
        console.log('Error: ', error.message);
    }
}


export default Connection;

