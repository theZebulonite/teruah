import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI!; // URI de conexión a MongoDB
const options = {}; // Opciones adicionales (opcional)

let client: MongoClient; // Cliente de MongoDB
let clientPromise: Promise<MongoClient>; // Promesa que resuelve el cliente

// Verifica que la variable de entorno MONGO_URI esté definida
if (!process.env.MONGO_URI) {
  throw new Error("Por favor, define la variable de entorno MONGO_URI en .env.local");
}

if (process.env.NODE_ENV === "development") {
  // En desarrollo, usa una variable global para reutilizar la conexión
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
    console.log("Nueva conexión a MongoDB en desarrollo"); // Agrega este console.log
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En producción, crea una nueva conexión
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  console.log("Nueva conexión a MongoDB en producción"); // Agrega este console.log
}

// Función para obtener los mensajes
export async function getMessages() {
  const client = await clientPromise;
  const db = client.db("teruah_db");
  return db.collection("messages").find().toArray();
}

// Función para obtener los suscriptores
export async function getSubscribers() {
  const client = await clientPromise;
  const db = client.db("teruah_db");
  return db.collection("subscribers").find().toArray();
}

// Exporta la promesa del cliente para usarla en otras partes de la aplicación
export default clientPromise;