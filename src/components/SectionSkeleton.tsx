interface SectionSkeletonProps {
  lines?: number;
}

export const SectionSkeleton = ({ lines = 6 }: SectionSkeletonProps) => {
  return (
    <section className="py-32" aria-busy="true" aria-label="Loading content">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <div className="h-4 w-24 rounded-full bg-muted" />
          <div className="h-10 w-80 max-w-full rounded-lg bg-muted" />
          <div className="h-5 w-96 max-w-full rounded-lg bg-muted/70" />
          <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: Math.min(lines, 4) }).map((_, i) => (
              <div
                key={i}
                className="h-48 rounded-2xl bg-muted/50"
              />
            ))}
          </div>
          {lines > 4 && (
            <div className="mt-6 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              {Array.from({ length: lines - 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-32 rounded-2xl bg-muted/40"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
