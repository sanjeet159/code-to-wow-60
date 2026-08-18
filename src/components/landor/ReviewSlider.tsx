import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Stars } from "./Motion";

interface Review {
  quote: string;
  name: string;
  role: string;
  initial: string;
}

interface ReviewSliderProps {
  reviews: Review[];
}

export function ReviewSlider({ reviews }: ReviewSliderProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = reviews.length - 1;
      if (nextIndex >= reviews.length) nextIndex = 0;
      return nextIndex;
    });
  }, [reviews.length]);

  // Auto-slide functionality
  useEffect(() => {
    timerRef.current = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paginate]);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        paginate(1);
      }, 6000);
    }
  };

  const currentReview = reviews[index];

  return (
    <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6">
      <div className="relative h-[380px] w-full sm:h-[320px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              filter: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) > 50;
              if (swipe) {
                paginate(offset.x > 0 ? -1 : 1);
                resetTimer();
              }
            }}
            className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10 md:p-12">
              <Quote className="absolute right-8 top-8 h-12 w-12 text-accent/10 sm:h-16 sm:w-16" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <Stars value={5} />
                  <blockquote className="mt-6 text-lg leading-relaxed text-foreground/90 sm:text-xl md:text-2xl italic font-medium">
                    "{currentReview.quote}"
                  </blockquote>
                </div>

                <div className="mt-auto pt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-lg text-accent-foreground shadow-inner sm:h-14 sm:w-14">
                    {currentReview.initial}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground sm:text-lg">{currentReview.name}</span>
                    <span className="text-xs text-muted-foreground sm:text-sm">{currentReview.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-between sm:mt-12">
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
                resetTimer();
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === i ? "w-8 bg-accent" : "w-2 bg-border hover:bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              paginate(-1);
              resetTimer();
            }}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground sm:h-12 sm:w-12"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            onClick={() => {
              paginate(1);
              resetTimer();
            }}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground sm:h-12 sm:w-12"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
