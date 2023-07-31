function longestCommonAttributePath(obj1, obj2) {
    const memo = new Map(); // Sử dụng Map để lưu trữ kết quả đã tính toán trước đó.
  
    function findAttributePaths(obj, prefix = '', paths = []) {
      const memoKey = JSON.stringify(obj); // Tạo một key từ đối tượng để sử dụng làm key trong Map memo.
      if (memo.has(memoKey)) {
        return memo.get(memoKey);
      }
  
      for (const key in obj) {
        const fullPath = prefix + key;
        paths.push(fullPath);
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          findAttributePaths(obj[key], fullPath + '.', paths);
        }
      }
      memo.set(memoKey, paths); // Lưu kết quả vào Map memo.
      return paths;
    }
  
    const path1 = findAttributePaths(obj1);
    
    const path2 = findAttributePaths(obj2);
  
    let longestPath = '';
    for (const path of path1) {
      if (path2.includes(path) && path.length > longestPath.length) {
        longestPath = path;
      }
    }
  
    return longestPath;
  }
  
  // Example usage:
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
  
  const commonPath = longestCommonAttributePath(obj1, obj2);
  console.log('Longest Common Attribute Path:', commonPath);
  