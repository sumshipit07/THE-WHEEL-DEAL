"use client";

type BrowseResultsHeaderProps = {
  resultCount: number;
  sort: string;
  onSortChange: (value: string) => void;
};

export default function BrowseResultsHeader({
  resultCount,
  sort,
  onSortChange,
}: BrowseResultsHeaderProps) {
  return (
    <section className="mb-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[var(--ink)]">
            {resultCount} rides match your search
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Sort */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="browse-sort"
              className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink-muted)]"
            >
              Sort
            </label>

            <select
              id="browse-sort"
              value={sort}
              onChange={(event) => onSortChange(event.target.value)}
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--ink)] outline-none focus:border-[var(--teal)]"
            >
              <option value="newest">Newest</option>
              <option value="lowest-price">Lowest price</option>
              <option value="highest-price">Highest price</option>
            </select>
          </div>

          {/* List / Map */}
          <div className="flex rounded-md border border-[var(--border)] bg-[var(--surface)] p-1">
            <button
              type="button"
              className="rounded-md bg-[var(--teal)] px-3 py-1.5 text-xs font-semibold text-white"
            >
              List
            </button>

            <button
              type="button"
              className="rounded-md px-3 py-1.5 text-xs font-semibold text-[var(--ink-muted)]"
            >
              Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}