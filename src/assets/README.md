# 📁 assets/

Эта папка содержит статические ресурсы, которые обрабатываются Vite во время сборки.

## Структура

### 📁 `fonts/`
**Шрифты проекта**

Здесь хранятся файлы шрифтов (`.ttf`, `.woff`, `.woff2`, `.otf`).

**Примеры:**
- `OpenSans-Regular.ttf`
- `OpenSans-Bold.ttf`
- `OpenSans-Light.ttf`

**Использование:**
```scss
// В assets/styles/common/typography.scss
@font-face {
  font-family: 'OpenSans';
  src: url('@assets/fonts/OpenSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
```

---

### 📁 `styles/`
**Глобальные стили проекта**

#### `styles/common/`
Общие стили и утилиты:
- `variables.scss` - CSS переменные (цвета, размеры, отступы)
- `mixins.scss` - SCSS миксины для переиспользования
- `normalize.scss` - нормализация стилей браузера
- `typography.scss` - стили типографики
- `spacing.scss` - утилиты для отступов
- `common-selector.scss` - общие селекторы

#### `styles/layout/`
Стили для макетов:
- `flex.scss` - утилиты для Flexbox
- `grid.scss` - утилиты для CSS Grid

#### `styles/ui_common/`
Общие UI компоненты:
- `icons.scss` - стили для иконок

#### `styles/main.scss`
Главный файл стилей, который импортирует все остальные.

**Использование:**
```typescript
// В main.ts
import '@/assets/styles/main.scss'
```

---

### 📁 `images/` (рекомендуется создать)
**Изображения проекта**

Здесь должны храниться изображения, используемые в компонентах.

**Использование:**
```vue
<script setup>
import logo from '@/assets/images/logo.png'
</script>

<template>
  <img :src="logo" alt="Logo" />
</template>
```

---

### 📁 `icons/` (рекомендуется создать)
**Иконки проекта**

SVG иконки, которые можно импортировать как компоненты или использовать как изображения.
