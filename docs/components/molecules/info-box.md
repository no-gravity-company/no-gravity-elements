# InfoBox

El componente `InfoBox` es una molécula que combina iconos y texto para mostrar información destacada o mensajes importantes.

## Instalación

```bash
yarn add @no-gravity-elements/info-box
```

## Importación

```javascript
import '@no-gravity-elements/info-box';
```

## Uso Básico

```html
<nge-info-box variant="info">
  Este es un mensaje informativo importante.
</nge-info-box>
```

## Variantes

### Informativo
```html
<nge-info-box variant="info">
  Información útil para el usuario.
</nge-info-box>
```

### Éxito
```html
<nge-info-box variant="success">
  La operación se completó correctamente.
</nge-info-box>
```

### Advertencia
```html
<nge-info-box variant="warning">
  Atención: acción requerida.
</nge-info-box>
```

### Error
```html
<nge-info-box variant="error">
  Ha ocurrido un error en el proceso.
</nge-info-box>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Tipo de mensaje |
| `title` | `string` | - | Título del mensaje (opcional) |
| `icon` | `string` | - | Nombre del icono personalizado |
| `dismissible` | `boolean` | `false` | Permite cerrar el mensaje |

## Eventos

| Evento | Descripción |
|--------|-------------|
| `close` | Se dispara cuando se cierra el mensaje |

## Ejemplos

### Con Título
```html
<nge-info-box 
  variant="success"
  title="¡Completado!"
>
  Tu perfil ha sido actualizado correctamente.
</nge-info-box>
```

### Dismissible
```html
<nge-info-box 
  variant="warning"
  dismissible
>
  Esta notificación se puede cerrar.
</nge-info-box>
```

### Con Icono Personalizado
```html
<nge-info-box 
  variant="info"
  icon="bell"
>
  Tienes una nueva notificación.
</nge-info-box>
```

## Personalización

### CSS Custom Properties
```css
:root {
  --nge-info-box-info-bg: #e3f2fd;
  --nge-info-box-success-bg: #e8f5e9;
  --nge-info-box-warning-bg: #fff3e0;
  --nge-info-box-error-bg: #ffebee;
  --nge-info-box-border-radius: 4px;
  --nge-info-box-padding: 16px;
}
```

## Mejores Prácticas

1. **Uso Apropiado de Variantes**
   ```html
   <!-- ✅ Bueno: Usar variante apropiada -->
   <nge-info-box variant="error">Error crítico de sistema</nge-info-box>
   
   <!-- ❌ Malo: Usar variante incorrecta -->
   <nge-info-box variant="success">Error en el proceso</nge-info-box>
   ```

2. **Mensajes Claros y Concisos**
   ```html
   <!-- ✅ Bueno: Mensaje claro -->
   <nge-info-box>Los cambios se guardarán automáticamente</nge-info-box>
   
   <!-- ❌ Malo: Mensaje confuso -->
   <nge-info-box>Sistema actualizado con nuevas funcionalidades 
   pendientes de revisión por el equipo</nge-info-box>
   ```

## Accesibilidad

- Roles ARIA apropiados según la variante
- Contraste de color adecuado
- Soporte para lectores de pantalla
- Interacción por teclado para mensajes dismissibles 