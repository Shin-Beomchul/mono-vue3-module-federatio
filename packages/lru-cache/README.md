# `lru-cache`

> sessionLruCache : 휘발성(탭, 브라우저 종료 시 초기화)
> localLruCache : 비휘발성(scope: domain)

## Usage

- ../mono/Applications/someApp
  import { PersistentLruCache, PresitentType } from "@god/lru-cache";

  ...

  let persistentLruCache = new PersistentLruCache(PresitentType.Local, { max: 30 });

  persistentLruCache.setStorage( "key", { age : 1 } ); // 저장
  persistentLruCache.isHit("key"); // 캐싱여부 // true
  persistentLruCache.getStorage("Key"); // 가져오기 // 1
  persistentLruCache.delStorage("key"); // 삭제
  persistentLruCache.clearCaches(); // 초기화

## 응용 - vue플러그인 적용

/\*_ sessionLruCache _/
Vue.prototype.$sessionLruCache = new PersistentLruCache(PresitentType.Session, { max: 50 });

/\*_ localLruCache _/
Vue.prototype.$localLruCache = new PersistentLruCache(PresitentType.Local, { max: 50 });

/_ !!wraning!! LRUCache external Lib _/
/\*_ inMemoryLruCache _/
Vue.prototype.$inMemoryLruCache = new LRUCache<string, any>({ max: 50, maxAge: 1000 _ 3 // 1day : 1000 _ 60 _ 1440 || 30s : 1000 _ 30
, dispose: (key: string, n: any) => { console.log('deleted', n); }
});

/\*_ for Type Inference _/
declare module 'vue/types/vue' {
interface Vue {
$inMemoryLruCache: LRUCache<string, any>;
$sessionLruCache: PersistentLruCache<any>;
$localLruCache: PersistentLruCache<any>;
}
}
