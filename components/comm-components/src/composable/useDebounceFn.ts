/**
 * @author  Shin-BeomChul
 * @description delay만큼 지연 후 @func 호출. 중복 호출 시 무시.(단 immediate가 true인 경우 최초 1회 즉시실행.)
 *
 * @param {object} params 2개의 파라미터
 * @param params.delay 지연시간 (ms)
 * @param params.immediate true : 최초 1회 즉시실행.
 * @param {function} func delay시간 이후 실행될 함수
 * @returns {function} debouncedFn
 */

const useDebounceFn = ({ delay, immediate }, func) => {
  let timer;
  let initial = false;
  const debouncedFn = (...args) => {
    const callNow = (resolve) => {
      resolve(func(...args));
    };

    if (!timer && immediate && !initial) {
      return new Promise((resolve) => {
        initial = true;
        callNow(resolve);
      });
    }

    clearTimeout(timer);

    return new Promise((resolve) => {
      timer = setTimeout(() => callNow(resolve), delay);
    });
  };

  return debouncedFn;
};

export default useDebounceFn;
