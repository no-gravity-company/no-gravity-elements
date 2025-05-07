# Typography

El componente `Typography` proporciona un sistema consistente de tipografía para tu aplicación.

## Instalación

```bash
yarn add @no-gravity-elements/typography
```

## Importación

```javascript
import '@no-gravity-elements/typography';
```

## Uso Básico

```html
<nge-typography variant="h1">Título Principal</nge-typography>
```

## Variantes

### Encabezados
```html
<nge-typography variant="h1">Encabezado 1</nge-typography>
<nge-typography variant="h2">Encabezado 2</nge-typography>
<nge-typography variant="h3">Encabezado 3</nge-typography>
<nge-typography variant="h4">Encabezado 4</nge-typography>
<nge-typography variant="h5">Encabezado 5</nge-typography>
<nge-typography variant="h6">Encabezado 6</nge-typography>
```

### Cuerpo de Texto
```html
<nge-typography variant="body1">Texto principal</nge-typography>
<nge-typography variant="body2">Texto secundario</nge-typography>
```

### Otros Estilos
```html
<nge-typography variant="subtitle1">Subtítulo 1</nge-typography>
<nge-typography variant="subtitle2">Subtítulo 2</nge-typography>
<nge-typography variant="caption">Texto pequeño</nge-typography>
<nge-typography variant="overline">TEXTO SUPERIOR</nge-typography>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'body1' \| 'body2' \| 'subtitle1' \| 'subtitle2' \| 'caption' \| 'overline'` | `'body1'` | Estilo de tipografía |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Alineación del texto |
| `color` | `'primary' \| 'secondary' \| 'error' \| string` | `'primary'` | Color del texto |
| `gutterBottom` | `boolean` | `false` | Añade margen inferior |

## Personalización

### CSS Custom Properties
```css
:root {
  --nge-typography-h1-size: 2.5rem;
  --nge-typography-h2-size: 2rem;
  --nge-typography-body1-size: 1rem;
  --nge-typography-font-family: 'Arial', sans-serif;
  --nge-typography-line-height: 1.5;
}
```

## Ejemplos

### Texto con Color Personalizado
```html
<nge-typography color="#FF5722">
  Texto con color personalizado
</nge-typography>
```

### Texto Centrado con Margen
```html
<nge-typography align="center" gutterBottom>
  Texto centrado con margen inferior
</nge-typography>
```

## Mejores Prácticas

1. **Jerarquía Visual**
   ```html
   <nge-typography variant="h1">Título Principal</nge-typography>
   <nge-typography variant="subtitle1">Subtítulo explicativo</nge-typography>
   <nge-typography variant="body1">Contenido detallado...</nge-typography>
   ```

2. **Accesibilidad**
   ```html
   <nge-typography variant="h1" role="heading" aria-level="1">
     Título Accesible
   </nge-typography>
   ```

## Accesibilidad

- Mantiene la semántica HTML correcta
- Ratios de contraste según WCAG
- Tamaños de fuente escalables
- Espaciado adecuado para legibilidad 