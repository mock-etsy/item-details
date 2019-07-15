const sellerData = [
  { seller: 'sigmundwiegand', avgRating: 3, item: 81814051 },
  { seller: 'justineheller', avgRating: 3, item: 95525599 },
  { seller: 'mosesjakubowski', avgRating: 3, item: 156698406 },
  { seller: 'keenanbarrows', avgRating: 3, item: 192043201 },
  { seller: 'otisbradtke', avgRating: 4, item: 229690062 },
  { seller: 'jakaylaheathcote MD', avgRating: 3, item: 250210237 },
  { seller: 'gaycartwright', avgRating: 4, item: 251875541 },
  { seller: 'TaliaFriesen', avgRating: 3, item: 266800276 },
  { seller: 'MartineWindler', avgRating: 3, item: 294523241 },
  { seller: 'Mrs.LibbieStreich', avgRating: 4, item: 387609724 },
  { seller: 'rosalindsawayn', avgRating: 3, item: 471994052 },
  { seller: 'Mrs.AlyshaHarvey', avgRating: 3, item: 477367545 },
  { seller: 'TomasHammes', avgRating: 3, item: 483226155 },
  { seller: 'sethbechtelarphd', avgRating: 4, item: 492830503 },
  { seller: 'EmilieJast', avgRating: 4, item: 494429446 },
  { seller: 'Mrs.ImaniHamill', avgRating: 3, item: 495714238 },
  { seller: 'letaturcotte', avgRating: 3, item: 503202956 },
  { seller: 'KaleBahringer', avgRating: 3, item: 526716567 },
  { seller: 'DejahDickens', avgRating: 3, item: 539684503 },
  { seller: 'HollyFaheyDDS', avgRating: 4, item: 539773739 },
  { seller: 'PaxtonJaskolski', avgRating: 3, item: 549091140 },
  { seller: 'DallinTorphy', avgRating: 4, item: 563144227 },
  { seller: 'Dr.JoseGrimes', avgRating: 3, item: 564571125 },
  { seller: 'TyriqueKossV', avgRating: 3, item: 568885963 },
  { seller: 'RalphSanford', avgRating: 3, item: 569143841 },
  { seller: 'JacklynThompson', avgRating: 3, item: 573081262 },
  { seller: 'EricOberbrunner', avgRating: 3, item: 575896704 },
  { seller: 'JoyceThiel', avgRating: 4, item: 582878765 },
  { seller: 'Mr.SabinaZulauf', avgRating: 4, item: 585192650 },
  { seller: 'RandalLangosh', avgRating: 4, item: 586414372 },
  { seller: 'TressieMedhurst', avgRating: 4, item: 590644735 },
  { seller: 'Mrs.SaraiFlatley', avgRating: 3, item: 590736934 },
  { seller: 'DamianSchultz', avgRating: 3, item: 591749912 },
  { seller: 'MaximoHodkiewicz', avgRating: 4, item: 592953142 },
  { seller: 'TryciaLabadie', avgRating: 3, item: 594193748 },
  { seller: 'LeonoraBailey', avgRating: 3, item: 595435134 },
  { seller: 'FedericoBailey', avgRating: 3, item: 615323932 },
  { seller: "CamrynO'Keefe", avgRating: 4, item: 615522908 },
  { seller: 'LorenzConsidine', avgRating: 3, item: 615793374 },
  { seller: 'LandenHaag', avgRating: 4, item: 619203265 },
  { seller: 'CynthiaMedhurst', avgRating: 3, item: 631415799 },
  { seller: 'KailynThompsonIV', avgRating: 4, item: 632855773 },
  { seller: 'jamarwhite', avgRating: 3, item: 633905558 },
  { seller: 'Rickgerhold', avgRating: 3, item: 635333355 },
  { seller: "Chandler O'Keefe V", avgRating: 4, item: 642244040 },
  { seller: 'dallasKemmer', avgRating: 3, item: 643366643 },
  { seller: 'delbertTurner', avgRating: 3, item: 644679516 },
  { seller: "reilly O'Hara", avgRating: 3, item: 645238286 },
  { seller: 'amaliaBednarJr.', avgRating: 4, item: 650884544 },
  { seller: 'shadGleichnerDVM', avgRating: 3, item: 664095876 },
  { seller: 'chaseSmitham', avgRating: 3, item: 664147439 },
  { seller: 'kylaVeum', avgRating: 3, item: 665514126 },
  { seller: 'ms.ChayaJohnson', avgRating: 3, item: 665847970 },
  { seller: 'flavieWeimann', avgRating: 3, item: 666022574 },
  { seller: 'ms.laurensporer', avgRating: 4, item: 668870898 },
  { seller: 'vilmabartolettiSr.', avgRating: 3, item: 672364753 },
  { seller: 'alexandraWolf', avgRating: 3, item: 674905924 },
  { seller: 'ismaelkling', avgRating: 3, item: 675323094 },
  { seller: 'ms.giovannarunte', avgRating: 3, item: 676539898 },
  { seller: 'parkermcKenzie', avgRating: 4, item: 683199142 },
  { seller: 'tabithabalistreri', avgRating: 3, item: 684581264 },
  { seller: 'maudiemccullough', avgRating: 3, item: 687067299 },
  { seller: 'elsecorkery', avgRating: 4, item: 687552734 },
  { seller: 'percivalking', avgRating: 3, item: 689079899 },
  { seller: 'yoshikobayerDVM', avgRating: 3, item: 689171821 },
  { seller: 'filibertoveum', avgRating: 4, item: 695865940 },
  { seller: 'mr.bethelolson', avgRating: 3, item: 696110752 },
  { seller: 'autumnhodkiewicz', avgRating: 4, item: 701674987 },
  { seller: 'delilahpollich', avgRating: 3, item: 703797171 },
  { seller: 'bonitaBogisich', avgRating: 4, item: 705585130 },
  { seller: 'jermainejones', avgRating: 3, item: 705588518 },
  { seller: 'ginabrown', avgRating: 3, item: 705588554 },
  { seller: 'heloiseHintz', avgRating: 4, item: 705588604 },
  { seller: 'jaquelinmurphy', avgRating: 3, item: 705588638 },
  { seller: 'ms.dougwolf', avgRating: 3, item: 705588706 },
  { seller: 'sydnieMarvinV', avgRating: 3, item: 705588756 },
  { seller: 'clarewill', avgRating: 3, item: 705921784 },
  { seller: 'tamarabeckerMD', avgRating: 3, item: 706474050 },
  { seller: 'othonader', avgRating: 3, item: 706474076 },
  { seller: 'eastermosciski', avgRating: 3, item: 706474098 },
  { seller: 'lailastamm', avgRating: 3, item: 706474148 },
  { seller: 'dessieankunding', avgRating: 4, item: 706474154 },
  { seller: 'mr.deltavandervort', avgRating: 3, item: 710448049 },
  { seller: 'fayedavis', avgRating: 3, item: 714225313 },
  { seller: 'enricowillms', avgRating: 3, item: 718478657 },
  { seller: 'rebekanikolaus', avgRating: 3, item: 718746201 },
  { seller: 'helenstoltenberg', avgRating: 4, item: 719444563 },
  { seller: 'keelyreynolds', avgRating: 3, item: 719444651 },
  { seller: 'minnieschultz', avgRating: 4, item: 719445263 },
  { seller: 'mr.kyleighdickens', avgRating: 4, item: 719445367 },
  { seller: 'laurynbreitenberg', avgRating: 3, item: 719445611 },
  { seller: 'amayawelch', avgRating: 3, item: 720031167 },
  { seller: 'christinadonnelly', avgRating: 3, item: 720201609 },
  { seller: 'alwintheiser', avgRating: 3, item: 720333151 },
  { seller: 'justynschowalter', avgRating: 3, item: 720333803 },
  { seller: 'tiaheller', avgRating: 3, item: 720333827 },
  { seller: 'dellbednar', avgRating: 3, item: 720333829 },
  { seller: 'daphneydenesik', avgRating: 4, item: 720333943 },
  { seller: 'howellrowe', avgRating: 3, item: 720333947 },
  { seller: 'manuelakilback', avgRating: 3, item: 720334099 }
];

module.exports = { sellerData };
