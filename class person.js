class Person() {
    constructor (
        personName = "Dhoni";
        age = "25";
        email = "example@gmail.com"
        Phoneno = "8846221974";
        streetname ="RK street";
        area = "Ratha negar";
        city = "chrompt";
        distrect ="chennai";
        higherqulaification = "Dme";
        schoolName = "GHSS",
        sslcMark = "467/500",
        sslcYearOfCompletion = "2014",
        hscMark = "1090/1200",
        placeOfSchool = "Theni",
        hscYearOfCompletion = "2016",
        collegeName = "Engineering College",
        department = "Computer Science",
        batch = "2016-2020",
        cgpa = "6.86",
        university = "Anna University",
        placeOfCollege = "Chennai",
        technicalSkills = "JavaScript",
        companyName = "IBM",
        job = "software Developer",
        workExperience = "2 years"
  ) {
    this.personName = personName;
    this.age = age;
    this.email = email;
    this.mobileNo = mobileNo;
    this.streetName = streetName;
    this.area = area;
    this.city = city;
    this.district = district;
    this.highestQualification = highestQualification;
    this.schoolName = schoolName;
    this.placeOfSchool = placeOfSchool;
    this.sslcMark = sslcMark;
    this.sslcYearOfCompletion = sslcYearOfCompletion;
    this.hscMark = hscMark;
    this.hscYearOfCompletion = hscYearOfCompletion;
    this.collegeName = collegeName;
    this.placeOfCollege = placeOfCollege;
    this.batch = batch;
    this.department = department;
    this.cgpa = cgpa;
    this.university = university;
    this.technicalSkills = technicalSkills;
    this.companyName = companyName;
    this.job = job;
    this.workExperience = workExperience;
  }

    
}
   
    displayPersonalINFO(){
        console.log(
    
            // -----Personal details ------////
                 
                 `Name ===>${this.name},
                  age    ===>${this.age},
                  email ===>${this.email},
                  mobileNo ===>${this.mobileNo},`
            );
            console.log(
                Address :
                `street Name ===>${this.street},
                 area ===>${this.area},
                 city ===>${this.city},
                 district ===>${this.district}`,
            );
    }
    displaySchoolDetails() {
        console.log(
          `::::::: SCHOOL DETAILS :::::::
    
          School Name => ${this.schoolName},
          City => ${this.placeOfSchool},
          10th MARK => ${this.sslcMark} ,
          10th year of Completion => ${this.sslcYearOfCompletion},
          12th MARK: ${this.hscMark} ,
          12th year of Completion: ${this.hscYearOfCompletion}.
          `
        );
      }
      displayCollegeDetails() {
        console.log(
          `:::::: COLLEGE DETAILS ::::::
          
          College Name => ${this.collegeName},
          city => ${this.placeOfCollege},
          Batch => ${this.batch},
          Department => ${this.department},
          CGPA or grade => ${this.cgpa},
          University => ${this.university}.
          `
        );
      }
      displayWorkDetails() {
        console.log(
          `:::::: WORK DETAILS ::::::
          
          Company Name => ${this.companyName},
          job => ${this.job},
          Working Experience => ${this.workExperience}.
          `
        );
      }
    const Persondetails = new Person(
        "abdulla",
        "22",
        "8876432196",
        "abdullamohamed406@gmail.com",
        "dme",
        "BBHSS scholl",
        "400/500",
        "900/1200",
        "polytecnic collage",
        "2018-2020",
        "Diplamo in mechanical Engineering",
        "Tvs company",
        "Quality inspection",
        "2 years"
);
// console.log(person1Details);
// console.log(new Person());

const person2details = new Person();
// person2details.displaySchoolDetails();
// person2details.displayPersonalInfo();
// person2details.displayCollegeDetails();
person2details.displayWorkDetails();

          
          
        

