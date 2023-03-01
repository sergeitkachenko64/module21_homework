function getInputValue() {
  var input = document.getElementById("input").value;
  request(input);
}

function request(input) {
  document.getElementById("list").innerHTML = "";
  var link = "https://jsonplaceholder.typicode.com/users/" + input + "/todos";

  fetch(link)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((data) => {
      // Раскомментируйте для проверки - выполненная задача будет выведена зачёркнутым текстом
      // console.log(data);

      if (data == 0) {
        window.alert("Пользователь с указанным id не найден.");
        return;
      }

      let list = document.getElementById("list");
      const length = Object.keys(data).length;
      for (let i = length - 1; i >= 0; i--) {
        let flag = data[i]["completed"];
        let strTask = "Задача №" + (i + 1) + ":" + " " + data[i]["title"];
        if (flag === false) {
          list.insertAdjacentHTML("afterbegin", "<li>" + strTask + "</li>");
        } else {
          list.insertAdjacentHTML(
            "afterbegin",
            "<li>" + "<s>" + strTask + "</s>" + "</li>"
          );
        }
      }

      list.insertAdjacentHTML(
        "afterbegin",
        "</br>============================================<h4>ID пользователя: " +
        input +
        "</h4>"
      );
    })

    .catch(() => {
      console.log("error");
    });
}