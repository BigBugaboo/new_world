
/**
 * @description pick type of key in type
 */
export type PickTypeOfKey<T, K extends keyof T> = T[K];