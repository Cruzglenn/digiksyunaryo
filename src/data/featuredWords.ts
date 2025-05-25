

import { detailedWordData } from './dictionary';

export const getCuratedFeaturedWords = (count: number = 6): string[] => {

  const importantWords = [
    'bayanihan',     
    'mabuhay',     
    'pagmamahal',   
    'kalayaan',      
    'pananagutan',  
    'kapwa',        
    'dangal',       
    'tiwala',      
    'paggalang',     
    'malasakit',     
    'pakikisama',   
    'hiya',          
    'utang na loob', 
    'bayan',         
    'pagkakaisa',    
    'damdamin',    
    'kapatiran',    
    'diwa',         
    'araw',        
    'kalikasan',  
    'kasaysayan', 
    'kagandahan',   
    'kasipagan',    
    'katapatan',    
  ];
  
  const availableWords = importantWords.filter(word => 
    Object.keys(detailedWordData).some(key => 
      key.toLowerCase() === word.toLowerCase()
    )
  );
  
  if (availableWords.length < count) {
    const additionalWords = Object.keys(detailedWordData)
      .filter(word => !availableWords.includes(word.toLowerCase()))
      .sort(() => 0.5 - Math.random())
      .slice(0, count - availableWords.length);
      
    return [...availableWords, ...additionalWords].slice(0, count);
  }

  return availableWords
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};
