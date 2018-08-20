// Constructors
const NavItem = (section, icon) => ({ section, icon });

const SkillGroup = (name, skills = []) => ({ name, skills });
const Skill = (name, icon, title = '') => ({ name, icon, title });
const Project = (options = {}) => options;
const Tag = (name, icon, className, text) => ({ name, icon, className, text });
const Link = (name, icon, className, text) => ((href, external = true, project) => ({ name, icon, className, text, href, external, project }));
const SocialLink = (name, link, className, icon) => ({ name, link, className, icon });

const tags = {
  web: Tag('Website', 'icon-web', 'web'),
  js: Tag('JavaScript', null, 'js', 'JS'),
  wp: Tag('Wordpress', 'icon-wordpress', 'wp'),
  react: Tag('React.js', 'icon-react', 'react'),
  vue: Tag('Vue.js', 'icon-vue', 'vue'),
  game: Tag('Game', 'icon-pacman', 'game'),
}

const links = {
  live: Link('See live', 'icon-link', 'live'),
  gh:   Link('View on GitHub', 'icon-github', 'github'),
  info: Link('More details', 'icon-info', 'info')
}

exports.nav = [
  NavItem('about', 'icon-person'),
  NavItem('skills', 'icon-stats-bars2'),
  NavItem('portfolio', 'icon-work'),
  NavItem('contact', 'icon-envelope')
];

exports.skillGroups = [
  SkillGroup('Well', [
    Skill('HTML', 'icon-html5', 'HyperText Markup Language'),
    Skill('Accessibility', 'icon-wheelchair-alt'),
    Skill('CSS', 'icon-css3', 'Cascading Style Sheets'),
    Skill('RWD', 'icon-rwd', 'Responsive Web Design'),
    Skill('SASS', 'icon-sass', 'Syntactically Awesome Style Sheets'),
    Skill('JS&nbsp;<span class=\"text--small\">(ES6)</span>', 'icon-js', 'JavaScript (ECMAScript 2015/6)'),
    Skill('Redux', 'icon-redux'),
    Skill('React.js&nbsp;<span class=\"text--small\">(+Native)</span>', 'icon-react'),
  ]),
  SkillGroup('Good', [
    Skill('Testing', 'icon-testing'),
    Skill('Git', 'icon-git'),
    Skill('Gulp', 'icon-gulp'),
    Skill('Photoshop', 'icon-ps'),
  ]),
  SkillGroup('Beginner', [
    Skill('Unity', 'icon-unity'),
    Skill('Wordpress', 'icon-wordpress'),
    Skill('Drupal', 'icon-drupal'),
    Skill('Node.js', 'icon-node'),
    Skill('Phaser', 'icon-phaser'),
    Skill('Vue.js', 'icon-vue'),
    Skill('Typescript', 'icon-ts'),
  ]),
  SkillGroup('In future', [
    Skill('Angular2', 'icon-angular'),
  ]),
];

const thumbLink = (name) => `../images/screenshots/${name}_thumb.jpg`
exports.projects = [
  Project({
    id: 'lifecounter',
    name: 'Life counters',
    desc: 'Count down everything in your life! Small project in Vue.js which I had to learn, to help my friend get into patronage project.',
    tags: [tags.js, tags.vue],
    links: [links.gh('https://github.com/ppozniak/life-counters'), links.info('#', false, 'life-counters')],
    img: thumbLink('life-counters')
  }),
  Project({
    id: 'regionmap',
    name: 'Region Explorer',
    desc: 'Interactive map of Australian regions, postcode search, and filterable list of cities. <em>Page will be available externally in the future</em>',
    tags: [tags.js],
    links: [links.info('#', false, 'rdv')],
    img: thumbLink('rdv')
  }),
  Project({
    id: 'tio',
    name: 'TIO Report',
    desc: 'Simple one-page website, with book-like behavior on mobile devices.',
    tags: [tags.web, tags.js],
    links: [links.live('http://annualreport2016.tio.com.au/'), links.info('#', false, 'tio')],
    img: thumbLink('tio')
  }),
  Project({
    id: 'ppchat',
    name: 'Pp Chat',
    desc: 'Web chat created as a job interview task. React, Sockets and Node - fun.',
    tags: [tags.js, tags.react],
    links: [links.gh('https://github.com/ppozniak/ppchat'), links.info('#', false, 'ppchat')],
    img: thumbLink('ppchat')
  }),
  Project({
    id: 'leveraged',
    name: 'Leveraged',
    desc: 'My first serious project in the career. Simple big website, which taught me a lot in a hurtful way.',
    tags: [tags.web],
    links: [links.live('https://www.leveraged.com.au'), links.info('#', false, 'leveraged')],
    img: thumbLink('leveraged')
  }),
];


exports.socialLinks = [
  SocialLink('LinkedIn', 'https://www.linkedin.com/in/patrykpozniak','linkedin', 'icon-linkedin'),
  SocialLink('GitHub', 'https://github.com/ppozniak','github', 'icon-github'),
  SocialLink('Codepen', 'http://codepen.io/ppozniak95','codepen', 'icon-codepen'),
  SocialLink('Facebook', 'https://www.facebook.com/ppozniak95','facebook', 'icon-facebook'),
  SocialLink('Last.fm', 'http://www.last.fm/user/pozioxd','lastfm', 'icon-lastfm'),
];
