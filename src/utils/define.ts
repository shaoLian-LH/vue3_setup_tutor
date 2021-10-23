/**
 * 为一个对象定义一个不可改变的键值
 * @param obj 目标对象
 * @param key 键值名称
 * @param value 固定值
 * @returns { boolean } 是否定义成功
 */
export const defineStaticProps = (obj: object, key: string, value: unknown) => {
  return Reflect.defineProperty(obj, key, {
    value,
    writable: false,
    configurable: false
  })
}
