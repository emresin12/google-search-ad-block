function blockAds() {
  elems = Array.from(document.getElementsByClassName("uEierd"));
  elems.forEach((ad) => ad.remove());
}
document.addEventListener("DOMContentLoaded", function () {
  blockAds();
  console.log("Ads blocked");
});
