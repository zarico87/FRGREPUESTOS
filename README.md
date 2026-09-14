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
- WhatsApp: +54 9 351 736837

Si el número comercial cambia, actualizarlo en `src/components/Footer.jsx`, `src/pages/Home.jsx` y `src/pages/Contact.jsx`.

## Formulario

El formulario incluye validaciones en frontend y muestra un alert con el beneficio del 15% OFF. Actualmente no envía datos a un servidor/API.

Para producción, conectar `handleSubmit` de `Contact.jsx` con un backend, Formspree, EmailJS o un endpoint propio.

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
