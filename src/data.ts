export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

type Data = {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
};
export const data: Data = {
  report: [
    {
      id: '1',
      source: 'Salary',
      amount: 7000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '2',
      source: 'Expense',
      amount: 3000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '3',
      source: 'Youtube',
      amount: 5000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};
