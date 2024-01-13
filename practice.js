//   <!-- Filter Table -->
// <!-- <!DOCTYPE html>
// <html>
//   <head>
//     <title>Hello, World!</title>
//     <link rel="stylesheet" href="styles.css" />
//   </head>
//   <body>
//     <input type="text" onkeyup="filterTable()" id="input" placeholder="Search Here" />
//     <table id="table">
//       <tr>
//         <th>Name</th>
//         <th>Address</th>
//       </tr>
//       <tr>
//         <td>Ram</td>
//         <td>Ayodhya</td>
//       </tr>
//        <tr>
//         <td>Shayam</td>
//         <td>Banaras</td>
//       </tr>
      
      
//     </table>
      
//       <script>
//         function filterTable(){
//           const input=document.getElementById("input").value.toUpperCase();
//           const table=document.getElementById("table");
//           const tr=table.getElementsByTagName("tr");
//           for(var i=0; i<tr.length; i++){
//             const td=tr[i].getElementsByTagName("td")[0];
//             if(td){
//               let txtValue=td.textContent || td.innerHTML;
//               if(txtValue.toUpperCase().indexOf(input)>-1){
//                 tr[i].style.display="";
//               }else{
//                 tr[i].style.display="none";
//               }
//             }
//           }
        
//         }
        
//       </script>
//   </body>
// </html> -->

// <!-- // Image Corousal -->
// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Image Slider</title>
//     <style>
//         #slider {
//             max-width: 400px;
//             margin: auto;
//             overflow: hidden;
//         }

//         #slider img {
//             width: 100%;
//             display: none;
//             height: 400px;
//         }
//     </style>
// </head>
// <body>
//     <div id="slider">
//         <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" alt="Image 1">
//         <img src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg" alt="Image 2">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1g7A95N1o9m3gnXl8prj8kI48p-GNc-sgHOQLOqtdzV3wWfpbFzScwY1fJMpIdzeaSc&usqp=CAU" alt="Image 3">
//     </div>
//     <button onclick="prevSlide()">Previous</button>
//     <button onclick="nextSlide()">Next</button>

//     <script>
//         document.addEventListener("DOMContentLoaded", function () {
//             // Get references to HTML elements
//             const sliderContainer = document.getElementById("slider");
//             const images = document.querySelectorAll("#slider img");

//             // Initialize index to track the current image
//             let currentIndex = 0;

//             // Function to show the current image
//             function showImage(index) {
//                 // Hide all images
//                 images.forEach((img) => (img.style.display = "none"));

//                 // Show the image at the specified index
//                 images[index].style.display = "block";
//             }

//             // Function to handle "Previous" button click
//             window.prevSlide = function() {
//                 currentIndex = (currentIndex - 1 + images.length) % images.length;
//                 showImage(currentIndex);
//             };

//             // Function to handle "Next" button click
//             window.nextSlide = function() {
//                 currentIndex = (currentIndex + 1) % images.length;
//                 showImage(currentIndex);
//             };

//             // Show the initial image
//             showImage(currentIndex);
//         });
//     </script>
// </body>
// </html> -->

// <!-- To  Do List

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Todo list</title>
//     <style>
//     *{
//     margin:0;
//     padding: 0;
//     box-sizing: border-box;
// }

// body{
//     background: rgb(131,58,180);
//     background: linear-gradient(90deg, rgb(199, 183, 211) 0%, rgb(216, 124, 124) 50%, rgba(252,176,69,1) 100%);

//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// }

// .container{
//     width: 400px;
//     border: 1px solid black;
//     height: auto;
//     background-color: white;
//     border-radius: 5px;
//     border:none;
//     height:50vh;
//     overflow: hidden;
//     /* height:5rem; */


//     display: flex;
//     flex-direction: column;
//     align-items: center;
    
// }
// #input-box{
//     width: 250px;
//     padding: 10px 16px;
//     font-size: large;
//     border:none;
//     background-color: antiquewhite;
// }

// #btn{
//     padding: 10px 16px;
//     font-size: large;
//     background-color: lightcoral;
//     border-radius: 4px;
//     border: none;
// }

// li{
//     list-style: none;
//     border:1px solid black;
//     padding:5px;
//     width:350px;
//      border-radius:4px ;
//      border: none;
//      background-color: antiquewhite;
//      margin-top: 10px;
//      margin-bottom: 5px;
//      position: relative;
// }



// li span{
//     position: absolute;
//     right: 0px;
// }

// .completed {
//     text-decoration: line-through;
// }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <h2>To-Do list</h2>
//         <div class="row">
//             <input type="text" id="input-box" placeholder="add your list">
//             <button id="btn" onclick="addTask()">Add</button>
//         </div>

//         <ul id="list-container">
//             <!-- <li>task1</li>
//             <li>task2</li>
//             <li>task3</li> -->

// <!-- 
//         </ul>
//     </div>
//     <script>
//     const input = document.getElementById('input-box');
// const listContainer = document.getElementById('list-container');

//         function addTask() {
//             if (input.value === '') {
//                 alert("You must write something");
//             } else {
//                 let li = document.createElement('li');
//                 li.innerHTML = input.value;
//                 listContainer.appendChild(li);

//                 let span = document.createElement('span');
//                 span.innerHTML = "❌";
//                 li.appendChild(span);

//                 li.addEventListener("click", function () {
//                     li.classList.toggle("completed");
//                 });
//             }
//             input.value = '';
//         }

//         listContainer.addEventListener("click", function (e) {
//             if (e.target.tagName === "SPAN") {
                
//                 e.target.parentNode.remove();
//             }
//         }, false);

//         input.addEventListener("keypress", function (e) {
      
//             if (e.key === 'Enter') {
//                 addTask();
//             }
//         });

    
//     </script>
// </body>
// </html> --> 