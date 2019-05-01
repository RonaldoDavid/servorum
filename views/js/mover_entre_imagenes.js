function mover_entre_imagenes() {
  pos_val = pos.val()
  console.log(pos_val);

  img.attr('src', `../images/${pos_val}.jpg`);
  var parent = img.parent()[0];
  
  console.log(parent);
  console.log(img);

  // parent.html(`<img id="img" src="../images/${pos_val}.jpg">`);
  $(parent).add('img').attr({"id": "img", "src": `./images/${pos_val}.jpg`});

  img = $('#img');

  console.log(`> Width___ ${img[0].width}\n> Height__ ${img[0].height}`);

}