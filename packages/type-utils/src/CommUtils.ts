export function sayHello(): void {
  console.log("hi i'm from @god/type-utils Function ");
}
export function sayGoodbye(): void {
  console.log("goodbye All Applications ~~ ");
}

export class HelloTypeClass {
  private name = "hi i'm from @god/type-utils HelloTypeClass In Field!!!";

  public getName(): string {
    return this.name;
  }
}
