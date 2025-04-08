const HashMap = function (num, load) {
  let map = new Array(num);
  for (let i = 0; i < map.length; i++) {
    map[i] = [];
  }

  let loadFactor = load;
  let capacity = map.length;
  let loadLimit = Math.round(loadFactor * capacity);

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  function set(key, value) {
    let hashCode = hash(key);
    let index = hashCode % capacity;

    if (map[index][0] === key) {
      map[index][1] = value;
    } else {
      map[index] = [key, value];
    }
    if (length() >= loadLimit) {
      doubleCapacity();
      console.log(`Load limit exceeded! Doubling map size to ${capacity}.`);
    }
  }

  function get(key) {
    let hashCode = hash(key);
    let index = hashCode % capacity;

    if (map[index][0] === key) {
      return map[index][1];
    } else {
      return null;
    }
  }

  function has(key) {
    let hashCode = hash(key);
    let index = hashCode % capacity;

    if (map[index][0] === key) {
      return true;
    } else {
      return false;
    }
  }

  function remove(key) {
    let index = hash(key) % capacity;

    if (map[index][0] === key) {
      map[index] = [];
      return true;
    } else {
      return false;
    }
  }

  function length() {
    let count = 0;
    for (let i = 0; i < map.length; i++) {
      if (map[i][0]) count++;
    }
    return count;
  }

  function clear() {
    for (let i = 0; i < map.length; i++) {
      if (map[i][0]) {
        map[i] = [];
      }
    }
  }

  function keys() {
    let result = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i][0]) {
        result.push(map[i][0]);
      }
    }
    return result;
  }

  function values() {
    let result = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i][0]) {
        result.push(map[i][1]);
      }
    }
    return result;
  }

  function entries() {
    let result = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i][0]) {
        result.push([map[i][0], map[i][1]]);
      }
    }
    return result;
  }

  function print() {
    console.log(map);
    console.log(
      `Capacity: ${capacity}, LoadFactor: ${loadFactor}, CurrentLoadFactor: ${(
        length() / capacity
      ).toFixed(1)}, LoadLimit: ${loadLimit}, Keys: ${length()}`
    );
  }

  function doubleCapacity() {
    let temp = map;
    map = new Array(temp.length * 2);
    capacity = map.length;
    loadLimit = Math.round(loadFactor * capacity);

    for (let i = 0; i < map.length; i++) {
      map[i] = [];
    }
    for (let i = 0; i < temp.length; i++) {
      if (temp[i][0]) {
        set(temp[i][0], temp[i][1]);
      }
    }
  }

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    print,
  };
};

let test = new HashMap(12, 0.75);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
// test.set("ice cream", "white");
// test.set("jacket", "blue");
// test.set("kite", "pink");
// test.set("lion", "golden");
// test.set("sacascasasddn", "silver");
// test.set("a", "pinsadk");
// test.set("aias", "pinsadk");
// test.set("jerry", "asd");
// test.set("jericho", "asd");
// test.set("theroy", "asd");
// test.set("leroy", "asd");
// test.set("nerd", "asd");
// test.set("batman", "asd");
// test.set("superman", "asd");
// test.set("maharajaa", "asd");
// test.set("aranikosss", "asd");
// test.set("IamDAu12", "asd");

test.print();
