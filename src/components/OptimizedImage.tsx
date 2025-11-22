import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = "",
  aspectRatio = "aspect-video"
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // 提前50px开始加载
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={imgRef} 
      className={`${aspectRatio} overflow-hidden bg-muted`}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${className}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {!isLoaded && isInView && (
        <div className="h-full w-full animate-pulse bg-muted/50" />
      )}
    </div>
  );
};
