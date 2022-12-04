/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import './styles/categories.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl:
        'https://imagedelivery.net/7h1fq7ivP2KzqAMfKFubLw/95871dbc-1888-41ff-3cc2-20b9857f9500/public'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl:
        'https://imagedelivery.net/7h1fq7ivP2KzqAMfKFubLw/e40602ed-f77e-4504-3427-3de9e2f2a800/public'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl:
        'https://imagedelivery.net/7h1fq7ivP2KzqAMfKFubLw/84fc326e-a376-444e-5d83-28d6de11a600/public'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl:
        'https://imagedelivery.net/7h1fq7ivP2KzqAMfKFubLw/0f1ecbc3-4fab-4a17-35de-0966e6f79d00/public'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl:
        'https://imagedelivery.net/7h1fq7ivP2KzqAMfKFubLw/49abcb9a-3754-43e2-97a9-05bdab700c00/public'
    }
  ];

  return (
    <div className={`categories-container`}>
      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className={`category-container`}>
          <div className={`background-image`} style={{ backgroundImage: `url(${imageUrl})` }} />
          <div className={`category-body-container`}>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
