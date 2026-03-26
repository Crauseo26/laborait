# Context Memory & Project State

Este documento sirve como la memoria persistente del proyecto. El agente co-desarrollador (Antigravity) utilizará este documento en cada sesión para reanudar el contexto exacto donde se dejó.

## Últimas 3 Tareas Finalizadas
*(El flujo de trabajo `/update-context` se encarga de rotar estas tareas)*

1. **Logo SVG Transicional y Glassmorphism:** Se implementó un SVG inline dinámico para cambiar de Logotipo a Isotipo en el evento de scroll. Además se agregó el filtro de glassmorphism `bg-white/70 backdrop-blur-md` en el Header. Las imágenes base de unplash.com ahora están registradas en `next.config.ts`.
2. **Implementación de S6 (Autoridad):** Se creó el componente `AuthoritySection.tsx` dándole un diseño cálido (bg-white) y asimétrico, posicionando a Jorge como ex-chofer. Se generaron imágenes con IA como placeholders y se inyectó el componente a `page.tsx`.
3. **Implementación de S5 (Objeciones):** Se reutilizó el componente `Accordion.tsx` nativo con CSS para desplegar las 5 objeciones del B1, reemplazando el FAQ genérico. Esto logró un impacto interactivo sin JS pesado adicional. Escapes de JSX fueron pre-validados.

## Lecciones Aprendidas (Máx 20 ítems)
*(Instrucciones, errores, decisiones de negocio críticas y patrones arquitectónicos a no olvidar. Mantener plano y sin anidar)*

1. **SVG React Hydration:** Al pegar código raw SVG desde herramientas de diseño, es OBLIGATORIO convertir los atributos con guiones (`fill-opacity`, `stop-color`, `mask-type`) a camelCase para evitar errores de React (Server Components). De igual forma, el prop `style` recibe un objeto de estilos estructurados, no un mero string de raw HTML.
2. **Performance Bundle (<100kb):** Sustituir librerías de iconos como `lucide-react` por código `SVG inline` nativo para no sobrecargar el cliente y mantener la puntuación de Lighthouse/SEO al máximo.
