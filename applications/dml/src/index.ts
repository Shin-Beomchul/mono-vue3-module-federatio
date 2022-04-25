(async () => {
  /* remote CSS first(commButton RED)*/
  await import("@/assets/styles/global.scss"); // green
  await import("common/global.scss").catch((e) => console.error("TODO report to Server", e)); // red : from remote

  /* remote CSS first(commButton GREEN)*/
  //   await import("common/global.scss").catch((e) => console.error("TODO report to Server", e)); // red : from remote
  //   await import("@/assets/styles/global.scss"); // green
  import("./main");
})();
