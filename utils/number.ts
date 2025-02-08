export const pageNumber = (count: number, pageSize: number) => Math.ceil(count / pageSize);

export const obfuscatePhoneNumber = (number: string) => number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-XXX-XXX');

export const formatCurrency = (number: number) => new Intl.NumberFormat('en-KE').format(number);

export interface SumInterface{
        amount: string
}

export const calculateSum = (data: SumInterface[]): number => data.reduce((total, item) => total
+ (Number(item?.amount) || 0), 0);
