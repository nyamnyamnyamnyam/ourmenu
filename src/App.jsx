import { useState } from 'react'
import './App.css'
import { MenuList } from './components/MenuList'
import MyHeader from './components/MyHeader'
import { foods } from './data'
import { getAllCategories } from './utils'

const categories = getAllCategories()

function App() {
  const [menu, setMenu] = useState(foods)
  const [activeCategory, setActiveCategory] = useState('all')

  const handleCategoryChange = (category) => {
    setActiveCategory(category)

    if (category === 'all') {
      setMenu(foods)
      return
    }

    setMenu(foods.filter((food) => food.category === category))
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <MyHeader
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <main className="m-auto max-w-300 p-4 shadow-2xl">
        <MenuList menu={menu} />
      </main>
    </div>
  )
}

export default App
