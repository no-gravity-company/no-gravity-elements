# Guía de Uso

Esta guía te ayudará a empezar a usar No Gravity Elements en tu proyecto.

## Uso Básico

### 1. Importar Componentes

```javascript
// Importar componentes individuales
import '@no-gravity-elements/button';
import '@no-gravity-elements/icon';
```

### 2. Usar en HTML

```html
<nge-button variant="primary">
  <nge-icon name="star"></nge-icon>
  Click me!
</nge-button>
```

## Uso con React

```jsx
import { NGEButton, NGEIcon } from '@no-gravity-elements/react-adapter';

function MyComponent() {
  return (
    <NGEButton variant="primary">
      <NGEIcon name="star" />
      Click me!
    </NGEButton>
  );
}
```

## Uso con Angular

```typescript
import { NGEButtonModule } from '@no-gravity-elements/angular-adapter';

@NgModule({
  imports: [NGEButtonModule],
})
export class AppModule {}
```

```html
<nge-button variant="primary">
  <nge-icon name="star"></nge-icon>
  Click me!
</nge-button>
```

## Personalización

### CSS Custom Properties

```css
:root {
  --nge-primary-color: #007bff;
  --nge-secondary-color: #6c757d;
  --nge-font-family: 'Arial', sans-serif;
}
```

### Temas

```javascript
import { setTheme } from '@no-gravity-elements/components';

setTheme({
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});
```

## Mejores Prácticas

1. **Importación Selectiva**
   ```javascript
   // ✅ Bueno: Importar solo lo necesario
   import '@no-gravity-elements/button';
   
   // ❌ Malo: Importar todo
   import '@no-gravity-elements/components';
   ```

2. **Manejo de Eventos**
   ```javascript
   // ✅ Bueno: Usar addEventListener
   const button = document.querySelector('nge-button');
   button.addEventListener('click', handleClick);
   
   // ❌ Malo: Usar onclick
   button.onclick = handleClick;
   ```

3. **Accesibilidad**
   ```html
   <!-- ✅ Bueno: Usar atributos ARIA -->
   <nge-button aria-label="Cerrar diálogo">
     <nge-icon name="close"></nge-icon>
   </nge-button>
   ```

## Depuración

Para habilitar el modo de desarrollo:

```javascript
import { enableDevMode } from '@no-gravity-elements/components';

enableDevMode();
```

## Siguiente Paso

Explora la [documentación de componentes](/components/) para ver todos los componentes disponibles y sus APIs. 