const speakersSection = document.querySelector('#speakers');
const speakerLoader = document.querySelector('#speaker-loader');
const speakers = [
  {
    name: 'Norm Alname',
    intro: 'Unknown person, who is doing whatever',
    description: 'The backstory to this person, all based on literally nothing, who knows what they have done',
    image: './assets/img/Speaker1.png',
  },
  {
    name: 'Wei R Dname',
    intro: 'A known renown person, who is a basic as most can be',
    description: 'I haveve spent years researching the habits and habitats of unicorns, dragons, and other fantastical beasts.',
    image: './assets/img/Speaker2.png',
  },
  {
    name: 'Norm Alname',
    intro: 'Lesser known person, who is less known',
    description: 'From the absurd poetry of Edward Lear to the nonsensical plays of the Dadaists, I have devoted my career to understanding.',
    image: './assets/img/Speaker3.png',
  },
  {
    name: 'Od Dlame',
    intro: 'This person knows some things, who is rare as most can be',
    description: 'From debunking urban legends to analyzing the logical fallacies in conspiracy theories',
    image: './assets/img/Speaker4.png',
  },
  {
    name: 'Gif Tofgab',
    intro: 'Creative odd person, making things here and there',
    description: 'Whether it is exploring the role of humor in coping with stress or the psychological benefits.',
    image: './assets/img/Speaker5.png',
  },
  {
    name: 'Rando Missue',
    intro: 'Makes randomized things here and then goes over there',
    description: 'From designing impractical gadgets to constructing absurdly overcomplicated machines',
    image: './assets/img/Speaker6.png',
  },
];

function speakerBlock(speaker) {
  const speakerEntry = document.createElement('li');
  speakerEntry.className = 'container my-4 col-lg-6 gx-lg-5';
  speakerEntry.innerHTML = `<div class="row lh-1"><div class="col-4"><span class="speaker-img-bg"></span><img class="speaker-img" src="${speaker.image}" alt="${speaker.name}"></div><div class="col-8"><h6>${speaker.name}</h6><p class="lh-1 mb-0">${speaker.intro}</p><span class="spacer"></span><p class="lh-1">${speaker.description}</p></div></div>`;
  speakersSection.appendChild(speakerEntry);
}

for (let i = 0; i < 4; i += 1) {
  console.log('test');
  speakerBlock(speakers[i]);
}

function speakerLoad(speakerList) {
  speakerList.forEach((speaker) => {
    speakerBlock(speaker);
  });
}

function clearSpeakers() {
  speakersSection.innerHTML = '';
}

function disableSpeakerLoad() {
  speakerLoader.toggleAttribute('disabled');
}

speakerLoader.addEventListener('click', () => {
  clearSpeakers();
  speakerLoad(speakers);
  disableSpeakerLoad();
});
