declare module 'svelte/runes' {
    export function state<T>(value: T): T;
    export function derived<T>(expression: T): T;
    export function effect(fn: () => void | (() => void)): void;
    export function props<T extends Record<string, any>>(): T;
}