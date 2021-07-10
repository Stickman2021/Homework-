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
console.log(truncate('hello world', 20)); hello wor

