export default () => {
  const { language, userLanguage } = navigator;

  return language || userLanguage || 'de-DE';
};
