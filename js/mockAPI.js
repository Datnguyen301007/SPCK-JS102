let products = [];
let currentPage = 1;

const productsList = document.getElementById("products-list");
const nameElm = document.getElementById("name");
const priceElm = document.getElementById("price");
const image = document.getElementById("image");
const displayProducts = () => {
    const boxRow = document.getElementsByClassName("col-lg-6")[0];
    // boxRow.innerHTML = "";
    products.forEach((cardItem) => {
        const productCard = document.createElement("div");
        productCard.classList.add("row", "align-items-center", "mb-5");

        const productInfo1 = document.createElement("div");
        productInfo1.classList.add("col-4", "col-sm-3");
        const productImg = document.createElement("img");
        productImg.classList.add("w-100", "rounded-circle", "mb-3", "mb-sm-0");
        productImg.src = cardItem.image;
        const productPrice = document.createElement("h5");
        productPrice.classList.add("menu-price");
        productPrice.innerHTML = "$" + cardItem.price;
        productInfo1.appendChild(productImg);
        productInfo1.appendChild(productPrice);

        const productInfo2 = document.createElement("div");
        productInfo2.classList.add("col-8", "col-sm-9");
        const productName = document.createElement("h4");
        productName.innerHTML = cardItem.name;
        productInfo2.appendChild(productName);

        productCard.appendChild(productInfo1);
        productCard.appendChild(productInfo2);

        boxRow.appendChild(productCard);
    });
};

const getProducts = async () => {
    const url = new URL("https://65103f463ce5d181df5d0ffd.mockapi.io/item");
    // Phân trang với page là số trang muốn tới còn limit là giới hạn trong 1 trang
    url.searchParams.append('page', currentPage);
    url.searchParams.append('limit', 10);
    // Sắp xếp các sản phẩm theo thứ tự giảm dần thời gian tạo (cái mới nhất thì lên đầu)
    url.searchParams.append("sortBy", "createdAt");
    url.searchParams.append("order", "asc");
    const response = await fetch(url);
    products = await response.json();
    displayProducts();
};

// const addProduct = async () => {
//     const newProductRequest = {
//         name: nameElm.value,
//         price: Number(priceElm.value),
//         quantity: Number(quantityElm.value),
//     };
//     const response = await fetch(
//         "https://65103f463ce5d181df5d0ffd.mockapi.io/item",
//         {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(newProductRequest),
//         }
//     );
//     const newProduct = await response.json();
//     products = [...products, newProduct];
//     displayProducts();
// };

// addBtn.addEventListener("click", addProduct);

// const handleNextPage = () => {
//     currentPage += 1;
//     getProducts();
// }

// nextPageBtn.addEventListener('click', handleNextPage);

// const handlePreviousPage = () => {
//     currentPage -= 1;
//     getProducts();
// }

// previousPageBtn.addEventListener('click', handlePreviousPage);

getProducts();
