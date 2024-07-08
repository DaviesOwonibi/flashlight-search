# Flashlight

Flashlight is an NPM package designed to help "illuminate" what a user is searching for, where it be a substring within an array of strings or a number in a large array of numbers. It provides an efficient way to find all occurrences of a given substring within the provided array, supporting case-insensitive searches.

## Features

- Case-insensitive substring search
- Returns the indices of matching elements
- Easy-to-use API

## Installation

To install Flashlight, you can use npm or yarn:

```sh
npm install flashlight-search
```

## Usage

Here is a simple example demonstrating how to use Flashlight:

```typescript
import { search } from "flashlight-search";

const movies = [
  "Into the future",
  "The Shawshank Redemption",
  "The Godfather",
  "Pulp Fiction",
  "The Dark Knight",
  "Forrest Gump",
  "The Matrix",
  "Inception",
  "Goodfellas",
  "Fight Club",
  "Schindler's List",
  "The Lord of the Rings",
  "Star Wars",
];

const input = "in";
const results = search(input, movies);
console.log("Movies found: ", results);
```

## API

### `search(substring: string, array: string[]): number[]`

Searches for a substring within an array of strings and returns the indices of the matching elements.

#### Parameters

- `substring` (string): The substring to search for.
- `array` (string[]): The array of strings to search within.

#### Returns

- `number[]`: An array of indices where the substring was found.

## License

This project is licensed under the MIT License.

---

For any issues or contributions, please feel free to open a pull request or file an issue on the [GitHub repository](https://github.com/DaviesOwonibi/flashlight).
