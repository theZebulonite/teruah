import mongoose from 'mongoose';

// Define el tipo para el objeto "cached"
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extiende el objeto global para incluir "mongoose"
declare global {
  var mongoose: MongooseCache;
}

// Obtén la URI de MongoDB desde las variables de entorno
const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error('Por favor, define la variable de entorno MONGO_URI en .env.local');
}

// Inicializa el objeto "cached" en el ámbito global
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Función para conectar a MongoDB
async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // Elimina las opciones obsoletas
    cached.promise = mongoose.connect(MONGODB_URI!).then((mongooseInstance) => {
      console.log('✅ Conectado a MongoDB'); // Mensaje de confirmación
      return mongooseInstance;
    }).catch((error) => {
      console.error('❌ Error conectando a MongoDB:', error); // Mensaje de error
      throw error;
    });
  }

  // Espera a que la promesa se resuelva y almacena la conexión en "cached.conn"
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;