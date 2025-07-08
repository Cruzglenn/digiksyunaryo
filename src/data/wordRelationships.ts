/**
 * File: wordRelationships.ts
 * Description: Defines relationships between words in the dictionary
 *
 * This file contains mappings for:
 * - Synonyms: Words with similar meanings
 * - Related terms: Words that are conceptually related
 * - Alternative spellings: Different ways to write the same word
 * - Traditional to Gen Alpha mappings: Mapping traditional terms to Gen Alpha slang
 */

// Interface for word relationships
export interface WordRelationship {
  word: string; // The target word in the dictionary
  alternatives: string[]; // Alternative ways to search for this word
  related: string[]; // Related concepts or words
}

/**
 * Word relationships mapping
 *
 * Each entry maps a dictionary word to:
 * - alternatives: Other ways to write/say the same thing (Focused on Filipino user search intent)
 * - related: Conceptually related terms
 */
export const wordRelationships: Record<string, WordRelationship> = {
  "8080": {
    word: "8080",
    alternatives: ["bobo", "tanga", "mahina ang pag-iisip", "walang alam", "engot", "shunga", "gunggong", "mahina ang ulo", "utak biya", "slowpoke", "stupid", "dumb", "slow", "ano ang tawag sa tanga (Gen Z/Alpha)", "slang para sa bobo", "Bobo (Gen Alpha)", "hindi matalino", "mabagal umintindi"],
    related: ["Brainrot", "Sped", "Monggo", "Dog water", "Noob", "L", "Mid", "NPC"]
  },
  "9001": {
    word: "9001",
    alternatives: ["higit pa sa inaasahan", "napakasindi", "over 9000", "sobrang lakas", "sobrang galing", "walang kapantay", "Napakalakas (Gen Alpha)", "hindi masukat sa lakas/galing", "sobra-sobra", "higit sa sukdulan"],
    related: ["OP", "Cracked", "Goat", "W", "Fire", "Lit", "Slay", "Cook", "Out of this World", "Solid", "Buss"]
  },
  "All fax": {
    word: "All fax",
    alternatives: ["purong katotohanan", "pure facts", "totoo lahat", "walang halong biro", "lahat totoo", "Walang kasinungalingan (Gen Alpha)", "100% totoo", "walang bawas, walang dagdag", "buong katotohanan", "fax", "facts", "totoo", "katotohanan", "truth", "tunay", "walang biro", "seryoso", "Totoo (Gen Alpha)", "totoong nangyari", "walang duda", "legit"],
    related: ["Fax", "No cap", "Fax only", "Fr, fr", "No printer", "On God", "Periodt", "Reality check"]
  },
  "Aura": {
    word: "Aura",
    alternatives: ["enerhiya", "vibe", "atmospera", "dating", "presence", "pakiramdam", "karisma", "Enerhiya ng tao (Gen Alpha)", "kung ano ang nararamdaman sa isang tao", "kung ano ang ipinapahiwatig", "personalidad"],
    related: ["Level", "Positive Aura", "Negative Aura", "Vibe", "Rizz", "Estetik", "Main Character Vibe", "It’s giving…", "Demure", "Nonchalant", "Zesty"]
  },
  "Ayo": {
    word: "Ayo",
    alternatives: ["pangungumusta", "yo", "hello", "kamusta", "hi", "sup", "wassup", "uy", "musta", "Kamusta (Gen Alpha)", "anong balita?", "G?", "oi"],
    related: ["Eyy", "Bossing", "Gar", "Lek", "Shoutout", "Sis", "Gurl"]
  },
  "Backrooms": {
    word: "Backrooms",
    alternatives: ["nakakalito", "walang katapusan", "nakakaba", "maze", "alternate dimension", "liminal space", "kakatakot na lugar", "parang maze", "Nakakatakot na lugar (Gen Alpha)", "walang hanggang kwarto", "nakakabaliw na lugar", "nakakawala"],
    related: ["Uncanny", "Ohio", "Cringe", "Shook", "Menty B", "Brainrot", "Sus", "Yike / yikes", "Low vibration"]
  },
  "Baks": {
    word: "Baks",
    alternatives: ["bakla", "bading", "gay", "sister", "friend", "beki", "bayot", "Kaibigang bakla (Gen Alpha)", "parlorista", "sirena", "homosekswal na lalaki", "sissy", "te"],
    related: ["Sis", "Gurl", "Zesty", "Kween / Kween-behavior", "Queen", "Wlw / wuhluhwuh", "Fab", "Yas / yas gurl", "Eme", "Party popper"]
  },
  "Bembang": {
    word: "Bembang",
    alternatives: ["pakikipagtalik", "sex", "sexual intercourse", "pagtatalik", "sekswal na pagtatalik", "malibog", "libog", "kantot", "iyutan", "pagroromansa (pisikal)", "gawaing pang-adulto", "init sa katawan", "ano ang tawag sa pagtatalik (Gen Z/Alpha)", "slang para sa sex", "Sex (Gen Alpha)", "makipagtalik", "romansa", "pag-ibig (pisikal)", "pagdurog", "paglamas"],
    related: ["Jelq", "Goon / gooning", "Thirst trap", "Thirsty", "Bussin", "Rawr", "Gyatt / Gyat", "Sobrang sarap", "Sobrang sikip / shikip", "Rizz"]
  },
  "Beta": {
    word: "Beta",
    alternatives: ["mahina", "submissive", "weak", "pangalawa", "sumusunod sa trend", "sunud-sunuran", "under", "hindi dominante", "Mahina (Gen Alpha)", "tagasunod", "walang sariling diskarte", "alalay"],
    related: ["Chad alpha", "Sigma", "Simp", "Noob", "NPC", "L", "8080", "Dog water", "Malewife"]
  },
  "Big L": {
    word: "Big L",
    alternatives: ["talo", "lose", "defeat", "failure", "matinding pagkatalo", "pagkabigo", "malaking talo", "epic fail", "laglag", "Talo (Gen Alpha)", "malas", "nadisgrasya", "kabiguan", "dalawang salita mula sa ingles na big at L na nangangahulugang loss"],
    related: ["L", "Dog water", "Dempsey roll", "Womp-womp", "Ratioed", "Oof", "Dasurv", "Rigged", "Menty B"]
  },
  "Blb / bluhluhbuh": {
    word: "Blb / bluhluhbuh",
    alternatives: ["meaningless sound", "gibberish", "random sound", "meme sound", "walang ibig sabihin na tunog", "Tunog na walang kahulugan (Gen Alpha)"],
    related: ["Skibidi", "Tralalero tralala", "Ni hao fin shyt", "Brainrot", "Cringe"]
  },
  "Bop": {
    word: "Bop",
    alternatives: ["kantang paulit-ulit o kinawiwilihan mong pinapakinggan.", "bebop", "istilo ng musika", "energetic na kanta", "sikat na kanta", "popular na kanta", "Kantang nakakaadik (Gen Alpha)", "kantang sikat"],
    related: ["Griddy", "Toma toma", "Skibidi", "Lit", "Slaps", "Buss", "Fire"]
  },
  "Bossing": {
    word: "Bossing",
    alternatives: ["pagbati sa kaibigan", "boss", "chief", "pare", "bro", "sir", "ma'am", "tropa", "bes", "lods", "Tawag sa kaibigan (Gen Alpha)", "tawag sa nirerespeto", "amo (pabiro)", "kaibigan"],
    related: ["Gar", "Lek", "Orb", "Ayo", "Gang", "Twin / twinning", "OG", "Shoutout", "Sis", "Gurl"]
  },
  "Brainrot": {
    word: "Brainrot",
    alternatives: ["magulong isip", "wala sa katinuan", "walang kabuluhan na content", "low quality content", "internet addiction", "nakakasira ng ulo", "paulit-ulit na walang kwenta", "Walang kwentang content (Gen Alpha)", "content na pampa-bobo", "nakaka-utak-biya", "basurang content"],
    related: ["8080", "Sped", "Skibidi toilet", "Copium", "Ohio", "NPC", "Cringe", "Monggo", "Delulu", "Meme lord", "Dank", "Yap / yapping", "Unlimited", "Uncanny"]
  },
  "Burger ka sakin": {
    word: "Burger ka sakin",
    alternatives: ["pang-aakit", "patawang pagbabanta", "flirting", "playful threat", "type kita", "crush kita (pabiro)", "Pang-asar na pang-akit (Gen Alpha)", "gusto kitang halikan/yakapin (pabiro)", "may gusto ako sayo (pabiro)", "biro na may pagnanasa"],
    related: ["Rawr", "Pookie bear", "Rizz", "Thirst trap", "Eme", "Bembang", "Candy", "Zesty"]
  },
  "Burts": {
    word: "Burts",
    alternatives: ["labis na pagbibiro", "sobrang biro", "burst", "tawa much", "funny", "nakakatawa sobra", "halakhak", "Sobrang nakakatawa (Gen Alpha)", "sabog sa tawa", "hindi mapigilang tawa", "katatawanan"],
    related: ["Eme", "Echoz lang", "Tralalero tralala", "Womp-womp", "Sksksk", "Party popper", "Meme lord", "Cringe"]
  },
  "Buss": {
    word: "Buss",
    alternatives: ["kahanga-hanga", "astig", "galing", "bust", "amazing", "great", "lupit", "solid", "Magaling (Gen Alpha)", "panalo", "the best", "dekalibre", "binagong salita ng bust na may ibig sabihin na sumabog."],
    related: ["Bussin", "Buzzin", "Fire", "Lit", "Solid", "Slay", "Cook", "Goat", "9001", "Dank", "Pop off"]
  },
  "Bussin": {
    word: "Bussin",
    alternatives: ["napakasarap", "delicious", "masarap", "sobrang sarap", "yummy", "tasty", "kalasa", "Napakasarap (Gen Alpha)", "pagkain", "kain", "the best (sa pagkain)", "linamnam"],
    related: ["Buss", "Buzzin", "Lafang", "Sobrang sarap", "Slaps", "Snack", "Glizzy", "Mani", "Thirsty"]
  },
  "Buttah": {
    word: "Buttah",
    alternatives: ["malakas ang appeal", "kumpyansa sa sarili", "smooth", "butter", "charming", "confident", "swabe dumiskarte", "magaling mang-akit", "May appeal (Gen Alpha)", "kaakit-akit", "mahinahon pero malakas ang dating", "pogi points", "Mas impormal na pagbigkas ng salitang butter at sa anyo nitong makinis o smooth ay ganito na rin bigyang-puri ang mga netizens na pinasimulan sa TikTok ng mga henerasyong Alpha"],
    related: ["Aura", "Rizz", "Chad alpha", "Slay", "Snack", "Mr. bombastic", "Latina", "Estetik", "Gucci", "Looks-maxing", "Mogging", "Flex"]
  },
  "Candy": {
    word: "Candy",
    alternatives: ["maarte", "malandi", "flirtatious", "coy", "pabebe", "pa-cute", "Maarte (Gen Alpha)", "mahilig magpa-cute", "flirty", "malantod", "hitad (colloquial)"],
    related: ["Pick Me", "Extra / so extra", "Zesty", "Cringe", "Rawr", "Pookie bear", "Thirsty", "Bembang", "Thirst trap"]
  },
  "Cap": {
    word: "Cap",
    alternatives: ["sinungaling", "lie", "fake", "hindi totoo", "nagdadagdag ng kwento", "pagsisinungaling", "imbento", "bola", "palusot", "kwentong barbero", "hindi makatotohanan", "Sinungaling (Gen Alpha)", "gawa-gawa lang", "hindi kapani-paniwala (dahil sa pagsisinungaling)"],
    related: ["Fax", "All fax", "No cap", "Fr, fr", "Psych", "Jabaited", "Impostor", "Sus", "Rigged"]
  },
  "Caught in 4k": {
    word: "Caught in 4k",
    alternatives: ["huli sa akto", "may ebidensya", "nahuli", "exposed", "huling-huli", "may pruweba", "kitang-kita", "bistado", "Huli sa kamera (Gen Alpha)", "walang takas", "may video/picture", "nahuli sa CCTV", "Idyomatikong ekspresyon ito upang tukuyin ang mga nahuling tao dahil sa pagkakasala o katawa-tawang pangyayari na may matibay na pruweba mula sa isang bidyo o larawan. 4k ang sumisimbolo sa resolution ng isang bidyo na may magandang kalidad."],
    related: ["Receipts", "Resibo", "Snitch", "Sus", "Impostor", "Jabaited", "Cap", "L", "Womp-womp"]
  },
  "Chad alpha": {
    word: "Chad alpha",
    alternatives: ["alpha male", "may dating", "lakas ng loob", "confident man", "dominant male", "leader", "gwapong matipuno", "astigin", "Lalaking dominante (Gen Alpha)", "pinuno", "tinitingala", "hari"],
    related: ["Beta", "Sigma", "Rizz", "Goat", "OG", "Mr. bombastic", "Buttah", "Slay", "Mogging", "Looks-maxing", "Flex", "Pro"]
  },
  "Cheugy": {
    word: "Cheugy",
    alternatives: ["laos", "hindi uso", "outdated", "try hard", "not cool", "old fashion", "baduy", "jologs (pero luma na)", "hindi na cool", "Laos na (Gen Alpha)", "makaluma (negatibo)", "pilit magpa-uso", "hindi na patok"],
    related: ["Cringe", "Ick", "L", "Mid", "Old School", "OK boomer", "Womp-womp", "Low vibration", "Off"]
  },
  "Clapback": {
    word: "Clapback",
    alternatives: ["matalas na sagot", "matalinong sagot", "pang-asar pabalik", "comeback", "riposte", "witty reply", "bara", "ganti sa asar", "resbak", "Matalinong sagot (Gen Alpha)", "sagot na di makakalimutan", "patama pabalik", "sagot na masakit"],
    related: ["Roast", "Savage", "Shade", "W", "Pressed", "Dasurv", "Goat", "Periodt", "Slay", "Fire"]
  },
  "Clout": {
    word: "Clout",
    alternatives: ["sikat", "impluwensya", "fame", "influence", "popularity", "attention", "kasikatan", "pansin", "Sikat (Gen Alpha)", "maraming followers", "pinag-uusapan", "kapangyarihan (sa social media)"],
    related: ["Flex", "Humblebrag", "Pick Me", "Ksp", "OG", "Main Character Vibe", "Thirsty", "Plug", "Shoutout", "Overrated", "Slay"]
  },
  "Cook": {
    word: "Cook",
    alternatives: ["mahusay na pagtatanghal", "magaling", "galing", "excellent performance", "nailed it", "perfected it", "ginalingan", "pinaghirapan", "Magaling (sa ginawa) (Gen Alpha)", "walang tapon", "perpekto ang gawa", "hinusay"],
    related: ["Let him cook", "Eat", "Slay", "Nailed it", "You ate that", "W", "Goat", "Fire", "Lit", "Solid", "Buss", "Pop off", "Pro"]
  },
  "Copium": {
    word: "Copium",
    alternatives: ["pagpapanggap", "denial", "wishful thinking", "coping mechanism", "false hope", "pag-asa sa wala", "nagbubulag-bulagan", "Umaasa kahit imposible (Gen Alpha)", "panloloko sa sarili", "pagtakip sa katotohanan", "pampalubag-loob (kahit di totoo)"],
    related: ["Delulu", "Brainrot", "Menty B", "L", "Pookie bear", "Manifest", "Low vibration", "Cringe"]
  },
  "Core": {
    word: "Core",
    alternatives: ["tema", "theme", "aesthetic", "essence", "puso", "fundamental", "basic", "pinaka-tema", "istilo", "Tema o Istilo (Gen Alpha)", "pinakapuso", "sentro", "konsepto", "pagsasalarawan ng aesthetic o vibe ng isang bagay o tao.", "Nagmula ito sa English word na core, na nangangahulugang pinakasentro o pinakapuso ng isang bagay. Ginamit ito ng Gen Alpha para ilarawan ang aesthetic o vibe ng isang bagay o tao."],
    related: ["Co-worker core", "Estetik", "Vibe", "Aura", "It’s giving…", "Drip", "Main Character Vibe", "Lore"]
  },
  "Co-worker core": {
    word: "Co-worker core",
    alternatives: ["usapang empleyado", "office gossip", "workplace stories", "work life", "corporate life", "chismis sa opisina", "kwentong trabaho", "Chismis sa trabaho (Gen Alpha)", "usapang pang-opisina", "kultrura sa opisina", "Portmanteau ng “coworker” (kasamahan sa trabaho) at “core” (vibe). Ginagamit para ilarawan ang kilos o itsura ng isang tao na parang officemate mo."],
    related: ["Core", "Tea", "Yap / yapping", "Shoutout", "Cringe", "Menty B", "Low vibration"]
  },
  "Cracked": {
    word: "Cracked",
    alternatives: ["magaling", "mahusay", "skilled", "expert", "insanely good", "god-tier", "sobrang galing (sa laro)", "halimaw sa galing", "Sobrang galing (Gen Alpha)", "hindi mapapantayan", "pro level", "bihasa"],
    related: ["OP", "Goat", "W", "Cook", "Slay", "9001", "Pro", "Retsam", "Fire", "Lit", "Solid", "Buss", "Level"]
  },
  "Cringe": {
    word: "Cringe",
    alternatives: ["nakakahiya", "nakakadiri", "kadiri", "embarrassing", "hindi kaaya-aya", "awkward", "kahiya-hiya", "nakaka-awkward", "baduy", "corny", "Nakakahiya (Gen Alpha)", "hindi maganda tingnan/pakinggan", "nakakailang"],
    related: ["Ick", "Off", "Cheugy", "Yike / yikes", "Womp-womp", "Sus", "Sksksk", "Ohio", "Potek / Pucha", "Tss", "Uncanny", "Low vibration"]
  },
  "Dank": {
    word: "Dank",
    alternatives: ["astig", "solid", "mataas ang kalidad", "cool", "awesome", "high quality", "excellent", "matindi", "Astig (Gen Alpha)", "nakakatawa (meme)", "kalidad", "kakaiba (sa positibong paraan)"],
    related: ["Meme lord", "Fire", "Lit", "Solid", "Buss", "Skibidi", "Brainrot", "Ohio", "Tralalero tralala", "Cringe"]
  },
  "Dasurv": {
    word: "Dasurv",
    alternatives: ["deserve", "karapat-dapat", "nararapat", "tama lang", "buti nga", "Karapat-dapat (Gen Alpha)", "nararapat lang sa'yo", "yan ang bagay sayo", "karma", "binagong porma ng salitang ingles na deserve"],
    related: ["L", "Womp-womp", "Big L", "Clapback", "W", "Oof"]
  },
  "Delulu": {
    word: "Delulu",
    alternatives: ["delusional", "ilusyon", "hindi totoo", "fantasy", "malayo sa katotohanan", "nag-iilusyon", "ilusyonada", "ilusyonado", "nag-iimagine", "assumera", "assumero", "feeling", "nagpapantasya", "umaasa sa wala", "hopia", "slang para sa delusional", "Nag-iimagine (Gen Alpha)", "sobrang assuming", "hindi makatotohanang pag-iisip"],
    related: ["Copium", "Manifest", "Simp", "One-sided", "Pookie bear", "Brainrot", "Obsessed", "Rent free", "Menty B"]
  },
  "Dempsey roll": {
    word: "Dempsey roll",
    alternatives: ["bugbog sarado", "malalang pagkatalo", "overwhelming defeat", "pwned", "destroyed", "ginulpi", "pinulbos", "Bugbog sarado (sa argumento/laro) (Gen Alpha)", "wasak", "tinalo nang husto", "pinakain ng alikabok"],
    related: ["Big L", "L", "Roast", "Savage", "Dog water", "Womp-womp", "Clapback", "W", "Goat", "OP"]
  },
  "Demure": {
    word: "Demure",
    alternatives: ["mahinhin", "maingat", "modest", "reserved", "quiet", "shy", "konserbatibo", "disente", "Mahinhin (Gen Alpha)", "hindi magaslaw", "pino kumilos", "dalagang Pilipina (ugali)"],
    related: ["Kween / Kween-behavior", "Queen", "Estetik", "Positive Aura", "Green flag", "Old School", "Aura", "Vibe", "It’s giving…", "Nonchalant"]
  },
  "Dog water": {
    word: "Dog water",
    alternatives: ["sablay", "palpak", "walang kwenta", "trash", "bad", "terrible", "noob", "basura", "mahina", "Walang kwenta (sa laro) (Gen Alpha)", "hindi marunong", "pangit ang laro", "kangkong"],
    related: ["L", "Big L", "Mid", "Noob", "8080", "Sped", "Cringe", "Womp-womp", "Monggo"]
  },
  "Drip": {
    word: "Drip",
    alternatives: ["estilo ng pananamit", "fashion", "style", "outfit", "swag", "look", "porma", "damit", "gayak", "Porma (Gen Alpha)", "kasuotan", "bihis", "pananamit"],
    related: ["Drippy", "Fit check", "Slay", "Estetik", "Gucci", "On Fleek", "Yassify", "Looks-maxing", "Clout", "Flex", "Solid", "Mr. bombastic", "Fab"]
  },
  "Drippy": {
    word: "Drippy",
    alternatives: ["maangas na estilo", "stylish", "fashionable", "cool outfit", "good looking clothes", "maporma", "maganda ang porma", "Astig ang porma (Gen Alpha)", "bihis na bihis", "nakaka-Slay ang porma"],
    related: ["Drip", "Fit check", "Slay", "Estetik", "Gucci", "On Fleek", "Fab", "Fire", "Lit"]
  },
  "Ea": {
    word: "Ea",
    alternatives: ["babae", "girl", "female", "chick", "lady", "beh", "babae (baliktad ang pagbigkas)", "Babae (pinaikli) (Gen Alpha)", "chix", "bebot"],
    related: ["Eabab", "Gurl", "Sis", "Kween / Kween-behavior", "Queen", "Wlw / wuhluhwuh", "Latina", "Monyeka", "Snack"]
  },
  "Eabab": {
    word: "Eabab",
    alternatives: ["babae", "girl", "female", "chick", "lady", "babae (binaliktad)", "Babae (binaliktad) (Gen Alpha)", "chix (binaliktad)", "bebot (binaliktad)"],
    related: ["Ea", "Gurl", "Sis", "Kween / Kween-behavior", "Queen"]
  },
  "Eat": {
    word: "Eat",
    alternatives: ["ang galing", "magaling", "nailed it", "slay", "killed it", "performed well", "ginalingan sobra", "panalo", "Ang galing (sa performance) (Gen Alpha)", "kinain ang performance", "walang itinira", "ubos"],
    related: ["Slay", "Cook", "Nailed it", "You ate that", "W", "Goat", "Fire", "Pop off", "Buss", "Solid"]
  },
  "Echo Papa": {
    word: "Echo Papa",
    alternatives: ["pakialamero", "nagpapapansin", "epal", "attention seeker", "meddler", "busybody", "sawsaw suka", "nakikisawsaw", "Pansinin mo ako (Gen Alpha)", "singit", "pabida", "mapapel"],
    related: ["Ksp", "Pick Me", "Extra / so extra", "Main Character Vibe", "Thirsty", "Cringe", "Sus", "Paras"]
  },
  "Echo Tango": {
    word: "Echo Tango",
    alternatives: ["gulo", "kaguluhan", "trouble", "mess", "chaos", "away", "rambol", "Gulo (Gen Alpha)", "iskandalo", "sigalot", "basag-ulo"],
    related: ["RD (Relationship Drama)", "Menty B", "Womp-womp", "Out of pocket", "Red flag", "Low vibration", "Potek / Pucha"]
  },
  "Echoz lang": {
    word: "Echoz lang",
    alternatives: ["joke lang", "biro lang", "just kidding", "charot", "not serious", "hindi seryoso", "charing", "Biro lang (Gen Alpha)", "kunwari lang", "hindi totoo (pabiro)", "jinojoke lang kita"],
    related: ["Eme", "Psych", "Tralalero tralala", "Burts", "Womp-womp", "Cap", "Sksksk"]
  },
  "Eduls": {
    word: "Eduls",
    alternatives: ["matanda", "nakakatanda", "elders", "boomer", "older generation", "gurang", "matatanda (pabiro)", "Matatanda (Gen Alpha)", "nakatatanda (pabiro)", "may edad na"],
    related: ["OK boomer", "Old School", "Cheugy", "Cringe", "L", "Low vibration"]
  },
  "Eka": {
    word: "Eka",
    alternatives: ["ikaw", "you", "ka", "Ikaw (pinaikli/binaliktad) (Gen Alpha)", "kita (binaliktad)"],
    related: ["Ekalal", "Ea", "Eabab", "Gurl", "Sis"]
  },
  "Ekalal": {
    word: "Ekalal",
    alternatives: ["lalaki", "boy", "guy", "male", "man", "lalake (binaliktad)", "Lalaki (binaliktad) (Gen Alpha)", "barako (binaliktad)", "kelot (binaliktad)"],
    related: ["Orb", "Lek", "Gar", "Bossing", "Eka", "Chad alpha", "Mr. bombastic", "Sigma", "Snack"]
  },
  "Ekans": {
    word: "Ekans",
    alternatives: ["snake", "ahas", "traydor", "backstabber", "two-faced", "ahas (binaliktad)", "mapagkunwari", "Ahas (Gen Alpha)", "plastik", "balimbing", "madulas"],
    related: ["Snitch", "Impostor", "Sus", "Opp", "Paras", "Red flag", "Cap", "Cringe"]
  },
  "Eme": {
    word: "Eme",
    alternatives: ["biro", "joke", "charot", "just kidding", "playful", "not serious", "hindi totoo (pabiro)", "kunwari lang", "Biro (Gen Alpha)", "charing lang", "kalokohan (pabiro)", "katuwaan lang"],
    related: ["Echoz lang", "Emezing", "Psych", "Tralalero tralala", "Burts", "Womp-womp", "Sksksk", "Cringe", "Yarn"]
  },
  "Emezing": {
    word: "Emezing",
    alternatives: ["amazing", "wow", "astig", "galing", "pabirong amazing", "fantastic", "grabe", "nakakamangha (pabiro)", "Wow (pabiro) (Gen Alpha)", "sobrang galing (pabiro)", "bongga (pabiro)"],
    related: ["Eme", "Lit", "Fire", "Sheesh", "Pog / Poggers", "Slay", "Buss", "Fab", "Goat", "9001", "Solid"]
  },
  "Emotional damage": {
    word: "Emotional damage",
    alternatives: ["emosyonal na pinsala", "heartbreak", "sakit sa damdamin", "trauma", "psychological damage", "hurt feelings", "nasaktan ang damdamin", "sakit", "Masakit sa damdamin (Gen Alpha)", "dinibdib", "wasak ang puso", "sakit sa puso"],
    related: ["Menty B", "Oof", "Big L", "Low vibration", "RD (Relationship Drama)", "Cringe", "Womp-womp", "Shook", "Yike / yikes", "Potek / Pucha", "Sus"]
  },
  "Erm actually": {
    word: "Erm actually",
    alternatives: ["sa totoo lang", "actually", "in fact", "well actually", "technically", "kontra (pabida)", "pasimpleng pagtama", "Sa totoo lang (pabida) (Gen Alpha)", "ang totoo niyan (mayabang na tono)", "pabidang koreksyon", "epal na koreksyon"],
    related: ["NPC", "Ego", "Cringe", "Sus", "Pressed", "Shade", "OK boomer", "Extra / so extra"]
  },
  "Estetik": {
    word: "Estetik",
    alternatives: ["aesthetic", "maganda sa mata", "may dating", "stylish", "pleasing to the eye", "artistic", "maganda tingnan", "kaaya-aya", "Maganda (sa paningin) (Gen Alpha)", "maayos tingnan", "pulido", "maganda ang disenyo"],
    related: ["Core", "Drip", "Aura", "Vibe", "Fit check", "On Fleek", "Yassify", "Slay", "Fab", "Gucci", "Demure", "Glow up", "Looks-maxing", "Main slay"]
  },
  "Extra / so extra": {
    word: "Extra / so extra",
    alternatives: ["pabida", "pabibo", "OA", "overacting", "dramatic", "so extra", "attention whore", "sobra sa arte", "kulang sa pansin", "Pabida (Gen Alpha)", "sobra-sobra ang kilos", "nagpapapansin", "mapapel", "OA masyado"],
    related: ["Ksp", "Pick Me", "Echo Papa", "Main Character Vibe", "Thirsty", "Clout", "Cringe", "Zesty", "Party popper", "Sksksk", "Unlimited"]
  },
  "Eyy": {
    word: "Eyy",
    alternatives: ["hey", "hi", "hello", "yo", "sup", "panawag", "pambati", "uy (pa-cool)", "Pansin (Gen Alpha)", "psst", "oi (pa-cool)"],
    related: ["Ayo", "Bossing", "Sheesh", "Shoutout", "Pog / Poggers", "Lit"]
  },
  "Fab": {
    word: "Fab",
    alternatives: ["fabulous", "astig", "maganda", "cool", "great", "wonderful", "bongga", "taray", "Maganda (Gen Alpha)", "napakaganda", "sosyal", "pang-reyna"],
    related: ["Slay", "Lit", "Gucci", "On Fleek", "Estetik", "Yassify", "Queen", "Kween / Kween-behavior", "Drip", "Solid", "Buss"]
  },
  "Fanum tax": {
    word: "Fanum tax",
    alternatives: ["buraot", "taking food without asking", "sharing tax", "food tax", "stealing food playfully", "hingi ng pagkain", "patikim (sapilitan)", "Buraot sa pagkain (Gen Alpha)", "kuha ng pagkain ng iba", "nanghihingi ng pagkain", "kain ng pagkain ng iba"],
    related: ["Lafang", "Paras", "Mani", "Glizzy", "Snack", "Thirsty", "Cringe"]
  },
  "Fax": {
    word: "Fax",
    alternatives: ["facts", "totoo", "katotohanan", "truth", "tunay", "walang biro", "seryoso", "Totoo (Gen Alpha)", "totoong nangyari", "walang duda", "legit", "pinaikling salita na facts at ibinatay sa tunog"],
    related: ["All fax", "Fax only", "No cap", "Fr, fr", "No printer", "On God", "Periodt", "Reality check"]
  },
  "Fax only": {
    word: "Fax only",
    alternatives: ["puro totoo", "katotohanan lang", "facts only", "no lies", "truth only", "walang halong kasinungalingan", "Totoo lang (Gen Alpha)", "walang bola", "tanging katotohanan"],
    related: ["Fax", "All fax", "No cap", "Fr, fr", "No printer", "On God", "Periodt", "Reality check"]
  },
  "Fighting": {
    word: "Fighting",
    alternatives: ["laban lang", "go for it", "you can do it", "cheer up", "don't give up", "stay strong", "kaya mo yan", "huwag sumuko", "Laban lang (Gen Alpha)", "sige lang", "ituloy mo lang", "lakasan ang loob", "Mula sa literal na kahulugan ng salitang ingles na Fighting (paglalaban). Sa Henerasyong Alpha, ginagamit din ang salitang fighting upang magbigay suporta sa taong napanghihinaan ng loob o nalulungkot."],
    related: ["Push", "W", "Goat", "Slay", "Pop off", "Power hug", "Positive Aura", "Manifest"]
  },
  "Finna": {
    word: "Finna",
    alternatives: ["fixing to", "going to", "about to", "malapit nang gawin", "gonna", "gagawin ko na", "Malapit na (gawin) (Gen Alpha)", "sa susunod na gagawin", "balak gawin", "Kontraksyon ng salitang fixing to."],
    related: ["Push", "Yeet /yit"]
  },
  "Fire": {
    word: "Fire",
    alternatives: ["angas", "astig", "sobrang galing", "cool", "lit", "awesome", "excellent", "on fire", "matindi", "grabe sa ganda/galing", "Astig (Gen Alpha)", "nag-aapoy sa galing", "walang katulad", "bomba"],
    related: ["Lit", "Dank", "Mad lit", "Slay", "Cook", "Buss", "9001", "Solid", "Goat", "OP", "Cracked", "Pog / Poggers", "Sheesh"]
  },
  "Fit check": {
    word: "Fit check",
    alternatives: ["ootd", "outfit check", "showing outfit", "style check", "what I'm wearing", "ano suot mo", "patingin ng porma", "Patingin ng damit (Gen Alpha)", "patingin ng OOTD", "damit check"],
    related: ["Drip", "Drippy", "Estetik", "Slay", "Gucci", "On Fleek", "Looks-maxing", "Yassify", "Main slay", "Fab", "Flex", "Clout"]
  },
  "Flaker": {
    word: "Flaker",
    alternatives: ["unreliable", "hindi tumutuloy sa plano", "cancels plans", "flake", "paasa", "hindi sumisipot", "drawing lang", "nang-iindian", "Hindi tumutupad sa usapan (Gen Alpha)", "mahilig mang-indian", "hindi mapagkakatiwalaan sa usapan", "pabago-bago ng isip"],
    related: ["Ghost / Ghosting", "L", "Cringe", "Red flag", "Womp-womp", "Paras", "Sus", "Cap"]
  },
  "Flex": {
    word: "Flex",
    alternatives: ["pagpapakita", "pagyayabang", "show off", "brag", "showing off", "boast", "pagmamayabang", "display", "ipagmalaki", "Pagyayabang (Gen Alpha)", "pagpapasikat", "pagbibida", "pasikat"],
    related: ["Clout", "Humblebrag", "Quiet flex", "Drip", "Slay", "Mani", "Secure the bag", "Goat", "OG", "Mr. bombastic", "Looks-maxing", "Mogging", "W"]
  },
  "Fomo": {
    word: "Fomo",
    alternatives: ["fear of missing out", "ayaw magpahuli", "envy", "social pressure", "inggit", "takot mahuli sa uso", "gusto laging kasama", "Takot maiwan (Gen Alpha)", "naiinggit sa iba", "gusto sumama lagi", "ayaw mapag-iwanan"],
    related: ["Clout", "Thirsty", "Extra / so extra", "Ksp", "Cringe", "Low vibration", "Menty B", "Obsessed"]
  },
  "Foxtrot Bravo": {
    word: "Foxtrot Bravo",
    alternatives: ["fast break", "umalis agad", "FB", "leave quickly", "sudden departure", "takbo agad", "alis na", "Takas (Gen Alpha)", "biglaang pag-alis", "karipas"],
    related: ["Run", "Ghost / Ghosting", "Yeet /yit", "Skrtt"]
  },
  "Foxtrot Delta": {
    word: "Foxtrot Delta",
    alternatives: ["feeling deep", "nagdadrama", "FD", "dramatic", "emo", "senti", "hugot", "malungkot (nagpapanggap)", "Nagdadrama (Gen Alpha)", "sobrang emosyonal", "OA sa drama", "malungkot-malungkutan"],
    related: ["Menty B", "Emotional damage", "Low vibration", "Delulu", "Cringe", "One-sided", "Oof", "Yap / yapping"]
  },
  "Fr, fr": {
    word: "Fr, fr",
    alternatives: ["for real", "totoo", "seryoso", "no joke", "legit", "for real for real", "walang biro talaga", "Totoo talaga (Gen Alpha)", "as in totoo", "pramis"],
    related: ["No cap", "Fax", "All fax", "On God", "Periodt", "Reality check", "Fax only"]
  },
  "Freddy fazbear": {
    word: "Freddy fazbear",
    alternatives: ["fnaf", "five nights at freddys", "acting like freddy", "freddy fazbearing", "animatronic", "parang si freddy", "Nakakatakot na bear (Gen Alpha)", "karakter sa horror game", "oso na nakakatakot"],
    related: ["Brainrot", "Ohio", "Uncanny", "Skibidi", "Cringe", "Meme lord", "Backrooms", "Yike / yikes", "Sus", "Skibidi toilet"]
  },
  "Frosh": {
    word: "Frosh",
    alternatives: ["freshman", "new student", "bagong salta", "first year", "newbie", "noob", "bagito", "Bagong estudyante (Gen Alpha)", "nasa unang taon", "baguhan sa eskwela"],
    related: ["Noob", "Beta", "8080", "Cringe", "Oof"]
  },
  "Gang": {
    word: "Gang",
    alternatives: ["tropa", "barkada", "squad", "crew", "friends", "homies", "clique", "katropa", "kabarkada", "Barkada (Gen Alpha)", "grupo ng magkakaibigan", "kasamahan"],
    related: ["Bossing", "Gar", "Lek", "Orb", "Twin / twinning", "Ride or die", "Shoutout", "Solid", "Mahjong Nights"]
  },
  "Gar": {
    word: "Gar",
    alternatives: ["pare", "bro", "friend", "dude", "kaibigan", "tol", "bes", "Kaibigan (lalaki/babae) (Gen Alpha)", "brad", "sis (kung babae)"],
    related: ["Lek", "Bossing", "Orb", "Sis", "Gurl", "Gang", "Ayo", "Twin / twinning"]
  },
  "Ghost / Ghosting": {
    word: "Ghost / Ghosting",
    alternatives: ["ghosting", "biglang nawala", "hindi nagpaparamdam", "stopped communicating", "disappeared", "iniwan sa ere", "hindi na nag-reply", "Nang-iwan (Gen Alpha)", "biglang hindi nagparamdam", "biglang di na kinakausap", "pag ghost", "stopping communication", "pang-iiwan sa ere", "hindi pagreply", "Pang-iiwan (Gen Alpha)", "hindi na pagpaparamdam", "biglaang pag-iwas"],
    related: ["Flaker", "RD (Relationship Drama)", "L", "Oof", "Red flag", "Rejected", "One-sided", "Sus", "Naur"]
  },
  "Glaze": {
    word: "Glaze",
    alternatives: ["sobrang papuri", "OA na papuri", "overpraising", "sipsip", "brown-nosing", "ass-kissing", "idolizing excessively", "sobrang bumibilib", "todo puri", "Sipsip (Gen Alpha)", "sobrang humahanga (negatibo)", "pagbubuhat ng bangko"],
    related: ["Simp", "Thirsty", "Pick Me", "Cringe", "Obsessed", "Fanum tax", "Ksp", "Extra / so extra", "Straw"]
  },
  "Glizzy": {
    word: "Glizzy",
    alternatives: ["hotdog", "sausage", "frankfurter", "wiener", "Hotdog (Gen Alpha)", "pagkaing hotdog", "TJ hotdog (brand generalization)"],
    related: ["Snack", "Lafang", "Bussin", "Mani", "Thirsty"]
  },
  "Glow up": {
    word: "Glow up",
    alternatives: ["transformation", "improvement", "nagpaganda", "nagpagwapo", "beautification", "self-improvement", "upgrade", "malaking pagbabago (sa itsura)", "gumanda/gumwapo", "Pagbabago sa itsura (Gen Alpha)", "pag-level up ng itsura", "pagbabagong-anyo"],
    related: ["Yassify", "Looks-maxing", "Mewing", "Mogging", "Slay", "Estetik", "Drip", "Fab", "On Fleek", "Snack", "W", "Queen", "Kween / Kween-behavior", "Positive Aura"]
  },
  "Goat": {
    word: "Goat",
    alternatives: ["greatest of all time", "pinakamagaling", "the best", "legend", "master", "expert", "numero uno", "walang tatalo", "Pinakamahusay (Gen Alpha)", "pinakamahusay sa lahat", "alamat", "hari"],
    related: ["OP", "Cracked", "W", "Cook", "Slay", "OG", "Retsam", "Pro", "9001", "Fire", "Lit", "Chad alpha", "Sigma", "Solid", "Buss", "Main slay", "Star-star"]
  },
  "Goblin Mode": {
    word: "Goblin Mode",
    alternatives: ["walang pake", "tamad", "magulo", "lazy mode", "slob mode", "unapologetically messy", "feral mode", "walang pakialam sa itsura", "burara mode", "Tamad mode (Gen Alpha)", "hindi nag-aayos", "pabaya sa sarili", "dugyot mode"],
    related: ["Low vibration", "Cheugy", "Cringe", "Recharge", "Menty B", "Brainrot", "NPC", "L", "Womp-womp"]
  },
  "Green flag": {
    word: "Green flag",
    alternatives: ["positibong katangian", "good sign", "positive trait", "ideal", "good quality", "keeper", "mabuting senyales", "magandang ugali", "Magandang katangian (Gen Alpha)", "dapat tularan", "mabuting impluwensya", "karapat-dapat"],
    related: ["Red flag", "Positive Aura", "Ride or die", "Respect begets respect", "Woke", "Normalize", "Demure", "Pookie bear", "Dasurv", "Solid"]
  },
  "Griddy": {
    word: "Griddy",
    alternatives: ["nakaka-LSS", "nakakaadik", "catchy", "addictive", "viral dance", "popular dance", "sayaw na viral", "Sayaw (viral) (Gen Alpha)", "sayaw na uso", "sayaw sa TikTok"],
    related: ["Bop", "Toma toma", "Skibidi", "Brainrot", "Lit", "Dank", "Meme lord", "Party popper", "Yeet /yit"]
  },
  "Gucci": {
    word: "Gucci",
    alternatives: ["okay na okay", "ayos lang", "good", "fine", "all good", "great", "excellent", "stylish", "ok lang", "walang problema", "Ayos lang (Gen Alpha)", "maganda", "dekalidad", "mahal (brand)"],
    related: ["Lit", "Fire", "Drip", "On Fleek", "Fab", "Solid", "Estetik", "Slay", "OG", "Mr. bombastic", "Vibe", "Masyadong chill"]
  },
  "Gurl": {
    word: "Gurl",
    alternatives: ["girl", "babae", "sis", "friend", "female friend", "term of endearment", "beh", "bessy", "Babae (tawag) (Gen Alpha)", "bakla (tawag sa kaibigan)", "teh", "Slang para sa girl, ginagamit ng mga kabataan lalo na sa memes"],
    related: ["Sis", "Ea", "Eabab", "Kween / Kween-behavior", "Queen", "Yas / yas gurl", "Baks", "Gar", "Bossing", "Pookie bear", "Twin / twinning"]
  },
  "Gwad": {
    word: "Gwad",
    alternatives: ["god", "oh my god", "omg", "astig", "superior", "lord", "oh my lord", "grabe", "diyos ko", "Nakupo (pa-cool) (Gen Alpha)", "naku po", "susmaryosep (pa-cool)", "jusko"],
    related: ["Sheesh", "Pog / Poggers", "Lit", "Fire", "Yassify", "Slay", "9001", "Emezing", "Oof", "Yike / yikes", "Shook"]
  },
  "Gyatt / Gyat": {
    word: "Gyatt / Gyat",
    alternatives: ["goddamn", "malaki pwet", "big booty", "attractive body", "thicc", "curvy", "nice ass", "malaking balakang", "sexy ang katawan", "Malaki ang pwet (Gen Alpha)", "maganda ang hubog ng katawan", "borta (babae)", "malusog ang pwet"],
    related: ["Snack", "Buttah", "Latina", "Sobrang latina", "Monyeka", "Thirst trap", "Drip", "Slay", "Sobrang sikip / shikip", "Bembang", "Looks-maxing", "Rizz"]
  },
  "Hits diff": {
    word: "Hits diff",
    alternatives: ["iba ang dating", "it hits different", "special feeling", "unique impact", "feels special", "nostalgic", "may kakaibang epekto", "kakaiba ang pakiramdam", "Iba ang tama (Gen Alpha)", "may kirot (sa puso)", "nakakaantig", "kakaibang tama", "Pinaikling bersyon ng it hits different (Ingles)"],
    related: ["Vibe", "Aura", "Estetik", "Oof", "Shook", "Menty B", "Emotional damage", "Low vibration", "Nostalgia", "Core"]
  },
  "Humblebrag": {
    word: "Humblebrag",
    alternatives: ["pa-humble na pagyayabang", "subtle brag", "false modesty", "indirect boasting", "kunwaring mapagkumbaba pero nagyayabang", "Pasimpleng yabang (Gen Alpha)", "pagyayabang na patago", "yabang na di halata"],
    related: ["Flex", "Quiet flex", "Clout", "Pick Me", "Cringe", "Ksp", "Extra / so extra", "Sus", "Shade"]
  },
  "Ick": {
    word: "Ick",
    alternatives: ["nakakadiri", "turn-off", "eww", "gross", "kadiri", "disgusting", "unattractive trait", "ayoko sa ugali", "hindi kaaya-ayang ugali", "Nakakadiri (ugali) (Gen Alpha)", "nakakabanas na ugali", "nakakasuka (ugali)", "pangit na ugali"],
    related: ["Cringe", "Off", "Pet peeve", "Cheugy", "Red flag", "Sus", "Womp-womp", "Low vibration", "Negative aura", "Yike / yikes"]
  },
  "Impostor": {
    word: "Impostor",
    alternatives: ["peke", "nagpapanggap", "fake", "pretender", "sus", "fraud", "deceiver", "mapagpanggap", "hindi totoo", "Peke (Gen Alpha)", "manloloko", "huwad", "doble kara"],
    related: ["Sus", "Snitch", "Ekans", "NPC", "Cap", "Jabaited", "Caught in 4k", "Red flag", "Cringe", "Cheugy", "Paras"]
  },
  "It’s giving…": {
    word: "It’s giving…",
    alternatives: ["vibe", "parang", "it seems like", "nagbibigay ng", "it has the energy of", "looks like", "ang dating ay...", "mukhang...", "Parang (Gen Alpha)", "ang dating niya ay...", "nagpapahiwatig ng...", "ang vibes ay..."],
    related: ["Aura", "Vibe", "Main Character Vibe", "Estetik", "Core", "Level", "Slay", "Cringe", "Demure", "Zesty", "Positive Aura", "Negative Aura", "Low vibration"]
  },
  "Jabaited": {
    word: "Jabaited",
    alternatives: ["napaniwala", "naloko", "tricked", "baited", "fooled", "deceived", "scammed", "na-uto", "na-isahan", "Naloko (Gen Alpha)", "nadale", "na-prank", "na-budol"],
    related: ["Psych", "Cap", "Impostor", "L", "Cringe", "Womp-womp", "Oof", "Sus", "Caught in 4k"]
  },
  "Jampacked": {
    word: "Jampacked",
    alternatives: ["puno", "busy", "siksikan", "full", "crowded", "packed", "loaded", "punong-puno", "sobrang daming tao/gawain", "Puno (Gen Alpha)", "dagsa", "walang bakante", "sobrang dami"],
    related: ["Unlimited", "Menty B", "Lit", "Fire", "Recharge"]
  },
  "jawn": {
    word: "jawn",
    alternatives: ["bagay", "gamit", "tao", "lugar", "thing", "stuff", "item", "person", "place", "anumang bagay", "Kahit ano (Gen Alpha)", "kung ano man yan", "kemerut (colloquial)"],
    related: ["Eme", "whatever"]
  },
  "Jelq": {
    word: "Jelq",
    alternatives: ["penis enlargement exercise", "male enhancement technique", "sexual health exercise", "ehersisyo sa ari", "pampalaki ng ari", "Ehersisyo sa ari (Gen Alpha)", "paraan para lumaki ang ari", "pagpapalaki ng titi"],
    related: ["Bembang", "Goon / gooning", "Thirsty", "Looks-maxing", "Mogging", "Chad alpha", "Rizz"]
  },
  "Just put the fries in the bag": {
    word: "Just put the fries in the bag",
    alternatives: ["tigil na", "hinto na", "move on", "stop talking", "enough said", "drop it", "tama na yan", "ayoko na marinig", "Move on na (Gen Alpha)", "manahimik ka na", "itigil mo na yang sinasabi mo", "tapusin na ang usapan"],
    related: ["Pluh", "Womp-womp", "Over", "Cringe", "Oof", "Tss", "Naur", "Shade", "Clapback"]
  },
  "Ksp": {
    word: "Ksp",
    alternatives: ["kulang sa pansin", "attention seeker", "papansin", "needy for attention", "gusto laging napapansin", "Pansinin niyo ako (Gen Alpha)", "nagpapapansin", "uhaw sa atensyon", "mapapel"],
    related: ["Echo Papa", "Pick Me", "Extra / so extra", "Clout", "Main Character Vibe", "Thirsty", "Cringe", "Paras", "Glaze", "Obsessed"]
  },
  "Kween / Kween-behavior": {
    word: "Kween / Kween-behavior",
    alternatives: ["queen", "kween behavior", "slay queen", "empowered woman", "confident woman", "regal", "reyna (pa-cute)", "astig na babae", "Reyna (Gen Alpha)", "babaeng may kumpiyansa", "idol", "diva"],
    related: ["Queen", "Slay", "Yas / yas gurl", "Gurl", "Sis", "Main slay", "Goat", "Fab", "OG", "Demure", "Estetik", "On Fleek", "Star-star"]
  },
  "L": {
    word: "L",
    alternatives: ["loss", "talo", "pagkatalo", "lose", "defeat", "failure", "lost", "bigo", "Talo (pinaikli) (Gen Alpha)", "natalo", "dehado", "bokya"],
    related: ["Big L", "Dog water", "Womp-womp", "Dempsey roll", "Ratioed", "Oof", "Mid", "Dasurv", "Rigged", "Copium", "Menty B", "Cringe"]
  },
  "Lafang": {
    word: "Lafang",
    alternatives: ["kain", "eat", "food trip", "pig out", "feast", "devour", "lamon", "kumain nang marami", "Kain (matakaw) (Gen Alpha)", "pagkain nang marami", "busog lusog", "takaw"],
    related: ["Bussin", "Snack", "Sobrang sarap", "Mani", "Fanum tax", "Glizzy", "Slaps"]
  },
  "Latina": {
    word: "Latina",
    alternatives: ["sobrang ganda", "beautiful", "gorgeous", "hot", "attractive woman", "napakaganda", "diyosa", "Magandang babae (Gen Alpha)", "babaeng Latino ang dating", "mala-dyosa ang ganda", "nakakaakit"],
    related: ["Monyeka", "Snack", "Sobrang latina", "Buttah", "Slay", "Queen", "Yassify", "Gyatt / Gyat", "Estetik", "Fab", "On Fleek", "Drip", "Looks-maxing"]
  },
  "Lek": {
    word: "Lek",
    alternatives: ["pare", "bro", "dude", "friend", "aleck", "buddy", "tol", "Kaibigan (lalaki) (Gen Alpha)", "utol", "kosa"],
    related: ["Gar", "Bossing", "Orb", "Ekalal", "Gang", "Ayo", "Twin / twinning", "Sis"]
  },
  "Let him cook": {
    word: "Let him cook",
    alternatives: ["hayaan mo siya", "give him space", "trust the process", "let them work", "don't interfere", "he knows what he's doing", "pabayaan mo muna", "alam niya ginagawa niya", "Hayaan siyang gumalaw (Gen Alpha)", "huwag pakialaman", "manood ka lang", "bigyan ng pagkakataon"],
    related: ["Cook", "W", "Nailed it", "Goat", "OP", "Slay", "Push", "Pro", "OG", "Solid", "Buss", "Fire"]
  },
  "Level": {
    word: "Level",
    alternatives: ["aura", "antas ng galing", "dating", "skill level", "vibe", "caliber", "standard", "antas", "husay", "Antas ng galing (Gen Alpha)", "kalidad", "estado", "kategorya"],
    related: ["Aura", "Rizz", "Positive Aura", "Vibe", "It’s giving…", "OP", "Rank", "Goat", "9001", "Cracked", "Solid", "Pro", "OG"]
  },
  "Lit": {
    word: "Lit",
    alternatives: ["ang lupet", "ang saya", "awesome", "cool", "exciting", "fire", "amazing", "fun", "sobrang saya", "astig", "Napakasaya/Astig (Gen Alpha)", "matindi", "grabe", "bomba"],
    related: ["Fire", "Dank", "Mad lit", "Slay", "Pog / Poggers", "Gucci", "Buss", "9001", "Goat", "Solid", "Emezing", "Yeet /yit", "Pop off"]
  },
  "Looks-maxing": {
    word: "Looks-maxing",
    alternatives: ["pagpapapogi", "self-improvement", "enhancing appearance", "beautification", "physical enhancement", "pagpapaganda", "pag-aayos ng itsura", "Pagpapaganda ng itsura (Gen Alpha)", "pag-maximize ng itsura", "todo ayos sa sarili", "pag-improve ng itsura"],
    related: ["Mewing", "Mogging", "Glow up", "Yassify", "Jelq", "Drip", "Estetik", "Slay", "Snack", "Chad alpha", "Buttah", "On Fleek", "Fit check", "Rizz", "Flex"]
  },
  "Lore": {
    word: "Lore",
    alternatives: ["kwento", "history", "background story", "backstory", "mythology", "narrative", "canon", "kasaysayan (ng isang bagay/tao)", "pinagmulan", "Kwento sa likod (Gen Alpha)", "alamat", "detalye ng kwento", "pinanggalingan"],
    related: ["NPC", "Backrooms", "Ohio", "Meme lord", "Skibidi toilet", "Freddy fazbear", "Copium", "Delulu", "Brainrot", "Core"]
  },
  "Low vibration": {
    word: "Low vibration",
    alternatives: ["bad vibes", "nakaka-drain", "negative energy", "toxic", "depressing", "unpleasant atmosphere", "masamang pakiramdam", "nakakababa ng mood", "Masamang enerhiya (Gen Alpha)", "hindi magandang pakiramdam", "nakakawalang gana", "malas"],
    related: ["Negative aura", "Off", "Ick", "Cringe", "Red flag", "Menty B", "Womp-womp", "Oof", "Goblin Mode", "L", "Sus"]
  },
  "Mad lit": {
    word: "Mad lit",
    alternatives: ["sobrang saya", "astig", "ganda ng vibes", "extremely cool", "very exciting", "insanely fun", "sobrang astig", "grabe sa saya", "Sobrang saya/Astig (Gen Alpha)", "todo saya", "party mode"],
    related: ["Lit", "Fire", "Dank", "Pog / Poggers", "Slay", "Buss", "Yeet /yit", "Pop off"]
  },
  "Mahjong Nights": {
    word: "Mahjong Nights",
    alternatives: ["sikretong gala", "gimik", "secret hangout", "late night activity", "friends gathering", "tagong lakad", "Sikretong lakad (Gen Alpha)", "lamyerda", "night out (patago)", "eskapo"],
    related: ["Gang", "Tambay", "Inuman", "Barkada trip", "Recharge", "Vibin'", "Twin / twinning"]
  },
  "Main Character Vibe": {
    word: "Main Character Vibe",
    alternatives: ["sentro ng atensyon", "bida", "protagonist energy", "feeling like the main character", "star quality", "laging bida", "pakiramdam na bida", "Bida-bida (Gen Alpha)", "feeling bida", "laging sentro", "ako ang bida"],
    related: ["Aura", "Vibe", "It’s giving…", "Ksp", "Extra / so extra", "Clout", "Slay", "Queen", "OG", "Flex", "Looks-maxing", "Manifest", "Pookie bear", "Star-star"]
  },
  "Main slay": {
    word: "Main slay",
    alternatives: ["pinaka-standout moment", "best outfit", "highlight performance", "peak moment", "pinakamagandang porma/performance", "Pinaka-astig na sandali (Gen Alpha)", "pinakabongga", "pinaka-angat"],
    related: ["Slay", "Kween / Kween-behavior", "Queen", "Goat", "W", "Fit check", "On Fleek", "Yassify", "Drip", "Fab", "Star-star", "Lit", "Fire", "Buss", "Solid"]
  },
  "Malewife": {
    word: "Malewife",
    alternatives: ["caring husband", "house husband", "supportive partner (male)", "domestic man", "lalaking maalaga sa bahay", "asawang lalaki na nasa bahay", "Lalaking asawa sa bahay (Gen Alpha)", "lalaking gumagawa ng gawaing bahay", "under de saya (pabiro)"],
    related: ["Beta", "Simp", "Pookie bear", "Green flag", "Demure", "Recharge", "Low vibration"]
  },
  "Mani": {
    word: "Mani",
    alternatives: ["pera", "money", "cash", "kwarta", "datung", "salapi", "Pera (Gen Alpha)", "budget", "gastos", "barya"],
    related: ["Secure the bag", "Flex", "Clout", "Lafang", "Bussin", "Fanum tax"]
  },
  "Manifest": {
    word: "Manifest",
    alternatives: ["confident vibes", "standout vibes", "attract desires", "make it happen", "visualize success", "law of attraction", "ipinapanalangin", "gustong mangyari", "Pag-attract ng gusto (Gen Alpha)", "hilingin at mangyayari", "positibong pag-iisip para matupad", "dasal"],
    related: ["Delulu", "Copium", "Aura", "Positive Aura", "Push", "Pookie bear", "Slay", "W", "Goat", "Green flag", "Woke"]
  },
  "Masyadong chill": {
    word: "Masyadong chill",
    alternatives: ["sobrang relax", "hindi nagmamadali", "too calm", "laid back", "unbothered", "kalmado lang", "walang kaba", "Relax lang (Gen Alpha)", "walang stress", "petiks", "kampante"],
    related: ["Nonchalant", "Vibe", "Vibin'", "Recharge", "Sigma", "Gucci", "Demure", "Positive Aura", "Goblin Mode"]
  },
  "Meh": {
    word: "Meh",
    alternatives: ["walang dating", "boring", "okay lang", "not impressive", "average", "uninterested", "so-so", "pwede na", "hindi masyadong maganda", "Okay lang (walang gana) (Gen Alpha)", "hindi nakaka-excite", "patapon", "walang kwenta"],
    related: ["Mid", "Cringe", "Ick", "Low vibration", "Womp-womp", "Dog water", "Cheugy", "L", "Out", "Off"]
  },
  "Meme lord": {
    word: "Meme lord",
    alternatives: ["meme expert", "funny person", "internet comedian", "king of memes", "magaling gumawa ng meme", "hari ng meme", "Nakakatawang tao sa internet (Gen Alpha)", "mahilig sa meme", "source ng meme", "komedyante"],
    related: ["Brainrot", "Dank", "Cringe", "Burts", "Clout", "Party popper", "Tralalero tralala", "Yap / yapping", "Shoutout"]
  },
  "Mentality": {
    word: "Mentality",
    alternatives: ["mindset", "attitude", "perspective", "way of thinking", "outlook", "pag-iisip", "pananaw", "Paraan ng pag-iisip (Gen Alpha)", "prinsipyo", "kaugalian sa pag-iisip", "diskarte sa isip"],
    related: ["Aura", "Vibe", "Sigma", "Chad alpha", "Beta", "Positive Aura", "Low vibration", "Woke", "Copium", "Delulu", "Brainrot", "Goat", "OG"]
  },
  "Menty B": {
    word: "Menty B",
    alternatives: ["mental breakdown", "matinding pagkabalisa", "emosyonal na paghihirap", "stress attack", "anxiety", "siraulo moment", "nasiraan ng bait (pabiro)", "Pagkakaroon ng mental breakdown (Gen Alpha)", "sobrang stress", "hindi na kinaya ng isip", "sumabog ang isip"],
    related: ["Emotional damage", "Low vibration", "Oof", "Cringe", "Womp-womp", "RD (Relationship Drama)", "Shook", "Backrooms", "Copium", "Delulu", "Brainrot", "L"]
  },
  "Mewing": {
    word: "Mewing",
    alternatives: ["jaw exercise", "face exercise", "improve jawline", "tongue posture", "ehersisyo sa panga", "pampaganda ng panga", "Ehersisyo sa mukha (Gen Alpha)", "pag-ayos ng postura ng dila", "pampahaba ng baba"],
    related: ["Looks-maxing", "Mogging", "Glow up", "Chad alpha", "Rizz", "Estetik", "Drip", "Slay", "Snack"]
  },
  "Mid": {
    word: "Mid",
    alternatives: ["hindi kahanga-hanga", "karaniwan lang", "average", "mediocre", "so-so", "not great", "sakto lang", "hindi maganda, hindi pangit", "Karaniwan lang (Gen Alpha)", "walang special", "pangkaraniwan", "pwede na"],
    related: ["Meh", "L", "Dog water", "Cheugy", "Cringe", "Overrated", "Womp-womp", "Out", "Off"]
  },
  "Mogging": {
    word: "Mogging",
    alternatives: ["magpaganda para mahigitan iba", "outshine others physically", "dominating by looks", "pagandahan", "paligsahan sa itsura", "Pagpapaganda para mang-asar (Gen Alpha)", "pagpapakitang mas maganda/gwapo", "pag-angat sa itsura"],
    related: ["Looks-maxing", "Mewing", "Glow up", "Chad alpha", "Rizz", "Slay", "Flex", "Drip", "Snack", "Buttah", "Main slay", "Clout", "W"]
  },
  "Monggo": {
    word: "Monggo",
    alternatives: ["mukhang monggoloid", "bobo", "tanga", "stupid", "slow-witted", "may kapansanan sa pag-iisip (derogatory)", "Bobo (nakakainsulto) (Gen Alpha)", "baliw (nakakainsulto)", "may sayad (nakakainsulto)", "abnormal (nakakainsulto)"],
    related: ["8080", "Sped", "Brainrot", "Dog water", "L", "Cringe", "Noob", "NPC", "Womp-womp"]
  },
  "Monyeka": {
    word: "Monyeka",
    alternatives: ["sobrang ganda", "manika", "doll-like beauty", "very beautiful", "gorgeous", "parang manika sa ganda", "Napakaganda (parang manika) (Gen Alpha)", "napakacute", "perpektong ganda", "mukhang manika"],
    related: ["Latina", "Sobrang latina", "Snack", "Slay", "Queen", "Kween / Kween-behavior", "Yassify", "Estetik", "Buttah", "Fab", "On Fleek", "Glow up", "Looks-maxing"]
  },
  "Mr. bombastic": {
    word: "Mr. bombastic",
    alternatives: ["may dating", "kumpiyansa", "confident man", "charismatic", "smooth operator", "mayabang (pero astig)", "malakas ang dating", "Lalaking mayabang at astig (Gen Alpha)", "ma-appeal", "mahangin (pero may dating)", "pogi na mayabang"],
    related: ["Chad alpha", "Rizz", "Buttah", "Sigma", "Slay", "OG", "Flex", "Goat", "Drip", "Main Character Vibe", "Looks-maxing"]
  },
  "Nailed it": {
    word: "Nailed it",
    alternatives: ["ginalingan", "perfect", "done perfectly", "succeeded", "aced it", "tamang-tama", "nakuha ng perpekto", "Ginalingan (Gen Alpha)", "perpekto ang gawa", "walang mintis", "sapul"],
    related: ["Cook", "Eat", "Slay", "W", "Goat", "Let him cook", "Solid", "Pop off", "Buss", "Pro"]
  },
  "Naur": {
    word: "Naur",
    alternatives: ["no", "hindi", "ayaw", "definitely not", "hindi (pa-cute/OA)", "Ayoko (pa-cute) (Gen Alpha)", "ayaw ko (pabiro)", "hindi pwede (pa-cute)"],
    related: ["Eme", "Cringe", "Opkors", "Pluh", "Yike / yikes", "Womp-womp", "Tss", "Just put the fries in the bag", "Over"]
  },
  "Negative aura": {
    word: "Negative aura",
    alternatives: ["kahihiyan", "negatibong enerhiya", "bad vibes", "toxic energy", "unpleasant presence", "masamang dating", "nakaka-badtrip", "Masamang enerhiya (Gen Alpha)", "hindi magandang pakiramdam (sa tao)", "nakakasira ng mood", "malas"],
    related: ["Aura", "Low vibration", "Off", "Ick", "Cringe", "Red flag", "Womp-womp", "Sus", "L", "Menty B"]
  },
  "Ngani": {
    word: "Ngani",
    alternatives: ["nga", "talaga", "indeed", "really", "truly", "oo nga", "totoo nga", "Talaga (Bisaya) (Gen Alpha)", "nga (Bisaya)", "kasi"],
    related: ["Oo, ngani", "Fr, fr", "Fax", "On God", "Yas / yas gurl"]
  },
  "Ni hao fin shyt": {
    word: "Ni hao fin shyt",
    alternatives: ["hello fine shit", "chinese meme song", "gibberish song", "funny phrase", "kantang walang kwenta (meme)", "Kantang nakakatawa (Gen Alpha)", "kantang Intsik na meme", "kantang pampa-brainrot"],
    related: ["Brainrot", "Ohio", "Tralalero tralala", "Skibidi", "Cringe", "What the sigma?", "Meme lord", "Dank", "Burts"]
  },
  "No cap": {
    word: "No cap",
    alternatives: ["no lie", "totoo", "for real", "hindi biro", "seryoso", "truth", "walang halong biro", "Walang kasinungalingan (Gen Alpha)", "hindi ako nagsisinungaling", "pramis"],
    related: ["Cap", "Fax", "All fax", "Fr, fr", "On God", "No printer", "Periodt", "Reality check", "Solid"]
  },
  "No printer": {
    word: "No printer",
    alternatives: ["walang imbento", "orihinal", "original", "not copied", "authentic", "hindi kinopya", "sariling gawa", "Orihinal (Gen Alpha)", "hindi galing sa iba", "galing sa sarili", "walang daya"],
    related: ["Fax", "All fax", "No cap", "Fr, fr", "On God", "OG", "Slay", "Cook", "Solid", "Goat"]
  },
  "Nonchalant": {
    word: "Nonchalant",
    alternatives: ["walang interes", "walang pagkabahala", "calm", "casual", "unconcerned", "cool", "indifferent", "kalmado", "parang walang pake", "Walang pakialam (kalmado) (Gen Alpha)", "hindi apektado", "kampante", "dedma"],
    related: ["Masyadong chill", "Vibe", "Vibin'", "Sigma", "Recharge", "Gucci", "Demure", "Aura", "Low vibration", "Sus"]
  },
  "Noob": {
    word: "Noob",
    alternatives: ["baguhan", "walang karanasan", "newbie", "beginner", "inexperienced", "amateur", "bago pa lang", "hindi pa marunong", "Baguhan (sa laro/bagay) (Gen Alpha)", "walang alam (sa laro)", "tanga sa laro"],
    related: ["Frosh", "Dog water", "L", "Beta", "8080", "Sped", "Cringe", "Womp-womp", "Mid", "NPC"]
  },
  "Normalize": {
    word: "Normalize",
    alternatives: ["gawing normal", "gawing tanggap", "make it standard", "accept as normal", "destigmatize", "gawing karaniwan", "Gawing katanggap-tanggap (Gen Alpha)", "gawing pangkaraniwan", "gawing normal ang dating abnormal"],
    related: ["Woke", "Reality check", "Green flag", "Respect begets respect", "Push", "Positive Aura", "Slay"]
  },
  "Not clickbait": {
    word: "Not clickbait",
    alternatives: ["legit", "totoo", "hindi panloloko", "genuine content", "real deal", "hindi daya", "Totoo (hindi clickbait) (Gen Alpha)", "hindi pang-uto", "tunay na balita/content", "walang daya"],
    related: ["No cap", "Fr, fr", "Resibo", "Fax", "All fax", "Reality check", "Solid"]
  },
  "Not it": {
    word: "Not it",
    alternatives: ["ayaw gawin", "hindi ako", "not me", "pass", "someone else do it", "hindi ako gagawa niyan", "Ayoko (Gen Alpha)", "iba na lang", "pass ako dyan", "ayoko niyan"],
    related: ["Not me", "Pluh", "Naur", "Womp-womp", "L", "Cringe"]
  },
  "Not me": {
    word: "Not me",
    alternatives: ["hindi ako yun", "self-aware humor", "relatable moment", "definitely not me (sarcastically)", "ako ba yan (pabiro)", "Ako 'to (nakakahiya/nakakatawa) (Gen Alpha)", "ako yan (pero ayaw aminin)", "ako 'to (sabay tago)"],
    related: ["Not it", "Cringe", "Yike / yikes", "Oof", "Shook", "Delulu", "Goblin Mode", "Sksksk", "Womp-womp"]
  },
  "Not the": {
    word: "Not the",
    alternatives: ["expression of disbelief", "funny awkward callout", "oh no not that", "highlighting something absurd", "hindi yan (nakakagulat/nakakahiya)", "Huwag yan (nakakahiya) (Gen Alpha)", "ano ba yan (pabiro)", "hindi dapat yan"],
    related: ["Cringe", "Yike / yikes", "Oof", "Womp-womp", "Shook", "Sus", "Plot twist", "Naur", "Emotional damage", "Uncanny"]
  },
  "NPC": {
    word: "NPC",
    alternatives: ["non-playable character", "scripted behavior", "no original thought", "robotic", "background character", "conformist", "parang robot", "sunud-sunuran lang", "Walang sariling isip (Gen Alpha)", "paulit-ulit ang kilos/sinasabi", "walang personalidad", "parang programado"],
    related: ["Brainrot", "Erm actually", "Impostor", "Sus", "Beta", "8080", "Monggo", "Goblin Mode", "Cringe", "Lore", "Skibidi toilet"]
  },
  "Nunya": {
    word: "Nunya",
    alternatives: ["none of your business", "wala kang pakialam", "mind your own business", "private matter", "hindi mo na kailangan malaman", "Wala kang pake (Gen Alpha)", "sikreto ko to", "huwag kang usisero", "labas ka na diyan"],
    related: ["Pluh", "Tss", "Shade", "Ghost / Ghosting", "Over"]
  },
  "Obsessed": {
    word: "Obsessed",
    alternatives: ["sobrang pagkagusto", "fixated", "hooked", "addicted", "can't get enough", "fanatic", "sobrang gusto", "adik", "Baliw na baliw (Gen Alpha)", "hindi mapigilang gusto", "sobrang fan", "hindi maka-move on"],
    related: ["Simp", "Glaze", "Thirsty", "Delulu", "Pookie bear", "Brainrot", "Rent free", "Menty B", "Copium"]
  },
  "Off": {
    word: "Off",
    alternatives: ["hindi kaaya-aya", "kakaiba", "weird", "strange", "unpleasant", "bad vibe", "may mali", "kakaiba ang dating", "Hindi maganda (ugali/vibe) (Gen Alpha)", "may topak (pabiro)", "hindi tama", "baliw (pabiro)"],
    related: ["Ick", "Cringe", "Low vibration", "Negative Aura", "Red flag", "Sus", "Yike / yikes", "Cheugy", "Uncanny", "Womp-womp"]
  },
  "OG": {
    word: "OG",
    alternatives: ["original gangster", "original", "respetado", "veteran", "pioneer", "true original", "orihinal", "matagal na sa laro", "Respetado (Gen Alpha)", "una", "kinikilala", "alamat"],
    related: ["Goat", "Retsam", "Chad alpha", "Sigma", "Clout", "Old School", "Pro", "Bossing", "Slay", "Solid", "Main Character Vibe", "No cap"]
  },
  "Ohio": {
    word: "Ohio",
    alternatives: ["kakaiba", "weird", "surreal", "strange place", "meme place", "cursed", "hindi normal na lugar", "Kakaibang lugar (meme) (Gen Alpha)", "walang katuturan", "nakakabaliw", "kakatwang lugar"],
    related: ["Brainrot", "Backrooms", "Uncanny", "Skibidi", "What the sigma?", "Cringe", "Yike / yikes", "Meme lord", "Dank", "Sus", "Plot twist"]
  },
  "OK boomer": {
    word: "OK boomer",
    alternatives: ["dismissing older generation", "outdated views", "old fashioned", "get with the times", "sige na matanda", "makaluma ka na", "Dismiss sa matanda (Gen Alpha)", "hindi ka na uso", "panahon mo pa", "laos ka na"],
    related: ["Eduls", "Old School", "Cheugy", "Cringe", "L", "Womp-womp", "Shade", "Clapback", "Woke"]
  },
  "Old School": {
    word: "Old School",
    alternatives: ["tradisyonal", "makaluma", "classic", "vintage", "retro", "old fashioned", "sinauna", "lumang istilo", "Makaluma (Gen Alpha)", "paraan ng dati", "nakaraan"],
    related: ["Eduls", "OK boomer", "Cheugy", "OG", "Demure", "Gucci", "Solid", "Vibe"]
  },
  "On Fleek": {
    word: "On Fleek",
    alternatives: ["perpekto", "napakaganda", "napakagaling", "perfectly styled", "on point", "flawless", "sakto sa ganda", "walang mali", "Perpekto (itsura) (Gen Alpha)", "tamang-tama ang ayos", "pulidong-pulido", "taray"],
    related: ["Slay", "Drip", "Drippy", "Estetik", "Gucci", "Yassify", "Main slay", "Fab", "Glow up", "Snack", "Buttah", "Looks-maxing", "Fire"]
  },
  "On God": {
    word: "On God",
    alternatives: ["I swear", "totoo", "no lie", "I promise", "for real", "truthfully", "sumpa man", "pramis", "Totoo (sumpa man) (Gen Alpha)", "maniwala ka", "walang halong biro"],
    related: ["No cap", "Fr, fr", "Fax", "All fax", "No printer", "Periodt", "Reality check", "Solid"]
  },
  "On lock": {
    word: "On lock",
    alternatives: ["secured", "sure na", "guaranteed", "under control", "mastered", "handled", "sigurado na", "kontrolado", "Sigurado (Gen Alpha)", "nakaselyo na", "walang palya", "nakareserba na"],
    related: ["W", "Nailed it", "Secure the bag", "Solid", "Goat", "Pro", "OG", "No cap"]
  },
  "On thin ice": {
    word: "On thin ice",
    alternatives: ["delikadong kalagayan", "warning", "malapit na mapahamak", "in trouble", "risky situation", "nasa bingit ng kapahamakan", "Babala (Gen Alpha)", "konti na lang", "mag-ingat ka", "delikado ka na"],
    related: ["Red flag", "L", "Oof", "Sus", "Menty B", "Womp-womp", "Pressed", "Cringe", "Yike / yikes", "Rush"]
  },
  "One-sided": {
    word: "One-sided",
    alternatives: ["may kinikilingan", "unrequited", "not mutual", "biased", "unfair", "isang panig lang", "hindi suklian", "Isang panig lang (pag-ibig) (Gen Alpha)", "siya lang ang may gusto", "walang kapalit na pagtingin", "ikaw lang ang nagmamahal"],
    related: ["Simp", "Delulu", "RD (Relationship Drama)", "L", "Pookie bear", "Obsessed", "Menty B", "Ghost / Ghosting", "Copium", "Low vibration", "Cringe"]
  },
  "Oo, ngani": {
    word: "Oo, ngani",
    alternatives: ["oo nga", "talaga nga", "yes indeed", "that's right", "truly", "Oo talaga (Bisaya) (Gen Alpha)", "tama ka nga", "siyanga pala"],
    related: ["Ngani", "Fr, fr", "On God", "Fax", "Yas / yas gurl", "Opkors"]
  },
  "Oof": {
    word: "Oof",
    alternatives: ["expression of sympathy", "awkwardness", "pain", "cringe", "ouch", "yikes", "aray", "sakit (expression)", "Nakaka-awkward (expression) (Gen Alpha)", "naku", "patay", "ay"],
    related: ["Cringe", "Yike / yikes", "Emotional damage", "Menty B", "Womp-womp", "L", "Big L", "Shook", "Pressed", "Sus", "Potek / Pucha", "Low vibration", "Not the"]
  },
  "OOMF": {
    word: "OOMF",
    alternatives: ["one of my followers", "one of my friends", "social media reference", "anonymous mention", "isa sa mga kaibigan/follower ko", "Isa sa followers (Gen Alpha)", "kakilala sa social media", "yung isa kong follower"],
    related: ["Tea", "Yap / yapping", "Shoutout", "Clout", "Sus", "QRT", "Shade"]
  },
  "OP": {
    word: "OP",
    alternatives: ["overpowered", "sobrang galing", "sobrang lakas", "too strong", "unbeatable", "god-tier", "napakalakas", "walang tatalo (sa laro)", "Sobrang lakas (sa laro) (Gen Alpha)", "hindi makatarungan sa lakas", "hindi kaya"],
    related: ["Cracked", "Goat", "W", "Cook", "Slay", "9001", "Level", "Pro", "Retsam", "Solid", "Fire", "Lit", "Dempsey roll"]
  },
  "Open-up": {
    word: "Open-up",
    alternatives: ["magbahagi ng nararamdaman", "share feelings", "be vulnerable", "confide", "reveal thoughts", "magsabi ng saloobin", "magtapat", "Magsabi ng nararamdaman (Gen Alpha)", "ilabas ang sama ng loob/saya", "maging bukas"],
    related: ["Tea", "RD (Relationship Drama)", "Menty B", "Vibe check", "Yap / yapping", "Positive Aura", "Recharge", "Power hug"]
  },
  "Opkors": {
    word: "Opkors",
    alternatives: ["of course", "syempre", "naturalmente", "obviously", "sure", "syempre naman (pa-cute)", "Oo naman (Gen Alpha)", "oo naman (pabiro)", "siyempre"],
    related: ["Yas / yas gurl", "Naur", "Eme", "Yarn", "Fr, fr"]
  },
  "Opp": {
    word: "Opp",
    alternatives: ["opposition", "kalaban", "kaaway", "enemy", "rival", "adversary", "kagalit", "kontra", "Kalaban (Gen Alpha)", "katunggali", "kaaway sa laro/buhay", "kabilang panig"],
    related: ["Snitch", "Ekans", "Impostor", "Sus", "Dempsey roll", "Roast", "Savage", "Red flag", "L", "Rigged"]
  },
  "Orb": {
    word: "Orb",
    alternatives: ["bro", "brother", "pare", "kaibigan", "homie", "tropa (binaliktad)", "Kaibigan (binaliktad) (Gen Alpha)", "utol (binaliktad)", "brad (binaliktad)"],
    related: ["Lek", "Gar", "Bossing", "Ekalal", "Gang", "Twin / twinning", "Ayo", "Sis"]
  },
  "Out": {
    word: "Out",
    alternatives: ["wala na sa uso", "lipas na", "hindi na relevant", "outdated", "passe", "not cool anymore", "laos na", "luma na", "Wala na sa uso (Gen Alpha)", "hindi na pinapansin", "tapos na ang kasikatan", "lipas na sa panahon"],
    related: ["Cheugy", "Old School", "L", "Mid", "Cringe", "OK boomer", "Womp-womp", "Meh", "Off"]
  },
  "Out of pocket": {
    word: "Out of pocket",
    alternatives: ["walang preno", "bastos", "wala sa lugar", "inappropriate", "wild", "disrespectful", "uncalled for", "hindi tama", "sobra", "Hindi angkop (Gen Alpha)", "hindi pinag-isipan", "bastos ang sinabi/ginawa", "lumagpas sa linya"],
    related: ["Savage", "Cringe", "Off", "Red flag", "Yike / yikes", "Tss", "Oof", "Womp-womp", "Potek / Pucha", "Sus"]
  },
  "Out of this World": {
    word: "Out of this World",
    alternatives: ["sobrang ganda", "kakaiba", "hindi kapani-paniwala", "amazing", "incredible", "extraordinary", "unbelievable", "grabe sa ganda/galing", "Hindi kapani-paniwala (sa ganda/galing) (Gen Alpha)", "sobrang husay", "pambihira", "ibang klase"],
    related: ["Lit", "Fire", "Goat", "Slay", "Pog / Poggers", "9001", "Emezing", "Fab", "Buss", "Solid", "Cracked", "Uncanny", "Main slay"]
  },
  "Outcast": {
    word: "Outcast",
    alternatives: ["hindi kasali", "loner", "misfit", "outsider", "rejected", "isolated", "laging mag-isa", "walang kaibigan", "Hindi belong (Gen Alpha)", "itinakwil", "walang grupo", "naiiba"],
    related: ["Beta", "NPC", "Low vibration", "L", "Menty B", "Cringe", "Oof", "Sigma", "Sus", "Ghost / Ghosting"]
  },
  "Over": {
    word: "Over",
    alternatives: ["tapos na", "hindi na interesado", "done", "finished", "moved on", "past it", "ayoko na", "wala na", "Tapos na (Gen Alpha)", "suko na", "move on na", "game over"],
    related: ["Pluh", "Just put the fries in the bag", "Naur", "L", "Womp-womp", "Ghost / Ghosting", "Flaker", "RD (Relationship Drama)"]
  },
  "Overrated": {
    word: "Overrated",
    alternatives: ["masyadong pinupuri", "hindi naman ganun kaganda", "overhyped", "not worth the praise", "given too much credit", "sobrang sikat pero di maganda", "Hindi sulit sa hype (Gen Alpha)", "masyado lang sikat", "hindi naman special", "OA sa papuri"],
    related: ["Mid", "Meh", "Cheugy", "Cringe", "L", "Womp-womp", "Clout", "Sus", "Cap"]
  },
  "Paras": {
    word: "Paras",
    alternatives: ["parasite", "peste", "freeloader", "user", "leech", "burden", "pabigat", "nakikisipsip", "Peste (tao) (Gen Alpha)", "umaasa sa iba", "walang ambag", "buraot (ugali)"],
    related: ["Snitch", "Flaker", "Ekans", "Ksp", "Cringe", "Red flag", "L", "Womp-womp", "Thirsty", "Fanum tax", "Straw"]
  },
  "Party popper": {
    word: "Party popper",
    alternatives: ["nagpapasaya", "life of the party", "entertainer", "fun person", "joker", "masayahin", "laging nagpapatawa", "Nagpapasaya sa party (Gen Alpha)", "komedyante ng grupo", "sentro ng kasiyahan"],
    related: ["Extra / so extra", "Main Character Vibe", "Burts", "Lit", "Slay", "Eme", "Tralalero tralala", "Positive Aura", "Pop off", "Yeet /yit", "Meme lord"]
  },
  "Periodt": {
    word: "Periodt",
    alternatives: ["period", "end of discussion", "that's final", "no more arguments", "full stop", "yun na yon", "tapos ang usapan", "Wala nang pero-pero (Gen Alpha)", "huling salita", "walang kokontra", "ganun na lang"],
    related: ["No cap", "Fr, fr", "On God", "Fax", "All fax", "Slay", "Clapback", "W", "Solid", "Reality check"]
  },
  "Pet peeve": {
    word: "Pet peeve",
    alternatives: ["nakakainis na gawain", "annoyance", "irritation", "bothersome habit", "thing that bugs you", "bagay na kinaiinisan", "Nakakainis na bagay (Gen Alpha)", "ayaw na ayaw ko", "nakakabwisit", "kinabubwisitan"],
    related: ["Ick", "Cringe", "Off", "Red flag", "Pressed", "Low vibration", "Oof", "Tss", "Yike / yikes"]
  },
  "Pick Me": {
    word: "Pick Me",
    alternatives: ["naghahanap ng atensyon", "attention seeker (female)", "validation seeker", "trying too hard to be liked", "papansin (sa lalaki/babae)", "gusto mapansin", "Papansin (Gen Alpha)", "nagmamalinis", "pa-victim", "nagpapa-awa"],
    related: ["Ksp", "Extra / so extra", "Clout", "Cringe", "Simp", "Thirsty", "Glaze", "Red flag", "Humblebrag", "Sus", "Ick"]
  },
  "Pink na pink": {
    word: "Pink na pink",
    alternatives: ["very pink", "sobrang rosas", "bright pink", "intensely pink", "kulay rosas na rosas", "Sobrang rosas (Gen Alpha)", "pusyaw na rosas", "kulay Barbie"],
    related: ["Estetik", "Slay", "On Fleek", "Yassify", "Fab", "Kween / Kween-behavior", "Candy", "Drip", "Main slay", "Glow up"]
  },
  "Pinoy bait": {
    word: "Pinoy bait",
    alternatives: ["content para sa Pinoy", "Filipino-targeted content", "pandering to Filipinos", "cultural pandering", "pang-akit sa Pinoy", "Content para sa Pilipino (Gen Alpha)", "ginawa para mag-viral sa Pinas", "pampa-trending sa Pinas"],
    related: ["Clout", "Cringe", "Thirsty", "Ksp", "Meme lord", "Brainrot", "Overrated", "Sus", "Cap"]
  },
  "Plot twist": {
    word: "Plot twist",
    alternatives: ["biglaang pagbabago", "unexpected turn", "surprise ending", "twist in the story", "hindi inaasahang pangyayari", "gulat na pangyayari", "Hindi inaasahan (sa kwento) (Gen Alpha)", "kakaibang pag-ikot ng kwento", "sorpresa sa dulo", "kakaibang wakas"],
    related: ["Oof", "Shook", "Shooketh", "Cringe", "Yike / yikes", "Womp-womp", "Sus", "Jabaited", "Uncanny", "Ohio"]
  },
  "Plug": {
    word: "Plug",
    alternatives: ["promote", "endorse", "recommend", "shoutout", "connect", "source", "irekomenda", "ipakilala", "Pag-promote (Gen Alpha)", "i-share", "i-advertise", "koneksyon"],
    related: ["Shoutout", "Flex", "Clout", "OG", "Mani", "Secure the bag", "Tea", "Yap / yapping"]
  },
  "Pluh": {
    word: "Pluh",
    alternatives: ["tapos na", "ayoko na", "end of conversation", "I'm done", "whatever", "dismissive sound", "wala na masabi", "Ayoko na (tunog) (Gen Alpha)", "bahala na", "suko na (sa usapan)", "ayoko na sayo"],
    related: ["Just put the fries in the bag", "Over", "Womp-womp", "Meh", "Tss", "Naur", "Cringe", "Ghost / Ghosting"]
  },
  "Podium": {
    word: "Podium",
    alternatives: ["magaling pero di pinakamagaling", "top 3", "achieved a high rank", "winner's stand", "near the top", "pasok sa top", "Nasa taas (pero di No.1) (Gen Alpha)", "runner-up", "panalo pa rin", "may napatunayan"],
    related: ["W", "Rank", "Goat", "Pro", "Solid", "Slay", "Cook", "OP", "Cracked", "9001"]
  },
  "Pog / Poggers": {
    word: "Pog / Poggers",
    alternatives: ["excitement", "approval", "play of the game", "awesome", "cool", "wow", "nice", "astig (expression)", "galing (expression)", "Wow (expression) (Gen Alpha)", "grabe (sa galing/saya)", "lupit (expression)"],
    related: ["Lit", "Fire", "Sheesh", "W", "Cook", "Slay", "Gwad", "Emezing", "9001", "Buss", "Solid", "Dank", "Shook", "Quaking", "Yeet /yit"]
  },
  "Pookie bear": {
    word: "Pookie bear",
    alternatives: ["term of endearment", "sweetheart", "darling", "my love", "baby", "mahal", "bebe ko", "Tawag sa mahal (Gen Alpha)", "irog", "sinta", "honey bunch"],
    related: ["Rawr", "Burger ka sakin", "Delulu", "Manifest", "Simp", "RD (Relationship Drama)", "Obsessed", "Twin / twinning", "Power hug", "One-sided", "Zesty"]
  },
  "Pop off": {
    word: "Pop off",
    alternatives: ["gawin nang todo", "mahusay", "excel", "go all out", "dominate", "shine", "ibuhos ang galing", "todo bigay", "Galingan (Gen Alpha)", "magpakitang-gilas", "rumampa", "sumabog sa galing"],
    related: ["Slay", "Cook", "Eat", "W", "Goat", "Nailed it", "Fire", "Lit", "Buss", "Solid", "Yeet /yit", "Party popper"]
  },
  "Positive Aura": {
    word: "Positive Aura",
    alternatives: ["positibong enerhiya", "good vibes", "charming personality", "uplifting presence", "magnetic", "magandang dating", "nakakagaan ng loob", "Magandang enerhiya (Gen Alpha)", "masayahin", "nakakahawa ang saya", "magaan kasama"],
    related: ["Aura", "Vibe", "Green flag", "Level", "Rizz", "Slay", "Manifest", "Respect begets respect", "Demure", "Gucci", "Kween / Kween-behavior", "Queen", "Power hug"]
  },
  "Potek / Pucha": {
    word: "Potek / Pucha",
    alternatives: ["expression of annoyance", "damn", "shit", "gosh", "frustration sound", "lintik", "anak ng...", "asar", "Bad trip (expression) (Gen Alpha)", "bwisit", "hay nako", "pucha naman", "lintik na buhay"],
    related: ["Oof", "Womp-womp", "Tss", "Yike / yikes", "Cringe", "Menty B", "Emotional damage", "Low vibration", "Red flag"]
  },
  "POV": {
    word: "POV",
    alternatives: ["point of view", "perspektibo", "perspective", "from this angle", "scenario", "sa pananaw ni...", "ganito ang nangyari (sa pananaw ko)", "Pananaw (Gen Alpha)", "kung ako ikaw (scenario)", "sitwasyon"],
    related: ["Lore", "It’s giving…", "Main Character Vibe", "Delulu", "Reality check", "Meme lord", "Cringe", "Shook", "Ohio"]
  },
  "Power hug": {
    word: "Power hug",
    alternatives: ["mahigpit na yakap", "strong hug", "comforting hug", "supportive embrace", "yakap na mahigpit", "Yakap (mahigpit) (Gen Alpha)", "yakap na pampalakas-loob", "yakap na masarap"],
    related: ["Fighting", "Pookie bear", "Green flag", "Positive Aura", "Recharge", "Oof", "RD (Relationship Drama)", "Menty B"]
  },
  "Pressed": {
    word: "Pressed",
    alternatives: ["sobrang apektado", "inis", "pikon", "annoyed", "triggered", "bothered", "upset", "pikon", "apektado masyado", "Apektado (Gen Alpha)", "na-trigger", "mainit ang ulo", "gigil"],
    related: ["Salty", "Cringe", "Oof", "Menty B", "Pet peeve", "Red flag", "Womp-womp", "Clapback", "Shade", "Tss", "Potek / Pucha", "Ratioed"]
  },
  "Pro": {
    word: "Pro",
    alternatives: ["professional", "eksperto", "expert", "skilled", "master", "highly capable", "dalubhasa", "bihasa", "Magaling (eksperto) (Gen Alpha)", "sanay na sanay", "pinakamagaling sa larangan"],
    related: ["Goat", "OG", "Retsam", "Cracked", "OP", "Rank", "Slay", "Cook", "Solid", "Chad alpha", "Sigma"]
  },
  "Psych": {
    word: "Psych",
    alternatives: ["biniro", "niloko", "gotcha", "tricked you", "just kidding", "sike", "na-joke", "biro lang pala", "Niloko (pabiro) (Gen Alpha)", "pinaglalaruan lang", "na-prank (pabiro)"],
    related: ["Eme", "Echoz lang", "Jabaited", "Cap", "Womp-womp", "Cringe", "Burts"]
  },
  "Push": {
    word: "Push",
    alternatives: ["ituloy", "gawin", "subukan nang husto", "persevere", "keep going", "strive", "ipagpatuloy", "laban pa", "Ituloy (Gen Alpha)", "gawin mo", "sige pa", "ipilit"],
    related: ["Fighting", "Manifest", "W", "Slay", "Pop off", "Goat", "Let him cook", "Dasurv"]
  },
  "QRT": {
    word: "QRT",
    alternatives: ["quote retweet", "reply with quote", "Twitter action", "X action", "pag-reply sa tweet na may quote", "Reply sa tweet (Gen Alpha)", "pag-comment sa post ng iba", "pag-share na may comment"],
    related: ["Ratioed", "Tea", "Yap / yapping", "Clapback", "Shade", "OOMF", "Shoutout", "Cringe", "Pressed"]
  },
  "Quaking": {
    word: "Quaking",
    alternatives: ["sobrang gulat", "kaba", "shook", "trembling", "speechless", "astonished", "nanginginig sa gulat/kaba", "gulat na gulat", "Gulat na gulat (Gen Alpha)", "hindi makapaniwala", "napatulala"],
    related: ["Shook", "Shooketh", "Pog / Poggers", "Sheesh", "Oof", "Plot twist", "Yike / yikes", "Snatched / Snatched my wig", "Cringe", "Uncanny"]
  },
  "Queen": {
    word: "Queen",
    alternatives: ["papuri sa babae", "confident woman", "empowering woman", "leader", "icon", "reyna", "idol na babae", "Reyna (papuri) (Gen Alpha)", "babaeng tinitingala", "huwaran", "diyosa"],
    related: ["Kween / Kween-behavior", "Slay", "Yas / yas gurl", "Gurl", "Sis", "Main slay", "Goat", "OG", "Fab", "Latina", "Monyeka", "Demure", "Positive Aura", "Star-star"]
  },
  "Quiet flex": {
    word: "Quiet flex",
    alternatives: ["subtle na pagyayabang", "classy brag", "understated show-off", "low-key boasting", "pasimpleng pagmamayabang", "hindi halatang nagyayabang", "Simpleng yabang (Gen Alpha)", "tahimik na pagpapakitang-gilas", "hindi maingay na pasikat"],
    related: ["Flex", "Humblebrag", "Clout", "Drip", "OG", "Gucci", "Estetik", "Solid", "Mr. bombastic", "Slay", "W", "Mani"]
  },
  "Rank": {
    word: "Rank",
    alternatives: ["posisyon sa laro", "antas", "level", "status", "tier", "rating", "ranggo", "lebel sa laro", "Antas (sa laro) (Gen Alpha)", "katayuan sa laro", "pwesto"],
    related: ["OP", "Pro", "Goat", "Level", "Podium", "W", "L", "Cracked", "Solid", "Beta", "Noob"]
  },
  "Ratioed": {
    word: "Ratioed",
    alternatives: ["mas maraming reply kaysa likes", "negative online reception", "getting owned online", "bad tweet ratio", "natalo sa comment section", "Talo sa social media (Gen Alpha)", "pinagkaisahan sa comments", "mas maraming galit kaysa gusto"],
    related: ["L", "Big L", "Cringe", "Clapback", "Roast", "Shade", "Womp-womp", "Oof", "Pressed", "Sus", "QRT"]
  },
  "Rawr": {
    word: "Rawr",
    alternatives: ["playful growl", "flirtatious sound", "cute animal noise", "expressing attraction", "ungol (pacute/palandi)", "Tunog ng hayop (palandi) (Gen Alpha)", "tunog tigre/leon (pabiro)", "tunog ng pusa (palandi)"],
    related: ["Pookie bear", "Burger ka sakin", "Zesty", "Candy", "Rizz", "Thirsty", "Eme", "Bembang", "Thirst trap", "Sksksk"]
  },
  "RD (Relationship Drama)": {
    word: "RD (Relationship Drama)",
    alternatives: ["relationship drama", "problema sa relasyon", "love problems", "couple issues", "toxic relationship", "away ng magjowa", "drama sa pag-ibig", "Away ng magkasintahan (Gen Alpha)", "LQ (lover's quarrel)", "problema sa jowa"],
    related: ["Tea", "Menty B", "Emotional damage", "One-sided", "Red flag", "Ghost / Ghosting", "L", "Cringe", "Yap / yapping", "Oof", "Low vibration", "Sus", "Pressed"]
  },
  "Reality check": {
    word: "Reality check",
    alternatives: ["paalala sa katotohanan", "wake up call", "dose of reality", "get real", "back to earth", "gising sa katotohanan", "harapin ang totoo", "Gising sa totoo (Gen Alpha)", "pagmulat sa katotohanan", "sampal ng katotohanan"],
    related: ["Delulu", "Copium", "No cap", "Fax", "Woke", "On God", "Menty B", "Shook", "Oof", "Clapback"]
  },
  "Receipts": {
    word: "Receipts",
    alternatives: ["patunay", "ebidensya", "proof", "screenshots", "evidence", "pruweba", "katibayan", "Patunay (Gen Alpha)", "kopya ng usapan", "litrato bilang ebidensya", "dokumento"],
    related: ["Resibo", "Caught in 4k", "No cap", "Fax", "All fax", "Snitch", "Jabaited", "Cap", "Clapback", "Sus"]
  },
  "Recharge": {
    word: "Recharge",
    alternatives: ["magpahinga", "rest", "recover energy", "take a break", "unwind", "chill", "mag-relax", "pahinga muna", "Magpahinga (Gen Alpha)", "magpalakas ulit", "mag-charge"],
    related: ["Vibin'", "Masyadong chill", "Goblin Mode", "Nonchalant", "Menty B", "Power hug", "Positive Aura", "Jampacked", "Low vibration"]
  },
  "Red flag": {
    word: "Red flag",
    alternatives: ["senyales ng problema", "warning sign", "bad omen", "danger signal", "deal breaker", "masamang senyales", "babala", "Huwag (senyales) (Gen Alpha)", "masamang ugali", "dapat iwasan", "masamang pangitain"],
    related: ["Green flag", "Ick", "Off", "Cringe", "Sus", "RD (Relationship Drama)", "L", "Low vibration", "Negative Aura", "Paras", "Snitch", "Cap", "Ghost / Ghosting", "Flaker", "Cheugy"]
  },
  "Reels": {
    word: "Reels",
    alternatives: ["maikling video", "Instagram Reels", "TikTok style video", "short form video", "video sa IG/FB", "Maikling video (social media) (Gen Alpha)", "IG story/FB story (video)", "video sa TikTok"],
    related: ["Fit check", "Slay", "Cringe", "Brainrot", "Clout", "Dank", "Meme lord", "Plug", "Shoutout", "Yap / yapping", "Griddy", "Toma toma", "Skibidi", "Thirst trap"]
  },
  "Rejected": {
    word: "Rejected",
    alternatives: ["binalewala", "nabasted", "turned down", "denied", "not accepted", "hindi tinanggap", "basted", "Hindi pinansin (Gen Alpha)", "tinanggihan", "hindi pinili", "ayaw sa akin"],
    related: ["L", "Big L", "Oof", "Ghost / Ghosting", "Womp-womp", "RD (Relationship Drama)", "One-sided", "Dasurv", "Menty B", "Cringe"]
  },
  "Rent free": {
    word: "Rent free",
    alternatives: ["laging nasa isip", "can't stop thinking about it", "haunting thoughts", "living in your head", "hindi maalis sa isip", "palaging iniisip", "Laging nasa isip (Gen Alpha)", "paulit-ulit sa isip", "bumabagabag", "hindi makalimutan"],
    related: ["Obsessed", "Brainrot", "Menty B", "Delulu", "Pookie bear", "Cringe", "Shook", "Oof", "Copium", "Low vibration", "Tea"]
  },
  "Resibo": {
    word: "Resibo",
    alternatives: ["ebidensya", "patunay", "proof", "receipts", "evidence", "pruweba (Filipino)", "Patunay (Filipino slang) (Gen Alpha)", "katibayan (Filipino)", "kopya ng patunay"],
    related: ["Receipts", "Caught in 4k", "No cap", "Fax", "All fax", "Snitch", "Jabaited", "Cap", "Clapback", "Sus"]
  },
  "Respect begets respect": {
    word: "Respect begets respect",
    alternatives: ["respeto para respetuhin", "give respect get respect", "treat others how you want to be treated", "magbigay galang para igalang", "Kasabihan tungkol sa respeto (Gen Alpha)", "kung ano ang iyong itinanim, siya mong aanihin (sa respeto)", "galangin mo ako, gagalangin kita"],
    related: ["Green flag", "Positive Aura", "Woke", "Normalize", "OG", "Demure", "On God", "Solid"]
  },
  "Retsam": {
    word: "Retsam",
    alternatives: ["master", "eksperto", "guro", "expert", "boss", "highly skilled", "master (binaliktad)", "dalubhasa (binaliktad)", "Eksperto (binaliktad) (Gen Alpha)", "pinuno (binaliktad)", "amo (binaliktad)"],
    related: ["Goat", "OG", "Pro", "Cracked", "OP", "Slay", "Bossing", "Chad alpha", "Sigma", "Solid", "9001"]
  },
  "Ride or die": {
    word: "Ride or die",
    alternatives: ["sobrang tapat", "loyal friend", "through thick and thin", "ultimate supporter", "bestie", "laging nandyan", "tunay na kaibigan", "Tapat na kaibigan (Gen Alpha)", "hindi ka iiwan", "kasama sa hirap at ginhawa", "karamay"],
    related: ["Gang", "Twin / twinning", "Green flag", "Bossing", "Pookie bear", "Solid", "OG", "Sis", "Gurl"]
  },
  "Rigged": {
    word: "Rigged",
    alternatives: ["hindi patas", "may dayaan", "unfair", "cheated", "manipulated", "fixed", "may luto", "dinaya", "May daya (Gen Alpha)", "may pandaraya", "hindi makatarungan", "may anomalya"],
    related: ["L", "Sus", "Cap", "Jabaited", "Cringe", "Red flag", "Womp-womp", "Ratioed", "Big L", "Dog water"]
  },
  "Rizz": {
    word: "Rizz",
    alternatives: ["charisma", "romantic appeal", "charm", "flirting skill", "game", "seductive power", "dumiskarte", "diskarte", "pambobola", "galing mang-akit", "pa-charming", "banat", "how to flirt", "paano manligaw (slang)", "galing sa babae/lalaki", "appeal", "dating", "slang para sa charisma", "pang-akit", "Karisma (Gen Alpha)", "galing dumale", "lakas maka-attract", "pogi points (sa diskarte)"],
    related: ["Chad alpha", "Sigma", "Buttah", "Aura", "Slay", "Mr. bombastic", "Rizzler", "Snack", "Thirst trap", "Pookie bear", "Rawr", "Pop off", "Looks-maxing", "Bembang", "Flex", "Gucci", "Gyatt / Gyat", "Zesty"]
  },
  "Rizzler": {
    word: "Rizzler",
    alternatives: ["taong may rizz", "master of rizz", "charmer", "smooth talker", "flirt expert", "magaling dumiskarte", "mambobola", "Taong magaling mang-akit (Gen Alpha)", "hari ng diskarte", "player (sa pag-ibig)", "bolero"],
    related: ["Rizz", "Chad alpha", "Sigma", "Mr. bombastic", "Goat", "Slay", "OG", "Buttah", "Snack", "Thirst trap", "Pookie bear", "Rawr", "Pro"]
  },
  "Roast": {
    word: "Roast",
    alternatives: ["mapaglarong panunukso", "comedic insult", "teasing", "making fun of", "friendly ridicule", "asar talo", "lait (pabiro)", "Pang-aasar (pabiro) (Gen Alpha)", "birong pang-asar", "pagtawanan (nang pabiro)", "bardagulan (pabiro)"],
    related: ["Clapback", "Savage", "Shade", "Cringe", "Burts", "Dempsey roll", "Pressed", "Oof", "Yike / yikes", "Tss", "Ratioed"]
  },
  "Run": {
    word: "Run",
    alternatives: ["tumakas", "escape", "flee", "get away", "meme sound", "takbo", "Takbo (meme) (Gen Alpha)", "umalis ka na", "dali", "karipas (meme)"],
    related: ["Foxtrot Bravo", "Oof", "Shook", "Cringe", "Yike / yikes", "Yeet /yit", "Ghost / Ghosting", "Skrtt", "Backrooms", "Ohio"]
  },
  "Rush": {
    word: "Rush",
    alternatives: ["nagmamadali", "hurry", "in a hurry", "hasty", "quick pace", "mabilisang kilos", "Nagmamadali (Gen Alpha)", "apurado", "dalian", "patakbo"],
    related: ["On thin ice", "Menty B", "Jampacked", "Yeet /yit", "Foxtrot Bravo", "Womp-womp"]
  },
  "Salty": {
    word: "Salty",
    alternatives: ["bitter", "inis", "pikon", "annoyed", "resentful", "sore loser", "naiinis", "napipikon", "Pikon (Gen Alpha)", "may sama ng loob", "irita", "maasim ang mukha"],
    related: ["Pressed", "L", "Cringe", "Red flag", "Oof", "Tss", "Womp-womp", "Clapback", "Shade"]
  },
  "Savage": {
    word: "Savage",
    alternatives: ["matapang", "walang takot", "brutal", "ruthless", "fierce", "bold", "unfiltered", "walang pakundangan", "matapang magsalita", "Astig/Matapang (Gen Alpha)", "diretsahan", "walang awa (sa salita)", "bargas"],
    related: ["Clapback", "Roast", "Shade", "Out of pocket", "Goat", "Fire", "Lit", "W", "Slay", "Dempsey roll", "Pop off", "Yeet /yit"]
  },
  "Secure the bag": {
    word: "Secure the bag",
    alternatives: ["nakuha ang inaasam", "get the money", "achieve the goal", "win", "succeed", "kumita ng pera", "nakuha ang premyo", "Kumita/Manalo (Gen Alpha)", "makakuha ng pera", "makuha ang gusto", "asinta"],
    related: ["Mani", "W", "On lock", "Flex", "Goat", "Clout", "Plug", "Slay", "Rizz", "Pro", "Solid"]
  },
  "Shade": {
    word: "Shade",
    alternatives: ["subtle insult", "indirect criticism", "passive-aggressive comment", "throwing shade", "sarcasm", "parinig", "patama", "Pasimpleng lait (Gen Alpha)", "pasaring", "insulto na patago", "patutsada"],
    related: ["Clapback", "Roast", "Savage", "Cringe", "Pet peeve", "Pressed", "Tss", "Humblebrag", "Sus", "Red flag", "Oof"]
  },
  "Sheesh": {
    word: "Sheesh",
    alternatives: ["expression of hype", "pagkabigla", "wow", "damn", "impressive", "unbelievable", "grabe (expression)", "wow (OA)", "Grabe (papuri/gulat) (Gen Alpha)", "nakakamangha", "lupit", "angas"],
    related: ["Pog / Poggers", "Lit", "Fire", "Gwad", "Slay", "Quaking", "Emezing", "9001", "Goat", "Buss", "Solid", "Oof", "Shook", "Yarn"]
  },
  "Shook": {
    word: "Shook",
    alternatives: ["gulat na gulat", "astonished", "surprised", "speechless", "stunned", "nabigla", "natulala", "Gulat (Gen Alpha)", "hindi makapagsalita sa gulat", "nanlaki ang mata", "napatanga"],
    related: ["Shooketh", "Quaking", "Pog / Poggers", "Sheesh", "Oof", "Plot twist", "Yike / yikes", "Cringe", "Snatched / Snatched my wig", "Uncanny", "Gwad", "Sus", "Emotional damage"]
  },
  "Shooketh": {
    word: "Shooketh",
    alternatives: ["grabe ang pagkagulat", "extremely shook", "beyond surprised", "flabbergasted", "sobrang gulat", "OA sa gulat", "Sobrang gulat (Gen Alpha)", "talagang nagulat", "hindi kinaya sa gulat"],
    related: ["Shook", "Quaking", "Pog / Poggers", "Sheesh", "Oof", "Plot twist", "Snatched / Snatched my wig", "Yike / yikes", "Cringe", "Emotional damage"]
  },
  "Shoutout": {
    word: "Shoutout",
    alternatives: ["pagbati", "pagkilala", "mention", "acknowledgment", "public praise", "batiin mo naman ako", "pagbati sa publiko", "Pagbati (Gen Alpha)", "pagbanggit", "pag-promote (ng tao)", "pagbigay pugay"],
    related: ["Plug", "Flex", "Clout", "OG", "Bossing", "Tea", "Ayo", "Eyy", "OOMF", "Gang", "Yap / yapping", "QRT"]
  },
  "Sigma": {
    word: "Sigma",
    alternatives: ["independent leader", "alpha vibes pero chill", "lone wolf", "self-reliant", "non-conformist", "cool introvert", "astig na mag-isa", "hindi kailangan ng iba", "Astig na independent (Gen Alpha)", "sariling diskarte", "tahimik pero may dating", "kakaiba"],
    related: ["Chad alpha", "Beta", "Rizz", "OG", "Goat", "Nonchalant", "What the sigma?", "Mr. bombastic", "Main Character Vibe", "Outcast", "Solid", "Aura", "Looks-maxing", "Mentality"]
  },
  "Simp": {
    word: "Simp",
    alternatives: ["sobrang sunud-sunuran sa gusto", "obsessive admirer", "overly attentive", "doormat", "white knight (pejorative)", "sunod-sunuran sa pag-ibig", "todo bigay sa crush", "Sunud-sunuran sa crush (Gen Alpha)", "sobrang papansin sa crush", "gagawin lahat para sa crush", "under sa jowa/crush"],
    related: ["Glaze", "Obsessed", "Pick Me", "Beta", "One-sided", "Delulu", "Cringe", "Pookie bear", "Thirsty", "L", "Womp-womp", "Paras", "Low vibration"]
  },
  "Sis": {
    word: "Sis",
    alternatives: ["sister", "friendly callname", "girl", "friend", "bessy", "ate", "kaibigang babae", "bes", "Kaibigang babae (tawag) (Gen Alpha)", "mars", "teh (pinaikli)"],
    related: ["Baks", "Gurl", "Kween / Kween-behavior", "Queen", "Yas / yas gurl", "Ea", "Eabab", "Twin / twinning", "Bossing", "Gar", "Pookie bear", "Lek", "Orb"]
  },
  "Skibidi": {
    word: "Skibidi",
    alternatives: ["skibidi toilet song", "viral meme sound", "good bad cool", "nonsense word", "Gen Alpha meme", "kantang skibidi", "sayaw na skibidi", "Skibidi (meme) (Gen Alpha)", "kantang pambata (meme)", "kantang nakaka-brainrot"],
    related: ["Brainrot", "Ohio", "Freddy fazbear", "What the sigma?", "Griddy", "Toma toma", "Cringe", "Dank", "Meme lord", "Tralalero tralala", "Uncanny", "Yike / yikes", "Skibidi toilet", "Skibidi ohio rizz", "Skibidi rizz"]
  },
  "Skibidi ohio rizz": {
    word: "Skibidi ohio rizz",
    alternatives: ["weird charisma", "cringe rizz", "absurd attraction attempt", "ultimate meme combo", "kakaibang pang-akit (meme)", "Pang-akit (kakaiba/meme) (Gen Alpha)", "walang kwentang diskarte (meme)", "kakaibang pang-Rizz"],
    related: ["Skibidi", "Ohio", "Rizz", "Brainrot", "Cringe", "What the sigma?", "Uncanny", "Yike / yikes", "Dank", "Meme lord", "Sus", "Off"]
  },
  "Skibidi rizz": {
    word: "Skibidi rizz",
    alternatives: ["cringey charm", "over-the-top flirting", "meme rizz", "absurd attempt to impress", "pang-akit na skibidi", "Pang-akit (skibidi meme) (Gen Alpha)", "diskarte na skibidi", "OA na pang-Rizz"],
    related: ["Skibidi", "Rizz", "Brainrot", "Cringe", "Gyatt / Gyat", "What the sigma?", "Yike / yikes", "Dank", "Meme lord", "Thirst trap", "Sus"]
  },
  "Skibidi toilet": {
    word: "Skibidi toilet",
    alternatives: ["YouTube series", "singing toilet heads", "Gen Alpha animation", "viral internet series", "serye sa YouTube (meme)", "Palikuran na kumakanta (Gen Alpha)", "ulo sa inidoro", "meme na may kubeta"],
    related: ["Skibidi", "Brainrot", "Ohio", "NPC", "Cringe", "Dank", "Meme lord", "Uncanny", "Freddy fazbear", "What the sigma?", "Yike / yikes"]
  },
  "Skrtt": {
    word: "Skrtt",
    alternatives: ["sound of brakes", "flexing departure", "cool exit", "swag move", "drift sound", "tunog ng preno (pa-cool)", "Pa-cool na alis (Gen Alpha)", "biglang alis (pa-angas)", "tunog ng sasakyan (pa-cool)"],
    related: ["Drip", "Flex", "Savage", "Fire", "Lit", "Run", "Yeet /yit", "Mr. bombastic", "Foxtrot Bravo", "Slay"]
  },
  "Sksksk": {
    word: "Sksksk",
    alternatives: ["expression of excitement", "laughter", "awkward laugh", "keyboard smash for emotion", "tawa (pa-cute/OA)", "Kilig/Tawa (expression) (Gen Alpha)", "nahihiyang tawa", "tunog ng tawa (text)", "hihihi (OA)"],
    related: ["Cringe", "Cheugy", "Eme", "Yike / yikes", "Burts", "Pookie bear", "Shook", "Quaking", "Rawr", "Yarn"]
  },
  "Slaps": {
    word: "Slaps",
    alternatives: ["sobrang ganda (kanta/pagkain)", "hits hard", "excellent", "amazing", "really good", "patok", "panalo ang lasa/tunog", "Sobrang ganda/sarap (Gen Alpha)", "ang ganda ng tama", "the best (kanta/pagkain)", "solid (kanta/pagkain)"],
    related: ["Fire", "Lit", "Dank", "Bussin", "Bop", "Cook", "Solid", "W", "Buss", "9001", "Goat"]
  },
  "Slay": {
    word: "Slay",
    alternatives: ["ginalingan", "kahanga-hanga", "killed it", "aced it", "excelled", "looked amazing", "slayable", "panalo", "arrasar", "bongga", "Ginalingan (Gen Alpha)", "nagpakitang-gilas", "namayagpag", "taray", "pak"],
    related: ["Cook", "Eat", "Nailed it", "You ate that", "W", "Goat", "Kween / Kween-behavior", "Queen", "On Fleek", "Main slay", "Fire", "Lit", "Drip", "Estetik", "Fab", "Pop off", "Buss", "Solid", "Star-star", "Yassify", "Rizz"]
  },
  "Slayable": {
    word: "Slayable",
    alternatives: ["kayang i-slay", "potential to be amazing", "can look great", "achievable slay", "kayang galingan", "Kayang magpakitang-gilas (Gen Alpha)", "pwedeng maging bongga", "may potensyal na Slay"],
    related: ["Slay", "Estetik", "Drip", "On Fleek", "Yassify", "Push", "Glow up", "Looks-maxing", "Fab", "Kween / Kween-behavior"]
  },
  "Sleeper": {
    word: "Sleeper",
    alternatives: ["underrated gem", "unexpectedly good", "hidden talent", "surprise hit", "hindi inaasahang maganda/magaling", "Hindi inaasahang magaling (Gen Alpha)", "nakatagong galing", "sorpresang ganda/galing", "tahimik pero magaling"],
    related: ["Mid", "Overrated", "OG", "W", "Goat", "Solid", "Dank", "Pro", "Uncanny", "Plot twist"]
  },
  "Snack": {
    word: "Snack",
    alternatives: ["gwapo", "maganda", "attractive person", "hot", "good-looking", "cutie", "chicha", "masarap tingnan", "Gwapo/Maganda (Gen Alpha)", "kaakit-akit na tao", "mukhang masarap (tao)", "papable/mamable"],
    related: ["Gyatt / Gyat", "Buttah", "Latina", "Monyeka", "Rizz", "Slay", "Drip", "Thirst trap", "Sobrang sarap", "Looks-maxing", "On Fleek", "Mr. bombastic", "Chad alpha", "Bembang"]
  },
  "Snatched / Snatched my wig": {
    word: "Snatched / Snatched my wig",
    alternatives: ["napakaganda", "napakagwapo", "astig ang dating", "perfect look", "flawless", "mind-blowing", "wig snatched", "nakakalaglag panga sa ganda", "Sobrang ganda/astig (Gen Alpha)", "hindi makapaniwala sa ganda/galing", "grabe sa ganda", "nawala ang wig ko (sa gulat)"],
    related: ["Slay", "On Fleek", "Yassify", "Shook", "Quaking", "Pog / Poggers", "Fire", "Lit", "Goat", "Main slay", "Fab", "Buss", "9001", "Out of this World"]
  },
  "Snitch": {
    word: "Snitch",
    alternatives: ["taga-sumbong", "traydor", "informant", "tattletale", "betrayer", "backstabber", "sumbungero", "naglalaglag", "Traydor (Gen Alpha)", "mapagkanulo", "hindi mapagkakatiwalaan", "espiya"],
    related: ["Ekans", "Impostor", "Sus", "Opp", "Caught in 4k", "Resibo", "Paras", "Red flag", "Cap", "L", "Cringe", "Womp-womp"]
  },
  "Sobrang latina": {
    word: "Sobrang latina",
    alternatives: ["sobrang ganda", "very beautiful", "extremely gorgeous", "stunning", "napakaganda (parang Latina)", "Sobrang ganda (parang Latina) (Gen Alpha)", "mala-dyosa ang dating", "sobrang sexy (parang Latina)"],
    related: ["Latina", "Monyeka", "Snack", "Slay", "Queen", "Yassify", "Buttah", "Gyatt / Gyat", "Estetik", "Fab", "On Fleek", "Drip", "Main slay", "Looks-maxing"]
  },
  "Sobrang sarap": {
    word: "Sobrang sarap",
    alternatives: ["very delicious (food)", "very attractive (person)", "looks good", "tastes good", "napakasarap (pagkain/tao)", "Sobrang sarap/ganda (Gen Alpha)", "nakakaakit (tao)", "nakakagutom (pagkain)", "masarap na masarap"],
    related: ["Bussin", "Buzzin", "Lafang", "Snack", "Gyatt / Gyat", "Slaps", "Drip", "Thirst trap", "Bembang", "Rizz", "Lit", "Fire"]
  },
  "Sobrang sikip / shikip": {
    word: "Sobrang sikip / shikip",
    alternatives: ["very tight (outfit)", "very beautiful/hot (person)", "sexy", "well-fitted", "stunning", "masikip ang damit (pero maganda)", "sobrang ganda/sexy", "Sobrang sexy/ganda (damit/tao) (Gen Alpha)", "fit na fit (damit)", "hubog na hubog (katawan)", "bakya"],
    related: ["Drip", "Snatched / Snatched my wig", "Slay", "Gyatt / Gyat", "Snack", "On Fleek", "Yassify", "Thirst trap", "Bembang", "Looks-maxing", "Estetik", "Fire"]
  },
  "Solid": {
    word: "Solid",
    alternatives: ["napakaganda", "mataas ang kalidad", "sobrang galing", "reliable", "dependable", "excellent", "cool", "matibay", "panalo", "Astig/Maaasahan (Gen Alpha)", "walang kupas", "dekalidad", "sigurado"],
    related: ["Dank", "Fire", "Lit", "Goat", "W", "Buss", "Pro", "On lock", "OG", "Slay", "Cook", "Cracked", "9001", "No cap"]
  },
  "Sped": {
    word: "Sped",
    alternatives: ["bobo", "tanga", "slow", "unintelligent", "special education (derogatory)", "may kapansanan sa isip (nakakainsulto)", "Bobo (nakakainsulto, pinaikli) (Gen Alpha)", "mahina umintindi (nakakainsulto)", "may toyo (nakakainsulto)"],
    related: ["8080", "Monggo", "Brainrot", "Noob", "L", "Dog water", "Cringe", "NPC", "Womp-womp"]
  },
  "Star-star": {
    word: "Star-star",
    alternatives: ["nagniningning", "kahanga-hanga", "ang galing mo", "panalo ka", "superstar", "shining star", "bituin (papuri)", "Bida (papuri) (Gen Alpha)", "ikaw na ang bida", "sikat", "namumukod-tangi"],
    related: ["Slay", "Goat", "W", "Queen", "Kween / Kween-behavior", "Main slay", "Fab", "Lit", "Fire", "OG", "Pop off", "On Fleek", "Main Character Vibe"]
  },
  "Straw": {
    word: "Straw",
    alternatives: ["sipsip", "overly loyal (negative)", "user", "fake friend", "brown-noser", "sumisipsip (sa tao)", "Sipsip (tao) (Gen Alpha)", "plastik (sa pakikisama)", "oportunista", "pabibo para mapansin"],
    related: ["Glaze", "Simp", "Snitch", "Paras", "Pick Me", "Cringe", "Red flag", "Ekans", "Ksp", "Thirsty"]
  },
  "Sus": {
    word: "Sus",
    alternatives: ["kahina-hinala", "kaduda-duda", "suspicious", "doubtful", "shady", "fishy", "may tinatago", "Nakakaduda (Gen Alpha)", "may kalokohan", "hindi mapagkakatiwalaan", "may kababalaghan"],
    related: ["Impostor", "Snitch", "Ekans", "Off", "Red flag", "NPC", "Cringe", "Jabaited", "Cap", "Rigged", "Plot twist", "Ohio", "Uncanny", "Yike / yikes"]
  },
  "Tea": {
    word: "Tea",
    alternatives: ["bagong balita", "chismis", "gossip", "latest news", "drama", "scoop", "truth", "kwento", "balita", "Chismis (Gen Alpha)", "anong latest?", "may alam ka ba?", "anong sagap mo?"],
    related: ["Co-worker core", "RD (Relationship Drama)", "Shoutout", "Yap / yapping", "QRT", "OOMF", "Resibo", "Receipts", "Snitch", "Sus", "Plot twist", "Cringe"]
  },
  "Teluk": {
    word: "Teluk",
    alternatives: ["kulet", "makulit", "annoying (playful)", "mischievous", "persistent", "kulit (binaliktad)", "Makulit (binaliktad) (Gen Alpha)", "pasaway (pabiro)", "bibo (binaliktad)"],
    related: ["Eme", "Burts", "Tralalero tralala", "Cringe", "Zesty", "Party popper", "Sksksk", "Ksp", "Extra / so extra"]
  },
  "Thirst trap": {
    word: "Thirst trap",
    alternatives: ["panunuksong litrato/video", "attention-seeking post", "sexy photo", "bait for likes/comments", "pa-sexy na post", "post na pang-akit", "Pa-sexy na post (Gen Alpha)", "post para mapansin", "pacute/pasexy sa social media", "pampagana"],
    related: ["Thirsty", "Flex", "Clout", "Snack", "Gyatt / Gyat", "Rizz", "Slay", "Drip", "Sobrang sikip / shikip", "Pookie bear", "Bembang", "Ksp", "Pick Me", "Looks-maxing", "Cringe"]
  },
  "Thirsty": {
    word: "Thirsty",
    alternatives: ["sabik sa pansin", "desperado sa atensyon", "needy", "attention-seeking", "desperate for validation", "uhaw sa pansin", "gustong-gusto mapansin", "Uhaw sa pansin (Gen Alpha)", "sobrang naghahanap ng atensyon/pagmamahal", "kulang sa aruga"],
    related: ["Thirst trap", "Ksp", "Pick Me", "Simp", "Glaze", "Clout", "Obsessed", "Pookie bear", "Bembang", "Paras", "Cringe", "Low vibration"]
  },
  "Toma toma": {
    word: "Toma toma",
    alternatives: ["ML dance", "Mobile Legends dance", "Chou dance", "viral game dance", "sayaw sa ML", "Sayaw (MLBB) (Gen Alpha)", "sayaw ng Chou", "sayaw pang-asar sa laro"],
    related: ["Griddy", "Skibidi", "Brainrot", "Dank", "Meme lord", "W", "Slay", "Lit", "Flex", "Roast"]
  },
  "Tralalero tralala": {
    word: "Tralalero tralala",
    alternatives: ["nonsense song", "playful expression", "carefree tune", "silly song", "kantang walang ibig sabihin", "Kantang pambata (meme) (Gen Alpha)", "kantang paulit-ulit na walang sense", "kantang nakakabaliw"],
    related: ["Eme", "Echoz lang", "Skibidi", "Ni hao fin shyt", "Brainrot", "Cringe", "Burts", "Meme lord", "Dank", "What the sigma?", "Sksksk"]
  },
  "Tss": {
    word: "Tss",
    alternatives: ["sound of annoyance/disbelief", "tsk", "hmpf", "eye roll sound", "dismissive sound", "inis (tunog)", "hindi naniniwala (tunog)", "Inis (tunog) (Gen Alpha)", "pagmamaliit (tunog)", "pag-ismid", "sungit (tunog)"],
    related: ["Oof", "Womp-womp", "Meh", "Salty", "Pressed", "Cringe", "Shade", "Pluh", "Sus", "Naur", "Red flag"]
  },
  "Twin / twinning": {
    word: "Twin / twinning",
    alternatives: ["matalik na kaibigan", "magkasundo", "magkapareho", "bestie", "soulmate (platonic)", "matching", "bff", "kambal (sa pagkakaibigan)", "Matalik na kaibigan (Gen Alpha)", "sobrang close na kaibigan", "parang kapatid", "laging magkasama"],
    related: ["Gang", "Ride or die", "Sis", "Gurl", "Orb", "Lek", "Gar", "Bossing", "Pookie bear", "Green flag", "Solid", "Vibin'"]
  },
  "Uncanny": {
    word: "Uncanny",
    alternatives: ["nakakakilabot", "kakaiba", "sobrang hindi normal", "eerie", "creepy", "strange and familiar", "unsettling", "nakakatakot na kakaiba", "Kakaiba (nakakatakot) (Gen Alpha)", "hindi maipaliwanag na kaba", "parang multo", "nakakapanindig-balahibo"],
    related: ["Backrooms", "Ohio", "Cringe", "Shook", "Freddy fazbear", "Skibidi ohio rizz", "Yike / yikes", "Sus", "Off", "Low vibration", "Plot twist", "Brainrot"]
  },
  "Understood the assignment": {
    word: "Understood the assignment",
    alternatives: ["alam ang gagawin", "tamang-tama ang ginawa", "executed perfectly", "got the memo", "nailed the task", "nakuha ang punto", "ginalingan sa pinapagawa", "Naintindihan ang dapat gawin (Gen Alpha)", "sakto sa tema", "ginawa nang tama", "walang mali sa ginawa"],
    related: ["Slay", "Cook", "Eat", "Nailed it", "W", "Goat", "On Fleek", "Pop off", "Solid", "Pro", "OG", "Main slay", "Buss", "Fire"]
  },
  "Unlimited": {
    word: "Unlimited",
    alternatives: ["paulit-ulit", "walang katapusan", "sobra", "excessive", "non-stop", "too much", "walang tigil", "sobrang dami", "Walang hanggan (Gen Alpha)", "sagad", "umaapaw", "hindi nauubos"],
    related: ["Extra / so extra", "Brainrot", "Yap / yapping", "Jampacked", "Obsessed", "Menty B", "Cringe", "Lit", "Fire", "9001"]
  },
  "Vibe": {
    word: "Vibe",
    alternatives: ["pakiramdam", "enerhiya ng paligid", "mood", "atmosphere", "feeling", "energy", "aura", "dating (ng lugar/tao)", "Pakiramdam/Dating (Gen Alpha)", "kung ano ang 'feel'", "emosyon"],
    related: ["Aura", "Level", "It’s giving…", "Positive Aura", "Negative Aura", "Low vibration", "Core", "Estetik", "Vibe check", "Vibin'", "Nonchalant", "Masyadong chill", "Gucci", "Slay"]
  },
  "Vibe check": {
    word: "Vibe check",
    alternatives: ["pag-tsek ng mood", "pagsusuri ng pakiramdam", "how are you feeling", "mood check", "energy assessment", "kamusta ang pakiramdam", "Pag-check ng mood (Gen Alpha)", "ano ang 'feel' mo ngayon?", "ok ka lang ba?"],
    related: ["Vibe", "Aura", "Low vibration", "Positive Aura", "Open-up", "Masyadong chill", "Menty B", "RD (Relationship Drama)"]
  },
  "Vibin'": {
    word: "Vibin'",
    alternatives: ["chill lang", "relax", "enjoying the mood", "grooving", "feeling good", "hanging out", "nagre-relax", "nag-eenjoy", "Relax lang (Gen Alpha)", "sumasabay sa mood", "chillax", "sound trip"],
    related: ["Vibe", "Masyadong chill", "Nonchalant", "Recharge", "Bop", "Gucci", "Positive Aura", "Core", "Aura", "Estetik"]
  },
  "W": {
    word: "W",
    alternatives: ["win", "winning", "victory", "success", "panalo", "tagumpay", "Panalo (Gen Alpha)", "tagumpay!", "nanalo", "nagwagi"],
    related: ["Goat", "OP", "Cracked", "Cook", "Slay", "Nailed it", "Let him cook", "Secure the bag", "On lock", "L", "Solid", "9001", "Fire", "Lit", "Buss", "Dasurv", "Pop off", "Main slay", "Star-star"]
  },
  "Wakey wakey": {
    word: "Wakey wakey",
    alternatives: ["wake up", "bumangon ka na", "gising na", "time to get up", "good morning", "gising (pa-cute)", "Bangon na (Gen Alpha)", "oras na para gumising", "mulat na"],
    related: ["Woke", "Reality check", "Recharge", "Eyy", "Ayo"]
  },
  "What the sigma?": {
    word: "What the sigma?",
    alternatives: ["what the heck", "ano ito", "expression of confusion/disbelief", "sigma male meme phrase", "ano daw (sigma meme)", "Ano yun (meme) (Gen Alpha)", "anong nangyayari (meme)", "ha?"],
    related: ["Sigma", "Ohio", "Skibidi", "Brainrot", "Cringe", "Uncanny", "Oof", "Yike / yikes", "Sus", "Plot twist", "Meme lord", "Dank", "Tralalero tralala"]
  },
  "Why so serious?": {
    word: "Why so serious?",
    alternatives: ["relax lang", "huwag seryosohin", "chill out", "lighten up", "don't be so tense", "kalma lang", "Huwag masyadong seryoso (Gen Alpha)", "ngiti ka naman", "easy lang", "wag dibdibin"],
    related: ["Masyadong chill", "Nonchalant", "Vibin'", "Eme", "Echoz lang", "Tralalero tralala", "Recharge", "Gucci", "Positive Aura", "Goblin Mode"]
  },
  "Wi wi wi cat": {
    word: "Wi wi wi cat",
    alternatives: ["crying cat meme", "sad cat sound", "dramatic cat", "umiiyak na pusa (meme)", "Pusa na umiiyak (meme) (Gen Alpha)", "meme ng pusang umiiyak", "tunog ng pusang umiiyad"],
    related: ["Menty B", "Emotional damage", "Oof", "Cringe", "Brainrot", "Meme lord", "Dank", "Tralalero tralala", "Low vibration", "RD (Relationship Drama)", "Yike / yikes", "Womp-womp"]
  },
  "Wlw / wuhluhwuh": {
    word: "Wlw / wuhluhwuh",
    alternatives: ["women loving women", "lesbian", "sapphic", "queer women", "gay woman", "tomboy (pero mas specific sa attraction)", "babae na gusto babae", "Babaeng nagmamahal sa kapwa babae (Gen Alpha)", "lesbyana", "tiboom", "babae na pumapatol sa babae"],
    related: ["Baks", "Sis", "Gurl", "Kween / Kween-behavior", "Queen", "Yas / yas gurl", "Zesty", "Twin / twinning", "Pookie bear", "RD (Relationship Drama)", "Slay", "Normalize", "Woke"]
  },
  "Woke": {
    word: "Woke",
    alternatives: ["gising sa katotohanan", "may malasakit sa lipunan", "socially aware", "conscious of social justice", "enlightened", "mulat", "may alam sa isyung panlipunan", "May kamalayan (Gen Alpha)", "nakikialam sa issue", "progresibo", "may pakialam"],
    related: ["Normalize", "Reality check", "Clapback", "Green flag", "Respect begets respect", "OK boomer", "No cap", "Fax", "On God", "Positive Aura", "Mentality", "Slay"]
  },
  "Womp-womp": {
    word: "Womp-womp",
    alternatives: ["sound of disappointment", "failure sound", "sad trombone", "too bad so sad", "dismissive expression", "sayang", "epic fail (tunog)", "Tunog ng pagkabigo (Gen Alpha)", "laglag (tunog)", "malas (tunog)", "amp (pinaikli)"],
    related: ["L", "Big L", "Oof", "Meh", "Mid", "Pluh", "Just put the fries in the bag", "Cringe", "Yike / yikes", "Dasurv", "Potek / Pucha", "Tss", "Naur", "Dog water", "Rigged"]
  },
  "Yap / yapping": {
    word: "Yap / yapping",
    alternatives: ["madaldal", "maingay", "nagkukwento", "talkative", "chatty", "blabbering", "talking too much", "nonsense talk", "daldal", "satsat", "walang tigil sa kakasalita", "Madaldal (Gen Alpha)", "kwentuhan nang kwentuhan", "sobrang ingay", "chika"],
    related: ["Tea", "Shoutout", "QRT", "Co-worker core", "Extra / so extra", "Ksp", "Cringe", "Brainrot", "OOMF", "Tralalero tralala", "Unlimited"]
  },
  "Yarn": {
    word: "Yarn",
    alternatives: ["iyan", "yan", "that (playful)", "expression of agreement/emphasis", "slang for 'that'", "ayan (pabiro)", "Iyan (pa-cute/pabiro) (Gen Alpha)", "yun oh (pabiro)", "ganern (pabiro)"],
    related: ["Yas / yas gurl", "Slay", "Kween / Kween-behavior", "Opkors", "Eme", "Sheesh", "Lit", "Pookie bear", "Gurl", "Sis", "It’s giving…"]
  },
  "Yas / yas gurl": {
    word: "Yas / yas gurl",
    alternatives: ["yes", "oo", "affirmative", "slay", "go girl", "expression of strong approval", "oo (OA/pa-cute)", "Oo (papuri) (Gen Alpha)", "galing!", "tama!", "sige go!"],
    related: ["Yarn", "Slay", "Kween / Kween-behavior", "Queen", "Gurl", "Sis", "Lit", "Fire", "Sheesh", "Opkors", "Emezing", "Fab", "Pop off", "W"]
  },
  "Yassify": {
    word: "Yassify",
    alternatives: ["pagpapaganda nang todo", "glamorize", "beautify excessively", "filter heavily", "make fabulous", "gawing bongga", "sobrang pagpapaganda", "Pagandahin nang sobra (Gen Alpha)", "gawing reyna/hari (sa itsura)", "i-filter nang todo", "retoke (digital)"],
    related: ["Glow up", "Looks-maxing", "Slay", "On Fleek", "Kween / Kween-behavior", "Estetik", "Monyeka", "Fab", "Drip", "Snack", "Main slay", "Queen", "Gucci", "Fire"]
  },
  "Yeet /yit": {
    word: "Yeet /yit",
    alternatives: ["excited o maraming energy", "to throw with force", "exclamation for throwing", "energetic action", "ihagis", "itapon (may pwersa)", "Sigaw (sa pagtapon/excitement) (Gen Alpha)", "biglang kilos", "pwersahang paghagis", "sabay sigaw"],
    related: ["Lit", "Fire", "Pog / Poggers", "Savage", "Run", "W", "Pop off", "Skrtt", "Foxtrot Bravo", "Mad lit", "Slay"]
  },
  "Yike / yikes": {
    word: "Yike / yikes",
    alternatives: ["expression of gulat/disapproval", "awkward", "cringe", "oh no", "that's bad", "uncomfortable", "nakakagulat (negatibo)", "nakakahiya (para sa iba)", "Hala (awkward) (Gen Alpha)", "patay", "lagot", "naku po"],
    related: ["Cringe", "Oof", "Womp-womp", "Ick", "Off", "Shook", "Sus", "Red flag", "Potek / Pucha", "Not the", "Uncanny", "Low vibration", "Ohio"]
  },
  "You ate that": {
    word: "You ate that",
    alternatives: ["ginalingan mo", "ang ganda ng hitsura mo", "you did amazing", "killed it", "perfected it", "no crumbs left", "sobrang galing mo", "kinain mo ang performance/OOTD", "Ginalingan mo (Gen Alpha)", "walang tapon (sa galing)", "pinahanga ako", "panalo ang gawa mo"],
    related: ["Slay", "Cook", "Eat", "Nailed it", "W", "Goat", "On Fleek", "Pop off", "Fire", "Lit", "Buss", "Solid", "Main slay", "Star-star"]
  },
  "Yung claustrophobia ko / yung. clows.tro.pob.ya. ko": {
    word: "Yung claustrophobia ko / yung. clows.tro.pob.ya. ko",
    alternatives: ["expression for discomfort/cringe", "masikip (pakiramdam)", "feeling suffocated (metaphorical)", "awkward situation", "naiipit ako (pabiro)", "Masikip (pakiramdam/meme) (Gen Alpha)", "hindi ako komportable (meme)", "naiilang (meme)", "parang nasasakal (pabiro)"],
    related: ["Cringe", "Ick", "Yike / yikes", "Oof", "Uncanny", "Shook", "Low vibration", "Negative Aura", "Backrooms", "Menty B", "Womp-womp", "Sus"]
  },
  "Zang": {
    word: "Zang",
    alternatives: ["dang", "wow", "expression of surprise/emphasis", "Taglish expression", "grabe (Taglish)", "Wow (Taglish) (Gen Alpha)", "astig (Taglish)", "lupit (Taglish)"],
    related: ["Sheesh", "Pog / Poggers", "Lit", "Gwad", "Fire", "Emezing", "Shook", "Quaking", "Buss", "Dank"]
  },
  "Zesty": {
    word: "Zesty",
    alternatives: ["malambot ang galaw", "sassy", "expressive", "flamboyant", "campy", "effeminate (playful or derogatory)", "maarte (lalaki)", "parang bakla (kilos)", "Maarteng kilos (Gen Alpha)", "baklang-bakla (kilos)", "may kembot", "makire"],
    related: ["Baks", "Kween / Kween-behavior", "Rawr", "Extra / so extra", "Slay", "Cringe", "Candy", "Fab", "Estetik", "It’s giving…", "Party popper", "Eme", "Main Character Vibe", "On Fleek", "Rizz"]
  }
};

/**
 * Builds a reverse mapping from alternative terms to dictionary words
 * This allows us to quickly look up which dictionary words match a given search term
 */
export const buildAlternativeTermsMap = (): Map<string, string[]> => {
  const alternativeMap = new Map<string, string[]>();

  // Add all dictionary words themselves to the map for direct lookup
  Object.keys(wordRelationships).forEach(wordKey => {
    const wordEntry = wordRelationships[wordKey];
    const normalizedWord = wordEntry.word.toLowerCase().trim();

    if (!alternativeMap.has(normalizedWord)) {
      alternativeMap.set(normalizedWord, []);
    }
    if (!alternativeMap.get(normalizedWord)?.includes(wordKey)) {
      alternativeMap.get(normalizedWord)?.push(wordKey);
    }

    // Also add the word with its exact casing from wordRelationships
    const exactWordCasing = wordEntry.word.trim();
    if (!alternativeMap.has(exactWordCasing.toLowerCase())) { // Store normalized key
      alternativeMap.set(exactWordCasing.toLowerCase(), []);
    }
    if (!alternativeMap.get(exactWordCasing.toLowerCase())?.includes(wordKey)) { // Store wordKey itself
      alternativeMap.get(exactWordCasing.toLowerCase())?.push(wordKey);
    }
  });

  // Add alternatives and related terms
  Object.entries(wordRelationships).forEach(([wordKey, relationship]) => {
    // Add all alternatives
    relationship.alternatives.forEach(alt => {
      const normalizedAlt = alt.toLowerCase().trim();
      if (!alternativeMap.has(normalizedAlt)) {
        alternativeMap.set(normalizedAlt, []);
      }
      if (!alternativeMap.get(normalizedAlt)?.includes(wordKey)) {
        alternativeMap.get(normalizedAlt)?.push(wordKey);
      }
    });

    // Add all related terms (bidirectionally if they exist in wordRelationships)
    relationship.related.forEach(relatedTermKey => {
      const normalizedRelated = relatedTermKey.toLowerCase().trim();
      if (!alternativeMap.has(normalizedRelated)) {
        alternativeMap.set(normalizedRelated, []);
      }
      if (!alternativeMap.get(normalizedRelated)?.includes(wordKey)) {
        alternativeMap.get(normalizedRelated)?.push(wordKey);
      }

      // If the related term also has an entry, add the current word as its "related" alternative
      if (wordRelationships[relatedTermKey]) {
        const normalizedWordKey = wordKey.toLowerCase().trim();
        if (!alternativeMap.has(normalizedWordKey)) {
          alternativeMap.set(normalizedWordKey, []);
        }
        if (!alternativeMap.get(normalizedWordKey)?.includes(relatedTermKey)) {
          alternativeMap.get(normalizedWordKey)?.push(relatedTermKey);
        }
      }
    });
  });

  return alternativeMap;
};

// Pre-build the alternative terms map for performance
export const alternativeTermsMap = buildAlternativeTermsMap();

/**
 * Expands a search term to include related dictionary words based on direct matches,
 * alternatives, and related terms.
 *
 * @param searchTerm The original search term.
 * @returns An array of unique dictionary word keys that match the search term or are related.
 */
export const expandSearchTerm = (searchTerm: string): string[] => {
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const foundWordKeys: Set<string> = new Set();

  // 1. Direct matches and known alternatives
  if (alternativeTermsMap.has(normalizedSearchTerm)) {
    alternativeTermsMap.get(normalizedSearchTerm)?.forEach(wordKey => foundWordKeys.add(wordKey));
  }

  // 2. Partial matches (includes or is included by)
  // This is a broader search, might be performance intensive for very large dictionaries
  alternativeTermsMap.forEach((matchedWordKeys, alternativeKey) => {
    if (alternativeKey.includes(normalizedSearchTerm) || normalizedSearchTerm.includes(alternativeKey)) {
      matchedWordKeys.forEach(wordKey => foundWordKeys.add(wordKey));
    }
  });

  // 3. Add related terms for all found words
  const relatedTermsToAdd: Set<string> = new Set();
  foundWordKeys.forEach(wordKey => {
    if (wordRelationships[wordKey]?.related) {
      wordRelationships[wordKey].related.forEach(relatedKey => {
        relatedTermsToAdd.add(relatedKey);
      });
    }
  });
  relatedTermsToAdd.forEach(key => foundWordKeys.add(key));

  // 4. Ensure the original search term itself (if it's a dictionary word key) is included
  if (wordRelationships[searchTerm]) { // Check exact casing first
    foundWordKeys.add(searchTerm);
  }
  // Check against normalized form if exact casing didn't match (e.g. searching "aura" for "Aura")
  Object.keys(wordRelationships).forEach(key => {
    if (key.toLowerCase() === normalizedSearchTerm) {
      foundWordKeys.add(key);
    }
  });


  return Array.from(foundWordKeys);
};