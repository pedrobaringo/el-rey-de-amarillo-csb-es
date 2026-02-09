Hooks.once("init", function() {
    console.log("Initializing El Rey de Amarillo module")

    game.settings.register("el-rey-de-amarillo-csb-es", "firstTimeStart", {
       name: "Forzar mensaje de Bienvenida",
        hint: "Si marcas esta casilla te aparecerá el mensaje de bienvenida en el chat la próxima vez que entres.",
        scope: "client",
        config: true,
        default: false,
        type: Boolean
    })
})



Hooks.once("ready", function() {
	let buttonId=Date.now();
	let buttonIdParis=Date.now()+2;
	let buttonIdGuerras=Date.now()+3;
	let buttonIdSecuelas=Date.now()+4;
	let buttonIdNuevNorm=Date.now()+5;
	let mensbienv='<h1>Bienvenido al módulo del Rey de Amarillo</h1>';
	let mensimpfirst='<p style= "font-family:Mayflower;font-size: 15px;">Importa los compendios para empezar a usar el módulo</p><button id='+buttonIdParis+' style= "font-family:Mayflower;font-size: 20px;">Importa los Compendios de París</button><button id='+buttonIdGuerras+' style= "font-family:Mayflower;font-size: 20px;">Importa los Compendios de Las Guerras</button><button id='+buttonIdSecuelas+' style= "font-family:Mayflower;font-size: 20px;">Importa los Compendios de Secuelas</button><button id='+buttonIdNuevNorm+' style= "font-family:Mayflower;font-size: 20px;">Importa los Compendios de Nueva Normalidad</button>';
	let mensimpact='<p style= "font-family:Mayflower;font-size: 15px;">Se ha actualizado el módulo desde la última vez que lo usaste. Importa los compendios para tener la última versión de las Templates de actores y objetos.</p><button id='+buttonIdParis+' style= "font-family:Mayflower;font-size: 20px;">Importa los Compendios de París</button><button id='+buttonIdGuerras+' style= "font-family:Mayflower;font-size: 20px;">Importa los Compendios de Las Guerras</button><button id='+buttonIdSecuelas+' style= "font-family:Mayflower;font-size: 20px;">Importa los Compendios de Secuelas</button><button id='+buttonIdNuevNorm+' style= "font-family:Mayflower;font-size: 20px;">Importa los Compendios de Nueva Normalidad</button>'
	let mensrecordtut='<p style= "font-family:Mayflower;font-size: 15px;">Si quieres saber más de como usar el módulo:</p><button id='+buttonId+' style= "font-family:Mayflower;font-size: 20px;">Ve al Tutorial</button>';
	
	let forzarbienvenida=game.settings.get("el-rey-de-amarillo-csb-es", "firstTimeStart");
	let forzarmensaje;
	console.log(forzarmensaje);
	if (forzarbienvenida==true) {
		forzarmensaje=true;
	}
	let versactual=game.modules.get("el-rey-de-amarillo-csb-es").version;
	let userisGM=game.user.isGM;
	if (userisGM) {
		if(!game.user.getFlag("el-rey-de-amarillo-csb-es", "welcomeMessage") || forzarmensaje==true) {
			let msg=mensbienv+mensimpfirst+mensrecordtut;
			ChatMessage.create({
        		speaker: {alias:"El Rey de Amarillo"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es')
					});
				}
				const buttonParis = document.getElementById(buttonIdParis);
				if (buttonParis) {
					buttonParis.addEventListener("click",function () {
						let collectionParis = game.packs.get("el-rey-de-amarillo-csb-es.objetos");
						console.log(collectionParis);
						console.log(buttonParis);
						let folderidentParis=''
						if (game.folders.getName("Templates_Objetos")) {
							folderidentParis=game.folders.getName("Templates_Objetos").id;
						}
						let docsParis = collectionParis.importAll({folderId: folderidentParis, folderName: "Templates_Objetos", keepId: true});
						setTimeout(() => {
							let collectionParis2 = game.packs.get("el-rey-de-amarillo-csb-es.actores-paris");
							let folderidentParis2=''
							if (game.folders.getName("Templates_Actores_Paris")) {
								folderidentParis2=game.folders.getName("Templates_Actores_Paris").id;
							}
							let docs2 =  collectionParis2.importAll({folderId: folderidentParis2, folderName: "Templates_Actores_Paris", keepId: true});
						}, 500);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "welcomeMessage", true);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "lastVersion", game.modules.get("el-rey-de-amarillo-csb-es").version);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				};
				const buttonGuerras = document.getElementById(buttonIdGuerras);
				if (buttonGuerras) {
					buttonGuerras.addEventListener("click",function () {
						let collectionGuerras = game.packs.get("el-rey-de-amarillo-csb-es.objetos");
						console.log(collectionGuerras);
						console.log(buttonGuerras);
						let folderidentGuerras=''
						if (game.folders.getName("Templates_Objetos")) {
							folderidentGuerras=game.folders.getName("Templates_Objetos").id;
						}
						let docsGuerras = collectionGuerras.importAll({folderId: folderidentGuerras, folderName: "Templates_Objetos", keepId: true});
						setTimeout(() => {
							let collectionGuerras2 = game.packs.get("el-rey-de-amarillo-csb-es.actores-las-guerras");
							let folderidentGuerras2=''
							if (game.folders.getName("Templates_Actores_Guerras")) {
								folderidentGuerras2=game.folders.getName("Templates_Actores_Guerras").id;
							}
							let docs2 =  collectionGuerras2.importAll({folderId: folderidentGuerras2, folderName: "Templates_Actores_Guerras", keepId: true});
						}, 500);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "welcomeMessage", true);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "lastVersion", game.modules.get("el-rey-de-amarillo-csb-es").version);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				};
				const buttonSecuelas = document.getElementById(buttonIdSecuelas);
				if (buttonSecuelas) {
					buttonSecuelas.addEventListener("click",function () {
						let collectionSecuelas = game.packs.get("el-rey-de-amarillo-csb-es.objetos");
						let folderidentSecuelas=''
						if (game.folders.getName("Templates_Objetos")) {
							folderidentSecuelas=game.folders.getName("Templates_Objetos").id;
						}
						let docs = collectionSecuelas.importAll({folderId: folderidentSecuelas, folderName: "Templates_Objetos", keepId: true});
						let collectionSecuelasObj = game.packs.get("el-rey-de-amarillo-csb-es.objetos-secuelas");
						let folderidentSecuelasObj=''
						if (game.folders.getName("Templates_Objetos_Secuelas")) {
							folderidentSecuelasObj=game.folders.getName("Templates_Objetos_Secuelas").id;
						}
						let docsSecuelas = collectionSecuelasObj.importAll({folderId: folderidentSecuelasObj, folderName: "Templates_Objetos_Secuelas", keepId: true});
						setTimeout(() => {
							let collectionSecuelas2 = game.packs.get("el-rey-de-amarillo-csb-es.actores-secuelas");
							let folderidentSecuelas2=''
							if (game.folders.getName("Templates_Actores_Secuelas")) {
								folderidentSecuelas2=game.folders.getName("Templates_Actores_Secuelas").id;
							}
							let docs2 =  collectionSecuelas2.importAll({folderId: folderidentSecuelas2, folderName: "Templates_Actores_Secuelas", keepId: true});
						}, 500);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "welcomeMessage", true);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "lastVersion", game.modules.get("el-rey-de-amarillo-csb-es").version);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				};
				const buttonNuevNorm = document.getElementById(buttonIdNuevNorm);
				if (buttonNuevNorm) {
					buttonNuevNorm.addEventListener("click",function () {
						let collectionNuevNorm = game.packs.get("el-rey-de-amarillo-csb-es.objetos");
						console.log(collectionNuevNorm);
						console.log(buttonNuevNorm);
						let folderidentNuevNorm=''
						if (game.folders.getName("Templates_Objetos")) {
							folderidentNuevNorm=game.folders.getName("Templates_Objetos").id;
						}
						let docs = collectionNuevNorm.importAll({folderId: folderidentNuevNorm, folderName: "Templates_Objetos", keepId: true});
						setTimeout(() => {
							let collectionNuevNorm2 = game.packs.get("el-rey-de-amarillo-csb-es.actores-nueva-normalidad");
							let folderidentNuevNorm2=''
							if (game.folders.getName("Templates_Actores_NuevNorm")) {
								folderidentNuevNorm2=game.folders.getName("Templates_Actores_NuevNorm").id;
							}
							let docs2 =  collectionNuevNorm2.importAll({folderId: folderidentNuevNorm2, folderName: "Templates_Actores_NuevNorm", keepId: true});
						}, 500);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "welcomeMessage", true);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "lastVersion", game.modules.get("el-rey-de-amarillo-csb-es").version);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				};
				}, 100);
			});
			game.settings.set("el-rey-de-amarillo-csb-es", "firstTimeStart", false);
		} else if (versactual!=game.user.getFlag("el-rey-de-amarillo-csb-es", "lastVersion")) {
			let msg=mensbienv+mensimpact+mensrecordtut;
			ChatMessage.create({
					speaker: {alias:"El Rey de Amarillo"},
					content: msg,
			   whisper : ChatMessage.getWhisperRecipients(game.user.name)
			}).then(() => {
				setTimeout(() => {
				function openInNewTab(url) {
					const win = window.open(url, '_blank');
					win.focus();
				}
				const button = document.getElementById(buttonId);
				if (button) {
					button.addEventListener("click",function () {
						openInNewTab('https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es')
					});
				}
				const buttonParis = document.getElementById(buttonIdParis);
				if (buttonParis) {
					buttonParis.addEventListener("click",function () {
						let collectionParis = game.packs.get("el-rey-de-amarillo-csb-es.objetos");
						console.log(collectionParis);
						console.log(buttonParis);
						let folderidentParis=''
						if (game.folders.getName("Templates_Objetos")) {
							folderidentParis=game.folders.getName("Templates_Objetos").id;
						}
						let docsParis = collectionParis.importAll({folderId: folderidentParis, folderName: "Templates_Objetos", keepId: true});
						setTimeout(() => {
							let collectionParis2 = game.packs.get("el-rey-de-amarillo-csb-es.actores-paris");
							let folderidentParis2=''
							if (game.folders.getName("Templates_Actores_Paris")) {
								folderidentParis2=game.folders.getName("Templates_Actores_Paris").id;
							}
							let docs2 =  collectionParis2.importAll({folderId: folderidentParis2, folderName: "Templates_Actores_Paris", keepId: true});
						}, 500);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "welcomeMessage", true);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "lastVersion", game.modules.get("el-rey-de-amarillo-csb-es").version);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				};
				const buttonGuerras = document.getElementById(buttonIdGuerras);
				if (buttonGuerras) {
					buttonGuerras.addEventListener("click",function () {
						let collectionGuerras = game.packs.get("el-rey-de-amarillo-csb-es.objetos");
						console.log(collectionGuerras);
						console.log(buttonGuerras);
						let folderidentGuerras=''
						if (game.folders.getName("Templates_Objetos")) {
							folderidentGuerras=game.folders.getName("Templates_Objetos").id;
						}
						let docsGuerras = collectionGuerras.importAll({folderId: folderidentGuerras, folderName: "Templates_Objetos", keepId: true});
						setTimeout(() => {
							let collectionGuerras2 = game.packs.get("el-rey-de-amarillo-csb-es.actores-las-guerras");
							let folderidentGuerras2=''
							if (game.folders.getName("Templates_Actores_Guerras")) {
								folderidentGuerras2=game.folders.getName("Templates_Actores_Guerras").id;
							}
							let docs2 =  collectionGuerras2.importAll({folderId: folderidentGuerras2, folderName: "Templates_Actores_Guerras", keepId: true});
						}, 500);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "welcomeMessage", true);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "lastVersion", game.modules.get("el-rey-de-amarillo-csb-es").version);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				};
				const buttonSecuelas = document.getElementById(buttonIdSecuelas);
				if (buttonSecuelas) {
					buttonSecuelas.addEventListener("click",function () {
						let collectionSecuelas = game.packs.get("el-rey-de-amarillo-csb-es.objetos");
						let folderidentSecuelas=''
						if (game.folders.getName("Templates_Objetos")) {
							folderidentSecuelas=game.folders.getName("Templates_Objetos").id;
						}
						let docs = collectionSecuelas.importAll({folderId: folderidentSecuelas, folderName: "Templates_Objetos", keepId: true});
						let collectionSecuelasObj = game.packs.get("el-rey-de-amarillo-csb-es.objetos-secuelas");
						let folderidentSecuelasObj=''
						if (game.folders.getName("Templates_Objetos_Secuelas")) {
							folderidentSecuelasObj=game.folders.getName("Templates_Objetos_Secuelas").id;
						}
						let docsSecuelas = collectionSecuelasObj.importAll({folderId: folderidentSecuelasObj, folderName: "Templates_Objetos_Secuelas", keepId: true});
						setTimeout(() => {
							let collectionSecuelas2 = game.packs.get("el-rey-de-amarillo-csb-es.actores-secuelas");
							let folderidentSecuelas2=''
							if (game.folders.getName("Templates_Actores_Secuelas")) {
								folderidentSecuelas2=game.folders.getName("Templates_Actores_Secuelas").id;
							}
							let docs2 =  collectionSecuelas2.importAll({folderId: folderidentSecuelas2, folderName: "Templates_Actores_Secuelas", keepId: true});
						}, 500);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "welcomeMessage", true);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "lastVersion", game.modules.get("el-rey-de-amarillo-csb-es").version);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				};
				const buttonNuevNorm = document.getElementById(buttonIdNuevNorm);
				if (buttonNuevNorm) {
					buttonNuevNorm.addEventListener("click",function () {
						let collectionNuevNorm = game.packs.get("el-rey-de-amarillo-csb-es.objetos");
						console.log(collectionNuevNorm);
						console.log(buttonNuevNorm);
						let folderidentNuevNorm=''
						if (game.folders.getName("Templates_Objetos")) {
							folderidentNuevNorm=game.folders.getName("Templates_Objetos").id;
						}
						let docs = collectionNuevNorm.importAll({folderId: folderidentNuevNorm, folderName: "Templates_Objetos", keepId: true});
						setTimeout(() => {
							let collectionNuevNorm2 = game.packs.get("el-rey-de-amarillo-csb-es.actores-nueva-normalidad");
							let folderidentNuevNorm2=''
							if (game.folders.getName("Templates_Actores_NuevNorm")) {
								folderidentNuevNorm2=game.folders.getName("Templates_Actores_NuevNorm").id;
							}
							let docs2 =  collectionNuevNorm2.importAll({folderId: folderidentNuevNorm2, folderName: "Templates_Actores_NuevNorm", keepId: true});
						}, 500);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "welcomeMessage", true);
						game.user.setFlag("el-rey-de-amarillo-csb-es", "lastVersion", game.modules.get("el-rey-de-amarillo-csb-es").version);
						ui.notifications.info(game.i18n.localize("Templates importadas. Recargando mundo en 6sec..."), {permanent: true});
						window.setTimeout(window.location.reload.bind(window.location), 7000);
					});
				};
				
				}, 500);
			});
		}
	} else if (!game.user.getFlag("el-rey-de-amarillo-csb-es", "welcomeMessage") || forzarmensaje==true) {
		let msg = mensbienv+mensrecordtut;
		ChatMessage.create({
        		speaker: {alias:"El Rey de Amarillo"},
        		content: msg,
				whisper : ChatMessage.getWhisperRecipients(game.user.name)
		}).then(() => {
			setTimeout(() => {
			function openInNewTab(url) {
				const win = window.open(url, '_blank');
				win.focus();
			}
			const button = document.getElementById(buttonId);
			if (button) {
				button.addEventListener("click",function () {
					openInNewTab('https://github.com/pedrobaringo/el-rey-de-amarillo-csb-es');
				});
			}
			}, 100);
		});
		game.user.setFlag("el-rey-de-amarillo-csb-es", "welcomeMessage", true);
		game.settings.set("el-rey-de-amarillo-csb-es", "firstTimeStart", false);
	}
})