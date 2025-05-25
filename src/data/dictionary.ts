
export interface DictionaryWord {
  word: string;
  definition: string;
}

export interface WordDetails {
  word: string;
  definition: string;
  etymology: string;
  partOfSpeech: string;
  example: string;
}

// Words for autocomplete search
export const dictionaryWords: DictionaryWord[] = [
  { word: "8080", definition: "mahina ang pag-iisip" },
  { word: "9001", definition: "higit pa sa inaasahan, napakatindi" },
  { word: "all fax", definition: "purong katotohanan" },
  { word: "aura", definition: "enerhiya ng isang tao" },
  { word: "Ayo?", definition: "pangungumusta" },
  { word: "backrooms", definition: "nakakalito, parang walang katapusan, nakakaba" },
  { word: "Baks", definition: "kasingkahulugan ng salitang \"bading\"" },
  { word: "Bembang", definition: "sekswal na pagtatalik" },
  { word: "Beta", definition: "sumunod sa sikat na trend o pumapangalawa sa popular na mga aktibidad o bagay" },
  { word: "Big L", definition: "matinding pagkatalo o pagkabigo" },
  { word: "bop", definition: "kantang paulit-ulit o kinawiwilihan mong pinapakinggan" },
  { word: "Bossing", definition: "pagbati sa mga kaibigan" },
  { word: "Brainrot", definition: "magulong isip, wala sa katinuan" },
  { word: "Burger ka sakin", definition: "pang-aakit" },
  { word: "Burts", definition: "labis na pagbibiro" },
  { word: "Buss", definition: "kahanga-hanga" },
  { word: "Bussin", definition: "napakasarap" },
  { word: "buttah", definition: "taong may malakas ang appeal o may kumpyansa sa sarili" },
  { word: "Buzzin", definition: "kasingkahulugan ng salitang bussin, napakasarap" },
  { word: "Candy", definition: "maarte, malandi" },
  { word: "Cap", definition: "Sinungaling o nagdadagdag ng kwento" },
  { word: "caught in 4k", definition: "Huling-huli sa akto, may pruweba pa" },
  { word: "chad alpha", definition: "Yung lalaking may dating, lakas ng loob, o alpha vibes" },
  { word: "cheugy", definition: "Laos o pilit maging uso pero hindi na cool" },
  { word: "clapback", definition: "Matalas at matalinong sagot sa insulto—pang-asar pabalik" },
  { word: "clout", definition: "Sikat o may impluwensya, lalo na online" },
  { word: "cook", definition: "mahusay na pagtatanghal, nakakalaglag ng panga sa galing" },
  { word: "copium", definition: "pagpapanggap" },
  { word: "Core", definition: "puso o tema ng isang bagay" },
  { word: "coworker-core", definition: "usap-usapan ng mga empleyado" },
  { word: "cracked", definition: "magaling, mahusay" },
  { word: "Cringe", definition: "kahiya-hiya, hindi kaaya-aya" },
  { word: "dank", definition: "Astig, solid, o mataas ang kalidad" },
  { word: "Dasurv", definition: "karapat-dapat" },
  { word: "Delulu", definition: "malayo sa katotohanan" },
  { word: "Dempsey roll", definition: "bugbog sarado, malalang pagkatalo" },
  { word: "Demure", definition: "mahinhin o maingat na pag-uugali" },
  { word: "dog water", definition: "sablay, o palpak" },
  { word: "Drip", definition: "estilo ng pananamit" },
  { word: "Drippy", definition: "maangas na estilo ng pananamit" },
  { word: "Ea", definition: "babae" },
  { word: "Eabab", definition: "babae" },
  { word: "Eat", definition: "Ang galing" },
  { word: "Echo Papa", definition: "pakialamero o nagpapapansin" },
  { word: "Echo Tango", definition: "gulo" },
  { word: "Echoz lang", definition: "joke lang o biro lang" },
  { word: "edge", definition: "Pinapatagal ang saya o excitement para mas intense" },
  { word: "edging", definition: "Pinapatagal ang saya o excitement para mas intense" },
  { word: "Eduls", definition: "matanda/mga nakakatanda" },
  { word: "Eka", definition: "ikaw" },
  { word: "Ekalal", definition: "lalaki (pinagbaliktad)" },
  { word: "Ekans", definition: "binaliktad na salita ng 'snake' o ahas" },
  { word: "Eme", definition: "biro" },
  { word: "Emezing", definition: "Pabirong pagkakasabi ng 'amazing'" },
  { word: "Emotional damage", definition: "emosyonal na pinsala" },
  { word: "Erm actually", definition: "sa totoo lang" },
  { word: "Estetik", definition: "maganda sa mata/may dating" },
  { word: "extra", definition: "pabida o pabibo" },
  { word: "so extra", definition: "pabida o pabibo" },
  { word: "Eyy", definition: "panawag o pambati" },
  { word: "Fab", definition: "astig, maganda" },
  { word: "Fanum tax", definition: "buraot" },
  { word: "fax", definition: "tunay, totoo" },
  { word: "fax only", definition: "puro Totoo/katotohanan lang dapat" },
  { word: "Fighting", definition: "Laban lang" },
  { word: "finna", definition: "gagawin pa lang o malapit nang gawin" },
  { word: "fire", definition: "Angas, astig, sobrang galing o cool" },
  { word: "fit check", definition: "Isang mabilis na paraan para ipakita o ipaalam ang kasuotan ng isang tao" },
  { word: "Flaker", definition: "Taong hindi tumutuloy o umaatras sa mga plano" },
  { word: "Flex", definition: "pagpapakita o pagyayabang" },
  { word: "Fomo", definition: "fear of missing out, ayaw magpahuli" },
  { word: "Foxtrot Bravo", definition: "Fast Break, umalis agad" },
  { word: "Foxtrot Delta", definition: "Feeling deep, nagdadrama" },
  { word: "Fr, fr", definition: "for real, for real, pagsasabi na ito'y totoo" },
  { word: "freddy fazbear", definition: "Gumagaya o parang naimpluwensiyahan na ng karakter sa Five Nights at Freddy's" },
  { word: "freddy fazbearing", definition: "Gumagaya o parang naimpluwensiyahan na ng karakter sa Five Nights at Freddy's" },
  { word: "Frosh", definition: "Term for freshman, bagong salta sa high school or college" },
  { word: "Gang", definition: "tropa/barkada" },
  { word: "Gar", definition: "Tawagang pangkaibigan/pantropa" },
  { word: "Ghost", definition: "Pagtigil bigla ng komunikasyon, usually sa mga online relationships" },
  { word: "Ghosting", definition: "Pagtigil bigla ng komunikasyon, usually sa mga online relationships" },
  { word: "glaze", definition: "Sobrang pagbuhat ng bangko ng iba o sobrang papuri na parang OA na" },
  { word: "glizzy", definition: "Hotdog (na slang lang talaga pero naging meme na)" },
  { word: "glow up", definition: "malaki ang iginanda o igwinapo ngayon, o ang laki ng improvement sa itsura o tiwala sa sarili" },
  { word: "Goat", definition: "Greatest of all time, pinakamagaling sa lahat ng panahon" },
  { word: "Goblin Mode", definition: "Wala pake, hindi nahihiya sa pagiging tamad at magulo" },
  { word: "goon", definition: "Tumutukoy sa paulit-ulit at matagal na pagpapaligaya sa sarili" },
  { word: "gooning", definition: "Tumutukoy sa paulit-ulit at matagal na pagpapaligaya sa sarili" },
  { word: "Green flag", definition: "Positibong katangian" },
  { word: "griddy", definition: "Nakaka-LSS o sobrang nakakaadik" },
  { word: "Gucci", definition: "okay na okay o ayos lang" },
  { word: "Gurl", definition: "Slang para sa 'girl,' ginagamit ng mga kabataan lalo na sa memes" },
  { word: "Gwad", definition: "Slang para sa “god” o para ipakita ang pagiging astig o superior." },
  { word: "Gyatt / Gyat", definition: "Grabe ang katawan/ Lakas maka- attract" },
  { word: "Hits diff", definition: "iba ang dating" },
  { word: "Humblebrag", definition: "Pa-humble pero nagyayabang." },
  { word: "Ick", definition: "nakakadiri" },
  { word: "Impostor", definition: "peke/ nagpapanggap" },
  { word: "It’s giving…", definition: "Ekpresyon na naglalarawan ng vibe." },
  { word: "Jabaited", definition: "napaniwala" },
  { word: "Jampacked", definition: "puno o busy" },
  { word: "jawn", definition: "Kahit anong bagay o gamit. Ginagamit na pangkalahatang pangngalan sa isang bagay o tao." },
  { word: "jelq", definition: "(sensitibo; madalas ginagamit sa sekswal na usapan) Ibang klaseng teknik o paraan na nauugnay sa sexual health para lumaki ang ari ng isang lalaki; kinakailangan ng seryosong atensyon mula sa mga health expert." },
  { word: "just put the fries in the bag", definition: "“tigil o hinto na sa pagsasalita” o “magmove-on na.”" },
  { word: "Ksp", definition: "Akronim ng salitang \"Kulang sa pansin\"" },
  { word: "Kween / Kween behavior", definition: "Pa-cute spelling of “queen,” usually praise for girls who slay." },
  { word: "L", definition: "\"loss\", talo" },
  { word: "Lafang", definition: "kain" },
  { word: "Latina", definition: "sobrang ganda" },
  { word: "Lek", definition: "Slang for “pare” or “bro,” galing sa “aleck.”" },
  { word: "let him cook", definition: "Hinahayaan mo ang isang tao na patuloy na mapabuti o mapahusay pa ang kaniyang ideya o ginagawa." },
  { word: "level", definition: "Madalas maihalintulad sa salitang \"aura\", ito ay Antas ng galing o dating ng isang tao." },
  { word: "Lit", definition: "ang lupet/ ang saya" },
  { word: "Looks maxing", definition: "pagpapapogi" },
  { word: "lore", definition: "Kwento sa likod ng tao o bagay, parang history o background" },
  { word: "low vibration", definition: "Bad vibes, nakaka-drain, o hindi maganda ang energy." },
  { word: "mad lit", definition: "Sobrang saya, astig, o ang ganda ng vibes." },
  { word: "Mahjong Nights", definition: "Sikretong gala o gimik" },
  { word: "Main Character Vibe", definition: "Tumutukoy sa isang tao na gustong laging sentro ng atensyon o kumikilos na parang sila ang bida sa isang kuwento." },
  { word: "Main slay", definition: "pinaka-standout moment o outfit." },
  { word: "Malewife", definition: "lalaki na caring, mahilig sa gawaing bahay; kadalasang ginagawang biro." },
  { word: "Mani", definition: "Slang para sa pera" },
  { word: "Manifest", definition: "confident, standout vibes ng isang tao." },
  { word: "Masyadong chill", definition: "Ginagamit kapag ang isang tao ay sobrang relax at hindi nagmamadali." },
  { word: "Meh", definition: "walang dating, boring, o okay lang." },
  { word: "Meme lord", definition: "\"Tao na laging gumagawa o nagpo-post ng memes, usually kilig o funny.\n" },
  { word: "Mentality", definition: "Madalas itong ginagamit upang ilarawan ang mindset o attitude" },
  { word: "Menty B", definition: "Tumutukoy sa isang panahon ng matinding pagkabalisa o emosyonal na paghihirap." },
  { word: "Mewing", definition: "Isang ehersisyo sa mukha na diumano'y nagpapaganda ng panga." },
  { word: "Mid", definition: "Ginagamit para ilarawan ang isang bagay na hindi kahanga-hanga o karaniwan lang." },
  { word: "Mogging", definition: "Isang slang na nangangahulugang magpaganda o magpa-gwapo upang mas mahigitan ang iba sa itsura." },
  { word: "Monggo", definition: "Mukhang monggoloid" },
  { word: "Monyeka", definition: "Sobrang ganda" },
  { word: "Mr. bombastic", definition: "Madalas gamitin bilang pamuri o paghanga sa isang taong may dating o kumpiyansa." },
  { word: "nailed it", definition: "ginalingan" },
  { word: "Naur", definition: "No" },
  { word: "Negative aura", definition: "Kahihiyan. Tumutukoy sa negatibong perspektibo sa isang tao o sitwasyon." },
  { word: "Ngani", definition: "Isang salitang Bisaya na nangangahulugang \"nga\" o \"talaga.\"" },
  { word: "Ni hao fin shyt", definition: "Isang sinasabing kanta o parirala na walang tiyak na kahulugan at ginagamit lamang sa nakakatawang paraan." },
  { word: "No cap", definition: "Nangangahulugang \"no lie\" o \"totoo,\" ginagamit upang ipahayag ang katapatan." },
  { word: "no printer", definition: "walang halong imbento ang mga pahayag, hindi ninakaw o kinuha ang ideya mula sa iba, may orihinalidad." },
  { word: "Nonchalant", definition: "Nagpapakita ng kawalan ng interes o pagkabahala." },
  { word: "Noob", definition: "Isang impormal na termino para sa isang baguhan o walang karanasan sa isang bagay, lalo na sa online games." },
  { word: "Normalize", definition: "Ang gawing normal o tanggap ang isang bagay na maaaring hindi karaniwan dati." },
  { word: "Not clickbait", definition: "ginagamit para sabihing legit ang isang claim." },
  { word: "Not it", definition: "ayaw gawin ang isang bagay." },
  { word: "Not me", definition: "ginagamit sa self-aware or funny way." },
  { word: "Not the", definition: "expression to call out something funny/awkward." },
  { word: "NPC", definition: "(Non-playable character) – tao na parang walang sariling desisyon o scripted gumalaw." },
  { word: "nunya", definition: "In short para sa \"none of your business\". Wala kang pakialam, ‘di mo na kailangang malaman." },
  { word: "Obsessed", definition: "sobra ang pagkagusto." },
  { word: "Off", definition: "Hindi kaaya-ayang tao, o katangian ng tao" },
  { word: "OG", definition: "Maikling paraan ng pagsulat ng \"original gangster\" o \"original,\" na tumutukoy sa isang respetadong tao na matagal na sa isang grupo o aktibidad." },
  { word: "Ohio", definition: "Madalas gamitin sa mga nakakatawa o kakaibang video online nang walang tiyak na kahulugan." },
  { word: "OK boomer", definition: "Sinasabi o Pampatigil sa mga matatandang hindi nakakasabay sa uso, o masyadong old tradition pa rin." },
  { word: "Old School", definition: "Tumutukoy sa mga bagay, istilo, o ideya na mula sa nakaraan o tradisyonal." },
  { word: "On Fleek", definition: "Ginagamit upang ilarawan ang isang bagay na perpekto, napakaganda, o napakahusay, lalo na ang hitsura o pagkakagawa." },
  { word: "On God", definition: "katulad ng “I swear” o pagtitiyak." },
  { word: "On lock", definition: "secured or sure na." },
  { word: "On thin ice", definition: "warning na ‘wag nang magkamali." },
  { word: "One-sided", definition: "May kinikilingan" },
  { word: "Oo, ngani", definition: "Ito ay isang pariralang Bisaya (mula sa rehiyon ng Visayas sa Pilipinas) na nangangahulugang \"Oo nga\" o \"Talaga nga\". Ito ay isang paraan ng pagsang-ayon o pagpapatibay." },
  { word: "Oof", definition: "expression ng sympathy or awkwardness." },
  { word: "OOMF", definition: "(One Of My Followers/Friends) – ginagamit sa social media kapag ayaw pangalanan ang tinutukoy." },
  { word: "OP", definition: "(Overpowered) – sobrang galing o lakas." },
  { word: "Open-up", definition: "Magbahagi ng nararamdaman" },
  { word: "Opkors", definition: "Balbal na paraan ng pagsasabi ng \"of course.\"" },
  { word: "opp", definition: "nagmula sa salitang “opposition” na sa tagalog ay Kalaban o kaaway." },
  { word: "Orb", definition: "Binaliktad na salita na \"bro\" o \"brother.\"" },
  { word: "Out", definition: "Wala na sa uso, lipas na, o hindi na relevant." },
  { word: "out of pocket", definition: "Walang preno, bastos, o wala sa lugar ang kilos." },
  { word: "Out of this World", definition: "Sobrang ganda, kakaiba, o hindi kapani-paniwala." },
  { word: "Outcast", definition: "Hindi kasali sa isang grupo" },
  { word: "Over", definition: "Tapos na o hindi na interesado." },
  { word: "Overrated", definition: "Maraming tumatangkilik" },
  { word: "Paras", definition: "Pinaikling bersyon ng salitang \"parasite\" na nangangahulugang peste. Madalas sinasabi ito sa mga taong peste o sagabal." },
  { word: "Party popper", definition: "Taong laging nagpapasaya" },
  { word: "Periodt", definition: "Isang ekspresyon na ginagamit sa dulo ng isang pahayag upang bigyang-diin ito at maghudyat ng pagtatapos ng usapan tungkol sa paksa." },
  { word: "Pet peeve", definition: "Nakaiinis na gawain, tao o ugali ng tao" },
  { word: "Pick Me", definition: "Isang termino na ginagamit para ilarawan ang isang tao na naghahanap ng atensyon o pagpapatunay sa pamamagitan ng paggawa o pagsasabi ng mga bagay na hindi totoo sa kanilang sarili." },
  { word: "Pink na pink", definition: "Ito ay isang paraan ng pagbibigay-diin sa kulay rosas. Ipinapahiwatig nito na ang kulay rosas ay napakatindi o kitang-kita." },
  { word: "Pinoy bait", definition: "Mga bagay o content na ginawa para makaakit ng atensyon ng mga Pilipino, madalas gamit ang mga karaniwang karanasan o kultura." },
  { word: "Plot twist", definition: "biglaang pagbabago sa kwento o sitwasyon." },
  { word: "Plug", definition: "Pag-promote o pag-endorso ng isang produkto o serbisyo." },
  { word: "pluh", definition: "Tapos na,” o parang “Ayoko na,” pang-end ng usapan kapag hindi kana interasado" },
  { word: "podium", definition: "Magaling o panalo, pero hindi pinakamahusay o pinakamagaling." },
  { word: "Pog / Poggers", definition: "expression ng excitement o approval (galing sa “Play of the Game”)." },
  { word: "Pookie bear", definition: "Ito ay karaniwang isang endearment term o tawag-pansin sa isang taong mahalaga, katulad ng kasintahan o kapamilya." },
  { word: "Pop off", definition: "gawin nang todo o mahusay." },
  { word: "Positive Aura", definition: "Ito ay tumutukoy sa pagkakaroon ng positibong enerhiya o vibe at nakakahikayat na personalidad." },
  { word: "Potek / Pucha", definition: "Mga ekspresyon ng pagkagulat, inis, o pagkadismaya" },
  { word: "POV", definition: "Maikling paraan ng \"point of view,\" madalas gamitin sa mga video para ipakita ang perspektibo ng isang tao sa isang sitwasyon." },
  { word: "Power hug", definition: "Salitang ginagamit para sa mahigpit na yakap." },
  { word: "Pressed", definition: "taong sobrang apektado o inis." },
  { word: "Pro", definition: "Maikli para sa \"professional\" o propesyonal." },
  { word: "Psych", definition: "Biniro o niloko." },
  { word: "Push", definition: "Nangangahulugang ituloy, gawin, o subukan nang husto." },
  { word: "QRT", definition: "(Quote Retweet) – ginagamit lalo na sa Twitter/X kapag nire-reply-an ang tweet." },
  { word: "Quaking", definition: "sobrang gulat o kaba." },
  { word: "Queen", definition: "papuri para sa mga babaeng confident o empowering." },
  { word: "Quiet flex", definition: "pagyayabang pero subtle o classy." },
  { word: "Rank", definition: "Posisyon o antas ng katayuan sa mga online games" },
  { word: "Ratioed", definition: "kapag mas maraming reply kaysa likes sa post (usually negative response)." },
  { word: "Rawr", definition: "Ginagamit bilang playful o flirtatious na ekspresyon, madalas gayahin ang tunog ng isang hayop." },
  { word: "RD (Relationship Drama)", definition: "Tumutukoy sa mga problema o komplikasyon sa isang relasyon." },
  { word: "Reality check", definition: "Ekspresyong nagpapaalala sa tunay na sitwasyon." },
  { word: "receipts", definition: "Patunay o ebidensya, kadalasan ginagamit sa konteksto ng pagpapakita ng mga screenshots o mensahe bilang suporta sa mga sinabi." },
  { word: "Recharge", definition: "Magpahinga" },
  { word: "Red flag", definition: "Senyales ng problema o hindi magandang indikasyon sa isang relasyon o sitwasyon." },
  { word: "Reels", definition: "Maikling at nakakaaliw na mga video, karaniwan sa social media" },
  { word: "Rejected", definition: "Binalewala o nabasted" },
  { word: "Rent free", definition: "Tumutukoy sa isang bagay o taong patuloy na nasa isip mo kahit hindi mo gusto." },
  { word: "Resibo", definition: "Ebidensya o patunay sa isang pahayag o akusasyon." },
  { word: "Respect begets respect", definition: "Kasabihan na nangangahulugang kung magbibigay ka ng respeto, rerespetuhin ka rin." },
  { word: "Retsam", definition: "Ito ay ang salitang \"master\" na binaybay nang paurong. Maaaring gamitin ito sa isang mapaglarong o ironikong paraan." },
  { word: "Ride or die", definition: "Tumutukoy sa isang taong napakatapat at susuporta sa iyo sa anumang sitwasyon." },
  { word: "Rigged", definition: "Hindi patas o may dayaan." },
  { word: "Rizz", definition: "Isang balbal na salita na nangangahulugang charisma o romantic appeal" },
  { word: "Rizzler", definition: "Ito ay isang tao na may malakas na \"rizz\" o kakayahang humanga at akitin ang iba." },
  { word: "Roast", definition: "Ito ay isang uri ng komedya kung saan ang isang tao ay binibiro o tinutukso sa isang mapaglarong paraan ng kanilang mga kaibigan o kasamahan." },
  { word: "Run", definition: "Tumakas" },
  { word: "Rush", definition: "Nagmamadali" },
  { word: "Salty", definition: "bitter" },
  { word: "Savage", definition: "Matapang o walang takot" },
  { word: "Secure the bag", definition: "Nakuha o nakamit ang isang inaasam na bagay" },
  { word: "shade", definition: "Subtle na pagpapakita ng pagkamuhi o panghuhusga sa isang tao—minsan ginagamit bilang \"throwing shade.\"" },
  { word: "Sheesh", definition: "Pag-hype sa isang tao, pagkabigla o ‘di makapaniwala—tipong ‘wow!’ moment." },
  { word: "Shook", definition: "Gulat na gulat o napatulala sa pagkagulat" },
  { word: "shooketh", definition: "Grabe ang pagkagulat. Mas pina-OA na ekspresyon ng salitang shook." },
  { word: "Shoutout", definition: "Paghingi ng pagbati mula sa isang tao o pagtawag ng pansin" },
  { word: "Sigma", definition: "Yung tipong alpha vibes pero chill—hindi kailangan ng validation, pero lahat nakatingin sa kanya. Astig, leader-type, sariling diskarte." },
  { word: "Simp", definition: "Sobrang sunud-sunuran o sobra ang ginagawa para sa taong gusto nila." },
  { word: "Sis", definition: " In short for sister. A friendly callname. Madalas din itong kasingkahulugan ng mga salitang sissy, o te." },
  { word: "Skibidi", definition: "Ang 'Skibidi' ay nangangahulugang good, bad, cool, at nagmula sa sikat na YouTube series na tinatawag na 'Skibidi Toilet' na ginawa ng animator na si Alexey Gerasimov. Karamihan sa mga video ay nagpapakita ng mga inidoro na may ulo ng mga matatandang lalaki na umiikot at nagsasalita habang kumakanta ng mga kanta." },
  { word: "Skibidi ohio rizz", definition: "Sinasabi sa isang tao na may weirdo ang datingan o katangian" },
  { word: "Skibidi rizz", definition: "Yung pa-charming moves ng lalaking Skibidi Toilet para mapansin siya ng babaeng Skibidi Toilet—classic Skibidi riz . Galing 'to sa viral animated series na 'Skibidi Toilet' sa YouTube." },
  { word: "Skibidi toilet", definition: "Isa itong YT series at dito nagmula ang salitang “skibidi”" },
  { word: "Skrtt", definition: "Pagpapakit ng angas" },
  { word: "Sksksk", definition: "Isang ekspresyong ginagamit kapag nasasabik o tumatawa ang isang tao" },
  { word: "slaps", definition: "May magandang taste sa kanta/awitin o sa mga bagay na hilig ng tao." },
  { word: "Slay", definition: "Nagmula sa salitang “Slayable\". Ito ang pinaikling paraan ng pagsasabi na magaling o kahanga-hanga ang ginawa ng isang tao. Ginagamit ito kapag may isang taong sobrang galing o bumida sa isang bagay." },
  { word: "Slayable", definition: "Dito hinango ang slang word na “slay” na nangangahulugang paraan ng pagsasabi na magaling o kahanga-hanga ang ginawa ng isang tao. Ginagamit ito kapag may isang taong sobrang galing o bumida sa isang bagay." },
  { word: "sleeper", definition: "Hindi inaasahang magaling pala o tinatawag na underrated na sitwasyon, tao, o karanasan" },
  { word: "snack", definition: "tawag sa gwapo o maganda" },
  { word: "Snatched / Snatched my wig", definition: "Napakaganda o napakagwapo at sobrang astig ng dating" },
  { word: "Snitch", definition: "Impostor, peke, taga-sumbong, o taong madalas manlaglag ng impormasyon mula sa isang grupo." },
  { word: "Sobrang latina", definition: "sobrang ganda" },
  { word: "Sobrang sarap", definition: "Isang papuri sa isang tao dahil sobrang ganda ng hitsura o aura niya." },
  { word: "Sobrang sikip / shikip", definition: "Isang papuri sa isang tao dahil sobrang ganda niya o dahil ginalingan niya." },
  { word: "Solid", definition: "Napakaganda o mataas ang kalidad, sobrang galing, sobrang angas, sobrang pulido" },
  { word: "Sped", definition: "Tawag sa taong bobo o hindi marunong" },
  { word: "Star, star", definition: "mapaglarong ekspresyon na ginagamit para bigyang-diin na ang isang bagay o tao ay nagniningning o kahanga-hanga—parang bituin! Para itong pagsasabi ng, \"Ang galing mo!\" o \"Panalo ka!\"" },
  { word: "Straw", definition: "OA o nakakatawang paraan ng pagsasabi ng sumosobra ka na! Pero hindi ito galit — madalas ito'y biro o papuri sa sobrang aliw, ganda, o kakulitan ng isang tao." },
  { word: "Sus", definition: "Nangangahulugang kahina-hinala o kaduda-duda" },
  { word: "Tea", definition: "Bagong balita o chismis" },
  { word: "Teluk", definition: "Binaliktad na salitang “kulet” na ang ibig sabihin ay makulit" },
  { word: "thirst trap", definition: "Isang panunuksong litrato o video na ipinost online para makakuha ng atensyon." },
  { word: "thirsty", definition: "Sabik na sabik o desperado sa pansin o atensyon" },
  { word: "Toma toma", definition: "isang aksyon na sinayaw ng isang ML player" },
  { word: "Tralalero tralala", definition: "lyrics ito mula sa viral na bidyo sa internet kung saan may kumakantang ai generated na shark na nakasapatos" },
  { word: "Tss", definition: "tunog o ekspresyong ginagamit kapag naiinis, naaasar, o parang hindi naniniwala. Para itong maikling buntong-hininga o tunog ng pagkadismaya o inis" },
  { word: "twin / twinning", definition: "Nangangahulugang matalik na kaibigan. Magkasundo sa iba’t ibang bagay. Magkapareho." },
  { word: "uncanny", definition: "Nakakakilabot, kakaiba, o parang sobrang hindi normal." },
  { word: "Understood the assignment", definition: "Alam na alam ang gagawin o tamang-tama ang ginawa" },
  { word: "Unlimited", definition: "Tawag kapag paulit ulit sinasabi ang isang salita o parirala" },
  { word: "Vibe", definition: "Yung vibe ng paligid o eksena—kung chill ba, tense, o biglang may kakaibang energy" },
  { word: "Vibe check", definition: "Pag-tsek ng mood o pagsusuri ng pakiramdam sa paligid" },
  { word: "vibin'", definition: "Chill lang o relax sa pakikinig ng kanta/awitin o anumang nakakaganda ng mood" },
  { word: "W", definition: "(in capital letter) means winning" },
  { word: "Wakey wakey", definition: "Slang term for wake up or it means bumangon ka na." },
  { word: "what the sigma?", definition: "maihahalintulad sa skibidi sapagkat wala itong direktang pagpapakahulugan madalas itong ipinapalit sa pariralang ” What the heck?\"" },
  { word: "Why so serious?", definition: "Pabirong paraan ng pagsasabi na, 'Bro, relax lang… huwag mo masyadong seryosohin." },
  { word: "Wi wi wi cat", definition: "Isang meme na hango sa isang sound na sumikat sa tiktok, ang video ng isang pusa na kumakain sa bowl." },
  { word: "Wlw / wuhluhwuh", definition: "nangangahulugang women loving women.Ito ay terminong ginagamit para ilarawan ang romantic o sexual attraction ng isang babae sa kapwa babae" },
  { word: "woke", definition: "Gising sa katotohanan o may malasakit sa lipunan o realidad." },
  { word: "Womp womp", definition: "Slang sound effect para maipahayag ang pagkadismaya, o kaya naman ginagamit itong eskpresyon kap ag ang isang tao ay nagkamali sa nakakatawang paraan. Sa meme o tiktok na kultura naman, ito ay binibigyang pagpapakahulugan o idinudugtong ito sa mga parirala kapag ang isang tao ay napahiya o natalo, sinasabi ito sa sarcastic way." },
  { word: "Yap / yapping", definition: "madaldal, maingay, nagkukwento" },
  { word: "Yarn", definition: "Slang word ng salitang  “’yan” o “iyan”" },
  { word: "yas / yas gurl", definition: "mula sa ingles na salitang 'yes'" },
  { word: "Yassify", definition: "pagpapaganda nang todo, madalas gumamit ng iba't ibang filter o edit." },
  { word: "Yeet", definition: "Excited o maraming energy" },
  { word: "yike / yikes", definition: "pagpapakita o pagpapahayag ng gulat o disapproval sa nakakatawa o nakakahiya." },
  { word: "you ate that", definition: "Magaling mong nagawa ang isang bagay o ang ganda ng hitsura mo ." },
  { word: "Yung claustrophobia ko", definition: "Isang ekspresyon na sinasabi kapag masikip ang isang lugar o nasisikipan ang isang tao" },
  { word: "zang", definition: "hinaluan ang salitang “Dang!” kaya ito ay itinuturing na Taglish." },
  { word: "Zesty", definition: "Salitang ginagamit para ilarawan ang tao (kadalasan ay mga lalaki)kapag medyo malambot ang galaw, parang sassy, o masyadong expressive. Minsan, may \"pa-bading\" energy—pero hindi laging literal, kadalasan biro lang o term of endearment." }
];

// Detailed word information
export const detailedWordData: Record<string, WordDetails> = {
  "8080": {
    word: "8080",
    definition: "mahina ang pag-iisip",
    etymology: "nagmula sa salitang \"bobo\" dahil ang numero na 8 ay hugis letrang B at ang numero 0 ay hugis letrang o. kadalasang ginagamit ng mga gamer sa Henerasyong Alpha na inilalagayan sa gaming chat box o di kaya'y sa pagkakaroon ng kumbersasyon sa internet.",
    partOfSpeech: "pang-uri",
    example: "8080 ka kasi, namatay ka tuloy agad!"
  },
  "9001": {
    word: "9001",
    definition: "higit pa sa inaasahan, napakatindi",
    etymology: "mula sa meme ng Dragon Ball Z na \"It's over 9000\"",
    partOfSpeech: "pang-uri",
    example: "Yung energy niya kanina sa game? Legit over 9001, parang boss level!"
  },
  "all fax": {
    word: "all fax",
    definition: "purong katotohanan",
    etymology: "ang salitang 'fax' ay hango sa salitang ingles na facts na nangangahulugang katotohanan",
    partOfSpeech: "pangngalan",
    example: "Huwag mo na pagdudahan, all fax talaga."
  },
  "aura": {
    word: "aura",
    definition: "enerhiya ng isang tao",
    etymology: "hango sa salitang ingles na nangangahulugang atmospera ng paligid",
    partOfSpeech: "pangngalan",
    example: "Kakaiba 'yang aura mo ngayon ah."
  },
  "Ayo?": {
    word: "Ayo?",
    definition: "pangungumusta",
    etymology: "binagong bersyon ng salitang \"yo!\" na madalas gamitin sa kultura ng internet world at panawag sa isang tao",
    partOfSpeech: "pangngalan",
    example: "Ayo? Tuloy ba tayo sa gala mamaya?"
  },
  "backrooms": {
    word: "backrooms",
    definition: "nakakalito, parang walang katapusan, nakakaba.",
    etymology: "Mula sa konsepto ng meme na isang larawang tila silid na walang laman at walang katapusan o nagmistulang maze. ito rin ay tinaguriang alternative dimension ng mga kabataan sa Henerasyong Alpha.",
    partOfSpeech: "pangngalan",
    example: "Ang hirap naman sa backroom level na 'to!"
  },
  "Baks": {
    word: "Baks",
    definition: "kasingkahulugan ng salitang \"bading\"",
    etymology: "pinaikling bersyon ng salitang \"bakla\"",
    partOfSpeech: "pangngalan",
    example: "Baks, sobrang ganda mo!"
  },
  "Bembang": {
    word: "Bembang",
    definition: "sekswal na pagtatalik",
    etymology: "Isang salitang batay sa tunog na maaaring magbigay kahulugan bilang \"pagsabog\" o \"pagputok\". Nasa kontekstong seksuwal ang salitang ito na madalas ginagamit sa street culture.",
    partOfSpeech: "pangngalan",
    example: "Nagulat ako sa pelikulang pinanood natin, may bembang!"
  },
  "Beta": {
    word: "Beta",
    definition: "sumunod sa sikat na trend o pumapangalawa sa popular na mga aktibidad o bagay",
    etymology: "hinango sa hierarchy na kultura ng Griyego na kung saan alpha ang dominante o representasyon nang pinakamataas at ang beta ay ang pumapanagalawa o submissive",
    partOfSpeech: "pangngalan",
    example: "Bro, sobrang beta vibes mo talaga. Nahihiya ka pa lumapit sa crush mo."
  },
  "Big L": {
    word: "Big L",
    definition: "matinding pagkatalo o pagkabigo",
    etymology: "dalawang salita mula sa ingles na \"big\" at \"L\" na nangangahulugang \"loss\"",
    partOfSpeech: "pang-uri",
    example: "Ang bagal kasi ng wifi! Big L pa nga!"
  },
  "bop": {
    word: "bop",
    definition: "kantang paulit-ulit o kinawiwilihan mong pinapakinggan.",
    etymology: "noong taong 1940's, ang bebop ay estilo ng musika sa anyong jazz at karaniwang tumutukoy sa mabibilis na tempo ng tugtog. sa Henerasyong Alpha ay mas kinilala ang 'bop' bilang pagtukoy sa mga sikat o popular na nakapupukaw ng kanilang enerhiya.",
    partOfSpeech: "pang-uri",
    example: "Bop na bop ang dance trend sa tiktok!"
  },
  "Bossing": {
    word: "Bossing",
    definition: "pagbati sa mga kaibigan",
    etymology: "sumikat ang salitang ito at naging matunog dahil sa social media influencer na si Malupiton. sa kaniyang mga content videos ay ginagamit niya ang salitang ito bilang panawag sa kaniyang kapwa na kalahok sa video",
    partOfSpeech: "pangngalan",
    example: "Bossing! Kumusta ang buhay?"
  },
  "Brainrot": {
    word: "Brainrot",
    definition: "magulong isip, wala sa katinuan",
    etymology: "pinaghalong salita mula sa ingles na \"brain\" (utak) at \"rot\" (mabulok). sa paglaganap ng salitang ito sa mga social media platform ay tumutukoy na ito sa mga bagay na walang kabuluhan at patuloy na kinahuhumalingan sapagkat ito'y masayang balik-balikan",
    partOfSpeech: "pangngalan",
    example: "Yung mga kaklase kong babae na K-pop brainrot na."
  },
  "Burger ka sakin": {
    word: "Burger ka sakin",
    definition: "pang-aakit",
    etymology: "sa konteksto ng meme culture, uri ito ng patawang pagbabanta sa kaibigan o kakilala sa internet",
    partOfSpeech: "pangngalan",
    example: "Gaganti ako sa'yo, burger ka sakin!"
  },
  "Burts": {
    word: "Burts",
    definition: "labis na pagbibiro",
    etymology: "sa orihinal na pagpapakahulugan ng salitang ito, ito ay sumabog. nang mailapat ito sa meme o internet culture, ito ay naging ekspresyon na nagpapakita ng labis na kasiyahan o kasabikan",
    partOfSpeech: "pangngalan / pang-uri",
    example: "Burts! Tawang tawa ako ro'n ah!"
  },
  "Buss": {
    word: "Buss",
    definition: "kahanga-hanga",
    etymology: "binagong salita ng \"bust\" na may ibig sabihin na sumabog.",
    partOfSpeech: "pang-uri",
    example: "Ang buss ng bagong kanta ni Skusta Clee!"
  },
  "Bussin": {
    word: "Bussin",
    definition: "napakasarap",
    etymology: "mas sumikat ang terminolohiyang ito noong 2020, ginagamit ito bilang paghatol sa kalinamnaman ng mga pagkain na video content ng TikTok influencers",
    partOfSpeech: "pang-uri",
    example: "O-order ulit ako ng chicken wings nila, bussin kahit pang-limang balik ko na rito."
  },
  "buttah": {
    word: "buttah",
    definition: "taong may malakas ang appeal o may kumpyansa sa sarili",
    etymology: "Mas impormal na pagbigkas ng salitang \"butter\" at sa anyo nitong makinis o smooth ay ganito na rin bigyang-puri ang mga netizens na pinasimulan sa TikTok ng mga henerasyong Alpha",
    partOfSpeech: "pang-uri",
    example: "Buttah vibes kung rumampa si Wynwyn."
  },
  "Buzzin": {
    word: "Buzzin",
    definition: "kasingkahulugan ng salitang bussin, napakasarap",
    etymology: "mas sumikat ang terminolohiyang ito noong 2020, ginagamit ito bilang paghatol sa kalinamnaman ng mga pagkain na video content ng TikTok influencers",
    partOfSpeech: "pang-uri",
    example: "Dito na lang tayo bumili ng meryenda, sobrang buzzin!"
  },
  "Candy": {
    word: "Candy",
    definition: "maarte, malandi",
    etymology: "-",
    partOfSpeech: "pang-uri",
    example: "Kilala mo ba 'yan? Candy naman 'yan!"
  },
  "Cap": {
    word: "Cap",
    definition: "Sinungaling o nagdadagdag ng kwento.",
    etymology: "Sa AAVE, ang \"cap\" ay may kahulugang pagsisinungaling o pag-imbento ng kwento, samantalang ang \"no cap\" ay isang paraan ng pagsasabi ng \"wala akong binabaluktot\" o \"hindi ako nagsisinungaling.\"",
    partOfSpeech: "pangngalan",
    example: "Hindi ka naman nag-aral eh, cap ka talaga."
  },
  "caught in 4k": {
    word: "caught in 4k",
    definition: "Huling-huli sa akto, may pruweba pa.",
    etymology: "Idyomatikong ekspresyon ito upang tukuyin ang mga nahuling tao dahil sa pagkakasala o katawa-tawang pangyayari na may matibay na pruweba mula sa isang bidyo o larawan. 4k ang sumisimbolo sa resolution ng isang bidyo na may magandang kalidad.",
    partOfSpeech: "pang-abay",
    example: "Caught in 4k ang pagkadapa mo kahapon ah."
  },
  "chad alpha": {
    word: "chad alpha",
    definition: "Yung lalaking may dating, lakas ng loob, o alpha vibes.",
    etymology: "Sa internet forums sa pagitan ng taong 2000-2010, ang Chad ay stereotype na pangalang naglalarawan sa isang lalaki na guwapo, may alpha-male na dating, magandang katawan at nakakakuha sa atensyon ng kababaihan. Inangkla naman ito sa dynamics ng social ng hierarchy kung saan ang mga alpha ang siyang dominante sa grupo.",
    partOfSpeech: "pangngalan",
    example: "Yan ang gusto ko sa lalaki, yung may aurang chad alpha."
  },
  "cheugy": {
    word: "cheugy",
    definition: "Laos o pilit maging uso pero hindi na cool.",
    etymology: "Pagpapaliwanag sa TikTok, ang salitang ito raw ay bagay gamitin sa mga taong try-hard ang enerhiya para sa isang trend kahit a ito ay luma na o outdated.",
    partOfSpeech: "pang-uri",
    example: "Ang cheugy naman ng make-up mo!"
  },
  "clapback": {
    word: "clapback",
    definition: "Matalas at matalinong sagot sa insulto—pang-asar pabalik.",
    etymology: "Taong 2010 noong gamitin ito sa twitter threads at instagram comments bilang pagtukoy sa pagbibigay wais na pahayag laban sa mga kritisismong natatanggap ng mga tao.",
    partOfSpeech: "pangngalan",
    example: "Tiklop siya nung nag-clapback ako eh."
  },
  "clout": {
    word: "clout",
    definition: "Sikat o may impluwensya, lalo na online",
    etymology: "Ang implikasyon nito sa hip-hop culture at social media tulad ng Instagram ay pagpapakita ng kapangyarihan o social status na maaaring makaimpluwensiya sa ibang tao.",
    partOfSpeech: "pangngalan",
    example: "Makabili nga ng usong starbucks tumbler, pang-clout lang!"
  },
  "cook": {
    word: "cook",
    definition: "mahusay na pagtatanghal, nakakalaglag ng panga sa galing",
    etymology: "Sa modernong internet at Gen Alpha lingo, ag cook ay ginagamit sa mga bagay na isinagawa nang may magandang resulta.",
    partOfSpeech: "pang-uri",
    example: "Hanep talaga sumayaw si Niana, cook performance!"
  },
  "copium": {
    word: "copium",
    definition: "pagpapanggap",
    etymology: "Pinagsamang salita na cope (pagharap sa isang sitwasyon) at opium (uri ng gamot na pampahupa ng sakit)",
    partOfSpeech: "pangngalan",
    example: "Tamang copium lang dahil sa pagkakamaling nagawa ko sa bahay."
  },
  "Core": {
    word: "Core",
    definition: "puso o tema ng isang bagay",
    etymology: "-",
    partOfSpeech: "pangngalan",
    example: "Bagay pala sa loob ng kwarto mo ang vintage core."
  },
  "coworker-core": {
    word: "coworker-core",
    definition: "usap-usapan ng mga empleyado",
    etymology: "-",
    partOfSpeech: "pangngalan",
    example: "Aliw na aliw ako sa usapan namin sa opisina, talagangco-worker core!"
  },
  "cracked": {
    word: "cracked",
    definition: "magaling, mahusay",
    etymology: "Negatibo ang literal na kahulugan nito (nabali) subalit sa henerasyong alpha, ang implikasyon nito sa gaming culture ay ang manlalarong may natatanging galing at hindi mapantayang lakas.",
    partOfSpeech: "pang-uri",
    example: "Kuya, ang hirap mo kalabanin sa ML, ang cracked mo maglaro!"
  },
  "Cringe": {
    word: "Cringe",
    definition: "kahiya-hiya, hindi kaaya-aya",
    etymology: "Hango ang slang word na to sa kahulugan ng cringe sa salitang ngles bilang nakakahiya, awkward o outdated. Kalimitang ginagamit sa konteksto ng internet patungkol sa mga content na walang humor o hindi cool na mga bagay na lumilitaw sa internet culture.",
    partOfSpeech: "pang-uri",
    example: "Sino ba kumanta nito? Ang cringe naman ng lyrics."
  },
  "dank": {
    word: "dank",
    definition: "Astig, solid, o mataas ang kalidad.",
    etymology: "Sa reddit ay ginamit ito bilang bahagi ng meme culture na kung saan ang dank memes ay ang mga labis na nakatutuwang mga meme posts.",
    partOfSpeech: "pang-uri",
    example: "Dank na dank yung bagong bili mong sapatos!"
  },
  "Dasurv": {
    word: "Dasurv",
    definition: "karapat-dapat",
    etymology: "binagong porma ng salitang ingles na \"deserve\"",
    partOfSpeech: "pang-uri",
    example: "Lagi ka kasing nangongopya. Baba tuloy ng grades mo, dasurv!"
  },
  "Delulu": {
    word: "Delulu",
    definition: "malayo sa katotohanan",
    etymology: "balbal na salitang hinango mula sa salitang ingles na \"delusional\" na may kahulugang maling ideya o pag i-ilusyon sa isang ideya",
    partOfSpeech: "pang-uri",
    example: "Ang sarap talaga maging delulu kapag nabobored."
  },
  "Dempsey roll": {
    word: "Dempsey roll",
    definition: "bugbog sarado, malalang pagkatalo",
    etymology: "Nag-ugat ito sa heavyweight boxing champion noong 1920's na si Jack Dempsey at ang kaniyang kahusayan ay pinangalanang dempsey roll bilang taktika sa larangan ng boksing. Sumunod naman ay sa manga/anime boxing series na \"Hajime no Ippo\" kung saan ang bidang tauhan ay may iisang galaw na tinawag ding dempsey roll na signature move niya upang taluning maigi ang kalaban. Lumitaw na ito sa tiktok at Twitter bilang paglalaarawan sa pagkatalo sa isang argumento.",
    partOfSpeech: "pandiwa",
    example: "Ano? Na-dempsey roll ka sa comment section 'no?"
  },
  "Demure": {
    word: "Demure",
    definition: "mahinhin o maingat na pag-uugali",
    etymology: "Ito ay isang pormal na salitang Ingles at mas umusbong na gamitin lamang sa Henerasyong Alpha.",
    partOfSpeech: "pang-uri",
    example: "Parang prinsesa magsalita, sobrang demure!"
  },
  "dog water": {
    word: "dog water",
    definition: "sablay, o palpak",
    etymology: "Umusbong sa gaming culture ng henerasyong alpha partikular na sa larong Fortnite. Katulad ng paghahambing sa tubig ng aso walang silbi o kwenta. Ginamit ito ng gamer na si M1LK sa pang-iinsulto sa larong Fortnite. Isa itong pangungutya sa kahinaan at pagiging patapon ng kalaban.",
    partOfSpeech: "pangngalan",
    example: "Tinuruan mo pa ako mag ML, dog water ka naman palang lumaro."
  },
  "Drip": {
    word: "Drip",
    definition: "estilo ng pananamit",
    etymology: "Sa hiphop culture ay tumutukoy ang salitang drip bilang pagpapakita sa mga magagarbo o branded na mga gamit. Nilapat naman ito sa kanta ni Playboi Carti at Metro Boomin bilang mga mamahaling alahas o malakas na dating dahil sa maangas na fashion. Pagdating sa TikTok at internet culture ay nabigyang implikasyon ito sa mga daily fashion talk.",
    partOfSpeech: "pangngalan",
    example: "Lupit talaga ng drip mo!"
  },
  "Drippy": {
    word: "Drippy",
    definition: "maangas na estilo ng pananamit",
    etymology: "Kaugnay sa etimolohiya ng salitang drip, ito naman ay tumutukoy sa kaangasang antas ng pananamit ng isang tao.",
    partOfSpeech: "pang-uri",
    example: "Paturo naman maging drippy, para maangas sa Instagram ko."
  },
  "Ea": {
    word: "Ea",
    definition: "babae",
    etymology: "mas pinaikling salita hango sa binaliktad na salitang babae (eabab)",
    partOfSpeech: "pangngalan",
    example: "Pre, alam mo ba pangalan nung dumaang ea?"
  },
  "Eabab": {
    word: "Eabab",
    definition: "babae",
    etymology: "baliktad na anyo ng salitang 'babae'",
    partOfSpeech: "pangngalan",
    example: "Hindi magpapatalo 'yang eabab na 'yan!"
  },
  "Eat": {
    word: "Eat",
    definition: "Ang galing",
    etymology: "",
    partOfSpeech: "pang-uri",
    example: "Kapag talaga siya na ang nag-report, eat malala talaga kung magpaliwanag."
  },
  "Echo Papa": {
    word: "Echo Papa",
    definition: "pakialamero o nagpapapansin",
    etymology: "Mula sa koda ng bawat salita, E (echo) at P (papa) na kapag pinagsama ay EP at nangangahulugang epal o palasabat sa internet culture",
    partOfSpeech: "pangngalan",
    example: "Echo Papa na naman yung isa kaya hindi kami magkaintindihan."
  },
  "Echo Tango": {
    word: "Echo Tango",
    definition: "gulo",
    etymology: "Mula sa alpabetong pangkomunikasyong NATO",
    partOfSpeech: "pangngalan",
    example: "Ang ingay naman ng GC! Echo tango na naman."
  },
  "Echoz lang": {
    word: "Echoz lang",
    definition: "joke lang o biro lang",
    etymology: "",
    partOfSpeech: "pangngalan",
    example: "Naniwala naman agad kayo, echoz lang!"
  },
  "edge": {
    word: "edge",
    definition: "Pinapatagal ang saya o excitement para mas intense",
    etymology: "madalas itong ginagamit sa seksuwal na usapan",
    partOfSpeech: "pandiwa",
    example: "Pinapataas nila ang excitement hanggang sa dulo ng palabas."
  },
  "Eduls": {
    word: "Eduls",
    definition: "matanda/mga nakakatanda",
    etymology: "Madalas gamitin sa Twitter at TikTok bilang mapanlarong anyo ng salitang, \"elders\" upang mabigyang tawag ang mga matatanda sa social media na hindi kayang makisabay sa uso.",
    partOfSpeech: "pangngalan",
    example: "Dapat sa mga eduls walang social media, puro bash lang naman ginagawa."
  },
  "Eka": {
    word: "Eka",
    definition: "ikaw",
    etymology: "pinaikling bersyon ng ekalal (lalaki)",
    partOfSpeech: "pangngalan",
    example: "May bago ka na namang eka?"
  },
  "Ekalal": {
    word: "Ekalal",
    definition: "lalaki (pinagbaliktad)",
    etymology: "binaliktad na salitang \"lalaki\"",
    partOfSpeech: "pangngalan",
    example: "Ang iingay ng mga ekalal sa likod"
  },
  "Ekans": {
    word: "Ekans",
    definition: "binaliktad na salita ng 'snake' o ahas",
    etymology: "binaliktad na salitang ingles na \"snake\"",
    partOfSpeech: "pangngalan",
    example: "Ang laki naman ng ekans niyo."
  },
  "Eme": {
    word: "Eme",
    definition: "biro",
    etymology: "",
    partOfSpeech: "pangngalan",
    example: "Eme lang sis, huwag mo damdamin!"
  },
  "Emezing": {
    word: "Emezing",
    definition: "Pabirong pagkakasabi ng 'amazing'",
    etymology: "",
    partOfSpeech: "pang-uri",
    example: "Grabe hindi ako makapaniwala, emezing!"
  },
  "Emotional damage": {
    word: "Emotional damage",
    definition: "emosyonal na pinsala",
    etymology: "Taong 2021, ginamit ni Steven He isang chinese-irish na comedian sa Youtube at Tiktok platform ang emotional damage upang ipakita ang mga epic fail na pangyayari.",
    partOfSpeech: "pang-uri",
    example: "Mas maganda raw ako sa picture, emotional damage!"
  },
  "Erm actually": {
    word: "Erm actually",
    definition: "sa totoo lang",
    etymology: "",
    partOfSpeech: "pang-abay",
    example: "Erm actually, tama lang na gumala tayo pagkatapos mapagod sa midterm exam."
  },
  "Estetik": {
    word: "Estetik",
    definition: "maganda sa mata/may dating",
    etymology: "Nagmula ito sa salitang aestethic o estethic ng ingles na may kinalaman sa sining at pinaikling bersyon ito ng salin sa Filipino na estetiko.",
    partOfSpeech: "pang-uri",
    example: "Ang estetik naman ng porma mo!"
  },
  "extra": {
    word: "extra",
    definition: "pabida o pabibo",
    etymology: "mula sa salitang ingles na extra (dagdag) na inilalapat sa konteksto ng kaugalin ng isang tao kapag siya ay sumosobra sa pagpapapansin o pagpapasikat sa internet culture",
    partOfSpeech: "pang-uri",
    example: "Hindi naman ganiyan pinapagawa ni ma'am eh, so extra!"
  },
  "Eyy": {
    word: "Eyy",
    definition: "panawag o pambati",
    etymology: "hango sa salitang ingles na \"hey\". impormal na ekspresyon din itong mga henerasyong alpha kapag nasasabik, pagpapakita ng kasiyahan ginaganahan sa isang bagay.",
    partOfSpeech: "pangngalan",
    example: "Eyy, papasok ka ba bukas?"
  },
  "Fab": {
    word: "Fab",
    definition: "astig, maganda",
    etymology: "Pinaikling salita mula sa salitang Ingles na \"fabulous\"",
    partOfSpeech: "pang-uri",
    example: "Bagay ba to sa akin or hindi siya fab?"
  },
  "Fanum tax": {
    word: "Fanum tax",
    definition: "buraot",
    etymology: "Nag-umpisa ito sa isang internet personality na si Fanum, isang Twitch streamer na kung saan sa kaniyang mga livestream ay madalas niyang kinukuhanan ng pagkain ang mga kasapi sa stream ng walang permiso. Tinawag niya itong fanum tax at mas naging viral ito sa TikTok dahil sa paglalagay ng salitang ito sa kaparehong aksyon.",
    partOfSpeech: "pangngalan",
    example: "Na-fanum tax na agad yung burger na naiwan ko sa lamesa ah."
  },
  "fax": {
    word: "fax",
    definition: "tunay, totoo",
    etymology: "pinaikling salita na facts at ibinatay sa tunog",
    partOfSpeech: "pangngalan",
    example: "May kwento ako tungkol sa tindera ng karinderya, fax lang."
  },
  "fax only": {
    word: "fax only",
    definition: "puro Totoo / katotohanan lang dapat",
    etymology: "fax (facts), nangangahulugan sa internet culture na pagsasabi ng pawang mga katotohanan lamang o sa gaming culture ng henerasyong alpha ay maaaring gamitin ito bilang pang realtalk o trashtalk sa koponan",
    partOfSpeech: "pang-abay",
    example: "Ang hina mo bro, fax only!"
  },
  "Fighting": {
    word: "Fighting",
    definition: "Laban lang",
    etymology: "Mula sa literal na kahulugan ng salitang ingles na \"Fighting\" (paglalaban). Sa Henerasyong Alpha, ginagamit din ang salitang fighting upang magbigay suporta sa taong napanghihinaan ng loob o nalulungkot.",
    partOfSpeech: "pangngalan",
    example: "Kaunti na lang, gagraduate ka na. Fighting!"
  },
  "finna": {
    word: "finna",
    definition: "gagawin pa lang o malapit nang gawin",
    etymology: "Kontraksyon ng salitang \"fixing to\".",
    partOfSpeech: "pangngalan",
    example: "Finna tulog pagkatapos 'kong maglaba."
  },
  "fire": {
    word: "fire",
    definition: "Angas, astig, sobrang galing o cool",
    etymology: "Mula sa salitang ingles na ang kahulugan ay apoy, karaniwang tinuturing bilang nakasusunog at mainit. Sa kultura ng kabataan sa Henerasyong Alpha at kabilang na ang Henerasyong Z, ginagamit ang salitang ito upang bigyang papuri ang kaastigan o kaangasan ng tao o ng isang bagay. Maaari rin itong paglalarawan sa katapangan at kung minsan pa'y ginagamit ito bilang emoji lamang (🔥).",
    partOfSpeech: "pang-uri",
    example: "Iba ka talaga pag dating sa sayawan, sobrang fire!"
  },
  "fit check": {
    word: "fit check",
    definition: "Isang mabilis na paraan para ipakita o ipaalam ang kasuotan ng isang tao",
    etymology: "Naging popular ang pariralang ito sa mga social media influencer lalo't higit sa mga nakatutok sa fashion. Ito ay karaniwang ginagamit upang mabigyang puri o kilatisin ang kasuotan o porma ng isang tao.",
    partOfSpeech: "pangngalan",
    example: "Ang ganda ng damit mo! Fit check nga!"
  },
  "Flaker": {
    word: "Flaker",
    definition: "Taong hindi tumutuloy o umaatras sa mga plano",
    etymology: "Mula ito sa salitang-ugat ng Ingles na \"flake\" na may kahulugang unreliable o hindi mapagkakatiwalaan",
    partOfSpeech: "pangngalan",
    example: "Ayoko sa kaniya, flaker  'yan!"
  },
  "Flex": {
    word: "Flex",
    definition: "pagpapakita o pagyayabang",
    etymology: "Noong taong 1980-1990, ang salitang flexing  ay madalas na ginagamit sa pagpapakitang-gilas ng kapangyarihan o kayamanan. Noong umusbong naman ito sa social media noong 2010 upang magyabang o di kaya'y pabirong pagpapakitang-gilas ng kanilang mga nakamit sa buhay.",
    partOfSpeech: "pandiwa",
    example: "Flex ko lang yung iPhone na niregalo ng Mama ko galing Singapore."
  },
  "Fomo": {
    word: "Fomo",
    definition: "fear of missing out, ayaw magpahuli",
    etymology: "Akronim ng \"Fear Of Missing Out\" (Ingles).",
    partOfSpeech: "pangngalan",
    example: "Nagkaroon ako ng FOMO moments tuwing kasama sila."
  },
  "Foxtrot Bravo": {
    word: "Foxtrot Bravo",
    definition: "Fast Break, umalis agad",
    etymology: "Mula sa alpabetong pangkomunikasyon ng NATO. Ang \"Foxtrot\" ay kumakatawan sa titik F, at ang \"Bravo\" ay kumakatawan sa titik B. Ginagamit ito upang baybayin ang mga salita sa pamamagitan ng radyo o telepono.",
    partOfSpeech: "pangngalan",
    example: "Nariyan na ang mga kalaban, foxtrot bravo! foxtrot bravo!"
  },
  "Foxtrot Delta": {
    word: "Foxtrot Delta",
    definition: "Feeling deep, nagdadrama",
    etymology: "Mula sa alpabetong pangkomunikasyon ng NATO. Ang \"Foxtrot\" ay F, at ang \"Delta\" ay D.",
    partOfSpeech: "pangngalan",
    example: "Defeated na naman! Foxtrot delta,."
  },
  "Fr, fr": {
    word: "Fr, fr",
    definition: "for real, for real, pagsasabi na ito'y totoo",
    etymology: "Pinaikling bersyon ng \"for real, for real\" (Ingles).",
    partOfSpeech: "pang-abay",
    example: "Hindi na ako magpapaloko sa kanya, fr fr."
  },
  "freddy fazbear": {
    word: "freddy fazbear",
    definition: "Gumagaya o parang naimpluwensiyahan na ng karakter sa Five Nights at Freddy's",
    etymology: "Hango sa karakter na si Freddy Fazbear mula sa serye ng video game na \"Five Nights at Freddy's\". Ang \"(ing)\" ay maaaring idugtong upang gawing pandiwa, na nagpapahiwatig ng pagkakaroon o pag-uugali na katulad ni Freddy Fazbear.",
    partOfSpeech: "pangngalan",
    example: "Fready fazbearing, mode on."
  },
  "Frosh": {
    word: "Frosh",
    definition: "Term for freshman, bagong salta sa high school or college",
    etymology: "Pinaikling bersyon ng \"freshman\" (Ingles), na tumutukoy sa isang unang taon na estudyante sa kolehiyo o mataas na paaralan.",
    partOfSpeech: "pangngalan",
    example: "Nasa frosh ang true love."
  },
  "Gang": {
    word: "Gang",
    definition: "tropa/barkada",
    etymology: "Ingles na salita na tumutukoy sa isang grupo ng mga tao na madalas na magkakasama.",
    partOfSpeech: "pangngalan",
    example: "May lakad ang buong gang bukas."
  },
  "Gar": {
    word: "Gar",
    definition: "Tawagang pangkaibigan/pantropa",
    etymology: "Maikling bersyon ng \"girl\" (Ingles).",
    partOfSpeech: "pangngalan",
    example: "Ayusin mo desisyon mo sa buhay, gar."
  },
  "Ghost": {
    word: "Ghost",
    definition: "Pagtigil bigla ng komunikasyon, usually sa mga online relationships",
    etymology: "Ang \"ghost\" ay Ingles na nangangahulugang multo. Ang \"ghosting\" ay isang pandiwa na naglalarawan sa biglaang pagputol ng komunikasyon sa isang tao nang walang paliwanag.",
    partOfSpeech: "pangngalan",
    example: "Ghinost ako ng nakakausap ko sa FB."
  },
  "glaze": {
    word: "glaze",
    definition: "Sobrang pagbuhat ng bangko ng iba o sobrang papuri na parang OA na",
    etymology: "Sa kontekstong ito, maaaring tumutukoy sa isang matamis o makintab na patong (literal na kahulugan sa Ingles).",
    partOfSpeech: "pangngalan",
    example: "Napaka arte naman ni Tisha, eh glaze naman siya."
  },
  "glizzy": {
    word: "glizzy",
    definition: "Hotdog (na slang lang talaga pero naging meme na)",
    etymology: "Slang na termino para sa hotdog (pinaniniwalaang nagmula sa tunog kapag kinakagat ito).",
    partOfSpeech: "pangngalan",
    example: "Ang sarap ng kinain ko sobrang glizzy."
  },
  "glow up": {
    word: "glow up",
    definition: "malaki ang iginanda o igwinapo ngayon, o ang laki ng improvement sa itsura o tiwala sa sarili",
    etymology: "Ingles na parirala na tumutukoy sa isang kapansin-pansing pagbuti o pagbabago sa hitsura, estilo, o pangkalahatang kalagayan ng isang tao.",
    partOfSpeech: "pangngalan",
    example: "Grabe ang glow up ni Felisha, talagang lumabas ang tunay niyang ganda."
  },
  "Goat": {
    word: "Goat",
    definition: "Greatest of all time, pinakamagaling sa lahat ng panahon",
    etymology: "Akronim ng \"Greatest Of All Time\" (Ingles)",
    partOfSpeech: "pangngalan",
    example: "Si Hev Abi ang tunay na GOAT."
  },
  "Goblin Mode": {
    word: "Goblin Mode",
    definition: "Wala pake, hindi nahihiya sa pagiging tamad at magulo",
    etymology: "Isang termino sa social media na naglalarawan ng isang uri ng pag-uugali na tamad, marumi, at hindi nag-aalala sa mga pamantayan ng lipunan.",
    partOfSpeech: "pangngalan",
    example: "Goblin mode on, nawawalan na akong gana sa lahat."
  },
  "goon": {
    word: "goon",
    definition: "Tumutukoy sa paulit-ulit at matagal na pagpapaligaya sa sarili",
    etymology: "Ang \"goon\" ay Ingles na tumutukoy sa isang taong upahan para gumawa ng karahasan. Ang \"gooning\" ay isang slang na termino na may sekswal na kahulugan at hindi angkop gamitin sa pormal na diskusyon.",
    partOfSpeech: "pangngalan",
    example: "Iba talaga ang goon mentality mo!"
  },
  "Green flag": {
    word: "Green flag",
    definition: "Positibong katangian",
    etymology: "Ingles na parirala na sumisimbolo sa isang positibong senyales o katangian sa isang tao o sitwasyon.",
    partOfSpeech: "pangngalan",
    example: "Ang gusto ko sa lalaki ay green flag."
  },
  "griddy": {
    word: "griddy",
    definition: "Nakaka-LSS o sobrang nakakaadik",
    etymology: "Isang popular na sayaw na nagmula sa social media.",
    partOfSpeech: "pangngalan",
    example: "Ang ganda ng mga kanta ni Earl nakaka-griddy."
  },
  "Gucci": {
    word: "Gucci",
    definition: "okay na okay o ayos lang",
    etymology: "Isang kilalang brand ng fashion sa Italya. Ginagamit din bilang pang-uri na nangangahulugang maganda, mahal, o nakaaangat.",
    partOfSpeech: "pang-uri",
    example: "Ayos porma ay, gucci!"
  },
  "Gurl": {
    word: "Gurl",
    definition: "Slang para sa 'girl,' ginagamit ng mga kabataan lalo na sa memes",
    etymology: "Impormal na bersyon ng \"girl\" (Ingles)",
    partOfSpeech: "pangngalan",
    example: "Hay nako gurl, kung ako sayo hindi kita gaganunin."
  },
  "Gwad": {
    "word": "Gwad",
    "definition": "Slang para sa “god” o para ipakita ang pagiging astig o superior.",
    "etymology": "\"guard\" (Ingles) o \"guarding\"",
    "partOfSpeech": "Pangngalan/Pandiwa",
    "example": "Oh my gwad! pinansin ako ng crush ko!"
  },
  "Gyatt / Gyat": {
    "word": "Gyatt / Gyat",
    "definition": "Grabe ang katawan/ Lakas maka- attract",
    "etymology": "Pinaniniwalaang pinaikling bersyon ng \"goddamn\"",
    "partOfSpeech": "Pangngalan",
    "example": "Gyatt! Hindi ko inexpect na ganun siya kagaling sumayaw."
  },
  "Hits diff": {
    "word": "Hits diff",
    "definition": "iba ang dating",
    "etymology": "Pinaikling bersyon ng \"it hits different\" (Ingles)",
    "partOfSpeech": "Pang-abay",
    "example": "Ang sarap bumalik sa dati kong paaralan, hay hits diff."
  },
  "Humblebrag": {
    "word": "Humblebrag",
    "definition": "Pa-humble pero nagyayabang.",
    "etymology": "Ingles na salita na tumutukoy sa isang pahayag na mukhang mapagpakumbaba ngunit naglalayong ipagmalaki ang isang bagay.",
    "partOfSpeech": "Pangngalan/Pandiwa",
    "example": "Humblebrag talaga yang si Rodrigo, kuwari ayaw ng cash gusto g-cash."
  },
  "Ick": {
    "word": "Ick",
    "definition": "nakakadiri",
    "etymology": "Isang Ingles na ekspresyon ng pagkadismaya o pagkasuklam sa isang bagay o pag-uugali.",
    "partOfSpeech": "Pangngalan",
    "example": "Ick ko ang mga taong naninigarilyo."
  },
  "Impostor": {
    "word": "Impostor",
    "definition": "peke/ nagpapanggap",
    "etymology": "Ingles na salita na tumutukoy sa isang taong nagpapanggap na ibang tao. Sumikat dahil sa video game na \"Among Us\".",
    "partOfSpeech": "Pangngalan",
    "example": "Sino kaya ang impostor sa nilalaro naming laro?"
  },
  "It’s giving…": {
    "word": "It’s giving…",
    "definition": "Ekpresyon na naglalarawan ng vibe.",
    "etymology": "Isang parirala sa Ingles na ginagamit upang ipahiwatig ang isang tiyak na impresyon o pakiramdam na ibinibigay ng isang tao, bagay, o sitwasyon.",
    "partOfSpeech": "Pang-uri",
    "example": "It's giving sosyal at yayamanin sa bahay ni Nicole."
  },
  "Jabaited": {
    "word": "Jabaited",
    "definition": "napaniwala",
    "etymology": "Hango sa pangalan ng isang streamer sa Twitch na si Jaba. Tumutukoy sa isang sitwasyon kung saan ang isang tao ay nalinlang o naisahan.",
    "partOfSpeech": "Pang-uri/Pandiwa",
    "example": "Jabaited na naman ako sa laro namin, kainis!"
  },
  "Jampacked": {
    "word": "Jampacked",
    "definition": "puno o busy",
    "etymology": "Ingles na pang-uri na nangangahulugang punong-puno o siksikan.",
    "partOfSpeech": "Pang-uri",
    "example": "Jampacked na ako this week sa daming deadline."
  },
  "jawn": {
    "word": "jawn",
    "definition": "Kahit anong bagay o gamit. Ginagamit na pangkalahatang pangngalan sa isang bagay o tao.",
    "etymology": "Isang slang na salita na ginagamit sa Philadelphia, USA, bilang pamalit sa anumang pangngalan (tao, lugar, bagay, o ideya).",
    "partOfSpeech": "Pangngalan",
    "example": "Walang halimbawa sa pinagmulan"
  },
  "jelq": {
    "word": "jelq",
    "definition": "(sensitibo; madalas ginagamit sa sekswal na usapan) Ibang klaseng teknik o paraan na nauugnay sa sexual health para lumaki ang ari ng isang lalaki; kinakailangan ng seryosong atensyon mula sa mga health expert.",
    "etymology": "Walang etimolohiya sa pinagmulan",
    "partOfSpeech": "Pangngalan/Pandiwa",
    "example": "Walang halimbawa sa pinagmulan"
  },
  "just put the fries in the bag": {
    "word": "just put the fries in the bag",
    "definition": "“tigil o hinto na sa pagsasalita” o “magmove-on na.”",
    "etymology": "Isang linya mula sa isang viral na video sa TikTok. Madalas gamitin upang ipahayag ang kawalan ng interes o pagkabagot sa isang sitwasyon.",
    "partOfSpeech": "Parirala",
    "example": "Hindi ka niya tipo, just put the fries in the bag."
  },
  "Ksp": {
    "word": "Ksp",
    "definition": "Akronim ng salitang \"Kulang sa pansin\"",
    "etymology": "Akronim",
    "partOfSpeech": "Pangngalan",
    "example": "KSP talaga yang si Roxy kahit kailan, inagawan ba naman yung may birthday ng eksena."
  },
  "Kween / Kween behavior": {
    "word": "Kween / Kween behavior",
    "definition": "Pa-cute spelling of “queen,” usually praise for girls who slay.",
    "etymology": "Ang \"kween\" ay isang sinadyang maling baybay ng \"queen\" (Ingles). Ang \"kween behavior\" ay tumutukoy sa mga pag-uugali na katulad nito.",
    "partOfSpeech": "Pangngalan",
    "example": "Ang ganda talaga ni Atisha, para sa kanya ang korona, kween."
  },
  "L": {
    "word": "L",
    "definition": "\"loss\", talo",
    "etymology": "Maikling bersyon ng \"loss\" (Ingles)",
    "partOfSpeech": "Pangngalan",
    "example": "L na naman sa laro, hay nako!"
  },
  "Lafang": {
    "word": "Lafang",
    "definition": "kain",
    "etymology": "Isang salitang Filipino na nangangahulugang kumain nang matakaw o malakas.",
    "partOfSpeech": "Pandiwa",
    "example": "Lafang kung lafang talaga kapag kasama ang barkada."
  },
  "Latina": {
    "word": "Latina",
    "definition": "sobrang ganda",
    "etymology": "Salitang Espanyol na tumutukoy sa isang babaeng may pinagmulang Latin American.",
    "partOfSpeech": "Pangngalan",
    "example": "Ang bongga talaga ni Atisha, sobrang Latina!"
  },
  "Lek": {
    "word": "Lek",
    "definition": "Slang for “pare” o “bro,” galing sa “aleck.”",
    "etymology": "Galing sa \"aleck.\"",
    "partOfSpeech": "Pangngalan",
    "example": "Lek,, kaya natin ito tiwala lang."
  },
  "let him cook": {
    "word": "let him cook",
    "definition": "Hinahayaan mo ang isang tao na patuloy na mapabuti o mapahusay pa ang kaniyang ideya o ginagawa.",
    "etymology": "Isang Ingles na idyoma na nangangahulugang hayaan ang isang tao",
    "partOfSpeech": "Parirala",
    "example": "Kung wala siyang oras, baka may pinagkaka-abalahan lang siya, let him cook."
  },
  "level": {
    "word": "level",
    "definition": "Madalas maihalintulad sa salitang \"aura\", ito ay Antas ng galing o dating ng isang tao.",
    "etymology": "Ingles na salita na tumutukoy sa isang antas o baitang.",
    "partOfSpeech": "Pangngalan/Pandiwa",
    "example": "Ibang level ang ipinakita nilang galing sa liga!"
  },
  "Lit": {
    "word": "Lit",
    "definition": "ang lupet/ ang saya",
    "etymology": "Ingles na nangangahulugang kahanga-hanga, masaya, o puno ng enerhiya.",
    "partOfSpeech": "Pang-uri",
    "example": "Nanalo sila Ranz, sobrang lit ng sayaw nila!"
  },
  "Looks maxing": {
    "word": "Looks maxing",
    "definition": "pagpapapogi",
    "etymology": "Isang termino sa online communities na tumutukoy sa mga hakbang na ginagawa upang mapabuti ang pisikal na hitsura ng isang tao.",
    "partOfSpeech": "Pangngalan",
    "example": "Looks maxing habang narampa si Drei."
  },
  "lore": {
    "word": "lore",
    "definition": "Kwento sa likod ng tao o bagay, parang history o background",
    "etymology": "Ingles na salita na tumutukoy sa isang katawan ng kaalaman o tradisyon tungkol sa isang partikular na paksa o karakter (madalas sa mga fictional na mundo).",
    "partOfSpeech": "Pangngalan",
    "example": "Ano kayang lore ang mayroon kay Vince?"
  },
  "low vibration": {
    "word": "low vibration",
    "definition": "Bad vibes, nakaka-drain, o hindi maganda ang energy.",
    "etymology": "Isang termino na ginagamit sa mga espiritwal or self-help",
    "partOfSpeech": "Pang-uri",
    "example": "Sana maging maayos pa rin ang party kahit may low vibration ang paligid."
  },
  "mad lit": {
    "word": "mad lit",
    "definition": "Sobrang saya, astig, o ang ganda ng vibes.",
    "etymology": "Pinagsamang salitang \"mad\" (Ingles na nangangahulugang sobra o matindi) at \"lit,\" na nagpapahiwatig ng labis na kasayahan o pagiging kahanga-hanga.",
    "partOfSpeech": "Pang-uri",
    "example": "Ang mad lit sa Elyu."
  },
  "Mahjong Nights": {
    "word": "Mahjong Nights",
    "definition": "Sikretong gala o gimik",
    "etymology": "Tumutukoy sa mga gabi kung kailan naglalaro ng Mahjong, isang tradisyonal na larong Tsino.",
    "partOfSpeech": "Pangngalan",
    "example": "Wala na naman ang tatay nag-mahjong nights na naman kasama ang barkada."
  },
  "Main Character Vibe": {
    "word": "Main Character Vibe",
    "definition": "Tumutukoy sa isang tao na gustong laging sentro ng atensyon o kumikilos na parang sila ang bida sa isang kuwento.",
    "etymology": "Ingles na parirala na naglalarawan sa pakiramdam o pag-uugali na parang ikaw ang pangunahing karakter sa isang kuwento o pelikula.",
    "partOfSpeech": "Pangngalan",
    "example": "It's giving main character vibe."
  },
  "Main slay": {
    "word": "Main slay",
    "definition": "pinaka-standout moment o outfit.",
    "etymology": "Pinagsamang \"main\" (pangunahin) at \"slay\" (Ingles na nangangahulugang humanga o magtagumpay nang kahanga-hanga). Tumutukoy sa isang pangunahin o pinakamagandang sandali o pagpapakita ng kahusayan.",
    "partOfSpeech": "Pangngalan",
    "example": "Todo mani siya sa kanyang manifest na maging main slay."
  },
  "Malewife": {
    "word": "Malewife",
    "definition": "lalaki na caring, mahilig sa gawaing bahay; kadalasang ginagawang biro.",
    "etymology": "Isang neolohismo na tumutukoy sa isang lalaki na gumaganap ng tradisyonal na papel ng isang maybahay.",
    "partOfSpeech": "Pangngalan",
    "example": "Ang malewife ni tito, sobrang supportive kay tita sa business niya."
  },
  "Mani": {
    "word": "Mani",
    "definition": "Slang para sa pera",
    "etymology": "Mula sa salitang 'money' (Ingles)",
    "partOfSpeech": "Pangngalan",
    "example": "Sana makapulot ako ng mani sa daan."
  },
  "Manifest": {
    "word": "Manifest",
    "definition": "confident, standout vibes ng isang tao.",
    "etymology": "Ingles na nangangahulugang ipakita o gawing realidad ang isang bagay sa pamamagitan ng paniniwala at positibong pag-iisip.",
    "partOfSpeech": "Pandiwa",
    "example": "Feeling ko talaga, magiging successful ako in the future, manifest ko na 'yan!"
  },
  "Masyadong chill": {
    "word": "Masyadong chill",
    "definition": "Ginagamit kapag ang isang tao ay sobrang relax at hindi nagmamadali.",
    "etymology": "Pinagsamang salitang Filipino (\"masyadong\" - sobra) at Ingles (\"chill\" - kalmado o relaks). Nangangahulugang sobrang kalmado o walang pakialam.",
    "partOfSpeech": "Pang-uri",
    "example": "Ang masyadong chill naman ni kuya, parang walang problema sa mundo."
  },
  "Meh": {
    "word": "Meh",
    "definition": "walang dating, boring, o okay lang.",
    "etymology": "Isang interjection sa Ingles na nagpapahayag ng kawalang-interes o hindi pagkagusto.",
    "partOfSpeech": "Pangngalan",
    "example": "Meh, hindi ko feel 'yung bagong kanta ng idol ko."
  },
  "Meme lord": {
    "word": "Meme lord",
    "definition": "\"Tao na laging gumagawa o nagpo-post ng memes, usually kilig o funny.\n",
    "etymology": "Meme\" + \"lord\" (panginoon), na tumutukoy sa isang taong mahusay gumawa o magpakalat ng mga meme.",
    "partOfSpeech": "Pangngalan",
    "example": "Meme Lord na kaagad si bunso kahit na  anim na taon pa lang siya."
  },
  "Mentality": {
    "word": "Mentality",
    "definition": "Madalas itong ginagamit upang ilarawan ang mindset o attitude",
    "etymology": "Nagmula sa salitang Ingles na \"mentality,\" na tumutukoy sa paraan ng pag-iisip ng isang tao. Ang \"mental\" ay nagmula sa Latin na mens, na nangangahulugang \"isip.\"",
    "partOfSpeech": "Pangngalan",
    "example": "Positive mentality lang dapat para ma-achieve natin 'yung goals natin."
  },
  "Menty B": {
    "word": "Menty B",
    "definition": "Tumutukoy sa isang panahon ng matinding pagkabalisa o emosyonal na paghihirap.",
    "etymology": "Maikling bersyon ng \"mental breakdown\" (Ingles)",
    "partOfSpeech": "Pangngalan",
    "example": "Uy, menty b ka na ba sa Math test natin bukas?"
  },
  "Mewing": {
    "word": "Mewing",
    "definition": "Isang ehersisyo sa mukha na diumano'y nagpapaganda ng panga.",
    "etymology": "Mula sa salitang 'mew\"",
    "partOfSpeech": "Pangngalan",
    "example": "May mewing contest ang mga lalaki sa kabilang klase."
  },
  "Mid": {
    "word": "Mid",
    "definition": "Ginagamit para ilarawan ang isang bagay na hindi kahanga-hanga o karaniwan lang.",
    "etymology": "Maikling bersyon ng\"middle\" (gitna).",
    "partOfSpeech": "Pang-uri",
    "example": "Mid lang 'yung movie, hindi siya ganun ka-exciting."
  },
  "Mogging": {
    "word": "Mogging",
    "definition": "Isang slang na nangangahulugang magpaganda o magpa-gwapo upang mas mahigitan ang iba sa itsura.",
    "etymology": "Pinaniniwalaang nagmula sa internet slang at walang tiyak na pormal na pinagmulan. Maaaring nauugnay sa salitang \"mogul\" na nagpapahiwatig ng kapangyarihan o dominasyon, ngunit hindi ito kumpirmado.",
    "partOfSpeech": "Pangngalan/Pandiwa",
    "example": "Wala akong pake sa mogging na 'yan, basta confident ako sa sarili ko."
  },
  "Monggo": {
    "word": "Monggo",
    "definition": "Mukhang monggoloid",
    "etymology": "Direktang hiram mula sa salitang Filipino na \"monggo.\"",
    "partOfSpeech": "Pangngalan",
    "example": "Ang ayaw ko sa kanya para siyang monggo."
  },
  "Monyeka": {
    "word": "Monyeka",
    "definition": "Sobrang ganda",
    "etymology": "Nagmula sa salitang Espanyol na \"muñeca,\" na nangangahulugang \"manika.\"",
    "partOfSpeech": "Pangngalan",
    "example": "Ang ganda talaga ni Catriona, sobyang monyeka!"
  },
  "Mr. bombastic": {
    "word": "Mr. bombastic",
    "definition": "Madalas gamitin bilang pamuri o paghanga sa isang taong may dating o kumpiyansa.",
    "etymology": "Direktang hiram mula sa pamagat ng kanta ni Shaggy na \"Mr. Bombastic.\"",
    "partOfSpeech": "Pangngalan",
    "example": "Wow, Mr. Bombastic ang dating ni Alvin!"
  },
  "nailed it": {
    "word": "nailed it",
    "definition": "ginalingan",
    "etymology": "Direktang hiram mula sa idyomang Ingles na \"nailed it.\"",
    "partOfSpeech": "Pandiwa",
    "example": "Sobrang hirap ng exam pero nailed it ko naman!"
  },
  "Naur": {
    "word": "Naur",
    "definition": "No",
    "etymology": "Baliktad na pagbigkas ng salitang Ingles na \"no.\"",
    "partOfSpeech": "Pang-abay",
    "example": "Naur, hindi ako sasama diyan, parang ang boring."
  },
  "Negative aura": {
    "word": "Negative aura",
    "definition": "Kahihiyan. Tumutukoy sa negatibong perspektibo sa isang tao o sitwasyon.",
    "etymology": "Direktang mula sa mga salitang Ingles na \"negative\" (negatibo) at \"aura\" (sinasabing invisible na enerhiya na bumabalot sa isang tao).",
    "partOfSpeech": "Pangngalan",
    "example": "Ang negative aura naman ng taong 'yan, nakaka-drain."
  },
  "Ngani": {
    "word": "Ngani",
    "definition": "Isang salitang Bisaya na nangangahulugang \"nga\" o \"talaga.\"",
    "etymology": "Isang salitang Bisaya na nangangahulugang \"nga\" o \"daw\" sa Tagalog",
    "partOfSpeech": "Pang-abay",
    "example": "Oo, ngani, paulit-ulit ka sabing oo ngani."
  },
  "Ni hao fin shyt": {
    "word": "Ni hao fin shyt",
    "definition": "Isang sinasabing kanta o parirala na walang tiyak na kahulugan at ginagamit lamang sa nakakatawang paraan.",
    "etymology": "Pinagsamang mga pariralang Tsino (\"Ni hao\" - hello) at Ingles (\"fin\" - maikli para sa \"fine,\" \"shyt\" - impormal na baybay ng \"shit\").",
    "partOfSpeech": "",
    "example": ""
  },
  "No cap": {
    "word": "No cap",
    "definition": "Nangangahulugang \"no lie\" o \"totoo,\" ginagamit upang ipahayag ang katapatan.",
    "etymology": "Direktang hiram mula sa pariralang Ingles na \"no cap\"",
    "partOfSpeech": "Pang-abay",
    "example": "No cap, ang galing mo talaga kumanta!"
  },
  "no printer": {
    "word": "no printer",
    "definition": "walang halong imbento ang mga pahayag, hindi ninakaw o kinuha ang ideya mula sa iba, may orihinalidad.",
    "etymology": "Direktang hiram mula sa pariralang Ingles na \"no printer.\" Madalas gamitin bilang dahilan o pagpapatawa.",
    "partOfSpeech": "Pangngalan",
    "example": "Ang galing talaga ng Ben7Ben, no printer."
  },
  "Nonchalant": {
    "word": "Nonchalant",
    "definition": "Nagpapakita ng kawalan ng interes o pagkabahala.",
    "etymology": "Nagmula sa salitang Pranses na \"nonchalant,\" na nangangahulugang \"walang malasakit\" o \"balewala.\"",
    "partOfSpeech": "Pang-uri",
    "example": "Ang nonchalant niya lang sumagot sa iba, pero kapag sa akin ang lambing niya."
  },
  "Noob": {
    "word": "Noob",
    "definition": "Isang impormal na termino para sa isang baguhan o walang karanasan sa isang bagay, lalo na sa online games.",
    "etymology": "Maikling bersyon ng \"newbie,\"",
    "partOfSpeech": "Pangngalan",
    "example": "Ang noob ko pa rin sa bagong game na 'to."
  },
  "Normalize": {
    "word": "Normalize",
    "definition": "Ang gawing normal o tanggap ang isang bagay na maaaring hindi karaniwan dati.",
    "etymology": "Direktang hiram mula sa Ingles na \"normalize.\"",
    "partOfSpeech": "Pandiwa",
    "example": "Dapat na nating normalize ang pagiging open tungkol sa mental health."
  },
  "Not clickbait": {
    "word": "Not clickbait",
    "definition": "ginagamit para sabihing legit ang isang claim.",
    "etymology": "\"Not\" (hindi) + \"clickbait\" (isang nakakapanlinlang na headline na naglalayong hikayatin ang mga tao na mag-click).",
    "partOfSpeech": "pang-abay",
    "example": "Grabe, 'yung kwento niya, not clickbait talaga—lahat totoo!"
  },
  "Not it": {
    "word": "Not it",
    "definition": "ayaw gawin ang isang bagay.",
    "etymology": "Ang \"Not it\" ay nag-ugat sa mga larong pambata kung saan ang mga taong kasali rito ay nagsasabing \"Not it\" upang umiwas sa pagiging \"taya” o upang makaiwas na gawin ang isang bagay.",
    "partOfSpeech": "panghalip",
    "example": "Nagkalat 'yung project? Not it, teh."
  },
  "Not me": {
    "word": "Not me",
    "definition": "ginagamit sa self-aware or funny way.",
    "etymology": "Ang \"Not me\" ay mga modernong adaptasyon na ginagamit sa mga meme at online na usapan upang ipahayag ang pagtanggi o pagtukoy sa isang awkward o nakakatawang sitwasyon.",
    "partOfSpeech": "panghalip",
    "example": "Not me crying habang nanonood ng anime, huhuhu."
  },
  "Not the": {
    "word": "Not the",
    "definition": "expression to call out something funny/awkward.",
    "etymology": "Ang \"Not the\" ay may pagkakatulad sa “not me” na  may mga modernong adaptasyon na ginagamit sa mga meme at online na usapan upang ipahayag ang pagtanggi o pagtukoy sa isang awkward o nakakatawang sitwasyon.",
    "partOfSpeech": "pang-abay",
    "example": "Not the teacher na late dumating pero galit pa rin sa late."
  },
  "NPC": {
    "word": "NPC",
    "definition": "(Non-playable character) – tao na parang walang sariling desisyon o scripted gumalaw.",
    "etymology": "Maikling bersyon ng \"non-player character\" sa mga video game. Sa slang, ginagamit ito upang ilarawan ang mga taong tila sumusunod lamang sa script ng lipunan at walang sariling opinyon.",
    "partOfSpeech": "pangngalan",
    "example": "Siya 'yung tipo ng tao na parang NPC lang—walang sariling desisyon."
  },
  "nunya": {
    "word": "nunya",
    "definition": "In short para sa \"none of your business\". Wala kang pakialam, ‘di mo na kailangang malaman.",
    "etymology": "Kontraksyon ng \"none of your business\" (wala kang pakialam). Ginagamit upang ipahiwatig na ang isang bagay ay pribado at hindi dapat pakialaman ng iba",
    "partOfSpeech": "panghalip",
    "example": "\"\"\"Anong ginagawa mo diyan?\"\"\n\n\"\"Nunya.\"\"\n\n\"\"Nunya what?\"\"\n\n\"\"Nunya business.\"\"\""
  },
  "Obsessed": {
    "word": "Obsessed",
    "definition": "sobra ang pagkagusto.",
    "etymology": "Mula sa salitang Ingles na \"obsessed,\" na nangangahulugang labis na pagkahumaling o pagkagusto sa isang bagay o tao.",
    "partOfSpeech": "pang-uri",
    "example": "Obsessed ako sa bagong P-pop group na 'yon, as in!"
  },
  "Off": {
    "word": "Off",
    "definition": "Hindi kaaya-ayang tao, o katangian ng tao",
    "etymology": "Salitang Ingles na nangangahulugang \"patay,\" \"wala,\" o \"malayo.\" Ginagamit upang ilarawan ang isang tao o bagay na hindi kaaya-aya o may kakaibang ugali. Maaaring nag-ugat sa pakiramdam ng \"something feels off,\" na nangangahulugang may kakaiba o mali.",
    "partOfSpeech": "pag-uri",
    "example": "Off 'yung vibes niya today, parang may problema."
  },
  "OG": {
    "word": "OG",
    "definition": "Maikling paraan ng pagsulat ng \"original gangster\" o \"original,\" na tumutukoy sa isang respetadong tao na matagal na sa isang grupo o aktibidad.",
    "etymology": "Nagmula sa salitng Original Gangster o Original God, na ang ibig sabihin ay eksperto sa isang bagay o sitwasyon. Sa kasalukuyan, ginagamit ito upang ipahiwatig ang respeto sa isang taong bihasa o may mataas na antas ng karanasan.",
    "partOfSpeech": "pangngalan",
    "example": "Si kuya OG sa ML, siya ang nagturo sa'kin maglaro."
  },
  "Ohio": {
    "word": "Ohio",
    "definition": "Madalas gamitin sa mga nakakatawa o kakaibang video online nang walang tiyak na kahulugan.",
    "etymology": "Bagaman isang estado sa U.S., sa internet slang, ginagamit ang \"Ohio\" upang tukuyin ang mga kakaiba o surreal na pangyayari, batay sa meme na \"Only in Ohio.\"",
    "partOfSpeech": "pangngalan",
    "example": "Anong nangyayari dito? Parang nasa Ohio ako, ang weird!"
  },
  "OK boomer": {
    "word": "OK boomer",
    "definition": "Sinasabi o Pampatigil sa mga matatandang hindi nakakasabay sa uso, o masyadong old tradition pa rin.",
    "etymology": "Dalawang salitang pinagsama. Ang \"Ok\" na nagmula sa orihinal na okay lang o ayos lang, at Boomer naman ay terminong ginagamit pamalit sa salitang \"matatanda\" o sa mga may edad na millenials. Isang itong pariralang naging viral noong 2019, ginagamit ito upang ipahayag ang pagkadismaya o pagtanggi sa mga pananaw ng mas nakatatandang henerasyon, partikular ang mga \"baby boomers.\"",
    "partOfSpeech": "pandamdam",
    "example": "Sabi ng matanda na nakausap ko, mas okay daw ang buhay noon. OK boomer!"
  },
  "Old School": {
    "word": "Old School",
    "definition": "Tumutukoy sa mga bagay, istilo, o ideya na mula sa nakaraan o tradisyonal.",
    "etymology": "Ito ay dalawang salitang ingles na pinagsama na nangangahulugan o nagpapahiwatig ng respeto o nostalgia sa mga tradisyonal na paraan.",
    "partOfSpeech": "pang-uri",
    "example": "Old school talaga si mama, ayaw ng online shopping."
  },
  "On Fleek": {
    "word": "On Fleek",
    "definition": "Ginagamit upang ilarawan ang isang bagay na perpekto, napakaganda, o napakahusay, lalo na ang hitsura o pagkakagawa.",
    "etymology": "Nagsimula itong maging popular noong 2014 mula sa isang Vine video, ang \"on fleek\" ay nangangahulugang perpekto o napakaganda, lalo na sa konteksto ng hitsura.",
    "partOfSpeech": "pang-uri",
    "example": "On fleek ang kilay mo today, mi!"
  },
  "On God": {
    "word": "On God",
    "definition": "katulad ng “I swear” o pagtitiyak.",
    "etymology": "Nagsimula ito at naging madalas itong gamitin sa African American Vernacular English (AAVE) at kumalat sa internet slang ekspresyon ng pagtitiyak o paninindigan, katulad ng \"I swear to God.\".",
    "partOfSpeech": "pang-abay",
    "example": "On God, hindi ko siya sinaktan. Promise!"
  },
  "On lock": {
    "word": "On lock",
    "definition": "secured or sure na.",
    "etymology": "Dalawang ingles na salita na nagmula sa ideya ng pagkakaroon ng kontrol o seguridad sa isang bagay. Ginagamit upang ipahiwatig na ang isang bagay ay tiyak o nasa ilalim ng kontrol.",
    "partOfSpeech": "pang-uri",
    "example": "Yung schedule ko next week, on lock na. Wala nang changes."
  },
  "On thin ice": {
    "word": "On thin ice",
    "definition": "warning na ‘wag nang magkamali.",
    "etymology": "Nagmula ito sa idiomatic expression na nangangahulugang nasa delikadong kalagayan o malapit nang mapahamak.",
    "partOfSpeech": "pang-abay",
    "example": "Late ka na naman? You're on thin ice, teh."
  },
  "One-sided": {
    "word": "One-sided",
    "definition": "May kinikilingan",
    "etymology": "Isang ingles na salita na may kaparehong pagpapakahulugan sa Tagalog. Tumutukoy sa isang sitwasyon kung saan ang isang panig lamang ang nagbibigay ng effort o emosyon, tulad ng sa isang relasyon.",
    "partOfSpeech": "pang-uri",
    "example": "One-sided love 'to, siya lang ang masaya."
  },
  "Oo, ngani": {
    "word": "Oo, ngani",
    "definition": "Ito ay isang pariralang Bisaya (mula sa rehiyon ng Visayas sa Pilipinas) na nangangahulugang \"Oo nga\" o \"Talaga nga\". Ito ay isang paraan ng pagsang-ayon o pagpapatibay.",
    "etymology": "Kombinasyon ng Tagalog (\"oo,\" ibig sabihin \"yes\") at Bisaya (\"ngani,\" tulad ng \"nga\" o \"daw\").",
    "partOfSpeech": "pandamdam",
    "example": "\"\"\"Ang ganda ng dress mo!\"\"\n\n\"\"Oo, ngani. Sale 'yan kahapon.\"\"\""
  },
  "Oof": {
    "word": "Oof",
    "definition": "expression ng sympathy or awkwardness.",
    "etymology": "Nagmula sa isang onomatopoeic expression na ginagamit upang ipahayag ang sympathy, pagkagulat, o pagkadismaya. Naging popular sa mga gaming community tulad ng Roblox.",
    "partOfSpeech": "pandamdam",
    "example": "Oof, nasira 'yung phone ko. Ang sakit!"
  },
  "OOMF": {
    "word": "OOMF",
    "definition": "(One Of My Followers/Friends) – ginagamit sa social media kapag ayaw pangalanan ang tinutukoy.",
    "etymology": "Maikling bersyon ng \"one of my followers\"",
    "partOfSpeech": "panghalip",
    "example": "OOMF nag-post siya ng cryptic tweet. Curious tuloy ako kung sino yung tinutukoy niya."
  },
  "OP": {
    "word": "OP",
    "definition": "(Overpowered) – sobrang galing o lakas.",
    "etymology": "Nagsimula ito sa  isang gaming community na madalas gamitin upang ilarawan ang isang karakter o item na labis ang lakas o galing, na maaaring makasira sa balanse ng laro.",
    "partOfSpeech": "pang-uri",
    "example": "Yung bagong character sa game, OP masyado. Dapat nerf na."
  },
  "Open-up": {
    "word": "Open-up",
    "definition": "Magbahagi ng nararamdaman",
    "etymology": "Ang orihinal na kahulugan nito sa Ingles ay may kapareho ring pagpapakahulugan sa Tagalog. Ito ay  phrasal verb na nangangahulugang magbahagi ng nararamdaman o personal na impormasyon.",
    "partOfSpeech": "pandiwa",
    "example": "Kung may problema ka, mag-open-up ka lang sa'kin."
  },
  "Opkors": {
    "word": "Opkors",
    "definition": "Balbal na paraan ng pagsasabi ng \"of course.\"",
    "etymology": "Isa itong balbal na paraan ng pagsasabi ng \"of course,\" orihinal na salita, na binigyan ng mabulaklak o maarteng paraan ng pagsasalita na nagpapakita ng casual o comedic tone sa pakikipag-usap.",
    "partOfSpeech": "pandamdam",
    "example": "\"\"\"Gusto mo ng ice cream?\"\"\n\n\"\"Opkors! Sino ba naman ang ayaw?\"\"\""
  },
  "opp": {
    "word": "opp",
    "definition": "nagmula sa salitang “opposition” na sa tagalog ay Kalaban o kaaway.",
    "etymology": "Hango ito sa orihinal na Ingles na salitang \"opposition”. Madalas itong gamitin lalo na sa konteksto ng mga gang o street culture.",
    "partOfSpeech": "pangngalan",
    "example": "Ingat ka sa kanya, opp 'yan. Hindi siya totoo."
  },
  "Orb": {
    "word": "Orb",
    "definition": "Binaliktad na salita na \"bro\" o \"brother.\"",
    "etymology": "Hango sa binaliktad salitang \"bro\" o \"brother,\" na madalas ginagamit sa mga online na komunidad bilang isang term of endearment o pagtukoy sa kaibigan.",
    "partOfSpeech": "pangngalan",
    "example": "Nag-orb na naman si kuya, wala na sa mood makipag-usap."
  },
  "Out": {
    "word": "Out",
    "definition": "Wala na sa uso, lipas na, o hindi na relevant.",
    "etymology": "Isang ingles na salita na madalas na ginagamit upang ilarawan ang isang bagay na wala na sa uso o hindi na relevant sa kasalukuyang panahon.",
    "partOfSpeech": "pang-uri",
    "example": "Out na ako sa group chat, toxic na masyado."
  },
  "out of pocket": {
    "word": "out of pocket",
    "definition": "Walang preno, bastos, o wala sa lugar ang kilos.",
    "etymology": "Isang Ingles na idiomatic expression na nangangahulugang wala sa lugar ang kilos o bastos ang asal. Naadap ito ng mga Pilipino at madalas gamitin sa kaswal na usapan dahil sa palagi itong nagagamit online.",
    "partOfSpeech": "pang-abay",
    "example": "Out of pocket 'yung joke mo, hindi na nakakatawa."
  },
  "Out of this World": {
    "word": "Out of this World",
    "definition": "Sobrang ganda, kakaiba, o hindi kapani-paniwala.",
    "etymology": "Hango sa ingles na parirala na nangangahulugang sobrang ganda, kakaiba, o hindi kapani-paniwala.",
    "partOfSpeech": "pang-uri",
    "example": "Yung performance nila, out of this world! Ang galing!"
  },
  "Outcast": {
    "word": "Outcast",
    "definition": "Hindi kasali sa isang grupo",
    "etymology": "Isang wikang Ingles at tumutukoy ito sa isang tao na hindi kasali o tinatanggap sa isang grupo o lipunan.",
    "partOfSpeech": "pangngalan",
    "example": "Feeling ko talaga outcast ako sa klase, wala akong kaibigan kahit isa."
  },
  "Over": {
    "word": "Over",
    "definition": "Tapos na o hindi na interesado.",
    "etymology": "Ingles na salita na madalas ginagamit upang ipahiwatig na ang isang bagay ay tapos na o wala nang interes.",
    "partOfSpeech": "pang-uri",
    "example": "Over na ako sa kanya. Move on na talaga."
  },
  "Overrated": {
    "word": "Overrated",
    "definition": "Maraming tumatangkilik",
    "etymology": "Nagmula sa Ingles na salitang tumutukoy sa isang bagay na binibigyan ng labis na papuri o atensyon kaysa sa nararapat.",
    "partOfSpeech": "pang-uri",
    "example": "Ang overrated 'yung movie na 'yon. Hindi naman ganoon kaganda."
  },
  "Paras": {
    "word": "Paras",
    "definition": "Pinaikling bersyon ng salitang \"parasite\" na nangangahulugang peste. Madalas sinasabi ito sa mga taong peste o sagabal.",
    "etymology": "Hango isa Ingles na salitang \"parasite,\" na tumutukoy sa isang organismo na nabubuhay sa o sa loob ng ibang organismo at kumukuha ng sustansya mula rito.",
    "partOfSpeech": "pang-abay",
    "example": "Siya 'yung paras sa group project, wala namang ambag."
  },
  "Party popper": {
    "word": "Party popper",
    "definition": "Taong laging nagpapasaya",
    "etymology": "Isang Ingles na salita na ang ibig sabihin ay nagmula sa maliit na paputok na ginagamit sa mga selebrasyon. Sa slang, tumutukoy sa isang taong laging nagpapasaya o nagbibigay ng kasiyahan.",
    "partOfSpeech": "Pangngalan",
    "example": "Nagdala siya ng party popper sa birthday ko, ang saya!"
},
  "Periodt": {
    "word": "Periodt",
    "definition": "Isang ekspresyon na ginagamit sa dulo ng isang pahayag upang bigyang-diin ito at maghudyat ng pagtatapos ng usapan tungkol sa paksa.",
    "etymology": "Hango sa salitang Ingles na \"period,\" na ginagamit upang bigyang-diin ang isang pahayag at ipahiwatig na tapos na ang usapan tungkol sa paksa. Dinagdagan ito ng letrang T sa dulo upang mas maging maarte o mapaglaro ang mga salita.",
    "partOfSpeech": "pandamdam",
    "example": "Tama ako, periodt. Wala nang arguments."
  },
  "Pet peeve": {
    "word": "Pet peeve",
    "definition": "Nakaiinis na gawain, tao o ugali ng tao",
    "etymology": "Hango sa Ingles na salita at may kaparehong pagpapakahulugan na isang bagay o ugali na labis na nakakainis o nakakairita sa isang tao.",
    "partOfSpeech": "pangngalan",
    "example": "Pet peeve ko talaga 'yung nanguya nang malakas . Naiirita talaga ako"
  },
  "Pick Me": {
    "word": "Pick Me",
    "definition": "Isang termino na ginagamit para ilarawan ang isang tao na naghahanap ng atensyon o pagpapatunay sa pamamagitan ng paggawa o pagsasabi ng mga bagay na hindi totoo sa kanilang sarili.",
    "etymology": "Orihinal na Ingles na salita na tumutukoy sa isang tao na naghahanap ng atensyon o pagpapatunay sa pamamagitan ng paggawa o pagsasabi ng mga bagay na hindi totoo sa kanilang sarili.",
    "partOfSpeech": "pangngalan",
    "example": "Siya 'yung pick me girl, yung laging nagpapapansin sa boys."
  },
  "Pink na pink": {
    "word": "Pink na pink",
    "definition": "Ito ay isang paraan ng pagbibigay-diin sa kulay rosas. Ipinapahiwatig nito na ang kulay rosas ay napakatindi o kitang-kita.",
    "etymology": "Nagmula sa salitang kulay pink o kulay rosas.",
    "partOfSpeech": "pang-uri",
    "example": "Pink na pink ang outfit mo today, ang cute!"
  },
  "Pinoy bait": {
    "word": "Pinoy bait",
    "definition": "Mga bagay o content na ginawa para makaakit ng atensyon ng mga Pilipino, madalas gamit ang mga karaniwang karanasan o kultura.",
    "etymology": "Nagmula sa dalawang magkaibang salita na Pinoy at bait. Pinoy na may kahulugang nagmula sa Piipinas o mga tao sa Piipinas. At bait naman, na nagmula sa salitang ingles, na ang ibig sabihin ay isang patibong na pampaakit sa mga manonood.",
    "partOfSpeech": "pangngalan",
    "example": "Yung vlogger na 'yon, puro Pinoy bait lang naman yung mga content niya."
  },
  "Plot twist": {
    "word": "Plot twist",
    "definition": "biglaang pagbabago sa kwento o sitwasyon.",
    "etymology": "Ang terminong ito ay nagmula sa larangan ng panitikan at pelikula, na tumutukoy sa hindi inaasahang pagbabago sa takbo ng kuwento. Ang \"twist\" ay nangangahulugang biglaang pagbabago, habang ang \"plot\" ay tumutukoy sa banghay ng kuwento.",
    "partOfSpeech": "Pangngalan",
    "example": "Akala ko siya ang bida, pero siya pala ang kontrabida. Grabe yung plot twist!"
  },
  "Plug": {
    "word": "Plug",
    "definition": "Pag-promote o pag-endorso ng isang produkto o serbisyo.",
    "etymology": "Nagsimula bilang slang sa mga African-American communities noong 2000s, tumutukoy sa taong may koneksyon sa mga mahirap hanapin na produkto, lalo na sa ilegal na droga. Kalaunan, lumawak ang kahulugan nito upang isama ang sinumang nagbibigay ng access sa mga eksklusibong item o serbisyo.",
    "partOfSpeech": "pandiwa",
    "example": "May plug ka ba ng murang sneakers? Hanap ako eh."
  },
  "pluh": {
    "word": "pluh",
    "definition": "Tapos na,” o parang “Ayoko na,” pang-end ng usapan kapag hindi kana interasado",
    "etymology": "Isang Gen Z slang na ginagamit bilang pangwakas sa usapan kapag wala nang masabi o hindi interesado. Ang eksaktong pinagmulan nito ay hindi tiyak, ngunit ito ay patuloy na lumalaganap sa TikTok at iba pang social media platforms.",
    "partOfSpeech": "pandamdam",
    "example": "Wala na akong masabi sa kanya, pluh."
  },
  "podium": {
    "word": "podium",
    "definition": "Magaling o panalo, pero hindi pinakamahusay o pinakamagaling.",
    "etymology": "Nagmula sa Latin na \"podium,\" mula sa Griyegong \"podion,\" na nangangahulugang \"maliit na paa.\" Sa modernong paggamit, ang \"podium\" ay tumutukoy sa plataporma kung saan tumatayo ang mga nanalo sa kompetisyon. Ang paggamit nito bilang pandiwa (\"to podium\") ay nangangahulugang makamit ang isa sa mga nangungunang posisyon sa isang kompetisyon.",
    "partOfSpeech": "pangngalan",
    "example": "Top 3 ako sa quiz bee! Nasa podium na ako!"
  },
  "Pog / Poggers": {
    "word": "Pog / Poggers",
    "definition": "expression ng excitement o approval (galing sa “Play of the Game”).",
    "etymology": "Nagmula sa Twitch emote na \"PogChamp,\" na nagpapakita ng excitement o sorpresa. Ang \"Pog\" ay pinaikling anyo ng \"Play of the Game,\" na ginagamit sa gaming community upang ipakita ang kasiyahan o paghanga.",
    "partOfSpeech": "pandamdam",
    "example": "Nanalo ako sa tournament! Poggers!"
  },
  "Pookie bear": {
    "word": "Pookie bear",
    "definition": "Ito ay karaniwang isang endearment term o tawag-pansin sa isang taong mahalaga, katulad ng kasintahan o kapamilya.",
    "etymology": "Isang endearment term na nagmula sa mga German term of endearment noong 1900s. Ginagamit ito bilang tawag sa isang mahal sa buhay o malapit na kaibigan.",
    "partOfSpeech": "pangngalan",
    "example": "Good morning, pookie bear! Miss na kita."
  },
  "Pop off": {
    "word": "Pop off",
    "definition": "gawin nang todo o mahusay.",
    "etymology": "Isang slang na nangangahulugang gumawa ng isang bagay nang mahusay o todo. Ang eksaktong pinagmulan nito ay hindi tiyak, ngunit ito ay lumaganap sa mga online communities at social media.",
    "partOfSpeech": "pandiwa",
    "example": "Nag-pop off siya sa performance, sobrang galing!"
  },
  "Positive Aura": {
    "word": "Positive Aura",
    "definition": "Ito ay tumutukoy sa pagkakaroon ng positibong enerhiya o vibe at nakakahikayat na personalidad.",
    "etymology": "Ang \"aura\" ay tumutukoy sa enerhiya o vibe ng isang tao. Sa Gen Z at Gen Alpha, ito ay ginagamit upang ilarawan ang pagiging cool o confident ng isang tao.",
    "partOfSpeech": "pangngalan",
    "example": "Gusto ko kasama si Bea, parang may positive aura talaga siya."
  },
  "Potek / Pucha": {
    "word": "Potek / Pucha",
    "definition": "Mga ekspresyon ng pagkagulat, inis, o pagkadismaya",
    "etymology": "Mga ekspresyon ng pagkagulat, inis, o pagkadismaya sa wikang Filipino. Ang \"pucha\" ay pinaikling anyo ng salitang Kastila na \"puta,\" na isang mura. Ang \"potek\" ay isang eufemism ng \"putang ina,\" na ginagamit upang maiwasan ang direktang pagmumura.",
    "partOfSpeech": "pandamdam",
    "example": "Potek, nakalimutan ko 'yung assignment ko sa bahay!"
  },
  "POV": {
    "word": "POV",
    "definition": "Maikling paraan ng \"point of view,\" madalas gamitin sa mga video para ipakita ang perspektibo ng isang tao sa isang sitwasyon.",
    "etymology": "Acronym para sa \"Point of View.\" Ginagamit sa mga video upang ipakita ang perspektibo ng isang tao sa isang sitwasyon. Nagsimula itong lumaganap ito sa mga platform tulad ng TikTok at YouTube.",
    "partOfSpeech": "pangngalan",
    "example": "POV: Late ka na naman sa klase."
  },
  "Power hug": {
    "word": "Power hug",
    "definition": "Salitang ginagamit para sa mahigpit na yakap.",
    "etymology": "Isang modernong termino na tumutukoy sa mahigpit at makapangyarihang yakap. Ang \"power\" ay nagpapahiwatig ng intensity ng yakap. Walang tiyak na pinagmulan, ngunit ito ay lumaganap sa mga motivational at self-help contexts.",
    "partOfSpeech": "pandiwa",
    "example": "Mukhang malungkot ka, power hug muna tayo."
  },
  "Pressed": {
    "word": "Pressed",
    "definition": "taong sobrang apektado o inis.",
    "etymology": "Isa itong slang na nangangahulugang sobrang apektado o inis. Ginagamit upang ilarawan ang isang taong labis na naapektuhan ng isang sitwasyon o komento.",
    "partOfSpeech": "pang-uri",
    "example": "Pressed siya kasi hindi siya napili sa team."
  },
  "Pro": {
    "word": "Pro",
    "definition": "Maikli para sa \"professional\" o propesyonal.",
    "etymology": "Pinaikling bersyon ng \"professional.\" Ginamit na ito mula pa noong 1866 upang ilarawan ang isang taong may mataas na antas ng kasanayan o propesyonalismo.",
    "partOfSpeech": "pangngalan",
    "example": "Pro na siya sa pag-edit ng videos, ang galing!"
  },
  "Psych": {
    "word": "Psych",
    "definition": "Biniro o niloko.",
    "etymology": "Pinaikling bersyon ng \"psychoanalyze.\" Ginamit noong 1914 bilang \"to subject to psychoanalysis,\" at lumawak ang kahulugan upang isama ang \"to outsmart\" o \"to unnerve.\" Nangangahulugan itong \"lokohin\" o \"biruin.\"",
    "partOfSpeech": "pandiwa",
    "example": "Akala mo totoo? Psych! Joke lang 'yon."
  },
  "Push": {
    "word": "Push",
    "definition": "Nangangahulugang ituloy, gawin, o subukan nang husto.",
    "etymology": "Nagmula sa Latin na \"pulsare,\" na nangangahulugang \"itulak.\" Sa slang, ito ay nangangahulugang ituloy o gawin ang isang bagay.",
    "partOfSpeech": "pandiwa",
    "example": "Push lang tayo sa goals natin, kaya natin 'to!"
  },
  "QRT": {
    "word": "QRT",
    "definition": "(Quote Retweet) – ginagamit lalo na sa Twitter/X kapag nire-reply-an ang tweet.",
    "etymology": "Acronym ng \"Quote Retweet,\" na ginagamit sa Twitter upang mag-reply sa isang tweet habang inu-quote ito.",
    "partOfSpeech": "pandiwa",
    "example": "Nag-QRT siya ng tweet ko, nakakahiya!"
  },
  "Quaking": {
    "word": "Quaking",
    "definition": "sobrang gulat o kaba.",
    "etymology": "Slang na nangangahulugang sobrang gulat o kaba. Maaaring nagmula ito sa literal na pagyanig ng katawan kapag natatakot o kinakabahan.",
    "partOfSpeech": "pang-uri",
    "example": "Quaking ako sa performance niya, ang lakas talaga ng impact!"
  },
  "Queen": {
    "word": "Queen",
    "definition": "papuri para sa mga babaeng confident o empowering.",
    "etymology": "Bukod sa orihinal nitong pagpapakahulugan sa Ingles na Queen o reyna sa tagalog. Ginagamit bilang papuri sa mga babaeng confident o empowering. Maaaring nag-ugat ito sa LGBTQ+ culture bilang term of endearment o respeto.",
    "partOfSpeech": "pangngalan",
    "example": "Queen talaga si ate, ang ganda ng aura!"
  },
  "Quiet flex": {
    "word": "Quiet flex",
    "definition": "pagyayabang pero subtle o classy.",
    "etymology": "Slang na nangangahulugang subtle o classy na pagyayabang. Ang \"flex\" ay nangangahulugang ipakita ang isang bagay, habang ang \"quiet\" ay nagpapahiwatig ng pagiging hindi garapal.",
    "partOfSpeech": "pangngalan",
    "example": "Naks! Quiet flex lang siya sa bagong phone niya, hindi nagyayabang."
  },
  "Rank": {
    "word": "Rank",
    "definition": "Posisyon o antas ng katayuan sa mga online games",
    "etymology": "Nagmula ito sa gaming community, na tumutukoy sa posisyon o antas ng katayuan ng isang manlalaro. Nagmula ito sa military ranking system.",
    "partOfSpeech": "pangngalan",
    "example": "Anong rank mo na sa ML? Mythic na ako!"
  },
  "Ratioed": {
    "word": "Ratioed",
    "definition": "kapag mas maraming reply kaysa likes sa post (usually negative response).",
    "etymology": "Nagmula ito sa social media, na tumutukoy sa isang post na may mas maraming replies kaysa likes, na karaniwang indikasyon ng negatibong pagtanggap.",
    "partOfSpeech": "pang-uri",
    "example": "Nag-post siya ng controversial na tweet, tapos na-ratioed siya."
  },
  "Rawr": {
    "word": "Rawr",
    "definition": "Ginagamit bilang playful o flirtatious na ekspresyon, madalas gayahin ang tunog ng isang hayop.",
    "etymology": "Ang salitang \"rawr\" ay isang onomatopoeic na representasyon ng tunog ng \"roar\" o pag-ungol ng hayop. Naging popular ito sa mga online chat at text messaging noong huling bahagi ng 1990s at unang bahagi ng 2000s, lalo na sa mga emo at scene subcultures. Ginagamit ito bilang playful o flirtatious na ekspresyon upang ipakita ang atraksyon o kasiyahan.",
    "partOfSpeech": "pandamdam",
    "example": "Rawr! Sobrang cute mo naman ngayon."
  },
  "RD (Relationship Drama)": {
    "word": "RD (Relationship Drama)",
    "definition": "Tumutukoy sa mga problema o komplikasyon sa isang relasyon.",
    "etymology": "Ang akronim na \"RD\" ay pinaikling anyo ng \"Relationship Drama,\" na tumutukoy sa mga komplikasyon o problema sa isang romantikong relasyon. Bagaman walang tiyak na pinagmulan, ito ay naging popular sa mga kabataan sa social media bilang mabilisang paraan ng pagtukoy sa mga isyung may kinalaman sa relasyon.",
    "partOfSpeech": "pangngalan",
    "example": "May RD na naman sila, lagi na lang may away."
  },
  "Reality check": {
    "word": "Reality check",
    "definition": "Ekspresyong nagpapaalala sa tunay na sitwasyon.",
    "etymology": "Ang pariralang \"reality check\" ay unang lumitaw noong kalagitnaan ng 1950s, na ginagamit upang ipakita ang pangangailangan na harapin ang katotohanan o realidad sa halip na manatili sa ilusyon o maling paniniwala. Ginagamit ito upang paalalahanan ang isang tao na muling suriin ang kanilang pananaw o inaasahan.",
    "partOfSpeech": "Pangngalan",
    "example": "Reality check: Hindi lahat ng gusto mo, makukuha mo agad."
  },
  "receipts": {
    "word": "receipts",
    "definition": "Patunay o ebidensya, kadalasan ginagamit sa konteksto ng pagpapakita ng mga screenshots o mensahe bilang suporta sa mga sinabi.",
    "etymology": "Ang salitang \"receipts\" ay naging slang para sa \"ebidensya\" o \"patunay,\" lalo na sa konteksto ng social media. Ang paggamit nito ay naging tanyag matapos ang isang panayam kay Whitney Houston noong 2002, kung saan hiniling niya ang \"receipts\" o patunay sa mga akusasyon laban sa kanya.",
    "partOfSpeech": "Pangngalan",
    "example": "May receipts ako ng chat niya, wala na siyang kawala at hindi siya makakatanggi."
  },
  "Recharge": {
    "word": "Recharge",
    "definition": "Magpahinga",
    "etymology": "Nagmula sa literal na kahulugan ng muling pagpuno ng enerhiya, tulad ng sa mga baterya. Sa slang na gamit, ito ay tumutukoy sa pagkuha ng pahinga o break upang muling makakuha ng lakas o enerhiya, lalo na pagkatapos ng nakakapagod na gawain.",
    "partOfSpeech": "Pandiwa",
    "example": "Pagod na ako, kailangan ko nang mag-recharge."
  },
  "Red flag": {
    "word": "Red flag",
    "definition": "Senyales ng problema o hindi magandang indikasyon sa isang relasyon o sitwasyon.",
    "etymology": "Ang terminong \"red flag\" ay may kasaysayang militar, kung saan ang pulang bandila ay ginagamit bilang babala sa panganib o upang ipahiwatig ang walang awang labanan. Sa modernong konteksto, ito ay ginagamit upang tukuyin ang mga babala o senyales ng potensyal na problema sa isang tao o sitwasyon.",
    "partOfSpeech": "Pangngalan",
    "example": "Red flag 'yung laging hindi nagre-reply sa messages."
  },
  "Reels": {
    "word": "Reels",
    "definition": "Maikling at nakakaaliw na mga video, karaniwan sa social media",
    "etymology": "Isang tampok na inilunsad ng Instagram noong Agosto 2020 bilang tugon sa kasikatan ng TikTok. Ito ay nagbibigay-daan sa mga gumagamit na lumikha at magbahagi ng maikling video na may musika at iba't ibang epekto.",
    "partOfSpeech": "Pangngalan",
    "example": "Teh, nakita ko 'yung reels mo kagabi—ang aesthetic, parang pang-IG model!"
  },
  "Rejected": {
    "word": "Rejected",
    "definition": "Binalewala o nabasted",
    "etymology": "Nagmula sa Latin na \"rejectus,\" na nangangahulugang \"itinaboy\" o \"tinanggihan.\" Sa modernong slang, ito ay tumutukoy sa pagtanggi, lalo na sa konteksto ng romantikong interes o aplikasyon.",
    "partOfSpeech": "pang-uri",
    "example": "Nag-DM siya tapos hindi sinagot? Rejected, baks. Move on na."
  },
  "Rent free": {
    "word": "Rent free",
    "definition": "Tumutukoy sa isang bagay o taong patuloy na nasa isip mo kahit hindi mo gusto.",
    "etymology": "Ang pariralang ito ay unang ginamit ni Eppie Lederer (Ann Landers) noong 1990s, na nagsabing \"Hanging onto resentment is letting someone you despise live rent-free in your head.\" Ito ay naging popular sa internet noong 2018, na ginagamit upang ilarawan ang isang bagay o taong patuloy na nasa isip ng isang tao kahit hindi nila gusto.",
    "partOfSpeech": "pang-abay",
    "example": "Yung sinabi niya last week? Still living rent free sa utak ko hanggang ngayon."
  },
  "Resibo": {
    "word": "Resibo",
    "definition": "Ebidensya o patunay sa isang pahayag o akusasyon.",
    "etymology": "Nagmula sa salitang Kastila na \"recibo,\" na nangangahulugang \"resibo\" o \"resibo ng bayad.\" Sa konteksto ng social media sa Pilipinas, ito ay ginagamit upang humingi o magpakita ng ebidensya o patunay sa isang pahayag o akusasyon.",
    "partOfSpeech": "Pangngalan",
    "example": "Huwag kang mag-deny, girl. May resibo akong screenshot. G ka?"
  },
  "Respect begets respect": {
    "word": "Respect begets respect",
    "definition": "Kasabihan na nangangahulugang kung magbibigay ka ng respeto, rerespetuhin ka rin.",
    "etymology": "Ang kasabihang ito ay batay sa prinsipyo na ang pagbibigay ng respeto ay magbubunga rin ng pagtanggap ng respeto mula sa iba. Ang salitang \"begets\" ay nangangahulugang \"nagbubunga\" o \"nagiging sanhi,\" kaya't ang buong parirala ay nagpapahiwatig na ang respeto ay nagdudulot ng kapwa respeto.",
    "partOfSpeech": "Pangungusap (binubuo ng mga pandiwa, pangngalan)",
    "example": "Kung ayaw mong ma-bash, matuto kang gumalang. Respect begets respect, bes."
  },
  "Retsam": {
    "word": "Retsam",
    "definition": "Ito ay ang salitang \"master\" na binaybay nang paurong. Maaaring gamitin ito sa isang mapaglarong o ironikong paraan.",
    "etymology": "Isang halimbawa ng backslang, kung saan ang salitang \"master\" ay binaybay nang paurong. Ginamit ito noong huling bahagi ng ika-19 na siglo sa mga informal na usapan, lalo na sa mga tindahan, upang palihim na tukuyin ang \"boss\" o \"manager.",
    "partOfSpeech": "pangngalan",
    "example": "Si kuya sobrang galing sa ML, parang retsam na ng buong barangay."
  },
  "Ride or die": {
    "word": "Ride or die",
    "definition": "Tumutukoy sa isang taong napakatapat at susuporta sa iyo sa anumang sitwasyon.",
    "etymology": "Nagmula sa American street slang na nangangahulugang matatag na pagsuporta sa isang tao o bagay kahit ano pa ang mangyari.",
    "partOfSpeech": "Parirala",
    "example": "Siya ang aking ride or die, palagi kaming nagtutulungan sa kahit anong pagsubok."
  },
  "Rigged": {
    "word": "Rigged",
    "definition": "Hindi patas o may dayaan.",
    "etymology": "Galing sa salitang Ingles na “to rig,” na ibig sabihin ay mandaya o manipulahin para mapaboran ang isang panig.",
    "partOfSpeech": "pang-uri",
    "example": "Pakiramdam ko ay rigged ang paligsahan kaya hindi patas ang resulta."
  },
  "Rizz": {
    "word": "Rizz",
    "definition": "Isang balbal na salita na nangangahulugang charisma o romantic appeal",
    "etymology": "Hango sa salitang “charisma,” tumutukoy sa kakayahang makaakit o magpahanga ng iba.",
    "partOfSpeech": "Pangngalan",
    "example": "May rizz siya kaya maraming humahanga sa kanya."
  },
  "Rizzler": {
    "word": "Rizzler",
    "definition": "Ito ay isang tao na may malakas na \"rizz\" o kakayahang humanga at akitin ang iba.",
    "etymology": "Deribatibo ng “rizz,” nangangahulugang taong may mataas na antas ng charisma o charm.",
    "partOfSpeech": "Pangngalan",
    "example": "Siya ang pinaka-rizzler sa aming barkada"
  },
  "Roast": {
    "word": "Roast",
    "definition": "Ito ay isang uri ng komedya kung saan ang isang tao ay binibiro o tinutukso sa isang mapaglarong paraan ng kanilang mga kaibigan o kasamahan.",
    "etymology": "Ingles na slang na nangangahulugang panunuya o pagbibiro nang may halong pangungutya.",
    "partOfSpeech": "Pandiwa",
    "example": "Naka-roast siya ng sobra sa party kaya natawa lahat."
  },
  "Run": {
    "word": "Run",
    "definition": "Tumakas",
    "etymology": "Nagmula ito sa meme na may background na salitang \"run\" na ang ibig sabihin ay takbo o tumakas. Nauso ito dahil may sound effects itong parang hinahabol na karaniwang ginagamit sa mga bidyo na nakakatawa (meme)",
    "partOfSpeech": "pandiwa",
    "example": "Tara, run tayo sa tindahan bago magsara."
  },
  "Rush": {
    "word": "Rush",
    "definition": "Nagmamadali",
    "etymology": "Ingles na slang na ibig sabihin ay pagmamadali.",
    "partOfSpeech": "pandiwa",
    "example": "Huwag mong i-rush ang desisyon mo, mag-isip ka muna nang mabuti."
  },
  "Salty": {
    "word": "Salty",
    "definition": "bitter",
    "etymology": "Ingles na slang na ibig sabihin ay mainis o masungit dahil sa pagkatalo o pagkadismaya.",
    "partOfSpeech": "Pang-uri",
    "example": "Ang salty naman, natalo lang e."
  },
  "Savage": {
    "word": "Savage",
    "definition": "Matapang o walang takot",
    "etymology": "Slang na nangangahulugang matapang, walang pakundangan, o matalim ang salita.",
    "partOfSpeech": "pang-uri",
    "example": "Grabe! ang savage talaga nya maglaro."
  },
  "Secure the bag": {
    "word": "Secure the bag",
    "definition": "Nakuha o nakamit ang isang inaasam na bagay",
    "etymology": "Parirala sa slang na nangangahulugang kumita ng pera o makuha ang mahalagang bagay.",
    "partOfSpeech": "parirala",
    "example": "Ginawa niya ang lahat para ma-secure ang bag sa kanyang negosyo."
  },
  "shade": {
    "word": "shade",
    "definition": "Subtle na pagpapakita ng pagkamuhi o panghuhusga sa isang tao—minsan ginagamit bilang \"throwing shade.\"",
    "etymology": "Slang mula sa African American Vernacular English (AAVE) na ibig sabihin ay panunuya nang hindi diretso.",
    "partOfSpeech": "Pangngalan / Pandiwa",
    "example": "Nag-throw siya ng shade sa kanyang kaaway sa harap ng lahat."
  },
  "Sheesh": {
    "word": "Sheesh",
    "definition": "Pag-hype sa isang tao, pagkabigla o ‘di makapaniwala—tipong ‘wow!’ moment.",
    "etymology": "Salitang padamdam na nagpapahayag ng paghanga o pagkabigla, popular sa social media.",
    "partOfSpeech": "Padamdam",
    "example": "Sheesh! Ang galing niya sa sayaw!"
  },
  "Shook": {
    "word": "Shook",
    "definition": "Gulat na gulat o napatulala sa pagkagulat",
    "etymology": "Slang na nangangahulugang sobrang nagulat o nabigla.",
    "partOfSpeech": "Pang-uri",
    "example": "Shook ako nang marinig ko ang balita."
  },
  "shooketh": {
    "word": "shooketh",
    "definition": "Grabe ang pagkagulat. Mas pina-OA na ekspresyon ng salitang shook.",
    "etymology": "Mas pinalaking bersyon ng “shook,” kadalasang ginagamit nang pabiro o bilang meme.",
    "partOfSpeech": "Pang-uri",
    "example": "Shooketh ako sa twist ng pelikula!"
  },
  "Shoutout": {
    "word": "Shoutout",
    "definition": "Paghingi ng pagbati mula sa isang tao o pagtawag ng pansin",
    "etymology": "Salitang Ingles na ibig sabihin ay pasasalamat o pagbibigay ng pagkilala sa isang tao o grupo.",
    "partOfSpeech": "pangngalan",
    "example": "Shoutout sa lahat ng tumulong sa event!"
  },
  "Sigma": {
    "word": "Sigma",
    "definition": "Yung tipong alpha vibes pero chill—hindi kailangan ng validation, pero lahat nakatingin sa kanya. Astig, leader-type, sariling diskarte.",
    "etymology": "Mula sa konsepto ng “Sigma male,” isang taong independent at hindi sumusunod sa mga social norms, naging meme sa internet.",
    "partOfSpeech": "pangngalan",
    "example": "Sigma siya dahil ayaw niyang makisawsaw sa chismis."
  },
  "Simp": {
    "word": "Simp",
    "definition": "Sobrang sunud-sunuran o sobra ang ginagawa para sa taong gusto nila.",
    "etymology": "Slang na tumutukoy sa taong sobra ang pag-aalaga o pagsunod sa isang tao kahit na hindi siya pinapahalagahan.",
    "partOfSpeech": "Pangngalan",
    "example": "Sobrang simp siya sa crush niya kaya lagi siyang tinatanggihan"
  },
  "Sis": {
    "word": "Sis",
    "definition": " In short for sister. A friendly callname. Madalas din itong kasingkahulugan ng mga salitang sissy, o te.",
    "etymology": "Galing sa salitang “sister,” ginagamit bilang tawag sa kaibigan o kapamilya, madalas sa LGBTQ+ community at millennial slang.",
    "partOfSpeech": "Pangngalan",
    "example": "Sis, ang ganda ng outfit mo ngayon!"
  },
  "Skibidi": {
    "word": "Skibidi",
    "definition": "Ang 'Skibidi' ay nangangahulugang good, bad, cool, at nagmula sa sikat na YouTube series na tinatawag na 'Skibidi Toilet' na ginawa ng animator na si Alexey Gerasimov. Karamihan sa mga video ay nagpapakita ng mga inidoro na may ulo ng mga matatandang lalaki na umiikot at nagsasalita habang kumakanta ng mga kanta.",
    "etymology": "Nagmula sa kantang \"Skibidi\" ng Russian band na Little Big. Naging viral dahil sa kakaibang sayaw at muling sumikat sa TikTok at YouTube Shorts.",
    "partOfSpeech": "pandiwa",
    "example": " Nag-skibidi dance pa siya sa harap ng crush niya, tapos nagtawanan lahat!"
  },
  "Skibidi ohio rizz": {
    "word": "Skibidi ohio rizz",
    "definition": "Sinasabi sa isang tao na may weirdo ang datingan o katangian",
    "etymology": "Pagsasama ng \"Skibidi,\" \"Ohio\" (tumutukoy sa mga kabalbalan o kakaibang bagay), at \"Rizz\" (kakayahang makabighani). Ginagamit sa biro o meme.",
    "partOfSpeech": "Pangngalan",
    "example": "Yung moves niya? Skibidi Ohio Rizz na ‘yan, lahat napalingon!"
  },
  "Skibidi rizz": {
    "word": "Skibidi rizz",
    "definition": "Yung pa-charming moves ng lalaking Skibidi Toilet para mapansin siya ng babaeng Skibidi Toilet—classic Skibidi riz . Galing 'to sa viral animated series na 'Skibidi Toilet' sa YouTube.",
    "etymology": "Kombinasyon ng Skibidi at Rizz; mas exaggerated o OA na charm.",
    "partOfSpeech": "pangngalan",
    "example": "Skibidi Rizz ang gamit mo? Grabe ka naman magpakilig."
  },
  "Skibidi toilet": {
    "word": "Skibidi toilet",
    "definition": "Isa itong YT series at dito nagmula ang salitang “skibidi”",
    "etymology": "Galing sa YouTube Shorts series na nagpapakita ng mga toilets na may ulo na kumakanta ng “Skibidi.” Absurd at katawa-tawang konsepto.",
    "partOfSpeech": "pangngalan",
    "example": " Yung pinsan ko, buong araw nanonood ng Skibidi Toilet, parang na-hypnotize na."
  },
  "Skrtt": {
    "word": "Skrtt",
    "definition": "Pagpapakit ng angas",
    "etymology": "Tunog ng gulong na nagpepreno. Gamit sa hip-hop para ipakita ang bilis o pagka-cool.",
    "partOfSpeech": "pandiwa",
    "example": "Nag-skrrt palabas ng GC, wala man lang paalam."
  },
  "Sksksk": {
    "word": "Sksksk",
    "definition": "Isang ekspresyong ginagamit kapag nasasabik o tumatawa ang isang tao",
    "etymology": "Random letters na ginagamit para ipakita ang tawa o kilig. Galing sa VSCO girl trend.",
    "partOfSpeech": "pang-ugnay",
    "example": "Sksksk grabe ka, kinilig ako sa sinabi mo!"
  },
  "slaps": {
    "word": "slaps",
    "definition": "May magandang taste sa kanta/awitin o sa mga bagay na hilig ng tao.",
    "etymology": "Galing sa English slang na nangangahulugang “sobrang ganda” o “astig” lalo na sa musika o pagkain. Ginagamit para ipakita na bagay na bagay o swak ang isang bagay.",
    "partOfSpeech": "Pandiwa / Pang-uri",
    "example": "Grabe ‘tong bagong kanta nila, slaps talaga!"
  },
  "Slay": {
    "word": "Slay",
    "definition": "Nagmula sa salitang “Slayable\". Ito ang pinaikling paraan ng pagsasabi na magaling o kahanga-hanga ang ginawa ng isang tao. Ginagamit ito kapag may isang taong sobrang galing o bumida sa isang bagay.",
    "etymology": "Dati nangangahulugang “pumatay”; ngayon ibig sabihin ay “nagpakitang gilas” o “nagstand-out.”",
    "partOfSpeech": "pandiwa",
    "example": "Slay ka today, sis! Laban na laban ang outfit mo!”"
  },
  "Slayable": {
    "word": "Slayable",
    "definition": "Dito hinango ang slang word na “slay” na nangangahulugang paraan ng pagsasabi na magaling o kahanga-hanga ang ginawa ng isang tao. Ginagamit ito kapag may isang taong sobrang galing o bumida sa isang bagay.",
    "etymology": "Nagmula sa salitang “slay,” ginagamit para ilarawan ang bagay o tao na sobrang ganda o astig.",
    "partOfSpeech": "pang-uri",
    "example": "Ang ganda ng ayos niya, slayable talaga!"
  },
  "sleeper": {
    "word": "sleeper",
    "definition": "Hindi inaasahang magaling pala o tinatawag na underrated na sitwasyon, tao, o karanasan",
    "etymology": "Nagmula sa “sleeper hit,” isang bagay na hindi inaasahan pero sobrang galing.",
    "partOfSpeech": "pangngalan",
    "example": "Di ko inakalang ang ganda ng pelikulang ‘yon—total sleeper!"
  },
  "snack": {
    "word": "snack",
    "definition": "tawag sa gwapo o maganda",
    "etymology": "",
    "partOfSpeech": "pangngalan",
    "example": "OMG, ang pogi niya—literal na snack!"
  },
  "Snatched / Snatched my wig": {
    "word": "Snatched / Snatched my wig",
    "definition": "Napakaganda o napakagwapo at sobrang astig ng dating",
    "etymology": "“Snatched” ibig sabihin ay perfect na look; “snatched my wig” ay reaksyon ng sobrang gulat o paghanga. Galing sa drag culture.",
    "partOfSpeech": "parirala",
    "example": "Snatched ang makeup niya—parang artista!” / “Ang performance niya? Wig snatched!"
  },
  "Snitch": {
    "word": "Snitch",
    "definition": "Impostor, peke, taga-sumbong, o taong madalas manlaglag ng impormasyon mula sa isang grupo.",
    "etymology": "Galing sa English slang na nangangahulugang taong nagtuturo o nagsasabi ng sikreto o lihim ng iba, kadalasan sa kapangyarihan o awtoridad.",
    "partOfSpeech": "Pangngalan",
    "example": "Huwag kang snitch kung ayaw mong mapahiya."
  },
  "Sobrang latina": {
    "word": "Sobrang latina",
    "definition": "sobrang ganda",
    "etymology": "",
    "partOfSpeech": "Pang-uri",
    "example": "Nakita ko kanina si Fyang, sobrang latina!"
  },
  "Sobrang sarap": {
    "word": "Sobrang sarap",
    "definition": "Isang papuri sa isang tao dahil sobrang ganda ng hitsura o aura niya.",
    "etymology": "",
    "partOfSpeech": "pang-uri",
    "example": "Sobrang sarap mo naman kanina, talaga ng ginalingan ang pag-rampa."
  },
  "Sobrang sikip / shikip": {
    "word": "Sobrang sikip / shikip",
    "definition": "Isang papuri sa isang tao dahil sobrang ganda niya o dahil ginalingan niya.",
    "etymology": "",
    "partOfSpeech": "pang-uri",
    "example": "Sobrang shikip ni Fyang kanina, sobrang ganda at puti."
  },
  "Solid": {
    "word": "Solid",
    "definition": "Napakaganda o mataas ang kalidad, sobrang galing, sobrang angas, sobrang pulido",
    "etymology": "Filipino slang na ibig sabihin ay “astig,” “matatag,” o “hindi matitinag.”",
    "partOfSpeech": "pang-uri",
    "example": "Solid ‘yung barkada namin—walang iwanan."
  },
  "Sped": {
    "word": "Sped",
    "definition": "Tawag sa taong bobo o hindi marunong",
    "etymology": "Pinaikli para sa “special ed,” ginagamit sa panlalait noon. Ngayon ay kinokonsidera nang offensive.",
    "partOfSpeech": "pang-uri",
    "example": "Wag mong sabihin ‘yon, medyo sped na ang dating."
  },
  "Star, star": {
    "word": "Star, star",
    "definition": "mapaglarong ekspresyon na ginagamit para bigyang-diin na ang isang bagay o tao ay nagniningning o kahanga-hanga—parang bituin! Para itong pagsasabi ng, \"Ang galing mo!\" o \"Panalo ka!\"",
    "etymology": "Ginagamit bilang papuri para sa taong napaka-galing o standout, mula sa English word “star.",
    "partOfSpeech": "Pang-uri",
    "example": "Ay, star, star ka talaga sa ganyang presentation!"
  },
  "Straw": {
    "word": "Straw",
    "definition": "OA o nakakatawang paraan ng pagsasabi ng sumosobra ka na! Pero hindi ito galit — madalas ito'y biro o papuri sa sobrang aliw, ganda, o kakulitan ng isang tao.",
    "etymology": "Galing sa Filipino online slang na nangangahulugang “sumisipsip” o nagpapanggap na loyal sa isang tao o grupo pero sa totoo’y ginagamit lang.",
    "partOfSpeech": "Pangngalan / Pang-uri",
    "example": "Huwag kang straw, maging totoo ka sa sarili mo.”"
  },
  "Sus": {
    "word": "Sus",
    "definition": "Nangangahulugang kahina-hinala o kaduda-duda",
    "etymology": "Pinaikli para sa “suspicious”; sumikat dahil sa Among Us game.",
    "partOfSpeech": "pang-uri",
    "example": "Bakit ka pa nagtatago? Sus na ‘yan!"
  },
  "Tea": {
    "word": "Tea",
    "definition": "Bagong balita o chismis",
    "etymology": "Mula sa gay/drag culture; \"tea\" ay nangangahulugang \"truth\" o tsismis.",
    "partOfSpeech": "Pangngalan",
    "example": "Bes, spill the tea! Anong nangyari kagabi?"
  },
  "Teluk": {
    "word": "Teluk",
    "definition": "Binaliktad na salitang “kulet” na ang ibig sabihin ay makulit",
    "etymology": "Mula sa salitang \"kulit\" na pinalitan  ang letrang I ng E at binaliktad ang salita",
    "partOfSpeech": "pang-uri",
    "example": "Kawawa yung bata kanina, nadapa ang teluk kasi."
  },
  "thirst trap": {
    "word": "thirst trap",
    "definition": "Isang panunuksong litrato o video na ipinost online para makakuha ng atensyon.",
    "etymology": "Social media term na tumutukoy sa photo/video na sinadyang maging attractive para makakuha ng attention (lalo na romantic/sexual).",
    "partOfSpeech": "Pangngalan",
    "example": "Nag-post siya ng gym selfie — thirst trap yarn?"
  },
  "thirsty": {
    "word": "thirsty",
    "definition": "Sabik na sabik o desperado sa pansin o atensyon",
    "etymology": "Slang para sa mga taong uhaw sa atensyon",
    "partOfSpeech": "Pang-uri",
    "example": "Thirsty masyado sa comments, nakakahiya na."
  },
  "Toma toma": {
    "word": "Toma toma",
    "definition": "isang aksyon na sinayaw ng isang ML player",
    "etymology": "Nagmula sa mga online games gaya ng ML",
    "partOfSpeech": "pandiwa",
    "example": ""
  },
  "Tralalero tralala": {
    "word": "Tralalero tralala",
    "definition": "lyrics ito mula sa viral na bidyo sa internet kung saan may kumakantang ai generated na shark na nakasapatos",
    "etymology": "Isang playful na expression o onomatopoeic na ginagamit kapag nagpapasaya o nagkakatuwaan, parang tunog ng kanta o kalokohan. Minsan ginagamit para ipakita na walang iniintinding problema.",
    "partOfSpeech": "Parirala (expression)",
    "example": "Tralalero tralala, go lang kahit ano ang sabihin nila!"
  },
  "Tss": {
    "word": "Tss",
    "definition": "tunog o ekspresyong ginagamit kapag naiinis, naaasar, o parang hindi naniniwala. Para itong maikling buntong-hininga o tunog ng pagkadismaya o inis",
    "etymology": "Tunog ng pagkairita o panglalait, ginagamit online o sa text/chat.",
    "partOfSpeech": "Interjection",
    "example": "Tss, kala mo kung sinong magaling."
  },
  "twin / twinning": {
    "word": "twin / twinning",
    "definition": "Nangangahulugang matalik na kaibigan. Magkasundo sa iba’t ibang bagay. Magkapareho.",
    "etymology": "Galing sa salitang “twin” pero ginagamit kapag may ka-matching na outfit, vibe, o aura.",
    "partOfSpeech": "Pangngalan / Pandiwa",
    "example": "Matching kayo ng outfit? Twin yarn!"
  },
  "uncanny": {
    "word": "uncanny",
    "definition": "Nakakakilabot, kakaiba, o parang sobrang hindi normal.",
    "etymology": "Ginagamit para ilarawan ang sobrang realistiko o nakakatakot na pagkakahawig ng bagay, madalas sa AI filters.",
    "partOfSpeech": "Pang-uri",
    "example": "Grabe ‘yung filter niya, uncanny levels na!"
  },
  "Understood the assignment": {
    "word": "Understood the assignment",
    "definition": "Alam na alam ang gagawin o tamang-tama ang ginawa",
    "etymology": "Slang phrase na nangangahulugang nagampanan ng buo ang isang gawain sa sobrang husay.",
    "partOfSpeech": "Parirala",
    "example": "Grabe ‘yung outfit niya—she understood the assignment!"
  },
  "Unlimited": {
    "word": "Unlimited",
    "definition": "Tawag kapag paulit ulit sinasabi ang isang salita o parirala",
    "etymology": "Patawa o sarcastic na gamit sa mga bagay na sobra o paulit-ulit (hal. unlimited arte, drama, hugot).",
    "partOfSpeech": "Pang-uri",
    "example": "Unlimited ang kaartehan niya sa event na ‘to."
  },
  "Vibe": {
    "word": "Vibe",
    "definition": "Yung vibe ng paligid o eksena—kung chill ba, tense, o biglang may kakaibang energy",
    "etymology": "Galing sa salitang Ingles na “vibration,” ginagamit para tukuyin ang damdamin, pakiramdam, o aura ng isang tao, lugar, o sitwasyon.",
    "partOfSpeech": "Pangngalan",
    "example": "Ang ganda ng vibe dito sa party, sobrang saya ng lahat."
  },
  "Vibe check": {
    "word": "Vibe check",
    "definition": "Pag-tsek ng mood o pagsusuri ng pakiramdam sa paligid",
    "etymology": " Popular sa social media, tumutukoy sa pagsilip o pagtatanong kung kumportable o ayos ba ang pakiramdam o mood ng tao o grupo.",
    "partOfSpeech": "Parirala",
    "example": "Vibe check! Kumusta ang araw niyo?"
  },
  "vibin'": {
    "word": "vibin'",
    "definition": "Chill lang o relax sa pakikinig ng kanta/awitin o anumang nakakaganda ng mood",
    "etymology": "Galing sa English “vibe” na ibig sabihin ay relaxed o enjoy sa mood, lugar, o kausap.",
    "partOfSpeech": "Pandiwa / Pang-uri",
    "example": "Chill lang tayo dito, vibin' tayo"
  },
  "W": {
    "word": "W",
    "definition": "(in capital letter) means winning",
    "etymology": "Pinaikli para sa “win” o tagumpay. Madalas gamitin sa social media.",
    "partOfSpeech": "pangngalan",
    "example": "Nag-top ako sa quiz? W na W!”"
  },
  "Wakey wakey": {
    "word": "Wakey wakey",
    "definition": "Slang term for wake up or it means bumangon ka na.",
    "etymology": "Galing sa English phrase na “wake up,” pero pinalambot o pina-cute bilang “wakey wakey.” Madalas gamitin sa social media bilang pambati sa paggising o pagising sa isang isyu o balita.",
    "partOfSpeech": "Interjection",
    "example": "Wakey wakey! Oras na para mag-aral!"
  },
  "what the sigma?": {
    "word": "what the sigma?",
    "definition": "maihahalintulad sa skibidi sapagkat wala itong direktang pagpapakahulugan madalas itong ipinapalit sa pariralang ” What the heck?\"",
    "etymology": "Galing sa “sigma male” stereotype; ginagamit sa meme context bilang parody o sarcasm.",
    "partOfSpeech": "parirala/ pang-ugnay",
    "example": "Nag-walkout siya para lang bumili ng kape? What the sigma??"
  },
  "Why so serious?": {
    "word": "Why so serious?",
    "definition": "Pabirong paraan ng pagsasabi na, 'Bro, relax lang… huwag mo masyadong seryosohin.",
    "etymology": "",
    "partOfSpeech": "parirala",
    "example": "Why so serious bro, chill lang tayo."
  },
  "Wi wi wi cat": {
    "word": "Wi wi wi cat",
    "definition": "Isang meme na hango sa isang sound na sumikat sa tiktok, ang video ng isang pusa na kumakain sa bowl.",
    "etymology": "Meme batay sa video ng pusa na parang umiiyak habang umiihi. Ginagamit para ipahayag drama o discomfort.",
    "partOfSpeech": "Pangngalan/ parirala",
    "example": "Wi wi wi cat moment ‘to—basa na ulit sapatos ko."
  },
  "Wlw / wuhluhwuh": {
    "word": "Wlw / wuhluhwuh",
    "definition": "nangangahulugang women loving women.Ito ay terminong ginagamit para ilarawan ang romantic o sexual attraction ng isang babae sa kapwa babae",
    "etymology": "“WLW” ay acronym ng “Women Loving Women,” ginagamit sa LGBTQ+ community. “Wuhluhwuh” naman ay onomatopoeic na expression ng excitement o agreement, popular sa queer spaces sa social media.",
    "partOfSpeech": "Acronym / Interjection",
    "example": "Siya ay proud WLW, strong and proud."
  },
  "woke": {
    "word": "woke",
    "definition": "Gising sa katotohanan o may malasakit sa lipunan o realidad.",
    "etymology": "African-American Vernacular English (AAVE); dating ibig sabihin ay \"socially aware.\"",
    "partOfSpeech": "pang-uri",
    "example": "Hindi ka lang aware, woke na woke ka!"
  },
  "Womp womp": {
    "word": "Womp womp",
    "definition": "Slang sound effect para maipahayag ang pagkadismaya, o kaya naman ginagamit itong eskpresyon kap ag ang isang tao ay nagkamali sa nakakatawang paraan. Sa meme o tiktok na kultura naman, ito ay binibigyang pagpapakahulugan o idinudugtong ito sa mga parirala kapag ang isang tao ay napahiya o natalo, sinasabi ito sa sarcastic way.",
    "etymology": "Tunog na nagpapahiwatig ng disappointment o sablay, mula sa cartoons.",
    "partOfSpeech": "Padamdam",
    "example": "Nag-effort pa ako pero wala, womp womp talaga."
  },
  "Yap / yapping": {
    "word": "Yap / yapping",
    "definition": "madaldal, maingay, nagkukwento",
    "etymology": "Mula sa tunog ng tahol ng aso; ginagamit sa taong madaldal o makulit.",
    "partOfSpeech": "pandiwa",
    "example": "Tumigil ka na sa kayayap, nakaka-stress ka na."
  },
  "Yarn": {
    "word": "Yarn",
    "definition": "Slang word ng salitang  “’yan” o “iyan”",
    "etymology": "Local slang o internet meme-based expression sa Pilipinas. Galing sa salitang “iyan,” ginawang nakakatawang porma—madalas ginagamit nang may kasamang kilig, inis, o hirit.",
    "partOfSpeech": "Padamdam / Pangkatawan na tanong",
    "example": "Nag-uusap na ulit kayo? Kilig yarn?"
  },
  "yas / yas gurl": {
    "word": "yas / yas gurl",
    "definition": "mula sa ingles na salitang 'yes'",
    "etymology": "Galing sa LGBTQ+ ballroom culture; \"yas\" ay emphatic version ng \"yes.\"",
    "partOfSpeech": "pang-ugnay",
    "example": "Yas gurl! Slay that outfit!"
  },
  "Yassify": {
    "word": "Yassify",
    "definition": "pagpapaganda nang todo, madalas gumamit ng iba't ibang filter o edit.",
    "etymology": "Galing sa salitang “Yas!” (expression of approval), at naging meme noong 2021 kung saan ang mga larawan ay pino-Photoshop para magmukhang glamorosa o overly beautified.",
    "partOfSpeech": "pandiwa",
    "example": "Na-yassify ko ‘yung profile pic ko kagabi, mukha na akong beauty queen!"
  },
  "Yeet": {
    "word": "Yeet",
    "definition": "Excited o maraming energy",
    "etymology": "Nagsimulang slang sa Vine noong 2014 bilang pagsigaw habang nagtatapon ng bagay; kalaunan, naging expression ng energy, excitement, o pagtapon.",
    "partOfSpeech": "Pandiwa / Pang-ugnay (depende sa gamit)",
    "example": "Na-yeet ko ‘yung bola sa sobrang lakas ng tira ko!"
  },
  "yike / yikes": {
    "word": "yike / yikes",
    "definition": "pagpapakita o pagpapahayag ng gulat o disapproval sa nakakatawa o nakakahiya.",
    "etymology": "Expression ng gulat, hiya, o secondhand embarrassment.",
    "partOfSpeech": "Padamdam",
    "example": "Yikes, ‘di niya alam na naka-live siya!"
  },
  "you ate that": {
    "word": "you ate that",
    "definition": "Magaling mong nagawa ang isang bagay o ang ganda ng hitsura mo .",
    "etymology": "Nagmula sa African American Vernacular English (AAVE); \"ate\" ay metaphorical na nangangahulugang “magaling” o “bongga ang performance.”",
    "partOfSpeech": "Pandiwa",
    "example": "Girl, you ate that choreography! No crumbs left!"
  },
  "Yung claustrophobia ko": {
    "word": "Yung claustrophobia ko",
    "definition": "Isang ekspresyon na sinasabi kapag masikip ang isang lugar o nasisikipan ang isang tao",
    "etymology": "Galing sa literal na salitang “claustrophobia” pero ginamit sa sarcastic way sa TikTok PH para ipahayag discomfort, cringe, o exaggeration.",
    "partOfSpeech": "Parirala",
    "example": "Yung claustrophobia ko when I saw her outfit…"
  },
  "zang": {
    "word": "zang",
    "definition": "hinaluan ang salitang “Dang!” kaya ito ay itinuturing na Taglish.",
    "etymology": "Colloquial intensifier na parang “dang” o “zowee”; ginagamit sa gaming at meme culture bilang biglang ekspresyon ng sorpresa o gulat.",
    "partOfSpeech": "Pang-abay",
    "example": ""
  },
  "Zesty": {
    "word": "Zesty",
    "definition": "Salitang ginagamit para ilarawan ang tao (kadalasan ay mga lalaki)kapag medyo malambot ang galaw, parang sassy, o masyadong expressive. Minsan, may \"pa-bading\" energy—pero hindi laging literal, kadalasan biro lang o term of endearment.",
    "etymology": "Dating literal na ibig sabihing “maanghang” o “malasa,” pero naging coded term sa queer/meme culture para ilarawan ang flamboyant o expressive na kilos ng isang lalaki.",
    "partOfSpeech": "pang-uri",
    "example": "Ang zesty niya sumayaw, parang ang lively at confident talaga!"
  }
};