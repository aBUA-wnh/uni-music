const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const formatDate = date =>{
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('/')
}

const formatDateToHour = date =>{
  const hour = date.getHours()
  const minute = date.getMinutes()
  return [hour, minute].map(formatNumber).join(':') + ':00'
}

const formatHour = options =>{
  const hour = options.hour
  const minute = options.minute
  return [hour, minute].map(formatNumber).join(':') + ':00'
}

const encryptPhone = phone =>{
  return phone.substr(0,3)+ '****' + phone.substr(7)
}

const urlReplace = (url,param) =>{
  return url.replace(/\{.*?\}/,param)
}

const dateAdd = (date,type,param)=>{
  if(type !== null && type !== undefined){
    if(type.upper() ===  'SECONDS'){
      let dateStamp = date.getTime()
      return new Date().setTime(dateStamp + param * 1000)
    }
  }

}

/*数组*/
const groupBy = (array,f)=>{
  let groups = {}
  /*数组遍历，所有满足f条件的元素被分组到统一个group中*/
  array.forEach(item=>{
    let group = JSON.stringify(f(item))
    /*分组为group的数组，没有的话初始化为[]*/
    groups[group] = groups[group] || []
    groups[group].push(item)
  })
  return Object.keys(groups).map(group =>{
    return groups[group];
  })
}

/** 计算日期函数，
 * ${date} 日期
 * ${diff} 日期差值
 * ${dateType} 计算日期类型
 **/
const dateHandle = (date,diff,dateType)=>{
  if(dateType.toUpperCase() === 'YEAR'){
    date.setFullYear(date.getFullYear() + diff)
  }
  if(dateType.toUpperCase() === 'MONTH' ){
    date.setMonth(date.getMonth() + diff)
  }
  if(dateType.toUpperCase() === 'DATE' ){
    date.setDate(date.getDate() + diff)
  }
  return date
}

const formatDateWithSeparator = (date,separator) =>{
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join(separator)
}

/**
* 判断是否为空
*/
const isEmpty = value => {
  return value === '' || value === undefined || value === null || (Array.isArray(value) && value.length === 0) || (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0)
}

/**
* json转url参数
*/
const json2Form = json => {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}

/**
* 产生任意长度随机字母数字组合
*/
function randomWord (num) {
  var str = "",
    range = num,
    pos = 0,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for (var i = 0; i < range; i++) {
    pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
}

/**
* 获取当前页带参数的url
*/
function getUrl() {
  // 获取加载的页面
  var pages = getCurrentPages()
  // 获取当前页面的对象
  var currentPage = pages[pages.length - 1]
  // 当前页面url
  var url = currentPage.route
  // 如果要获取url中所带的参数可以查看options
  var options = currentPage.options
  // 拼接url的参数
  var urlWithArgs = url + '?'
  for (var key in options) {
    var value = options[key]
    urlWithArgs += key + '=' + value + '&'
  }
  urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
  return '/' + urlWithArgs
}

/**
 * 时间戳转日期
 */
function formatTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

export default {
  formatTime,
  formatDate,
  formatHour,
  formatDateToHour,
  encryptPhone,
  urlReplace,
  groupBy,
  formatNumber,
  dateHandle,
  formatDateWithSeparator,
  isEmpty,
  json2Form,
  randomWord,
  getUrl,
  formatTime
}
