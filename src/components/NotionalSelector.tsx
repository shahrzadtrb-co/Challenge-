// toggles between fee notionals 100 500 & 1000
import type { FeeNotional } from '../tier types';

interface Props {
  value: FeeNotional;
  onChange: (v: FeeNotional) => void;
}

//choosing Fee notational 
export default function NotionalSelector({ value, onChange }: Props) {
  const selectId = 'notional-select';

  //onChange : gets called when the user pickes new notational 
  return (
    <div className="mb-3">
      <label htmlFor={selectId} className="form-label">
        Notional Tiers
      </label>
      <select id={selectId} 
      className="form-select" value={value} 
      onChange={(e) => onChange(e.target.value as FeeNotional)}>
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>
    </div>
  );
}