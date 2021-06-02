import Mediastack from "../API/Mediastack";
import API from "../API/API";
const API_KEY = `${process.env.REACT_APP_MEDIASTACK_KEY}`;

export const NewsData = async () => {
  let data = {};

  let title0;
  let title1;
  let title2;
  let title3;
  let title4;
  let title5;
  let title6;
  let title7;
  let title8;

  let url0;
  let url1;
  let url2;
  let url3;
  let url4;
  let url5;
  let url6;
  let url7;
  let url8;

  await Mediastack.get(`/news?access_key=${API_KEY}&keywords=crypto&languages=en&sort=published_desc`)
    .then(function (response) {
      title0 = response.data.data[0].title;
      title1 = response.data.data[1].title;
      title2 = response.data.data[2].title;
      title3 = response.data.data[3].title;
      title4 = response.data.data[4].title;
      title5 = response.data.data[5].title;
      title6 = response.data.data[6].title;
      title7 = response.data.data[7].title;
      title8 = response.data.data[8].title;

      url0 = response.data.data[0].url;
      url1 = response.data.data[1].url;
      url2 = response.data.data[2].url;
      url3 = response.data.data[3].url;
      url4 = response.data.data[4].url;
      url5 = response.data.data[5].url;
      url6 = response.data.data[6].url;
      url7 = response.data.data[7].url;
      url8 = response.data.data[8].url;
    });


  data = {
    title0: title0,
    title1: title1,
    title2: title2,
    title3: title3,
    title4: title4,
    title5: title5,
    title6: title6,
    title7: title7,
    title8: title8,
    url0: url0,
    url1: url1,
    url2: url2,
    url3: url3,
    url4: url4,
    url5: url5,
    url6: url6,
    url7: url7,
    url8: url8,
  };

  return data;
};
