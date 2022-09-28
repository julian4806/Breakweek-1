window.onload = () => {
  const alleStoelen = document.querySelectorAll(".stoel");

  console.log(alleStoelen);

  for (let i = 1; i < 111; i++) {
    var e = document.createElement("div");
    e.classList.add("stoel");
    e.innerText = i;
    e.onclick = function () {
      console.log(i);

      // HIER IS jULIAN MEE BEZIG
    };

    document.querySelector(".grid").appendChild(e);
  }
};

function kiesStoel(e) {
  console.log(e);
}
