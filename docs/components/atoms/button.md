# Button

El componente `Button` es un elemento atómico que proporciona una interfaz interactiva para acciones del usuario.

## Instalación

```bash
yarn add @no-gravity-elements/button
```

## Importación

```javascript
import '@no-gravity-elements/button';
```

## Uso Básico

```html
<nge-button>Click me</nge-button>
```

## Variantes

### Primario
```html
<nge-button variant="primary">Primario</nge-button>
```

### Secundario
```html
<nge-button variant="secondary">Secundario</nge-button>
```

### Outline
```html
<nge-button variant="outline">Outline</nge-button>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Estilo visual del botón |
| `disabled` | `boolean` | `false` | Estado deshabilitado |
| `loading` | `boolean` | `false` | Estado de carga |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del botón |

## Eventos

| Evento | Descripción |
|--------|-------------|
| `click` | Se dispara cuando se hace click en el botón |
| `focus` | Se dispara cuando el botón recibe el foco |
| `blur` | Se dispara cuando el botón pierde el foco |

## Ejemplos

### Botón con Icono
```html
<nge-button>
  <nge-icon name="star"></nge-icon>
  Con Icono
</nge-button>
```

### Botón de Carga
```html
<nge-button loading>
  Cargando...
</nge-button>
```

### Botón Deshabilitado
```html
<nge-button disabled>
  No disponible
</nge-button>
```

## Accesibilidad

- Soporta navegación por teclado
- Incluye roles ARIA apropiados
- Estados focusables claramente visibles
- Contraste de color según WCAG 2.1 