const products = [
    {
        id:1,
        product_name: 'nike esbi nijah hususon',
        price: 2500000,
        description: 'skate shoes',
        img_url: 'sapatu.png',
        qty: 10,
    },
    {
        id:2,
        product_name: 'pens',
        price: 200000,
        description: 'skate shoes',
        img_url: 'sapatu1.png',
        qty: 10,
    },
    {
        id:3,
        product_name: 'pens kids',
        price: 300000,
        description: 'culture shoes',
        img_url: 'vans_vans_kids_sk8-hi_shoes_black-true_white_-vn000d5f6bt-_full01_ns9g29ad.png',
        qty: 10,
    },
]


const listProducts = document.getElementById('list-products')
const productView = products.map(product =>    
    
        `<div class="col-lg-4 col-12" style="max-height= 2rem">
        <div class="card" style="width: 18rem;">
            <img src="${product.img_url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.product_name}</h5>
            <p class="card-text">HARGA: <span></span>${product.price}</p>
            <p class="card-text">Qty: <span>${product.qty}</span></p>
            <p class="card-text">Deskripsi: <span>${product.description}</span></p>
            <a href="#" class="btn btn-primary">
                <i class="fa-solid fa-cart-shopping text-light"></i>
                Add to cart
            </a>
            </div>
        </div>
        </div>`).join(",").replaceAll(",","")

listProducts.innerHTML = productView