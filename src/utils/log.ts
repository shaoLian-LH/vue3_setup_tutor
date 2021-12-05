import moment from 'moment'

export default class Log {
  static withoutTimeFlag: Boolean
  static clear() {
    console.clear()
    return this
  }
  static withoutTime() {
    this.withoutTimeFlag = true
    return this
  }
  static out(content: string | object, ...args: any) {
    const prefix = `[Log${
      !this.withoutTimeFlag ? ' ' + moment().format('YYYY-MM-DD HH:mm:ss') : ''
    }]`
    let moreOutPut: {
      str: string
      obj: Object[]
    } = {
      str: '',
      obj: []
    }
    if (arguments.length > 0) {
      for (let i = 1; i < arguments.length; i++) {
        const item = arguments[i]
        if (typeof item === 'string') {
          moreOutPut.str += item + ' '
        } else {
          moreOutPut.obj.push(item)
        }
      }
    }
    const prefixColorSetting = 'color: green;font-size: 16px'
    const suffixColorSetting = 'color: black;font-size: 16px'
    console.log(
      `%c${prefix}%c - ${content}${moreOutPut.str}`,
      prefixColorSetting,
      suffixColorSetting,
      ...moreOutPut.obj
    )
  }
}
