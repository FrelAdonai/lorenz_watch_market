# 📁 components/

Переиспользуемые Vue компоненты.

## Структура

### 📁 `common/`
**Общие компоненты**

Компоненты, используемые по всему приложению:
- `Button.vue` - кнопка
- `Input.vue` - поле ввода
- `Modal.vue` - модальное окно
- `Card.vue` - карточка
- `Loader.vue` - индикатор загрузки
- `Avatar.vue` - аватар пользователя

**Использование:**
```vue
<script setup>
import Button from '@components/common/Button.vue'
</script>

<template>
  <Button>Нажми меня</Button>
</template>
```

---

### 📁 `layout/`
**Компоненты макета**

Компоненты для структуры страницы:
- `Header.vue` - шапка сайта
- `Footer.vue` - подвал сайта
- `Sidebar.vue` - боковая панель
- `Navigation.vue` - навигационное меню
- `Container.vue` - контейнер для контента

**Использование:**
```vue
<script setup>
import Header from '@components/layout/Header.vue'
import Footer from '@components/layout/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <!-- контент -->
  </main>
  <Footer />
</template>
```

---

### 📁 `[feature]/` (опционально)
**Компоненты для конкретных фич**

Если компонент используется только в рамках одной фичи, можно создать отдельную папку:
- `components/user/UserCard.vue`
- `components/product/ProductCard.vue`

---

## Правила именования

1. **Компоненты** - PascalCase: `UserProfile.vue`, `ProductCard.vue`
2. **Папки** - kebab-case или lowercase: `user-profile/`, `common/`
3. **Один компонент = один файл** - не создавайте несколько компонентов в одном файле

## Структура компонента

```vue
<script setup lang="ts">
// 1. Импорты типов
import type { User } from '@/types'

// 2. Импорты компонентов
import Button from '@components/common/Button.vue'

// 3. Импорты composables
import { useAuth } from '@composables/useAuth'

// 4. Props и Emits
interface Props {
  title: string
  user?: User
}

const props = defineProps<Props>()
const emit = defineEmits<{
  click: [id: number]
}>()

// 5. Логика компонента
const { user } = useAuth()
</script>

<template>
  <div class="component">
    <!-- разметка -->
  </div>
</template>

<style scoped lang="scss">
.component {
  // стили
}
</style>
```
