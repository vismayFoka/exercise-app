export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f58d80b76msh5e946c81965866dp1e7945jsn07dafc1b7385",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "4f58d80b76msh5e946c81965866dp1e7945jsn07dafc1b7385",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
