const MyModal = ({ food, onClose }) => {
  if (!food) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${food.title} nagyított képe`}
      onClick={onClose}
    >
      <div
        className="relative max-h-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-2 top-2 rounded-full bg-black/70 px-3 py-1 text-2xl text-white"
          onClick={onClose}
          aria-label="Kép bezárása"
        >
          ×
        </button>
        <img
          className="max-h-[90vh] max-w-full rounded-2xl object-contain"
          src={`/images/${food.img}`}
          alt={food.title}
        />
      </div>
    </div>
  )
}

export default MyModal
