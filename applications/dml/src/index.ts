(async () => {
  await import("common/global.scss").catch((e) => console.error("TODO report to Server", e)); // from remote
  import("./main");
})();
