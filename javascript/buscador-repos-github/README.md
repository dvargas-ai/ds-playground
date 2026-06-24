# JELOU AI — Aprendiendo JavaScript y agentes de IA

Repositorio donde documento mi aprendizaje de **JavaScript** desde cero, con la
meta de entender cómo se construyen las **"tools" que usan los agentes de IA**.

Una *tool* es, en esencia, una función con una sola responsabilidad clara (por
ejemplo: "ir a buscar datos a internet") que un agente puede llamar cuando la
necesita. Este repo arranca construyendo exactamente eso.

## Estructura

```
JELOU AI/
├── buscador-repos/   →  EL ENTREGABLE: herramienta pulida y lista para mostrar
│   ├── github.js         la tool que consulta la API de GitHub
│   ├── index.js          el orquestador que la usa
│   └── README.md
│
└── practica/         →  EL CAMINO: scripts sueltos de aprendizaje, en orden
    ├── hola.js           funciones básicas
    ├── usuario.js        primera llamada a una API
    ├── repos.js          listas y manejo de errores
    ├── repos2.js         funciones que colaboran
    └── README.md
```

## Por dónde empezar

- ¿Quieres ver el **resultado final**? Entra a
  [`buscador-repos/`](./buscador-repos) y sigue su README.
- ¿Quieres ver **cómo aprendí** paso a paso? Entra a
  [`practica/`](./practica).

## Resumen de lo aprendido hasta ahora

1. **Funciones**: recibir parámetros, `return` vs `console.log`.
2. **Asincronía**: `fetch`, `await` y `.json()` para trabajar con datos de internet.
3. **Datos**: diferencia entre un objeto y una lista (arreglo), y cómo recorrer
   listas con `for...of`.
4. **Robustez**: `try/catch` y `respuesta.ok` para que el programa no se caiga
   ante errores (usuario inexistente, fallo de red).
5. **Organización**: dividir el código en módulos (`module.exports` / `require`) y
   separar responsabilidades — buscar los datos por un lado, mostrarlos por otro.

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior.
