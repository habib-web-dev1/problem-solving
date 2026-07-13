//str="listen" "silent"

function checkAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (map1[str1[i]] !== undefined) {
      map1[str1[i]] = map1[str1[i]] + 1;
    } else {
      map1[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (map2[str2[i]] !== undefined) {
      map2[str2[i]] = map2[str2[i]] + 1;
    } else {
      map2[str2[i]] = 1;
    }
  }
  for (let char in map1) {
    if (map1[char] !== map2[char]) {
      return false;
    }
  }
  return true;
}
let str1 = "listen";
let str2 = "silent";
console.log(checkAnagrams(str1, str2));
