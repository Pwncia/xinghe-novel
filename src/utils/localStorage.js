import Storage from 'web-storage-cache'

const localStorage = new Storage()

//localStorage 缓存
export function setStorageItem(key, value) {
    return localStorage.set(key, value)
}

//获取 localSTorage 
export function getStorageItem(key) {
    return localStorage.get(key)
}
//删除缓存元素
export function removeStorageItem(key) {
    return localStorage.delete(key)
}
//清空缓存 
export function clearStorageItem() {
    return localStorage.clear()
}

//缓存搜索记录
export function setSearchHistory(val) {
    let obj = getStorageItem('search-history')
    if (!obj) {
        obj = []
    } else {
        let index = obj.indexOf(val)
        if (index !== -1) {
            return false
        }
    }
    obj.push(val)
    return setStorageItem('search-history', obj)
}
//获取搜索记录
export function getSearchHistory() {
    return getStorageItem('search-history')
}