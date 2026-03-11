# 📁 views/

Страницы приложения (компоненты, связанные с роутингом).

## Назначение

Views - это компоненты верхнего уровня, которые соответствуют маршрутам в роутере. Каждая страница приложения должна быть представлена здесь.

## Структура

### 📁 `home/`
**Главная страница**

- `HomeView.vue` - главная страница приложения

**Пример:**
```vue
<script setup lang="ts">
import { ref } from 'vue'
import Button from '@components/common/Button.vue'
import ProductCard from '@components/product/ProductCard.vue'

const products = ref([])
</script>

<template>
  <div class="home-view">
    <h1>Добро пожаловать!</h1>
    <div class="products">
      <ProductCard 
        v-for="product in products" 
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-view {
  padding: 2rem;
}
</style>
```

---

### 📁 `about/`
**Страница "О нас"**

- `AboutView.vue`

---

### 📁 `user/`
**Страницы пользователя**

- `UserProfile.vue` - профиль пользователя
- `UserSettings.vue` - настройки пользователя
- `UserList.vue` - список пользователей

---

### 📁 `product/`
**Страницы продуктов**

- `ProductList.vue` - список продуктов
- `ProductDetail.vue` - детальная страница продукта
- `ProductCreate.vue` - создание продукта

---

## Правила

1. **Именование**: Используйте PascalCase с суффиксом `View`: `HomeView.vue`, `UserProfileView.vue`
2. **Одна страница = один файл**: Не создавайте несколько views в одном файле
3. **Группировка**: Группируйте связанные страницы в папки (`user/`, `product/`)
4. **Маршрутизация**: Каждый view должен быть связан с маршрутом в `router/index.ts`
5. **Композиция**: Views должны состоять из переиспользуемых компонентов из `components/`

## Структура View компонента

```vue
<script setup lang="ts">
// 1. Импорты типов
import type { Product } from '@/types'

// 2. Импорты composables
import { useProducts } from '@composables/useProducts'
import { useRoute } from 'vue-router'

// 3. Импорты компонентов
import ProductCard from '@components/product/ProductCard.vue'
import Loader from '@components/common/Loader.vue'

// 4. Логика страницы
const route = useRoute()
const { products, isLoading, fetchProducts } = useProducts()

fetchProducts()
</script>

<template>
  <div class="view-container">
    <Loader v-if="isLoading" />
    <div v-else class="products-grid">
      <ProductCard 
        v-for="product in products" 
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.view-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
```

## Связь с роутером

```typescript
// router/index.ts
import HomeView from '@views/home/HomeView.vue'
import ProductListView from '@views/product/ProductList.vue'
import ProductDetailView from '@views/product/ProductDetail.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductListView },
  { path: '/products/:id', component: ProductDetailView }
]
```

## Рекомендации

- ✅ Используйте lazy loading для больших страниц
- ✅ Разделяйте логику на composables
- ✅ Используйте переиспользуемые компоненты
- ✅ Обрабатывайте состояния загрузки и ошибок
- ❌ Не дублируйте логику между views
