// Функция генерации целого числа в определённом диапазоне
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Функция определения чётности целого числа
function num(x) {
  if (Number.isInteger(x) == true) {
    return x % 2 == 0;
  } else {
    return false;
  }
}

// Функция выполнения promise
function usePromise() {
  // Создаём promise с задержкой выполнения 3 сек
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let x = getRandomInt(1, 101); // Определяем диапазон для функции генерации
      const boo = num(x); // Определяем чётность
      console.log("Сгенерированное число:", x, boo);
      if (boo) {
        resolve("Завершено успешно. Сгенерированное число — " + x);
      } else {
        reject("Завершено с ошибкой. Сгенерированное число — " + x);
      }
    }, 3000);
  });

  // Обрабатываем результат
  myPromise
    .then((result) => {
      console.log("Обрабатываем resolve", result);
    })
    .catch((error) => {
      console.log("Обрабатываем reject", error);
    })
    .finally(() => {
      console.log("End");
    });
}

console.log("Start delay 3 sec");
usePromise();
