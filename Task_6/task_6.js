// Проверяем наличие успешно выполненного запроса, сохранённого в localStorage
let page = localStorage.getItem("page");
let limit = localStorage.getItem("limit");
let link = localStorage.getItem("link");

if (page == null || limit == null || link == null) {
  document.getElementById("result").innerHTML = "Нет сохранённых запросов.";
} else {
  document.getElementById("result").innerHTML =
    "Картинки по последнему сохранённому успешно выполненному запросу:";
  request(page, limit, link); // Вызываем функцию запроса и подставляем сохранённые параметры
}

// Обработчик кнопки "Запрос"
function getInputValues() {
  let page = document.getElementById("page").value;
  let limit = document.getElementById("limit").value;

  // Проверяем, является ли строка числовой в поле "Номер страницы"
  const isPage = (page) => !isNaN(page);

  // Проверяем, является ли строка числовой в поле "Лимит"
  const isLimit = (limit) => !isNaN(limit);

  if (
    (isPage(page) !== true || page < 1 || page > 10) &&
    (isLimit(limit) !== true || limit < 1 || limit > 10)
  ) {
    document.getElementById("result").innerHTML =
      "Номер страницы и лимит вне диапазона от 1 до 10.";
  } else if (isPage(page) !== true || page < 1 || page > 10) {
    document.getElementById("result").innerHTML =
      "Номер страницы вне диапазона от 1 до 10.";
  } else if (isLimit(limit) !== true || limit < 1 || limit > 10) {
    document.getElementById("result").innerHTML =
      "Лимит вне диапазона от 1 до 10.";
  } else {
    let link = "https://picsum.photos/v2/list?page=" + page + "&limit=" + limit;
    document.getElementById("result").innerHTML = "Запрос на адрес: " + link;
    localStorage.setItem("page", page); // Записываем номер страницы в localStorage
    localStorage.setItem("limit", limit); // Записываем лимит в localStorage
    localStorage.setItem("link", link); // Записываем URL в localStorage
    request(page, limit, link); // Вызываем функцию запроса
  }
}

function request(a, b, c) {
  document.getElementById("img").innerHTML = "";

  fetch(c)
    .then((response) => {
      const res = response.json();
      return res;
    })
    .then((data) => {

      if (data == 0) {
        window.alert("Страница не найдена.");
        return;
      }

      let list = document.getElementById("img");
      const length = Object.keys(data).length;
      for (let i = length - 1; i >= 0; i--) {
        let url = data[i]["url"];
        let downloadUrl = data[i]["download_url"];

        list.insertAdjacentHTML(
          "afterbegin",
          "<li><img src = '" +
            downloadUrl +
            "' width = '150' height = '100' alt = 'Picture'></li>"
        );
      }
    })

    .catch(() => {
      document.getElementById("img").innerHTML = "Ошибка!";
      console.log("Ошибка!");
    });
}

// localStorage.clear();
