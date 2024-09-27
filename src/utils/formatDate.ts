const monthArray = [
  "JANEIRO",
  "FEVEREIRO",
  "MARÇO",
  "ABRIL",
  "MAIO",
  "JUNHO",
  "JULHO",
  "AGOSTO",
  "SETEMBRO",
  "OUTUBRO",
  "NOVEMBRO",
  "DEZEMBRO"
];

export function formatDate(date: string): { day: string; weekDay: string; month: string } {
  const day = date.substring(0, 2);
  const month = date.substring(6);
  const year = new Date().getFullYear();

  const monthIndex = monthArray.indexOf(month.toUpperCase());
  const weekDay = new Date(year, monthIndex, parseInt(day, 10))
    .toLocaleDateString("pt-BR", { weekday: "long" });

  return { day, weekDay, month };
}
