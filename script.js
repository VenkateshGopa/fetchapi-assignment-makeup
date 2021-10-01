let searchby = "BLUSH";
function get() {
  const url = "https://makeup-api.herokuapp.com/api/v1/products.json";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      getData(users);
    })
    .catch(function (err) {
      console.log(err.message);
    });
}
function set() {
  searchby = document.getElementById("searchby").value.toUpperCase();
  divelements = document.getElementById("row");
  innerdivs = divelements.getElementsByTagName("div");
  for (let i = 0; i < innerdivs.length; i++) {
    data = innerdivs[i].getElementsByTagName("p")[2];
    valu = data.innerHTML;
    if (valu.toUpperCase().indexOf(searchby) > -1)
      innerdivs[i].style.display = "";
    else innerdivs[i].style.display = "none";
  }
}
function getData(data) {
  console.log(data);
  const row = document.getElementById("row");
  data.forEach((element) => {
    const div = document.createElement("div");
    div.className = "col-4 col-sm-3 col-lg-2";
    const img = document.createElement("img");
    img.src = element.image_link;
    div.appendChild(img);
    const name = document.createElement("p");
    name.id="brand";
    name.innerHTML = `${element.name} - ${element.brand}`;
    div.appendChild(name);
    const price = document.createElement("p");
    price.id="price";
    price.innerHTML = `$${element.price}`;
    div.appendChild(price);
    const type = document.createElement("p");
    type.id="type";
    type.innerHTML = element.product_type;
    div.appendChild(type);
    row.appendChild(div);
  });
}
get();
