# 📁 src/

Корневая папка исходного кода приложения.

## Структура проекта

```
src/
├── assets/          # Статические ресурсы (шрифты, стили, изображения)
├── components/      # Переиспользуемые Vue компоненты
├── composables/     # Переиспользуемая логика (Composition API)
├── data/           # Статические данные и моки для разработки
├── router/         # Конфигурация Vue Router
├── services/       # API вызовы и бизнес-логика
├── stores/         # Управление глобальным состоянием (Pinia)
├── types/          # TypeScript типы и интерфейсы
├── utils/          # Утилиты и хелперы (чистые функции)
├── views/          # Страницы приложения (компоненты для роутинга)
├── App.vue         # Корневой компонент приложения
└── main.ts         # Точка входа приложения
```

## Основные файлы

### `main.ts`
Точка входа приложения. Здесь происходит инициализация Vue приложения, подключение роутера, stores и глобальных стилей.

```typescript
import { createApp } from 'vue'
import '@/assets/styles/main.scss'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

### `App.vue`
Корневой компонент приложения. Содержит основную структуру макета (Header, Footer, router-view).

## Алиасы путей

Все пути настроены в `vite.config.ts` и `tsconfig.app.json`:

- `@/` → `src/`
- `@components/` → `src/components/`
- `@views/` → `src/views/`
- `@assets/` → `src/assets/`
- `@composables/` → `src/composables/`
- `@utils/` → `src/utils/`
- `@services/` → `src/services/`
- `@types/` → `src/types/`
- `@stores/` → `src/stores/`

**Пример использования:**
```typescript
// Вместо
import Button from '../../../components/common/Button.vue'

// Используйте
import Button from '@components/common/Button.vue'
```

## Рекомендации по организации

1. **Компоненты** → `components/` - переиспользуемые UI компоненты
2. **Страницы** → `views/` - компоненты для маршрутов
3. **Логика** → `composables/` - переиспользуемая логика с состоянием
4. **API** → `services/` - работа с внешними API
5. **Утилиты** → `utils/` - чистые функции без состояния
6. **Типы** → `types/` - TypeScript типы и интерфейсы
7. **Состояние** → `stores/` - глобальное управление состоянием
8. **Стили** → `assets/styles/` - глобальные стили
9. **Ресурсы** → `assets/` - изображения, шрифты, иконки

## Дополнительная информация

Подробное описание каждой папки находится в соответствующих README.md файлах:
- [assets/README.md](./assets/README.md)
- [components/README.md](./components/README.md)
- [composables/README.md](./composables/README.md)
- [data/README.md](./data/README.md)
- [router/README.md](./router/README.md)
- [services/README.md](./services/README.md)
- [stores/README.md](./stores/README.md)
- [types/README.md](./types/README.md)
- [utils/README.md](./utils/README.md)
- [views/README.md](./views/README.md)
