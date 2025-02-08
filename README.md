# 🚀 Prueba Técnica - Control de Inventario con Eventos de Dominio  

🎯 **Objetivo:** Desarrollar un sistema de **gestión de inventario y productos** con **NestJS en el backend** y **React en el frontend**, aplicando **DDD, eventos de dominio y arquitectura hexagonal**.  

---

## ✨ ¡Demuestra Tu Potencial!  

¡Sabemos que esta prueba técnica es un reto, pero también una gran oportunidad para mostrar tus habilidades! No te preocupes si no logras completar todo en el tiempo estimado. **Valoramos más la calidad del código, la organización y tu forma de estructurar la solución**.  

**¡Demuéstranos tu capacidad para diseñar un sistema limpio, escalable y bien estructurado! 🚀**  

---

## 📜 Descripción General  

Se requiere desarrollar una aplicación para **gestionar productos e inventario**, registrando entradas y salidas de stock.  

📌 **Requisitos clave:**  
✅ Backend en **NestJS con arquitectura hexagonal y DDD**  
✅ Eventos de dominio para actualizar el stock y alertar cuando el stock sea crítico  
✅ Correcto manejo de **códigos HTTP y excepciones**  
✅ Un **frontend en React** para interactuar con el sistema  
✅ **Pruebas unitarias (opcional, pero valoradas)**  
✅ Uso de cualquier **gestor de estado y estilos en el frontend**  
✅ **Entrega parcial aceptada** si no logran completar la prueba  

---

## 📝 Historias de Usuario  

### 🔹 Gestión de Productos  
**Como** administrador del inventario,  
**quiero** registrar productos con un SKU único,  
**para** evitar duplicados en el sistema.  

📌 **Criterios de Aceptación:**  
✅ Cada producto debe tener un `sku`, `nombre`, `precio` y `stock inicial`.  
✅ Si se intenta registrar un producto con un SKU existente, el sistema debe responder con **409 Conflict**.  

---

### 🔹 Movimientos de Inventario  
**Como** administrador del inventario,  
**quiero** registrar entradas y salidas de stock,  
**para** mantener actualizado el inventario de productos.  

📌 **Criterios de Aceptación:**  
✅ Se debe registrar **cada entrada y salida** en la tabla de **movimientos de inventario**.  
✅ No se pueden realizar **salidas de productos** si el stock es insuficiente (**400 Bad Request**).  
✅ **El stock del producto debe actualizarse automáticamente** al realizar un movimiento.  

---

### 🔹 Notificación de Stock Bajo  
**Como** administrador del inventario,  
**quiero** recibir una alerta cuando el stock de un producto sea **5 o menor**,  
**para** poder tomar acciones y evitar desabastecimiento.  

📌 **Criterios de Aceptación:**  
✅ Cada vez que **el stock de un producto alcance 5 unidades o menos**, se debe emitir un **evento de dominio**.  
✅ Se debe guardar un **log en la tabla `notificaciones`** con los datos proyectados del movimiento.  

---

## 📂 Estructura Esperada del Proyecto  

### **1️⃣ Hacer un Fork del Repositorio**  
Antes de empezar, deben hacer un **fork** del repositorio original y clonar el proyecto en su máquina local.  

### **2️⃣ Crear la Siguiente Estructura**  
Dentro del repositorio, deben organizar el código en dos carpetas principales:  

/mi-repositorio
├── backend  (API en NestJS)
├── frontend (Aplicación en React)

📌 **Notas:**  
- **No modificar el repositorio original**. Trabajar en el fork.  
- Se puede utilizar cualquier gestor de estado y estilos en el frontend.  
- Se debe agregar un archivo `README.md` con las instrucciones para ejecutar el proyecto.  

---

## 📂 Modelo de Base de Datos  

### 🔹 Tabla `productos`  
| Campo       | Tipo       | Descripción                 |  
|------------|-----------|-----------------------------|  
| `id`       | `UUID`    | Identificador único        |  
| `nombre`   | `VARCHAR` | Nombre del producto        |  
| `sku`      | `VARCHAR` | Código SKU único           |  
| `precio`   | `DECIMAL` | Precio del producto        |  
| `stock`    | `INTEGER` | Cantidad en inventario     |  

### 🔹 Tabla `movimientos_inventario`  
| Campo        | Tipo       | Descripción                    |  
|-------------|-----------|--------------------------------|  
| `id`        | `UUID`    | Identificador único           |  
| `producto_id` | `UUID`  | Producto afectado             |  
| `tipo`      | `VARCHAR` | `entrada` o `salida`          |  
| `cantidad`  | `INTEGER` | Cantidad movida               |  
| `fecha`     | `TIMESTAMP` | Fecha del movimiento       |  

### 🔹 Tabla `notificaciones`  
| Campo           | Tipo       | Descripción                      |  
|----------------|-----------|----------------------------------|  
| `id`          | `UUID`    | Identificador único             |  
| `producto_id` | `UUID`    | Producto afectado               |  
| `cantidad_restante` | `INTEGER` | Stock actual alcanzado   |  
| `fecha_registro` | `TIMESTAMP` | Fecha del registro       |  

---

## 📌 Instrucciones de Entrega  

1️⃣ **Subir el código a un repositorio publico* en GitHub o Bitbucket**.  
2️⃣ **Agregar un `README.md`** en cada carpeta (`backend/` y `frontend/`) con:
   - Pasos para ejecutar la API y el frontend.  

📌 **Notas:**  
✅ Se permite el uso de cualquier **framework de CSS o manejador de estado en React**.  
✅ **Si no logras completar la prueba en el tiempo estimado, envíala con lo que hayas avanzado**.  
✅ Se valorará el uso de **pruebas unitarias en NestJS con Jest**.  

---

## 🎯 ¡Últimas Recomendaciones!  

- **Mantén un código limpio y modular*  
- **No es necesario que completes todo, pero sí que muestres tu enfoque técnico.**  
- **Si tienes dudas, coméntalas en tu README, nos interesa ver tu razonamiento.**  

🚀 **¡Mucha suerte y esperamos ver tu mejor versión como desarrollador!** 🚀  