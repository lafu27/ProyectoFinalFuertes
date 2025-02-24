PC Monster Components

*Descripción del proyecto:
PC Monster Components es una plataforma de comercio electrónico especializada 
en componentes informáticos. El proyecto está desarrollado con React y utiliza 
Firebase como backend, ofreciendo una experiencia de usuario optimizada 
para la búsqueda, selección y compra de componentes de PC.

*Características Principales:
- Navegación intuitiva por categorías de productos
- Sistema de carrito de compras
- Proceso de checkout estructurado
- Gestión de inventario en tiempo real
- Diseño responsive
- Sistema de notificaciones al usuario

*Tecnologías Usadas/implementadas:
- React
- Firebase/Firestore
- React Router DOM
- Bootstrap
- Tailwind CSS
- Lucide React (Iconografía)

**Funcionalidades
* Navegación
- Vista principal del catálogo
- Sistema de filtrado por categorías
- Vista detallada de productos
- Gestión del carrito
- Proceso de checkout optimizado

* Gestión de Productos
- Visualización de inventario en tiempo real
- Control de stock
- Sistema de validación de disponibilidad

* Carrito
- Sistema de gestión de productos
- Modificación de cantidades
- Cálculo automático de totales
- Persistencia de datos

* Proceso de Compra
- Formulario de datos del comprador
- Sistema de validación de información
- Generación automática de órdenes
- Sistema de seguimiento de compras

* Estructura del Proyecto
```
pc-monster/
├── public/
│   └── img/
├── src/
│   ├── components/
│   │   ├── common/
│   │   └── [componentes principales]
│   ├── services/
│   ├── context/
│   ├── firebase/
│   └── [archivos principales]
```

* Instalación
1. Clonar el repositorio
(en bash)
git clone [URL del repositorio]


2. Navegar al directorio del proyecto
(en bash)
cd pc-monster


3. Instalar las dependencias
(en bash)
npm install


4. Configure las variables de entorno
- Crear un archivo `.env` en la raíz del proyecto
- Copiar y pegar las variables proporcionadas a continuación

5. Inicie el servidor de desarrollo
(en bash)
npm run dev


* Variables de Entorno
Configure las siguientes variables en su archivo `.env`:
----
VITE_FIREBASE_API_KEY=AIzaSyDbomOoI_VPdlJy633HJzjS6HT5GCZYLvs
VITE_FIREBASE_AUTH_DOMAIN=proyectofinalcoderfuertes.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://proyectofinalcoderfuertes-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=proyectofinalcoderfuertes
VITE_FIREBASE_STORAGE_BUCKET=proyectofinalcoderfuertes.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1003186509603
VITE_FIREBASE_APP_ID=1:1003186509603:web:93405bde4504f02c195e96
VITE_FIREBASE_MEASUREMENT_ID=G-GHXCK4Y0TM
-----

** Alumno
Lautaro Fuertes 