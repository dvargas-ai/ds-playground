/*
 * ============================================================
 *  API REST con Express — backend/01-express-basico
 * ============================================================
 *  index.js actúa como el SERVIDOR.
 *  Cuando abro http://localhost:3000 en el navegador, el navegador
 *  es el CLIENTE: envía una petición, el servidor (este archivo) la
 *  procesa y devuelve una respuesta, que es lo que se ve en pantalla.
 *
 *  ----------------------------------------------------------
 *  CRUD = las 4 operaciones básicas de casi cualquier API REST.
 *  Es un patrón GENERAL: la mayoría de las APIs (incluida la de
 *  plataformas como Jelou) se construyen sobre estas 4 ideas.
 *
 *    C - Create  -> crear un dato nuevo          (método POST)
 *    R - Read    -> leer / consultar datos       (método GET)
 *    U - Update  -> modificar un dato existente  (método PUT/PATCH)
 *    D - Delete  -> eliminar un dato             (método DELETE)
 *
 *  ESTADO DE ESTE ARCHIVO:
 *    [x] C (Create) -> POST /categorias
 *    [x] R (Read)   -> GET /categorias y GET /categorias/:id
 *    [x] U (Update) -> PUT /categorias/:id
 *    [x] D (Delete) -> DELETE /categorias/:id
 * ============================================================
 */

// ===================== CONFIGURACIÓN =====================
const express = require("express");
const app = express();

// Activar el middleware (visto en la operación C):
// permite que el servidor lea el JSON que llega en el body de las peticiones.
app.use(express.json());

// ===================== DATOS EN MEMORIA =====================
// Simula una "base de datos". Más adelante esto vivirá en una BD real.
const categorias = [
  { id: 1, nombre: "Terror", total: 14 },
  { id: 2, nombre: "Romance", total: 29 },
  { id: 3, nombre: "Comedia", total: 10 }
];

// ===================== RUTAS DE EJEMPLO =====================
// Rutas sueltas que usé para aprender la diferencia entre send y json:
//   res.send(...) -> respuesta en texto / HTML (la lee un humano)
//   res.json(...) -> respuesta en JSON (datos estructurados; la consume un programa)

// Texto simple
app.get("/", (req, res) => {
  res.send("¡Mi primer servidor funcional!");
});

// Un objeto en JSON
app.get("/perfil", (req, res) => {
  res.json({
    nombre: "Damian",
    ciudad: "Guayaquil",
    aprendiendo: "backend con Express"
  });
});

// Otro objeto en JSON (mi actividad)
app.get("/sobre-mi", (req, res) => {
  res.json({
    carrera: "Ciencia de Datos e IA",
    semestre: "4to",
    universidad: "Escuela Superior Politécnica del Litoral"
  });
});

// Una lista (array) en JSON
app.get("/productos", (req, res) => {
  res.json([
    { id: 1, nombre: "Café", precio: 2.5 },
    { id: 2, nombre: "Sánduche", precio: 3.5 },
    { id: 3, nombre: "Jugo", precio: 1.75 }
  ]);
});

// ===================== READ (GET) — recurso "categorias" =====================

// READ all: devuelve TODA la lista (el catálogo completo)
app.get("/categorias", (req, res) => {
  res.json(categorias);
});

// READ one: devuelve UNA categoría según el :id que pida el cliente.
// :id es un PARÁMETRO DE RUTA -> la parte de la URL que cambia.
// Llega como TEXTO, por eso Number(...) lo convierte a número
// (con === el tipo importa: "2" === 2 da false).
app.get("/categorias/:id", (req, res) => {
  const id = Number(req.params.id);
  const categoria = categorias.find(c => c.id === id);

  // Si NO existe -> 404 con un mensaje claro.
  // El "return" corta la función aquí; si no, seguiría e intentaría
  // responder otra vez abajo (res.json), y no se puede responder dos veces.
  if (!categoria) {
    return res.status(404).json({ error: "categoría no encontrada" });
  }

  // Si existe -> la devolvemos (200 implícito).
  res.json(categoria);
});

// ---------- CREATE (POST) ----------
// Aquí aparecen dos piezas nuevas a la vez:
//   1) Un método nuevo: POST. La misma ruta /categorias se comporta distinto
//      según el método -> GET = "dame la lista"; POST = "agrega una nueva".
//   2) El body de la petición: en un POST el cliente manda los datos en el "body"
//      (JSON). Express no lo entiende por defecto: lo activa app.use(express.json())
//      de arriba, mi primer middleware, que "traduce" el JSON para poder usar req.body.

// CREATE: el cliente envía una categoría nueva en el body y la agregamos.
app.post("/categorias", (req, res) => {
  const nueva = {
    id: categorias.length + 1,   // id automático simple
    nombre: req.body.nombre,     // viene del body que envió el cliente
    total: req.body.total
  };

  categorias.push(nueva);        // la agregamos al array
  res.status(201).json(nueva);   // 201 = "Created", y devolvemos lo que creamos
});

// ---------- UPDATE (PUT/PATCH) ----------

// UPDATE: modifica una categoría existente. Usa el :id (URL) Y los datos nuevos (body).
app.put("/categorias/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = categorias.findIndex(c => c.id === id);

  // ¿Existe? Mismo manejo honesto de siempre: si no, 404.
  if (indice === -1) {
    return res.status(404).json({ error: "categoría no encontrada" });
  }

  // Reemplazamos los datos, conservando el id original.
  categorias[indice] = {
    id: id, // conservamos el mismo id; si dejáramos que venga del body, la lógica se rompería
    nombre: req.body.nombre,
    total: req.body.total
  };

  res.json(categorias[indice]); // devolvemos la categoría ya actualizada
});

// ---------- DELETE (DELETE) ----------
// Junta dos cosas que ya conozco: un método nuevo (DELETE) y los parámetros de ruta (:id).
// Pieza nueva de JS: findIndex -> devuelve la POSICIÓN del elemento en el array
// (necesito la posición, no el elemento, para saber qué casillero borrar).
// Si no lo encuentra, devuelve -1.

// DELETE: borra una categoría según el :id que pida el cliente.
app.delete("/categorias/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = categorias.findIndex(c => c.id === id);

  // findIndex vs find: en el Read usé find (quería el elemento para mostrarlo),
  // aquí uso findIndex porque quiero la posición para borrarlo.

  // Si no existe, mismo manejo honesto que en el Read: 404.
  if (indice === -1) {
    return res.status(404).json({ error: "categoría no encontrada" });
  }

  const eliminada = categorias.splice(indice, 1); // splice saca 1 elemento en esa posición
  res.json({ mensaje: "categoría eliminada", eliminada });
});

// ===================== INICIAR SERVIDOR (SIEMPRE AL FINAL) =====================
// app.listen deja el servidor "escuchando", esperando peticiones.
// A diferencia de los scripts de javascript/github-repo-finder, este
// se queda vivo hasta que lo detengo manualmente (Ctrl+C).
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});