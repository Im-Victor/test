let insert = value => ({
  into: array => ({
    after: afterValue => {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    }
  })
});
//insert(2).into([1, 3]).after(1);
// insert(2).info([1, 3]).after(0);
