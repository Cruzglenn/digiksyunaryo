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
  word: string;        // The target word in the dictionary
  alternatives: string[]; // Alternative ways to search for this word
  related: string[];   // Related concepts or words
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
    related: ["brainrot", "sped", "Monggo", "dog water", "Noob", "L", "Mid", "NPC"]
  },
  "Bembang": {
    word: "Bembang",
    alternatives: ["pakikipagtalik", "sex", "sexual intercourse", "pagtatalik", "sekswal na pagtatalik", "malibog", "libog", "kantot", "iyutan", "pagroromansa (pisikal)", "gawaing pang-adulto", "init sa katawan", "ano ang tawag sa pagtatalik (Gen Z/Alpha)", "slang para sa sex", "Sex (Gen Alpha)", "makipagtalik", "romansa", "pag-ibig (pisikal)", "pagdurog", "paglamas"],
    related: ["jelq", "goon", "edging", "thirst trap", "thirsty", "Bussin", "Rawr", "Gyatt / Gyat", "Sobrang sarap", "Sobrang sikip / shikip"]
  },
  "Cap": {
    word: "Cap",
    alternatives: ["sinungaling", "lie", "fake", "hindi totoo", "nagdadagdag ng kwento", "pagsisinungaling", "imbento", "bola", "palusot", "kwentong barbero", "hindi makatotohanan", "Sinungaling (Gen Alpha)", "gawa-gawa lang", "hindi kapani-paniwala (dahil sa pagsisinungaling)"],
    related: ["fax", "all fax", "no cap", "Fr, fr", "Psych", "Jabaited", "Impostor", "Sus", "Rigged"]
  },
  "fax": {
    word: "fax",
    alternatives: ["facts", "totoo", "katotohanan", "truth", "tunay", "walang biro", "seryoso", "Totoo (Gen Alpha)", "totoong nangyari", "walang duda", "legit"],
    related: ["all fax", "fax only", "no cap", "Fr, fr", "no printer", "On God", "Periodt", "Reality check"]
  },
  "Cringe": {
    word: "Cringe",
    alternatives: ["nakakahiya", "nakakadiri", "kadiri", "embarrassing", "hindi kaaya-aya", "awkward", "kahiya-hiya", "nakaka-awkward", "baduy", "corny", "Nakakahiya (Gen Alpha)", "hindi maganda tingnan/pakinggan", "nakakailang"],
    related: ["ick", "off", "cheugy", "yike / yikes", "Womp womp", "Sus", "Sksksk", "Ohio", "Potek / Pucha", "Tss", "uncanny", "low vibration"]
  },
  "Dasurv": {
    word: "Dasurv",
    alternatives: ["deserve", "karapat-dapat", "nararapat", "tama lang", "buti nga", "Karapat-dapat (Gen Alpha)", "nararapat lang sa'yo", "yan ang bagay sayo", "karma"],
    related: ["L", "Womp womp", "Big L", "clapback", "W", "Oof"]
  },
  "Delulu": {
    word: "Delulu",
    alternatives: ["delusional", "ilusyon", "hindi totoo", "fantasy", "malayo sa katotohanan", "nag-iilusyon", "ilusyonada", "ilusyonado", "nag-iimagine", "assumera", "assumero", "feeling", "nagpapantasya", "umaasa sa wala", "hopia", "slang para sa delusional", "Nag-iimagine (Gen Alpha)", "sobrang assuming", "hindi makatotohanang pag-iisip"],
    related: ["copium", "manifest", "Simp", "One-sided", "Pookie bear", "Brainrot", "Obsessed", "Rent free", "Menty B"]
  },
  "Baks": {
    word: "Baks",
    alternatives: ["bakla", "bading", "gay", "sister", "friend", "beki", "bayot", "Kaibigang bakla (Gen Alpha)", "parlorista", "sirena", "homosekswal na lalaki"],
    related: ["Sis", "Gurl", "Zesty", "Kween", "Queen", "Wlw / wuhluhwuh", "Fab", "yas / yas gurl", "Eme", "Party popper"]
  },
  "Beta": {
    word: "Beta",
    alternatives: ["mahina", "submissive", "weak", "pangalawa", "sumusunod sa trend", "sunud-sunuran", "under", "hindi dominante", "Mahina (Gen Alpha)", "tagasunod", "walang sariling diskarte", "alalay"],
    related: ["chad alpha", "sigma", "alpha", "Simp", "Noob", "NPC", "L", "8080", "dog water", "Malewife"]
  },
  "Big L": {
    word: "Big L",
    alternatives: ["talo", "lose", "defeat", "failure", "matinding pagkatalo", "pagkabigo", "malaking talo", "epic fail", "laglag", "Talo (Gen Alpha)", "malas", "nadisgrasya", "kabiguan"],
    related: ["L", "dog water", "Dempsey roll", "Womp womp", "Ratioed", "Oof", "Dasurv", "Rigged", "Menty B"]
  },
  "9001": {
    word: "9001",
    alternatives: ["higit pa sa inaasahan", "napakasindi", "over 9000", "sobrang lakas", "sobrang galing", "walang kapantay", "Napakalakas (Gen Alpha)", "hindi masukat sa lakas/galing", "sobra-sobra", "higit sa sukdulan"],
    related: ["OP", "cracked", "Goat", "W", "fire", "Lit", "Slay", "cook", "Out of this World", "Solid", "Buss"]
  },
  "all fax": {
    word: "all fax",
    alternatives: ["purong katotohanan", "pure facts", "totoo lahat", "walang halong biro", "lahat totoo", "Walang kasinungalingan (Gen Alpha)", "100% totoo", "walang bawas, walang dagdag", "buong katotohanan"],
    related: ["fax", "no cap", "fax only", "Fr, fr", "no printer", "On God", "Periodt", "Reality check"]
  },
  "aura": {
    word: "aura",
    alternatives: ["enerhiya", "vibe", "atmospera", "dating", "presence", "pakiramdam", "karisma", "Enerhiya ng tao (Gen Alpha)", "kung ano ang nararamdaman sa isang tao", "kung ano ang ipinapahiwatig", "personalidad"],
    related: ["level", "Positive Aura", "Negative aura", "Vibe", "Rizz", "Estetik", "Main Character Vibe", "It’s giving…", "Demure", "Nonchalant", "Zesty"]
  },
  "Ayo?": {
    word: "Ayo?",
    alternatives: ["pangungumusta", "yo", "hello", "kamusta", "hi", "sup", "wassup", "uy", "musta", "Kamusta (Gen Alpha)", "anong balita?", "G?", "oi"],
    related: ["Eyy", "Bossing", "Gar", "Lek", "Shoutout", "Sis", "Gurl"]
  },
  "backrooms": {
    word: "backrooms",
    alternatives: ["nakakalito", "walang katapusan", "nakakaba", "maze", "alternate dimension", "liminal space", "kakatakot na lugar", "parang maze", "Nakakatakot na lugar (Gen Alpha)", "walang hanggang kwarto", "nakakabaliw na lugar", "nakakawala"],
    related: ["uncanny", "Ohio", "Cringe", "Shook", "Menty B", "Brainrot", "Sus", "yike / yikes", "low vibration"]
  },
  "Bossing": {
    word: "Bossing",
    alternatives: ["pagbati sa kaibigan", "boss", "chief", "pare", "bro", "sir", "ma'am", "tropa", "bes", "lods", "Tawag sa kaibigan (Gen Alpha)", "tawag sa nirerespeto", "amo (pabiro)", "kaibigan"],
    related: ["Gar", "Lek", "Orb", "Ayo?", "Gang", "Sis", "Gurl", "OG", "Shoutout", "twin / twinning"]
  },
  "Brainrot": {
    word: "Brainrot",
    alternatives: ["magulong isip", "wala sa katinuan", "walang kabuluhan na content", "low quality content", "internet addiction", "nakakasira ng ulo", "paulit-ulit na walang kwenta", "Walang kwentang content (Gen Alpha)", "content na pampa-bobo", "nakaka-utak-biya", "basurang content"],
    related: ["8080", "sped", "skibidi toilet", "copium", "Ohio", "NPC", "Cringe", "Monggo", "Delulu", "meme", "dank", "Yap / yapping", "Unlimited"]
  },
  "Burger ka sakin": {
    word: "Burger ka sakin",
    alternatives: ["pang-aakit", "patawang pagbabanta", "flirting", "playful threat", "type kita", "crush kita (pabiro)", "Pang-asar na pang-akit (Gen Alpha)", "gusto kitang halikan/yakapin (pabiro)", "may gusto ako sayo (pabiro)", "biro na may pagnanasa"],
    related: ["Rawr", "Pookie bear", "Rizz", "thirst trap", "Eme", "Bembang", "Candy", "Zesty"]
  },
  "Burts": {
    word: "Burts",
    alternatives: ["labis na pagbibiro", "sobrang biro", "burst", "tawa much", "funny", "nakakatawa sobra", "halakhak", "Sobrang nakakatawa (Gen Alpha)", "sabog sa tawa", "hindi mapigilang tawa", "katatawanan"],
    related: ["Eme", "Echoz lang", "Tralalero tralala", "Womp womp", "Sksksk", "Party popper", "meme", "Cringe"]
  },
  "Buss": {
    word: "Buss",
    alternatives: ["kahanga-hanga", "astig", "galing", "bust", "amazing", "great", "lupit", "solid", "Magaling (Gen Alpha)", "panalo", "the best", "dekalibre"],
    related: ["Bussin", "Buzzin", "fire", "Lit", "Solid", "Slay", "cook", "Goat", "9001", "dank", "Pop off"]
  },
  "Bussin": {
    word: "Bussin",
    alternatives: ["napakasarap", "delicious", "masarap", "sobrang sarap", "yummy", "tasty", "kalasa", "Napakasarap (Gen Alpha)", "pagkain", "kain", "the best (sa pagkain)", "linamnam"],
    related: ["Buss", "Buzzin", "Lafang", "Sobrang sarap", "slaps", "snack", "glizzy", "Mani", "food", "kainan"]
  },
  "buttah": {
    word: "buttah",
    alternatives: ["malakas ang appeal", "kumpyansa sa sarili", "smooth", "butter", "charming", "confident", "swabe dumiskarte", "magaling mang-akit", "May appeal (Gen Alpha)", "kaakit-akit", "mahinahon pero malakas ang dating", "pogi points"],
    related: ["aura", "Rizz", "chad alpha", "Slay", "snack", "Mr. bombastic", "Latina", "Estetik", "Gucci", "Looks maxing", "mogging", "Flex"]
  },
  "Buzzin": {
    word: "Buzzin",
    alternatives: ["bussin", "napakasarap", "delicious", "masarap", "very good", "sobrang sarap (pagkain)", "Masarap (alternative sa bussin) (Gen Alpha)", "kasing sarap ng bussin", "kakaibang sarap"],
    related: ["Buss", "Bussin", "Lafang", "Sobrang sarap", "slaps", "food"]
  },
  "Candy": {
    word: "Candy",
    alternatives: ["maarte", "malandi", "flirtatious", "coy", "pabebe", "pa-cute", "Maarte (Gen Alpha)", "mahilig magpa-cute", "flirty", "malantod", "hitad (colloquial)"],
    related: ["Pick Me", "extra", "Zesty", "Cringe", "Rawr", "Pookie bear", "thirsty", "Bembang", "thirst trap"]
  },
  "caught in 4k": {
    word: "caught in 4k",
    alternatives: ["huli sa akto", "may ebidensya", "nahuli", "exposed", "huling-huli", "may pruweba", "kitang-kita", "bistado", "Huli sa kamera (Gen Alpha)", "walang takas", "may video/picture", "nahuli sa CCTV"],
    related: ["receipts", "Resibo", "Snitch", "Sus", "Impostor", "Jabaited", "Cap", "L", "Womp womp"]
  },
  "chad alpha": {
    word: "chad alpha",
    alternatives: ["alpha male", "may dating", "lakas ng loob", "confident man", "dominant male", "leader", "gwapong matipuno", "astigin", "Lalaking dominante (Gen Alpha)", "pinuno", "tinitingala", "hari"],
    related: ["Beta", "sigma", "alpha", "Rizz", "Goat", "OG", "Mr. bombastic", "buttah", "Slay", "Mogging", "Looks maxing", "Flex", "Pro"]
  },
  "cheugy": {
    word: "cheugy",
    alternatives: ["laos", "hindi uso", "outdated", "try hard", "not cool", "old fashion", "baduy", "jologs (pero luma na)", "hindi na cool", "Laos na (Gen Alpha)", "makaluma (negatibo)", "pilit magpa-uso", "hindi na patok"],
    related: ["Cringe", "ick", "L", "Mid", "Old School", "OK boomer", "Womp womp", "low vibration", "Off"]
  },
  "clapback": {
    word: "clapback",
    alternatives: ["matalas na sagot", "matalinong sagot", "pang-asar pabalik", "comeback", "riposte", "witty reply", "bara", "ganti sa asar", "resbak", "Matalinong sagot (Gen Alpha)", "sagot na di makakalimutan", "patama pabalik", "sagot na masakit"],
    related: ["Roast", "Savage", "shade", "W", "Pressed", "Dasurv", "Goat", "Periodt", "Slay", "fire"]
  },
  "clout": {
    word: "clout",
    alternatives: ["sikat", "impluwensya", "fame", "influence", "popularity", "attention", "kasikatan", "pansin", "Sikat (Gen Alpha)", "maraming followers", "pinag-uusapan", "kapangyarihan (sa social media)"],
    related: ["Flex", "Humblebrag", "Pick Me", "Ksp", "OG", "Main Character Vibe", "thirsty", "Plug", "Shoutout", "Overrated", "Slay"]
  },
  "cook": {
    word: "cook",
    alternatives: ["mahusay na pagtatanghal", "magaling", "galing", "excellent performance", "nailed it", "perfected it", "ginalingan", "pinaghirapan", "Magaling (sa ginawa) (Gen Alpha)", "walang tapon", "perpekto ang gawa", "hinusay"],
    related: ["let him cook", "Eat", "Slay", "nailed it", "you ate that", "W", "Goat", "fire", "Lit", "Solid", "Buss", "Pop off", "Pro"]
  },
  "copium": {
    word: "copium",
    alternatives: ["pagpapanggap", "denial", "wishful thinking", "coping mechanism", "false hope", "pag-asa sa wala", "nagbubulag-bulagan", "Umaasa kahit imposible (Gen Alpha)", "panloloko sa sarili", "pagtakip sa katotohanan", "pampalubag-loob (kahit di totoo)"],
    related: ["Delulu", "Brainrot", "Menty B", "L", "Pookie bear", "manifest", "low vibration", "Cringe"]
  },
  "Core": {
    word: "Core",
    alternatives: ["tema", "theme", "aesthetic", "essence", "puso", "fundamental", "basic", "pinaka-tema", "istilo", "Tema o Istilo (Gen Alpha)", "pinakapuso", "sentro", "konsepto"],
    related: ["coworker-core", "Estetik", "Vibe", "aura", "It’s giving…", "Drip", "Main Character Vibe", "lore"]
  },
  "coworker-core": {
    word: "coworker-core",
    alternatives: ["usapang empleyado", "office gossip", "workplace stories", "work life", "corporate life", "chismis sa opisina", "kwentong trabaho", "Chismis sa trabaho (Gen Alpha)", "usapang pang-opisina", "kultrura sa opisina"],
    related: ["Core", "Tea", "Yap / yapping", "Shoutout", "Cringe", "Menty B", "low vibration"]
  },
  "cracked": {
    word: "cracked",
    alternatives: ["magaling", "mahusay", "skilled", "expert", "insanely good", "god-tier", "sobrang galing (sa laro)", "halimaw sa galing", "Sobrang galing (Gen Alpha)", "hindi mapapantayan", "pro level", "bihasa"],
    related: ["OP", "Goat", "W", "cook", "Slay", "9001", "Pro", "Retsam", "fire", "Lit", "Solid", "Buss", "level"]
  },
  "dank": {
    word: "dank",
    alternatives: ["astig", "solid", "mataas ang kalidad", "cool", "awesome", "high quality", "excellent", "matindi", "Astig (Gen Alpha)", "nakakatawa (meme)", "kalidad", "kakaiba (sa positibong paraan)"],
    related: ["meme", "fire", "Lit", "Solid", "Buss", "Skibidi", "Brainrot", "Ohio", "Tralalero tralala", "Cringe"]
  },
  "Dempsey roll": {
    word: "Dempsey roll",
    alternatives: ["bugbog sarado", "malalang pagkatalo", "overwhelming defeat", "pwned", "destroyed", "ginulpi", "pinulbos", "Bugbog sarado (sa argumento/laro) (Gen Alpha)", "wasak", "tinalo nang husto", "pinakain ng alikabok"],
    related: ["Big L", "L", "Roast", "Savage", "dog water", "Womp womp", "clapback", "W", "Goat", "OP"]
  },
  "Demure": {
    word: "Demure",
    alternatives: ["mahinhin", "maingat", "modest", "reserved", "quiet", "shy", "konserbatibo", "disente", "Mahinhin (Gen Alpha)", "hindi magaslaw", "pino kumilos", "dalagang Pilipina (ugali)"],
    related: ["Kween", "Queen", "Estetik", "Positive Aura", "Green flag", "Old School", "aura", "Vibe", "It’s giving…"]
  },
  "dog water": {
    word: "dog water",
    alternatives: ["sablay", "palpak", "walang kwenta", "trash", "bad", "terrible", "noob", "basura", "mahina", "Walang kwenta (sa laro) (Gen Alpha)", "hindi marunong", "pangit ang laro", "kangkong"],
    related: ["L", "Big L", "Mid", "Noob", "8080", "sped", "Cringe", "Womp womp", "Monggo"]
  },
  "Drip": {
    word: "Drip",
    alternatives: ["estilo ng pananamit", "fashion", "style", "outfit", "swag", "look", "porma", "damit", "gayak", "Porma (Gen Alpha)", "kasuotan", "bihis", "pananamit"],
    related: ["Drippy", "fit check", "Slay", "Estetik", "Gucci", "On Fleek", "Yassify", "Looks maxing", "clout", "Flex", "Solid", "Mr. bombastic", "Fab"]
  },
  "Drippy": {
    word: "Drippy",
    alternatives: ["maangas na estilo", "stylish", "fashionable", "cool outfit", "good looking clothes", "maporma", "maganda ang porma", "Astig ang porma (Gen Alpha)", "bihis na bihis", "nakaka-Slay ang porma"],
    related: ["Drip", "fit check", "Slay", "Estetik", "Gucci", "On Fleek", "Fab", "fire", "Lit"]
  },
  "Ea": {
    word: "Ea",
    alternatives: ["babae", "girl", "female", "chick", "lady", "beh", "babae (baliktad ang pagbigkas)", "Babae (pinaikli) (Gen Alpha)", "chix", "bebot"],
    related: ["Eabab", "Gurl", "Sis", "Kween", "Queen", "wlw / wuhluhwuh", "Latina", "Monyeka", "snack"]
  },
  "Eabab": {
    word: "Eabab",
    alternatives: ["babae", "girl", "female", "chick", "lady", "babae (binaliktad)", "Babae (binaliktad) (Gen Alpha)", "chix (binaliktad)", "bebot (binaliktad)"],
    related: ["Ea", "Gurl", "Sis", "Kween", "Queen"]
  },
  "Eat": {
    word: "Eat",
    alternatives: ["ang galing", "magaling", "nailed it", "slay", "killed it", "performed well", "ginalingan sobra", "panalo", "Ang galing (sa performance) (Gen Alpha)", "kinain ang performance", "walang itinira", "ubos"],
    related: ["Slay", "cook", "nailed it", "you ate that", "W", "Goat", "fire", "Pop off", "Buss", "Solid"]
  },
  "Echo Papa": {
    word: "Echo Papa",
    alternatives: ["pakialamero", "nagpapapansin", "epal", "attention seeker", "meddler", "busybody", "sawsaw suka", "nakikisawsaw", "Pansinin mo ako (Gen Alpha)", "singit", "pabida", "mapapel"],
    related: ["Ksp", "Pick Me", "extra", "Main Character Vibe", "thirsty", "Cringe", "Sus", "Paras"]
  },
  "Echo Tango": {
    word: "Echo Tango",
    alternatives: ["gulo", "kaguluhan", "trouble", "mess", "chaos", "away", "rambol", "Gulo (Gen Alpha)", "iskandalo", "sigalot", "basag-ulo"],
    related: ["RD (Relationship Drama)", "Menty B", "Womp womp", "out of pocket", "Red flag", "low vibration", "Potek / Pucha"]
  },
  "Echoz lang": {
    word: "Echoz lang",
    alternatives: ["joke lang", "biro lang", "just kidding", "charot", "not serious", "hindi seryoso", "charing", "Biro lang (Gen Alpha)", "kunwari lang", "hindi totoo (pabiro)", "jinojoke lang kita"],
    related: ["Eme", "Psych", "Tralalero tralala", "Burts", "Womp womp", "Cap", "Sksksk"]
  },
  "edge": {
    word: "edge",
    alternatives: ["pinapatagal ang saya", "pinapatagal ang excitement", "prolong pleasure", "tease", "sexual teasing", "pagpipigil ng sarap", "Pagpipigil (sekswal) (Gen Alpha)", "paglalaro sa sarili (dahan-dahan)", "patagalin ang orgasmo"],
    related: ["goon", "gooning", "Bembang", "jelq", "thirsty", "Rizz", "Brainrot"]
  },
  "edging": {
    word: "edging",
    alternatives: ["pinapatagal ang saya", "pinapatagal ang excitement", "prolong pleasure", "tease", "sexual teasing", "self-control (sekswal)", "pagkontrol sa sarap", "Pagpipigil (sekswal, pandiwa) (Gen Alpha)", "dahan-dahang pagpapaligaya", "pagpapatagal ng orgasmo"],
    related: ["goon", "gooning", "edge", "Bembang", "jelq"]
  },
  "Eduls": {
    word: "Eduls",
    alternatives: ["matanda", "nakakatanda", "elders", "boomer", "older generation", "gurang", "matatanda (pabiro)", "Matatanda (Gen Alpha)", "nakatatanda (pabiro)", "may edad na"],
    related: ["OK boomer", "Old School", "cheugy", "Cringe", "L", "low vibration"]
  },
  "Eka": {
    word: "Eka",
    alternatives: ["ikaw", "you", "ka", "Ikaw (pinaikli/binaliktad) (Gen Alpha)", "kita (binaliktad)"],
    related: ["Ekalal", "Ea", "Eabab", "Gurl", "Sis"]
  },
  "Ekalal": {
    word: "Ekalal",
    alternatives: ["lalaki", "boy", "guy", "male", "man", "lalake (binaliktad)", "Lalaki (binaliktad) (Gen Alpha)", "barako (binaliktad)", "kelot (binaliktad)"],
    related: ["Orb", "Lek", "Gar", "Bossing", "Eka", "chad alpha", "Mr. bombastic", "Sigma", "snack"]
  },
  "Ekans": {
    word: "Ekans",
    alternatives: ["snake", "ahas", "traydor", "backstabber", "two-faced", "ahas (binaliktad)", "mapagkunwari", "Ahas (Gen Alpha)", "plastik", "balimbing", "madulas"],
    related: ["Snitch", "Impostor", "Sus", "opp", "Paras", "Red flag", "Cap", "Cringe"]
  },
  "Eme": {
    word: "Eme",
    alternatives: ["biro", "joke", "charot", "just kidding", "playful", "not serious", "hindi totoo (pabiro)", "kunwari lang", "Biro (Gen Alpha)", "charing lang", "kalokohan (pabiro)", "katuwaan lang"],
    related: ["Echoz lang", "Emezing", "Psych", "Tralalero tralala", "Burts", "Womp womp", "Sksksk", "Cringe", "Yarn"]
  },
  "Emezing": {
    word: "Emezing",
    alternatives: ["amazing", "wow", "astig", "galing", "pabirong amazing", "fantastic", "grabe", "nakakamangha (pabiro)", "Wow (pabiro) (Gen Alpha)", "sobrang galing (pabiro)", "bongga (pabiro)"],
    related: ["Eme", "Lit", "fire", "Sheesh", "Poggers", "Slay", "Buss", "Fab", "Goat", "9001", "Solid"]
  },
  "Emotional damage": {
    word: "Emotional damage",
    alternatives: ["emosyonal na pinsala", "heartbreak", "sakit sa damdamin", "trauma", "psychological damage", "hurt feelings", "nasaktan ang damdamin", "sakit", "Masakit sa damdamin (Gen Alpha)", "dinibdib", "wasak ang puso", "sakit sa puso"],
    related: ["Menty B", "Oof", "Big L", "low vibration", "RD (Relationship Drama)", "Cringe", "Womp womp", "Shook", "yike / yikes", "Potek / Pucha", "Sus"]
  },
  "Erm actually": {
    word: "Erm actually",
    alternatives: ["sa totoo lang", "actually", "in fact", "well actually", "technically", "kontra (pabida)", "pasimpleng pagtama", "Sa totoo lang (pabida) (Gen Alpha)", "ang totoo niyan (mayabang na tono)", "pabidang koreksyon", "epal na koreksyon"],
    related: ["NPC", "know-it-all", "Cringe", "Sus", "Pressed", "shade", "OK boomer", "extra"]
  },
  "Estetik": {
    word: "Estetik",
    alternatives: ["aesthetic", "maganda sa mata", "may dating", "stylish", "pleasing to the eye", "artistic", "maganda tingnan", "kaaya-aya", "Maganda (sa paningin) (Gen Alpha)", "maayos tingnan", "pulido", "maganda ang disenyo"],
    related: ["Core", "Drip", "aura", "Vibe", "fit check", "On Fleek", "Yassify", "Slay", "Fab", "Gucci", "Demure", "glow up", "Looks maxing", "Main slay"]
  },
  "extra": {
    word: "extra",
    alternatives: ["pabida", "pabibo", "OA", "overacting", "dramatic", "so extra", "attention whore", "sobra sa arte", "kulang sa pansin", "Pabida (Gen Alpha)", "sobra-sobra ang kilos", "nagpapapansin", "mapapel", "OA masyado"],
    related: ["Ksp", "Pick Me", "Echo Papa", "Main Character Vibe", "thirsty", "clout", "Cringe", "Zesty", "Party popper", "Sksksk"]
  },
  "so extra": {
    word: "so extra",
    alternatives: ["pabida", "pabibo", "OA", "overacting", "dramatic", "very extra", "sobrang OA", "OA sobra", "Sobra sa arte (Gen Alpha)", "grabe sa kaartehan", "sobrang pabida"],
    related: ["Ksp", "Pick Me", "Echo Papa", "Main Character Vibe", "extra", "Cringe", "Zesty", "thirsty"]
  },
  "Eyy": {
    word: "Eyy",
    alternatives: ["hey", "hi", "hello", "yo", "sup", "panawag", "pambati", "uy (pa-cool)", "Pansin (Gen Alpha)", "psst", "oi (pa-cool)"],
    related: ["Ayo?", "Bossing", "Sheesh", "Shoutout", "Poggers", "Lit"]
  },
  "Fab": {
    word: "Fab",
    alternatives: ["fabulous", "astig", "maganda", "cool", "great", "wonderful", "bongga", "taray", "Maganda (Gen Alpha)", "napakaganda", "sosyal", "pang-reyna"],
    related: ["Slay", "Lit", "Gucci", "On Fleek", "Estetik", "Yassify", "Queen", "Kween", "Drip", "Solid", "Buss"]
  },
  "Fanum tax": {
    word: "Fanum tax",
    alternatives: ["buraot", "taking food without asking", "sharing tax", "food tax", "stealing food playfully", "hingi ng pagkain", "patikim (sapilitan)", "Buraot sa pagkain (Gen Alpha)", "kuha ng pagkain ng iba", "nanghihingi ng pagkain", "kain ng pagkain ng iba"],
    related: ["Lafang", "Paras", "Mani", "glizzy", "snack", "thirsty", "Cringe"]
  },
  "fax only": {
    word: "fax only",
    alternatives: ["puro totoo", "katotohanan lang", "facts only", "no lies", "truth only", "walang halong kasinungalingan", "Totoo lang (Gen Alpha)", "walang bola", "tanging katotohanan"],
    related: ["fax", "all fax", "no cap", "Fr, fr", "no printer", "On God", "Periodt", "Reality check"]
  },
  "Fighting": {
    word: "Fighting",
    alternatives: ["laban lang", "go for it", "you can do it", "cheer up", "don't give up", "stay strong", "kaya mo yan", "huwag sumuko", "Laban lang (Gen Alpha)", "sige lang", "ituloy mo lang", "lakasan ang loob"],
    related: ["Push", "W", "Goat", "Slay", "Pop off", "Power hug", "Positive Aura", "Manifest"]
  },
  "finna": {
    word: "finna",
    alternatives: ["fixing to", "going to", "about to", "malapit nang gawin", "gonna", "gagawin ko na", "Malapit na (gawin) (Gen Alpha)", "sa susunod na gagawin", "balak gawin"],
    related: ["Push", "Yeet"]
  },
  "fire": {
    word: "fire",
    alternatives: ["angas", "astig", "sobrang galing", "cool", "lit", "awesome", "excellent", "on fire", "matindi", "grabe sa ganda/galing", "Astig (Gen Alpha)", "nag-aapoy sa galing", "walang katulad", "bomba"],
    related: ["Lit", "dank", "mad lit", "Slay", "cook", "Buss", "9001", "Solid", "Goat", "OP", "cracked", "Poggers", "Sheesh"]
  },
  "fit check": {
    word: "fit check",
    alternatives: ["ootd", "outfit check", "showing outfit", "style check", "what I'm wearing", "ano suot mo", "patingin ng porma", "Patingin ng damit (Gen Alpha)", "patingin ng OOTD", "damit check"],
    related: ["Drip", "Drippy", "Estetik", "Slay", "Gucci", "On Fleek", "Looks maxing", "Yassify", "Main slay", "Fab", "Flex", "clout"]
  },
  "Flaker": {
    word: "Flaker",
    alternatives: ["unreliable", "hindi tumutuloy sa plano", "cancels plans", "flake", "paasa", "hindi sumisipot", "drawing lang", "nang-iindian", "Hindi tumutupad sa usapan (Gen Alpha)", "mahilig mang-indian", "hindi mapagkakatiwalaan sa usapan", "pabago-bago ng isip"],
    related: ["Ghost", "L", "Cringe", "Red flag", "Womp womp", "Paras", "Sus", "Cap"]
  },
  "Flex": {
    word: "Flex",
    alternatives: ["pagpapakita", "pagyayabang", "show off", "brag", "showing off", "boast", "pagmamayabang", "display", "ipagmalaki", "Pagyayabang (Gen Alpha)", "pagpapasikat", "pagbibida", "pasikat"],
    related: ["clout", "Humblebrag", "Quiet flex", "Drip", "Slay", "Mani", "Secure the bag", "Goat", "OG", "Mr. bombastic", "Looks maxing", "mogging", "W"]
  },
  "Fomo": {
    word: "Fomo",
    alternatives: ["fear of missing out", "ayaw magpahuli", "envy", "social pressure", "inggit", "takot mahuli sa uso", "gusto laging kasama", "Takot maiwan (Gen Alpha)", "naiinggit sa iba", "gusto sumama lagi", "ayaw mapag-iwanan"],
    related: ["clout", "thirsty", "extra", "Ksp", "Cringe", "low vibration", "Menty B", "Obsessed"]
  },
  "Foxtrot Bravo": {
    word: "Foxtrot Bravo",
    alternatives: ["fast break", "umalis agad", "FB", "leave quickly", "sudden departure", "takbo agad", "alis na", "Takas (Gen Alpha)", "biglaang pag-alis", "karipas"],
    related: ["Run", "Ghost", "Yeet", "Skrtt"]
  },
  "Foxtrot Delta": {
    word: "Foxtrot Delta",
    alternatives: ["feeling deep", "nagdadrama", "FD", "dramatic", "emo", "senti", "hugot", "malungkot (nagpapanggap)", "Nagdadrama (Gen Alpha)", "sobrang emosyonal", "OA sa drama", "malungkot-malungkutan"],
    related: ["Menty B", "Emotional damage", "low vibration", "Delulu", "Cringe", "One-sided", "Oof", "Yap / yapping"]
  },
  "Fr, fr": {
    word: "Fr, fr",
    alternatives: ["for real", "totoo", "seryoso", "no joke", "legit", "for real for real", "walang biro talaga", "Totoo talaga (Gen Alpha)", "as in totoo", "pramis"],
    related: ["no cap", "fax", "all fax", "On God", "Periodt", "Reality check"]
  },
  "freddy fazbear": {
    word: "freddy fazbear",
    alternatives: ["fnaf", "five nights at freddys", "acting like freddy", "freddy fazbearing", "animatronic", "parang si freddy", "Nakakatakot na bear (Gen Alpha)", "karakter sa horror game", "oso na nakakatakot"],
    related: ["Brainrot", "Ohio", "uncanny", "Skibidi", "Cringe", "meme", "backrooms", "yike / yikes", "Sus"]
  },
  "freddy fazbearing": {
    word: "freddy fazbearing",
    alternatives: ["fnaf", "five nights at freddys", "acting like freddy", "mimicking freddy", "ginagaya si freddy", "Parang si Freddy (kilos) (Gen Alpha)", "kumikilos na parang si Freddy", "pag-arte na parang si Freddy"],
    related: ["freddy fazbear", "Brainrot", "Ohio", "uncanny", "Cringe", "NPC", "meme"]
  },
  "Frosh": {
    word: "Frosh",
    alternatives: ["freshman", "new student", "bagong salta", "first year", "newbie", "noob", "bagito", "Bagong estudyante (Gen Alpha)", "nasa unang taon", "baguhan sa eskwela"],
    related: ["Noob", "Beta", "8080", "Cringe", "Oof"]
  },
  "Gang": {
    word: "Gang",
    alternatives: ["tropa", "barkada", "squad", "crew", "friends", "homies", "clique", "katropa", "kabarkada", "Barkada (Gen Alpha)", "grupo ng magkakaibigan", "kasamahan"],
    related: ["Bossing", "Gar", "Lek", "Orb", "twin / twinning", "Ride or die", "Shoutout", "Solid", "Mahjong Nights"]
  },
  "Gar": {
    word: "Gar",
    alternatives: ["pare", "bro", "friend", "dude", "kaibigan", "tol", "bes", "Kaibigan (lalaki/babae) (Gen Alpha)", "brad", "sis (kung babae)"],
    related: ["Lek", "Bossing", "Orb", "Sis", "Gurl", "Gang", "Ayo?", "twin / twinning"]
  },
  "Ghost": {
    word: "Ghost",
    alternatives: ["ghosting", "biglang nawala", "hindi nagpaparamdam", "stopped communicating", "disappeared", "iniwan sa ere", "hindi na nag-reply", "Nang-iwan (Gen Alpha)", "biglang hindi nagparamdam", "biglang di na kinakausap"],
    related: ["Flaker", "RD (Relationship Drama)", "L", "Oof", "Red flag", "Rejected", "One-sided", "Sus", "Naur"]
  },
  "Ghosting": {
    word: "Ghosting",
    alternatives: ["pag ghost", "biglang nawala", "hindi nagpaparamdam", "stopping communication", "disappearing", "pang-iiwan sa ere", "hindi pagreply", "Pang-iiwan (Gen Alpha)", "hindi na pagpaparamdam", "biglaang pag-iwas"],
    related: ["Ghost", "Flaker", "RD (Relationship Drama)", "L", "Rejected", "Red flag", "Oof", "Cringe"]
  },
  "glaze": {
    word: "glaze",
    alternatives: ["sobrang papuri", "OA na papuri", "overpraising", "sipsip", "brown-nosing", "ass-kissing", "idolizing excessively", "sobrang bumibilib", "todo puri", "Sipsip (Gen Alpha)", "sobrang humahanga (negatibo)", "pagbubuhat ng bangko"],
    related: ["Simp", "thirsty", "Pick Me", "Stan", "Cringe", "Obsessed", "Fanum tax", "Ksp", "extra"]
  },
  "glizzy": {
    word: "glizzy",
    alternatives: ["hotdog", "sausage", "frankfurter", "wiener", "hotdog (slang)", "Hotdog (Gen Alpha)", "pagkaing hotdog", "TJ hotdog (brand generalization)"],
    related: ["snack", "Lafang", "Bussin", "Mani", "food"]
  },
  "glow up": {
    word: "glow up",
    alternatives: ["transformation", "improvement", "nagpaganda", "nagpagwapo", "beautification", "self-improvement", "upgrade", "malaking pagbabago (sa itsura)", "gumanda/gumwapo", "Pagbabago sa itsura (Gen Alpha)", "pag-level up ng itsura", "pagbabagong-anyo"],
    related: ["Yassify", "Looks maxing", "mewing", "mogging", "Slay", "Estetik", "Drip", "Fab", "On Fleek", "snack", "W", "Queen", "Kween", "Positive Aura"]
  },
  "Goat": {
    word: "Goat",
    alternatives: ["greatest of all time", "pinakamagaling", "the best", "legend", "master", "expert", "numero uno", "walang tatalo", "Pinakamahusay (Gen Alpha)", "pinakamahusay sa lahat", "alamat", "hari"],
    related: ["OP", "cracked", "W", "cook", "Slay", "OG", "Retsam", "Pro", "9001", "fire", "Lit", "chad alpha", "Sigma", "Solid", "Buss", "Main slay", "Star, star"]
  },
  "Goblin Mode": {
    word: "Goblin Mode",
    alternatives: ["walang pake", "tamad", "magulo", "lazy mode", "slob mode", "unapologetically messy", "feral mode", "walang pakialam sa itsura", "burara mode", "Tamad mode (Gen Alpha)", "hindi nag-aayos", "pabaya sa sarili", "dugyot mode"],
    related: ["low vibration", "cheugy", "Cringe", "Recharge", "Menty B", "Brainrot", "NPC", "L", "Womp womp", "8080"]
  },
  "goon": {
    word: "goon",
    alternatives: ["gooning", "edging", "self-pleasure marathon", "masturbation session", "matagalang paglalaro sa sarili", "Paglalaro sa sarili (matagalan) (Gen Alpha)", "paulit-ulit na pagpapaligaya sa sarili", "salsal (vulgar)", "jakol (vulgar)"],
    related: ["edge", "edging", "Bembang", "jelq", "thirsty", "Brainrot", "Obsessed", "Rent free", "low vibration"]
  },
  "gooning": {
    word: "gooning",
    alternatives: ["goon", "edging", "prolonged masturbation", "self-pleasure marathon", "ginagawa ang goon", "Paglalaro sa sarili (matagalan, pandiwa) (Gen Alpha)", "pagpapaligaya sa sarili (matagal)", "pagsasalsal (vulgar)", "pagjajakol (vulgar)"],
    related: ["edge", "edging", "Bembang", "jelq"]
  },
  "Green flag": {
    word: "Green flag",
    alternatives: ["positibong katangian", "good sign", "positive trait", "ideal", "good quality", "keeper", "mabuting senyales", "magandang ugali", "Magandang katangian (Gen Alpha)", "dapat tularan", "mabuting impluwensya", "karapat-dapat"],
    related: ["Red flag", "Positive Aura", "Ride or die", "Respect begets respect", "woke", "Normalize", "Demure", "Pookie bear", "Dasurv", "Solid"]
  },
  "griddy": {
    word: "griddy",
    alternatives: ["nakaka-LSS", "nakakaadik", "catchy", "addictive", "viral dance", "popular dance", "sayaw na viral", "Sayaw (viral) (Gen Alpha)", "sayaw na uso", "sayaw sa TikTok"],
    related: ["bop", "Toma toma", "Skibidi", "Brainrot", "Lit", "dank", "meme", "Party popper", "Yeet"]
  },
  "Gucci": {
    word: "Gucci",
    alternatives: ["okay na okay", "ayos lang", "good", "fine", "all good", "great", "excellent", "stylish", "ok lang", "walang problema", "Ayos lang (Gen Alpha)", "maganda", "dekalidad", "mahal (brand)"],
    related: ["Lit", "fire", "Drip", "On Fleek", "Fab", "Solid", "Estetik", "Slay", "OG", "Mr. bombastic"]
  },
  "Gurl": {
    word: "Gurl",
    alternatives: ["girl", "babae", "sis", "friend", "female friend", "term of endearment", "beh", "bessy", "Babae (tawag) (Gen Alpha)", "bakla (tawag sa kaibigan)", "teh"],
    related: ["Sis", "Ea", "Eabab", "Kween", "Queen", "yas gurl", "Baks", "Gar", "Bossing", "Pookie bear", "twin / twinning"]
  },
  "Gwad": {
    word: "Gwad",
    alternatives: ["god", "oh my god", "omg", "astig", "superior", "lord", "oh my lord", "grabe", "diyos ko", "Nakupo (pa-cool) (Gen Alpha)", "naku po", "susmaryosep (pa-cool)", "jusko"],
    related: ["Sheesh", "Poggers", "Lit", "fire", "Yassify", "Slay", "9001", "Emezing", "Oof", "yike / yikes", "Shook"]
  },
  "Gyatt / Gyat": {
    word: "Gyatt / Gyat",
    alternatives: ["goddamn", "malaki pwet", "big booty", "attractive body", "thicc", "curvy", "nice ass", "malaking balakang", "sexy ang katawan", "Malaki ang pwet (Gen Alpha)", "maganda ang hubog ng katawan", "borta (babae)", "malusog ang pwet"],
    related: ["snack", "buttah", "Latina", "Sobrang latina", "Monyeka", "thirst trap", "Drip", "Slay", "Sobrang sikip / shikip", "Bembang", "Looks maxing", "Rizz"]
  },
  "Hits diff": {
    word: "Hits diff",
    alternatives: ["iba ang dating", "it hits different", "special feeling", "unique impact", "feels special", "nostalgic", "may kakaibang epekto", "kakaiba ang pakiramdam", "Iba ang tama (Gen Alpha)", "may kirot (sa puso)", "nakakaantig", "kakaibang tama"],
    related: ["Vibe", "aura", "Estetik", "Oof", "Shook", "Menty B", "Emotional damage", "low vibration", "Nostalgia", "Core"]
  },
  "Humblebrag": {
    word: "Humblebrag",
    alternatives: ["pa-humble na pagyayabang", "subtle brag", "false modesty", "indirect boasting", "kunwaring mapagkumbaba pero nagyayabang", "Pasimpleng yaba (Gen Alpha)ng", "pagyayabang na patago", "yabang na di halata"],
    related: ["Flex", "Quiet flex", "clout", "Pick Me", "Cringe", "Ksp", "extra", "Sus", "shade"]
  },
  "Ick": {
    word: "Ick",
    alternatives: ["nakakadiri", "turn-off", "eww", "gross", "kadiri", "disgusting", "unattractive trait", "ayoko sa ugali", "hindi kaaya-ayang ugali", "Nakakadiri (ugali) (Gen Alpha)", "nakakabanas na ugali", "nakakasuka (ugali)", "pangit na ugali"],
    related: ["Cringe", "Off", "Pet peeve", "cheugy", "Red flag", "Sus", "Womp womp", "low vibration", "Negative aura", "yike / yikes"]
  },
  "Impostor": {
    word: "Impostor",
    alternatives: ["peke", "nagpapanggap", "fake", "pretender", "sus", "fraud", "deceiver", "mapagpanggap", "hindi totoo", "Peke (Gen Alpha)", "manloloko", "huwad", "doble kara"],
    related: ["Sus", "Snitch", "Ekans", "NPC", "Cap", "Jabaited", "caught in 4k", "Red flag", "Cringe", "cheugy", "Paras"]
  },
  "It’s giving…": {
    word: "It’s giving…",
    alternatives: ["vibe", "parang", "it seems like", "nagbibigay ng", "it has the energy of", "looks like", "ang dating ay...", "mukhang...", "Parang (Gen Alpha)", "ang dating niya ay...", "nagpapahiwatig ng...", "ang vibes ay..."],
    related: ["aura", "Vibe", "Main Character Vibe", "Estetik", "Core", "level", "Slay", "Cringe", "Demure", "Zesty", "Positive Aura", "Negative aura", "low vibration"]
  },
  "Jabaited": {
    word: "Jabaited",
    alternatives: ["napaniwala", "naloko", "tricked", "baited", "fooled", "deceived", "scammed", "na-uto", "na-isahan", "Naloko (Gen Alpha)", "nadale", "na-prank", "na-budol"],
    related: ["Psych", "Cap", "Impostor", "L", "Cringe", "Womp womp", "Oof", "Sus", "caught in 4k"]
  },
  "Jampacked": {
    word: "Jampacked",
    alternatives: ["puno", "busy", "siksikan", "full", "crowded", "packed", "loaded", "punong-puno", "sobrang daming tao/gawain", "Puno (Gen Alpha)", "dagsa", "walang bakante", "sobrang dami"],
    related: ["Unlimited", "Menty B", "Lit", "fire", "Recharge"]
  },
  "jawn": {
    word: "jawn",
    alternatives: ["bagay", "gamit", "tao", "lugar", "thing", "stuff", "item", "person", "place", "anumang bagay", "Kahit ano (Gen Alpha)", "kung ano man yan", "kemerut (colloquial)"],
    related: ["Eme", "ano", "whatever"]
  },
  "jelq": {
    word: "jelq",
    alternatives: ["penis enlargement exercise", "male enhancement technique", "sexual health exercise", "ehersisyo sa ari", "pampalaki ng ari", "Ehersisyo sa ari (Gen Alpha)", "paraan para lumaki ang ari", "pagpapalaki ng titi"],
    related: ["Bembang", "goon", "edging", "Looks maxing", "mogging", "thirsty", "chad alpha", "Rizz"]
  },
  "just put the fries in the bag": {
    word: "just put the fries in the bag",
    alternatives: ["tigil na", "hinto na", "move on", "stop talking", "enough said", "drop it", "tama na yan", "ayoko na marinig", "Move on na (Gen Alpha)", "manahimik ka na", "itigil mo na yang sinasabi mo", "tapusin na ang usapan"],
    related: ["pluh", "Womp womp", "Over", "Cringe", "Oof", "Tss", "Naur", "shade", "clapback"]
  },
  "Ksp": {
    word: "Ksp",
    alternatives: ["kulang sa pansin", "attention seeker", "papansin", "needy for attention", "gusto laging napapansin", "Pansinin niyo ako (Gen Alpha)", "nagpapapansin", "uhaw sa atensyon", "mapapel"],
    related: ["Echo Papa", "Pick Me", "extra", "clout", "Main Character Vibe", "thirsty", "Cringe", "Paras", "glaze", "Obsessed"]
  },
  "Kween / Kween behavior": {
    word: "Kween / Kween behavior",
    alternatives: ["queen", "kween behavior", "slay queen", "empowered woman", "confident woman", "regal", "reyna (pa-cute)", "astig na babae", "Reyna (Gen Alpha)", "babaeng may kumpiyansa", "idol", "diva"],
    related: ["Queen", "Slay", "yas gurl", "Gurl", "Sis", "Main slay", "Goat", "Fab", "OG", "Demure", "Estetik", "On Fleek", "Star, star"]
  },
  "L": {
    word: "L",
    alternatives: ["loss", "talo", "pagkatalo", "lose", "defeat", "failure", "lost", "bigo", "Talo (pinaikli) (Gen Alpha)", "natalo", "dehado", "bokya"],
    related: ["Big L", "dog water", "Womp womp", "Dempsey roll", "Ratioed", "Oof", "Mid", "Dasurv", "Rigged", "copium", "Menty B", "Cringe"]
  },
  "Lafang": {
    word: "Lafang",
    alternatives: ["kain", "eat", "food trip", "pig out", "feast", "devour", "lamon", "kumain nang marami", "Kain (matakaw) (Gen Alpha)", "pagkain nang marami", "busog lusog", "takaw"],
    related: ["Bussin", "Buzzin", "Sobrang sarap", "Mani", "Fanum tax", "glizzy", "snack", "slaps", "food"]
  },
  "Latina": {
    word: "Latina",
    alternatives: ["sobrang ganda", "beautiful", "gorgeous", "hot", "attractive woman", "napakaganda", "diyosa", "Magandang babae (Gen Alpha)", "babaeng Latino ang dating", "mala-dyosa ang ganda", "nakakaakit"],
    related: ["Monyeka", "snack", "Sobrang latina", "buttah", "Slay", "Queen", "Yassify", "Gyatt / Gyat", "Estetik", "Fab", "On Fleek", "Drip", "Looks maxing"]
  },
  "Lek": {
    word: "Lek",
    alternatives: ["pare", "bro", "dude", "friend", "aleck", "buddy", "tol", "Kaibigan (lalaki) (Gen Alpha)", "utol", "kosa"],
    related: ["Gar", "Bossing", "Orb", "Ekalal", "Gang", "Ayo?", "twin / twinning", "Sis"]
  },
  "let him cook": {
    word: "let him cook",
    alternatives: ["hayaan mo siya", "give him space", "trust the process", "let them work", "don't interfere", "he knows what he's doing", "pabayaan mo muna", "alam niya ginagawa niya", "Hayaan siyang gumalaw (Gen Alpha)", "huwag pakialaman", "manood ka lang", "bigyan ng pagkakataon"],
    related: ["cook", "W", "nailed it", "Goat", "OP", "Slay", "Push", "Pro", "OG", "Solid", "Buss", "fire"]
  },
  "level": {
    word: "level",
    alternatives: ["aura", "antas ng galing", "dating", "skill level", "vibe", "caliber", "standard", "antas", "husay", "Antas ng galing (Gen Alpha)", "kalidad", "estado", "kategorya"],
    related: ["aura", "Rizz", "Positive Aura", "Vibe", "It’s giving…", "OP", "Rank", "Goat", "9001", "cracked", "Solid", "Pro", "OG"]
  },
  "Lit": {
    word: "Lit",
    alternatives: ["ang lupet", "ang saya", "awesome", "cool", "exciting", "fire", "amazing", "fun", "sobrang saya", "astig", "Napakasaya/Astig (Gen Alpha)", "matindi", "grabe", "bomba"],
    related: ["fire", "dank", "mad lit", "Slay", "Poggers", "Gucci", "Buss", "9001", "Goat", "Solid", "Emezing", "Yeet", "Pop off"]
  },
  "Looks maxing": {
    word: "Looks maxing",
    alternatives: ["pagpapapogi", "self-improvement", "enhancing appearance", "beautification", "physical enhancement", "pagpapaganda", "pag-aayos ng itsura", "Pagpapaganda ng itsura (Gen Alpha)", "pag-maximize ng itsura", "todo ayos sa sarili", "pag-improve ng hitsura"],
    related: ["mewing", "mogging", "glow up", "Yassify", "jelq", "Drip", "Estetik", "Slay", "snack", "chad alpha", "buttah", "On Fleek", "fit check", "Rizz"]
  },
  "lore": {
    word: "lore",
    alternatives: ["kwento", "history", "background story", "backstory", "mythology", "narrative", "canon", "kasaysayan (ng isang bagay/tao)", "pinagmulan", "Kwento sa likod (Gen Alpha)", "alamat", "detalye ng kwento", "pinanggalingan"],
    related: ["NPC", "backrooms", "Ohio", "meme", "Skibidi toilet", "freddy fazbear", "copium", "Delulu", "Brainrot", "Core"]
  },
  "low vibration": {
    word: "low vibration",
    alternatives: ["bad vibes", "nakaka-drain", "negative energy", "toxic", "depressing", "unpleasant atmosphere", "masamang pakiramdam", "nakakababa ng mood", "Masamang enerhiya (Gen Alpha)", "hindi magandang pakiramdam", "nakakawalang gana", "malas"],
    related: ["Negative aura", "Off", "Ick", "Cringe", "Red flag", "Menty B", "Womp womp", "Oof", "Goblin Mode", "L", "Sus"]
  },
  "mad lit": {
    word: "mad lit",
    alternatives: ["sobrang saya", "astig", "ganda ng vibes", "extremely cool", "very exciting", "insanely fun", "sobrang astig", "grabe sa saya", "Sobrang saya/astig (Gen Alpha)", "todo saya", "party mode"],
    related: ["Lit", "fire", "dank", "Poggers", "Slay", "Buss", "Yeet", "Pop off"]
  },
  "Mahjong Nights": {
    word: "Mahjong Nights",
    alternatives: ["sikretong gala", "gimik", "secret hangout", "late night activity", "friends gathering", "tagong lakad", "Sikretong lakad (Gen Alpha)", "lamyerda", "night out (patago)", "eskapo"],
    related: ["Gang", "tambay", "inuman", "Alak" /* if Alak exists */, "Barkada trip", "Recharge", "vibin'"]
  },
  "Main Character Vibe": {
    word: "Main Character Vibe",
    alternatives: ["sentro ng atensyon", "bida", "protagonist energy", "feeling like the main character", "star quality", "laging bida", "pakiramdam na bida", "Bida-bida (Gen Alpha)", "feeling bida", "laging sentro", "ako ang bida"],
    related: ["aura", "Vibe", "It’s giving…", "Ksp", "extra", "clout", "Slay", "Queen", "OG", "Flex", "Looks maxing", "Manifest", "Pookie bear", "Star, star"]
  },
  "Main slay": {
    word: "Main slay",
    alternatives: ["pinaka-standout moment", "best outfit", "highlight performance", "peak moment", "pinakamagandang porma/performance", "Pinaka-astig na sandali (Gen Alpha)", "pinakabongga", "pinaka-angat"],
    related: ["Slay", "Kween", "Queen", "Goat", "W", "fit check", "On Fleek", "Yassify", "Drip", "Fab", "Star, star", "Lit", "fire", "Buss", "Solid"]
  },
  "Malewife": {
    word: "Malewife",
    alternatives: ["caring husband", "house husband", "supportive partner (male)", "domestic man", "lalaking maalaga sa bahay", "asawang lalaki na nasa bahay", "Lalaking asawa sa bahay (Gen Alpha)", "lalaking gumagawa ng gawaing bahay", "under de saya (pabiro)"],
    related: ["Beta", "Simp", "Pookie bear", "Green flag", "Demure", "Recharge", "low vibration"]
  },
  "Mani": {
    word: "Mani",
    alternatives: ["pera", "money", "cash", "kwarta", "datung", "salapi", "Pera (Gen Alpha)", "budget", "gastos", "barya"],
    related: ["Secure the bag", "Flex", "clout", "Lafang", "Bussin", "Fanum tax"]
  },
  "Manifest": {
    word: "Manifest",
    alternatives: ["confident vibes", "standout vibes", "attract desires", "make it happen", "visualize success", "law of attraction", "ipinapanalangin", "gustong mangyari", "Pag-attract ng gusto (Gen Alpha)", "hilingin at mangyayari", "positibong pag-iisip para matupad", "dasal"],
    related: ["Delulu", "copium", "aura", "Positive Aura", "Push", "Pookie bear", "Slay", "W", "Goat", "Green flag", "woke"]
  },
  "Masyadong chill": {
    word: "Masyadong chill",
    alternatives: ["sobrang relax", "hindi nagmamadali", "too calm", "laid back", "unbothered", "kalmado lang", "walang kaba", "Relax lang (Gen Alpha)", "walang stress", "petiks", "kampante"],
    related: ["Nonchalant", "Vibe", "vibin'", "Recharge", "Sigma", "Gucci", "Demure", "Positive Aura", "Goblin Mode"]
  },
  "Meh": {
    word: "Meh",
    alternatives: ["walang dating", "boring", "okay lang", "not impressive", "average", "uninterested", "so-so", "pwede na", "hindi masyadong maganda", "Okay lang (walang gana) (Gen Alpha)", "hindi nakaka-excite", "patapon", "walang kwenta"],
    related: ["Mid", "Cringe", "Ick", "low vibration", "Womp womp", "dog water", "cheugy", "L", "Out", "Off"]
  },
  "Meme lord": {
    word: "Meme lord",
    alternatives: ["meme expert", "funny person", "internet comedian", "king of memes", "magaling gumawa ng meme", "hari ng meme", "Nakakatawang tao sa internet (Gen Alpha)", "mahilig sa meme", "source ng meme", "komedyante"],
    related: ["meme", "dank", "Cringe", "Burts", "Brainrot", "clout", "Party popper", "Tralalero tralala", "Yap / yapping", "Shoutout"]
  },
  "Mentality": {
    word: "Mentality",
    alternatives: ["mindset", "attitude", "perspective", "way of thinking", "outlook", "pag-iisip", "pananaw", "Paraan ng pag-iisip (Gen Alpha)", "prinsipyo", "kaugalian sa pag-iisip", "diskarte sa isip"],
    related: ["aura", "Vibe", "sigma", "chad alpha", "Beta", "Positive Aura", "low vibration", "woke", "copium", "Delulu", "Brainrot", "Goat", "OG"]
  },
  "Menty B": {
    word: "Menty B",
    alternatives: ["mental breakdown", "matinding pagkabalisa", "emosyonal na paghihirap", "stress attack", "anxiety", "siraulo moment", "nasiraan ng bait (pabiro)", "Pagkakaroon ng mental breakdown (Gen Alpha)", "sobrang stress", "hindi na kinaya ng isip", "sumabog ang isip"],
    related: ["Emotional damage", "low vibration", "Oof", "Cringe", "Womp womp", "RD (Relationship Drama)", "Shook", "backrooms", "copium", "Delulu", "Brainrot", "L"]
  },
  "Mewing": {
    word: "Mewing",
    alternatives: ["jaw exercise", "face exercise", "improve jawline", "tongue posture", "ehersisyo sa panga", "pampaganda ng panga", "Ehersisyo sa mukha (Gen Alpha)", "pag-ayos ng postura ng dila", "pampahaba ng baba"],
    related: ["Looks maxing", "mogging", "glow up", "chad alpha", "Rizz", "Estetik", "Drip", "Slay", "snack"]
  },
  "Mid": {
    word: "Mid",
    alternatives: ["hindi kahanga-hanga", "karaniwan lang", "average", "mediocre", "so-so", "not great", "sakto lang", "hindi maganda, hindi pangit", "Karaniwan lang (Gen Alpha)", "walang special", "pangkaraniwan", "pwede na"],
    related: ["Meh", "L", "dog water", "cheugy", "Cringe", "Overrated", "Womp womp", "Out", "Off"]
  },
  "Mogging": {
    word: "Mogging",
    alternatives: ["magpaganda para mahigitan iba", "outshine others physically", "dominating by looks", "pagandahan", "paligsahan sa itsura", "Pagpapaganda para mang-asar (Gen Alpha)", "pagpapakitang mas maganda/gwapo", "pag-angat sa itsura"],
    related: ["Looks maxing", "mewing", "glow up", "chad alpha", "Rizz", "Slay", "Flex", "Drip", "snack", "buttah", "Main slay", "clout", "W"]
  },
  "Monggo": {
    word: "Monggo",
    alternatives: ["mukhang monggoloid", "bobo", "tanga", "stupid", "slow-witted", "may kapansanan sa pag-iisip (derogatory)", "Bobo (nakakainsulto) (Gen Alpha)", "baliw (nakakainsulto)", "may sayad (nakakainsulto)", "abnormal (nakakainsulto)"],
    related: ["8080", "sped", "Brainrot", "dog water", "L", "Cringe", "Noob", "NPC", "Womp womp"]
  },
  "Monyeka": {
    word: "Monyeka",
    alternatives: ["sobrang ganda", "manika", "doll-like beauty", "very beautiful", "gorgeous", "parang manika sa ganda", "Napakaganda (parang manika) (Gen Alpha)", "napakacute", "perpektong ganda", "mukhang manika"],
    related: ["Latina", "Sobrang latina", "snack", "Slay", "Queen", "Kween", "Yassify", "Estetik", "buttah", "Fab", "On Fleek", "glow up", "Looks maxing"]
  },
  "Mr. bombastic": {
    word: "Mr. bombastic",
    alternatives: ["may dating", "kumpiyansa", "confident man", "charismatic", "smooth operator", "mayabang (pero astig)", "malakas ang dating", "Lalaking mayabang at astig (Gen Alpha)", "ma-appeal", "mahangin (pero may dating)", "pogi na mayabang"],
    related: ["chad alpha", "Rizz", "buttah", "Sigma", "Slay", "OG", "Flex", "Goat", "Drip", "Main Character Vibe", "Looks maxing"]
  },
  "nailed it": {
    word: "nailed it",
    alternatives: ["ginalingan", "perfect", "done perfectly", "succeeded", "aced it", "tamang-tama", "nakuha ng perpekto", "Ginalingan (Gen Alpha)", "perpekto ang gawa", "walang mintis", "sapul"],
    related: ["cook", "Eat", "Slay", "W", "Goat", "let him cook", "Solid", "Pop off", "Buss", "Pro", "OP"]
  },
  "Naur": {
    word: "Naur",
    alternatives: ["no", "hindi", "ayaw", "definitely not", "hindi (pa-cute/OA)", "Ayoko (pa-cute) (Gen Alpha)", "ayaw ko (pabiro)", "hindi pwede (pa-cute)"],
    related: ["Eme", "Cringe", "Opkors", "pluh", "yike / yikes", "Womp womp", "Tss"]
  },
  "Negative aura": {
    word: "Negative aura",
    alternatives: ["kahihiyan", "negatibong enerhiya", "bad vibes", "toxic energy", "unpleasant presence", "masamang dating", "nakaka-badtrip", "Masamang enerhiya (Gen Alpha)", "hindi magandang pakiramdam (sa tao)", "nakakasira ng mood", "malas"],
    related: ["aura", "low vibration", "Off", "Ick", "Cringe", "Red flag", "Womp womp", "Sus", "L", "Menty B"]
  },
  "Ngani": {
    word: "Ngani",
    alternatives: ["nga", "talaga", "indeed", "really", "truly", "oo nga", "totoo nga", "Talaga (Bisaya) (Gen Alpha)", "nga (Bisaya)", "kasi"],
    related: ["Oo, ngani", "Fr, fr", "fax", "On God", "yas / yas gurl"]
  },
  "Ni hao fin shyt": {
    word: "Ni hao fin shyt",
    alternatives: ["hello fine shit", "chinese meme song", "gibberish song", "funny phrase", "kantang walang kwenta (meme)", "Kantang nakakatawa (Gen Alpha)", "kantang Intsik na meme", "kantang pampa-brainrot"],
    related: ["Brainrot", "Ohio", "Tralalero tralala", "Skibidi", "Cringe", "what the sigma?", "meme", "dank", "Burts"]
  },
  "No cap": {
    word: "No cap",
    alternatives: ["no lie", "totoo", "for real", "hindi biro", "seryoso", "truth", "walang halong biro", "Walang kasinungalingan (Gen Alpha)", "hindi ako nagsisinungaling", "pramis"],
    related: ["Cap", "fax", "all fax", "Fr, fr", "On God", "no printer", "Periodt", "Reality check", "Solid"]
  },
  "no printer": {
    word: "no printer",
    alternatives: ["walang imbento", "orihinal", "original", "not copied", "authentic", "hindi kinopya", "sariling gawa", "Orihinal (Gen Alpha)", "hindi galing sa iba", "galing sa sarili", "walang daya"],
    related: ["fax", "all fax", "No cap", "Fr, fr", "On God", "OG", "Slay", "cook", "Solid", "Goat"]
  },
  "Nonchalant": {
    word: "Nonchalant",
    alternatives: ["walang interes", "walang pagkabahala", "calm", "casual", "unconcerned", "cool", "indifferent", "kalmado", "parang walang pake", "Walang pakialam (kalmado) (Gen Alpha)", "hindi apektado", "kampante", "dedma"],
    related: ["Masyadong chill", "Vibe", "vibin'", "Sigma", "Recharge", "Gucci", "Demure", "aura", "low vibration" /* if perceived negatively */, "Sus"]
  },
  "Noob": {
    word: "Noob",
    alternatives: ["baguhan", "walang karanasan", "newbie", "beginner", "inexperienced", "amateur", "bago pa lang", "hindi pa marunong", "Baguhan (sa laro/bagay) (Gen Alpha)", "walang alam (sa laro)", "tanga sa laro"],
    related: ["Frosh", "dog water", "L", "Beta", "8080", "sped", "Cringe", "Womp womp", "Mid"]
  },
  "Normalize": {
    word: "Normalize",
    alternatives: ["gawing normal", "gawing tanggap", "make it standard", "accept as normal", "destigmatize", "gawing karaniwan", "Gawing katanggap-tanggap (Gen Alpha)", "gawing pangkaraniwan", "gawing normal ang dating abnormal"],
    related: ["woke", "Reality check", "Green flag", "Respect begets respect", "Push", "Positive Aura", "Slay"]
  },
  "Not clickbait": {
    word: "Not clickbait",
    alternatives: ["legit", "totoo", "hindi panloloko", "genuine content", "real deal", "hindi daya", "Totoo (hindi clickbait) (Gen Alpha)", "hindi pang-uto", "tunay na balita/content", "walang daya"],
    related: ["No cap", "Fr, fr", "Resibo", "fax", "all fax", "Reality check", "Solid"]
  },
  "Not it": {
    word: "Not it",
    alternatives: ["ayaw gawin", "hindi ako", "not me", "pass", "someone else do it", "hindi ako gagawa niyan", "Ayoko (Gen Alpha)", "iba na lang", "pass ako dyan", "ayoko niyan"],
    related: ["Not me", "pluh", "Naur", "Womp womp", "L", "Cringe"]
  },
  "Not me": {
    word: "Not me",
    alternatives: ["hindi ako yun", "self-aware humor", "relatable moment", "definitely not me (sarcastically)", "ako ba yan (pabiro)", "Ako 'to (nakakahiya/nakakatawa) (Gen Alpha)", "ako yan (pero ayaw aminin)", "ako 'to (sabay tago)"],
    related: ["Not it", "Cringe", "yike / yikes", "Oof", "Shook", "Delulu", "Goblin Mode", "Sksksk", "Womp womp"]
  },
  "Not the": {
    word: "Not the",
    alternatives: ["expression of disbelief", "funny awkward callout", "oh no not that", "highlighting something absurd", "hindi yan (nakakagulat/nakakahiya)", "Huwag yan (nakakahiya) (Gen Alpha)", "ano ba yan (pabiro)", "hindi dapat yan"],
    related: ["Cringe", "yike / yikes", "Oof", "Womp womp", "Shook", "Sus", "Plot twist", "Oh no", "Naur"]
  },
  "NPC": {
    word: "NPC",
    alternatives: ["non-playable character", "scripted behavior", "no original thought", "robotic", "background character", "conformist", "parang robot", "sunud-sunuran lang", "Walang sariling isip (Gen Alpha)", "paulit-ulit ang kilos/sinasabi", "walang personalidad", "parang programado"],
    related: ["Brainrot", "Erm actually", "Impostor", "Sus", "Beta", "8080", "Monggo", "Goblin Mode", "Cringe", "lore"]
  },
  "nunya": {
    word: "nunya",
    alternatives: ["none of your business", "wala kang pakialam", "mind your own business", "private matter", "hindi mo na kailangan malaman", "Wala kang pake (Gen Alpha)", "sikreto ko to", "huwag kang usisero", "labas ka na diyan"],
    related: ["pluh", "Tss", "shade", "Ghost", "Over"]
  },
  "Obsessed": {
    word: "Obsessed",
    alternatives: ["sobrang pagkagusto", "fixated", "hooked", "addicted", "can't get enough", "fanatic", "sobrang gusto", "adik", "Baliw na baliw (Gen Alpha)", "hindi mapigilang gusto", "sobrang fan", "hindi maka-move on"],
    related: ["Simp", "glaze", "Stan", "Delulu", "Pookie bear", "thirsty", "Brainrot", "Rent free", "Menty B", "copium"]
  },
  "Off": {
    word: "Off",
    alternatives: ["hindi kaaya-aya", "kakaiba", "weird", "strange", "unpleasant", "bad vibe", "may mali", "kakaiba ang dating", "Hindi maganda (ugali/vibe) (Gen Alpha)", "may topak (pabiro)", "hindi tama", "baliw (pabiro)"],
    related: ["Ick", "Cringe", "low vibration", "Negative aura", "Red flag", "Sus", "yike / yikes", "cheugy", "uncanny", "Womp womp"]
  },
  "OG": {
    word: "OG",
    alternatives: ["original gangster", "original", "respetado", "veteran", "pioneer", "true original", "orihinal", "matagal na sa laro", "Respetado (Gen Alpha)", "una", "kinikilala", "alamat"],
    related: ["Goat", "Retsam", "chad alpha", "Sigma", "clout", "Old School", "Pro", "Bossing", "Slay", "Solid", "Main Character Vibe", "No cap"]
  },
  "Ohio": {
    word: "Ohio",
    alternatives: ["kakaiba", "weird", "surreal", "strange place", "meme place", "cursed", "hindi normal na lugar", "Kakaibang lugar (meme) (Gen Alpha)", "walang katuturan", "nakakabaliw", "kakatwang lugar"],
    related: ["Brainrot", "backrooms", "uncanny", "Skibidi", "Ni hao fin shyt", "what the sigma?", "Cringe", "yike / yikes", "meme", "dank", "Sus", "Plot twist"]
  },
  "OK boomer": {
    word: "OK boomer",
    alternatives: ["dismissing older generation", "outdated views", "old fashioned", "get with the times", "sige na matanda", "makaluma ka na", "Dismiss sa matanda (Gen Alpha)", "hindi ka na uso", "panahon mo pa", "laos ka na"],
    related: ["Eduls", "Old School", "cheugy", "Cringe", "L", "Womp womp", "shade", "clapback", "woke"]
  },
  "Old School": {
    word: "Old School",
    alternatives: ["tradisyonal", "makaluma", "classic", "vintage", "retro", "old fashioned", "sinauna", "lumang istilo", "Makaluma (Gen Alpha)", "paraan ng dati", "nakaraan"],
    related: ["Eduls", "OK boomer", "cheugy", "OG", "Demure", "Gucci", "Solid", "Vibe"]
  },
  "On Fleek": {
    word: "On Fleek",
    alternatives: ["perpekto", "napakaganda", "napakagaling", "perfectly styled", "on point", "flawless", "sakto sa ganda", "walang mali", "Perpekto (itsura) (Gen Alpha)", "tamang-tama ang ayos", "pulidong-pulido", "taray"],
    related: ["Slay", "Drip", "Drippy", "Estetik", "Gucci", "Yassify", "Main slay", "Fab", "glow up", "snack", "buttah", "Looks maxing", "fire"]
  },
  "On God": {
    word: "On God",
    alternatives: ["I swear", "totoo", "no lie", "I promise", "for real", "truthfully", "sumpa man", "pramis", "Totoo (sumpa man) (Gen Alpha)", "maniwala ka", "walang halong biro"],
    related: ["No cap", "Fr, fr", "fax", "all fax", "no printer", "Periodt", "Reality check", "Solid"]
  },
  "On lock": {
    word: "On lock",
    alternatives: ["secured", "sure na", "guaranteed", "under control", "mastered", "handled", "sigurado na", "kontrolado", "Sigurado (Gen Alpha)", "nakaselyo na", "walang palya", "nakareserba na"],
    related: ["W", "nailed it", "Secure the bag", "Solid", "Goat", "Pro", "OG", "No cap"]
  },
  "On thin ice": {
    word: "On thin ice",
    alternatives: ["delikadong kalagayan", "warning", "malapit na mapahamak", "in trouble", "risky situation", "nasa bingit ng kapahamakan", "Babala (Gen Alpha)", "konti na lang", "mag-ingat ka", "delikado ka na"],
    related: ["Red flag", "L", "Oof", "Sus", "Menty B", "Womp womp", "Pressed", "Cringe", "yike / yikes"]
  },
  "One-sided": {
    word: "One-sided",
    alternatives: ["may kinikilingan", "unrequited", "not mutual", "biased", "unfair", "isang panig lang", "hindi suklian", "Isang panig lang (pag-ibig) (Gen Alpha)", "siya lang ang may gusto", "walang kapalit na pagtingin", "ikaw lang ang nagmamahal"],
    related: ["Simp", "Delulu", "RD (Relationship Drama)", "L", "Pookie bear", "Obsessed", "Menty B", "Ghost", "copium", "low vibration", "Cringe"]
  },
  "Oo, ngani": {
    word: "Oo, ngani",
    alternatives: ["oo nga", "talaga nga", "yes indeed", "that's right", "truly", "Oo talaga (Bisaya) (Gen Alpha)", "tama ka nga", "siyanga pala"],
    related: ["Ngani", "Fr, fr", "On God", "fax", "yas / yas gurl", "Opkors"]
  },
  "Oof": {
    word: "Oof",
    alternatives: ["expression of sympathy", "awkwardness", "pain", "cringe", "ouch", "yikes", "aray", "sakit (expression)", "Nakaka-awkward (expression) (Gen Alpha)", "naku", "patay", "ay"],
    related: ["Cringe", "yike / yikes", "Emotional damage", "Menty B", "Womp womp", "L", "Big L", "Shook", "Pressed", "Sus", "Potek / Pucha", "low vibration"]
  },
  "OOMF": {
    word: "OOMF",
    alternatives: ["one of my followers", "one of my friends", "social media reference", "anonymous mention", "isa sa mga kaibigan/follower ko", "Isa sa followers (Gen Alpha)", "kakilala sa social media", "yung isa kong follower"],
    related: ["Tea", "Yap / yapping", "Shoutout", "clout", "Sus", "QRT", "shade"]
  },
  "OP": {
    word: "OP",
    alternatives: ["overpowered", "sobrang galing", "sobrang lakas", "too strong", "unbeatable", "god-tier", "napakalakas", "walang tatalo (sa laro)", "Sobrang lakas (sa laro) (Gen Alpha)", "hindi makatarungan sa lakas", "hindi kaya"],
    related: ["cracked", "Goat", "W", "cook", "Slay", "9001", "level", "Pro", "Retsam", "Solid", "fire", "Lit", "Dempsey roll"]
  },
  "Open-up": {
    word: "Open-up",
    alternatives: ["magbahagi ng nararamdaman", "share feelings", "be vulnerable", "confide", "reveal thoughts", "magsabi ng saloobin", "magtapat", "Magsabi ng nararamdaman (Gen Alpha)", "ilabas ang sama ng loob/saya", "maging bukas"],
    related: ["Tea", "RD (Relationship Drama)", "Menty B", "Vibe check", "Yap / yapping", "Positive Aura", "Recharge", "Power hug"]
  },
  "Opkors": {
    word: "Opkors",
    alternatives: ["of course", "syempre", "naturalmente", "obviously", "sure", "syempre naman (pa-cute)", "Oo naman (Gen Alpha)", "oo naman (pabiro)", "siyempre"],
    related: ["yas / yas gurl", "Naur", "Eme", "Yarn", "Fr, fr"]
  },
  "opp": {
    word: "opp",
    alternatives: ["opposition", "kalaban", "kaaway", "enemy", "rival", "adversary", "kagalit", "kontra", "Kalaban (Gen Alpha)", "katunggali", "kaaway sa laro/buhay", "kabilang panig"],
    related: ["Snitch", "Ekans", "Impostor", "Sus", "Dempsey roll", "Roast", "Savage", "Red flag", "L", "Rigged"]
  },
  "Orb": {
    word: "Orb",
    alternatives: ["bro", "brother", "pare", "kaibigan", "homie", "tropa (binaliktad)", "Kaibigan (binaliktad) (Gen Alpha)", "utol (binaliktad)", "brad (binaliktad)"],
    related: ["Lek", "Gar", "Bossing", "Ekalal", "Gang", "twin / twinning", "Ayo?", "Sis"]
  },
  "Out": {
    word: "Out",
    alternatives: ["wala na sa uso", "lipas na", "hindi na relevant", "outdated", "passe", "not cool anymore", "laos na", "luma na", "Wala na sa uso (Gen Alpha)", "hindi na pinapansin", "tapos na ang kasikatan", "lipas na sa panahon"],
    related: ["cheugy", "Old School", "L", "Mid", "Cringe", "OK boomer", "Womp womp", "Meh"]
  },
  "out of pocket": {
    word: "out of pocket",
    alternatives: ["walang preno", "bastos", "wala sa lugar", "inappropriate", "wild", "disrespectful", "uncalled for", "hindi tama", "sobra", "Hindi angkop (Gen Alpha)", "hindi pinag-isipan", "bastos ang sinabi/ginawa", "lumagpas sa linya"],
    related: ["Savage", "Cringe", "Off", "Red flag", "yike / yikes", "Tss", "Oof", "Womp womp", "Potek / Pucha", "Sus"]
  },
  "Out of this World": {
    word: "Out of this World",
    alternatives: ["sobrang ganda", "kakaiba", "hindi kapani-paniwala", "amazing", "incredible", "extraordinary", "unbelievable", "grabe sa ganda/galing", "Hindi kapani-paniwala (sa ganda/galing) (Gen Alpha)", "sobrang husay", "pambihira", "ibang klase"],
    related: ["Lit", "fire", "Goat", "Slay", "Poggers", "9001", "Emezing", "Fab", "Buss", "Solid", "cracked", "uncanny", "Main slay"]
  },
  "Outcast": {
    word: "Outcast",
    alternatives: ["hindi kasali", "loner", "misfit", "outsider", "rejected", "isolated", "laging mag-isa", "walang kaibigan", "Hindi belong (Gen Alpha)", "itinakwil", "walang grupo", "naiiba"],
    related: ["Beta", "NPC", "low vibration", "L", "Menty B", "Cringe", "Oof", "Sigma", "Sus", "Ghost"]
  },
  "Over": {
    word: "Over",
    alternatives: ["tapos na", "hindi na interesado", "done", "finished", "moved on", "past it", "ayoko na", "wala na", "Tapos na (Gen Alpha)", "suko na", "move on na", "game over"],
    related: ["pluh", "just put the fries in the bag", "Naur", "L", "Womp womp", "Ghost", "Flaker", "RD (Relationship Drama)"]
  },
  "Overrated": {
    word: "Overrated",
    alternatives: ["masyadong pinupuri", "hindi naman ganun kaganda", "overhyped", "not worth the praise", "given too much credit", "sobrang sikat pero di maganda", "Hindi sulit sa hype (Gen Alpha)", "masyado lang sikat", "hindi naman special", "OA sa papuri"],
    related: ["Mid", "Meh", "cheugy", "Cringe", "L", "Womp womp", "clout", "Sus", "Cap"]
  },
  "Paras": {
    word: "Paras",
    alternatives: ["parasite", "peste", "freeloader", "user", "leech", "burden", "pabigat", "nakikisipsip", "Peste (tao) (Gen Alpha)", "umaasa sa iba", "walang ambag", "buraot (ugali)"],
    related: ["Snitch", "Flaker", "Ekans", "Ksp", "Cringe", "Red flag", "L", "Womp womp", "thirsty", "Fanum tax", "Straw"]
  },
  "Party popper": {
    word: "Party popper",
    alternatives: ["nagpapasaya", "life of the party", "entertainer", "fun person", "joker", "masayahin", "laging nagpapatawa", "Nagpapasaya sa party (Gen Alpha)", "komedyante ng grupo", "sentro ng kasiyahan"],
    related: ["extra", "Main Character Vibe", "Burts", "Lit", "Slay", "Eme", "Tralalero tralala", "Positive Aura", "Pop off", "Yeet"]
  },
  "Periodt": {
    word: "Periodt",
    alternatives: ["period", "end of discussion", "that's final", "no more arguments", "full stop", "yun na yon", "tapos ang usapan", "Wala nang pero-pero (Gen Alpha)", "huling salita", "walang kokontra", "ganun na lang"],
    related: ["No cap", "Fr, fr", "On God", "fax", "all fax", "Slay", "clapback", "W", "Solid", "Reality check"]
  },
  "Pet peeve": {
    word: "Pet peeve",
    alternatives: ["nakakainis na gawain", "annoyance", "irritation", "bothersome habit", "thing that bugs you", "bagay na kinaiinisan", "Nakakainis na bagay (Gen Alpha)", "ayaw na ayaw ko", "nakakabwisit", "kinabubwisitan"],
    related: ["Ick", "Cringe", "Off", "Red flag", "Pressed", "low vibration", "Oof", "Tss", "yike / yikes"]
  },
  "Pick Me": {
    word: "Pick Me",
    alternatives: ["naghahanap ng atensyon", "attention seeker (female)", "validation seeker", "trying too hard to be liked", "papansin (sa lalaki/babae)", "gusto mapansin", "Papansin (Gen Alpha)", "nagmamalinis", "pa-victim", "nagpapa-awa"],
    related: ["Ksp", "extra", "clout", "Cringe", "Simp", "thirsty", "glaze", "Red flag", "Humblebrag", "Sus", "Ick"]
  },
  "Pink na pink": {
    word: "Pink na pink",
    alternatives: ["very pink", "sobrang rosas", "bright pink", "intensely pink", "kulay rosas na rosas", "Sobrang rosas (Gen Alpha)", "pusyaw na rosas", "kulay Barbie"],
    related: ["Estetik", "Slay", "On Fleek", "Yassify", "Barbiecore", "Fab", "Kween", "Candy", "Drip", "Main slay"]
  },
  "Pinoy bait": {
    word: "Pinoy bait",
    alternatives: ["content para sa Pinoy", "Filipino-targeted content", "pandering to Filipinos", "cultural pandering", "pang-akit sa Pinoy", "Content para sa Pilipino (Gen Alpha)", "ginawa para mag-viral sa Pinas", "pampa-trending sa Pinas"],
    related: ["clout", "Cringe", "thirsty", "Ksp", "meme", "Brainrot", "Overrated", "Sus", "Cap"]
  },
  "Plot twist": {
    word: "Plot twist",
    alternatives: ["biglaang pagbabago", "unexpected turn", "surprise ending", "twist in the story", "hindi inaasahang pangyayari", "gulat na pangyayari", "Hindi inaasahan (sa kwento) (Gen Alpha)", "kakaibang pag-ikot ng kwento", "sorpresa sa dulo", "kakaibang wakas"],
    related: ["Oof", "Shook", "shooketh", "Cringe", "yike / yikes", "Womp womp", "Sus", "Jabaited", "uncanny", "Ohio", "backrooms"]
  },
  "Plug": {
    word: "Plug",
    alternatives: ["promote", "endorse", "recommend", "shoutout", "connect", "source", "irekomenda", "ipakilala", "Pag-promote (Gen Alpha)", "i-share", "i-advertise", "koneksyon"],
    related: ["Shoutout", "Flex", "clout", "OG", "Mani", "Secure the bag", "Tea", "Yap / yapping"]
  },
  "pluh": {
    word: "pluh",
    alternatives: ["tapos na", "ayoko na", "end of conversation", "I'm done", "whatever", "dismissive sound", "wala na masabi", "Ayoko na (tunog) (Gen Alpha)", "bahala na", "suko na (sa usapan)", "ayoko na sayo"],
    related: ["just put the fries in the bag", "Over", "Womp womp", "Meh", "Tss", "Naur", "Cringe", "Ghost"]
  },
  "podium": {
    word: "podium",
    alternatives: ["magaling pero di pinakamagaling", "top 3", "achieved a high rank", "winner's stand", "near the top", "pasok sa top", "Nasa taas (pero di No.1) (Gen Alpha)", "runner-up", "panalo pa rin", "may napatunayan"],
    related: ["W", "Rank", "Goat", "Pro", "Solid", "Slay", "cook", "OP", "cracked", "9001"]
  },
  "Pog / Poggers": {
    word: "Pog / Poggers",
    alternatives: ["excitement", "approval", "play of the game", "awesome", "cool", "wow", "nice", "astig (expression)", "galing (expression)", "Wow (expression) (Gen Alpha)", "grabe (sa galing/saya)", "lupit (expression)"],
    related: ["Lit", "fire", "Sheesh", "W", "cook", "Slay", "Gwad", "Emezing", "9001", "Buss", "Solid", "dank", "Shook", "Quaking", "Yeet"]
  },
  "Pookie bear": {
    word: "Pookie bear",
    alternatives: ["term of endearment", "sweetheart", "darling", "my love", "baby", "mahal", "bebe ko", "Tawag sa mahal (Gen Alpha)", "irog", "sinta", "honey bunch"],
    related: ["Rawr", "Burger ka sakin", "Delulu", "Manifest", "Simp", "RD (Relationship Drama)", "Obsessed", "twin / twinning", "Power hug", "One-sided", "Zesty"]
  },
  "Pop off": {
    word: "Pop off",
    alternatives: ["gawin nang todo", "mahusay", "excel", "go all out", "dominate", "shine", "ibuhos ang galing", "todo bigay", "Galingan (Gen Alpha)", "magpakitang-gilas", "rumampa", "sumabog sa galing"],
    related: ["Slay", "cook", "Eat", "W", "Goat", "nailed it", "fire", "Lit", "Buss", "Solid", "Yeet", "Party popper"]
  },
  "Positive Aura": {
    word: "Positive Aura",
    alternatives: ["positibong enerhiya", "good vibes", "charming personality", "uplifting presence", "magnetic", "magandang dating", "nakakagaan ng loob", "Magandang enerhiya (Gen Alpha)", "masayahin", "nakakahawa ang saya", "magaan kasama"],
    related: ["aura", "Vibe", "Green flag", "level", "Rizz", "Slay", "Manifest", "Respect begets respect", "Demure", "Gucci", "Kween", "Queen", "Power hug"]
  },
  "Potek / Pucha": {
    word: "Potek / Pucha",
    alternatives: ["expression of annoyance", "damn", "shit", "gosh", "frustration sound", "lintik", "anak ng...", "asar", "Bad trip (expression) (Gen Alpha)", "bwisit", "hay nako", "pucha naman", "lintik na buhay"],
    related: ["Oof", "Womp womp", "Tss", "yike / yikes", "Cringe", "Menty B", "Emotional damage", "low vibration", "Red flag"]
  },
  "POV": {
    word: "POV",
    alternatives: ["point of view", "perspektibo", "perspective", "from this angle", "scenario", "sa pananaw ni...", "ganito ang nangyari (sa pananaw ko)", "Pananaw (Gen Alpha)", "kung ako ikaw (scenario)", "sitwasyon"],
    related: ["lore", "It’s giving…", "Main Character Vibe", "Delulu", "Reality check", "meme", "Cringe", "Shook", "Ohio"]
  },
  "Power hug": {
    word: "Power hug",
    alternatives: ["mahigpit na yakap", "strong hug", "comforting hug", "supportive embrace", "yakap na mahigpit", "Yakap (mahigpit) (Gen Alpha)", "yakap na pampalakas-loob", "yakap na masarap"],
    related: ["Fighting", "Pookie bear", "Green flag", "Positive Aura", "Recharge", "Oof", "RD (Relationship Drama)", "Menty B"]
  },
  "Pressed": {
    word: "Pressed",
    alternatives: ["sobrang apektado", "inis", "annoyed", "triggered", "bothered", "upset", "pikon", "apektado masyado", "Apektado (Gen Alpha)", "na-trigger", "mainit ang ulo", "gigil"],
    related: ["Salty", "Cringe", "Oof", "Menty B", "Pet peeve", "Red flag", "Womp womp", "clapback", "shade", "Tss", "Potek / Pucha"]
  },
  "Pro": {
    word: "Pro",
    alternatives: ["professional", "eksperto", "expert", "skilled", "master", "highly capable", "dalubhasa", "bihasa", "Magaling (eksperto) (Gen Alpha)", "sanay na sanay", "pinakamagaling sa larangan"],
    related: ["Goat", "OG", "Retsam", "cracked", "OP", "Rank", "Slay", "cook", "Solid", "chad alpha", "Sigma"]
  },
  "Psych": {
    word: "Psych",
    alternatives: ["biniro", "niloko", "gotcha", "tricked you", "just kidding", "sike", "na-joke", "biro lang pala", "Niloko (pabiro) (Gen Alpha)", "pinaglalaruan lang", "na-prank (pabiro)"],
    related: ["Eme", "Echoz lang", "Jabaited", "Cap", "Womp womp", "Cringe", "Burts"]
  },
  "Push": {
    word: "Push",
    alternatives: ["ituloy", "gawin", "subukan nang husto", "persevere", "keep going", "strive", "ipagpatuloy", "laban pa", "Ituloy (Gen Alpha)", "gawin mo", "sige pa", "ipilit"],
    related: ["Fighting", "Manifest", "W", "Slay", "Pop off", "Goat", "let him cook", "Dasurv"]
  },
  "QRT": {
    word: "QRT",
    alternatives: ["quote retweet", "reply with quote", "Twitter action", "X action", "pag-reply sa tweet na may quote", "Reply sa tweet (Gen Alpha)", "pag-comment sa post ng iba", "pag-share na may comment"],
    related: ["Ratioed", "Tea", "Yap / yapping", "clapback", "shade", "OOMF", "Shoutout", "Cringe", "Pressed"]
  },
  "Quaking": {
    word: "Quaking",
    alternatives: ["sobrang gulat", "kaba", "shook", "trembling", "speechless", "astonished", "nanginginig sa gulat/kaba", "gulat na gulat", "Gulat na gulat (Gen Alpha)", "hindi makapaniwala", "napatulala"],
    related: ["Shook", "shooketh", "Poggers", "Sheesh", "Oof", "yike / yikes", "Plot twist", "Snatched / Snatched my wig", "Cringe", "uncanny"]
  },
  "Queen": {
    word: "Queen",
    alternatives: ["papuri sa babae", "confident woman", "empowering woman", "leader", "icon", "reyna", "idol na babae", "Reyna (papuri) (Gen Alpha)", "babaeng tinitingala", "huwaran", "diyosa"],
    related: ["Kween", "Slay", "yas gurl", "Gurl", "Sis", "Main slay", "Goat", "OG", "Fab", "Latina", "Monyeka", "Demure", "Positive Aura", "Star, star"]
  },
  "Quiet flex": {
    word: "Quiet flex",
    alternatives: ["subtle na pagyayabang", "classy brag", "understated show-off", "low-key boasting", "pasimpleng pagmamayabang", "hindi halatang nagyayabang", "Simpleng yaba (Gen Alpha)ng", "tahimik na pagpapakitang-gilas", "hindi maingay na pasikat"],
    related: ["Flex", "Humblebrag", "clout", "Drip", "OG", "Gucci", "Estetik", "Solid", "Mr. bombastic", "Slay", "W", "Mani"]
  },
  "Rank": {
    word: "Rank",
    alternatives: ["posisyon sa laro", "antas", "level", "status", "tier", "rating", "ranggo", "lebel sa laro", "Antas (sa laro) (Gen Alpha)", "katayuan sa laro", "pwesto"],
    related: ["OP", "Pro", "Goat", "level", "podium", "W", "L", "cracked", "Solid", "Beta", "Noob"]
  },
  "Ratioed": {
    word: "Ratioed",
    alternatives: ["mas maraming reply kaysa likes", "negative online reception", "getting owned online", "bad tweet ratio", "natalo sa comment section", "Talo sa social media (Gen Alpha)", "pinagkaisahan sa comments", "mas maraming galit kaysa gusto"],
    related: ["L", "Big L", "Cringe", "clapback", "Roast", "shade", "Womp womp", "Oof", "Pressed", "Sus", "QRT"]
  },
  "Rawr": {
    word: "Rawr",
    alternatives: ["playful growl", "flirtatious sound", "cute animal noise", "expressing attraction", "ungol (pacute/palandi)", "Tunog ng hayop (palandi) (Gen Alpha)", "tunog tigre/leon (pabiro)", "tunog ng pusa (palandi)"],
    related: ["Pookie bear", "Burger ka sakin", "Zesty", "Candy", "Rizz", "thirsty", "Eme", "Bembang", "thirst trap", "Sksksk"]
  },
  "RD (Relationship Drama)": {
    word: "RD (Relationship Drama)",
    alternatives: ["relationship drama", "problema sa relasyon", "love problems", "couple issues", "toxic relationship", "away ng magjowa", "drama sa pag-ibig", "Away ng magkasintahan (Gen Alpha)", "LQ (lover's quarrel)", "problema sa jowa"],
    related: ["Tea", "Menty B", "Emotional damage", "One-sided", "Red flag", "Ghosting", "L", "Cringe", "Yap / yapping", "Oof", "low vibration", "Sus", "Pressed"]
  },
  "Reality check": {
    word: "Reality check",
    alternatives: ["paalala sa katotohanan", "wake up call", "dose of reality", "get real", "back to earth", "gising sa katotohanan", "harapin ang totoo", "Gising sa totoo (Gen Alpha)", "pagmulat sa katotohanan", "sampal ng katotohanan"],
    related: ["Delulu", "copium", "No cap", "fax", "woke", "On God", "Menty B", "Shook", "Oof", "clapback"]
  },
  "receipts": {
    word: "receipts",
    alternatives: ["patunay", "ebidensya", "proof", "screenshots", "evidence", "pruweba", "katibayan", "Patunay (Gen Alpha)", "kopya ng usapan", "litrato bilang ebidensya", "dokumento"],
    related: ["Resibo", "caught in 4k", "No cap", "fax", "all fax", "Snitch", "Jabaited", "Cap", "clapback", "Sus", "QRT"]
  },
  "Recharge": {
    word: "Recharge",
    alternatives: ["magpahinga", "rest", "recover energy", "take a break", "unwind", "chill", "mag-relax", "pahinga muna", "Magpahinga (Gen Alpha)", "magpalakas ulit", "mag-charge"],
    related: ["vibin'", "Masyadong chill", "Goblin Mode", "Nonchalant", "Menty B", "Power hug", "Positive Aura", "Jampacked" /* need to recharge after jampacked sched */, "low vibration" /* recharge from low vibration */]
  },
  "Red flag": {
    word: "Red flag",
    alternatives: ["senyales ng problema", "warning sign", "bad omen", "danger signal", "deal breaker", "masamang senyales", "babala", "Huwag (senyales) (Gen Alpha)", "masamang ugali", "dapat iwasan", "masamang pangitain"],
    related: ["Green flag", "Ick", "Off", "Cringe", "Sus", "RD (Relationship Drama)", "L", "low vibration", "Negative aura", "Paras", "Snitch", "Cap", "Ghost", "Flaker", "cheugy"]
  },
  "Reels": {
    word: "Reels",
    alternatives: ["maikling video", "Instagram Reels", "TikTok style video", "short form video", "video sa IG/FB", "Maikling video (social media) (Gen Alpha)", "IG story/FB story (video)", "video sa TikTok"],
    related: ["fit check", "Slay", "Cringe", "Brainrot", "clout", "dank", "meme", "Plug", "Shoutout", "Yap / yapping", "griddy", "Toma toma", "Skibidi", "thirst trap"]
  },
  "Rejected": {
    word: "Rejected",
    alternatives: ["binalewala", "nabasted", "turned down", "denied", "not accepted", "hindi tinanggap", "basted", "Hindi pinansin (Gen Alpha)", "tinanggihan", "hindi pinili", "ayaw sa akin"],
    related: ["L", "Big L", "Oof", "Ghost", "Womp womp", "RD (Relationship Drama)", "One-sided", "Dasurv", "Menty B", "Cringe"]
  },
  "Rent free": {
    word: "Rent free",
    alternatives: ["laging nasa isip", "can't stop thinking about it", "haunting thoughts", "living in your head", "hindi maalis sa isip", "palaging iniisip", "Laging nasa isip (Gen Alpha)", "paulit-ulit sa isip", "bumabagabag", "hindi makalimutan"],
    related: ["Obsessed", "Brainrot", "Menty B", "Delulu", "Pookie bear", "Cringe", "Shook", "Oof", "copium", "low vibration", "Tea"]
  },
  "Resibo": {
    word: "Resibo",
    alternatives: ["ebidensya", "patunay", "proof", "receipts", "evidence", "pruweba (Filipino)", "Patunay (Filipino slang) (Gen Alpha)", "katibayan (Filipino)", "kopya ng patunay"],
    related: ["receipts", "caught in 4k", "No cap", "fax", "all fax", "Snitch", "Jabaited", "Cap", "clapback", "Sus"]
  },
  "Respect begets respect": {
    word: "Respect begets respect",
    alternatives: ["respeto para respetuhin", "give respect get respect", "treat others how you want to be treated", "magbigay galang para igalang", "Kasabihan tungkol sa respeto (Gen Alpha)", "kung ano ang iyong itinanim, siya mong aanihin (sa respeto)", "galangin mo ako, gagalangin kita"],
    related: ["Green flag", "Positive Aura", "woke", "Normalize", "OG", "Demure", "On God", "Solid"]
  },
  "Retsam": {
    word: "Retsam",
    alternatives: ["master", "eksperto", "guro", "expert", "boss", "highly skilled", "master (binaliktad)", "dalubhasa (binaliktad)", "Eksperto (binaliktad) (Gen Alpha)", "pinuno (binaliktad)", "amo (binaliktad)"],
    related: ["Goat", "OG", "Pro", "cracked", "OP", "Slay", "Bossing", "chad alpha", "Sigma", "Solid", "9001"]
  },
  "Ride or die": {
    word: "Ride or die",
    alternatives: ["sobrang tapat", "loyal friend", "through thick and thin", "ultimate supporter", "bestie", "laging nandyan", "tunay na kaibigan", "Tapat na kaibigan (Gen Alpha)", "hindi ka iiwan", "kasama sa hirap at ginhawa", "karamay"],
    related: ["Gang", "twin / twinning", "Green flag", "Bossing", "Pookie bear", "Solid", "OG", "Sis", "Gurl"]
  },
  "Rigged": {
    word: "Rigged",
    alternatives: ["hindi patas", "may dayaan", "unfair", "cheated", "manipulated", "fixed", "may luto", "dinaya", "May daya (Gen Alpha)", "may pandaraya", "hindi makatarungan", "may anomalya"],
    related: ["L", "Sus", "Cap", "Jabaited", "Cringe", "Red flag", "Womp womp", "Ratioed", "Big L", "dog water"]
  },
  "Rizz": {
    word: "Rizz",
    alternatives: ["charisma", "romantic appeal", "charm", "flirting skill", "game", "seductive power", "dumiskarte", "diskarte", "pambobola", "galing mang-akit", "pa-charming", "banat", "how to flirt", "paano manligaw (slang)", "galing sa babae/lalaki", "appeal", "dating", "slang para sa charisma", "pang-akit", "Karisma (Gen Alpha)", "galing dumale", "lakas maka-attract", "pogi points (sa diskarte)"],
    related: ["chad alpha", "Sigma", "buttah", "aura", "Slay", "Mr. bombastic", "Rizzler", "snack", "thirst trap", "Pookie bear", "Rawr", "Pop off", "Looks maxing", "Bembang", "Flex", "Gucci"]
  },
  "Rizzler": {
    word: "Rizzler",
    alternatives: ["taong may rizz", "master of rizz", "charmer", "smooth talker", "flirt expert", "magaling dumiskarte", "mambobola", "Taong magaling mang-akit (Gen Alpha)", "hari ng diskarte", "player (sa pag-ibig)", "bolero"],
    related: ["Rizz", "chad alpha", "Sigma", "Mr. bombastic", "Goat", "Slay", "OG", "buttah", "snack", "thirst trap", "Pookie bear", "Rawr", "Pro"]
  },
  "Roast": {
    word: "Roast",
    alternatives: ["mapaglarong panunukso", "comedic insult", "teasing", "making fun of", "friendly ridicule", "asar talo", "lait (pabiro)", "Pang-aasar (pabiro) (Gen Alpha)", "birong pang-asar", "pagtawanan (nang pabiro)", "bardagulan (pabiro)"],
    related: ["clapback", "Savage", "shade", "Cringe", "Burts", "Dempsey roll", "Pressed", "Oof", "yike / yikes", "Tss", "Ratioed"]
  },
  "Run": {
    word: "Run",
    alternatives: ["tumakas", "escape", "flee", "get away", "meme sound", "takbo", "Takbo (meme) (Gen Alpha)", "umalis ka na", "dali", "karipas (meme)"],
    related: ["Foxtrot Bravo", "Oof", "Shook", "Cringe", "yike / yikes", "Yeet", "Ghost", "Skrtt", "backrooms", "Ohio"]
  },
  "Rush": {
    word: "Rush",
    alternatives: ["nagmamadali", "hurry", "in a hurry", "hasty", "quick pace", "mabilisang kilos", "Nagmamadali (Gen Alpha)", "apurado", "dalian", "patakbo"],
    related: ["On thin ice", "Menty B", "Jampacked", "Yeet", "Foxtrot Bravo", "Womp womp" /* Rushing leads to womp womp */]
  },
  "Salty": {
    word: "Salty",
    alternatives: ["bitter", "inis", "pikon", "annoyed", "resentful", "sore loser", "naiinis", "napipikon", "Pikon (Gen Alpha)", "may sama ng loob", "irita", "maasim ang mukha"],
    related: ["Pressed", "L", "Cringe", "Red flag", "Oof", "Tss", "Womp womp", "clapback", "shade", "Pet peeve"]
  },
  "Savage": {
    word: "Savage",
    alternatives: ["matapang", "walang takot", "brutal", "ruthless", "fierce", "bold", "unfiltered", "walang pakundangan", "matapang magsalita", "Astig/Matapang (Gen Alpha)", "diretsahan", "walang awa (sa salita)", "bargas"],
    related: ["clapback", "Roast", "shade", "out of pocket", "Goat", "fire", "Lit", "W", "Slay", "Dempsey roll", "Pop off", "Yeet"]
  },
  "Secure the bag": {
    word: "Secure the bag",
    alternatives: ["nakuha ang inaasam", "get the money", "achieve the goal", "win", "succeed", "kumita ng pera", "nakuha ang premyo", "Kumita/Manalo (Gen Alpha)", "makakuha ng pera", "makuha ang gusto", "asinta"],
    related: ["Mani", "W", "On lock", "Flex", "Goat", "clout", "Plug", "Slay", "Rizz", "Pro", "Solid"]
  },
  "shade": {
    word: "shade",
    alternatives: ["subtle insult", "indirect criticism", "passive-aggressive comment", "throwing shade", "sarcasm", "parinig", "patama", "Pasimpleng lait (Gen Alpha)", "pasaring", "insulto na patago", "patutsada"],
    related: ["clapback", "Roast", "Savage", "Cringe", "Pet peeve", "Pressed", "Tss", "Humblebrag", "Sus", "Red flag", "Oof"]
  },
  "Sheesh": {
    word: "Sheesh",
    alternatives: ["expression of hype", "pagkabigla", "wow", "damn", "impressive", "unbelievable", "grabe (expression)", "wow (OA)", "Grabe (papuri/gulat) (Gen Alpha)", "nakakamangha", "lupit", "angas"],
    related: ["Poggers", "Lit", "fire", "Gwad", "Slay", "Quaking", "Emezing", "9001", "Goat", "Buss", "Solid", "Oof", "Shook", "Yarn"]
  },
  "Shook": {
    word: "Shook",
    alternatives: ["gulat na gulat", "astonished", "surprised", "speechless", "stunned", "nabigla", "natulala", "Gulat (Gen Alpha)", "hindi makapagsalita sa gulat", "nanlaki ang mata", "napatanga"],
    related: ["shooketh", "Quaking", "Poggers", "Sheesh", "Oof", "Plot twist", "yike / yikes", "Cringe", "Snatched / Snatched my wig", "uncanny", "Gwad", "Sus"]
  },
  "shooketh": {
    word: "shooketh",
    alternatives: ["grabe ang pagkagulat", "extremely shook", "beyond surprised", "flabbergasted", "sobrang gulat", "OA sa gulat", "Sobrang gulat (Gen Alpha)", "talagang nagulat", "hindi kinaya sa gulat"],
    related: ["Shook", "Quaking", "Poggers", "Sheesh", "Oof", "Plot twist", "Snatched / Snatched my wig", "yike / yikes", "Cringe"]
  },
  "Shoutout": {
    word: "Shoutout",
    alternatives: ["pagbati", "pagkilala", "mention", "acknowledgment", "public praise", "batiin mo naman ako", "pagbati sa publiko", "Pagbati (Gen Alpha)", "pagbanggit", "pag-promote (ng tao)", "pagbigay pugay"],
    related: ["Plug", "Flex", "clout", "OG", "Bossing", "Tea", "Ayo?", "Eyy", "OOMF", "Gang", "Yap / yapping", "QRT"]
  },
  "Sigma": {
    word: "Sigma",
    alternatives: ["independent leader", "alpha vibes pero chill", "lone wolf", "self-reliant", "non-conformist", "cool introvert", "astig na mag-isa", "hindi kailangan ng iba", "Astig na independent (Gen Alpha)", "sariling diskarte", "tahimik pero may dating", "kakaiba"],
    related: ["chad alpha", "Beta", "alpha", "Rizz", "OG", "Goat", "Nonchalant", "what the sigma?", "Mr. bombastic", "Main Character Vibe", "Outcast", "Solid", "aura", "Looks maxing"]
  },
  "Simp": {
    word: "Simp",
    alternatives: ["sobrang sunud-sunuran sa gusto", "obsessive admirer", "overly attentive", "doormat", "white knight (pejorative)", "sunod-sunuran sa pag-ibig", "todo bigay sa crush", "Sunud-sunuran sa crush (Gen Alpha)", "sobrang papansin sa crush", "gagawin lahat para sa crush", "under sa jowa/crush"],
    related: ["glaze", "Obsessed", "Pick Me", "Beta", "One-sided", "Delulu", "Cringe", "Pookie bear", "thirsty", "L", "Womp womp", "Paras", "low vibration"]
  },
  "Sis": {
    word: "Sis",
    alternatives: ["sister", "friendly callname", "girl", "friend", "bessy", "ate", "kaibigang babae", "bes", "Kaibigang babae (tawag) (Gen Alpha)", "mars", "teh (pinaikli)"],
    related: ["Baks", "Gurl", "Kween", "Queen", "yas gurl", "Ea", "Eabab", "twin / twinning", "Bossing", "Gar", "Pookie bear", "Lek", "Orb"]
  },
  "Skibidi": {
    word: "Skibidi",
    alternatives: ["skibidi toilet song", "viral meme sound", "good bad cool", "nonsense word", "Gen Alpha meme", "kantang skibidi", "sayaw na skibidi", "Skibidi (meme) (Gen Alpha)", "kantang pambata (meme)", "kantang nakaka-brainrot"],
    related: ["Brainrot", "Ohio", "freddy fazbear", "Ni hao fin shyt", "what the sigma?", "griddy", "Toma toma", "Cringe", "dank", "meme", "Tralalero tralala", "uncanny", "yike / yikes"]
  },
  "Skibidi ohio rizz": {
    word: "Skibidi ohio rizz",
    alternatives: ["weird charisma", "cringe rizz", "absurd attraction attempt", "ultimate meme combo", "kakaibang pang-akit (meme)", "Pang-akit (kakaiba/meme) (Gen Alpha)", "walang kwentang diskarte (meme)", "kakaibang pang-Rizz"],
    related: ["Skibidi", "Ohio", "Rizz", "Brainrot", "Cringe", "what the sigma?", "uncanny", "yike / yikes", "dank", "meme", "Sus", "Off"]
  },
  "Skibidi rizz": {
    word: "Skibidi rizz",
    alternatives: ["cringey charm", "over-the-top flirting", "meme rizz", "absurd attempt to impress", "pang-akit na skibidi", "Pang-akit (skibidi meme) (Gen Alpha)", "diskarte na skibidi", "OA na pang-Rizz"],
    related: ["Skibidi", "Rizz", "Brainrot", "Cringe", "Gyatt / Gyat", "what the sigma?", "yike / yikes", "dank", "meme", "thirst trap", "Sus"]
  },
  "Skibidi toilet": {
    word: "Skibidi toilet",
    alternatives: ["YouTube series", "singing toilet heads", "Gen Alpha animation", "viral internet series", "serye sa YouTube (meme)", "Palikuran na kumakanta (Gen Alpha)", "ulo sa inidoro", "meme na may kubeta"],
    related: ["Skibidi", "Brainrot", "Ohio", "NPC", "Cringe", "dank", "meme", "uncanny", "freddy fazbear", "what the sigma?", "yike / yikes"]
  },
  "Skrtt": {
    word: "Skrtt",
    alternatives: ["sound of brakes", "flexing departure", "cool exit", "swag move", "drift sound", "tunog ng preno (pa-cool)", "Pa-cool na alis (Gen Alpha)", "biglang alis (pa-angas)", "tunog ng sasakyan (pa-cool)"],
    related: ["Drip", "Flex", "Savage", "fire", "Lit", "Run", "Yeet", "Mr. bombastic", "Foxtrot Bravo", "Slay"]
  },
  "Sksksk": {
    word: "Sksksk",
    alternatives: ["expression of excitement", "laughter", "awkward laugh", "keyboard smash for emotion", "tawa (pa-cute/OA)", "Kilig/Tawa (expression) (Gen Alpha)", "nahihiyang tawa", "tunog ng tawa (text)", "hihihi (OA)"],
    related: ["Cringe", "cheugy", "VSCO girl", "yas / yas gurl", "Eme", "yike / yikes", "Burts", "Pookie bear", "Shook", "Quaking", "Rawr"]
  },
  "slaps": {
    word: "slaps",
    alternatives: ["sobrang ganda (kanta/pagkain)", "hits hard", "excellent", "amazing", "really good", "patok", "panalo ang lasa/tunog", "Sobrang ganda/sarap (Gen Alpha)", "ang ganda ng tama", "the best (kanta/pagkain)", "solid (kanta/pagkain)"],
    related: ["fire", "Lit", "dank", "Bussin", "bop", "cook", "Solid", "W", "Buss", "9001", "Goat"]
  },
  "Slay": {
    word: "Slay",
    alternatives: ["ginalingan", "kahanga-hanga", "killed it", "aced it", "excelled", "looked amazing", "slayable", "panalo", "arrasar", "bongga", "Ginalingan (Gen Alpha)", "nagpakitang-gilas", "namayagpag", "taray", "pak"],
    related: ["cook", "Eat", "nailed it", "you ate that", "W", "Goat", "Kween", "Queen", "On Fleek", "Main slay", "fire", "Lit", "Drip", "Estetik", "Fab", "Pop off", "Buss", "Solid", "Star, star", "Yassify", "Rizz"]
  },
  "Slayable": {
    word: "Slayable",
    alternatives: ["kayang i-slay", "potential to be amazing", "can look great", "achievable slay", "kayang galingan", "Kayang magpakitang-gilas (Gen Alpha)", "pwedeng maging bongga", "may potensyal na Slay"],
    related: ["Slay", "Estetik", "Drip", "On Fleek", "Yassify", "Push", "glow up", "Looks maxing", "Fab", "Kween"]
  },
  "sleeper": {
    word: "sleeper",
    alternatives: ["underrated gem", "unexpectedly good", "hidden talent", "surprise hit", "hindi inaasahang maganda/magaling", "Hindi inaasahang magaling (Gen Alpha)", "nakatagong galing", "sorpresang ganda/galing", "tahimik pero magaling"],
    related: ["Mid", "Overrated", "OG", "W", "Goat", "Solid", "dank", "Pro", "uncanny", "Plot twist"]
  },
  "snack": {
    word: "snack",
    alternatives: ["gwapo", "maganda", "attractive person", "hot", "good-looking", "cutie", "chicha", "masarap tingnan", "Gwapo/Maganda (Gen Alpha)", "kaakit-akit na tao", "mukhang masarap (tao)", "papable/mamable"],
    related: ["Gyatt / Gyat", "buttah", "Latina", "Monyeka", "Rizz", "Slay", "Drip", "thirst trap", "Sobrang sarap", "Looks maxing", "On Fleek", "Mr. bombastic", "chad alpha", "Bembang"]
  },
  "Snatched / Snatched my wig": {
    word: "Snatched / Snatched my wig",
    alternatives: ["napakaganda", "napakagwapo", "astig ang dating", "perfect look", "flawless", "mind-blowing", "wig snatched", "nakakalaglag panga sa ganda", "Sobrang ganda/astig (Gen Alpha)", "hindi makapaniwala sa ganda/galing", "grabe sa ganda", "nawala ang wig ko (sa gulat)"],
    related: ["Slay", "On Fleek", "Yassify", "Shook", "Quaking", "Poggers", "fire", "Lit", "Goat", "Main slay", "Fab", "Buss", "9001", "Out of this World"]
  },
  "Snitch": {
    word: "Snitch",
    alternatives: ["taga-sumbong", "traydor", "informant", "tattletale", "betrayer", "backstabber", "sumbungero", "naglalaglag", "Traydor (Gen Alpha)", "mapagkanulo", "hindi mapagkakatiwalaan", "espiya"],
    related: ["Ekans", "Impostor", "Sus", "opp", "caught in 4k", "Resibo", "Paras", "Red flag", "Cap", "L", "Cringe", "Womp womp"]
  },
  "Sobrang latina": {
    word: "Sobrang latina",
    alternatives: ["sobrang ganda", "very beautiful", "extremely gorgeous", "stunning", "napakaganda (parang Latina)", "Sobrang ganda (parang Latina) (Gen Alpha)", "mala-dyosa ang dating", "sobrang sexy (parang Latina)"],
    related: ["Latina", "Monyeka", "snack", "Slay", "Queen", "Yassify", "buttah", "Gyatt / Gyat", "Estetik", "Fab", "On Fleek", "Drip", "Main slay", "Looks maxing"]
  },
  "Sobrang sarap": {
    word: "Sobrang sarap",
    alternatives: ["very delicious (food)", "very attractive (person)", "looks good", "tastes good", "napakasarap (pagkain/tao)", "Sobrang sarap/ganda (Gen Alpha)", "nakakaakit (tao)", "nakakagutom (pagkain)", "masarap na masarap"],
    related: ["Bussin", "Buzzin", "Lafang", "snack", "Gyatt / Gyat", "slaps", "Drip", "thirst trap", "Bembang", "Rizz", "Lit", "fire"]
  },
  "Sobrang sikip / shikip": {
    word: "Sobrang sikip / shikip",
    alternatives: ["very tight (outfit)", "very beautiful/hot (person)", "sexy", "well-fitted", "stunning", "masikip ang damit (pero maganda)", "sobrang ganda/sexy", "Sobrang sexy/ganda (damit/tao) (Gen Alpha)", "fit na fit (damit)", "hubog na hubog (katawan)", "bakya"],
    related: ["Drip", "Snatched / Snatched my wig", "Slay", "Gyatt / Gyat", "snack", "On Fleek", "Yassify", "thirst trap", "Bembang", "Looks maxing", "Estetik", "fire"]
  },
  "Solid": {
    word: "Solid",
    alternatives: ["napakaganda", "mataas ang kalidad", "sobrang galing", "reliable", "dependable", "excellent", "cool", "matibay", "panalo", "Astig/Maaasahan (Gen Alpha)", "walang kupas", "dekalidad", "sigurado"],
    related: ["dank", "fire", "Lit", "Goat", "W", "Buss", "Pro", "On lock", "OG", "Slay", "cook", "cracked", "9001", "No cap"]
  },
  "Sped": {
    word: "Sped",
    alternatives: ["bobo", "tanga", "slow", "unintelligent", "special education (derogatory)", "may kapansanan sa isip (nakakainsulto)", "Bobo (nakakainsulto, pinaikli) (Gen Alpha)", "mahina umintindi (nakakainsulto)", "may toyo (nakakainsulto)"],
    related: ["8080", "Monggo", "Brainrot", "Noob", "L", "dog water", "Cringe", "NPC", "Womp womp", "Mid"]
  },
  "Star, star": {
    word: "Star, star",
    alternatives: ["nagniningning", "kahanga-hanga", "ang galing mo", "panalo ka", "superstar", "shining star", "bituin (papuri)", "Bida (papuri) (Gen Alpha)", "ikaw na ang bida", "sikat", "namumukod-tangi"],
    related: ["Slay", "Goat", "W", "Queen", "Kween", "Main slay", "Fab", "Lit", "fire", "OG", "Pop off", "On Fleek", "Main Character Vibe"]
  },
  "Straw": {
    word: "Straw",
    alternatives: ["sipsip", "overly loyal (negative)", "user", "fake friend", "brown-noser", "sumisipsip (sa tao)", "Sipsip (tao) (Gen Alpha)", "plastik (sa pakikisama)", "oportunista", "pabibo para mapansin"],
    related: ["glaze", "Simp", "Snitch", "Paras", "Pick Me", "Cringe", "Red flag", "Ekans", "Ksp", "thirsty"]
  },
  "Sus": {
    word: "Sus",
    alternatives: ["kahina-hinala", "kaduda-duda", "suspicious", "doubtful", "shady", "fishy", "may tinatago", "Nakakaduda (Gen Alpha)", "may kalokohan", "hindi mapagkakatiwalaan", "may kababalaghan"],
    related: ["Impostor", "Snitch", "Ekans", "Off", "Red flag", "NPC", "Cringe", "Jabaited", "Cap", "Rigged", "Plot twist", "Ohio", "uncanny", "yike / yikes"]
  },
  "Tea": {
    word: "Tea",
    alternatives: ["bagong balita", "chismis", "gossip", "latest news", "drama", "scoop", "truth", "kwento", "balita", "Chismis (Gen Alpha)", "anong latest?", "may alam ka ba?", "anong sagap mo?"],
    related: ["coworker-core", "RD (Relationship Drama)", "Shoutout", "Yap / yapping", "QRT", "OOMF", "Spill the tea", "Resibo", "receipts", "Snitch", "Sus", "Plot twist", "Cringe"]
  },
  "Teluk": {
    word: "Teluk",
    alternatives: ["kulet", "makulit", "annoying (playful)", "mischievous", "persistent", "kulit (binaliktad)", "Makulit (binaliktad) (Gen Alpha)", "pasaway (pabiro)", "bibo (binaliktad)"],
    related: ["Eme", "Burts", "Tralalero tralala", "Cringe", "Zesty", "Party popper", "Sksksk", "Ksp", "extra"]
  },
  "thirst trap": {
    word: "thirst trap",
    alternatives: ["panunuksong litrato/video", "attention-seeking post", "sexy photo", "bait for likes/comments", "pa-sexy na post", "post na pang-akit", "Pa-sexy na post (Gen Alpha)", "post para mapansin", "pacute/pasexy sa social media", "pampagana"],
    related: ["thirsty", "Flex", "clout", "snack", "Gyatt / Gyat", "Rizz", "Slay", "Drip", "Sobrang sikip / shikip", "Pookie bear", "Bembang", "Ksp", "Pick Me", "Looks maxing", "Cringe"]
  },
  "thirsty": {
    word: "thirsty",
    alternatives: ["sabik sa pansin", "desperado sa atensyon", "needy", "attention-seeking", "desperate for validation", "uhaw sa pansin", "gustong-gusto mapansin", "Uhaw sa pansin (Gen Alpha)", "sobrang naghahanap ng atensyon/pagmamahal", "kulang sa aruga"],
    related: ["thirst trap", "Ksp", "Pick Me", "Simp", "glaze", "clout", "Obsessed", "Pookie bear", "Bembang", "Paras", "Cringe", "low vibration"]
  },
  "Toma toma": {
    word: "Toma toma",
    alternatives: ["ML dance", "Mobile Legends dance", "Chou dance", "viral game dance", "sayaw sa ML", "Sayaw (MLBB) (Gen Alpha)", "sayaw ng Chou", "sayaw pang-asar sa laro"],
    related: ["griddy", "Skibidi", "Brainrot", "dank", "meme", "W", "Slay", "Lit", "Flex", "Roast"]
  },
  "Tralalero tralala": {
    word: "Tralalero tralala",
    alternatives: ["nonsense song", "playful expression", "carefree tune", "silly song", "kantang walang ibig sabihin", "Kantang pambata (meme) (Gen Alpha)", "kantang paulit-ulit na walang sense", "kantang nakakabaliw"],
    related: ["Eme", "Echoz lang", "Skibidi", "Ni hao fin shyt", "Brainrot", "Cringe", "Burts", "meme", "dank", "what the sigma?", "Sksksk"]
  },
  "Tss": {
    word: "Tss",
    alternatives: ["sound of annoyance/disbelief", "tsk", "hmpf", "eye roll sound", "dismissive sound", "inis (tunog)", "hindi naniniwala (tunog)", "Inis (tunog) (Gen Alpha)", "pagmamaliit (tunog)", "pag-ismid", "sungit (tunog)"],
    related: ["Oof", "Womp womp", "Meh", "Salty", "Pressed", "Cringe", "shade", "pluh", "Sus", "Naur", "Red flag"]
  },
  "twin / twinning": {
    word: "twin / twinning",
    alternatives: ["matalik na kaibigan", "magkasundo", "magkapareho", "bestie", "soulmate (platonic)", "matching", "bff", "kambal (sa pagkakaibigan)", "Matalik na kaibigan (Gen Alpha)", "sobrang close na kaibigan", "parang kapatid", "laging magkasama"],
    related: ["Gang", "Ride or die", "Sis", "Gurl", "Orb", "Lek", "Gar", "Bossing", "Pookie bear", "Green flag", "Solid", "vibin'"]
  },
  "uncanny": {
    word: "uncanny",
    alternatives: ["nakakakilabot", "kakaiba", "sobrang hindi normal", "eerie", "creepy", "strange and familiar", "unsettling", "nakakatakot na kakaiba", "Kakaiba (nakakatakot) (Gen Alpha)", "hindi maipaliwanag na kaba", "parang multo", "nakakapanindig-balahibo"],
    related: ["backrooms", "Ohio", "Cringe", "Shook", "freddy fazbear", "Skibidi ohio rizz", "yike / yikes", "Sus", "Off", "low vibration", "Plot twist", "Brainrot"]
  },
  "Understood the assignment": {
    word: "Understood the assignment",
    alternatives: ["alam ang gagawin", "tamang-tama ang ginawa", "executed perfectly", "got the memo", "nailed the task", "nakuha ang punto", "ginalingan sa pinapagawa", "Naintindihan ang dapat gawin (Gen Alpha)", "sakto sa tema", "ginawa nang tama", "walang mali sa ginawa"],
    related: ["Slay", "cook", "Eat", "nailed it", "W", "Goat", "On Fleek", "Pop off", "Solid", "Pro", "OG", "Main slay", "Buss", "fire"]
  },
  "Unlimited": {
    word: "Unlimited",
    alternatives: ["paulit-ulit", "walang katapusan", "sobra", "excessive", "non-stop", "too much", "walang tigil", "sobrang dami", "Walang hanggan (Gen Alpha)", "sagad", "umaapaw", "hindi nauubos"],
    related: ["extra", "Brainrot", "Yap / yapping", "Jampacked", "Obsessed", "Menty B", "Cringe", "Lit", "fire", "9001"]
  },
  "Vibe": {
    word: "Vibe",
    alternatives: ["pakiramdam", "enerhiya ng paligid", "mood", "atmosphere", "feeling", "energy", "aura", "dating (ng lugar/tao)", "Pakiramdam/Dating (Gen Alpha)", "kung ano ang 'feel'", "emosyon"],
    related: ["aura", "level", "It’s giving…", "Positive Aura", "Negative aura", "low vibration", "Core", "Estetik", "Vibe check", "vibin'", "Nonchalant", "Masyadong chill", "Gucci", "Slay"]
  },
  "Vibe check": {
    word: "Vibe check",
    alternatives: ["pag-tsek ng mood", "pagsusuri ng pakiramdam", "how are you feeling", "mood check", "energy assessment", "kamusta ang pakiramdam", "Pag-check ng mood (Gen Alpha)", "ano ang 'feel' mo ngayon?", "ok ka lang ba?"],
    related: ["Vibe", "aura", "low vibration", "Positive Aura", "Open-up", "Masyadong chill", "Menty B", "RD (Relationship Drama)"]
  },
  "vibin'": {
    word: "vibin'",
    alternatives: ["chill lang", "relax", "enjoying the mood", "grooving", "feeling good", "hanging out", "nagre-relax", "nag-eenjoy", "Relax lang (Gen Alpha)", "sumasabay sa mood", "chillax", "sound trip"],
    related: ["Vibe", "Masyadong chill", "Nonchalant", "Recharge", "bop", "Gucci", "Positive Aura", "Core", "aura", "Estetik"]
  },
  "W": {
    word: "W",
    alternatives: ["win", "winning", "victory", "success", "panalo", "tagumpay", "Panalo (Gen Alpha)", "tagumpay!", "nanalo", "nagwagi"],
    related: ["Goat", "OP", "cracked", "cook", "Slay", "nailed it", "let him cook", "Secure the bag", "On lock", "L", "Solid", "9001", "fire", "Lit", "Buss", "Dasurv", "Pop off", "Main slay", "Star, star"]
  },
  "Wakey wakey": {
    word: "Wakey wakey",
    alternatives: ["wake up", "bumangon ka na", "gising na", "time to get up", "good morning", "gising (pa-cute)", "Bangon na (Gen Alpha)", "oras na para gumising", "mulat na"],
    related: ["woke", "Reality check", "Recharge", "Eyy", "Ayo?"]
  },
  "what the sigma?": {
    word: "what the sigma?",
    alternatives: ["what the heck", "ano ito", "expression of confusion/disbelief", "sigma male meme phrase", "ano daw (sigma meme)", "Ano yun (meme) (Gen Alpha)", "anong nangyayari (meme)", "ha?"],
    related: ["Sigma", "Ohio", "Skibidi", "Brainrot", "Cringe", "uncanny", "Oof", "yike / yikes", "Sus", "Plot twist", "meme", "dank", "Tralalero tralala", "Ni hao fin shyt"]
  },
  "Why so serious?": {
    word: "Why so serious?",
    alternatives: ["relax lang", "huwag seryosohin", "chill out", "lighten up", "don't be so tense", "kalma lang", "Huwag masyadong seryoso (Gen Alpha)", "ngiti ka naman", "easy lang", "wag dibdibin"],
    related: ["Masyadong chill", "Nonchalant", "vibin'", "Eme", "Echoz lang", "Tralalero tralala", "Recharge", "Gucci", "Positive Aura", "Goblin Mode"]
  },
  "Wi wi wi cat": {
    word: "Wi wi wi cat",
    alternatives: ["crying cat meme", "sad cat sound", "dramatic cat", "umiiyak na pusa (meme)", "Pusa na umiiyak (meme) (Gen Alpha)", "meme ng pusang umiiyak", "tunog ng pusang umiiyak"],
    related: ["Menty B", "Emotional damage", "Oof", "Cringe", "Brainrot", "meme", "dank", "Tralalero tralala", "low vibration", "RD (Relationship Drama)", "yike / yikes", "Womp womp"]
  },
  "Wlw / wuhluhwuh": {
    word: "Wlw / wuhluhwuh",
    alternatives: ["women loving women", "lesbian", "sapphic", "queer women", "gay woman", "tomboy (pero mas specific sa attraction)", "babae na gusto babae", "Babaeng nagmamahal sa kapwa babae (Gen Alpha)", "lesbyana", "tiboom", "babae na pumapatol sa babae"],
    related: ["Baks", "Sis", "Gurl", "Kween", "Queen", "yas / yas gurl", "Zesty", "twin / twinning", "Pookie bear", "RD (Relationship Drama)", "Slay", "Normalize", "woke"]
  },
  "woke": {
    word: "woke",
    alternatives: ["gising sa katotohanan", "may malasakit sa lipunan", "socially aware", "conscious of social justice", "enlightened", "mulat", "may alam sa isyung panlipunan", "May kamalayan (Gen Alpha)", "nakikialam sa issue", "progresibo", "may pakialam"],
    related: ["Normalize", "Reality check", "clapback", "Green flag", "Respect begets respect", "OK boomer", "No cap", "fax", "On God", "Positive Aura", "Mentality", "Slay"]
  },
  "Womp womp": {
    word: "Womp womp",
    alternatives: ["sound of disappointment", "failure sound", "sad trombone", "too bad so sad", "dismissive expression", "sayang", "epic fail (tunog)", "Tunog ng pagkabigo (Gen Alpha)", "laglag (tunog)", "malas (tunog)", "amp (pinaikli)"],
    related: ["L", "Big L", "Oof", "Meh", "Mid", "pluh", "just put the fries in the bag", "Cringe", "yike / yikes", "Dasurv", "Potek / Pucha", "Tss", "Naur", "dog water", "Rigged"]
  },
  "Yap / yapping": {
    word: "Yap / yapping",
    alternatives: ["madaldal", "maingay", "nagkukwento", "talkative", "chatty", "blabbering", "talking too much", "nonsense talk", "daldal", "satsat", "walang tigil sa kakasalita", "Madaldal (Gen Alpha)", "kwentuhan nang kwentuhan", "sobrang ingay", "chika"],
    related: ["Tea", "Shoutout", "QRT", "coworker-core", "extra", "Ksp", "Cringe", "Brainrot", "OOMF", "Tralalero tralala", "Unlimited"]
  },
  "Yarn": {
    word: "Yarn",
    alternatives: ["iyan", "yan", "that (playful)", "expression of agreement/emphasis", "slang for 'that'", "ayan (pabiro)", "Iyan (pa-cute/pabiro) (Gen Alpha)", "yun oh (pabiro)", "ganern (pabiro)"],
    related: ["yas / yas gurl", "Slay", "Kween", "Opkors", "Eme", "Sheesh", "Lit", "Pookie bear", "Gurl", "Sis", "It’s giving…"]
  },
  "yas / yas gurl": {
    word: "yas / yas gurl",
    alternatives: ["yes", "oo", "affirmative", "slay", "go girl", "expression of strong approval", "oo (OA/pa-cute)", "Oo (papuri) (Gen Alpha)", "galing!", "tama!", "sige go!"],
    related: ["Yarn", "Slay", "Kween", "Queen", "Gurl", "Sis", "Lit", "fire", "Sheesh", "Opkors", "Emezing", "Fab", "Pop off", "W"]
  },
  "Yassify": {
    word: "Yassify",
    alternatives: ["pagpapaganda nang todo", "glamorize", "beautify excessively", "filter heavily", "make fabulous", "gawing bongga", "sobrang pagpapaganda", "Pagandahin nang sobra (Gen Alpha)", "gawing reyna/hari (sa itsura)", "i-filter nang todo", "retoke (digital)"],
    related: ["glow up", "Looks maxing", "Slay", "On Fleek", "Kween", "Estetik", "Monyeka", "Fab", "Drip", "snack", "Main slay", "Queen", "Gucci", "fire"]
  },
  "Yeet": {
    word: "Yeet",
    alternatives: ["expression of excitement/energy", "to throw with force", "exclamation for throwing", "energetic action", "ihagis", "itapon (may pwersa)", "Sigaw (sa pagtapon/excitement) (Gen Alpha)", "biglang kilos", "pwersahang paghagis", "sabay sigaw"],
    related: ["Lit", "fire", "Poggers", "Savage", "Run", "W", "Pop off", "Skrtt", "Foxtrot Bravo", "mad lit", "Slay"]
  },
  "yike / yikes": {
    word: "yike / yikes",
    alternatives: ["expression of gulat/disapproval", "awkward", "cringe", "oh no", "that's bad", "uncomfortable", "nakakagulat (negatibo)", "nakakahiya (para sa iba)", "Hala (awkward) (Gen Alpha)", "patay", "lagot", "naku po"],
    related: ["Cringe", "Oof", "Womp womp", "Ick", "Off", "Shook", "Sus", "Red flag", "Potek / Pucha", "Not the", "uncanny", "low vibration", "Ohio"]
  },
  "you ate that": {
    word: "you ate that",
    alternatives: ["ginalingan mo", "ang ganda ng hitsura mo", "you did amazing", "killed it", "perfected it", "no crumbs left", "sobrang galing mo", "kinain mo ang performance/OOTD", "Ginalingan mo (Gen Alpha)", "walang tapon (sa galing)", "pinahanga mo ako", "panalo ang gawa mo"],
    related: ["Slay", "cook", "Eat", "nailed it", "W", "Goat", "On Fleek", "Pop off", "fire", "Lit", "Buss", "Solid", "Main slay", "Star, star", "Fab"]
  },
  "Yung claustrophobia ko": {
    word: "Yung claustrophobia ko",
    alternatives: ["expression for discomfort/cringe", "masikip (pakiramdam)", "feeling suffocated (metaphorical)", "awkward situation", "naiipit ako (pabiro)", "Masikip (pakiramdam/meme) (Gen Alpha)", "hindi ako komportable (meme)", "naiilang (meme)", "parang nasasakal (pabiro)"],
    related: ["Cringe", "Ick", "yike / yikes", "Oof", "uncanny", "Shook", "low vibration", "Negative aura", "backrooms", "Menty B", "Womp womp", "Sus"]
  },
  "zang": {
    word: "zang",
    alternatives: ["dang", "wow", "expression of surprise/emphasis", "Taglish expression", "grabe (Taglish)", "Wow (Taglish) (Gen Alpha)", "astig (Taglish)", "lupit (Taglish)"],
    related: ["Sheesh", "Poggers", "Lit", "Gwad", "dang", "fire", "Emezing", "Shook", "Quaking", "Buss"]
  },
  "Zesty": {
    word: "Zesty",
    alternatives: ["malambot ang galaw", "sassy", "expressive", "flamboyant", "campy", "effeminate (playful or derogatory)", "maarte (lalaki)", "parang bakla (kilos)", "Maarteng kilos (Gen Alpha)", "baklang-bakla (kilos)", "may kembot", "makire"],
    related: ["Baks", "Kween", "Rawr", "extra", "Slay", "Cringe", "Candy", "Fab", "Estetik", "It’s giving…", "Party popper", "Eme", "Main Character Vibe", "On Fleek"]
  }
};

/**
 * Builds a reverse mapping from alternative terms to dictionary words
 * This allows us to quickly look up which dictionary words match a given search term
 */
export const buildAlternativeTermsMap = (): Map<string, string[]> => {
  const alternativeMap = new Map<string, string[]>();

  Object.entries(wordRelationships).forEach(([word, relationship]) => {
    const normalizedWord = word.toLowerCase().trim();
    if (!alternativeMap.has(normalizedWord)) {
        alternativeMap.set(normalizedWord, []);
    }
    if (!alternativeMap.get(normalizedWord)?.includes(word)) {
        alternativeMap.get(normalizedWord)?.push(word);
    }
    
    relationship.alternatives.forEach(alt => {
      const normalizedAlt = alt.toLowerCase().trim();
      if (!alternativeMap.has(normalizedAlt)) {
        alternativeMap.set(normalizedAlt, []);
      }
      if (!alternativeMap.get(normalizedAlt)?.includes(word)) {
        alternativeMap.get(normalizedAlt)?.push(word);
      }
    });

    relationship.related.forEach(relatedTerm => {
      const normalizedRelated = relatedTerm.toLowerCase().trim();
      
      if (!alternativeMap.has(normalizedRelated)) {
        alternativeMap.set(normalizedRelated, []);
      }
      if (!alternativeMap.get(normalizedRelated)?.includes(word)) {
        alternativeMap.get(normalizedRelated)?.push(word);
      }

      if (wordRelationships[relatedTerm]) {
        if (!alternativeMap.has(normalizedWord)) {
            alternativeMap.set(normalizedWord, []);
        }
        if (!alternativeMap.get(normalizedWord)?.includes(relatedTerm)) {
            alternativeMap.get(normalizedWord)?.push(relatedTerm);
        }
      }
    });
  });

  return alternativeMap;
};

// Pre-build the alternative terms map for performance
export const alternativeTermsMap = buildAlternativeTermsMap();

/**
 * Expands a search term to include related words from the dictionary
 * 
 * @param searchTerm The original search term
 * @returns Array of related dictionary words
 */
export const expandSearchTerm = (searchTerm: string): string[] => {
  const normalizedTerm = searchTerm.toLowerCase().trim();
  let results: string[] = [];

  if (alternativeTermsMap.has(normalizedTerm)) {
    results = [...(alternativeTermsMap.get(normalizedTerm) || [])];
  }
  
  const directAndAlternativeMatches = alternativeTermsMap.get(normalizedTerm) || [];
  results = [...new Set([...results, ...directAndAlternativeMatches])];

  const relatedFromMatches: string[] = [];
  results.forEach(matchedWordKey => {
    if (wordRelationships[matchedWordKey] && wordRelationships[matchedWordKey].related) {
      wordRelationships[matchedWordKey].related.forEach(rel => {
        if (!results.includes(rel) && !relatedFromMatches.includes(rel)) {
          relatedFromMatches.push(rel);
        }
      });
    }
  });
  results = [...new Set([...results, ...relatedFromMatches])];

  if (results.length === 0 || true) { 
    alternativeTermsMap.forEach((words, altKey) => {
      if (altKey.includes(normalizedTerm) || normalizedTerm.includes(altKey)) {
        words.forEach(word => {
          if (!results.includes(word)) {
            results.push(word);
          }
        });
      }
    });
  }
  
  if (wordRelationships[searchTerm] && !results.includes(searchTerm)){
      results.push(searchTerm);
  }
  if (wordRelationships[normalizedTerm] && !results.includes(normalizedTerm) && wordRelationships[normalizedTerm].word) {
      if(!results.includes(wordRelationships[normalizedTerm].word)) {
          results.push(wordRelationships[normalizedTerm].word);
      }
  }

  return [...new Set(results)];
};
