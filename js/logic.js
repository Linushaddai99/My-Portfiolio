function createPopup() {
  const popup = document.createElement('section');
  popup.classList = 'project-popup-wrapper hide';
  const projectPopup = document.createElement('div');
  projectPopup.className = 'project-popup';

  const popupHeader = document.createElement('div');
  popupHeader.className = 'popup-header';
  const h2 = document.createElement('h2');
  h2.className = 'popup-name';
  const imageClose = document.createElement('img');
  imageClose.className = 'close-project-popup';
  imageClose.setAttribute('src', './img/white-close-icon.svg');
  popupHeader.appendChild(h2);
  popupHeader.appendChild(imageClose);
  projectPopup.appendChild(popupHeader);

  const popupMain = document.createElement('div');

  const worksIntroDiv = document.createElement('div');
  const worksIntro = document.createElement('div');
  worksIntro.className = 'works-intro';
  const workName = document.createElement('span');
  workName.className = 'work-name popup-work-name';
  const position = document.createElement('ul');
  position.classList = 'popup-position role';

  worksIntroDiv.appendChild(worksIntro);
  worksIntro.appendChild(workName);
  worksIntro.appendChild(position);
  popupMain.appendChild(worksIntroDiv);

  const imagePopup = document.createElement('img');
  imagePopup.className = 'popup-image';
  popupMain.appendChild(imagePopup);

  const popupBody = document.createElement('div');
  popupBody.className = 'popup-body';
  const description = document.createElement('p');
  description.className = 'popup-description';
  popupBody.appendChild(description);

  const popupBody2 = document.createElement('div');
  popupBody2.className = 'popup-body2';
  const popupTechnologies = document.createElement('div');
  popupTechnologies.className = 'works-technologies';
  popupTechnologies.id = 'popup-technologies-container';
  popupBody2.appendChild(popupTechnologies);

  const popupLinks = document.createElement('div');
  popupLinks.className = 'popup-link-container';

  const demoLink = document.createElement('a');
  demoLink.className = 'popup-link';
  demoLink.setAttribute('href', '#');
  const demoText = document.createTextNode('See live');
  demoLink.appendChild(demoText);
  const demoIcon = document.createElement('img');
  demoIcon.setAttribute('src', './img/source-icon.svg');
  demoLink.appendChild(demoIcon);
  popupLinks.appendChild(demoLink);

  const liveLink = document.createElement('a');
  liveLink.className = 'popup-link';
  liveLink.setAttribute('href', '#');
  const liveText = document.createTextNode('See source');
  liveLink.appendChild(liveText);
  const liveIcon = document.createElement('img');
  liveIcon.setAttribute('src', './img/live-demo-icon.svg');
  liveLink.appendChild(liveIcon);
  popupLinks.appendChild(liveLink);

  popupBody2.appendChild(popupLinks);

  popupBody.appendChild(popupBody2);

  popupMain.appendChild(popupBody);

  projectPopup.appendChild(popupMain);

  popup.appendChild(projectPopup);
  document.body.appendChild(popup);
}

window.onload = createPopup();

const popupWrapper = document.querySelector('.project-popup-wrapper');
const popupName = document.querySelector('.popup-name');
const popupPosition = document.querySelector('.popup-position');
const popupWorkName = document.querySelector('.popup-work-name');
const popupImage = document.querySelector('.popup-image');
const popupDescription = document.querySelector('.popup-description');
const popupTech = document.querySelector('#popup-technologies-container');
const projectOne = document.querySelector('#project-one');
const projectTwo = document.querySelector('#project-two');
const projectThree = document.querySelector('#project-three');
const projectFour = document.querySelector('#project-four');
const closePopup = document.querySelector('.close-project-popup');
const blur = document.querySelector('#element');

const projectDatas = [
  {
    name: 'Tonic',
    workName: 'CANOPY',
    position: ['Back End Dev', '2015'],
    imageUrl: './img/Snapshoot Portfolio.svg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    name: 'Multi-Post Stories',
    workName: 'FACEBOOK',
    position: ['Full Stack Dev', '2015'],
    imageUrl: './img/Snapshoot Portfolio2.svg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    name: 'Facebook 360',
    workName: 'FACEBOOK',
    position: ['Full Stack Dev', '2015'],
    imageUrl: './img/Snapshoot Portfolio3.svg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    name: 'Uber Navigation',
    workName: 'Uber',
    position: ['Lead Dev', '2015'],
    imageUrl: './img/Snapshoot Portfolio4.svg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and',
    technologies: ['html', 'css', 'javascript'],
  }
]

const populateUI = (popupOption) => {
  popupWrapper.classList.remove('hide');
  blur.style.filter = 'blur(3px)';
  popupName.textContent = popupOption.name;
  popupWorkName.textContent = popupOption.workName;
  popupPosition.innerHTML = '';
  popupOption.position.forEach((item) => {
    popupPosition.innerHTML += `<li>${item}</li>`;
  });
  popupImage.setAttribute('src', popupOption.imageUrl);
  popupDescription.textContent = popupOption.description;
  popupTech.innerHTML = '';
  popupOption.technologies.forEach((item) => {
    popupTech.innerHTML += `<li>${item}</li>`;
  });
};

projectOne.addEventListener('click', () => {
  populateUI(projectDatas[0]);
});

projectTwo.addEventListener('click', () => {
  populateUI(projectDatas[1]);
});

projectThree.addEventListener('click', () => {
  populateUI(projectDatas[2]);
});

projectFour.addEventListener('click', () => {
  populateUI(projectDatas[3]);
});

closePopup.addEventListener('click', () => {
  popupWrapper.classList.add('hide');
  blur.style.filter = 'blur(0)';
});