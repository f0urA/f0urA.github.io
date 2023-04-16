window.onload = function () {
  fetch(
    "https://anquoteonquoteapitogetdiscorduserdataorsomethinglol.noodlee.repl.co/api?id=926367286338674688"
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("avatar").src = data.avatar;
      document.getElementById("username").innerHTML = data.username;
      $(".banner_color").css("background-color", data.banner_color);
    })
    .catch((error) => console.error(error));

  const fac = new FastAverageColor();
  const container = document.querySelector(".image-container");
  const img = container.querySelector("img");
  const border = document.getElementById("avatar");

  fac
    .getColorAsync(img)
    .then((color) => {
      container.style.color = color.isDark ? "#fff" : "#000";
      border.style.borderColor = color.hex;
    })
    .catch((e) => {
      console.log(e);
    });

  // Add animations and other content here
};
var scrollInterval = setInterval(function () {
  window.scrollBy({
    top: 500,
    behavior: "smooth"
  });
  clearInterval(scrollInterval);
}, 3000);
