export interface IDebounceOptions {
  wait?: number
  leading?: boolean
  trailing?: boolean
}

export type ComputedGetter<T> = (ctx?: any) => T
