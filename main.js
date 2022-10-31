//スクロールボタン
let scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');

scroll_to_top_btn.addEventListener('click', scroll_to_top);

function scroll_to_top() {
  window.scroll({ top: 0, behavior: 'smooth' });
};


//アコーディオンメニュー
let menu = document.querySelectorAll('.js-menu');
console.log(menu)

function toggle() {
  let content = this.nextElementSibling;
  content.classList.toggle('is-open');
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', toggle);
}
