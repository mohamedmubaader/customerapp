
// import mongoose from 'mongoose';

// const connectMongo = async () => {
//     try{

//         const { connection }  = await mongoose.connect("mongodb://localhost:27017/mubaaderdb")

//         if(connection.readyState == 1){
//             console.log("Database Connected")
//         }

//     }catch(errors){
//         return Promise.reject(errors)
//     }
// }

// export default connectMongo;


export async function main() {
    try {
      await prisma.$connect();
    } catch (err) {
      return Error("Database Connection Unsuccessull");
    }
  }