let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function compare_to_sort(a, b) {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
}

console.log(library.sort(compare_to_sort));
