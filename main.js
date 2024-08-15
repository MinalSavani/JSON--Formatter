const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls__button--format");
const btnMinify = document.querySelector(".controls__button--minify");

btnFormat.addEventListener("click", () => {
  try {
    const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
    outputArea.value = formatted;
  } catch (error) {
    console.error("Something went wrong", error)
    window.alert("Something went Wrong , There should be some error in your JSON")
  }
})

btnMinify.addEventListener("click", () => {
  try {
    const minified = JSON.stringify(JSON.parse(inputArea.value), null, 4);
    outputArea.value = minified;
  } catch (error) {
    console.error("Something went wrong", error)
    window.alert("Something went Wrong , There should be some error in your JSON")
  }
});