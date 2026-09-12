const defaultTasks = [
  // --- INTENSITÄT 1 ---
  { 
    text: "Nenne die Person, die auf Klassenfahrt nicht auf deinem Zimmer schlafen dürfte", 
    penalty: 4, 
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Teste, wessen Haare am besten riechen", 
    penalty: 1, 
    intensity: 1,
    maxOccurrences: 3, 
    priority: 3 
  },
  { 
    text: "Erzähle von deinem schönsten Date", 
    penalty: 1, 
    intensity: 1,
    maxOccurrences: 2, 
    priority: 1 
  },
  { 
    text: "Halte Händchen mit der Person links von dir bis du das nächste Mal an der Reihe bist", 
    penalty: 2,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
    { 
    text: "Nenne mindestens eine Sache, die dir den Ick gibt", 
    penalty: 2,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
    { 
    text: "Lasse die Person, die dir gegenüber sitzt, 5 Minuten auf deinem Schoss sitzen", 
    penalty: 2,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2 
  },
    { 
    text: "Nenne deine ungesündeste (aktuelle) Obsession", 
    penalty: 2,  
    intensity: 1,
    maxOccurrences: 2, 
    priority: 1 
  },
    { 
    text: "Tausche ein Kleidungsstück deiner Wahl mit einer mitspielenden Person", 
    penalty: 1,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 3 
  },
    { 
    text: "Nenne drei Körperteile, die du besonders attraktiv findest", 
    penalty: 1,  
    intensity: 1,
    maxOccurrences: 2, 
    priority: 1 
  },
    { 
    text: "Sag der Gruppe deinen Bodycount", 
    penalty: 3,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2 
  },
    { 
    text: "Nenne den/die Mitspieler:in mit dem attraktivsten Hintern", 
    penalty: 2,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
    { 
    text: "Schreibe deinem letzten Chat, dass er dir dringend Kondome besorgen muss", 
    penalty: 3,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
    { 
    text: "Nenne die mitspielende Person, die am ehesten in einem Porno mitspielen würde", 
    penalty: 2,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
    { 
    text: "Beschreibe den schlechtesten Kuss, den du je hattest", 
    penalty: 4,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
    { 
    text: "Lies die letzte Nachricht vor, die du verschickt hast, und erkläre den Kontext", 
    penalty: 4,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 3 
  },
    { 
    text: "Trinke einen Shot ohne deine Hände zu benutzen", 
    subtext: "(Wenn du es nicht schaffst, bist du automatisch ein Drückeberger.)",
    penalty: 2,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Nenne die Person zu deiner Rechten für den Rest des Spiels Mommy/Daddy", 
    penalty: 4,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2 
  },
  { 
    text: "Lasse alle Mitspieler:innen gemeinsam 30 Sekunden lang dein Handy durchsuchen", 
    penalty: 3,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Schreibe deinem/deiner Ex: Ich vermisse dich", 
    penalty: 3,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Fuck, Marry, Kill mit allen Spieler:innen der Gruppe oder deinen letzten drei Whatsapp-Chats", 
    penalty: 4,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2 
  },
  { 
    text: "Mache einen Handstand", 
    penalty: 1,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Teile deinen liebsten Crash Out Song mit der Gruppe", 
    penalty: 1,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Erkläre der Gruppe deine letzten 3 Suchanfragen", 
    penalty: 4,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Erkläre dein größtes HEAR ME OUT", 
    penalty: 4,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Spielt eine Runde ZWEI WAHRHEITEN UND EINE LÜGE. Alle Spieler:innen, die falsch liegen, trinken.", 
    penalty: 0,  
    type: "group",
    label: "2 truths 1 lie",
    intensity: 1,
    maxOccurrences: 3, 
    priority: 2 
  },
  { 
    text: "Jede:r, die/der noch nie schlechten Sex hatte, trinkt ihr/sein Glas aus.", 
    penalty: 0,  
    type: "joker",
    label: "Höllennacht",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2 
  },
  { 
    text: "Alle Jungfrauen trinken einen Shot.", 
    penalty: 0,
    type: "joker",
    label: "Solisten",  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Mache 5 Liegestützen",
    subtext: "(Wenn du es nicht schaffst, bist du automatisch ein Drückeberger)", 
    penalty: 3,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Jede:r macht der Person zu seiner/ihrer Rechten ein ehrliches Kompliment", 
    penalty: 0,  
    type: "group",
    label: "Gruppenkarte",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Armdrücken mit einer mitspielenden Person deiner Wahl. Wer verliert, muss exen.", 
    penalty: 0,  
    type: "Armdrücken",
    label: "Muskelprotz",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Spielt eine Runde NEVER HAVE I EVER", 
    penalty: 0,  
    type: "group",
    label: "Never have i ever...",
    intensity: 1,
    maxOccurrences: 3, 
    priority: 2 
  },
  { 
    text: "Zeit für ein Gruppenfoto!", 
    penalty: 0,  
    type: "photo",
    label: "Midnight Memories",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2 
  },
   { 
    text: "Lasse dich mindestens 30 Sekunden von deinen Mitspieler:innen kitzeln", 
    penalty: 4,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
   { 
    text: "Stecke dir einen Eiswürfel in den Ausschnitt oder in die Hose", 
    penalty: 1,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Rufe die letzte Nummer an, die du gewählt hast und frage nach dem Titel eines Liedes, welches du ihr dann vorsingst", 
    penalty: 2,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Lege einen Moonwalk wie Michael Jackson hin", 
    penalty: 1,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Erzähle der Gruppe eine peinliche Story aus deinem Leben", 
    penalty: 1,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2 
  },
  { 
    text: "Massiere eine mitspielende Person für mindestens eine Minute", 
    penalty: 1,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Lasse dich von der Person dir gegenüber füttern", 
    penalty: 2,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 3 
  },
  { 
    text: "Schreibe ein Gedicht über eine mitspielende Person. Du hast 4 Minuten Zeit", 
    penalty: 1,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Zeige das peinlichste Foto auf deinem Handy", 
    subtext: "(Empfindet die Gruppe es nicht als peinlich genug, bist du automatisch ein Drückeberger)",
    penalty: 2,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 3 
  },
  { 
    text: "Karaoke zu einem Lied, von dem niemand erwarten würde, dass du es auswendig kannst", 
    penalty: 1,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 3 
  },
  { 
    text: "Mache eine:n Mitspieler:in mit einem billigen Anmachspruch an", 
    penalty: 3,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Verrate der Gruppe eine guilty pleasure von dir", 
    penalty: 3,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Nenne deine Top 3 Turn-Offs", 
    penalty: 3,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Nenne deine Top 3 Turn-Ons", 
    penalty: 3,  
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Alle, die noch Kuscheltiere besitzen, trinken einen Shot.", 
    penalty: 0,  
    type: "Teddy",
    label: "Plüschfreunde",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Alle anderen Spieler:innen trinken einen Shot. Du bist nochmal dran.", 
    penalty: 0,  
    type: "joker",
    label: "Here we go again...",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Suche dir eine:n Gegener:in... der/die Verlierer:in trinkt!", 
    penalty: 0,  
    type: "eye",
    label: "Anstarrwettbewerb",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Gruppensieger:in verteilt 5 Shots.", 
    penalty: 0,  
    type: "schere",
    label: "Schere, Stein, Papier...",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2
  },
 { 
    text: "Alle, die schon mal gesextet haben, trinken.", 
    penalty: 0,  
    type: "joker",
    label: "Sexting",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Wer gerade sein Handy in der Hand hat, trinkt!", 
    penalty: 0,  
    type: "joker",
    label: "Erwischt!",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Es trinkt die Person, die bisher die meisten Situationships hatte.", 
    penalty: 0,  
    type: "joker",
    label: "For the plot...",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Alle Duschpinkler:innen trinken einen Shot.", 
    penalty: 0,  
    type: "joker",
    label: "Wasserspielchen",
    intensity: 1,
    maxOccurrences: 1, 
    priority: 3
  },
  

  // --- INTENSITÄT 2 ---
  { 
    text: "Lasse dich von einer Person deiner Wahl fesseln", 
    subtext: "(Das bleibt alles so, wie es ist!... eine Runde lang...)",
    penalty: 1,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 2 
  },
  { 
    text: "Decke auf, mit welcher mitspielenden Person du die meisten Fantasien hattest", 
    penalty: 1,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 2 
  },
  { 
    text: "Küsse die Person zu deiner Linken", 
    subtext: "(Mit Konsens bitte)",
    penalty: 4,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 3
  },
   { 
    text: "Küsse die Person zu deiner Rechten", 
    subtext: "(Mit Konsens bitte)",
    penalty: 4,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 3
  },
  { 
    text: "Nenne die mitspielende Person, mit der man - deiner Meinung nach - den besten Sex haben kann.", 
    penalty: 2,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 2 
  },
  { 
    text: "Nenne zwei Personen, mit denen du einen Dreier haben würdest.", 
    penalty: 1,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1 
  },
  { 
    text: "Wähle eine:n Mitspieler:in aus, die/der dir am Ohr knabbern darf", 
    subtext: "(ganz sexy natürlich)",
    penalty: 1,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 2 
  },
  { 
    text: "Nenne die mitspielende Person, mit der du am ehesten was haben würdest", 
    penalty: 3,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 3 
  },
  { 
    text: "Gebe einer mitspielenden Person deiner Wahl einen Kuss auf den Hals", 
    subtext: "(Mit Konsens bitte)",
    penalty: 3,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Nenne den Ort, an dem du den außergewöhnlichsten Sex hattest", 
    penalty: 2,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Erzähle, wann du dein erstes Mal hattest und wie es war", 
    penalty: 3,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Nenne den Namen der Person, mit der du den besten Sex hattest", 
    penalty: 3,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Nenne die mitspielende Person, die am ehesten fremdgehen würde und erkläre, warum du das denkst", 
    penalty: 4,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 3
  },
  { 
    text: "Mache einen Dolphin Dive oder schlage ein Rad", 
    penalty: 4,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 3
  },
  { 
    text: "Erzähle der Gruppe, wann du zuletzt Sex hattest und bewerte die Erfahrung auf einer Skala von 1-10", 
    penalty: 2,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Erzähle von deiner peinlichsten Sexerfahrung", 
    penalty: 2,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Alle, die schonmal beim Sex erwischt wurden, trinken.", 
    penalty: 0,  
    type: "joker",
    label: "Hoppla!",
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Nenne den verrücktesten Ort, an dem du je Sex hattest", 
    penalty: 3,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Sage der Gruppe, ob du eher beim Sex oder beim Masturbieren kommst", 
    penalty: 3,  
    intensity: 2,
    maxOccurrences: 2, 
    priority: 3
  },
  { 
    text: "Schreibe ein erotisches Gedicht. Du hast 4 Minuten Zeit.", 
    penalty: 2,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Tue so, als wärst du der absolute Kussexperte und zeige deinen Mitspieler:innen, wie ein perfekter Zungenkuss aussieht... aber alleine!", 
    penalty: 2,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Tanze zur Musik deiner Wahl so sexy, wie du kannst.", 
    penalty: 4,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Verrate deinen Mitspieler:innen, wie man dich am besten flachlegen kann", 
    penalty: 3,  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Eine Runde Kartenkuss - aber mit einem Eiswürfel!", 
    penalty: 0,
    type: "ice",
    label: "Ice, Ice, Baby!",  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Alle Spieler:innen, die sich einen Dreier vorstellen könnten, trinken einen Shot.", 
    penalty: 0,
    type: "Gruppe",
    label: "U naughty, naughty...;)",  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Alle, die schon mal Fesselspiele ausprobiert haben, trinken.", 
    penalty: 0,
    type: "Gruppe",
    label: "Shackles",  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 3
  },
  { 
    text: "Errate die Farbe der Unterwäsche jeder mitspielenden Person. Trinke für jede falsche Antwort.", 
    penalty: 0,
    type: "Gruppe",
    label: "Unter den Schichten",  
    intensity: 2,
    maxOccurrences: 1, 
    priority: 1
  },
  

  // --- INTENSITÄT 3 ---
  { 
    text: "Benenne und bewerte all' deine Sexspielzeuge", 
    penalty: 3, 
    intensity: 3,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Lasse dir die Augen verbinden. Jede:r Spieler:in küsst dich und du musst die Küsse ranken", 
    subtext: "(es muss nicht auf den Mund sein)",
    penalty: 3, 
    intensity: 3,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Lasse dir von der Person zu deiner Rechten einen Knutschfleck an einer Stelle deiner Wahl machen", 
    penalty: 4, 
    intensity: 3,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Lasse dir von der Person zu deiner Linken auf den Hintern hauen", 
    penalty: 1, 
    intensity: 3,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Nenne deine liebsten Pornokategorien", 
    penalty: 2, 
    intensity: 3,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Wähle eine mitspielende Person und trinke mit/von ihr einen Bodyshot", 
    penalty: 4, 
    intensity: 3,
    maxOccurrences: 1, 
    priority: 2
  },
  { 
    text: "Lasse dir von jeder mitspielenden Person einen Kuss oder eine leichte Backpfeife geben", 
    penalty: 3, 
    intensity: 3,
    maxOccurrences: 1, 
    priority: 3
  },
  { 
    text: "Lutsche an dem Finger einer mitspielenden Person so, als würdest du sie verführen wollen", 
    subtext: "(Mit Konsens bitte)",
    penalty: 3, 
    intensity: 3,
    maxOccurrences: 1, 
    priority: 1
  },
  { 
    text: "Küsse die Person zu deiner Rechten leidenschaftlich", 
    subtext: "(Mit Konsens bitte)",
    penalty: 4, 
    intensity: 3,
    maxOccurrences: 2, 
    priority: 3
  },
  
];