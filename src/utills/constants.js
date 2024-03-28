// // const GOOGLE_API_KEY = "AIzaSyCFxP-1UpEljhE-lbOH1ndSvnnIgv05NDs";
const GOOGLE_API_KEY = "AIzaSyAbP1mPDsck1qaBTG_nz050QVQvRnFVS3I";
//  const GOOGLE_API_KEY =  process.env.REACT_APP_GOOGLE_API_KEYENV;
// // export const YOUTUBE_VIDEOS_API= "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// // export const YOUTUBE_SEARCH_API =
// //   "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  export const LIVE_CHAT_COUNT = 20;