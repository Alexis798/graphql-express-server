import mongoose from "mongoose";

export async function connect() {
   
    try {

        await mongoose.connect('YOUR MONGO LINK DATABASE', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    
        console.log('>>> DB is connected');

    } catch (error) {

        console.log('Something went wrong')

    }
}
