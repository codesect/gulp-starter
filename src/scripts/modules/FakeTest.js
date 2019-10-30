export default function test() {
  function markAsCorrect(el) {
    el.classList.remove('test--incorrect');
    el.classList.add('test--correct');
  }

  function changeLastItem() {
    const lastItem = document.querySelector('.container--main li:last-of-type');
    if (!lastItem) {
      return;
    }
    markAsCorrect(lastItem);
  }

  setTimeout(changeLastItem, 3000);
}
