const imagem = document.querySelector("#github-avatar");
const btn = document.querySelector("#buscar-avatar");

const getFotoGithub = function () {
    let username = document.querySelector("#username").value;
    var url = 'https://api.github.com/users/' + username;
    let bio = document.querySelector("#bio");

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			let pesquisa = JSON.parse(this.responseText);
                imagem.src = pesquisa.avatar_url;
                bio.innerHTML = pesquisa.bio;
            }	
	}
    ajax.open('GET', url, true);
    ajax.send();

};

btn.onclick = getFotoGithub;