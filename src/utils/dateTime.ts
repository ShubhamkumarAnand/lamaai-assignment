export function formatPrismaDate(prismaDateTime: Date): string {
  const dateObject = new Date(prismaDateTime);

  const month = dateObject.toLocaleDateString("en-US", { month: "short" });
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  return `${month} ${day} - ${year}`;
}
export function formatPrismaDay(prismaDateTime: Date): string {
  const dateObject = new Date(prismaDateTime);

  const dayOfWeek = dateObject.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const month = dateObject.toLocaleDateString("en-US", { month: "short" });
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  return `${dayOfWeek}, ${day} ${month} ${year}`;
}

export function formatPrismaTime(dateTimeString: Date): string {
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const postFix = hours >= 12 ? "pm" : "am";
  const formattedHours =
    hours % 12 === 0 ? 12 : hours > 12 ? `0${hours - 12}` : hours > 9 ? hours : `0${hours}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${formattedHours}:${formattedMinutes} ${postFix}`;
}

export function getWeeksBehind(date: Date): string {
  const currentDate = new Date();
  const currentWeek = currentDate.getUTCDate();
  const targetWeek = date.getUTCDate();
  const weeksBehind = currentWeek - targetWeek;

  if (weeksBehind <= 0) {
    return "this week";
  } else if (weeksBehind === 1) {
    return `one weeks ago`;
  } else if (weeksBehind === 2) {
    return `two weeks ago`;
  } else {
    return "More than two weeks ago";
  }
}