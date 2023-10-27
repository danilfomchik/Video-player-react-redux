const BASE_URL = "https://youtube.googleapis.com/youtube/v3";
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY_1;

const SUGGESTIONS_URL =
    "https://corsproxy.io/?https://clients1.google.com/complete/search?client=chrome&ds=yt&q=http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";

const videosCount = 24;

export { BASE_URL, API_KEY, SUGGESTIONS_URL, videosCount };
