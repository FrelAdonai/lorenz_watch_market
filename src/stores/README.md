# 📁 stores/

Управление глобальным состоянием приложения (Pinia).

## Назначение

Stores используются для управления состоянием, которое должно быть доступно в нескольких компонентах.

## Установка Pinia

Если используете Pinia (рекомендуется для Vue 3):

```bash
npm install pinia
```

**Настройка в `main.ts`:**

```typescript
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
```

---

## Структура

### `user.ts`

**Store для пользователя**

```typescript
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { User } from "@/types";
import { userService } from "@services/userService";

export const useUserStore = defineStore("user", () => {
  // State
  const user = ref<User | null>(null);
  const isLoading = ref(false);

  // Getters
  const isAuthenticated = computed(() => user.value !== null);
  const userName = computed(() => user.value?.name ?? "Гость");

  // Actions
  async function login(email: string, password: string) {
    isLoading.value = true;
    try {
      const userData = await userService.login(email, password);
      user.value = userData;
    } finally {
      isLoading.value = false;
    }
  }

  function logout() {
    user.value = null;
  }

  return {
    // State
    user,
    isLoading,
    // Getters
    isAuthenticated,
    userName,
    // Actions
    login,
    logout,
  };
});
```

**Использование:**

```vue
<script setup>
import { useUserStore } from "@stores/user";

const userStore = useUserStore();

// Доступ к state
console.log(userStore.user);

// Использование getters
console.log(userStore.isAuthenticated);

// Вызов actions
userStore.login("email@example.com", "password");
</script>
```

---

### `cart.ts`

**Store для корзины**

```typescript
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product } from "@/types";

export const useCartStore = defineStore("cart", () => {
  const items = ref<Array<{ product: Product; quantity: number }>>([]);

  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);
  });

  function addItem(product: Product) {
    const existingItem = items.value.find(
      (item) => item.product.id === product.id,
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ product, quantity: 1 });
    }
  }

  function removeItem(productId: number) {
    items.value = items.value.filter((item) => item.product.id !== productId);
  }

  return {
    items,
    totalPrice,
    addItem,
    removeItem,
  };
});
```

---

## Правила

1. **Именование**: Используйте `use` префикс: `useUserStore`, `useCartStore`
2. **Один store = одна сущность**: `user.ts`, `cart.ts`, `products.ts`
3. **Composition API**: Используйте синтаксис Composition API для stores
4. **Типизация**: Всегда типизируйте state, getters и actions
5. **Не дублируйте данные**: Если данные уже в store, не храните их в компонентах

## Когда использовать stores?

- ✅ Глобальное состояние (пользователь, корзина, настройки)
- ✅ Данные, используемые в нескольких компонентах
- ✅ Кэширование данных из API

## Когда НЕ использовать stores?

- ❌ Локальное состояние компонента (используйте `ref` в компоненте)
- ❌ Простые вычисления (используйте `computed` в компоненте)
- ❌ Логика одного компонента (используйте composables)
