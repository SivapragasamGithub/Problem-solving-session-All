function printRightAngledTriangle(n) {
    for (let row = 0; row < n; row++) {
      let arr = [];
      for (let col = 0; col < n; col++) {
        if(col <n-row-1 ){
        arr.push(" ");
      }
      else {
        arr.push("*")}}
      console.log(arr.join(""));
    }
  }
  printRightAngledTriangle(5)


  function printLeftAngledTriangle(n) {
    for (let row = 0; row < n; row++) {
      let arr = [];
      for (let col = 0; col < n; col++) {
        if (col < n - row - 1) {
          arr.push(" "); // Add space
        } else {
          arr.push("*"); // Add star
        }
      }
      console.log(arr.join(""));
    }
  }
  
  printLeftAngledTriangle(5);
  