export function MenuList({ menu }) {
  return (
    <div className="flex flex-wrap gap-4">
      {menu.map(({ id, title, price, img, desc }) => (
        <article
          key={id}
          className="flex basis-full flex-col gap-4 rounded-2xl border border-blue-900 p-2 brp500:flex-row brp900:basis-[calc(50%-20px)]"
        >
          <div className="flex-1">
            <img
              className="h-48 w-full rounded-2xl object-cover"
              src={`/images/${img}`}
              alt={title}
            />
          </div>

          <div className="flex-1">
            <div className="flex justify-between border-b border-amber-500 p-2 text-amber-300">
              <span className="capitalize">
                {title}
              </span>

              <span>
                €{price.toFixed(2)}
              </span>
            </div>

            <p className="p-2">
              {desc}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}