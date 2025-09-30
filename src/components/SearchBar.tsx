// controls text input to filter rows by source or by symbol

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = 'Search by symbol or source…' }: Props) {
  return (
    <div className="mb-3">
      <input
        type="search"
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search by symbol or source"
      />
    </div>
  );
}