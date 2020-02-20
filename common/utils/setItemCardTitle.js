export const setItemCardTitle = title => {
  const maxWidth = 28;
  let finalTitle = `${title.substring(0, maxWidth)}...`;
  const titleWords = title.split(' ');
  const firstThreeWords = titleWords.slice(0, 3).join(' ');
  if(firstThreeWords.length <= maxWidth) finalTitle = firstThreeWords;
  return finalTitle;
};