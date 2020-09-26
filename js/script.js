'use strict';

const links = document.querySelectorAll('.titles a');
const titles = document.querySelector('.titles');
const articles = document.querySelectorAll('.posts article');

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;

  for (let link of links) {
    link.classList.remove('active');
  }

  clickedElement.classList.add('active');

  for (let article of articles) {
    article.classList.remove('active');
  }

  const linkHref = clickedElement.getAttribute('href');

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

