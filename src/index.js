import app from './app.js';
import * as dotenv from 'dotenv';
import connection from './database.js';

dotenv.config();

connection();

const main = async () => {
  
  const port = process.env.PORT || 3000
  await app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Servidor corriendo en el puerto ${port}`);
  });

}

main();