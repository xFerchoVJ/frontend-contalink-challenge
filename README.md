# Frontend - Contalink Challenge

Este proyecto es el frontend para el challenge de Contalink. Fue desarrollado utilizando **Angular versión 17.2.0** y tiene como objetivo consumir un API REST que proporciona información sobre facturas en un rango de fechas. La interfaz permite a los usuarios ingresar una fecha inicial y una fecha final, realizar una consulta al API y mostrar los resultados en una tabla.

## Características

- **Filtro de Facturas**: Permite seleccionar un rango de fechas para filtrar facturas.
- **Interfaz Responsiva**: Estilos aplicados con Bootstrap para una mejor experiencia visual.
- **Consumo de API**: Realiza peticiones al backend para obtener los datos de facturas.

---

## Requisitos Previos

1. **Node.js**: Asegúrate de tener instalado Node.js en tu máquina. Se recomienda una versión reciente.
2. **Angular CLI**: Si no lo tienes instalado, puedes hacerlo ejecutando:
   ```bash
   npm install -g @angular/cli
   ```
3. **Backend Corriendo**: Necesitas que el API del backend esté disponible y funcionando (puerto por defecto: http://localhost:3000).

## Instalación y Configuración

Sigue los siguientes pasos para correr el proyecto:

### 1. Clona el Repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/xFerchoVJ/frontend-conalink-challenge.git
```

```bash
cd frontend-conalink-challenge
```

### 2. Instala las dependencias

Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

```bash
npm install
```

### 3. Ejecuta el Servidor de Desarrollo

Inicia el servidor de desarrollo con:

```bash
ng serve
```

Esto abrirá la aplicación en tu navegador en la dirección http://localhost:4200.
