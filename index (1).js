const Ucfirst = (str) => {
  return str[0].ToUpperCase() + str.slice()
  console.log(usFirst('peter')); peter
  console.log(usFirst('william')); william
  console.log(usFirst('rose')); rose
  console.log(usFirst('sarah')); sarah

  const checkSpam = (str) => {
    const spam = ['sex', 'free', 'porn', 'viagra']
    const listOfWordToCheck = str.split(' ');
    console.log(listOfWordToCheck); ['buy', 'viagra', 'now']
    for (let i = 0; i <listOfWordsToCheck.length; i++) {
      const Wordtocheck = listOfWordsToCheck[i];
      spam.forEach((Spamword) => {
        ifSpamwork.tolowercase() === Wordtocheck.tolowercase(); {
          return true;
        }
      });
    }
  return false;
  };
    console.log(checkSpam('buy', 'VIAgRa', 'now')); false

    const truncate = (str, maxlength) => {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + '...';
  }
  return str;
};

const extractCurrencyValue = (str) => {
return +str.slice(1);
};
console.log(typeof extractCurrencyValue('$1000')); number


const fruits = ['Apple', 'Banana', 'Orange'];
const shoppingcart = fruits;
shoppingcart.push('pear');

console.log(fruits.length); 3
console.log(shoppingcart.length); 4

    const styles = ['Jazz', 'Blues']
    styles.push = ['Rock-n-Roll'];
    const index = Math.floor(styles.length / 2);
    styles[index] = 'Classics';
    console.log(Styles.splice(0, 1)); Jazz
    styles.unshift(Rap);
    styles.unshift(Raggae);
    
    console.log(styles); ['Rap', 'Raggae', 'Classics', 'Rock-n-Roll']

    const camelize = (str) => {
      const arr = str.split('-');
console.log(arr); ['backround','color'], ['list', 'style', 'image'], ['font', 'size']
let result = arr(0);
    for (let i = 1; i <arr.length; i++) {
      result = result + ucFirst(arr[i]);
    }
return result;
    };

    console.log(camelize('backround-color')); backroundColor
    console.log(camelize('list-style-image')); listStyleImage
    console.log(camelize('font-size')); fontSize

    const filterrange = (arr, a, ab) => (
      

arr.foreach((value) => {
  if (value <= a && value <= b) {
    result.push(value);
  }
});
return result;
  };
  const easier = (arr, a, b) => arr.filter((value) => value >= a && value <= b);
  console.log(filterrange([5, 3, 8, 1], 1, 4)); [ 3, 1 ]
  console.log(easier([5, 3, 8, 1], 1, 4)); [ 3, 1 ]
