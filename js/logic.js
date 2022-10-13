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
  imageClose.addEventListener('click', () => {
    popup.classList.add('hide');
  });
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
const popupWrapper = document.querySelector('.project-popup-wrapper')
const popupName = document.querySelector('.popup-name');
const popupPosition = document.querySelector('.popup-position');
const popupWorkName = document.querySelector('.popup-work-name');
const popupImage = document.querySelector('.popup-image');
const popupDescription = document.querySelector('.popup-description');
const popupTech = document.querySelector('#popup-technologies-container');
const workSection = document.querySelector('.works-section');

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
  },
];

const populateUI = (popupOption) => {
  popupWrapper.classList.remove('hide');
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

const createCard = (project, position) => {
  const workDiv = document.createElement('div');
  workDiv.className = 'works';
  const workImg = document.createElement('img');
  workImg.setAttribute('src', project.imageUrl);

  workDiv.appendChild(workImg);

  const workDetails = document.createElement('div');
  workDetails.className = 'works-details';

  const workTitle = document.createElement('h2');
  workTitle.innerHTML = project.name;
  workDetails.appendChild(workTitle);

  const projectWorkIntro = document.createElement('div');
  projectWorkIntro.className = 'works-intro';

  const span = document.createElement('span');
  span.className = 'work-name';
  span.innerHTML = project.workName;
  projectWorkIntro.appendChild(span);

  const ulOne = document.createElement('ul');
  ulOne.className = 'role';
  let liOne = '';
  for (let i = 0; i < project.position.length; i += 1) {
    liOne += `<li>${project.position[i]}</li>`;
  }
  ulOne.innerHTML = liOne;
  projectWorkIntro.appendChild(ulOne);

  workDetails.appendChild(projectWorkIntro);

  const summary = document.createElement('p');
  summary.innerHTML = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';

  workDetails.appendChild(summary);

  const ulTwo = document.createElement('ul');
  ulTwo.className = 'works-technologies';
  let liTwo = '';
  for (let i = 0; i < project.technologies.length; i += 1) {
    liTwo += `<li>${project.technologies[i]}</li>`;
  }
  ulTwo.innerHTML = liTwo;

  workDetails.appendChild(ulTwo);

  const projectButton = document.createElement('button');
  projectButton.id = `project-${position}`;
  projectButton.classList = 'btn btn-animation popup-btn';
  projectButton.innerHTML = 'See Project';

  projectButton.addEventListener('click', () => {
    populateUI(projectDatas[position]);
  });

  workDetails.appendChild(projectButton);

  workDiv.appendChild(workDetails);

  workSection.appendChild(workDiv);
};

const populatePage = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    createCard(arr[i], i);
  }
};

populatePage(projectDatas);