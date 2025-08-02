(function () {
  var primary = localStorage.getItem("primary") || "#4169e1";
  var secondary = localStorage.getItem("secondary") || "#94C4FF";
  var warning = localStorage.getItem("warning") || "#FFC38D";

  window.ParisAdminConfig = {
    // Theme Primary Color
    primary: primary,
    // theme secondary color
    secondary: secondary,
    // theme success color
    warning: warning,
  };
})();
