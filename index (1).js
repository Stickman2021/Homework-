const Ucfirst = (str) => {
  return str[0].ToUpperCase() + str.slice()
  console.log(usFirst('peter')); peter
  console.log(usFirst('william')); william
  console.log(usFirst('rose')); rose
  console.log(usFirst('sarah')); sarah

  const checkspam = (str) => {
    const spam = ['sex', 'free', 'porn', 'viagra']
    const arr = str.split('');
    console.log(arr); ['buy', 'viagra', 'now']
    for (let i = 0; i <arr.length; i++) {
      const wordtocheck = arr[i];
      spam.foreach((spamword) => {
        if(spamwork.tolowercase() === wordtocheck.tolowercase()) {
          return true;
        }
      });
    }
    return false;
    checkspam('buy', 'VIAgRa', 'now'); false
    const truncate = (str, maxlength) => {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + '...';
  }
  return str;
};
console.log(truncate('hello world', 20)); hello world

const extractcurrencyvalue = (str) => {
return +str.slice(1);
};
console.log(typeof extractcurrencyvalue('$1000')); number


const fruits = ['apple', 'banana', 'orange'];
const Shoppingcart = Fruits;
Shoppingcart.push('pear');

console.log(Fruits.length); 3
console.log(Shoppingcart.length); 4

    const styles = ['jazz', 'blues']
    styles.push = ['rock-n-roll'];
    const index = math.floor(styles.length / 2);
    styles[index] = 'classics';
    console.log(Styles.splice(0, 1)) jazz
    styles.unshift(Rap);
    styles.unshift(Raggae);
    
    console.log(styles); ['Rap', 'Raggae', 'Classics', 'Rock-n-roll']

    const camelize = (str) => {
      const arr = str.split('-');
console.log(arr); ['backround','color'], ['list', 'style', 'image'], ['font', 'size']
let result = arr(0);
    for (let i = 1; i <arr.length; i++) {
      result = result + Ucfirst(arr[i]);
    }
return result;
    };

    console.log(camelize('backround-color')); backroundcolor
    console.log(camelize('list-style-image')); liststyleimage
    console.log(camelize('font-size')); fontsize

    const filterrange = (arr, a, ab) => (
      const result = [];

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
