//mockAPI endpoint URL
const URL =
  "https://62c85d578c90491c2cb47da3.mockapi.io/Promineo_Tech_API/food"; // uses MockAPI
// const URL = "http://127.0.0.1:3001/food"; //uses MockoonAPI
// const LocalPC = "192.168.50.56"; //local pc ip address
// const URL = " http://192.168.50.56:3000/food"; //uses json-server
let originalFoodArray = [];
//ajax get request from URL
function getFoodListFromURL() {
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data);
}
getFoodListFromURL();

//crud create using jquery
function createFoodGroup(foodGroup) {
  //log the food group to be created
  console.log("createFoodGroup function displays foodGroup data:", foodGroup);

  //add id to foodGroup object
  foodGroup.id = originalFoodArray.length + 1;

  console.log(
    "createFoodGroup function displays originalFoodListData:",
    originalFoodArray
  );
  originalFoodArray.push(foodGroup); //push the food group to the original food array
  console.log("after push", originalFoodArray); //log the original food array
  console.log("specific foods:", originalFoodArray[3]);
  //log the original food list data
  for (let i = 0; i < originalFoodArray.length; i++) {
    //return the ajax request
    console.log(
      "at current index)",
      i,
      "originalFoodListData in For loop:",
      originalFoodArray[i]
    );
    let myPostRequest = $.ajax({
      url: URL, //pass the url of the food group to be created
      data: JSON.stringify(foodGroup), //pass the food group to be created
      //pass each object to the api
      // data: JSON.stringify({ foodName: originalFoodArray[i].foodName }), //pass the food group to be created
      dataType: "json", //set the data type to be json
      type: "POST", //set the type of request to be a post request
      contentType: "application/json", //set the content type to be json
      crossDomain: true, //set the cross domain to be true
    });
    console.log(myPostRequest);
    return myPostRequest;
  }
}

//crud read using jquery
function getFoodList() {
  return $.get(URL); //get the list of food groups from the url
}

//crud update using jquery
function updateFoodGroup(foodGroupData) {
  foodId = parseInt(foodGroupData.id); //ensure the id is an integer
  newFoodName = foodGroupData.foodName; //get the new food name value
  console.log("updateFoodGroup food name ID:", foodId); //log the id of the food group to be updated
  console.log("updateFoodGroup food name:", newFoodName); //log the new food group name

  //return the ajax request
  return $.ajax({
    url: `${URL}/${foodId}`, //pass the id of the food group to be updated
    dataType: "json", //set the data type to be json
    data: JSON.stringify({ foodName: newFoodName }), //pass the food group to be updated
    contentType: "application/json", //set the content type to be json
    crossDomain: true, //set the cross domain to be true
    type: "PUT", //set the type of request to be a put request
  });
}

//crud delete using jquery
function deleteFoodGroup(id) {
  console.log("deleteFoodGroup food name ID:", parseInt(id.id)); //log the id of the food group to be deleted

  //return the ajax request
  return $.ajax({
    url: `${URL}/${parseInt(id.id)}`, //pass the id of the food group to be deleted
    type: "DELETE", //set the type of request to be a delete request
  });
}

let foodContainer = document.getElementById("food-container"); //get the food container by its id

//return value from getFoodList()
let getFoods = getFoodList().then((foodList) => {
  //push FoodList to the originalFoodArray
  console.log("foodList data:", foodList);
  //loop through each foodList item and push to the originalFoodArray
  for (let i = 0; i < foodList.length; i++) {
    originalFoodArray.push(foodList[i]);
  }

  console.log("In get response after push foodList items:", originalFoodArray);

  //get the list of food groups from the url
  //getFoodList() returns a promise
  foodContainer.innerHTML = "";

  //logs each food item to the console.
  console.log("CRUD Read - FoodList:", foodList);
  //console.log specific object in the array

  //loop through the food list
  for (let i = 0; i < foodList.length; i++) {
    foodContainer.innerHTML += `${foodList[i].id}) ${foodList[i].foodName}<br />`; // inserts each food item into the food container.
  }
});

//create a new food group from form add-food-form
let addFoodForm = document.getElementById("add-food-form");
console.log("addFoodForm:", addFoodForm);
//get value from addFoodForm on submit
addFoodForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent the default action of the form from happening
  let foodName = document.getElementById("food-name").value; //get the value of the food name from the form
  let foodGroup = {
    //create a new food group object
    foodName: foodName, //set the food name to the value of the food name from the form
  };
  console.log("CRUD Create - FoodGroup:", foodGroup);

  //createFoodGroup(foodGroup) returns a promise
  createFoodGroup(foodGroup).then((foodGroup) => {
    //createFoodGroup() returns a promise
    console.log("CRUD Create - FoodGroup:", foodGroup);
    console.log("FoodList:", originalFoodArray);

    //getFoodList() returns a promise
    getFoodList()
      .then((foodList) => {
        //getFoodList() returns a promise
        foodContainer.innerHTML = "";
        //logs each food item to the console.
        console.log("CRUD Read - FoodList:", foodList);
        //loop through the food list
        for (let i = 0; i < foodList.length; i++) {
          foodContainer.innerHTML += `${foodList[i].id}) ${foodList[i].foodName}<br />`; // inserts each food item into the food container.
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  });
});

//delete a food group from form food-name-delete
let deleteFoodForm = document.getElementById("delete-food-form");
console.log("deleteFoodForm:", deleteFoodForm);
//delete food group by id from form food-name-delete
deleteFoodForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent the default action of the form from happening
  let id = document.getElementById("food-name-delete").value; //get the value of the food name from the form
  let foodGroup = {
    //create a new food group object
    id: id, //set the food name to the value of the food name from the form
  };
  console.log("CRUD Delete - FoodGroup:", id);

  //deleteFoodGroup(foodGroup) returns a promise
  deleteFoodGroup(foodGroup).then((foodGroup) => {
    //deleteFoodGroup() returns a promise
    console.log("CRUD Delete - FoodGroup:", parseInt(foodGroup));

    //getFoodList() returns a promise
    getFoodList()
      .then((foodList) => {
        //getFoodList() returns a promise
        foodContainer.innerHTML = "";
        //logs each food item to the console.
        console.log("CRUD Read - FoodList:", foodList);
        //loop through the food list
        for (let i = 0; i < foodList.length; i++) {
          foodContainer.innerHTML += `${foodList[i].id}) ${foodList[i].foodName}<br />`; // inserts each food item into the food container.
        }
      })
      .catch((err) => {
        console.log("Error your food is broken:", err);
      });
  });
});

//update a food group from form food-name-update
let updateFoodForm = document.getElementById("update-food-form");
console.log("updateFoodForm:", updateFoodForm);

//update food group by id from form food-name-update
updateFoodForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent the default action of the form from happening
  let id = document.getElementById("food-name-id").value; //get the value of the food name from the form
  let foodName = document.getElementById("food-name-update-name").value; //get the value of the food name from the form
  let foodGroup = {
    //create a new food group object
    id: id, //set the food name to the value of the food name from the form
    foodName: foodName, //set the food name to the value of the food name from the form
  };
  console.log("CRUD Update - FoodGroup:", foodGroup);

  //updateFoodGroup(foodGroup) returns a promise
  updateFoodGroup(foodGroup).then((foodGroup) => {
    //updateFoodGroup() returns a promise
    console.log("CRUD Update - FoodGroup:", foodGroup);

    //getFoodList() returns a promise
    getFoodList()
      .then((foodList) => {
        //getFoodList() returns a promise
        foodContainer.innerHTML = "";
        //logs each food item to the console.
        console.log("CRUD Read - FoodList:", foodList);
        //loop through the food list
        for (let i = 0; i < foodList.length; i++) {
          foodContainer.innerHTML += `${foodList[i].id}) ${foodList[i].foodName}<br />`; // inserts each food item into the food container.
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  });
});
