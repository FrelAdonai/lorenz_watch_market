# 📁 composables/

Переиспользуемая логика на основе Composition API.

## Назначение

Composables - это функции, которые инкапсулируют логику с состоянием для переиспользования между компонентами.

## Структура

Все composables должны начинаться с префикса `use` и быть в формате camelCase:
- `useAuth.ts` - логика аутентификации
- `useLocalStorage.ts` - работа с localStorage
- `useApi.ts` - API запросы
- `useModal.ts` - управление модальными окнами
- `useDebounce.ts` - debounce функция
- `usePagination.ts` - логика пагинации

## Примеры

### `useLocalStorage.ts`
```typescript
import { ref, watch } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const storedValue = localStorage.getItem(key)
  const value = ref<T>(
    storedValue ? JSON.parse(storedValue) : defaultValue
  )

  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })

  return value
}
```

**Использование:**
```vue
<script setup>
import { useLocalStorage } from '@composables/useLocalStorage'

const count = useLocalStorage('count', 0)
</script>
```

---

### `useAuth.ts`
```typescript
import { ref, computed } from 'vue'
import type { User } from '@/types'

const user = ref<User | null>(null)
const isAuthenticated = computed(() => user.value !== null)

export function useAuth() {
  const login = async (email: string, password: string) => {
    // логика входа
  }

  const logout = () => {
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
}
```

---

## Правила

1. **Именование**: Всегда начинайте с `use` (useAuth, useLocalStorage)
2. **Возвращайте объект**: Возвращайте объект с нужными значениями и функциями
3. **Типизация**: Используйте TypeScript для типизации параметров и возвращаемых значений
4. **Одна ответственность**: Один composable = одна задача
5. **Реактивность**: Используйте `ref`, `reactive`, `computed` для реактивных данных

## Когда использовать composables?

- ✅ Логика используется в нескольких компонентах
- ✅ Нужно инкапсулировать сложную логику
- ✅ Работа с внешними API или сервисами
- ✅ Управление состоянием компонента

## Когда НЕ использовать composables?

- ❌ Простая логика, используемая только в одном компоненте
- ❌ Чистые функции без состояния (используйте `utils/`)
