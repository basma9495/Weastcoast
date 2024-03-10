const courseList= document.querySelector('#courses');
const inputName= document.querySelector('#name');
const form= document.querySelector('#demoForm');
 
function initPage() {
    listCourses();
}
async function listCourses() {
    const courses= await fetchCourses();
    courses.forEach((course) => {
        console.log(course);
        courseList.innerHTML += `<div>
        <span>${course.title}</span>
        <span>Kursnummer: ${course.number}</span>
        <span>Antal dagar: ${course.duration}</span>
        <span>Ort: ${course.type}</span>
        <span>Datum: ${course.date}</span>
        
        </div>`;
    });
   
}
 
async function fetchCourses(){
    try{
        const response= await fetch('http://localhost:3000/courses');
 
        if (response.ok) {
            const result= await response.json();
            return result;
           
           
        }else{
            console.log(response.status);
        }
    } catch(error){
       
        console.log(error);
    }
}
 
function saveHandler(e){
    e.preventDefault();
console.log('Save');
const name= inputName.value;
console.log(name);
 
inputName.value='Nisse';
 
const student= {
    name: inputName.value
}
 
console.log(student);
}
 
document.addEventListener('DOMContentLoaded', initPage);
form.addEventListener('submit', saveHandler);