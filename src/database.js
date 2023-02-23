import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGODB_URI

const connection = () => {

  mongoose.set('strictQuery', false);
  mongoose.connect(URI).then(
    () => console.log('Conectado a mongoDB')
  );
}

export default connection;