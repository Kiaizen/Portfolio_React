// src/utils/dateUtils.ts

export const calculateDateDifference = (specificDate: string): number => {
  const today = new Date();
  const targetDate = new Date(specificDate);

  const diffYears = today.getFullYear() - targetDate.getFullYear();
  const diffMonths = today.getMonth() - targetDate.getMonth();

  // Adjust for negative values in months or days
  const adjustedYears = diffMonths < 0 ? diffYears - 1 : diffYears;

  return adjustedYears
  };
