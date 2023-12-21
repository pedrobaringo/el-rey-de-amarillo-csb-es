Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id:"yellowsignDice",name:"Yellow Sign Dice"},"preferred");
    dice3d.addDicePreset({
      type:"d6",
      labels:[
        "1", 
        "2", 
        "3", 
        "4",
        "5", 
        'modules/yellow-sign-dice/assets/Simboloamarillo6_Bump.png'
      ],
      bumpMaps:[
        , 
        , 
        , 
        ,
        , 
        'modules/yellow-sign-dice/assets/Simboloamarillo6_Bump.png'
      ],
      system: "yellowsignDice"
    });
    dice3d.addSystem({id:"yellowsignDiceWhite",name:"Yellow Sign Dice White"},"default");
    dice3d.addDicePreset({
      type:"d6",
      labels:[
        "1", 
        "2", 
        "3", 
        "4",
        "5", 
        'modules/yellow-sign-dice/assets/Simboloamarillo6.png'
      ],
      bumpMaps:[
        , 
        , 
        , 
        ,
        , 
        'modules/yellow-sign-dice/assets/Simboloamarillo6_Bump.png'
      ],
      system: "yellowsignDiceWhite"
    });
});
