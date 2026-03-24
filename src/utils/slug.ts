/**
 * Преобразует строку (title, name) в URL-slug.
 * "DI300 - CHRONOGRAPH" → "di300-chronograph"
 * "SHARK 5 CRONOGRAFO" → "shark-5-cronografo"
 */
export function toSlug(value: string | undefined): string {
    if (value == null || value === '') return ''

    return value
        .toLowerCase()
        .trim()
        .replace(/\s*-\s*/g, '-')           // " - " или " -" → "-"
        .replace(/\s+/g, '-')              // пробелы → "-"
        .replace(/[^a-z0-9-]/g, '')        // только буквы, цифры, дефис
        .replace(/-+/g, '-')               // несколько дефисов подряд → один
        .replace(/^-|-$/g, '')             // убрать дефис с краёв
}