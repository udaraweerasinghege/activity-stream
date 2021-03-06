const {
  BOOKMARKS_LENGTH, POCKET_STORIES_LENGTH,
  POCKET_TOPICS_LENGTH, DEFAULT_LOCALE, VISITAGAIN_LENGTH
} = require("common/constants");
const faker = require("test/faker");
const STRINGS = require("../../data/locales/locales.json")[DEFAULT_LOCALE];

module.exports = {
  "VisitAgain": {
    "rows": faker.createRows({images: VISITAGAIN_LENGTH}),
    "error": false
  },
  "Bookmarks": {
    "rows": faker.createRows({images: BOOKMARKS_LENGTH, type: "bookmark"}),
    "error": false
  },
  "PocketStories": {
    "rows": faker.createRows({length: POCKET_STORIES_LENGTH}),
    "error": false
  },
  "PocketTopics": {
    "rows": faker.createRows({length: POCKET_TOPICS_LENGTH}).map((t, i) => Object.assign({}, t, {name: `name_${i}`})),
    "error": false
  },
  "TopSites": {
    "rows": faker.createRows({images: 3}).map(row => Object.assign({}, row, {hasHighResIcon: true})),
    "error": false
  },
  "Search": {
    "error": false,
    "searchString": "he",
    "suggestions": ["help", "helloworld"],
    "formHistory": ["hello"],
    "currentEngine": {
      "name": "Google",
      "icon": ""
    },
    "engines": [{"name": "Google", "icon": ""}, {"name": "Yahoo", "icon": ""}],
    "searchPlaceholder": "",
    "searchSettings": "",
    "searchHeader": "",
    "searchForSomethingWith": ""
  },
  "Experiments": {
    "values": {"pocket": true},
    "error": false
  },
  "Filter": {"query": ""},
  "Prefs": {
    "prefs": {
      "showSearch": true,
      "showTopSites": true,
      "showBookmarks": true,
      "showVisitAgain": true,
      "showPocket": true
    },
    "error": false
  },
  "Intl": {
    "locale": DEFAULT_LOCALE,
    "strings": STRINGS,
    "direction": "ltr"
  }
};
