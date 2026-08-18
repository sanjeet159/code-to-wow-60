import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowIcon } from "./Header";
import type { Post } from "@/data/posts";

interface BlogSliderProps {
  posts: Post[];
}

export function BlogSlider({ posts }: BlogSliderProps) {
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
    if (posts.length === 0) return;
    setDirection(newDirection);
    setIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = posts.length - 1;
      if (nextIndex >= posts.length) nextIndex = 0;
      return nextIndex;
    });
  }, [posts.length]);

  useEffect(() => {
    if (posts.length <= 1) return;
    timerRef.current = setInterval(() => {
      paginate(1);
    }, 8000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paginate, posts.length]);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        paginate(1);
      }, 8000);
    }
  };

  const currentPost = posts[index];
  if (!currentPost) return null;

  return (
    <div className="relative w-full">
      <div className="relative min-h-[440px] w-full overflow-hidden px-1">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 40 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              filter: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_e: any, { offset }: PanInfo) => {
              const swipe = Math.abs(offset.x) > 50;
              if (swipe) {
                paginate(offset.x > 0 ? -1 : 1);
                resetTimer();
              }
            }}
            className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <div className="w-full rounded-2xl border border-border bg-card overflow-hidden shadow-sm active:scale-[0.98] transition-transform">
              <Link to="/blog/$slug" params={{ slug: currentPost.slug }} className="block">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={currentPost.img}
                    alt={currentPost.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                     <span className="text-[10px] uppercase tracking-widest text-white/90 bg-accent px-2 py-0.5 rounded">
                      {currentPost.cat}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span>{currentPost.readTime}</span>
                    <span>·</span>
                    <span>{currentPost.date}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-medium leading-snug line-clamp-2">
                    {currentPost.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {currentPost.excerpt}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/5 p-1 shadow-inner">
                        <img
                          src="/favicon.png"
                          alt="Home Craft"
                          className="h-full w-full object-contain grayscale opacity-70"
                        />
                      </div>
                      <span className="text-xs font-medium">{currentPost.author}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-accent">
                      Read
                      <ArrowIcon className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
                resetTimer();
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === i ? "w-6 bg-accent" : "w-1.5 bg-border"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => {
              paginate(-1);
              resetTimer();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-all active:scale-95 active:bg-accent active:text-accent-foreground"
            aria-label="Previous post"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => {
              paginate(1);
              resetTimer();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-all active:scale-95 active:bg-accent active:text-accent-foreground"
            aria-label="Next post"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
