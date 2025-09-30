// asending and decesnding formating 
export type SortDir = 'asc' | 'desc' | null;

interface Props {
  dir: SortDir;
  className?: string;
  title?: string;
}

//this function is how I set the icon setting based on order 
export default function SortIcon({ dir, className, title }: Props) {
  const symbol = dir === 'asc' ? '▲' : dir === 'desc' ? '▼' : '⇅';
  const label =
    dir === 'asc' ? 'Sorted ascending' : dir === 'desc' ? 'Sorted descending' : 'Not sorted';

  return (
    <span role="img"
      aria-label={label}
      title={title ?? label}
      className={className}
      style={{ marginLeft: 6 }}
    >
      {symbol}
    </span>
  );
}