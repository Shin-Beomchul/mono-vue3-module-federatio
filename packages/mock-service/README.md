# `mock-service`

> Include 실험적 모듈 tsc 없이 바로 사용 하고자 구조 테스트 중..
> 이문구를 본다면 정석대로 구성된 type-utils를 참고 할것.

## Usage

- Applications/someApp

```
import { MockService, MockAPIMode } from "@god/mock-service";


 let mockService = new MockService();
 mockService
    .getMockAxiosResponse(MockAPIMode.FAST)
    .then((r) => console.log("use MockService", r));

```
