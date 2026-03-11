# 📁 router/

Конфигурация Vue Router.

## Структура

### `index.ts`
Главный файл роутера с настройкой маршрутов.

**Пример:**
```typescript
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@views/home/HomeView.vue'
import AboutView from '@views/about/AboutView.vue'

const routes: RouteRecordRaw[] = [
  { 
    path: '/', 
    name: 'home',
    component: HomeView 
  },
  { 
    path: '/about', 
    name: 'about',
    component: AboutView 
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('@views/user/UserView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
```

---

### `guards.ts` (опционально)
Навигационные хуки (guards) для защиты маршрутов:
```typescript
import router from './index'
import { useAuth } from '@composables/useAuth'

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth()
  
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: 'login' })
  } else {
    next()
  }
})
```

---

## Правила

1. **Именование маршрутов**: Всегда указывайте `name` для маршрутов
2. **Lazy loading**: Используйте динамические импорты для больших компонентов
3. **Мета-данные**: Используйте `meta` для дополнительной информации (защита, заголовки)
4. **Типизация**: Используйте `RouteRecordRaw` для типизации маршрутов

## Использование в компонентах

```vue
<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Переход на другую страницу
router.push({ name: 'home' })

// Получение параметров
const userId = route.params.id
</script>
```
