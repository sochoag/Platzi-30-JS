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
