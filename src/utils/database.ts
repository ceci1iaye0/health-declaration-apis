import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

const uri = `${process.env.MONGODB_URI}`.replace(
  "{password}",
  encodeURIComponent(`${process.env.MONGODB_PASSWORD}`)
);

console.log("MongoDB URI: ", uri);

const connectDB = () => {
  const mongoURI = uri;
  const options = {
    useNewUrlParser: true,
    autoIndex: true,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  };
  connect(mongoURI, options)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB", error.message);
      process.exit(1);
    });
};

export default connectDB();
