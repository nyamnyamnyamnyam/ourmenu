import { foods } from './data.js'

export const getAllCategories = () => {
  const categories = [
    ...new Set(
      foods.map((food) => food.category),
    ),
  ].sort((a, b) => a.localeCompare(b))

  return ['all', ...categories]
}