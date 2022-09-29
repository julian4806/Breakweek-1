fetch("process.php")
  .then((response) => response.json())
  .then((data) => buildSeatsDom(data));

let selectedChairs;

function buildSeatsDom(data) {
  selectedChairs = data;
  data.map((x, index) => {
    var e = document.createElement("div");
    e.classList.add("stoel");
    e.setAttribute("data-id", index);
    if (x) e.classList.add("bezet");
    e.addEventListener("click", checkSeats);
    document.querySelector(".grid").appendChild(e);
  });
}

function checkSeats(e) {
  if (!e.target.classList.contains("bezet")) {
    if (selectedChairs[e.target.getAttribute("data-id")] === 0) {
      selectedChairs[e.target.getAttribute("data-id")] = 2;
    } else {
      selectedChairs[e.target.getAttribute("data-id")] = 0;
    }
    e.target.classList.toggle("geselecteerd");

    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `process.php?update=${JSON.stringify(selectedChairs)}`,
      true
    );
    xhr.onload = () => {
      console.log(xhr.responseText);
    };
    xhr.send();
  }
}
