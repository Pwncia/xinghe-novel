export function updatedTime(time) {
    let times = new Date(time)
    let nowTime = Date.now()
    times = times.getTime()
    let sec = (nowTime - times) / 1000
    let minute = Math.floor(sec / 60)
    let hours = Math.floor(sec / 3600)
    let days = Math.floor(sec / (3600 * 24))
    return days > 0 ? days + '天前' : (hours > 0 ? hours + '小时前' : (minute > 0 ? minute + '分钟前' : '刚刚'))
}