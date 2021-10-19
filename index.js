const capitalizeWord = (word, i) => {
  if (i === 0) return Formatter.capitalize(word);
  else if (EXCEPTIONS.some((exception) => word === exception)) return word;
  else return Formatter.capitalize(word);
};

class Formatter {
  
  static capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  static sanitize(string) {
    return string.split("").filter(char => char.match(/[a-zA-Z0-9' -]/)).join("");
  }

  static titleize(string) {
    const EXCEPTIONS = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const capitalizeWord = (word, i) => {
      if (i === 0) return Formatter.capitalize(word);
      else if (EXCEPTIONS.some((exception) => word === exception)) return word;
      else return Formatter.capitalize(word);
    };
    return string.split(" ").map(capitalizeWord).join(" ");
  }
}
