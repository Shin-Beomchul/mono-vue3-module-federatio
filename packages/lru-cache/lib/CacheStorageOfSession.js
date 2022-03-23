/**
 * @summary 세션 저장소 구현체
 * @author Shin BeomChul
 * @since 21.12.09
 * @scope 세션(탭)
 */
export default class CacheStorageOfSession {
    constructor() {
        console.log("create CacheStorage Of Session");
    }
    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    get(key) {
        const objectJson = sessionStorage.getItem(key);
        if (objectJson != null) {
            return JSON.parse(objectJson);
        }
        return undefined;
    }
    del(key) {
        sessionStorage.removeItem(key);
    }
    has(key) {
        return sessionStorage.getItem(key) != null ? true : false;
    }
    reset() {
        sessionStorage.clear();
    }
}
//# sourceMappingURL=CacheStorageOfSession.js.map