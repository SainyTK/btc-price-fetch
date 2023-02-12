export const delay = (ms: number) =>
  new Promise((resolve) => {
    return setTimeout(() => {
      resolve(null);
    }, ms);
  });
