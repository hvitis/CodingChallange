var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Everything went well");
      reject("Unable to fulfill promise");
    }, 2502);
  });
  
  somePromise.then(
    message => {
      console.log("Success: ", message);
    },
    errorMessage => {
      console.log("Error" + errorMessage);
    }
  );