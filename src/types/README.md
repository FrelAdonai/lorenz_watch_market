# 📁 types/

TypeScript типы и интерфейсы.

## Назначение

Централизованное хранение всех TypeScript типов и интерфейсов для переиспользования по всему проекту.

## Структура

### `index.ts`
**Общие типы и реэкспорт**

```typescript
// Реэкспорт всех типов
export * from './user'
export * from './api'
export * from './common'

// Общие типы
export type ID = string | number

export interface BaseEntity {
  id: ID
  createdAt: string
  updatedAt: string
}
```

---

### `user.ts`
**Типы для пользователя**

```typescript
export interface User {
  id: number
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'user' | 'moderator'
}

export interface CreateUserDto {
  name: string
  email: string
  password: string
}

export interface UpdateUserDto {
  name?: string
  email?: string
  avatar?: string
}
```

---

### `api.ts`
**Типы для API**

```typescript
export interface ApiResponse<T> {
  data: T
  message?: string
  status: number
}

export interface ApiError {
  message: string
  code: string
  status: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}
```

---

### `product.ts`
**Типы для продукта**

```typescript
export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  inStock: boolean
}

export interface CreateProductDto {
  name: string
  description: string
  price: number
  image: string
  category: string
}
```

---

### `common.ts`
**Общие типы**

```typescript
export type Status = 'idle' | 'loading' | 'success' | 'error'

export interface SelectOption<T = string> {
  label: string
  value: T
  disabled?: boolean
}

export type Nullable<T> = T | null
export type Optional<T> = T | undefined

/**
 * Базовый интерфейс для карточек с общими полями
 * Используется для новостей, преимуществ, продуктов и других карточек
 */
export interface BaseCard {
  id: number | string
  img: string
  title: string
  text: string
}
```

---

### Работа с общими типами (DRY принцип)

**✅ ПРАВИЛЬНО: Использовать базовый тип и расширять его**

Если у разных сущностей (новости, преимущества) одинаковые поля, создайте базовый интерфейс:

```typescript
// common.ts
export interface BaseCard {
  id: number | string
  img: string
  title: string
  text: string
}

// news.ts
import type { BaseCard } from './common'

export interface NewsCard extends BaseCard {
  publishedAt: string
  author: string
  category: 'tech' | 'sports' | 'politics'
}

// advantages.ts
import type { BaseCard } from './common'

export interface AdvantageCard extends BaseCard {
  icon?: string
  order: number
}
```

**Использование:**
```typescript
import type { NewsCard, AdvantageCard } from '@/types'

const news: NewsCard = {
  id: 1,
  img: '/news/1.jpg',
  title: 'Заголовок новости',
  text: 'Текст новости',
  publishedAt: '2024-01-01',
  author: 'Иван Иванов',
  category: 'tech'
}

const advantage: AdvantageCard = {
  id: 1,
  img: '/advantages/1.jpg',
  title: 'Преимущество',
  text: 'Описание',
  icon: 'star',
  order: 1
}
```

**❌ НЕПРАВИЛЬНО: Дублировать одинаковые поля**

```typescript
// ❌ Плохо - дублирование кода
export interface NewsCard {
  id: number
  img: string
  title: string
  text: string
  publishedAt: string
}

export interface AdvantageCard {
  id: number
  img: string
  title: string
  text: string
  order: number
}
```

**Альтернативный подход: Generic типы**

Если нужна более гибкая структура:

```typescript
// common.ts
export interface BaseCard<T = Record<string, never>> {
  id: number | string
  img: string
  title: string
  text: string
  extra?: T
}

// Использование
export interface NewsCard extends BaseCard<{
  publishedAt: string
  author: string
}> {}

export interface AdvantageCard extends BaseCard<{
  icon?: string
  order: number
}> {}
```

**Преимущества подхода с базовым типом:**

1. ✅ **DRY принцип** - нет дублирования кода
2. ✅ **Легко изменять** - изменения в `BaseCard` применяются ко всем карточкам
3. ✅ **Типобезопасность** - TypeScript проверяет соответствие типов
4. ✅ **Переиспользование** - можно создать универсальные компоненты

---

## Правила

1. **Именование**: Используйте PascalCase для типов и интерфейсов
2. **Группировка**: Группируйте типы по сущностям (user.ts, product.ts)
3. **Реэкспорт**: Используйте `index.ts` для удобного импорта
4. **Префиксы**: Используйте префиксы для DTO: `CreateUserDto`, `UpdateUserDto`
5. **Документация**: Добавляйте JSDoc комментарии для сложных типов

## Использование

```typescript
// Импорт из index.ts
import type { User, ApiResponse } from '@/types'

// Импорт конкретного типа
import type { User } from '@/types/user'
import type { ApiResponse } from '@/types/api'
```

## Рекомендации

- ✅ Используйте `interface` для объектов, которые могут расширяться
- ✅ Используйте `type` для union типов, intersections, примитивов
- ✅ Избегайте `any` - используйте `unknown` или конкретные типы
- ✅ Используйте generic типы для переиспользования (`ApiResponse<T>`)
