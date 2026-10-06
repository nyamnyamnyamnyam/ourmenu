import { MenuButtons } from './MenuButtons'

const MyHeader = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <header className="py-6">
      <h1 className="text-center text-3xl font-bold">
        Our Menu
      </h1>

      <MenuButtons
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
    </header>
  )
}

export default MyHeader