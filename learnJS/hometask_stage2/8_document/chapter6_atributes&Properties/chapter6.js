//task 1 Получите атрибут
//<!DOCTYPE html>
// <html>
// <body>
//
//   <div data-widget-name="menu">Choose the genre</div>
//
//   <script>
//     // получаем элемент
//     let elem = document.querySelector('[data-widget-name]');
//
//     // читаем значение
//     alert(elem.dataset.widgetName);
//     // или так
//     alert(elem.getAttribute('data-widget-name'));
//   </script>
// </body>
// </html>

//task 2 Сделайте внешние ссылки оранжевыми
//<script>
//     let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
//     let links = document.querySelectorAll(selector);
//
//     links.forEach(link => link.style.color = 'orange');
//   </script>