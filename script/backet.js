let basket_json = [
     {
      img: "..ice-cream/01.png",
      name: "Zolotoy",
      price: 15000,
      count: 3,
      "total price": 45000,
    },
     {
      img: "../media/chocolate/04.png",
      name: "Kit Kat",
      price: 12000,
      count: 1,
      "total price": 12000,
    },
     {
      img: "../media/drink/03.png",
      name: "coca-cola",
      price: 14000,
      count: 3,
      "total price": 42000,
    },
    {
      img: "../media/chocolate/13.png",
      name: "Alpen Gold",
      price: 13000,
      count: 3,
      "total price": 39000,
    },
  ];
  
  
  function renderBasket() {
    const basketContainer = document.getElementById("basket");
    basketContainer.innerHTML = ""; 
  
    Object.keys(basket_json).forEach((key) => {
      const item = basket_json[key];
  

      const itemHTML = `
        <div style="border: 1px solid #ddd; padding: 10px; margin-bottom: 10px;">
          <img src="${item.img}" alt="${item.name}" style="width: 100px; height: auto;">
          <p><strong>Name:</strong> ${item.name}</p>
          <p><strong>Price:</strong> ${item.price}</p>
          <p><strong>Count:</strong> ${item.count}</p>
          <p><strong>Total Price:</strong> ${item["total price"]}</p>
          <button onclick="decreaseCount(${key})" style="color: blue;">-</button>
          <button onclick="deleteItem(${key})" style="color: red;">Delete</button>
        </div>
      `;
      basketContainer.innerHTML += itemHTML;
    });
  }
  

  function decreaseCount(key) {
    if (basket_json[key].count > 1) {
      basket_json[key].count--;
      basket_json[key]["total price"] = basket_json[key].price * basket_json[key].count; // Пересчитываем общую стоимость
    } else {
      delete basket_json[key];
    }
    renderBasket(); 
  }
  
 
  function deleteItem(key) {
    delete basket_json[key];
    renderBasket(); 
  }
  
  renderBasket();
  