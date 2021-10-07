import { useState } from 'react';
import items from './data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items); 
  const [categories, setCategories] = useState(allCategories);
  
  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items, category);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Categories categories = { categories } filterItems = { filterItems } />
          <Menu items = { menuItems } />
        </div>
      </section>
    </main>
  );
}

export default App;
