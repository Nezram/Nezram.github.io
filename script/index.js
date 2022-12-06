function heartLocation() {
  const hearts = document.body.querySelectorAll(".heart");
  hearts.forEach((elem) => {
    let top = Math.random().toFixed(2) * 100;
    let left = Math.random().toFixed(2) * 100;
    elem.style.top = String(top) + "%";
    elem.style.left = String(left) + "%";
    console.log(String(top) + "%");
  });
}

heartLocation();
