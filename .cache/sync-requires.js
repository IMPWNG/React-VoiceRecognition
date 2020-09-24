const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ma/Desktop/DESKTOP/PERSONNAL PROJECTS/VOICE APP/voice_recognition/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ma/Desktop/DESKTOP/PERSONNAL PROJECTS/VOICE APP/voice_recognition/src/pages/index.js"))),
  "component---src-pages-marketing-js": hot(preferDefault(require("/Users/ma/Desktop/DESKTOP/PERSONNAL PROJECTS/VOICE APP/voice_recognition/src/pages/marketing.js"))),
  "component---src-pages-news-js": hot(preferDefault(require("/Users/ma/Desktop/DESKTOP/PERSONNAL PROJECTS/VOICE APP/voice_recognition/src/pages/news.js"))),
  "component---src-pages-styles-news-js": hot(preferDefault(require("/Users/ma/Desktop/DESKTOP/PERSONNAL PROJECTS/VOICE APP/voice_recognition/src/pages/styles.news.js")))
}

