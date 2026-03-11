# 📁 data/

Статические данные и моки для разработки.

## Назначение

Эта папка содержит:
- JSON файлы с тестовыми данными
- Моки для разработки
- Конфигурационные данные

## Примеры

### `db.json`
Файл для json-server или других инструментов разработки:
```json
{
  "users": [
    { "id": 1, "name": "Иван", "email": "ivan@example.com" },
    { "id": 2, "name": "Мария", "email": "maria@example.com" }
  ],
  "products": [
    { "id": 1, "name": "Товар 1", "price": 1000 }
  ]
}
```

**Использование с json-server:**
```bash
npx json-server --watch src/data/db.json --port 3000
```

---

### `mockData.ts` (опционально)
TypeScript файлы с моками для тестирования:
```typescript
import type { User } from '@/types'

export const mockUsers: User[] = [
  { id: 1, name: 'Иван', email: 'ivan@example.com' },
  { id: 2, name: 'Мария', email: 'maria@example.com' }
]
```

---

## Правила

1. **Только для разработки**: Эти данные не должны попадать в production сборку
2. **Типизация**: Используйте TypeScript типы из `@types/` для данных
3. **Организация**: Группируйте данные по сущностям (users.json, products.json)

## Альтернативы

Для production используйте:
- `services/` - для API запросов
- `stores/` - для управления состоянием
- Переменные окружения (`.env`) - для конфигурации
