export const validateTitle = (newTitle) => {
  const words = newTitle.split(/\s+/);
  const titleLength = newTitle.length;
  const longestWordLength = Math.max(...words.map((word) => word.length));
  const hasSpace = /\s/.test(newTitle);

  if ((!hasSpace && titleLength > 15) || (hasSpace && longestWordLength > 15)) {
    return { error: true, isTextOverflowing: true };
  } else if (titleLength > 40) {
    return { error: true, isTextOverflowing: false };
  } else {
    return { error: false, isTextOverflowing: false };
  }
};

export default validateTitle;
