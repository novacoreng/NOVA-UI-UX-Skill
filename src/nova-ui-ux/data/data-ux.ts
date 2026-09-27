export interface DataUXPolicy { pagination: 'cursor' | 'offset' | 'none'; virtualizeAfter: number; preserveStaleData: boolean; optimistic: boolean; retry: boolean; debounceMs: number; }
export const defaultDataUXPolicy: DataUXPolicy = { pagination: 'cursor', virtualizeAfter: 100, preserveStaleData: true, optimistic: false, retry: true, debounceMs: 250 };

export interface DataState<T> { items: T[]; loading: boolean; refreshing: boolean; loadingMore: boolean; hasMore: boolean; cursor?: string; error?: string; stale: boolean; }

export function nextCursor<T>(state: DataState<T>): string | undefined { return state.hasMore ? state.cursor : undefined; }
