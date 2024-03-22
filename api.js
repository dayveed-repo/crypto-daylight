export const fetchUrl = (endpoint) => {
  let baseurl = "https://coinranking1.p.rapidapi.com/";

  return baseurl + endpoint;
};

export const FetchParams = (timePeriod) => {
  if (timePeriod)
    return {
      headers: {
        "X-RapidAPI-Key": "2e66c28d86msh15e42830f839796p141a22jsnfd4acbc0b0cf",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
      params: { timePeriod: timePeriod },
    };

  return {
    headers: {
      "X-RapidAPI-Key": "2e66c28d86msh15e42830f839796p141a22jsnfd4acbc0b0cf",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
};

export const fetchNewsEndpoint = (query) => {
  let baseurl = `https://bing-news-search1.p.rapidapi.com/news/search?q=${query}&safeSearch=Off&textFormat=Raw&freshness=Day&count=100`;

  return baseurl;
};

export const fetchNewsApiParams = () => {
  return {
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "2e66c28d86msh15e42830f839796p141a22jsnfd4acbc0b0cf",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };
};
