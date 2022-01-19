
var ProductImg = document.getElementById("product-img");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
};
SmallImg[4].onclick = function () {
  ProductImg.src = SmallImg[4].src;
};

document.getElementById("button").onclick = function () {
  var link = document.getElementById("button");
  if (ProductImg.src == SmallImg[0].src) {
    link.setAttribute(
      "href",
      "https://www.amazon.com/dp/B0975SXQ3H"
    );
  } else if (ProductImg.src == SmallImg[1].src) {
    link.setAttribute(
      "href",
      "https://www.amazon.com/dp/B0975S23K2"
    );
  } else if (ProductImg.src == SmallImg[2].src) {
    link.setAttribute(
      "href",
      "https://www.amazon.com/dp/B0975R32Y1"
    );
  } else if (ProductImg.src == SmallImg[3].src) {
    link.setAttribute(
      "href",
      "https://www.amazon.com/dp/B0975SPF8G"
    );
  } else if (ProductImg.src == SmallImg[4].src) {
    link.setAttribute(
      "href",
      "https://www.amazon.com/dp/B0976KP4BF"
    );
  }
};
