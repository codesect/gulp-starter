(function test() {
  function markAsCorrect(el) {
    el.classList.remove('test--incorrect');
    el.classList.add('test--correct');
  }

  function changeLastItem() {
    const lastItem = document.querySelector('li:last-of-type');
    markAsCorrect(lastItem);
  }

  setTimeout(changeLastItem, 2000);
}());
