# 01 — Express básico (API REST con CRUD)

Primer servidor en Node.js con **Express**. Implementa una API REST con el
**CRUD completo** sobre un recurso `categorias` guardado en memoria.

## Cómo ejecutarlo

```bash
npm install      # instala las dependencias (Express)
node index.js    # arranca el servidor
```

Luego abre `http://localhost:3000` en el navegador. Para apagarlo: Ctrl+C.

## Endpoints

| Método | Ruta | Qué hace |
|--------|------|----------|
| GET | `/categorias` | Devuelve todas las categorías |
| GET | `/categorias/:id` | Devuelve una categoría por id (404 si no existe) |
| POST | `/categorias` | Crea una categoría nueva (body JSON con `nombre` y `total`) |
| PUT | `/categorias/:id` | Modifica una categoría existente (404 si no existe) |
| DELETE | `/categorias/:id` | Borra una categoría por id (404 si no existe) |

> Para probar POST, PUT y DELETE el navegador no sirve (solo hace GET): uso **Thunder Client**.

## Nota

Los datos viven en memoria, así que se reinician cada vez que se apaga el servidor.
Persistirlos en una base de datos es un tema de fases más adelante.