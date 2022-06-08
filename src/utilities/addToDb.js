// use local storage to manage cart data
const addToDb = (id) => {
  let marked = {};

  //get the shopping cart from local storage
  const bookmarked = localStorage.getItem("bookmarks");
  console.log(bookmarked)
  if (bookmarked) {
    marked = JSON.parse(bookmarked);
    if(!marked['id'].includes(id)){
        marked['id'].push(id)
    } else {
        return
    }
  } else{
    marked['id'] = [id];
  }
  //set bookmarks local storage
  localStorage.setItem("bookmarks", JSON.stringify(marked));
};

export { addToDb };

