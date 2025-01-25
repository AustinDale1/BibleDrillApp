class HighschoolVerses {
    constructor() {
      this.kjvVerses = [
        {
          type: 'StepsToSalvation',
          front: 'John 10:10',
          back: 'The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly.',
          reference: 'John 10:10'
        },
        {
          type: 'StepsToSalvation',
          front: 'Ecclesiastes 7:20',
          back: 'For there is not a just man upon earth, that doeth good and sinneth not.',
          reference: 'Ecclesiastes 7:20'
        },
        {
          type: 'StepsToSalvation',
          front: 'John 14:6',
          back: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.',
          reference: 'John 14:6'
        },
        {
          type: 'StepsToSalvation',
          front: 'John 1:12',
          back: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.',
          reference: 'John 1:12'
        },
        {
          type: 'StepsToSalvation',
          front: 'Ephesians 2:8-9',
          back: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
          reference: 'Ephesians 2:8-9'
        },
        {
          type: 'StepsToSalvation',
          front: 'Revelation 3:20',
          back: 'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.',
          reference: 'Revelation 3:20'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Authority of the Scripture',
          back: 'The law of the Lord is perfect, converting the soul: the testimony of the Lord is sure, making wise the simple. The statutes of the Lord are right, rejoicing the heart: the commandment of the Lord is pure, enlightening the eyes.',
          reference: 'Psalm 19:7-8'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Who Jesus Is',
          back: 'He saith unto them, But whom say ye that I am? And Simon Peter answered and said, Thou art the Christ, the Son of the living God.',
          reference: 'Matthew 16:15-16'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Mission on Earth',
          back: 'Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.',
          reference: 'Matthew 28:19-20'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Sharing Your Faith Story',
          back: 'But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.',
          reference: 'Acts 1:8'
        },
        {
          type: 'WhatWeBelieve',
          front: "Believer's Baptism",
          back: 'Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.',
          reference: 'Romans 6:4'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Obeying Authority',
          back: 'Let every soul be subject unto the higher powers. For there is no power but of God: the powers that be are ordained of God. Whosoever therefore resisteth the power, resisteth the ordinance of God: and they that resist shall receive to themselves damnation.',
          reference: 'Romans 13:1-2'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Giving Money',
          back: 'Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.',
          reference: 'II Corinthians 9:7'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Security of the Believer',
          back: 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.',
          reference: 'Romans 8:38-39'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Holiness',
          back: 'Because it is written, Be ye holy; for I am holy.',
          reference: 'I Peter 1:16'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Relationship to God',
          back: 'But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvelous light.',
          reference: 'I Peter 2:9'
        }
      ];

      this.esvVerses = [
        {
          type: 'StepsToSalvation',
          front: 'John 10:10',
          back: 'The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.',
          reference: 'John 10:10'
        },
        {
          type: 'StepsToSalvation',
          front: 'Ecclesiastes 7:20',
          back: 'Surely there is not a righteous man on earth who does good and never sins.',
          reference: 'Ecclesiastes 7:20'
        },
        {
          type: 'StepsToSalvation',
          front: 'John 14:6',
          back: 'Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through me."',
          reference: 'John 14:6'
        },
        {
          type: 'StepsToSalvation',
          front: 'John 1:12',
          back: 'But to all who did receive him, who believed in his name, he gave the right to become children of God,',
          reference: 'John 1:12'
        },
        {
          type: 'StepsToSalvation',
          front: 'Ephesians 2:8-9',
          back: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
          reference: 'Ephesians 2:8-9'
        },
        {
          type: 'StepsToSalvation',
          front: 'Revelation 3:20',
          back: 'Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me.',
          reference: 'Revelation 3:20'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Authority of the Scripture',
          back: 'The law of the LORD is perfect, reviving the soul; the testimony of the LORD is sure, making wise the simple; the precepts of the LORD are right, rejoicing the heart; the commandment of the LORD is pure, enlightening the eyes;',
          reference: 'Psalm 19:7-8'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Who Jesus Is',
          back: 'He said to them, "But who do you say that I am?" Simon Peter replied, "You are the Christ, the Son of the living God."',
          reference: 'Matthew 16:15-16'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Mission on Earth',
          back: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age."',
          reference: 'Matthew 28:19-20'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Sharing Your Faith Story',
          back: 'But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth."',
          reference: 'Acts 1:8'
        },
        {
          type: 'WhatWeBelieve',
          front: "Believer's Baptism",
          back: 'We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life.',
          reference: 'Romans 6:4'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Obeying Authority',
          back: 'Let every person be subject to the governing authorities. For there is no authority except from God, and those that exist have been instituted by God. Therefore whoever resists the authorities resists what God has appointed, and those who resist will incur judgment.',
          reference: 'Romans 13:1-2'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Giving Money',
          back: 'Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.',
          reference: '2 Corinthians 9:7'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Security of the Believer',
          back: 'For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.',
          reference: 'Romans 8:38-39'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Holiness',
          back: 'Since it is written, "You shall be holy, for I am holy."',
          reference: '1 Peter 1:16'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Relationship to God',
          back: 'But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light.',
          reference: '1 Peter 2:9'
        }
      ];

      this.csbVerses = [
        {
          type: 'StepsToSalvation',
          front: 'John 10:10',
          back: 'A thief comes only to steal and kill and destroy. I have come so that they may have life and have it in abundance.',
          reference: 'John 10:10'
        },
        {
          type: 'StepsToSalvation',
          front: 'Ecclesiastes 7:20',
          back: 'There is certainly no one righteous on the earth who does good and never sins.',
          reference: 'Ecclesiastes 7:20'
        },
        {
          type: 'StepsToSalvation',
          front: 'John 14:6',
          back: 'Jesus told him, "I am the way, the truth, and the life. No one comes to the Father except through me.',
          reference: 'John 14:6'
        },
        {
          type: 'StepsToSalvation',
          front: 'John 1:12',
          back: 'But to all who did receive him, he gave them the right to be children of God, to those who believe in his name,',
          reference: 'John 1:12'
        },
        {
          type: 'StepsToSalvation',
          front: 'Ephesians 2:8-9',
          back: 'For you are saved by grace through faith, and this is not from yourselves; it is God\'s gift— not from works, so that no one can boast.',
          reference: 'Ephesians 2:8-9'
        },
        {
          type: 'StepsToSalvation',
          front: 'Revelation 3:20',
          back: 'See! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me.',
          reference: 'Revelation 3:20'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Authority of the Scripture',
          back: 'The instruction of the Lord is perfect, renewing one\'s life; the testimony of the Lord is trustworthy, making the inexperienced wise. The precepts of the Lord are right, making the heart glad; the command of the Lord is radiant, making the eyes light up.',
          reference: 'Psalm 19:7-8'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Who Jesus Is',
          back: '"But you," he asked them, "who do you say that I am?" Simon Peter answered, "You are the Messiah, the Son of the living God."',
          reference: 'Matthew 16:15-16'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Mission on Earth',
          back: 'Go, therefore, and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe everything I have commanded you. And remember,I am with you always, to the end of the age."',
          reference: 'Matthew 28:19-20'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Sharing Your Faith Story',
          back: 'But you will receive power when the Holy Spirit has come on you, and you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the end of the earth."',
          reference: 'Acts 1:8'
        },
        {
          type: 'WhatWeBelieve',
          front: "Believer's Baptism",
          back: 'Therefore we were buried with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, so we too may walk in newness of life.',
          reference: 'Romans 6:4'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Obeying Authority',
          back: 'Let everyone submit to the governing authorities, since there is no authority except from God, and the authorities that exist are instituted by God. So then, the one who resists the authority is opposing God\'s command, and those who oppose it will bring judgment on themselves.',
          reference: 'Romans 13:1-2'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Giving Money',
          back: 'Each person should do as he has decided in his heart — not reluctantly or out of compulsion, since God loves a cheerful giver.',
          reference: '2 Corinthians 9:7'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Security of the Believer',
          back: 'For I am persuaded that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor any other created thing will be able to separate us from the love of God that is in Christ Jesus our Lord.',
          reference: 'Romans 8:38-39'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Holiness',
          back: 'for it is written, "Be holy, because I am holy."',
          reference: '1 Peter 1:16'
        },
        {
          type: 'WhatWeBelieve',
          front: 'Relationship to God',
          back: 'But you are a chosen race, a royal priesthood, a holy nation, a people for his possession, so that you may proclaim the praises of the one who called you out of darkness into his marvelous light.',
          reference: '1 Peter 2:9'
        }
      ];
  
      
  
      this.kjvKeyPassages = [
        { front: 'A Psalm of Praise', back: `Make a joyful noise unto the Lord, all ye lands!
          Serve the Lord with gladness; come before His presence with singing!
          Know ye that the Lord, He is God; it is He that hath made us, and not we ourselves. We are His people, and the sheep of His pasture.
          Enter into His gates with thanksgiving, and into His courts with praise! Be thankful unto Him, and bless His name!
          For the Lord is good, His mercy is everlasting; and His truth endureth to all generations.`, ref: 'Psalm 100'},
        { front: 'God Knows Me', back: `The Lord is my shepherd; I shall not want.
          He maketh me to lie down in green pastures; He leadeth me beside the still waters.
          He restoreth my soul; He leadeth me in the paths of righteousness for His name’s sake.
          Yea, though I walk through the valley of the shadow of death, I will fear no evil; for Thou art with me; Thy rod and Thy staff, they comfort me.
          Thou preparest a table before me in the presence of mine enemies; Thou anointest my head with oil; my cup runneth over.
          Surely goodness and mercy shall follow me all the days of my life; and I will dwell in the house of the Lord for ever.`, ref: 'Psalm 139:1-8'},
        { front: 'The Beatitudes', back: '', ref: 'Matthew 5:3-12'},
        { front: 'The First Lord\'s Supper', back: '', ref: 'Luke 22:17-20'},
        { front: 'A Christian\'s Armor',  back: '', ref: 'Ephesians 6:13-18'},
        { front: 'Listening and Doing', back: '', ref: 'James 1:19-22'},
      ];

      this.esvKeyPassages = [
        { front: 'A Psalm of Praise', back: `Make a joyful noise to the Lord, all the earth! Serve the Lord with gladness!
          Come into his presence with singing! Know that the Lord, he is God! It is he who made us, and we are his;
          we are his people, and the sheep of his pasture. Enter his gates with thanksgiving, and his courts with praise!
          Give thanks to him; bless his name! For the Lord is good; his steadfast love endures forever,
          and his faithfulness to all generations.`, ref: 'Genesis 12:1-3'},
        { front: 'God Knows Me', back: `The Lord is my shepherd; I shall not want.
          He makes me lie down in green pastures. He leads me beside still waters.
          He restores my soul. He leads me in paths of righteousness for his name's sake.
          Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.
          You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.
          Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the Lord forever.`, ref: 'Psalm 23'},
          { front: 'The Beatitudes', back: '', ref: 'Matthew 5:3-12'},
          { front: 'The First Lord\'s Supper', back: '', ref: 'Luke 22:17-20'},
          { front: 'A Christian\'s Armor',  back: '', ref: 'Ephesians 6:13-18'},
          { front: 'Listening and Doing', back: '', ref: 'James 1:19-22'},
      ];

      this.csbKeyPassages = [
        { front: 'A Psalm of Praise', back: `Let the whole earth shout triumphantly to the Lord!
          Serve the Lord with gladness; come before him with joyful songs. Acknowledge that the Lord is God.
          He made us, and we are his-his people, the sheep of his pasture.
          Enter his gates with thanksgiving
          and his courts with praise.
          Give thanks to him and bless his name.
          For the Lord is good, and his faithful love endures forever;
          his faithfulness, through all generations.`, ref: 'Genesis 12:1-3'},
        { front: 'God Knows Me', back: `The Lord is my shepherd; I have what I need.
          He lets me lie down in green pastures; he leads me beside quiet waters.
          He renews my life; he leads me along the right paths for his name’s sake.
          Even when I go through the darkest valley, I fear no danger, for you are with me; your rod and your staff—they comfort me.
          You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows.
          Only goodness and faithful love will pursue me all the days of my life, and I will dwell in the house of the Lord as long as I live.`, ref: 'Psalm 23'},
          { front: 'The Beatitudes', back: '', ref: 'Matthew 5:3-12'},
          { front: 'The First Lord\'s Supper', back: '', ref: 'Luke 22:17-20'},
          { front: 'A Christian\'s Armor',  back: '', ref: 'Ephesians 6:13-18'},
          { front: 'Listening and Doing', back: '', ref: 'James 1:19-22'},
      ];

      //combine these with key passages and verses
      this.kjvWordBank = [];

      this.esvWordBank = [
        'a', 'able', 'about', 'above', 'according', 'all', 'am', 'and', 'angels', 
        'anyone', 'anything', 'appointed', 'are', 'as', 'at', 'authority', 
        'authorities', 'baptism', 'baptizing', 'behold', 'believer', 'believers', 
        'buried', 'but', 'by', 'called', 'children', 'christ', 'christ', 'church', 
        'come', 'commanded', 'commandment', 'compulsion', 'come', 'comes', 
        'creation', 'christ', 'cheerful', 'darkness', 'dead', 'death', 'decided', 
        'disciples', 'door', 'does', 'doing', 'eat', 'earth', 'end', 'enlightening', 
        'except', 'exist', 'eyes', 'faith', 'father', 'for', 'from', 'gift', 'give', 
        'glory', 'god', 'governing', 'good', 'grace', 'have', 'heart', 'height', 
        'him', 'holy', 'holy', 'i', 'if', 'in', 'incur', 'instituted', 'into', 'is', 
        'it', 'jesus', 'jerusalem', 'john', 'judgment', 'kill', 'law', 'let', 'life', 
        'light', 'living', 'lord', 'loves', 'make', 'making', 'man', 'marvelous', 
        'may', 'me', 'might', 'money', 'my', 'name', 'nation', 'nations', 'neither', 
        'newness', 'no', 'not', 'now', 'observe', 'of', 'on', 'one', 'only', 'open', 
        'order', 'our', 'own', 'paul', 'people', 'perfect', 'peter', 'person', 
        'possess', 'possession', 'power', 'powers', 'precepts', 'present', 
        'priest', 'priesthood', 'pure', 'race', 'raised', 'receive', 'resists', 
        'reviving', 'right', 'righteous', 'royal', 'rulers', 'said', 'salvation', 
        'samaria', 'save', 'saved', 'say', 'scripture', 'separate', 'shall', 
        'simple', 'sin', 'sins', 'so', 'soul', 'spirit', 'stand', 'steal', 'subject', 
        'sure', 'teach', 'teaching', 'testimony', 'that', 'the', 'their', 'them', 
        'therefore', 'they', 'thief', 'things', 'this', 'through', 'to', 'too', 
        'truth', 'under', 'us', 'voice', 'walk', 'way', 'were', 'what', 'when', 
        'who', 'whoever', 'with', 'wisdom', 'wise', 'will', 'witnesses', 'works', 
        'you', 'your'
      ];

      this.csbWordBank = [];

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
  
    getKeyPassages(translation) {
      switch (translation.toLowerCase()) {
        case 'kjv':
          return this.kjvKeyPassages;
        case 'esv':
          return this.esvKeyPassages;
        case 'csb':
          return this.csbKeyPassages;
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
  
  export default HighschoolVerses;