// use local storage to manage cart data
const addToDb = (id) => {
  let marked = {};

  //get the shopping cart from local storage
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
  let value = id;
  let marked = JSON.parse(localStorage.getItem("bookmarks"));

  let bookmarked = marked.id;

  bookmarked = bookmarked.filter((item) => item !== value);

  marked['id'] = bookmarked

  localStorage.setItem("bookmarks", JSON.stringify(marked));
};

export { addToDb, removeFromDb };

