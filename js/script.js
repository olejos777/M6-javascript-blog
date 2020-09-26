'use strict';

const links = document.querySelectorAll('.titles a');
const titles = document.querySelector('.titles');
const articles = document.querySelectorAll('.posts article');

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;

  /* remove class 'active' from all article links  */
  for (let link of links) {
    link.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */
  for (let article of articles) {
    article.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const linkHref = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */
  /* add class 'active' to the correct article */
  document.querySelector(linkHref).classList.add('active');

};



function generateTitleLinks() {
  const linkLeftSide = '<li><a href="#';
  const linkMiddleSide = '"><span>';
  const linkRightSide = '</span></a></li>';

  titles.innerHTML = '';

  for (let article of articles) {
    const articleId = article.getAttribute('id');
    const articleTitle = article.querySelector('.post-title').innerHTML;
    const linkHtml = linkLeftSide + articleId + linkMiddleSide + articleTitle + linkRightSide;

    titles.innerHTML = titles.innerHTML + linkHtml;
  }

  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();