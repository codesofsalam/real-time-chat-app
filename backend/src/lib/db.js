import mangoose from "mongoose";
 export const connectDB=async ()=>{
try {
   const conn= await mangoose.connect(process.env.MONGODB_URI);
   console.log(`MongoDB connected: ${conn.connection.host}`);
   
} catch (error) {
    console.log("MonoDB connection error:", error);
    
}
 }