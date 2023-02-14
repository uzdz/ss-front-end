//.prettierrc.js

module.exports = {
    tabWidth: 4, // tab锁进
    printWidth: 300, //一行的字符数，如果超过会进行换行，默认为80
    proseWrap: "always", // 换行,always：超过printWidth就换行，never：不换行，preserve：按照原样处理
    singleQuote: false, //字符串是否使用单引号，默认为false，使用双引号
    arrowParens: "avoid", // allow paren-less arrow functions 箭头函数的参数使用圆括号
    semi: false, // 句尾是否加分号;
}
