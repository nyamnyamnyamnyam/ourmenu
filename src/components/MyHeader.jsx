import { MenuButtons } from './MenuButtons'
import { motion } from "motion/react"
import TimeSpent from './TimeSpent'

const MyHeader = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <header className="flex flex-col items-center justify-center gap-4">
      <div className="relative flex w-full flex-nowrap items-center justify-center px-16 sm:px-20">
        <motion.h1
          initial={{ x:'100vw' }}
          animate={{ x:0, transition: { duration: 0.5, stiffness: 20, type: "spring" } }}
          className="text-center text-2xl font-bold text-amber-400 sm:text-3xl">
          Our Menu
        </motion.h1>
        <TimeSpent/>
      </div>
      
      <MenuButtons
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
        
      />
      
    </header>
  )
}

export default MyHeader