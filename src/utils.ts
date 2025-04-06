function isMobileDevice() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileRegex =
    /iphone|ipod|android|blackberry|mini|windows\sce|palm|windows\sphone|opera\smini/i;
  return mobileRegex.test(userAgent);
}

function timeSince(dateString: string) {
  console.log("before rtime since", dateString, typeof dateString);
  const [monthName, year] = dateString.split(" ");
  const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();
  const givenDate = new Date(parseInt(year), monthIndex);
  const currentDate = new Date();

  let yearsDiff = currentDate.getFullYear() - givenDate.getFullYear();
  let monthsDiff = currentDate.getMonth() - givenDate.getMonth();

  if (monthsDiff < 0) {
    yearsDiff -= 1;
    monthsDiff += 12;
  }

  if (yearsDiff > 0) {
    return `${yearsDiff} year${yearsDiff > 1 ? "s" : ""}, ${monthsDiff} month${
      monthsDiff !== 1 ? "s" : ""
    }`;
  } else {
    return `${monthsDiff} month${monthsDiff !== 1 ? "s" : ""}`;
  }
}

export { isMobileDevice, timeSince };
