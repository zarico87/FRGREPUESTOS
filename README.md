# FRGREPUESTOS — React + Tailwind + CSS Modules

Sitio web responsive para FRGREPUESTOS.

## Tecnologías
- React 18
- Vite
- React Router DOM
- React Icons
- Tailwind CSS
- CSS Modules
- SEO básico y metadatos
- Tema claro / oscuro con localStorage

## Instalación

```bash
npm install
npm run dev
```

Para producción:

```bash
npm run build
npm run preview
```

## Imágenes

Las imágenes se cargan desde `public/img/`. Ver `public/img/README.txt` para los nombres sugeridos.

## Redes configuradas
- Instagram: @frgrepuestos
- Facebook: FRGREPUESTOS
- WhatsApp: +54 9 351 7368376

Si el número comercial cambia, actualizarlo en `src/components/Footer.jsx`, `src/pages/Home.jsx` y `src/pages/Contact.jsx`.

## Formulario

El formulario de contacto está conectado a **Formspree** (`https://formspree.io/f/xyezgwpb`) utilizando `@formspree/react`. Incluye validación de campos, estado de envío (loading), manejo de errores y tarjeta de confirmación con el beneficio del 15% OFF en mano de obra.

## SEO

El proyecto incluye:
- title dinámico por ruta
- meta description
- keywords
- Open Graph básico
- idioma `es`
- favicon
- estructura semántica
- rutas amigables

Para un posicionamiento SEO más completo se recomienda sumar `sitemap.xml`, `robots.txt`, datos estructurados `LocalBusiness` y Search Console al publicar el sitio.
