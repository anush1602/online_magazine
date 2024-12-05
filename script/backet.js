let basket_json = {
    1: {
      img: "..ice-cream/01.png",
      name: "Zolotoy",
      price: 15000,
      count: 3,
      "total price": 45000,
    },
    2: {
      img: "../media/chocolate/04.png",
      name: "Kit Kat",
      price: 12000,
      count: 1,
      "total price": 12000,
    },
    3: {
      img: "../media/drink/03.png",
      name: "coca-cola",
      price: 14000,
      count: 3,
      "total price": 42000,
    },
    4: {
      img: "../media/chocolate/13.png",
      name: "Alpen Gold",
      price: 13000,
      count: 3,
      "total price": 39000,
    },
  };
  
  
  // Функция для отображения корзины
  function renderBasket() {
    const basketContainer = document.getElementById("basket");
    basketContainer.innerHTML = ""; // Очищаем корзину
  
    Object.keys(basket_json).forEach((key) => {
      const item = basket_json[key];
  
      // Создаем HTML для каждого товара
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
  
  // Функция для уменьшения количества товара
  function decreaseCount(key) {
    if (basket_json[key].count > 1) {
      basket_json[key].count--; // Уменьшаем количество
      basket_json[key]["total price"] = basket_json[key].price * basket_json[key].count; // Пересчитываем общую стоимость
    } else {
      delete basket_json[key]; // Если количество товара становится 0, удаляем товар
    }
    renderBasket(); // Обновляем отображение корзины
  }
  
  // Функция для удаления товара
  function deleteItem(key) {
    delete basket_json[key]; // Удаляем товар из объекта
    renderBasket(); // Обновляем отображение корзины
  }
  
  // Инициализация
  renderBasket();
  