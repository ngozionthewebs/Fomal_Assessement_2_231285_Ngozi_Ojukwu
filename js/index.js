let studentInfo = [];

register = () => {

    let firstName = document.getElementById("first").value;

    let lastName = document.getElementById("last").value;

    let studentNumber = document.getElementById("number").value;

    let choiceOne = document.getElementById("subOne").value;

    let choiceTwo = document.getElementById("subTwo").value;

    let studentYear = document.getElementsByName("baseRadio");
    let yearValue;
    
    for (let i = 0; i < studentYear.length; i++) {
      if (studentYear[i].checked) {
        yearValue = studentYear[i].value;
      
      }
    }
    
    console.log(studentInfo);



    studentInfo.push({
        studentName: firstName ,
        studentLast: lastName,
        studentNo: studentNumber,
        year:yearValue,
        subChoiceOne: choiceOne ,
        subChoiceTwo: choiceTwo

        
    })

    


}

showStudent = () => {

    let output = document.getElementById("studentOut");
    let stuDetails = document.getElementById("infomation");

    for( let i = 0; i < studentInfo.length; i++){

        let personName = studentInfo[i].firstName
        let last = studentInfo[i].lastName
        let number=studentInfo[i].studentNumber
        let gradeYear =studentInfo[i].yearValue
        let subjectOne = studentInfo[i].choiceOne
        let subjectTwo = studentInfo[i].choiceTwo

        output.innerHTML = ""

        output.innerHTML +=`

        <div class="col-4">
            <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">${personName}${last}</h5>
                <p>Student Number: ${number}{</p>
                <p>Year: ${gradeYear}</p>
                <p>Choice One:${subjectOne}/p>
                <p>Choice Two: ${subjectTwo}</p>
              </div>
            </div>
          </div>


        
        
        `




        
    
    }



}
