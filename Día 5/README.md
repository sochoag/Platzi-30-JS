# 🛡️🛡️🛡️Escudo anti spoilers🛡️🛡️🛡️

## Encuentra el mayor palindromo

![Spoiler Shield](https://livecodestream.dev/post/programming-memes/1_hu04f127da47abcc75c8958c18739e45ec_1603421_700x0_resize_q90_h2_lanczos_3.webp)

```js
export function findLargestPalindrome(words) {
  // Tu código aquí 👈
  const reversedWord = words.map((ele) => ele.split("").reverse().join(""));
  const palindromes = [];
  let result;

  for (let i = 0; i < words.length; i++) {
    if (words[i] == reversedWord[i]) {
      palindromes.push(words[i]);
    }
  }

  if (palindromes.length > 0) {
    const maxLength = Math.max(...palindromes.map((ele) => ele.length));
    for (let ele of palindromes) {
      if (ele.length == maxLength) {
        return ele;
      }
    }
  }
  return null;
}

console.log(findLargestPalindrome(["racecar", "level", "world", "hello"]));

console.log(findLargestPalindrome(["Platzi", "javascript", "html", "css"]));
```
