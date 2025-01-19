import { useState, useEffect, useCallback } from 'react'

interface CarouselItem {
  id: number
  imageUrl: string
}

interface CustomImageCarouselProps {
  items: CarouselItem[]
  autoplayInterval?: number
}

export function Carousel({ items, autoplayInterval = 1000 }: CustomImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [items.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoplayInterval)
    return () => clearInterval(intervalId)
  }, [nextSlide, autoplayInterval])

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-600 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative h-64 md:h-96">
                <img
                  src={item.imageUrl}
                  alt={`Slide ${item.id}`}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  )
}
