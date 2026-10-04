# ChaletAPP — Guía de instalación completa

## Archivos que tenés que subir (5 en total)

| Archivo | Qué es |
|---|---|
| `index.html` | La app en sí |
| `manifest.json` | Le dice al celular cómo instalarla |
| `sw.js` | Permite que funcione sin internet |
| `icon-192.png` | Ícono para Android |
| `icon-512.png` | Ícono para iPhone |

---

## PASO 1 — Crear cuenta en GitHub (si no tenés)

1. Entrá a **github.com**
2. Click en **Sign up** (arriba a la derecha)
3. Poné tu email, creá una contraseña y elegí un nombre de usuario
   - El nombre de usuario va a aparecer en la URL de la app, así que algo como `pagli91` está perfecto
4. Verificá el email que te mandan

---

## PASO 2 — Crear el repositorio

1. Una vez logueado, click en el **+** (arriba a la derecha) → **New repository**
2. En **Repository name** escribí exactamente: `ChaletAPP`
   ⚠️ Las mayúsculas importan — tiene que ser exactamente así
3. Dejá marcado **Public** (tiene que ser público para que GitHub Pages funcione gratis)
4. NO toques nada más
5. Click en **Create repository** (botón verde)

---

## PASO 3 — Subir los archivos

Una vez creado el repositorio, vas a ver una pantalla con texto. Buscá el link que dice **"uploading an existing file"** y hacé click ahí.

1. Se abre una pantalla con una zona grande para arrastrar archivos
2. Arrastrá los 5 archivos de la carpeta que te di:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Esperá que aparezcan los 5 en la lista
4. Abajo de todo hay un botón verde que dice **Commit changes** — click ahí
5. Listo, los archivos están subidos

---

## PASO 4 — Activar GitHub Pages (para que tenga URL pública)

1. En el repositorio, click en **Settings** (arriba, hay una pestaña con un engranaje)
2. En el menú izquierdo, buscá y click en **Pages**
3. Donde dice **Branch**, desplegá el selector y elegí **main**
4. Click en **Save**
5. GitHub te muestra un cartel celeste que dice algo como:
   *"Your site is being published at https://TU-USUARIO.github.io/ChaletAPP/"*
6. Esperá 1-2 minutos y abrí esa URL en el navegador — ya debería funcionar

---

## PASO 5 — Instalarla en los celulares

### iPhone (vos o Fer)
1. Abrís Safari (tiene que ser Safari, no Chrome ni otro)
2. Entrás a la URL: `https://TU-USUARIO.github.io/ChaletAPP/`
3. Tocás el botón de **compartir** (el cuadradito con la flechita hacia arriba, abajo de la pantalla)
4. En el menú que aparece, bajás y tocás **"Agregar a pantalla de inicio"**
5. Ponés el nombre "ChaletAPP" y tocás **Agregar**
6. Ya aparece el ícono de la casita en la pantalla del celular

### Android (el otro celular)
1. Abrís **Chrome**
2. Entrás a la misma URL
3. Tocás el menú de los tres puntitos (⋮) arriba a la derecha
4. Tocás **"Agregar a pantalla principal"** o **"Instalar app"**
5. Confirmás y listo

---

## PASO 6 — Configurar Firebase (para que sincronice entre los dos celulares)

La app ya tiene mi Firebase de prueba configurado, pero es el mismo que usa la GuapisAPP. Si querés uno propio para ChaletAPP (recomendado), hacé esto:

1. Entrá a **console.firebase.google.com** con tu cuenta de Google
2. Click en **Crear un proyecto**
3. Nombre: `ChaletAPP` → Siguiente → Siguiente → Crear proyecto
4. Una vez creado, click en el ícono `</>` (Web) para agregar una app web
5. Poné cualquier nombre, click en **Registrar app**
6. Te aparece un bloque de código con `firebaseConfig = { ... }` — copiá todos esos datos
7. Abrí el `index.html`, buscá la sección `// Firebase` y reemplazá el `firebaseConfig` con el tuyo
8. En Firebase, en el menú izquierdo click en **Realtime Database** → **Crear database** → elegí **modo de prueba** → Listo
9. Volvé a subir el `index.html` modificado a GitHub (arrastralo de nuevo al repositorio, igual que en el Paso 3)

---

## Cómo actualizar la app en el futuro

Si te mando una versión nueva del `index.html`:

1. Entrás a **github.com/TU-USUARIO/ChaletAPP**
2. Click en el archivo `index.html`
3. Click en el lápiz ✏️ (arriba a la derecha del contenido)
4. Borrás todo (Ctrl+A) y pegás el contenido nuevo
5. Click en **Commit changes** (botón verde)
6. En 1-2 minutos la app se actualiza sola en los dos celulares

---

## Preguntas frecuentes

**¿Los datos se pierden si actualizo?**
No. Los datos viven en Firebase, no en el archivo `index.html`. Podés actualizar la app todas las veces que quieras sin perder nada.

**¿Funciona sin internet?**
La app carga sin internet (gracias al service worker), pero para sincronizar los datos entre celulares necesita conexión. Las cotizaciones del dólar también requieren internet.

**¿Qué pasa si los dos cargamos un gasto al mismo tiempo?**
Firebase maneja eso automáticamente — los dos se guardan, ninguno se pisa.

**¿Hay que pagar algo?**
No. GitHub Pages es gratis para repositorios públicos. Firebase tiene un plan gratuito generoso (más de 100.000 operaciones por día) — para gastos de obra está muy holgado.

