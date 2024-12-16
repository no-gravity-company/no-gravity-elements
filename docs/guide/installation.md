# Instalación

Hay varias formas de instalar y usar No Gravity Elements en tu proyecto.

## Instalación Completa

Para instalar toda la biblioteca:

```bash
# Usando npm
npm install @no-gravity-elements/components

# Usando yarn
yarn add @no-gravity-elements/components
```

## Instalación Individual de Componentes

También puedes instalar componentes individuales:

```bash
# Instalar solo el botón
yarn add @no-gravity-elements/button

# Instalar solo el icono
yarn add @no-gravity-elements/icon
```

## Adaptadores para Frameworks

### React

```bash
yarn add @no-gravity-elements/react-adapter
```

### Angular

```bash
yarn add @no-gravity-elements/angular-adapter
```

## Uso con CDN

También puedes usar No Gravity Elements directamente desde un CDN:

```html
<script type="module">
  import '@no-gravity-elements/components/dist/index.js';
</script>
```

## Verificación de la Instalación

Para verificar que todo está instalado correctamente:

```javascript
// Importar un componente
import '@no-gravity-elements/button';

// Si ves el componente en tu página, todo está funcionando
<nge-button>Test Button</nge-button>
```

## Requisitos del Sistema

- Node.js >=16.20.0
- npm o yarn
- Navegadores modernos con soporte para Web Components

## Siguiente Paso

Continúa con la [Guía de Uso](./usage.md) para aprender cómo utilizar los componentes. 