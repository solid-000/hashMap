const HashMap = function () {
  let map = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let loadFactor = 0.8;
  let capacity = map.length;

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
  }

  function get(key) {
    let hashCode = hash(key);
    let index = hashCode % capacity;

    if (map[index][0] === key) {
      console.log(map[index][1]);
    } else {
      console.log(null);
    }
  }

  function has(key) {
    let hashCode = hash(key);
    let index = hashCode % capacity;

    if (map[index][0] === key) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  function remove(key) {
    let index = hash(key) % capacity;

    if (map[index][0] === key) {
      map[index] = index;
      console.log(true);
    } else {
      console.log(false);
    }
  }

  function length() {
    let count = 0;
    for (let i = 0; i < map.length; i++) {
      if (map[i][0]) count++;
    }
    console.log(count);
  }

  function clear() {
    for (let i = 0; i < map.length; i++) {
      if (map[i][0]) {
        map[i] = i;
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
    console.log(result);
  }

  function values() {
    let result = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i][0]) {
        result.push(map[i][1]);
      }
    }
    console.log(result);
  }

  function entries() {
    let result = [];
    for (let i = 0; i < map.length; i++) {
      if (map[i][0]) {
        result.push([map[i][0], map[i][1]]);
      }
    }
    console.log(result);
  }

  function print() {
    console.log(map);
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

let newMap = new HashMap();
newMap.set("game", "on");
newMap.set("raiden", "solid");

newMap.print();
