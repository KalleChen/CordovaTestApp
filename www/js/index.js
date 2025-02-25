function navigateTo(page) {
  window.location.href = page;
}

// Cordova device ready event (for future native functionality)
document.addEventListener("deviceready", function () {
  console.log("Cordova is ready!");
});
