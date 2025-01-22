class YouthVerses {
    constructor() {
      this.kjvVerses = ''


      this.esvVerses = ''

      this.csbVerses = ''
  

      this.kjvWordBank = ''

      this.esvWordBank = ''

      this.csbWordBank = ''

    }
  
    getVersesByTranslation(translation) {
      switch (translation.toLowerCase()) {
        case 'kjv':
          return this.kjvVerses;
        case 'esv':
          return this.esvVerses;
        case 'csb':
          return this.csbVerses;
        default:
          return ['fml'];
      }
    }
  


    getWordBank(translation) {
      switch (translation.toLowerCase()) {
        case 'kjv':
          return this.kjvWordBank;
        case 'esv':
          return this.esvWordBank;
        case 'csb':
          return this.csbWordBank;
        default:
          return [];
      }
    }
  
  }
  
  export default YouthVerses;