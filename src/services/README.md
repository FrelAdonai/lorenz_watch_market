# 📁 services/

API вызовы и бизнес-логика.

## Назначение

Сервисы инкапсулируют логику работы с внешними API и бизнес-логику приложения.

## Структура

### 📁 `api/`
**Конфигурация API клиента**

- `client.ts` - настройка HTTP клиента (axios, fetch)
- `endpoints.ts` - константы с URL endpoints
- `interceptors.ts` - перехватчики запросов/ответов

**Пример `api/client.ts`:**
```typescript
import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Перехватчик для добавления токена
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default client
```

**Пример `api/endpoints.ts`:**
```typescript
export const API_ENDPOINTS = {
  USERS: '/users',
  USER_BY_ID: (id: number) => `/users/${id}`,
  PRODUCTS: '/products',
  LOGIN: '/auth/login'
} as const
```

---

### `userService.ts`
**Сервис для работы с пользователями**

```typescript
import client from './api/client'
import { API_ENDPOINTS } from './api/endpoints'
import type { User, CreateUserDto } from '@/types'

export const userService = {
  async getAll(): Promise<User[]> {
    const { data } = await client.get(API_ENDPOINTS.USERS)
    return data
  },

  async getById(id: number): Promise<User> {
    const { data } = await client.get(API_ENDPOINTS.USER_BY_ID(id))
    return data
  },

  async create(user: CreateUserDto): Promise<User> {
    const { data } = await client.post(API_ENDPOINTS.USERS, user)
    return data
  },

  async update(id: number, user: Partial<User>): Promise<User> {
    const { data } = await client.put(API_ENDPOINTS.USER_BY_ID(id), user)
    return data
  },

  async delete(id: number): Promise<void> {
    await client.delete(API_ENDPOINTS.USER_BY_ID(id))
  }
}
```

**Использование:**
```typescript
import { userService } from '@services/userService'

const users = await userService.getAll()
```

---

### `productService.ts`
**Сервис для работы с продуктами**

Аналогично `userService.ts`, но для продуктов.

---

## Правила

1. **Один сервис = одна сущность**: `userService.ts`, `productService.ts`
2. **Типизация**: Всегда используйте TypeScript типы из `@types/`
3. **Обработка ошибок**: Обрабатывайте ошибки API запросов
4. **Не смешивайте с компонентами**: Сервисы не должны содержать логику компонентов
5. **Чистые функции**: Сервисы должны быть чистыми функциями без побочных эффектов (кроме API вызовов)

## Когда использовать services?

- ✅ API запросы к бэкенду
- ✅ Бизнес-логика, не связанная с UI
- ✅ Трансформация данных перед отправкой/после получения

## Когда НЕ использовать services?

- ❌ Логика компонентов (используйте composables)
- ❌ Управление состоянием (используйте stores)
- ❌ Простые утилиты (используйте utils)
