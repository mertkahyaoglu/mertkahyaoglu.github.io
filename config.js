'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'Mert Kahyaoğlu',
  subtitle: 'Software Engineer',
  copyright: '© All rights reserved.',
  disqusShortname: 'mertkahyaoglu',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-63041764-1',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/me'
    },
    {
      label: 'Projects',
      path: '/pages/projects'
    },
  ],
  author: {
    name: 'Mert Kahyaoğlu',
    photo: '/me.png',
    bio: 'Hi! I\'m Mert, a software engineer working at Zeplin.',
    contacts: {
      email: 'mertkahyaoglu93@gmail.com',
      facebook: '',
      telegram: '',
      twitter: 'mertkahyaoglu',
      github: 'mertkahyaoglu',
      rss: '',
      vkontakte: '',
      linkedin: 'mertkahyaoglu48',
      instagram: 'mert_kahyaoglu',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    }
  },
  projects: [
    {
      name: 'Zeplin Slides',
      description: 'Create presentations in Google Slides from Zeplin projects.',
      web: 'https://slides.zeplin.xyz',
      github: 'https://github.com/mertkahyaoglu/zeplin-google-slides',
      tag: 'react'
    },
    {
      name: 'Jekyll Admin',
      description: 'A Jekyll plugin that provides users with a traditional CMS-style graphical interface to author content and administer Jekyll sites.',
      web: 'https://github.com/jekyll/jekyll-admin',
      github: 'https://github.com/jekyll/jekyll-admin',
      tag: 'ruby, react'
    },
    {
      name: 'Booklines',
      description: 'Mobile app to store your favourite book lines.',
      web: 'https://play.google.com/store/apps/details?id=com.mertkahyaoglu.booklines',
      github: 'https://github.com/mertkahyaoglu/booklines',
      tag: 'flutter'
    },
    {
      name: 'Tree View',
      description: 'Example of rendering a tree.',
      web: 'http://mertkahyaoglu.github.io/tree-view',
      github: 'https://github.com/mertkahyaoglu/tree-view',
      tag: 'react'
    },
    {
      name: 'Movie Stats',
      description: 'The project scraps Top 250 movies\' data from imdb.com and shows statistics about them using charts.',
      web: 'http://mertkahyaoglu.github.io/movie-stats',
      github: 'https://github.com/mertkahyaoglu/movie-stats',
      tag: 'angular, scrapy'
    },
    {
      name: 'Brain Balls',
      description: 'BrainBalls is a memory game that you try to remember sequences of balls. The game is created with Phaser.js for web application and used LibGDX for Android version.',
      web: 'http://mertkahyaoglu.github.io/brainballs',
      github: 'https://github.com/mertkahyaoglu/brainballs',
      android: 'https://github.com/mertkahyaoglu/brainballs',
      tag: 'phaserjs'
    },
  ]
};