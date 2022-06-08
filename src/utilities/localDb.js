// use local storage to manage bookmarked movies
const addToDb = (id) => {
  let marked = {};

  //get bookmarked movie from local storage
  const bookmarked = localStorage.getItem("bookmarks");
  if (bookmarked) {
    marked = JSON.parse(bookmarked);
    if (!marked["id"].includes(id)) {
      marked["id"].push(id);
    } else {
      return;
    }
  } else {
    marked["id"] = [id];
  }
  //set bookmarks local storage
  localStorage.setItem("bookmarks", JSON.stringify(marked));
};

const removeFromDb = (id) => {

  //remove bookmarked movie from local storage
  let value = id;
  let marked = JSON.parse(localStorage.getItem("bookmarks"));

  let bookmarked = marked.id;

  bookmarked = bookmarked.filter((item) => item !== value);

  marked['id'] = bookmarked
  
  //set bookmarks local storage
  localStorage.setItem("bookmarks", JSON.stringify(marked));
};

export { addToDb, removeFromDb };

