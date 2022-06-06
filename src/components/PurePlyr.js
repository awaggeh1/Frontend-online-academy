import React from 'react';
import Plyr from 'plyr-react';


const PurePlyr = React.memo((props) => {
  const {link} = props;
    const videoSrc = {
      type: 'video',
      sources: [
        {
          // Google drive option
          // src: 'https://gdurl.com/SZAp',
          // type: 'video/mp4'
          src: link,
          provider: 'youtube'
  
          // Test option
          // src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
        }],
      poster: '/img/product/large/product-2.webp',
    };
  
    return <Plyr source={videoSrc} options={{}} />;
  });
  
  export default PurePlyr;

// import React from 'react';
// import Plyr from 'plyr-react';

// const PurePlyr = (props) => {

//   // const {link} = props;
  
//   const videoSrc = {
//     type: 'video',
//     sources: [
//       {
//         // Google drive option
//         // src: 'https://gdurl.com/SZAp',
//         // type: 'video/mp4'
//         src: 'mXLjSxUYq-c',
//         provider: 'youtube'
//       }],
//     poster: '/img/product/large/product-2.webp',
//   };
  
//   return (
//     <Plyr source={videoSrc} options={{}} />
//   );
// };

// export default PurePlyr;