var slider = document.getElementById("myRange");
const grid_div = null;  

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  const gridValue = this.value;
   document.getElementById("gridcontainer").innerHTML = "";
 document.getElementById("gridValue").innerHTML = gridValue.concat(" x ",gridValue) ;
 displayGrid(gridValue);


}

function displayGrid(gridValue){
 const color = document.getElementById("favcolor").value;
  const grid = document.querySelector("#gridcontainer");  
  for(let row = 1;row<=gridValue;row++ ){
    for(let j = 1;j<=gridValue;j++){
    const grid_div = document.createElement('div');
    grid_div.classList.add("grid_div");
    //grid_div.textContent = row ;
    grid.setAttribute('style','grid-template-columns: repeat('+gridValue+', 1fr);') ;     
    grid_div.setAttribute("onclick","fillColor(this);");
    grid_div.setAttribute('style','border: 1px solid black;text-align: center;font-size: 10px;') ;    
    grid.appendChild(grid_div);
  }
  }
}

//this function will fill color in grid/div
function fillColor(val) {   
        var color = document.getElementById("favcolor").value;
        val.style.backgroundColor = color;
}
  
//clear the grid
clear_btn.onclick = function(){
    const grid_div = document.getElementsByClassName('grid_div');
    for (i = 0; i < grid_div.length ; i++) {
    grid_div[i].setAttribute('style','border: 1px solid black;text-align: center;font-size: 10px;background-color: white;');
}

}



