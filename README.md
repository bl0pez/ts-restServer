# TS-REST-SERVER

### Descripción:
Crea, elimina, actualiza, lista y filtra usuarios de una base de datos. Con el uso de TypeScript, Express, Sequelize, MySQL y Postman.


Documentación:
```
https://documenter.getpostman.com/view/13247457/2s83KadMR2
```

## Apuntes
- Crea el archivo tsconfig.json
  ```
  tsc --init
  ```
- Compila el archivo tsconfig.jsx
  ```
  tsc
  ```
- Inicializamos el archivo tslint
  ```
  ./node_modules/.bin/tslint --init
  ```

## Opciones abilitadas en el archivo tsconfig.json
- "target": "es6"
- "module": "commonjs"
- "outDir": "./dist"
- "strict": true
- "esModuleInterop" true
- "sourceMap": true
- "moduleResolution": "node"

## Dependencias
- Express
  ```
  npm i express --save
  ```
- Express validator
  ```
  npm i express-validator --save
  ```
- cors
  ```
  npm i cors --save
  ```
- dotenv
  ```
  npm i dotenv --save
  ```
- sequelize
  ```
    npm i sequelize --save
  ```
- mysql
  ```
    npm i mysql2 --save
  ```


## Dependencia de desarrollo
- tslint
  ```
  npm i tslint --save-dev
  ```
- typescript
  ```
  npm i typescript --save-dev
  ```
- Tipado express
  ```
  npm i --save-dev @types/express
  ```
- Tipado cors
  ```
  npm i --save-dev @types/cors
  ```