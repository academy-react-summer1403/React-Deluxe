export const getRandomColor = () => {
  const colors = [
    "bg-red-400",
    "bg-green-500",
    "bg-blue-600",
    "bg-yellow-300",
    "bg-cyan-200",
    "bg-pink-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
