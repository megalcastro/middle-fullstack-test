# Proyecto de Gestión de Inventario

Este proyecto es un sistema para gestionar productos e inventarios. Está diseñado usando **NestJS** con arquitectura hexagonal y utiliza **PostgreSQL** como base de datos. A continuación se explican los pasos para ejecutar el proyecto tanto localmente como en Docker, así como las instrucciones para correr las pruebas unitarias.

## Requisitos previos

Asegúrate de tener instalados los siguientes requisitos:

- **Node.js** (v18 o superior)
- **Docker** (para ejecución en contenedor)
- **Docker Compose** (para orquestar contenedores)
- **PostgreSQL** (si se ejecuta localmente)


## Ejecutar el Proyecto con Docker

Para mayor facilidad y ejecuccion para non tener preocupacion al iniciar el proyecto.

### 1. **Crea un archivo `.env`**:

Asegúrate de crear un archivo `.env` con la configuración de tu base de datos, por ejemplo:

```env
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=inventory
```

### 2. **Instalar dependencias**:

dentro de la raiz del proyecto back ejecutar

```
npm install
```

### 3. **Construir y levantar los contenedores**:

Desde la raíz del proyecto, construye y levanta los contenedores de Docker usando **Docker Compose**.

```bash
docker-compose up --build
```

Este comando construirá las imágenes y levantará tanto el backend como el contenedor de PostgreSQL.

### 3. **Acceder al servidor**:

Una vez que los contenedores estén levantados, puedes acceder al backend en `http://localhost:3000`.

---

## Ejecución de Pruebas Unitarias

Para correr las pruebas unitarias, puedes usar Jest. A continuación se indican los pasos para ejecutar los tests.


### 2. **Ejecutar las pruebas**:

Para correr las pruebas unitarias, usa el siguiente comando:

```bash
npm run test
```

O si usas **Yarn**:

```bash
yarn test
```

Este comando ejecutará Jest, que buscará los archivos de pruebas en tu proyecto y correrá las pruebas unitarias definidas, como las pruebas para la clase `Producto`.

### 3. **Ejecutar pruebas específicas**:

Si deseas ejecutar pruebas de un archivo específico, puedes usar el siguiente comando:

```bash
npm run test -- <ruta-del-archivo-de-test>
```


---

## Consideraciones

- Asegúrate de tener las credenciales y configuración correcta para la base de datos en el archivo `.env` antes de ejecutar el proyecto.
- Las pruebas unitarias están orientadas a validar la lógica de negocio, como la manipulación de inventarios y la actualización del stock.

---
