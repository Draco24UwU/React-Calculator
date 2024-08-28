import { useState, useEffect, useCallback } from "react";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import Button from "./Button";

export interface Slide {
  url: string;
  title: string;
}

interface Slides {
  slides: Slide[];
  className: string;
}

function ImageSlider({ slides, className }: Slides) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const lastImage = slides.length - 1;

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev < lastImage ? prev + 1 : 0));
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : lastImage));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      setCurrentX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    const distance = startX - currentX;
    if (distance > 50) handleNextImage();
    else if (distance < -50) handlePrevImage();
    setIsDragging(false);
  }, [isDragging, startX, currentX, handleNextImage, handlePrevImage]);

  useEffect(() => {
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchEnd]);

  useEffect(() => {
    const interval = setInterval(handleNextImage, 10000);
    return () => clearInterval(interval);
  }, [handleNextImage]);

  return (
    <div
      className={`Slider-Container ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="Slider-Img-Container">
        {slides.map((img) => (
          <img
            src={img.url}
            key={img.title}
            className="Slider-Img"
            style={{ transform: `translateX(${-100 * currentImage}%)` }}
          />
        ))}
      </div>

      <div className="Slider-Dots-Container">
        {slides.map((_, index) => (
          <Button
            key={index}
            className={`Slider-Dots ${
              currentImage === index ? "bg-white" : "bg-slate-500"
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>

      <Button
        className="Button-Slider-Left"
        onClick={handlePrevImage}
        icon={ArrowBigLeftDash}
      />

      <Button
        className="Button-Slider-Rigth"
        icon={ArrowBigRightDash}
        onClick={handleNextImage}
      />
      {/*
        <div>
          (Initial X: {startX.toFixed(2)}, Current X: {currentX.toFixed(2)})
        </div> 
      */}
    </div>
  );
}

export default ImageSlider;
