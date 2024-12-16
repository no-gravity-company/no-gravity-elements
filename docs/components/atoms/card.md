# Card

El componente `Card` es un contenedor versátil para mostrar contenido relacionado y acciones.

## Instalación

```bash
yarn add @no-gravity-elements/card
```

## Importación

```javascript
import '@no-gravity-elements/card';
```

## Uso Básico

```html
<nge-card>
  <nge-card-header>
    <nge-typography variant="h5">Título de la Tarjeta</nge-typography>
  </nge-card-header>
  <nge-card-content>
    <nge-typography>
      Contenido de la tarjeta...
    </nge-typography>
  </nge-card-content>
  <nge-card-actions>
    <nge-button variant="primary">Acción</nge-button>
  </nge-card-actions>
</nge-card>
```

## Subcomponentes

- `nge-card-header`: Encabezado de la tarjeta
- `nge-card-content`: Contenido principal
- `nge-card-actions`: Contenedor para botones y acciones
- `nge-card-media`: Contenedor para imágenes y medios

## Props

### Card
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `elevation` | `number` | `1` | Nivel de elevación (sombra) |
| `outlined` | `boolean` | `false` | Estilo con borde en lugar de sombra |
| `radius` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Radio de borde |

### CardMedia
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `image` | `string` | - | URL de la imagen |
| `alt` | `string` | - | Texto alternativo |
| `height` | `string` | `'200px'` | Altura del contenedor de media |

## Ejemplos

### Tarjeta con Imagen
```html
<nge-card>
  <nge-card-media 
    image="ruta/imagen.jpg"
    alt="Descripción de la imagen"
  ></nge-card-media>
  <nge-card-content>
    <nge-typography>Descripción...</nge-typography>
  </nge-card-content>
</nge-card>
```

### Tarjeta con Borde
```html
<nge-card outlined>
  <nge-card-header>
    <nge-typography>Tarjeta con Borde</nge-typography>
  </nge-card-header>
</nge-card>
```

### Tarjeta con Acciones
```html
<nge-card>
  <nge-card-content>
    <nge-typography>Contenido...</nge-typography>
  </nge-card-content>
  <nge-card-actions>
    <nge-button variant="outline">Cancelar</nge-button>
    <nge-button variant="primary">Aceptar</nge-button>
  </nge-card-actions>
</nge-card>
```

## Personalización

### CSS Custom Properties
```css
:root {
  --nge-card-background: #ffffff;
  --nge-card-border-radius: 8px;
  --nge-card-padding: 16px;
  --nge-card-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

## Mejores Prácticas

1. **Estructura Consistente**
   ```html
   <nge-card>
     <nge-card-header>...</nge-card-header>
     <nge-card-content>...</nge-card-content>
     <nge-card-actions>...</nge-card-actions>
   </nge-card>
   ```

2. **Accesibilidad**
   ```html
   <nge-card role="article">
     <nge-card-header>
       <nge-typography role="heading">Título</nge-typography>
     </nge-card-header>
   </nge-card>
   ```

## Accesibilidad

- Estructura semántica clara
- Navegación por teclado
- Estados focusables visibles
- Contraste adecuado 