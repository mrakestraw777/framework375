let checkForGrayscale = function(){
    let x = document.getElementById('grayscale').checked;
    if (x)
    {
        return '/?grayscale';
    } else
    {
        return "";
    }
};

let getPicture = function(){
    var img = null;
  let imgPromise = new Promise(function(resolve, reject){
    img = new Image();
    let height = document.getElementById('height').value;
    let width = document.getElementById('width').value;
    let isGrayscale = checkForGrayscale();
    img.addEventListener('load', resolve(img));
    img.addEventListener('error', reject('Could not load image'));
    return img.src = `https://picsum.photos/${width}/${height}${isGrayscale}`
});

    imgPromise.then(function(fromResolve){
        console.log('The image has loaded. Yay!');
        let node = document.getElementById('picDiv');
        node.appendChild(img);
        }).catch(function(fromReject){
            console.log(fromReject);
        })
}