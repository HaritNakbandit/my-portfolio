export const formatTimelineRange = (startDate: string, endDate?: string) => {
  const formatter = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" });
  const start = formatter.format(new Date(startDate));
  const end = endDate ? formatter.format(new Date(endDate)) : "Present";
  return `${start} - ${end}`;
};
