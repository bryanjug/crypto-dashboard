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

  let url0;
  let url1;
  let url2;
  let url3;
  let url4;
  let url5;

  let image0;
  let image1;
  let image2;
  let image3;
  let image4;
  let image5;

  await Mediastack.get(`/news?access_key=${API_KEY}&keywords=crypto&languages=en`)
    .then(function (response) {
      console.log(response.data);
      title0 = response.data.[0].title;
      title1 = response.data.[1].title;
      title2 = response.data.[2].title;
      title3 = response.data.[3].title;
      title4 = response.data.[4].title;
      title5 = response.data.[5].title;

      url0 = response.data.[0].url;
      url1 = response.data.[1].url;
      url2 = response.data.[2].url;
      url3 = response.data.[3].url;
      url4 = response.data.[4].url;
      url5 = response.data.[5].url;

      image0 = response.data.[0].image;
      image1 = response.data.[1].image;
      image2 = response.data.[2].image;
      image3 = response.data.[3].image;
      image4 = response.data.[4].image;
      image5 = response.data.[5].image;
    });


  data = {
    title0: title0,
    title1: title1,
    title2: title2,
    title3: title3,
    title4: title4,
    title5: title5,
    url0: url0,
    url1: url1,
    url2: url2,
    url3: url3,
    url4: url4,
    url5: url5,
    image0: image0,
    image1: image1,
    image2: image2,
    image3: image3,
    image4: image4,
    image5: image5,
  };

  return data;
};
