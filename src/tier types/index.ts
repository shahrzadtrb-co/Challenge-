//tier notation types based on what project wants
export type FeeNotional = '100' | '500' | '1000';
//how we map the notation 
export type FeeMap = Partial<Record<FeeNotional, number>>;
export interface Fees {
  maker?: FeeMap;
  taker?: FeeMap;
}
export interface RawRow {
  source?: string;
  datetime?: string;
  symbol?: string;
  fees?: Fees | Record<string, unknown>;
}
export interface LatestRow {
  source: string;
  symbol: string;
  datetime?: string;
  fees?: Fees;
}