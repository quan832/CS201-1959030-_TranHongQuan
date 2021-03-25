// FETCH API
let arrProduct = [];

// var product = new catalog();

const Fetch_Products = () => {

    let xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        "https://fakestoreapi.com/products ",
        true
    );

    xhr.onload = function () {
        if (this.status == 200) {
            let results = JSON.parse(this.responseText);

            console.log(results);
            arrProduct = results;
            arrProduct=arrProduct.splice(1,4)
            console.log(arrProduct);
            DomProduct()
            // outputProducts(results);
        }
    }

    xhr.send();
}



const DomProduct = () => {
    var contentHTML = "";
    for (let product of arrProduct) {
        console.log(product);
        contentHTML += `
        <div class="col-3">
        <div class="card product-card" style="width: 18rem">
       <div class="product-img">
        <img
          class="card-img-top"
          src=${product.image}
          alt="Card image cap"
        />
        </div>
        <div class="card-body">
        <h4 class="card-title">${product.title}</h4>
          <p class="card-text">
        ${product.price}$
          </p>
        </div>
        </div>
      </div>
        `
    }
    console.log(contentHTML)
    // console.log
    document.getElementById("product").innerHTML = contentHTML
}

Fetch_Products()
