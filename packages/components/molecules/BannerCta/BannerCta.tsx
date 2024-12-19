import { h, FunctionComponent, Fragment } from 'preact';
import './BannerCta.modules.scss';

/**
 * <nge-banner-cta>
 *
 * Un componente web para una sección personalizable de llamada a la acción.
 *
 * @element nge-banner-cta
 *
 * @slot title - Espacio para el título de la llamada a la acción.
 * @slot message - Espacio para el mensaje de la llamada a la acción.
 * @slot button - Espacio para el botón u otras acciones.
 *
 * @cssproperty --nge-cta-banner-padding - Relleno del contenedor (por defecto: 80px).
 * @cssproperty --nge-cta-banner-border-radius - Radio del borde del banner (por defecto: 10px).
 * @cssproperty --nge-cta-banner-background-image - Imagen de fondo y gradiente.
 * @cssproperty --nge-cta-banner-gap - Espacio entre elementos (por defecto: 16px).
 * @cssproperty --nge-cta-banner-text-color - Color del texto (por defecto: #ffffff).
 * @cssproperty --nge-cta-banner-title-font-weight - Peso de la fuente del título (por defecto: 600).
 * @cssproperty --nge-banner-button-margin-top - Margen superior del botón (por defecto: 16px).
 *
 * @example
 * <nge-banner-cta>
 *   <h5 slot="title">Tu Título Personalizado</h5>
 *   <p slot="message">Tu mensaje personalizado de llamada a la acción.</p>
 *   <nge-button slot="button" value="Haz Clic"></nge-button>
 * </nge-banner-cta>
 */
const BannerCta: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="bg-cta">
        <div className="main-call">
          <h5 id="cta-title">
            <slot name="title">Default Title</slot>
          </h5>
          <p>
            <slot name="message">Default call-to-action message.</slot>
          </p>
        </div>
        <slot name="button" />
      </div>
    </Fragment>
  );
};

export default BannerCta;
