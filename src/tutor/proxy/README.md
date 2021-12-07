# Vue2 的实现（模拟代码）

```js
// 触发更新视图
const updateView = function () {
  console.log(`数据更新`)
}

// 重新定义数组的原型
const oldArrayProperty = Array.prototype
// 创建新对象，原型指向oldArrayProperty，再扩展新的方法不会影响原型
const arrPrototype = Object.create(oldArrayProperty)
;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(
  (methodName) => {
    arrPrototype[methodName] = function () {
      console.log('触发数组监听')
      updateView() // 触发视图更新
      oldArrayProperty[methodName].call(this, ...arguments)
    }
  }
)

// 重新定义属性，并监听
const defineReactive = (target, key, value) => {
  // 深度监听
  observer(value)
  // 核心API
  Object.defineProperty(target, key, {
    get: function () {
      return value
    },
    set: function (newValue) {
      if (newValue !== value) {
        // 深度监听
        observer(newValue)
        // value一直处在闭包当中，此时设置完再get也是最新值
        value = newValue
        updateView()
      }
    }
  })
}
window.defineReactive = defineReactive

// 监听对象属性
const observer = (target) => {
  // 只监听对象或数组
  if (typeof target !== 'object' || target === null) {
    return target
  }

  // 额外处理数组的监听
  if (Array.isArray(target)) {
    target.__proto__ = arrPrototype
  }

  // 重新定义各个属性
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}
window.observer = observer

const data = {
  name: '张三',
  age: 20,
  info: {
    address: '福州' // 需要深度监听
  },
  nums: [10, 20, 30]
}

observer(data)

data.name = '李四'
data.age = 21
data.x = '100'
delete data.name
data.info.address = '福建'
data.nums.push(40)
```

# Vue3 Proxy

```js
// 基本应用
const data = {
  name: '张三',
  age: 20,
  info: {
    address: '福州' // 需要深度监听
  },
  nums: [10, 20, 30]
}
const reactive = (target = {}) => {
  if (typeof target !== 'object' || target == null) {
    return target
  }
  const proxyConf = {
    get(target, key, receiver) {
      // receiver实际是proxyData，继承Prxoy的对象
      // 非原型的属性才进行处理
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        // 在这里加自己的处理
      }
      const result = Reflect.get(target, key, receiver)
      console.log('proxyConf get - ', target, key, receiver)
      return reactive(result)
    },
    set(target, key, val, receiver) {
      // 重复数据不处理
      const oldVal = target[key]
      if (val === oldVal) return true
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        // 在这里加自己的处理
        // 进入到这里是已经有的key
      } else {
        // 进入到这里是新增的key
      }
      const result = Reflect.set(target, key, val, receiver)
      console.log('proxyConf set - ', target, key, val, receiver)
      return result
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      return result
    }
  }
  const observed = new Proxy(target, proxyConf)
  return observed
}

window.reactive = reactive
const newData = reactive(data)

newData.name = '李四'
newData.age = 21
newData.x = '100'
delete newData.name
newData.info.address = '福建'
newData.nums.push(40)
```
