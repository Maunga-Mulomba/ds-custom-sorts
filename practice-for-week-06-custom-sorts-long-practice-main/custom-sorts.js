function ageSort(users) {
  let sortedUsers = users.sort((user1, user2) => user1.age - user2.age);
  return sortedUsers;
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    // odd then even --> odd first
    if (a % 2 === 1 && b % 2 === 0) {
      return -1;
    }

    // even then odd
    if (a % 2 === 0 && b % 2 === 1) {
      return 1;
    }

    // even then even or odd then odd
    return a - b;
  });
}

function validAnagrams(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
}

function reverseBaseSort(arr) {
  // Your code here
  let numOfDigits = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    const numberString = num.toString();
    numOfDigits[num] = numberString.length;
  }

  return arr.sort((a, b) => {
    if (numOfDigits[a] < numOfDigits[b]) {
      return 1;
    }

    if (numOfDigits[a] > numOfDigits[b]) {
      return -1;
    }

    return a - b;
  });
}

function frequencySort(arr) {
  // Your code here
  let numberFrequency = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (numberFrequency[num]) {
      numberFrequency[num] += 1;
    } else {
      numberFrequency[num] = 1;
    }
  }

  return arr.sort((a, b) => {
    if (numberFrequency[a] < numberFrequency[b]) {
      return -1;
    }

    if (numberFrequency[a] > numberFrequency[b]) {
      return 1;
    }

    return b - a;
  });
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
