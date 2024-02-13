function calculateTriangleArea(){
   const triangleFiled = document.getElementById('triangle-base');
   const triangleText=triangleFiled.value;
   const base = parseFloat(triangleText);
   console.log(base);

   const triangleHeightField= document.getElementById('triangle-height');
    const triangleHeightText=triangleHeightField.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);
}