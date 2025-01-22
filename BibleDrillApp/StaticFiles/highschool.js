class HighschoolVerses {
    constructor() {
      this.kjvVerses = [
        {
          front: 'Genesis 1:31',
          back: 'And God saw everything that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.'
        },
        {
          front: 'Deuteronomy 16:17',
          back: 'Every man shall give as he is able, according to the blessings of the Lord thy God which he hath given thee.'
        },
        {
          front: 'Joshua 24:24',
          back: 'And the people said unto Joshua, the Lord our God will we serve, and his voice will we obey.'
        },
        {
          front: '1 Chronicles 16:9',
          back: 'Sing unto him, sing psalms unto him, talk ye of all his wondrous works.'
        },
        {
          front: 'Psalm 56:3',
          back: 'What time I am afraid, I will trust in thee.'
        },
        {
          front: 'Psalm 119:11',
          back: 'Thy word have I hid in mine heart, that I might not sin against thee.'
        },
        {
          front: 'Proverbs 22:1',
          back: 'A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.'
        },
        {
          front: 'Isaiah 6:8',
          back: 'Also I heard the voice of the Lord, saying, Whom shall I send, and who will go for us? Then said I, Here am I; send me.'
        },
        {
          front: 'Isaiah 45:5',
          back: 'I am the Lord, and there is none else, there is no God beside me: I girded thee, though that hast not known me.'
        },
        {
          front: 'Malachi 3:10',
          back: 'Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of Hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.'
        },
        {
          front: 'Matthew 28:19-20',
          back: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world.'
        },
        {
          front: 'Luke 2:52',
          back: 'And Jesus increased in wisdom and stature, and in favor with God and man.'
        },
        {
          front: 'Luke 19:10',
          back: 'For the Son of man is come to seek and to save that which was lost.'
        },
        {
          front: 'John 4:24',
          back: 'God is a Spirit: and they that worship him must worship him in spirit and in truth.'
        },
        {
          front: 'John 13:35',
          back: 'By this shall all men know that ye are my disciples, if ye have love one to another.'
        },
        {
          front: 'Acts 4:12',
          back: 'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.'
        },
        {
          front: 'Romans 10:9',
          back: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.'
        },
        {
          front: '1 Corinthians 3:16',
          back: 'Know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you?'
        },
        {
          front: 'Ephesians 2:8',
          back: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.'
        },
        {
          front: '1 Thessalonians 5:18',
          back: 'In every thing give thanks: for this is the will of God in Christ Jesus concerning you.'
        },
        {
          front: '1 Timothy 4:12',
          back: 'Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.'
        },
        {
          front: '2 Timothy 2:15',
          back: 'Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.'
        },
        {
          front: 'James 1:22',
          back: 'But be ye doers of the word, and not hearers only, deceiving your own selves.'
        },
        {
          front: '1 Peter 4:9',
          back: 'Use hospitality one to another without grudging.'
        },
        {
          front: '1 John 4:21',
          back: 'And this commandment have we from him, that he who loveth God love his brother also.'
        }
      ];

      this.esvVerses = [
        {
          front: 'Genesis 1:31',
          back: 'And God saw everything that he had made, and behold, it was very good. And there was evening and there was morning, the sixth day.'
        },
        {
          front: 'Deuteronomy 16:17',
          back: 'Every man shall give as he is able, according to the blessing of the LORD your God that he has given you.'
        },
        {
          front: 'Joshua 24:24',
          back: 'And the people said to Joshua, "The LORD our God we will serve, and his voice we will obey."'
        },
        {
          front: '1 Chronicles 16:9',
          back: 'Sing to him, sing praises to him; tell of all his wondrous works!'
        },
        {
          front: 'Psalm 56:3',
          back: 'When I am afraid, I put my trust in you.'
        },
        {
          front: 'Psalm 119:11',
          back: 'I have stored up your word in my heart, that I might not sin against you.'
        },
        {
          front: 'Proverbs 22:1',
          back: 'A good name is to be chosen rather than great riches, and favor is better than silver or gold.'
        },
        {
          front: 'Isaiah 6:8',
          back: 'And I heard the voice of the Lord saying, "Whom shall I send, and who will go for us?" Then I said, "Here I am! Send me."'
        },
        {
          front: 'Isaiah 45:5',
          back: 'I am the LORD, and there is no other, besides me there is no God; I equip you, though you do not know me.'
        },
        {
          front: 'Malachi 3:10',
          back: 'Bring the full tithe into the storehouse, that there may be food in my house. And thereby put me to the test, says the LORD of hosts, if I will not open the windows of heaven for you and pour down for you a blessing until there is no more need.'
        },
        {
          front: 'Matthew 28:19-20',
          back: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.'
        },
        {
          front: 'Luke 2:52',
          back: 'And Jesus increased in wisdom and in stature and in favor with God and man.'
        },
        {
          front: 'Luke 19:10',
          back: 'For the Son of Man came to seek and to save the lost.'
        },
        {
          front: 'John 4:24',
          back: 'God is spirit, and those who worship him must worship in spirit and truth.'
        },
        {
          front: 'John 13:35',
          back: 'By this all people will know that you are my disciples, if you have love for one another.'
        },
        {
          front: 'Acts 4:12',
          back: 'And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.'
        },
        {
          front: 'Romans 10:9',
          back: 'Because, if you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.'
        },
        {
          front: '1 Corinthians 3:16',
          back: 'Do you not know that you are God\'s temple and that God\'s Spirit dwells in you?'
        },
        {
          front: 'Ephesians 2:8',
          back: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.'
        },
        {
          front: '1 Thessalonians 5:18',
          back: 'Give thanks in all circumstances; for this is the will of God in Christ Jesus for you.'
        },
        {
          front: '1 Timothy 4:12',
          back: 'Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity.'
        },
        {
          front: '2 Timothy 2:15',
          back: 'Do your best to present yourself to God as one approved, a worker who has no need to be ashamed, rightly handling the word of truth.'
        },
        {
          front: 'James 1:22',
          back: 'But be doers of the word, and not hearers only, deceiving yourselves.'
        },
        {
          front: '1 Peter 4:9',
          back: 'Show hospitality to one another without grumbling.'
        },
        {
          front: '1 John 4:21',
          back: 'And this commandment we have from him: whoever loves God must also love his brother.'
        }
      ];

      this.csbVerses = [
        {
          front: 'Genesis 1:31',
          back: 'God saw all that He had made, and it was very good indeed. Evening came and then morning: the sixth day.'
        },
        {
          front: 'Deuteronomy 16:17',
          back: 'Everyone must appear with a gift suited to his means, according to the blessing the LORD your God has given you.'
        },
        {
          front: 'Joshua 24:24',
          back: 'So the people said to Joshua, "We will worship the LORD our God and obey Him."'
        },
        {
          front: '1 Chronicles 16:9',
          back: 'Sing to him; sing praise to him; tell about all his wondrous works!'
        },
        {
          front: 'Psalm 56:3',
          back: 'When I am afraid, I will trust in you.'
        },
        {
          front: 'Psalm 119:11',
          back: 'I have treasured your word in my heart so that I may not sin against you.'
        },
        {
          front: 'Proverbs 22:1',
          back: 'A good name is to be chosen over great wealth; favor is better than silver and gold.'
        },
        {
          front: 'Isaiah 6:8',
          back: 'Then I heard the voice of the Lord asking: Who should I send? Who will go for us? I said: Here I am. Send me.'
        },
        {
          front: 'Isaiah 45:5',
          back: 'I am the LORD, and there is no other; there is no God but me. I will strengthen you, though you do not know me.'
        },
        {
          front: 'Malachi 3:10',
          back: 'Bring the full tenth into the storehouse so that there may be food in my house. Test me in this way," says the LORD of armies. "See if I will not open the floodgates of heaven and pour out a blessing for you without measure.'
        },
        {
          front: 'Matthew 28:19-20',
          back: 'Go, therefore, and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe everything I have commanded you. And remember, I am with you always, to the end of the age.'
        },
        {
          front: 'Luke 2:52',
          back: 'And Jesus increased in wisdom and stature, and in favor with God and with people.'
        },
        {
          front: 'Luke 19:10',
          back: 'For the Son of Man has come to seek and to save the lost.'
        },
        {
          front: 'John 4:24',
          back: 'God is spirit, and those who worship him must worship in spirit and truth.'
        },
        {
          front: 'John 13:35',
          back: 'By this everyone will know that you are my disciples, if you love one another.'
        },
        {
          front: 'Acts 4:12',
          back: 'There is salvation in no one else, for there is no other name under heaven given to people by which we must be saved.'
        },
        {
          front: 'Romans 10:9',
          back: 'If you confess with your mouth, "Jesus is Lord," and believe in your heart that God raised him from the dead, you will be saved.'
        },
        {
          front: '1 Corinthians 3:16',
          back: 'Don\'t you yourselves know that you are God\'s temple and that the Spirit of God lives in you?'
        },
        {
          front: 'Ephesians 2:8',
          back: 'For you are saved by grace through faith, and this is not from yourselves; it is God\'s gift'
        },
        {
          front: '1 Thessalonians 5:18',
          back: 'Give thanks in everything; for this is God\'s will for you in Christ Jesus.'
        },
        {
          front: '1 Timothy 4:12',
          back: 'Don\'t let anyone despise your youth, but set an example for the believers in speech, in conduct, in love, in faith, and in purity.'
        },
        {
          front: '2 Timothy 2:15',
          back: 'Be diligent to present yourself to God as one approved, a worker who doesn\'t need to be ashamed, correctly teaching the word of truth.'
        },
        {
          front: 'James 1:22',
          back: 'But be doers of the word and not hearers only, deceiving yourselves.'
        },
        {
          front: '1 Peter 4:9',
          back: 'Be hospitable to one another without complaining.'
        },
        {
          front: '1 John 4:21',
          back: 'And we have this command from him: The one who loves God must also love his brother and sister.'
        }
      ]
  
      
  
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

      this.kjvWordBank = [
          'a', 'able', 'afraid', 'all', 'also', 'alway', 'am', 'among', 'and', 'another', 
          'approved', 'are', 'ashamed', 'be', 'before', 'behold', 'believe', 'believers', 
          'beside', 'blessing', 'blessings', 'brother', 'but', 'by', 'charity', 'chosen', 
          'Christ', 'come', 'commanded', 'commandment', 'concerning', 'confess', 'conversation', 
          'dead', 'deceiving', 'disciples', 'dividing', 'doers', 'dwelleth', 'else', 'evening', 
          'every', 'everything', 'example', 'faith', 'father', 'favor', 'for', 'from', 'ghost', 
          'give', 'given', 'go', 'God', 'good', 'grace', 'grudging', 'had', 'hast', 'have', 
          'he', 'hearers', 'heart', 'heaven', 'here', 'hid', 'him', 'his', 'hospitality', 
          'hosts', 'house', 'i', 'if', 'in', 'increased', 'is', 'it', 'Jesus', 'Joshua', 
          'know', 'known', 'let', 'lo', 'Lord', 'lost', 'love', 'loveth', 'loving', 'made', 
          'man', 'may', 'me', 'meat', 'men', 'might', 'mine', 'morning', 'mouth', 'must', 
          'name', 'nations', 'needeth', 'neither', 'no', 'none', 'not', 'now', 'obey', 'observe', 
          'of', 'one', 'only', 'open', 'other', 'our', 'out', 'own', 'pour', 'prove', 'psalms', 
          'purity', 'raised', 'rather', 'receive', 'riches', 'rightly', 'room', 'said', 'saith', 
          'salvation', 'saved', 'saw', 'seek', 'send', 'serve', 'shall', 'shalt', 'shew', 'silver', 
          'sin', 'sing', 'son', 'spirit', 'stature', 'storehouse', 'study', 'such', 'talk', 'teach', 
          'teaching', 'than', 'that', 'the', 'thee', 'thereby', 'therefore', 'they', 'things', 'tithes', 
          'thou', 'through', 'thy', 'time', 'to', 'trust', 'truth', 'unto', 'up', 'use', 'very', 
          'voice', 'was', 'we', 'were', 'what', 'whatsoever', 'when', 'whereby', 'wherewith', 'which', 
          'who', 'whom', 'will', 'windows', 'wisdom', 'with', 'without', 'word', 'workman', 'works', 
          'wondrous', 'ye', 'you', 'young', 'your', 'yourselves', 'youth'
      ];

      this.esvWordBank = [
        'a', 'able', 'according', 'age', 'afraid', 'all', 'always', 'am', 'among', 'an', 'and',
        'another', 'approved', 'are', 'ashamed', 'baptizing', 'be', 'because', 'behold', 'believe',
        'believers', 'best', 'better', 'besides', 'blessing', 'bring', 'brother', 'but', 'by', 'came',
        'Christ', 'circumstances', 'commandment', 'commanded', 'conduct', 'confess', 'dead', 'deceiving',
        'despise', 'disciples', 'do', 'doers', 'doing', 'down', 'dwells', 'else', 'end', 'equip',
        'evening', 'every', 'everything', 'example', 'faith', 'father', 'favor', 'food', 'for', 'from',
        'full', 'gift', 'give', 'given', 'go', 'God', 'gods', 'good', 'grace', 'great', 'grumbling',
        'handling', 'has', 'have', 'he', 'heard', 'hearers', 'heart', 'heaven', 'here', 'him', 'his',
        'holy', 'hospitality', 'hosts', 'house', 'i', 'if', 'in', 'increased', 'into', 'is', 'it',
        'Jesus', 'Joshua', 'know', 'let', 'Lord', 'lost', 'love', 'loves', 'made', 'make', 'man',
        'may', 'me', 'men', 'might', 'more', 'morning', 'mouth', 'must', 'name', 'nations', 'need',
        'no', 'not', 'now', 'obey', 'observe', 'of', 'one', 'only', 'open', 'or', 'other', 'our',
        'own', 'people', 'pour', 'praises', 'present', 'put', 'purity', 'raised', 'rather', 'riches',
        'rightly', 'said', 'salvation', 'save', 'saved', 'saw', 'says', 'seek', 'send', 'serve', 'set',
        'show', 'silver', 'sin', 'sing', 'son', 'spirit', 'stature', 'stored', 'storehouse', 'teach',
        'teaching', 'tell', 'temple', 'test', 'than', 'thanks', 'that', 'the', 'thereby', 'therefore',
        'there', 'this', 'though', 'through', 'tithe', 'to', 'truth', 'trust', 'under', 'until', 'up',
        'us', 'voice', 'was', 'we', 'when', 'which', 'who', 'whoever', 'whom', 'will', 'windows',
        'wisdom', 'with', 'without', 'word', 'worker', 'works', 'worship', 'wondrous', 'you', 'young',
        'your', 'yourself', 'yourselves', 'youth'
      ];

      this.csbWordBank = [
        'a', 'about', 'according', 'afraid', 'age', 'all', 'also', 'always', 'am', 'and',
        'another', 'anyone', 'appear', 'approved', 'are', 'armies', 'ashamed', 'asking', 'baptizing',
        'be', 'believers', 'believe', 'better', 'blessing', 'bring', 'brother', 'but', 'by', 'came',
        'Christ', 'chosen', 'command', 'commanded', 'complaining', 'conduct', 'confess', 'correctly',
        'dead', 'deceiving', 'despise', 'diligent', 'disciples', 'doers', 'don\'t', 'end', 'evening',
        'every', 'everyone', 'everything', 'example', 'faith', 'father', 'favor', 'floodgates', 'food',
        'for', 'from', 'full', 'gift', 'give', 'given', 'go', 'God', 'gold', 'good', 'grace', 'great',
        'has', 'have', 'he', 'heard', 'hearers', 'heart', 'heaven', 'here', 'him', 'his', 'holy',
        'hospitable', 'house', 'i', 'if', 'in', 'increased', 'indeed', 'into', 'is', 'it', 'Jesus',
        'Joshua', 'know', 'let', 'lives', 'Lord', 'lost', 'love', 'loves', 'made', 'make', 'may',
        'me', 'means', 'measure', 'morning', 'mouth', 'must', 'name', 'nations', 'need', 'no', 'not',
        'nothing', 'now', 'obey', 'observe', 'of', 'one', 'only', 'open', 'other', 'our', 'out',
        'over', 'people', 'pour', 'praise', 'present', 'raised', 'remember', 'said', 'salvation',
        'save', 'saved', 'saw', 'says', 'seek', 'send', 'set', 'should', 'silver', 'sin', 'sing',
        'sister', 'so', 'son', 'spirit', 'stature', 'strengthen', 'suited', 'teaching', 'tell',
        'temple', 'tenth', 'test', 'than', 'thanks', 'that', 'the', 'their', 'them', 'then', 'there',
        'this', 'though', 'through', 'to', 'treasured', 'trust', 'truth', 'under', 'voice', 'way',
        'we', 'wealth', 'when', 'who', 'will', 'wisdom', 'with', 'without', 'word', 'worker',
        'works', 'worship', 'wondrous', 'you', 'your', 'yourself', 'yourselves', 'youth'
      ];

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
  
    getKeyPassages() {
      return this.keyPassages;
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
  
  export default HighschoolVerses;