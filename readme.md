# API de Autos 🚗

Esta API permite gestionar autos (modelo, marca, precio, color, año) usando Firebase Firestore como base de datos. Está protegida por autenticación JWT.

---

## ⚙️ Requisitos Previos

- Node.js v18+
- Cuenta en Firebase con Firestore habilitado
- Postman para pruebas

---

## 🚀 Instalación

```bash
npm install
```

---

## 🔐 Configuración del entorno

Crea un archivo `.env` en la raíz del proyecto con este contenido:

```env
JWT_SECRET=clave_secreta
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
```

Reemplazá los valores con los de tu proyecto de Firebase.

---

## ▶️ Ejecutar la API

```bash
npm run start
```

Servidor corriendo en `http://localhost:3000`

---

## 🔑 Login (Obtener Token JWT)

**POST** `http://localhost:3000/auth/login`

```json
{
  "username": "admin",
  "password": "1234"
}
```
---

## 🧪 Pruebas con Postman

En cada request protegida:
- Pestaña **Authorization**
- Tipo: **Bearer Token**
- Token: el obtenido en `/auth/login`

---

## 📦 Endpoints de Autos

Todas requieren token JWT.

### Obtener todos los autos
**GET** `/api/autos`

### Obtener auto por ID
**GET** `/api/autos/:id`

### Crear auto
**POST** `/api/autos/create`

```json
{
  "marca": "Ford",
  "modelo": "Focus",
  "precio": 12000000,
  "color": "Azul",
  "year": 2023
}
```

### Eliminar auto
**DELETE** `/api/autos/:id`

---

## ⚠️ Códigos de respuesta

- `200 OK` → Respuesta exitosa
- `201 Created` → Recurso creado
- `400 Bad Request` → Datos inválidos
- `401 Unauthorized` → Falta token
- `403 Forbidden` → Token inválido
- `404 Not Found` → Recurso no existe
- `500 Internal Server Error` → Error interno

---

## 🛠 Autor
Gabriel Garofani - Proyecto final curso Node.js