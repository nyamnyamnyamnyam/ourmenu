import React, { useEffect, useState } from 'react'

const TimeSpent = () => {
    const [timeSpent, setTimeSpent] = useState(0);

    useEffect(() => {
        console.log(timeSpent)
        const timer = setTimeout(() => setTimeSpent(prevTime => prevTime + 1), 1000)

        return () => clearTimeout(timer);
    }, [timeSpent]);
  return (
    <div className="absolute right-4 top-[60%] shrink-0 -translate-y-1/2 rounded-full border p-2 text-sm text-amber-400 sm:right-6 sm:text-base">
      {timeSpent}s
    </div>
  )
}

export default TimeSpent
