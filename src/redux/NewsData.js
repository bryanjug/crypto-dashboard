import Gnews from "../API/Gnews";
const API_KEY = `${process.env.REACT_APP_GNEWS_KEY}`;

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

  let image0;
  let image1;
  let image2;
  let image3;
  let image4;
  let image5;
  let image6;
  let image7;
  let image8;

  await Gnews.get(`/search?q=crypto&token=${API_KEY}`)
    .then(function(response) {
      image0 = response.data.articles[0].image;
      image1 = response.data.articles[1].image;
      image2 = response.data.articles[2].image;
      image3 = response.data.articles[3].image;
      image4 = response.data.articles[4].image;
      image5 = response.data.articles[5].image;
      image6 = response.data.articles[6].image;
      image7 = response.data.articles[7].image;
      image8 = response.data.articles[8].image;
      
      title0 = response.data.articles[0].title;
      title1 = response.data.articles[1].title;
      title2 = response.data.articles[2].title;
      title3 = response.data.articles[3].title;
      title4 = response.data.articles[4].title;
      title5 = response.data.articles[5].title;
      title6 = response.data.articles[6].title;
      title7 = response.data.articles[7].title;
      title8 = response.data.articles[8].title;

      url0 = response.data.articles[0].url;
      url1 = response.data.articles[1].url;
      url2 = response.data.articles[2].url;
      url3 = response.data.articles[3].url;
      url4 = response.data.articles[4].url;
      url5 = response.data.articles[5].url;
      url6 = response.data.articles[6].url;
      url7 = response.data.articles[7].url;
      url8 = response.data.articles[8].url;
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
    image0: image0,
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4,
    image5: image5,
    image6: image6,
    image7: image7,
    image8: image8,
  };

  return data;
};
