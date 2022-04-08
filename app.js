const buttons = document.querySelectorAll("button");

console.log(buttons);

buttons.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.value) {
      console.log(event.target.value);
    }
  });
});
