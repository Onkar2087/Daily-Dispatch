const key = import.meta.env.VITE_GUARDIAN_API;

const requests = {
  headline: `https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail,trailText,byline&api-key=${key}`,

  news: `https://content.guardianapis.com/search?section=news&order-by=newest&page-size=48&show-fields=thumbnail,trailText,byline&api-key=${key}`,

  business: `https://content.guardianapis.com/search?section=business&order-by=newest&show-fields=thumbnail,trailText,byline&api-key=${key}`,

  sports: `https://content.guardianapis.com/search?section=sport&order-by=newest&show-fields=thumbnail,trailText,byline&api-key=${key}`,

  tech: `https://content.guardianapis.com/search?section=technology&order-by=newest&show-fields=thumbnail,trailText,byline&api-key=${key}`,

  politics: `https://content.guardianapis.com/search?q=politics&order-by=newest&show-fields=thumbnail,trailText,byline&api-key=${key}`,

  fashion: `https://content.guardianapis.com/search?section=fashion&order-by=newest&show-fields=thumbnail,trailText,byline&api-key=${key}`,

  entertainment: `https://content.guardianapis.com/search?q=entertainment&order-by=newest&show-fields=thumbnail,trailText,byline&api-key=${key}`,

  world: `https://content.guardianapis.com/search?section=world&order-by=newest&show-fields=thumbnail,trailText,byline&api-key=${key}`,

  health: `https://content.guardianapis.com/search?q=health&order-by=newest&show-fields=thumbnail,trailText,byline&api-key=${key}`,
};

export default requests;
