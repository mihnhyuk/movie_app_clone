import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhealth.chosun.com%2Fsite%2Fdata%2Fimg_dir%2F2021%2F09%2F01%2F2021090100998_0.jpg&imgrefurl=https%3A%2F%2Fm.health.chosun.com%2Fsvc%2Fnews_view.html%3Fcontid%3D2021090101003&tbnid=aDxwKvvhuf5bCM&vet=12ahUKEwiGnOHWl5r1AhWpzIsBHX0fDjUQMygBegUIARDSAQ..i&docid=lZyPrW0Le-0N1M&w=640&h=513&itg=1&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwiGnOHWl5r1AhWpzIsBHX0fDjUQMygBegUIARDSAQ',
    rating: 5.0,
  },
  {
    id: 2,
    name: '삼겹살',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fsrc.hidoc.co.kr%2Fimage%2Flib%2F2021%2F8%2F27%2F1630049987719_0.jpg&imgrefurl=https%3A%2F%2Fwww.hidoc.co.kr%2Fhealthstory%2Fnews%2FC0000629775&tbnid=XSHrWFg78v8dvM&vet=12ahUKEwjZ06vzl5r1AhVDNqYKHQVSBWwQMygAegUIARDPAQ..i&docid=lsop8KgHaFp-ZM&w=530&h=338&itg=1&q=%EC%82%BC%EA%B2%B9%EC%82%B4&ved=2ahUKEwjZ06vzl5r1AhVDNqYKHQVSBWwQMygAegUIARDPAQ',
    rating: 4.9,
  },
  {
    id: 3,
    name: '비빔밥',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F220px-Dolsot-bibimbap.jpg&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EB%25B9%2584%25EB%25B9%2594%25EB%25B0%25A5&tbnid=Fz_8GHM6ze9U8M&vet=12ahUKEwiF-suAmJr1AhXzzIsBHXi6CTUQMygAegUIARDUAQ..i&docid=LLx6Fq5KFqTvRM&w=220&h=147&itg=1&q=%EB%B9%84%EB%B9%94%EB%B0%A5&ved=2ahUKEwiF-suAmJr1AhXzzIsBHXi6CTUQMygAegUIARDUAQ',
    rating: 4.5,
  }
];

function App() {
  return (
  <div>
    {foodILike.map(dish => (<Food key={dish.id} name = {dish.name} picture={dish.image} rating={dish.rating}/> ))}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
