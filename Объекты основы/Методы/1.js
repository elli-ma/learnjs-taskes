function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser(); // Ответ: ошибка.
  