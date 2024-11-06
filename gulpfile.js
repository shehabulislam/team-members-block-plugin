const gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("browser-sync", function () {
  browserSync.init({
    proxy: "localhost/wpshopifyexpert.com",
  });
  gulp.watch(["src"]).on("change", () => {
    browserSync.reload();
  });
  gulp.watch(["inc", "./*.php"]).on("change", () => {
    browserSync.reload();
  });
});
