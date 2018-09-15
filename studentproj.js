/*
  student: Ishmael Sunday | http://ishmaelsunday.com
  Course: Code 201: Software Development and Application Foundatmental 
  Schoool: Code Partners | https://codepartners.net 
  Project: Object Oriented Model for a Cookie Store
  */

 //first we create an empty array
 let studentArray = [];

 let elStudents = document.getElementById('student-info-container');
 //let create an object constructor functnion
  let Student =  function( name, major, level, age) {
    this.name = name;
    this.major = major;
    this.level = level;
    this.age = age;
  };

  //now lets instantiate/ create instances of our object
  let Jose = new Student('Jose', 'General', 'Master', 5);
  let Koko = new Student('Koko', 'General', 'Master', 4);
  let Spota = new Student('Spota', 'Gerenal', 'Master', 2);
  let Foura = new Student('Foura', 'General', 'Master', 3);

  //Now lets push this instances into our empty array in line 9 using push method.
  studentArray.push(Jose, Koko, Spota, Foura);

  //let create a function that populate our site with student info
  function displaystudents(){
    //let create an unorder list element
    let ulEl = document.createElement('ul');// ul element created

    //let append/put this element in our body container.
    elStudents.appendChild(ulEl); //ul element is in.


    for(let i = 0; i < studentArray.length; i++) {

      //next let create a li element(list element).
    let listEl = document.createElement('li'); //li element created
     //let append/put that in the ul element
     ulEl.appendChild(listEl);

    listEl.innerHTML = studentArray[i].name;
    }  
  }
displaystudents() 



