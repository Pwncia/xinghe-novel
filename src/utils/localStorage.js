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

//保存想读书本id
export function setWantReadList(bookId) {
    let readList = getStorageItem('want-read-list')
    if (!readList) {
        readList = []
    } else {
        let index = readList.indexOf(bookId)
        if (index !== -1) {
            return false
        }
    }
    readList.push(bookId)
    return setStorageItem('want-read-list', readList)
}

//获取想读书本
export function getWantReadList() {
    return getStorageItem('want-read-list')
}

//移除想读书本
export function deleteWantRead(bookId) {
    let readList = getStorageItem('want-read-list')
    let newArr = readList.filter(item => item !== bookId)
    return setStorageItem('want-read-list', newArr)
}

//保存当前书籍阅读章节记录
export function setChapterLink(bookId, currentChapter) {
    let chapterLink = getStorageItem('chapter-link')
    if (!chapterLink) {
        chapterLink = {}
    }
    chapterLink[bookId] = currentChapter
    return setStorageItem('chapter-link', chapterLink)
}

//获取当前书籍阅读记录
export function getChapterLink() {
    return getStorageItem('chapter-link')
}
//保存阅读器相关设置
export function saveReaderSetting(key, value) {
    let readerSetting = getStorageItem('reader-setting')
    if (!readerSetting) {
        readerSetting = {}
    }
    readerSetting[key] = value
    return setStorageItem('reader-setting', readerSetting)
}

//获取阅读器相关设置
export function getReaderSetting() {
    return getStorageItem('reader-setting')
}

//保存书架列表
export function setBookShelfList(book) {
    let bookShelfList = getStorageItem('bookshelf')
    if (!bookShelfList) {
        bookShelfList = []
    }
    bookShelfList.push(book)
    return setStorageItem('bookshelf', bookShelfList)
}

//获取书架列表 
export function getBookShelfList() {
    let booklist = getStorageItem('bookshelf')
    return booklist || ''
}

//删除书加列表
export function deleteBookShelfList() {
    return removeStorageItem('bookshelf')
}