export const fetchUrl = (endpoint) => {
  let baseurl = "https://coinranking1.p.rapidapi.com/";

  return baseurl + endpoint;
};

export const FetchParams = () => {
  return {
    headers: {
      "X-RapidAPI-Key": "a0fb0a64d1msh33864f3a0f344b3p1c8024jsn857cda525720",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
};
