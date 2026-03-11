# Структура проекта

## Описание папок

### 📁 `views/`
**Страницы приложения** - компоненты, связанные с роутингом.

Примеры:
- `HomeView.vue` - главная страница
- `AboutView.vue` - страница "О нас"
- `User/UserProfile.vue` - профиль пользователя

**Использование:**
```vue
<script setup>
import HomeView from '@/views/HomeView.vue'
</script>
```

---

### 📁 `components/`
**Переиспользуемые компоненты**

#### `components/common/`
Общие компоненты, используемые по всему приложению:
- `Button.vue`
- `Input.vue`
- `Modal.vue`
- `Card.vue`

#### `components/layout/`
Компоненты макета:
- `Header.vue`
- `Footer.vue`
- `Sidebar.vue`
- `Navigation.vue`

**Использование:**
```vue
<script setup>
import Button from '@/components/common/Button.vue'
import Header from '@/components/layout/Header.vue'
</script>
```

---

### 📁 `composables/`
**Переиспользуемая логика** (Composition API)

Примеры:
- `useAuth.ts` - логика аутентификации
- `useLocalStorage.ts` - работа с localStorage
- `useApi.ts` - API запросы

**Использование:**
```vue
<script setup>
import { useLocalStorage } from '@/composables/useLocalStorage'

const count = useLocalStorage('count', 0)
</script>
```

---

### 📁 `services/`
**API вызовы и бизнес-логика**

#### `services/api/`
- `client.ts` - конфигурация HTTP клиента
- `endpoints.ts` - URL endpoints

#### Другие сервисы:
- `userService.ts` - методы для работы с пользователями
- `productService.ts` - методы для работы с продуктами

**Использование:**
```typescript
import { get, post } from '@/services/api/client'
import { getUser } from '@/services/userService'
```

---

### 📁 `utils/`
**Утилиты и хелперы** (чистые функции)

Примеры:
- `formatters.ts` - форматирование данных
- `validators.ts` - валидация
- `constants.ts` - константы

**Использование:**
```typescript
import { formatDate, formatCurrency } from '@/utils/formatters'
import { APP_NAME } from '@/utils/constants'
```

---

### 📁 `types/`
**TypeScript типы и интерфейсы**

Примеры:
- `user.ts` - типы для пользователя
- `api.ts` - типы для API
- `index.ts` - общие типы

**Использование:**
```typescript
import type { User, ApiResponse } from '@/types'
```

---

### 📁 `stores/`
**State management** (Pinia/Vuex)

Примеры:
- `user.ts` - store пользователя
- `cart.ts` - store корзины

**Использование:**
```typescript
import { useUserStore } from '@/stores/user'
```

---

### 📁 `router/`
**Конфигурация роутера**

- `index.ts` - настройка роутов

**Использование:**
```typescript
import router from '@/router'
```

---

### 📁 `assets/`
**Ресурсы для обработки Vite**

#### `assets/images/`
Изображения, используемые в компонентах

#### `assets/icons/`
Иконки

#### `assets/styles/`
Стили:
- `variables.css` - CSS переменные
- `main.css` - основные стили

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

## Алиасы путей

Настроены следующие алиасы (в `vite.config.ts` и `tsconfig.app.json`):

- `@/` → `src/`
- `@components/` → `src/components/`
- `@views/` → `src/views/`
- `@assets/` → `src/assets/`
- `@composables/` → `src/composables/`
- `@utils/` → `src/utils/`
- `@services/` → `src/services/`
- `@types/` → `src/types/`
- `@stores/` → `src/stores/`

**Примеры использования:**
```typescript
// Вместо
import Button from '../../../components/common/Button.vue'

// Используйте
import Button from '@components/common/Button.vue'
```

---

## Рекомендации

1. **Компоненты** - храните в `components/`, разделяйте на `common/` и `layout/`
2. **Страницы** - храните в `views/`, связывайте с роутами
3. **Логика** - выносите в `composables/` для переиспользования
4. **API** - централизуйте в `services/`
5. **Стили** - используйте `scoped` в компонентах, глобальные в `assets/styles/`
6. **Типы** - определяйте в `types/` для переиспользования
