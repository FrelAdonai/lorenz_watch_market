# 📁 utils/

Утилиты и хелперы (чистые функции).

## Назначение

Утилиты - это чистые функции без побочных эффектов, которые можно использовать в любом месте приложения.

## Структура

### `formatters.ts`
**Форматирование данных**

```typescript
/**
 * Форматирует дату в формат DD.MM.YYYY
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date)
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()
  return `${day}.${month}.${year}`
}

/**
 * Форматирует число как валюту
 */
export function formatCurrency(amount: number, currency: string = 'RUB'): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency
  }).format(amount)
}

/**
 * Форматирует телефонный номер
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 11) {
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`
  }
  return phone
}
```

---

### `validators.ts`
**Валидация данных**

```typescript
/**
 * Проверяет валидность email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Проверяет валидность телефона
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}

/**
 * Проверяет минимальную длину строки
 */
export function minLength(value: string, min: number): boolean {
  return value.length >= min
}
```

---

### `constants.ts`
**Константы приложения**

```typescript
export const APP_NAME = 'My Vue App'
export const APP_VERSION = '1.0.0'

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  LOGIN: '/login'
} as const

export const API_TIMEOUT = 10000
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
```

---

### `helpers.ts`
**Вспомогательные функции**

```typescript
/**
 * Задержка выполнения
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Глубокое копирование объекта
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Генерация уникального ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Проверка, является ли значение пустым
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim().length === 0
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}
```

---

### `debounce.ts`
**Debounce и Throttle**

```typescript
/**
 * Debounce функция
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle функция
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}
```

---

## Правила

1. **Чистые функции**: Функции не должны иметь побочных эффектов
2. **Именование**: Используйте camelCase для функций
3. **Типизация**: Всегда типизируйте параметры и возвращаемые значения
4. **Документация**: Добавляйте JSDoc комментарии для сложных функций
5. **Тестируемость**: Функции должны быть легко тестируемыми

## Использование

```typescript
import { formatDate, formatCurrency } from '@utils/formatters'
import { isValidEmail } from '@utils/validators'
import { APP_NAME } from '@utils/constants'

// В компонентах
const formattedDate = formatDate(new Date())
const isValid = isValidEmail('user@example.com')
```

## Когда использовать utils?

- ✅ Форматирование данных (даты, валюты, телефоны)
- ✅ Валидация (email, телефон, пароль)
- ✅ Манипуляции с данными (клонирование, фильтрация)
- ✅ Константы приложения
- ✅ Математические операции

## Когда НЕ использовать utils?

- ❌ Логика с состоянием (используйте composables)
- ❌ API запросы (используйте services)
- ❌ Работа с DOM (используйте composables или директивы)
