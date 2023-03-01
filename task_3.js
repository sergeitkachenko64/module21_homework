let user = function () {
  let myKey = localStorage.getItem("myKey");
  let date = localStorage.getItem("date", new Date());
  // console.log("Get name", myKey);
  // console.log("Get date", date);

  if (myKey) {
    alert(
      "Добрый день, " +
        myKey +
        "! Давно не виделись! В последний раз Вы были у нас " +
        date +
        "."
    );
    localStorage.setItem("date", new Date()); // перезаписываем дату и время последнего посещения
  } else {
    let myKey = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя:", "");
    let date = new Date();
    localStorage.setItem("myKey", myKey);
    localStorage.setItem("date", date);
    // console.log("Set name", myKey);
    // console.log("Set date:", date);
  }
};

user();

// localStorage.clear();