module.exports = {
  printWidth: 80, // 换行字符串阈值
  tabWidth: 2, // 设置工具每一个水平缩进的空格数
  useTabs: false,
  semi: false, // 句末是否加分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 用单引号
  trailingComma: 'none', // 最后一个对象元素加逗号
  bracketSpacing: true, // 对象，数组加空格
  jsxBracketSameLine: true, // jsx > 是否另起一行
  arrowParens: 'always', // (x) => {} 是否要有小括号
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  // wrapAttributes: false, // 超出字符串阈值时，不自动将html的属性置为一行
  sortAttributes: true, // 自动将html的属性换行
  proseWrap: "always" // 
}