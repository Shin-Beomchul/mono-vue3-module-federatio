"use strict";

import { sayHello } from "@god/type-utils";
import { HelloTypeClass } from "@god/type-utils";
describe("network", () => {
  sayHello();
  let instance = new HelloTypeClass();
  instance.getName();
  it("needs tests");
});
