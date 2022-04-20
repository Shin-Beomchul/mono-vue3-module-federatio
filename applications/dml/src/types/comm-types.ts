export type Values<T> = T[keyof T];

export interface CommDate {
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
}

export interface Paging extends CommDate {
  page: number;
  pageSize: number;
  loadSize: number;
  total: number;
  start(): number;
  end(): number;
  isEnd(): boolean;
}
