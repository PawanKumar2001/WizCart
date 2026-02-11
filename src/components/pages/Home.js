import React from 'react';
import Cardc from '../Card';
import Cardhead from '../Cardheading';
import Carousel from '../carousel';
import Cardsec from '../Cardsec';
import productData from '../../Backend/database/productData.json'; 

export default function Homep(props) {
  const {
    carouselImages,
    trendingProducts,
    sponsors,
    discountedProducts,
  } = productData;

  return (
    <div>
      <div className="Topcont mt-5">
        <Carousel {...carouselImages} />
      </div>
      <Cardhead
        mode={props.mode}
        togglemode={props.togglemode}
        cardhead="Trending Products"
      />
      <div className="container-fluid cardcont">
        {trendingProducts.map((product, index) => (
          <Cardc
            key={index}
            mode={props.mode}
            togglemode={props.togglemode}
            {...product}
          />
        ))}
      </div>
      <Cardhead
        mode={props.mode}
        togglemode={props.togglemode}
        cardhead="Sponsors"
      />
      <div className="container-fluid cardcont">
        {sponsors.map((sponsor, index) => (
          <Cardsec
            key={index}
            mode={props.mode}
            togglemode={props.togglemode}
            {...sponsor}
          />
        ))}
      </div>
      <Cardhead
        mode={props.mode}
        togglemode={props.togglemode}
        cardhead="Heavy Discounts"
      />
      <div className="container-fluid cardcont">
        {discountedProducts.map((product, index) => (
          <Cardc
            key={index}
            mode={props.mode}
            togglemode={props.togglemode}
            {...product}
          />
        ))}
      </div>
    </div>
  );
}
