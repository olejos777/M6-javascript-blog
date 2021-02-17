'use strict';

const titles = document.querySelector('.titles'),
  articles = document.querySelectorAll('.posts article'),
  postTitle = ('.post-title');





const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  const links = document.querySelectorAll('.titles a');

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
  console.log(linkHref);

  /* find the correct article using the selector (value of 'href' attribute) */
  /* add class 'active' to the correct article */
  document.querySelector(linkHref).classList.add('active');
};

function generateTitleLinks() {
  const linkLeftSide = '<li><a href="#';
  const linkMiddleSide = '"><span>';
  const linkRightSide = '</span></a></li>';


  /* remove contents of titleList */
  titles.innerHTML = '';

  /* for each article */
  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(postTitle).innerHTML;

    /* create HTML of the link */
    const linkHtml = linkLeftSide + articleId + linkMiddleSide + articleTitle + linkRightSide;

    /* insert link into titleList */
    titles.innerHTML = titles.innerHTML + linkHtml;
  }

  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();