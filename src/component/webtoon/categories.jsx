import { useEffect } from 'react';
import api from '../../lib/api';

export const Categories = ({
  categories,
  activeCategories,
  onSetCategories,
  onSetActiveCategories,
  selectedGenre,
}) => {
  useEffect(() => {
    api.get('webtoon/categories/' + selectedGenre).then((res) => {
      onSetCategories(res.data);
      const tempActive = {};
      for (let i = 0; i < res.data.length; i++) {
        tempActive[res.data[i]['id']] = false;
      }
      onSetActiveCategories(tempActive);
    });
  }, [selectedGenre]);
  const addActiveCategories = (id) => {
    onSetActiveCategories({ ...activeCategories, [id]: !activeCategories[id] });
  };
  return (
    <section className="categories flex">
      <h3>카테고리</h3>
      <ul className="list-category flex">
        {categories.map(({ id, name }) => (
          <li
            key={id}
            className={
              'item-category' + (activeCategories[id] ? ' active-category' : '')
            }
          >
            <button onClick={() => addActiveCategories(id)}>
              <span className="bold">#</span> {name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
