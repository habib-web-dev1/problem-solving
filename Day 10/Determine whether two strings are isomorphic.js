function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapS = {};
  const mapT = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapS[charS] !== undefined) {
      if (mapS[charS] !== charT) {
        return false;
      }
    } else {
      mapS[charS] = charT;
    }

    if (mapT[charT] !== undefined) {
      if (mapT[charT] !== charS) {
        return false;
      }
    } else {
      mapT[charT] = charS;
    }
  }

  return true;
}

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("ab", "aa"));
