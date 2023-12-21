function task1() {
  return new Promise((resolve, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        failure("ERROR 1");
      } else {
        resolve("TASK 1 DONE");
      }
    }, 2000);
  });
}

function task2() {
  return new Promise((resolve, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        failure("ERROR 2");
      } else {
        resolve("TASK 2 DONE");
      }
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        failure("ERROR 3");
      } else {
        resolve("TASK 3 DONE");
      }
    }, 2000);
  });
}

//////////////////////////////////////////

// all()
async function all() {
  try {
    const response = await Promise.all([task1(), task2(), task3()]);
    console.log("All tasks completed:", response);
  } catch (error) {
    console.error("Error:", error);
  }
}

// any()
async function any() {
  return Promise.any([task1(), task2(), task3()])
    .then((response) => {
      console.log("All tasks completed:", response);
      return response;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// allSettled()
function allSettled() {
  const promises = [task1(), task2(), task3()];
  Promise.allSettled(promises)
    .then((results) => console.log(results))
    .catch((error) => {
      console.log("Error:", error);
    });
}

// finally()
function finaly() {
  any()
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("Experiment Completed");
    });
}

// any()
// all()
// allSettled()
// finaly()

