# Icon

El componente `Icon` es un elemento atómico que proporciona iconos vectoriales escalables.

## Instalación

```bash
yarn add @no-gravity-elements/icon
```

## Importación

```javascript
import '@no-gravity-elements/icon';
```

## Uso Básico

```html
<nge-icon name="star"></nge-icon>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `name` | `string` | - | Nombre del icono a mostrar |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del icono |
| `color` | `string` | `'currentColor'` | Color del icono |
| `rotate` | `number` | `0` | Rotación en grados |

## Iconos Disponibles

- `star` - Estrella
- `close` - Cerrar
- `menu` - Menú
- `search` - Búsqueda
- `arrow-right` - Flecha derecha
- `arrow-left` - Flecha izquierda
- `check` - Marca de verificación
- `warning` - Advertencia
- `info` - Información
- `error` - Error

## Ejemplos

### Icono con Color
```html
<nge-icon name="star" color="#FFD700"></nge-icon>
```

### Icono Grande
```html
<nge-icon name="menu" size="large"></nge-icon>
```

### Icono Rotado
```html
<nge-icon name="arrow-right" rotate="90"></nge-icon>
```

## Personalización

### CSS Custom Properties
```css
:root {
  --nge-icon-size-small: 16px;
  --nge-icon-size-medium: 24px;
  --nge-icon-size-large: 32px;
}
```

## Accesibilidad

- Incluye atributo `aria-hidden` por defecto
- Se recomienda usar `aria-label` cuando el icono transmite significado
- Alto contraste para mejor visibilidad 