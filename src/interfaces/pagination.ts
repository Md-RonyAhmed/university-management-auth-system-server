export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

export type IOptions = {
  page?: number;
  limit?: number;
};

export type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
};
