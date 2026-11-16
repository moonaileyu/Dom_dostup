// 1
document.body.style.backgroundImage = "url('bg0.png')";

// 2
let gallery1 = document.getElementById('gallery');

gallery1.style.border = '4px solid #5D9A90';
gallery1.style.margin = '30px 0';

// 3
for (let i = 0; i < gallery1.children.length; i++) {
    gallery1.children[i].style.opacity = '0.5';
}

// 4
document.querySelector('h1').textContent = 'ЗАГОЛОВОК СТОРІНКИ';

// 5
document.querySelector('.title').style.display = 'none';

// 6 і 7
let articles = document.querySelectorAll('article');

articles.forEach((article, index) => {
    article.style.marginBottom = '30px';

    if (index % 2 === 0) {
        article.style.backgroundColor = '#D8A3D5';
    } else {
        article.style.backgroundColor = '#A3CFD8';
    }
});

// 8
let currentLink = document.querySelector('.current');

currentLink.parentElement.style.borderLeft = '2px dotted red';

// 9
let lastArticle = articles[articles.length - 1];
let lastLink = lastArticle.querySelector('a');

lastLink.style.color = '#fff';
lastLink.style.backgroundColor = '#7F4196';

/**
 * 1. Встановити для body фонове зображення з папки images.
 * 
 * 2. За допомогою методу getElementById:
 *    - отримати доступ до <div id="gallery">;
 *    - зберегти посилання на об'єкт у змінній gallery1;
 *    - додати стилі: border: 4px solid #5D9A90 та margin: 30px 0.
 * 
 * 3. Отримати всі дочірні елементи gallery1 і призначити їм opacity: 0.5.
 * 
 * 4. Для заголовка h1 змінити текст на «ЗАГОЛОВОК СТОРІНКИ».
 * 
 * 5. Приховати елемент <h2 class="title">, встановивши йому display: none.
 * 
 * 6. Усім елементам article встановити margin-bottom: 30px.
 * 
 * 7. Парним елементам article задати колір фону #A3CFD8, непарним — #D8A3D5 
 *    (псевдоклас :nth-child не використовувати).
 * 
 * 8. Для посилання з класом current знайти батьківський елемент і додати йому border-left: 2px dotted red.
 * 
 * 9. Для посилання, розташованого всередині останнього article, задати колір тексту #fff і колір фону #7F4196.
 **/