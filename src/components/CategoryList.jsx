import React from 'react';
import './CategoryList.css';

const CategoryList = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category}
          className="category-button"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
