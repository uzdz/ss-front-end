module.exports = {
  root: true, // 当前配置为根配置，将不再从上级文件夹查找配置
  // 指定一个解析器， 默认是Espree， 需要安装babel-eslint包
  parser: "espree",
  // 使用的检查规则
  extends: ["plugin:prettier/recommended"],
  // 指定你想要支持的 JavaScript 语言选项
  env: {
    // 浏览器环境中的全局变量
    browser: true,
    //  Node.js 全局变量和 Node.js 作用域。
    node: true,
    // 启用除了 modules 以外的所有 ECMAScript 6 特性
    es6: true,
  },
  parserOptions: {
    sourceType: "module", // 指定来源的类型，有两种script或module
    ecmaVersion: 6, //指定ECMAScript支持的版本，6为ES6
  },
  // 自定义规则处，可以取消一个规则，也可以添加一个规则，key是具体规则，value是该规则的开关，值：
  // "off" 或 0：关闭规则，
  // "warn" 或 1：开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2：开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    "use-isnan": 2, //禁止比较时使用NaN，只能用isNaN()
    "prefer-const": 2, // 使用let关键字声明的变量，但在初始分配后从未重新分配变量，应改为const声明
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off", // 只有开发环境可以使用console
    "prettier/prettier": "error",
  },
}
