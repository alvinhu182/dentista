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

          var iptValueMultiple = document.getElementById("file-ip-3")
          iptValueMultiple.classList.add("sumir")
        }
    }
}

function showPreviewRaioX(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview2 = document.getElementById("file-ip-raiox-preview");
      var iptValuePreview = document.getElementById("input-preview")
      preview2.src = src;
      preview2.style.display = "flex";
      preview2.style.width ="700px";
      preview2.style.height ="350px";
      preview2.style.margin ="25px 10px 25px"
      iptValuePreview.classList.add("sumir")
     
    }
}



function showPreview3x4(event){
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview1 = document.getElementById("file-ip-3x4-preview");
      var iptValue = document.getElementById("file-ip-1")
      preview1.src = src;
      preview1.style.display = "block";
      iptValue.classList.add("sumir")
    }
}

var telefone = document.getElementById('telefone');
var mascaraTelefone = IMask(telefone, {
  mask: '(00) 0000-0000'
});



 