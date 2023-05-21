import { useState } from "react";

type sliderProps ={
    slides: string[]
    dots?: boolean
    arrows?: boolean
}

const ImageSlider = ({ slides, dots, arrows }: sliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideStyles: React.CSSProperties = {
        width: "100%",
        height: "320px",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
    
    const rightArrowStyles: React.CSSProperties  = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "20px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        display: arrows ? "block" : "none"
    };
    
    const leftArrowStyles: React.CSSProperties  = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "20px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        display: arrows ? "block" : "none"
    };
    
    const sliderStyles: React.CSSProperties  = {
        position: "relative",
        height: "320px",
    };
    
    const dotsContainerStyles: React.CSSProperties  = {
        bottom: "10px",
        left: "45%",
        position: "absolute",
        display: dots ? "flex" : "none",
        justifyContent: "center",
    };
    
    const dotStyle: React.CSSProperties  = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "10px",
        color: "white"
    };
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex]})`,
    };

    return (
        <div style={sliderStyles}>
        <div>
            <div onClick={goToPrevious} style={leftArrowStyles}>
            ❰
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
            ❱
            </div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                <div
                    style={dotStyle}
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    onMouseEnter={()=>goToSlide(slideIndex)}
                >
                    ●
                </div>
            ))}
        </div>
        </div>
        <div style={slideStylesWidthBackground}></div>
        </div>
    );
    };

export default ImageSlider;