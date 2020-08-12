function heure()
		 {
		 var element = document.getElementById('heure');
		 var date = new Date();
		 
		 var mois = (date.getMonth()+1<10)? '0'+(date.getMonth()+1) : date.getMonth()+1;
		 var jour = (date.getDate()<10) ? '0'+date.getDate() : date.getDate();
		 var annee = date.getFullYear();
		 
		 var heures = (date.getHours()<10)? '0'+date.getHours() : date.getHours();
		 var minutes = (date.getMinutes()<10)? '0'+date.getMinutes() : date.getMinutes();
		 var seconds = (date.getSeconds()<10)? '0'+date.getSeconds() : date.getSeconds();
		 element.innerHTML="La date de jour est:"+ jour+"/"+mois+"/"+annee+" L'heure est  "+ heures+":"+minutes+":"+seconds;
		 }
		 setInterval('heure()',1000)