import { motion } from 'motion/react'

export function MenuButtons({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-4">
      {categories.map((category) => (
        <motion.button
          key={category}
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          onClick={() => onCategoryChange(category)}
          className={`rounded-lg border px-4 py-2 capitalize transition-colors ${
            activeCategory === category
              ? 'border-amber-400 bg-amber-400 text-gray-900'
              : 'border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-gray-900'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}