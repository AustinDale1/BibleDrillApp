class ChildrenVerses {
    constructor() {
      this.kjvVerses = [
        { reference: 'Genesis 1:31', text: 'And God saw everything that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.'},
        { reference: 'Deuteronomy 16:17', text: 'Every man shall give as he is able, according to the blessings of the Lord thy God which he hath given thee.'},
        { reference: 'Joshua 24:24 ', text: 'And the people said unto Joshua, the Lord our God will we serve, and his voice will we obey.'},
        { reference: '1 Chronicles 16:9', text: 'Sing unto him, sing psalms unto him, talk ye of all his wondrous works'},
        { reference: '', text: ''},
      ];

      this.nivVerses = [
        { reference: "John 3:16", text: "For God so loved the world...", title: "God's Love" },
        { reference: "Genesis 1:1", text: "In the beginning God created...", title: "Creation" }
      ];
  
      
  
      this.keyPassages = [
        { front: 'God\'s Covenant with Abraham', back: 'Genesis 12:1-3'},
        { front: 'A Shepherd\'s Song', back: 'Psalm 23'},
        { front: 'The Suffering Servant', back: 'Isaiah 53'},
        { front: 'The Twelve Apostles', back: 'Matthew 10:2-4'},
        { front: 'The Resurrection of Jesus',  back: 'Matthew 28'},
        { front: 'The Parable of the Good Samaritan', back: 'Luke 10:25-37'},
        { front: 'Jesus\' First Miracle', back: 'John 2:1-11'},
        { front: 'The Work of the Holy Spirit', back: 'John 16:5-15'},
        { front: 'The Conversion of Saul', back: 'Acts 9:1-30'},
        { front: 'The Love Chapter', back: '1 Corinthians 13'},

      ];

    }
  
    getVersesByTranslation(translation) {
      switch (translation.toLowerCase()) {
        case 'kjv':
          return this.kjvVerses;
        case 'niv':
          return this.nivVerses;
        default:
          return [];
      }
    }
  
    getKeyPassages() {
      return this.keyPassages;
    }
  
  }
  
  export default ChildrenVerses;