const obj1 = {
    a: {
      b: {
        c: 1,
        d: 2
      },
      e: 3
    }
  };
  
  const obj2 = {
    a: {
      b: {
        c: 1,
        f: 4
      },
      e: 5
    }
};

function getLongestCommonAttributePath(obj1, obj2) {
    let longestPath = '';
    let maxLength = 0;
  
    function traverse(obj1, obj2, currentPath, length) {
      if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        if (length > maxLength) {
          longestPath = currentPath;
          maxLength = length;
        } else if (length === maxLength && currentPath < longestPath) {
          longestPath = currentPath;
        }
        return;
      }
  
      const keys1 = Object.keys(obj1);

      const keys2 = Object.keys(obj2);
  
  
      for (const key of keys1) {
        if (keys2.includes(key)) {
          traverse(obj1[key], obj2[key], currentPath + '.' + key, length + 1);
        }
      }
    }
  
    traverse(obj1, obj2, '', 0);
  
    return maxLength > 0 ? longestPath.slice(1) : '...';
  }
  
  console.log(getLongestCommonAttributePath(obj1,obj2))