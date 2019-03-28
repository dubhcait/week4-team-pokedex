let jungle = [[COMMON],[COMMON.FLITER(F)],[F.FILTERED(FA)];

const exploreJungle = () => {
  return [...jungle];
};

const growJungle = dish => {
  jungle.push(dish);
};

const pruneJungle = () => {
  jungle.pop();
};

module.exports = {
  exploreJungle,
  growJungle,
  pruneJungle
};
