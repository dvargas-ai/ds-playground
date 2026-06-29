# backend

Mi recorrido de **backend con Node.js** dentro de `ds-playground`. Aquí practico la
construcción de servidores y APIs REST, la base del trabajo en plataformas de
agentes conversacionales como Jelou. Cada tema vive en su propia subcarpeta numerada.

> 🚧 En progreso. Lo voy llenando a medida que avanzo.

## Contenido

| Carpeta | Tema |
|---------|------|
| `01-express-basico/` | Primer servidor con Express + API REST con CRUD completo |

## Lo que llevo aprendido

- **Cliente vs servidor:** el navegador (o cualquier programa) hace la petición; el servidor la procesa y responde.
- **Express:** framework para crear servidores y APIs en Node. Rutas con `app.get/post/put/delete`, `req` (petición) y `res` (respuesta).
- **JSON como lenguaje de las APIs:** `res.json()` devuelve datos estructurados que otro programa puede consumir; `res.send()` devuelve texto/HTML para un humano.
- **Parámetros de ruta (`:id`):** la parte de la URL que cambia, leída con `req.params`.
- **Body de la petición (`req.body`):** los datos que el cliente envía en un POST/PUT; requiere el middleware `express.json()`.
- **Códigos de estado:** 200 (OK), 201 (Created), 404 (no encontrado).
- **CRUD:** las 4 operaciones base de cualquier API REST.

## Referencia rápida — CRUD

| Letra | Operación | Método HTTP | Éxito |
|-------|-----------|-------------|-------|
| C | Create (crear algo nuevo) | `POST` | 201 |
| R | Read (leer / consultar) | `GET` | 200 |
| U | Update (modificar lo que ya existe) | `PUT` | 200 |
| D | Delete (borrar) | `DELETE` | 200 |

La URL identifica el **recurso** (el sustantivo: "la categoría 2"); el **método** dice
qué hacer con él (el verbo: léela, modifícala, bórrala).
