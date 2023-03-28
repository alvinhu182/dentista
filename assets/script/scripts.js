function showPreview(input){
    if (input.files && input.files.length > 0) {
        const preview = document.querySelector('#multiple-preview');
        preview.innerHTML = '';
        for (let i = 0; i < input.files.length; i++) {
          const reader = new FileReader();
          reader.onload = function(e) {
            const novaImagem = document.createElement('img');
            novaImagem.src = e.target.result;
           novaImagem.classList.add('multImg')
            preview.appendChild(novaImagem);
          }
          reader.readAsDataURL(input.files[i]);
        }
    }
}
function showPreviewRaioX(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview2 = document.getElementById("file-ip-raiox-preview");
      preview2.src = src;
      preview2.style.display = "block";
    }
}
function showPreview3x4(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview1 = document.getElementById("file-ip-3x4-preview");
      preview1.src = src;
      preview1.style.display = "block";
    }
}
