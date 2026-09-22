interface StarsProps {
  rating?: number;
  className?: string;
}

export function Stars({ rating = 5, className = "" }: StarsProps) {
  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "text-brass-400" : "text-brass-100"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.98 4.8 17.5l.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
