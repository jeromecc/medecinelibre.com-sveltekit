const facebookPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_PAGE : '';
const facebookAuthorPageName = import.meta.env ? import.meta.env.VITE_FACEBOOK_AUTHOR_PAGE : '';

const website = {
  author: 'Jérôme Pinguet',
  ogLocale: 'fr_FR',
  siteLanguage: 'fr-FR',
  siteTitle: 'Médecine Libre',
  siteShortTitle: 'Médecine Libre',
  siteUrl: import.meta.env ? import.meta.env.VITE_SITE_URL : '',
  icon: 'static/favicon.png',
  backgroundColor: '#1b4079',
  themeColor: '#d62828',
  contactEmail: import.meta.env ? import.meta.env.VITE_CONTACT_EMAIL : '',
  facebookAuthorPage: `https://www.facebook.com/${facebookAuthorPageName}`,
  facebookAuthorPageName,
  facebookPage: `https://www.facebook.com/${facebookPageName}`,
  facebookPageName,
  githubPage: import.meta.env ? import.meta.env.VITE_GITHUB_PAGE : '',
  linkedinProfile: import.meta.env ? import.meta.env.VITE_LINKEDIN_PROFILE : '',
  telegramUsername: import.meta.env ? import.meta.env.VITE_TELEGRAM_USERNAME : '',
  tiktokUsername: import.meta.env ? import.meta.env.VITE_TIKTOK_USERNAME : '',
  twitterUsername: import.meta.env ? import.meta.env.VITE_TWITTER_USERNAME : '',
  twitterUserId: import.meta.env ? import.meta.env.VITE_TWITTER_ID : '',
  wireUsername: import.meta.env ? import.meta.env.VITE_WIRE_USERNAME : '',
};

export { website as default };
