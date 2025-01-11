class ChildrenVerses {
    constructor() {
      this.kjvVerses = [
        { front: 'Genesis 1:31', back: 'And God saw everything that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.'},
        { front: 'Deuteronomy 16:17', back: 'Every man shall give as he is able, according to the blessings of the Lord thy God which he hath given thee.'},
        { front: 'Joshua 24:24', back: 'And the people said unto Joshua, the Lord our God will we serve, and his voice will we obey.'},
        { front: '1 Chronicles 16:9', back: 'Sing unto him, sing psalms unto him, talk ye of all his wondrous works'},
        { front: 'end', back: 'end back'},
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

      this.wordBank = [
        'a', 'afraid', 'all', 'also', 'alway', 'am', 'among', 'and', 'approved',
        'are', 'as', 'ashamed', 'baptizing', 'be', 'before', 'behalf', 'behold',
        'believe', 'believers', 'beside', 'blessed', 'blessing', 'blessings', 'bring',
        'brother', 'but', 'by', 'charity', 'chosen', 'christ', 'come', 'commanded',
        'commandment', 'confess', 'conversation', 'dead', 'deceiving', 'disciples',
        'dividing', 'doers', 'dwelleth', 'end', 'enough', 'every', 'everything',
        'example', 'faith', 'father', 'favor', 'favour', 'for', 'from', 'ghost',
        'gift', 'give', 'given', 'go', 'God', 'gold', 'good', 'grace', 'had',
        'hast', 'hath', 'have', 'he', 'hearers', 'heart', 'heaven', 'here', 'him',
        'his', 'holy', 'hospitality', 'house', 'i', 'if', 'in', 'increased',
        'is', 'it', 'jesus', 'know', 'known', 'let', 'lo', 'lord', 'lost',
        'love', 'loveth', 'loving', 'made', 'man', 'may', 'me', 'meat',
        'men', 'might', 'mine', 'must', 'name', 'nations', 'needeth', 'neither',
        'none', 'not', 'now', 'observe', 'of', 'one', 'only', 'open',
        'other', 'our', 'out', 'own', 'people', 'peter', 'pour', 'prove',
        'purity', 'raised', 'rather', 'receive', 'rightly', 'room', 'said',
        'salvation', 'save', 'saved', 'saw', 'say', 'saying', 'seek', 'send',
        'serve', 'shall', 'shalt', 'shew', 'silver', 'sing', 'son', 'spirit',
        'storehouse', 'study', 'stature', 'teach', 'teaching', 'temple', 'than',
        'thanks', 'that', 'the', 'thee', 'their', 'them', 'then', 'there',
        'therefore', 'these', 'they', 'thine', 'this', 'thou', 'through', 'thy',
        'tithes', 'to', 'talk', 'trust', 'truth', 'under', 'unto', 'use',
        'very', 'voice', 'was', 'we', 'whereby', 'which', 'who', 'whom',
        'will', 'windows', 'wisdom', 'with', 'without', 'word', 'workman',
        'works', 'wondrous', 'worship', 'ye', 'you', 'young', 'your',
        'yourselves'
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

    getWordBank() {
      return this.wordBank;
    }
  
  }
  
  export default ChildrenVerses;