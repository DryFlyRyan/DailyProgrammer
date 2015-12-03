var stringMatch = function(string1, string2) {
  var remove = string2;
  for (var i = 0; i < string2.length; i++) {
    if (letter === string2[i]) {
      remove = remove.splice(i, 1);
    }
  }
  return false;
};

var lengthCheck = function (string1, string2) {
  if (string1.length > string2.length || string1.length < string2.length) {
    return false;
  }
};

var isAnagram = function(string1, array) {
  var origString1 = string1;
  var origString2;
  string1 = string1.toLowerCase().split('');
  var string2;
  for (x = 0; x < array.length; x++) {
    origString2 = array[x];
    console.log(origString2);
    string2 = array[x].toLowerCase().split('');
    if (!lengthCheck(string1, string2)) {
      console.log(string1 + ' & ' + string2 + "are not anagrams!");
    } else {
      stringMatch(string1, string2);
    }


    console.log(origString1 + ' & ' + origString2 + "are anagrams!");
    return true;
    }
  };



isAnagram("examples", ["pameesxl", "woamxapl", "emaplsic"]);
