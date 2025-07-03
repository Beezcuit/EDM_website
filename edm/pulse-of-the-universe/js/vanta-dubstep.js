document.addEventListener("DOMContentLoaded", function () {
  VANTA.FOG({
    el: "#vanta-fog",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    highlightColor: 0x00ff00,   // Lazer yeşili
    midtoneColor: 0x003300,     // Koyu yeşil
    lowlightColor: 0x000000,
    baseColor: 0x000000,
    blurFactor: 0.7,
    speed: 2.5,
    zoom: 1.2
  });
});
