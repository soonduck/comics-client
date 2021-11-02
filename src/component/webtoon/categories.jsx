import { useEffect } from 'react';
import api from '../../lib/api';

export const Categories = ({
  categories,
  activeCategories,
  onSetCategories,
  onSetActiveCategories,
  genre,
}) => {
  useEffect(() => {
    api.get('webtoon/categories/' + genre).then((res) => {
      onSetCategories(res.data);
      const tempActive = {};
      for (let i = 0; i < res.data.length; i++) {
        tempActive[res.data[i]['id']] = false;
      }
      onSetActiveCategories(tempActive);
    });
  }, [genre]);
  const addActiveCategories = (id) => {
    onSetActiveCategories({ ...activeCategories, [id]: !activeCategories[id] });
  };
  return (
    <section className="categories wrap">
      <ul className="list-category">
        {categories.map(({ id, name }) => (
          <li
            key={id}
            className={
              'item-category' + (activeCategories[id] ? ' active-category' : '')
            }
          >
            <button onClick={() => addActiveCategories(id)}>{name}</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
