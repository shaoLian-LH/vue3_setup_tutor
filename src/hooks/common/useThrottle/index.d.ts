export interface IThrottleOptions {
  wait?: number
  leading?: boolean
  trailing?: boolean
}

export declare type ComputedGetter<T> = (ctx?: any) => T
