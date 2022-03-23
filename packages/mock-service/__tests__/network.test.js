"use strict";

import network from "../lib/MockService";
import { MockAPIMode } from "../lib/NetworkTypes";

describe("network", () => {
  network.getMockAxiosResponse(MockAPIMode.FAST);
  network.getMockAxiosResponse(MockAPIMode.REAL);
  network.getMockAxiosResponse(MockAPIMode.WORST);
  it("needs tests");
});
