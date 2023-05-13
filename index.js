const btn = document.getElementById("btn");
const endPoint1 = `https://dummyjson.com/posts`
const endPoint2 = `https://dummyjson.com/products`
const endPoint3 = `https://dummyjson.com/todos`
const container = document.getElementsByClassName("container")[0];

function appendPosts(data) {
    container.innerHTML ="";
    const topic = document.createElement("h1");
    topic.innerText = "Posts"
    const topticDiv = document.createElement("div");

    topticDiv.appendChild(topic);
    container.appendChild(topticDiv);
    
    const postContainer = document.createElement("div");
    postContainer.className = "post-card-container";

    for (let i = 0; i < data.posts.length; i++) {
        const card = document.createElement("div");
        card.className ="post-card";
        // top div
        const top = document.createElement("div");
        top.className = "top";
        const user = document.createElement("span");
        user.innerText = `User : ${data.posts[i].userId}`;
        top.appendChild(user);
        const postId = document.createElement("span");
        postId.innerText = `Post : ${data.posts[i].id}`;
        top.appendChild(postId);
        card.appendChild(top);
        // tag reaction div
        const tagReaction = document.createElement("div");
        tagReaction.className ="tags-reaction";
        const tag = document.createElement("span");
        tag.innerText = "Tags : ";
        let arr = data.posts[i].tags;
        for(let i =0; i < arr.length; i++){
            tag.innerText = tag.innerText + arr[i] + " ";
        }
        tagReaction.appendChild(tag);
        const reaction = document.createElement("span");
        reaction.innerText = `Reaction : ${data.posts[i].reactions}`;
        tagReaction.appendChild(reaction);
        card.appendChild(tagReaction);
        // discription div

        const desciption = document.createElement("div");
        desciption.className ="desciption";
        const para = document.createElement("p");
        para.innerText = data.posts[i].body;
        desciption.appendChild(para);
        card.appendChild(desciption);

        postContainer.appendChild(card);
    }
    container.appendChild(postContainer);
}
function appendProducts(data){
    // data.products[i].
    const topic = document.createElement("h1");
    topic.innerText = "Products"
    const topticDiv = document.createElement("div");

    topticDiv.appendChild(topic);
    container.appendChild(topticDiv);
    
    const productCardContainer = document.createElement("div");
    productCardContainer.className ="product-card-container";

    for(let i =0;i < data.products.length; i++){
        const card = document.createElement("div");
        card.className = "product-card";
        //title div
        const title = document.createElement("div");
        title.className ="title";
        const titleData = document.createElement("h3");
        titleData.innerText = data.products[i].title;
        title.appendChild(titleData);
        card.appendChild(title);
        //thumbnail div
        const thumb = document.createElement("div");
        thumb.className = "thumbnail";
        const thumbimg = document.createElement("img");
        thumbimg.src = `${data.products[i].thumbnail}`
        thumb.appendChild(thumbimg);
        card.appendChild(thumb);
        //price div
        const priceDiv = document.createElement("div");
        priceDiv.className ="price";
        const price = document.createElement("h4");
        price.innerText = `Price : ${data.products[i].price}$`
        priceDiv.appendChild(price);
        const discount = document.createElement("span");
        discount.innerText =`discount : ${data.products[i].discountPercentage}%`
        priceDiv.appendChild(discount);
        card.appendChild(priceDiv);
        //description1 div
        const description1 = document.createElement("div");
        description1.className ="description1";
        const category = document.createElement("span");
        category.innerText =`category : ${data.products[i].category}`
        description1.appendChild(category);
        const brand = document.createElement("span");
        brand.innerText =`brand : ${data.products[i].brand}`
        description1.appendChild(brand);
        const rating = document.createElement("span");
        rating.innerText =`rating : ${data.products[i].rating}`
        description1.appendChild(rating);
        card.appendChild(description1);
        //description2 div
        const description2 = document.createElement("div");
        description2.className ="description2";
        const description = document.createElement("p");
        description.innerText = `${data.products[i].description}`
        description2.appendChild(description);
        card.appendChild(description2);
        //imgs div
        const imgs = document.createElement("div");
        imgs.className ="imgs";
        let pdImgs = data.products[i].images;
        for(let i =0; i < pdImgs.length; i++){
            const img = document.createElement("img");
            img.src = `${pdImgs[i]}`
            console.log(pdImgs[i])
            imgs.appendChild(img);
        }
        card.appendChild(imgs);
        //buyNow div
        const buyNow = document.createElement("div");
        buyNow.className ="buyNow"
        const buyNowBtn = document.createElement("button");
        buyNowBtn.innerText = "Buy Now";
        buyNow.appendChild(buyNowBtn);
        card.appendChild(buyNow);

        productCardContainer.appendChild(card);
    }
    container.appendChild(productCardContainer);
}
function appendTodo(data){
    const topic = document.createElement("h1");
    topic.innerText = "ToDo's"
    const topticDiv = document.createElement("div");
    topticDiv.appendChild(topic);
    container.appendChild(topticDiv);

    const todoContainer = document.createElement("div");
    todoContainer.className ="todo-container";
    const table = document.createElement("table");
    table.style.width ="800px";
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.innerText = "User Id";
    tr.appendChild(th1);
    const th2 = document.createElement("th");
    th2.style.width ="500px";
    th2.innerText = "Desciption";
    tr.appendChild(th2);
    const th3 = document.createElement("th");
    th3.innerText ="Status";
    tr.appendChild(th3);
    thead.appendChild(tr);
    table.appendChild(thead);

    // table body
    const tbody = document.createElement("tbody");

    for(let i =0; i < data.todos.length; i++){
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerText = `${data.todos[i].userId}`;
        tr.appendChild(td1);
        const td2 = document.createElement("td");
        td2.innerText = `${data.todos[i].todo}`;
        tr.appendChild(td2);
        const td3 = document.createElement("td");
        td3.innerText =`${data.todos[i].completed}`;
        tr.appendChild(td3);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    todoContainer.appendChild(table);
    container.appendChild(todoContainer);
    
}
function PromiseAPI1() {
    return new Promise((resolve, reject) => {
        // data will be fetch from api end point after 1000ms 
        setTimeout(async () => {
            try {
                // if fetch resolved it will load data on UI else error will be thrown and promise will be resolve with data true
                const response = await fetch(endPoint1);
                const data = await response.json();
                appendPosts(data);
                resolve(true);
            } catch (err) {
                // if data is not fetched from endPoints than error will be thrown by try block and error logged here and promise rejected with value false
                console.log(err);
                reject(false);
            }
        }, 1000);
    })
}
function PromiseAPI2() {
    return new Promise((resolve, reject) => {
        // data will be fetch from api end point after 2000ms
        setTimeout(async () => {
            try {
                // if fetch resolved it will load data on UI else error will be thrown and promise will be resolve with data true
                const response = await fetch(endPoint2);
                const data = await response.json();
                appendProducts(data);
                resolve(true);
            } catch (err) {
                // if data is not fetched from endPoints than error will be thrown by try block and error logged here and promise rejected with value false
                console.log(err);
                reject(false);
            }
        }, 2000)
    })

}
function PromiseAPI3() {
    return new Promise((resolve, reject) => {
        // data will be fetch from api end point after 3000ms
        setTimeout(async () => {
            try {
                // if fetch resolved it will load data on UI else error will be thrown and promise will be resolve with data true
                const response = await fetch(endPoint3);
                const data = await response.json();
                appendTodo(data);
                resolve(true);
            } catch (err) {
                // if data is not fetched from endPoints than error will be thrown by try block and error logged here and promise rejected with value false
                console.log(err);
                reject(false);
            }
        }, 3000)
    })
}

btn.addEventListener("click", () => {
    // promise p1 will resolve after 1000ms and data will load on UI
    const p1 = PromiseAPI1();
    p1.then((p1Resolved) => {
        //if p1 promise resolved then it return true and call promiseAPI2()
        if (p1Resolved) {
            const p2 = PromiseAPI2();
            p2.then((p2Resolved) => {
                //if p2 promise resolved then it return true and call PromiseAPI3()
                if (p2Resolved) {
                    PromiseAPI3();
                }
            })
        }
    })
})
