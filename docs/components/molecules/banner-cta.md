# Banner CTA

El componente `BannerCta` es una molécula diseñada para mostrar llamadas a la acción prominentes con contenido rico.

## Instalación

```bash
yarn add @no-gravity-elements/banner-cta
```

## Importación

```javascript
import '@no-gravity-elements/banner-cta';
```

## Uso Básico

```html
<nge-banner-cta
  title="¡Oferta Especial!"
  description="Aprovecha nuestras ofertas exclusivas"
  buttonText="Ver Ofertas"
>
</nge-banner-cta>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | - | Título principal del banner |
| `description` | `string` | - | Texto descriptivo |
| `buttonText` | `string` | - | Texto del botón CTA |
| `image` | `string` | - | URL de la imagen de fondo |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Estilo visual del banner |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del banner |
| `alignment` | `'left' \| 'center' \| 'right'` | `'left'` | Alineación del contenido |

## Eventos

| Evento | Descripción |
|--------|-------------|
| `click` | Se dispara cuando se hace click en el botón CTA |

## Ejemplos

### Banner con Imagen
```html
<nge-banner-cta
  title="Descubre Nuevos Destinos"
  description="Explora nuestras nuevas rutas de viaje"
  buttonText="Reservar Ahora"
  image="/images/travel-banner.jpg"
  variant="primary"
>
</nge-banner-cta>
```

### Banner Centrado
```html
<nge-banner-cta
  title="Newsletter"
  description="Suscríbete para recibir las últimas novedades"
  buttonText="Suscribirse"
  alignment="center"
  size="small"
>
</nge-banner-cta>
```

### Banner Secundario
```html
<nge-banner-cta
  title="Soporte Premium"
  description="Obtén ayuda personalizada 24/7"
  buttonText="Contactar"
  variant="secondary"
  size="large"
>
</nge-banner-cta>
```

## Personalización

### CSS Custom Properties
```css
:root {
  --nge-banner-cta-primary-bg: #1976d2;
  --nge-banner-cta-secondary-bg: #f5f5f5;
  --nge-banner-cta-padding: 24px;
  --nge-banner-cta-border-radius: 8px;
  --nge-banner-cta-title-size: 2rem;
  --nge-banner-cta-description-size: 1.1rem;
}
```

## Mejores Prácticas

1. **Contenido Claro y Directo**
   ```html
   <!-- ✅ Bueno: Mensaje claro y acción específica -->
   <nge-banner-cta
     title="50% de Descuento"
     description="En todos los cursos online"
     buttonText="Comprar Ahora"
   >
   </nge-banner-cta>
   
   <!-- ❌ Malo: Mensaje vago y acción poco clara -->
   <nge-banner-cta
     title="Ofertas"
     description="Tenemos cosas"
     buttonText="Click Aquí"
   >
   </nge-banner-cta>
   ```

2. **Uso de Imágenes**
   ```html
   <!-- ✅ Bueno: Imagen relevante y optimizada -->
   <nge-banner-cta
     image="/images/optimized-banner.webp"
     alt="Producto en oferta"
   >
   </nge-banner-cta>
   ```

## Accesibilidad

- Contraste adecuado entre texto y fondo
- Textos alternativos para imágenes
- Estructura semántica clara
- Interacción por teclado
- Roles ARIA apropiados

## Rendimiento

- Imágenes optimizadas y con lazy loading
- Transiciones suaves
- Manejo eficiente de eventos
- Carga condicional de recursos 