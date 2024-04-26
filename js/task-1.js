const categories = document.querySelectorAll("#categories > *");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
});
