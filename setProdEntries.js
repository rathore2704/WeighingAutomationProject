console.log('entries Set Up')
//utiliity functions:
//1. utility function to get dom element from brandString
function getElementFromBrandString(brandString) {
  let brandDiv = document.createElement('brandDiv')
  brandDiv.innerHTML = brandString
  return brandDiv.firstElementChild
}
//initialise numbers of Brand
let addedBrandCount = 0

//2. utility function to get dom element from sizeString
function getElementFromSizeString(sizeString) {
  let sizeDiv = document.createElement('sizeDiv')
  sizeDiv.innerHTML = sizeString
  return sizeDiv.firstElementChild
}
//initialise numbers of Size
let addedSizeCount = 0

//3. utility function to get dom element from layerString
function getElementFromLayerString(layerString) {
  let layerDiv = document.createElement('layerDiv')
  layerDiv.innerHTML = layerString
  return layerDiv.firstElementChild
}
//initialise numbers of Layer
let addedLayerCount = 0

//4. utility function to get dom element from colorString
function getElementFromColorString(colorString) {
  let colorDiv = document.createElement('colorDiv')
  colorDiv.innerHTML = colorString
  return colorDiv.firstElementChild
}

//initialise numbers of Color
let addedColorCount = 0
// Hide all the boxes initially
let brandBox = document.getElementById('brandBox');
let sizeBox = document.getElementById('sizeBox');
let layerBox = document.getElementById('layerBox');
let colorBox = document.getElementById('colorBox');
let operatorsBox = document.getElementById('operatorsBox');
let shiftsBox = document.getElementById('shiftsBox');

let addBrand , addSize , addLayer ,addColor;

let brandRadio = document.getElementById('brandRadio');
brandRadio.addEventListener('click', () => {
  document.getElementById('sizeBox').style.display = 'none';
  document.getElementById('layerBox').style.display = 'none';
  document.getElementById('colorBox').style.display = 'none';
  document.getElementById('brandBox').style.display = 'block';
  document.getElementById('${addedSizeCount + 2}').style.display = 'none';
})
let sizeRadio = document.getElementById('sizeRadio')
sizeRadio.addEventListener('click', () => {
  document.getElementById('sizeBox').style.display = 'block'
  document.getElementById('layerBox').style.display = 'none'
  document.getElementById('colorBox').style.display = 'none'
  document.getElementById('brandBox').style.display = 'none'
})
let layerRadio = document.getElementById('layerRadio')
layerRadio.addEventListener('click', () => {
  document.getElementById('sizeBox').style.display = 'none'
  document.getElementById('layerBox').style.display = 'block'
  document.getElementById('colorBox').style.display = 'none'
  document.getElementById('brandBox').style.display = 'none'
})
let colorRadio = document.getElementById('colorRadio')
colorRadio.addEventListener('click', () => {
  document.getElementById('sizeBox').style.display = 'none'
  document.getElementById('layerBox').style.display = 'none'
  document.getElementById('colorBox').style.display = 'block'
  document.getElementById('brandBox').style.display = 'none'
})

// if the user click on the + button of brand the number of brands get added

addBrand = document.getElementById('addBrand');
addBrand.addEventListener('click', () => {
  paramsBrand = document.getElementById('paramsBrand')
  let brandString = `<div class="row my-2 id=${addedBrandCount + 2}">
                                <label for="url"
                                    class="col-sm-2 col-form-label">Set Brand ${
                                      addedBrandCount + 2
                                    }</label>
                                <div class="col-md-2">
                                    <input type="text"
                                        class="form-control"
                                        id="setBrand${addedBrandCount + 2}"
                                        placeholder="Set Brand ${
                                          addedBrandCount + 2
                                        } name">
                                </div>
                                <button class="btn btn-primary col-md-1 deleteBrand"
                                        style="width:auto;"
                                        id="addBrand">-</button>

                        </div>`

  // convert the element brandString to DOM node
  let brandParamElement = getElementFromBrandString(brandString)
  paramsBrand.appendChild(brandParamElement)
  console.log(brandParamElement)
  // add an eventListner to delete all the brands elements on clicking -button
  let deleteBrand = document.getElementsByClassName('deleteBrand')
  for (item of deleteBrand) {
    item.addEventListener('click', (eBrand) => {
      eBrand.target.parentElement.remove()
    })
  }
  addedBrandCount++
})

let counter = 0;
document.getElementsByClassName('row my-2')
// if the user click on the + button of size the number of sizes get added
 addSize = document.getElementById('addSize')
addSize.addEventListener('click', () => {
  
  paramsSize = document.getElementById('paramsSize')
  let sizeString = `<div class="row my-2 id=${addedSizeCount + 2}">
                                <label for="url"
                                    class="col-sm-2 col-form-label">Set Size ${
                                      addedSizeCount + 2
                                    }</label>
                                <div class="col-md-2">
                                    <input type="text"
                                        class="form-control"
                                        id="setSize${addedSizeCount + 2}"
                                        placeholder="Set Size ${
                                          addedSizeCount + 2
                                        } name">
                                </div>
                                <button class="btn btn-primary col-md-1 deleteSize"
                                        style="width:auto;"
                                        id="addSize">-</button>

                        </div>`

  // convert the element sizeString to DOM node
  let sizeParamElement = getElementFromBrandString(sizeString)
  paramsSize.appendChild(sizeParamElement)
  console.log(sizeParamElement)
  // add an eventListner to delete all the sizes elements on clicking -button
  let deleteSize = document.getElementsByClassName('deleteSize')
  for (item of deleteSize) {
    item.addEventListener('click', (eSize) => {
      eSize.target.parentElement.remove()
    })
  }
  addedSizeCount++
})

// if the user click on the + button of layer the number of layers get added
 addLayer = document.getElementById('addLayer')
addLayer.addEventListener('click', () => {
  paramsLayer = document.getElementById('paramsLayer')
  let layerString = `<div class="row my-2 id = ${addedLayerCount + 2}">
                                <label for="layer"
                                    class="col-sm-2 col-form-label">Set Size ${
                                      addedLayerCount + 2
                                    }</label>
                                <div class="col-md-2">
                                    <input type="text"
                                        class="form-control"
                                        id="setLayer${addedLayerCount + 2}"
                                        placeholder="Set Layer ${
                                          addedLayerCount + 2
                                        } name">
                                </div>
                                <button class="btn btn-primary col-md-1 deleteLayer"
                                        style="width:auto;"
                                        id="addLayer">-</button>

                        </div>`

  // convert the element layerString to DOM node
  let layerParamElement = getElementFromLayerString(layerString)
  paramsLayer.appendChild(layerParamElement)
  console.log(layerParamElement)
  // add an eventListner to delete all the layers elements on clicking -button
  let deleteLayer = document.getElementsByClassName('deleteLayer')
  for (item of deleteLayer) {
    item.addEventListener('click', (eLayer) => {
      eLayer.target.parentElement.remove()
    })
  }
  addedLayerCount++
})

// if the user click on the + button of color the number of colors get added
 addColor = document.getElementById('addColor')
addColor.addEventListener('click', () => {
  paramsColor = document.getElementById('paramsColor')
  let colorString = `<div class="row my-2 id= ${addedColorCount + 2}">
                                <label for="color"
                                    class="col-sm-2 col-form-label">SetColor ${
                                      addedColorCount + 2
                                    }</label>
                                <div class="col-md-2">
                                    <input type="text"
                                        class="form-control"
                                        id="setColor${addedColorCount + 2}"
                                        placeholder="Set Color ${
                                          addedColorCount + 2
                                        } name">
                                </div>
                                <button class="btn btn-primary col-md-1 deleteColor"
                                        style="width:auto;"
                                        id="addColor">-</button>

                        </div>`

  // convert the element colorString to DOM node
  let colorParamElement = getElementFromColorString(colorString)
  paramsColor.appendChild(colorParamElement)
  console.log(colorParamElement)
  // add an eventListner to delete all the colors elements on clicking -button
  let deleteColor = document.getElementsByClassName('deleteColor')
  for (item of deleteColor) {
    item.addEventListener('click', (eColor) => {
      eColor.target.parentElement.remove()
    })
  }
  addedColorCount++
})

// operators section
let operatorsRadio = document.getElementById('operatorsRadio')
operatorsRadio.addEventListener('click', () => {
  document.getElementById('operatorsBox').style.display = 'block'
  document.getElementById('shiftsBox').style.display = 'none'
})

// shift section
let shiftsRadio = document.getElementById('shiftsRadio')
shiftsRadio.addEventListener('click', () => {
  document.getElementById('operatorsBox').style.display = 'none'
  document.getElementById('shiftsBox').style.display = 'block'
})

//5. utility function to get dom element from operatorsString
function getElementFromOperatorsString(operatorsString) {
  let operatorsDiv = document.createElement('operatorsDiv')
  operatorsDiv.innerHTML = operatorsString
  return operatorsDiv.firstElementChild
}

//initialise numbers of Operators
let addedOperatorsCount = 0

// if the user click on the + button of operators the number of Operators get added
let addOperators = document.getElementById('addOperators')
addOperators.addEventListener('click', () => {
  paramsOperators = document.getElementById('paramsOperators')
  let operatorsString = `<div class="row my-2 id= ${addedOperatorsCount + 2}">
                                <label for="operators"
                                    class="col-sm-2 col-form-label">SetOperators ${
                                      addedOperatorsCount + 2
                                    }</label>
                                <div class="col-md-2">
                                    <input type="text"
                                        class="form-control"
                                        id="setOperators${
                                          addedOperatorsCount + 2
                                        }"
                                        placeholder="Set Operators ${
                                          addedOperatorsCount + 2
                                        } name">
                                </div>
                                <button class="btn btn-primary col-md-1 deleteOperators"
                                        style="width:auto;"
                                        id="addOperators">-</button>

                        </div>`

  // convert the element operatorsString to DOM node
  let operatorsParamElement = getElementFromOperatorsString(operatorsString)
  paramsOperators.appendChild(operatorsParamElement)
  console.log(operatorsParamElement)
  // add an eventListner to delete all the operators elements on clicking -button
  let deleteOperators = document.getElementsByClassName('deleteOperators')
  for (item of deleteOperators) {
    item.addEventListener('click', (eOperators) => {
      eOperators.target.parentElement.remove()
    })
  }
  addedOperatorsCount++
})

//6. utility function to get dom element from shiftsString
function getElementFromShiftsString(shiftsString) {
  let shiftsDiv = document.createElement('shiftsDiv')
  shiftsDiv.innerHTML = shiftsString
  return shiftsDiv.firstElementChild
}

//initialise numbers of Operators
let addedShiftsCount = 0

// if the user click on the + button of shifts the number of Shifts get added
let addShifts = document.getElementById('addShifts')
addShifts.addEventListener('click', () => {
  paramsShifts = document.getElementById('paramsShifts')
  let shiftsString = `<div class="row my-2 id= ${addedShiftsCount + 2}">
                                <label for="shifts"
                                    class="col-sm-2 col-form-label">SetShifts ${
                                      addedShiftsCount + 2
                                    }</label>
                                <div class="col-md-2">
                                    <input type="text"
                                        class="form-control"
                                        id="setShifts${addedShiftsCount + 2}"
                                        placeholder="Set Shifts ${
                                          addedShiftsCount + 2
                                        } name">
                                </div>
                                <button class="btn btn-primary col-md-1 deleteShifts"
                                        style="width:auto;"
                                        id="addShifts">-</button>

                        </div>`

  // convert the shiftsString to DOM node
  let shiftsParamElement = getElementFromShiftsString(shiftsString)
  paramsShifts.appendChild(shiftsParamElement)
  console.log(shiftsParamElement)
  // add an eventListner to delete all the Shifts elements on clicking -button
  let deleteShifts = document.getElementsByClassName('deleteShifts')
  for (item of deleteShifts) {
    item.addEventListener('click', (eShifts) => {
      eShifts.target.parentElement.remove()
    })
  }
  addedShiftsCount++
})

let setProdEntriesBackBtn = document.getElementById('setProdEntriesBackBtn');
setProdEntriesBackBtn.addEventListener('click', ()=>{
   window.location.replace('setting.html')
})

let listBrand = [];
let n = 1;
let x = 0;

function AddBrandList(){
  let AddBrandList = document.getElementById("saveBrand");
  let newbrandText = AddBrandList.innerText(n);
  let newbrand = AddBrandList.in;
  
  listBrand[x] = document.getElementById("setBrand1").value;

  let brandCell = newbrandText.insertCell(0);

  brandCell.innerHTML = listBrand[x];

  n++;
  x++;
}
