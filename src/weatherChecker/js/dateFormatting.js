export const getTime = (time) => {
  const hours =
    time.getHours() <= 9
      ? `0${time.getHours()}`
      : `${time.getHours()}`;

  const minutes =
    time.getMinutes() <= 9
      ? `0${time.getMinutes()}`
      : `${time.getMinutes()}`;

  return `${hours}:${minutes}`;
};

export const getDate = (date) =>
  `${new Date(`${date}`)
    .getDate()}.${new Date(`${date}`)
      .getMonth()}.${new Date(`${date}`)
        .getFullYear()}`;

export const thousand = 1000;