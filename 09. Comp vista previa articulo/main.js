console.log("hola");

const card = document.createElement("article");
card.className = "card";

const foto = document.createElement("img");
foto.className = "foto";
foto.src = "./images/drawers.jpg";
const dates = document.createElement("div");
dates.className = 'dates'
const title = document.createElement("h2");
title.className = "title";
title.textContent =
  "Shift the overall look and feel by adding these wonderful touches to furniture in your home";
const subtitle = document.createElement("h3");
subtitle.className = "subtitle";
subtitle.textContent =
  "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.";
const user = document.createElement("div");
user.className = 'user'
const userContainer = document.createElement('div')
userContainer.className = 'usercontainer'
const userImg = document.createElement("img");
userImg.className = "userImg";
userImg.src = "./images/avatar.jpg";
const userInfo = document.createElement("div");
const userName = document.createElement("h4");
userName.className = "username";
userName.textContent = "Michelle Appleton";
const userDate = document.createElement("h5");
userDate.className = "userdate";
userDate.textContent = "28 Jun 2020";
const buttonShare = document.createElement('button')
buttonShare.classList = 'buttonshare'
const share = document.createElement("img");
share.className = 'share'
share.src = './images/share.svg'



const desplegable = document.createElement('div')
desplegable.className = 'desplegable'
const shareText = document.createElement('p')
shareText.className = 'sharetext'
shareText.textContent = 'SHARE'
const ul = document.createElement('ul')
const facebook = document.createElement('li')
const twiter = document.createElement('li')
const pinterest = document.createElement('li')
const facebookA = document.createElement('a')
const twiterA = document.createElement('a')
const pinterestA = document.createElement('a')
const facebookImg = document.createElement('img')
facebookImg.src = './images/facebook.svg'
const twiterImg = document.createElement('img')
twiterImg.src =  './images/twitter.svg'
const pinterestImg = document.createElement('img')
pinterestImg.src =  './images/pinterest.svg'
facebookA.append(facebookImg)
twiterA.append(twiterImg)
pinterestA.append(pinterestImg)
facebook.append(facebookA)
twiter.append(twiterA)
pinterest.append(pinterestA)
ul.append(facebook, twiter,pinterest)
desplegable.append(shareText, ul)




buttonShare.addEventListener('click', () => {
    console.log('clicando')
    desplegable.classList.toggle('visible')
    buttonShare.classList.toggle('active')
})




userInfo.append(userName, userDate);
user.append(userImg, userInfo );
buttonShare.append(share)
userContainer.append(user, buttonShare)
dates.append(title, subtitle, userContainer);
card.append(foto, dates, desplegable);

document.body.prepend(card);
