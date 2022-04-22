# `mock-service`
## Usage

- Applications/someApp

```
import { MockService, MockAPIMode } from "@god/mock-service";


 let mockService = new MockService();
 mockService
    .getMockAxiosResponse(MockAPIMode.FAST)
    .then((r) => console.log("use MockService", r));

```
