// Arrays and it's Operations
      let a = [1,2,3,4];

      let b = a.map(n => n*2);
      console.log("B array multiplied by 2 : "+b); // Map

      let c = a.filter(n => (n*2) < 2);
      console.log("C array filtered from A : "+c); // Filter

      let d = a.reduce((acc , cur) => acc * cur, 1);
      console.log("D value Reduced from A : "+d); // Reduce                                                                           

      let [A,B] = a;
      console.log("Destructuring : "+ (A + B)); // Destructuring  

      const arr = [1, 2, 3, 4, 5];
      const [first, second, ...rest] = arr;
      console.log(first); // 1
      console.log(second); // 2
      console.log(rest);  // [3, 4, 5]  // Rest operator

      const arr1 = [1, 2, 3];
      const arr2 = [4, 5];
      const combined = [...arr1, ...arr2];
      console.log(combined); // [1, 2, 3, 4, 5]  // Spread operator

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(res => {
          res.forEach(element => {
            console.log(element.id)
          }); // first post id
      })
      .catch(err => console.error("there is something wrong"));

  // Strings

      let s = "My name is Midhun"
      console.log(s);

      console.log("first");
      Promise.resolve().then(console.log("from promises"));
      setTimeout(()=>{
        console.log("Inside timeout");
      },2000);
      console.log("Last");