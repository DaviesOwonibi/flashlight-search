export function stringSearch(substring: string, array: string[]): string[] {
  // Convert substring to lowercase for case-insensitive search
  substring = substring.toLowerCase();

  const matches: string[] = [];
  for (let i = 0; i < array.length; i++) {
    const lowercasedString = array[i].toLowerCase();
    let found = false;
    for (let j = 0; j <= lowercasedString.length - substring.length; j++) {
      let match = true;
      for (let k = 0; k < substring.length; k++) {
        if (lowercasedString[j + k] !== substring[k]) {
          match = false;
          break;
        }
      }
      if (match) {
        matches.push(array[i]);
        found = true;
        break;
      }
    }
  }
  return matches;
}

export function numberSearch(target: number, array: number[]): number[] {
  let left: number = 0;
  let right: number = array.length - 1;
  let matches: number[] = [];

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (array[mid] > target) {
      right = mid - 1;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      // Find the leftmost and rightmost indices of the target value
      let start = mid;
      let end = mid;

      // Move left to find the leftmost index
      while (start > left && array[start - 1] === target) {
        start--;
      }

      // Move right to find the rightmost index
      while (end < right && array[end + 1] === target) {
        end++;
      }

      // Add all indices of the target value to the matches array
      for (let i = start; i <= end; i++) {
        matches.push(i);
      }

      break; // Since the array is sorted, we can stop searching once we find all matches
    }
  }

  return matches;
}
