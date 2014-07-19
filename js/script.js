
$(document).ready(function(){
  
    changeText();
    
    $("#button-div").on('mouseenter',function(){
      $(this).addClass("outer-hover");
    });
    
    $("#button-div").on('mouseleave',function(){
      $(this).removeClass("outer-hover");
      $(this).addClass("outer");
    });
    
    $(".outer").on('click',function(){
        console.log("Click");
        $("#prayer").slideUp(500);
	setTimeout(function(){changeText();}, 499);
	$("#prayer").slideDown(500);
    });
    
    
    });


var prayerList = [
    {	"title": "Prayer to St. Jude, patron of hopeless causes",
        "text": "St. Jude, glorious apostle, faithful servant and friend of Jesus, \n the name of the traitor has caused you to be forgotten by many, \n but the true Church invokes you universally as the patron of things despaired of; \n pray for me, who am so downcast; \n pray for me, that finally I may receive the consolations and help of heaven in all my necessities, tribulations and sufferings, \n and that I may bless God with the elect throughout eternity. \n St. Jude Apostle, \n martyr and relative of our Lord Jesus Christ, \n of Mary, and of Joseph, \n intercede for us. \n Amen."
    },
    {	"title": "Prayer for Serenity",
        "text": "God, grant me the serenity to accept the things I cannot change,\ncourage to change the things I can,\nand wisdom to know the difference.\nLiving one day at a time, enjoying one moment at a time,\naccepting hardship as a way to peace,\nTaking, as Jesus did,\nthis sinful world as it is,\nNot as I would have it,\nTrusting that You will make all things right,\nIf I surrender to Your will,\nSo that I may be reasonably happy in this life,\nAnd supremely happy with You forever in the next.\nAmen.\n"
    },
    {	"title": "Act of Love",
        "text": "O my God, I love you above all things, with my whole heart and soul, because you are all-good and worthy of all my love. I love my neighbor as myself for the love of you. I forgive all who have injured me and ask pardon of all who I have injured."
    },
    {	"title": "Act of Hope",
	"text": "O my God, relying on your almighty power, infinite mercy and promises, I hope to obtain pardon for my sins, the help of your grace, and life everlasting through the merits of Jesus Christ, my Lord and Redeemer."
    },
    {	"title": "Act of Faith",
	"text": "O my God, I firmly believe that you are one God in three divine Persons, Father, Son, and Holy Spirit. I believe that Your divine Son became man, died for our sins, and that He will come to judge the living and the dead. I believe these and all the truths which the holy Catholic Church teaches, because You have revealed them, Who can neither deceive nor be deceived.\n"
    },
    {	"title": "Prayer of Abandonment",
        "text": "Father, I abandon myself into Your hands;\nDo with me what You will.\nWhatever You may do, I thank you;\nI am ready for all, I accept all.\nLet only Your will be done in me\nAnd in all Your creatures – \nI wish no more than this, O Lord.\nInto Your hands I commend my soul;\nI offer it to You\nWith all the love of my heart,\nFor I love You, Lord,\nAnd so need to give myself,\nTo surrender myself into Your hands,\nWithout reserve,\nAnd with boundless confidence,\nFor You are my Father.\n Amen."
    },
    {	"title": "Prayer Not to be Disturbed",
        "text": "Let nothing disturb you.\nLet nothing frighten you.\nAll things pass.\nGod never changes.\nPatience attains all that it strives for.\nHe who has God finds he lacks nothing.\nFor God alone is enough.\n"
    },
    {	"title": "Prayer to the Holy Spirit",
        "text": "Breathe in me, Holy Spirit,\nThat all my thoughts may be holy.\nMove in me, Holy Spirit,\nThat my work, too, may be holy.\nAttract my heart, Holy Spirit,\nThat I may love only what is holy.\nStrengthen me, Holy Spirit,\nThat I may defend all that is holy.\nProtect me, Holy Spirit,\nThat I always may be holy.\n"
    },
    {	"title": "Prayer for Your Family",
        "text": "Lord Jesus, I pray for my family.\nBless those who help me, and bless those who hurt me.\nBless those who are at home, and bless those who are away from home.\nBless those whom I find easy to love\nAnd bless those who I find difficult to love.\nLord, bless all the members of my family who have died.\nBless them with eternal rest and peace.\nLord, bless all the members of my family, now and forever.\nAmen."
    },
    {	"title": "Prayer of Thanksgiving",
        "text": "Almighty Father,\nYou are lavish in bestowing all your gifts,\nand we give thanks for the favors you have given to us.\nIn your goodness you have favored us and kept us safe in the past.\nWe ask that you continue to protect us and to shelter us in the shadow of your wings.\nWe ask this through Christ our Lord. \nAmen.\n"
    },
    {	"title": "Prayer in Time of Sorrow",
        "text": "Father of all mercies and God of consolation, you love us eternally and transform the shadows of death into the dawn of life. \nLook upon our grief; be our refuge and comfort so that our sadness and sorrow may turn into to the light and peace of your presence. \nIn dying, your Son destroyed death; in rising, he restored life. \nGrant that at the end of our earthly pilgrimage we may be found in his company with our brothers and sisters. \nThere you shall wipe away every tear. \nWe ask this through Christ our Lord. \nAmen."
    },
    {	"title": "Prayer for When You're Confused",
        "text": "Lord Jesus, I'm really confused.\nI really don't know why, and I don't know what to do.\nI can't help the way I fell, so I'm coming to You.\nLord Jesus, speak a word to scatter the darkness in my mind and heart.\nBurn away the clouds of uncertainty.\nShed a ray of Your Divine Light with its healing rays to set me straight.\nMy mind, my heart, my body, my soul I give to You; take control.\nJesus, I trust in You.\n Amen."
    },
    {	"title": "Prayer of St. Therese of Lisieux",
        "text": "Open the Book of life, Lord Jesus,\nSee all the deeds recorded by the saints!\nAll these I want to perform for You!\nWhat can You say in the face of all this foolishness of mine,\nFor surely I am the weakest soul on earth?\nYet just because I am so weak, You have been pleased to grant my childish little desires,\nAnd now You will grant the rest, other desires far greater than the Universe.\n"
    },
    {	"title": "Prayer Before the Crucifix",
        "text": "Most high, Glorious God,\nEnlighten the darkness of my heart\nAnd give me, Lord, a correct faith,\nA correct hope,\nA perfect charity,\nSense and knowledge,\nSo that I may carry out Your holy and true command.\n Amen."
    },
    {	"title": "Prayer to the Divine Infant Jesus",
        "text": "Oh Divine Infant Jesus,\nOmnipotent God\nWe implore you, through the powerful Intercession of Your most holy Mother\nIn your boundless mercy and omnipotence\nTo look favorably upon the petition for which we so earnestly pray.\nOh Divine Infant Jesus,\nHear our prayers\nAnd grant our petitions.\n Amen."
    },
    {	"title": "Daily Prayer to the Sacred Heart",
        "text": "Sacred Heart of Jesus, today I wish to live in You, in Your grace, in which I desire at all costs to persevere.\nKeep me from sin and strengthen my will by helping me to keep watch over my senses, my imagination, and my heart.\nHelp me to correct my faults which are the source of sin.\nI beg You to do this, O Jesus, through Mary, Your Immaculate Mother. \nAmen."
    },
    {	"title": "Prayer of St. Catherine of Siena",
        "text": "St. Catherine, \nO marvelous wonder of the Church, seraphic virgin,\nbecause of your extraordinary virtue and immense good which you accomplished for the Church and society, \nyou are acclaimed and blessed by all people.\nBy the sheer force of your personality you converted thousands, and the mere sight of you melted the hearts of hardened sinners.\nO St. Catherine, inspire me to reach into the lives of others and influence them for good, so that your name will be ever blessed and exalted.\nI call upon you with all my affection and beg you to obtain by your prayers the favors I so ardently desire. \nAmen."
    },
    {	"title": "Prayer to St. Joseph",
        "text": "St. Joseph, \nfather and guardian of virgins, \ninto whose faithful keeping were entrusted Innocency itself, Christ Jesus, and Mary, the Virgin of virgins, \nI pray and beseech thee through Jesus and Mary, those pledges so dear to thee, \nto keep me from all uncleanness, and to grant that my mind may be untainted, my heart pure and my body chaste;\n help me always to serve Jesus and Mary in perfect chastity. \nAmen."
    },
    {	"title": "Prayer to St. Cecilia",
        "text": "O glorious saint, \nwho chose to die instead of denying your King,\nWe pray you please to help us as His fair praise we sing!\nWe lift our hearts in joyous song to honor Him this way,\nAnd while we sing, remembering to sing is to doubly pray.\nAt once in our hearts and in our tongues\nWe offer double prayer, sent heavenward on winged notes to praise God dwelling there.\nWhile in our hearts and tongues we try\nWith song to praise God twice,\nWe ask you, dear saint, to help us be\nUnited close to Christ!\n"
    },
    {	"title": "Prayer to the Immaculate Heart of Mary",
        "text": "O Most Blessed Mother, \nheart of love, heart of mercy, every listening, caring, consoling, hear our prayer. \nAs your children, we implore your intercession with Jesus your Son.\nReceive with understanding and compassion the petitions we place before you today.\nWe are comforted in knowing your heart is ever open to those who ask for you prayer.\nWe trust to your gentle care and intercession, those whom we love and who are sick or lonely or hurting. \nHelp all of us, Holy Mother, to bear our burdens in this life until we may share eternal life and peace with God forever.\nAmen."
    },
    {	"title": "Prayer to St. Thomas Aquinas",
        "text": "Angel of Schools, \nat the bidding of Peter, thousands today are saluting thee thus.\nWe too are claiming thy care and thy counsel, Angel of Schools, be an Angel to us.\nCome to our aid when thou hearest us calling,\nLight up the dark, make the rough places plain,\nBring to our thoughts the unknown or forgotten,\nGive us the words that we seek for in vain.\nAmen."
    },
    {	"title": "Prayer in Honor of St. Lucy",
        "text": "O God, our Creator and Redeemer, \nmercifully hear our prayers that as we venerate Thy servant, St. Lucy, for the light of faith Thou dist bestow upon her, \nThou wouldst vouchsafe to increase and to preserve this same light in our souls, that we may be able to avoid evil, to do good and to abhor nothing \nso much as the blindness and the darkness of evil and of sin.\nRelying on Thy goodness, O God, we humbly ask Thee, \nby the intercession of Thy servant, St. Lucy, that Thou wouldst give perfect vision to our eyes, \nthat they may serve for Thy greater honor and glory, \nand for the salvation of our souls in this world, that we may come to the enjoyment of the unfailing light of the Lamb of God in paradise.\nSt. Lucy, virgin and martyr, \nhear our prayers and obtain our petitions.\nAmen."
    },
    {	"title": "Prayer to St. Maria Goretti",
        "text": "Heroic and angelic St. Maria Goretti, \nwe kneel before you to honor your preserving fortitude and to beg your gracious aid. \nTeach us a deep love of the precepts of our Holy Church; and help us to see in them the very voice of our Father in heaven. \nMay we preserve without stain our white baptismal robe of innocence, \nand may we who have lost this innocence kneel humbly in Holy Penance; \nmaythe absolution of Christ's precious Blood flow into our souls and give us new courage to carry the burning light of God's love through the dangerous highways of this life until Christ our King shall call us to the courts of heaven.\n"
    },
    {	"title": "Prayer to St. Dominic",
        "text": "O holy Priest of God and glorious Patriarch, St. Dominic, \nthou who wast the friend, the well-beloved son and confidant of the Queen of Heaven, \nand didst work so many miracles by the power of the Holy Rosary, \nhave regard for my necessities.\nOn earth you opened your heart to the miseries of your fellow men and your hands were strong to help them; \nnow in heaven your charity has not grown less nor has your power waned.\nPray for me to the Mother of the Rosary and to her divine Son, \nfor I have great confidence that through your assistance I shall obtain the favor I so much desire. \nAmen."
    },
    {	"title": "Prayer of St. Anselm",
        "text": "O supreme and inaccessible Light,\nO complete and blessed Truth,\nHow far You are from me,\nEven though I am so near to You.\nHow remote You are from my sight,\nEven though I am present to Yours.\nYou are everywhere in your entirety,\nAnd yet I do not see You;\nIn You I move and have my being,\nAnd yet I cannot approach You.\nO God, let me know You and love You so that I may find my joy in You;\nAnd if I cannot do so fully in this life,\nLet me at least make some progress every day,\nUntil at last that knowledge, love, and joy come to me in all their plentitude.\nAmen."
    },
    {	"title": "Prayer of St. Anselm to Mary Mother of Salvation",
        "text": "Mother of Salvation, Blessed Lady, \nYou are the Mother of Justification and of those who are justified; \nThe Mother of Reconciliation and of those who are reconciled; \nThe Mother of Salvation and of those who are saved. \nWhat a blessed trust, and what a secure refuge! \nThe Mother of God is our Mother. \nThe Mother of the One in whom alone we hope and whom alone we fear is our Mother.\nThe One who partook of our nature, and by restoring us to life \nMade us children of His Mother, \nInvites us by this to proclaim that we are His brothers and sisters. \nTherefore, our Judge is also our Brother. \nThe Saviour of the world is our Brother. \nOur God has become, through Mary, our Brother!\nAmen."
    },
    {	"title": "Prayer of St. Francis",
        "text": "Lord, make me an instrument of Your peace.\nWhere there is hatred, let me sow love;\nwhere there is injury, pardon;\nwhere there is doubt, faith;\nwhere there is despair, hope;\nwhere there is darkness, light;\nand where there is sadness, joy.\nO, Divine Master,\ngrant that I may not so much seek\nto be consoled as to console;\nto be understood as to understand;\nto be loved as to love;\nFor it is in giving that we receive;\nit is in pardoning that we are pardoned;\nand it is in dying that we are born to eternal life.\nAmen."
    },
    {	"title": "Individual Prayer for Meditation",
        "text": "Lord Jesus Christ, Son of God, \nhave mercy on me, a sinner."
    },
    {	"title": "St. Francis' Prayer",
	"text": "Jesus, it’s me.\nBless the Lord, my soul, and bless God's holy name, \nBless the Lord, my soul, who leads me into life\nBe still and know that I am God.\nBe still and know that I am.\nBe still and know.\nBe still.\nBe."
    },
    {	"title": "The Magnificant",
        "text": "My soul proclaims the greatness of the Lord,\nMy spirit rejoices in God my Saviour,\nFor he has looked with favor on his lowly servant.\nFrom this day all generations will call me blessed:\nThe Almighty has done great things for me,\nAnd Holy is His Name.\nHe has mercy on those who fear Him,\nIn every generation, He has shown the strength of his arm,\nHe has scattered the proud in their conceit.\nHe has cast down the mighty from their thrones,\nAnd has lifted up the lowly.\nHe has filled the hungry with good things,\nAnd the rich He has sent away empty.\nHe has come to the help of his servant Israel\nFor He has remembered His promise of mercy,\nThe promise He made to our fathers,\nTo Abraham and his children for ever.\nGlory be to the Father and to the Son and to the Holy Spirit. \nAs it was in the beginning, is now and ever shall be, world without end. \nAmen."
    },
    {	"title": "Prayer for Enemies",
        "text": "O God, the Father of all,\n whose Son commanded us to love our enemies: \nLead them and us from prejudice to truth; \ndeliver them and us from hatred, cruelty, and revenge; \nand in your good time enable us all to stand reconciled before you; \nthrough Jesus Christ our Lord. \nAmen."
    },
    {	"title": "Prayer for a Will to Peace",
        "text": "Almighty God, \nby whose grace we look for the day when nation shall not any more lift us sword against nation, nor people against people, \nand when mankind shall live without fear in security and peace, \ngrant to us in this time of strife the will to labor for peace \neven while our sword is drawn to resist the oppressor. \nLet not the evil we oppose turn us from our purpose to achieve unity and concord among the nations of the earth, \nto your honor and glory, \nthrough Jesus Christ our Lord. \nAmen."
    },
    {	"title": "Litany of St. Anthony of Padua",
        "text": "Lord, have mercy on us. \nChrist, have mercy on us. \nLord, have mercy on us.\nChrist, hear us. \nChrist, graciously hear us. \nGod the Father of Heaven, have mercy on us. \nGod the Son, Redeemer of the world, have mercy on us\nGod the Holy Spirit, have mercy on us. \nHoly Trinity, one God, have mercy on us. \nSaint Anthony, glory of the Friars Minor, \nSaint Anthony, ark of the testament, \nSaint Anthony, sanctuary of heavenly wisdom, \nSaint Anthony, destroyer of worldly vanity, \nSaint Anthony, conqueror of impurity, \nSaint Anthony, example of humility, \nSaint Anthony, lover of the Cross, \nSaint Anthony, martyr of desire, \nSaint Anthony, generator of charity, \nSaint Anthony, zealous for justice, \nSaint Anthony, terror of infidels, \nSaint Anthony, model of perfection, \nSaint Anthony, consoler of the afflicted, \nSaint Anthony, restorer of lost things, \nSaint Anthony, defender of innocence, \nSaint Anthony, liberator of prisoners, \nSaint Anthony, guide of pilgrims, \nSaint Anthony, restorer of health. \nSaint Anthony, performer of miracles, \nSaint Anthony, restorer of speech to the mute, \nSaint Anthony, restorer of hearing to the deaf, \nSaint Anthony, restorer of sight to the blind, \nSaint Anthony, disperser of devils, \nSaint Anthony, reviver of the dead. \nSaint Anthony, tamer of tyrants, \nFrom the snares of the devil, Saint Anthony deliver us. \nFrom thunder, lightning and storms, Saint Anthony deliver us. \nFrom all evil of body and soul, Saint Anthony deliver us. \nThrough your intercession, Saint Anthony protect us. \nThroughout the course of life, Saint Anthony protect us. \nLamb of God, who takes away the sins of the world, spare us, O Lord. \nLamb of God, who takes away the sins of the world, graciously hear us, O Lord. \nLamb of God, who takes away the sins of the world, have mercy on us. \nV. Saint Anthony, pray for us. \nThat we may be made worthy of the promises of Christ. \nO my God, may the pious commemoration of Saint Anthony, your Confessor and Proctor, give joy to your Church, \nthat she may ever be strengthened with your spiritual assistance and merit to attain everlasting joy. \nThrough Christ our Lord. \nAmen."
    },
    {	"title": "Prayer to St. Anthony of Padua, Guide of Pilgrims",
        "text": "Dear Saint Anthony, we are all pilgrims. \nWe came from God and we are going to Him. \nHe who created us will welcome us at journey's end. \nThe Lord Jesus is preparing a place for all His brothers and sisters. \nSaint Anthony, Guide of Pilgrims, \ndirect my steps in the straight path. \nProtect me until I am safely home in heaven. \nHelp me in all my needs and difficulties.\nAmen."
    },
    {	"title": "A Prayer to the North American Martyrs",
        "text": "Dear Saints Isaac Jogues, John Brebeuf, Noel Chabanel, Gabriel Lalemant, Anthony Daniel, Charles Garnier, Rene Goupil and John Lalande, \nwe beg of you, pray for the people of this vast country ours.\nYou are the first canonized saints of the United States and Canada. \nWe are glad to have you. We are happy to honor you. \nYou know our country and its needs, and we know you are in heaven praying for us.\nThere is one very special favor we wish to ask of you. \nDear Saints of North America, \npray God to send us another saint, or better still, a number of them. \nAsk Him to have soon a man or a woman, a boy or a girl from this country of ours raised to the honors of the altar. \nLet it be a farmer or a laborer, \na housewife or a schoolboy, \nborn and bred in these United States. \nLet it be some one who lived his whole life here, a Saint Joseph of Carville County, \nor a Saint Mary of Middletown, \nor a Saint William of New York.\nWe do not wish to displace you in our affections, but to add to your glorious number. \nYou understand our desires in this, and we feel sure that we will obtain this great blessing for the salvation of the people of this land. \nRemember us now, and obtain this great blessing for us from God. \nHelp us always to cooperate with the graces that God so richly and generously gives us, \nthrough Jesus Christ our Lord. \nAmen."
    },
    {	"title": "The Marian Prayer of St. John Paul II",
	"text": "Mother of the Redeemer, \nwith great joy we call you blessed. \nIn order to carry out His plan of salvation,\nGod the Father chose you before the creation of the world.\nYou believed in His love and obeyed His word. \nThe Son of God desired you for His Mother \nwhen He became man to save the human race.\nYou received Him with ready obedience and undivided heart. \nThe Holy Spirit loved you as His mystical spouse \nand filled you with singular gifts.\nYou allowed yourself to be led \nby His hidden powerful action. \nOn the eve of the third Christian Millennium, \nwe entrust to you the Church \nwhich acknowledges you and invokes you as Mother. \nTo you, Mother of human family and of the nations,\nwe confidently entrust the whole humanity,\nwith its hopes and fears.\nDo no let it lack the light of true wisdom. \nGuide its steps in the ways of peace.\nEnable all to meet Christ,\nthe Way, the Truth, and the Life. \nSustain us, O Virgin Mary, on our journey of faith \nand obtain for us the grace of eternal salvation.\nO clement, O loving, O sweet Mother of God, and our Mother, Mary.\nPray for us, O Holy Mother of God. \nAmen."
    },
    {	"title": "Prayer to the Majestic Queen of Heaven",
        "text": "Majestic Queen of Heaven and Mistress of the Angels, \nthou didst receive from God the power and commission to crush the head of Satan; \nwherefore we humbly beseech thee, \nsend forth the legions of heaven, \nthat, under thy command, \nthey may seek out all evil spirits, \nengage them everywhere in battle, \ncurb their insolence, \nand hurl them back into the pit of hell. \nO good and tender Mother, \nthou shalt ever be our hope \nand the object of our love. \nO Mother of God, \nsend forth the holy Angels to defend me \nand drive far from me the cruel foe.\nHoly Angels and Archangels, \ndefend us and keep us.\nAmen."
    },
    {	"title": "Litany of Humility",
        "text": "O Jesus meek and humble of heart, hear me.\nFrom the desire of being esteemed,\nDeliver me, Jesus.\nFrom the desire of being loved\nDeliver me, Jesus.\nFrom the desire of being extolled \nDeliver me, Jesus.\nFrom the desire of being honored \nDeliver me, Jesus.\nFrom the desire of being praised \nDeliver me, Jesus.\nFrom the desire of being preferred to others\nDeliver me, Jesus.\nFrom the desire of being consulted \nDeliver me, Jesus.\nFrom the desire of being approved \nDeliver me, Jesus.\nFrom the fear of being humiliated \nDeliver me, Jesus.\nFrom the fear of being despised\nDeliver me, Jesus.\nFrom the fear of suffering rebukes \nDeliver me, Jesus.\nFrom the fear of being calumniated \nDeliver me, Jesus.\nFrom the fear of being forgotten \nDeliver me, Jesus.\nFrom the fear of being ridiculed \nDeliver me, Jesus.\nFrom the fear of being wronged \nDeliver me, Jesus.\nFrom the fear of being suspected \nJesus, grant me the grace to desire it.\nThat others may be loved more than I,\nJesus, grant me the grace to desire it.\nThat others may be esteemed more than I \nJesus, grant me the grace to desire it.\nThat, in the opinion of the world,\nothers may increase and I may decrease \nJesus, grant me the grace to desire it.\nThat others may be chosen and I set aside \nJesus, grant me the grace to desire it.\nThat others may be praised and I unnoticed \nJesus, grant me the grace to desire it.\nThat others may be preferred to me in everything\nJesus, grant me the grace to desire it.\nThat others may become holier than I,\nprovided that I may become as holy as I should\nJesus, grant me the grace to desire it.\n Amen."
    },
    {	"title": "Prayer of the Radiant Christ",
        "text": "Dear Jesus, help me to spread Your fragrance everywhere I go. \nFlood my soul with Your spirit and life. \nPenetrate and possess my whole being so utterly \nthat all my life may only be a radiance of Yours. \nShine through me and be so in me \nthat every soul I come in contact with may feel Your presence in my soul. \nLet them look up and see no longer me but only Jesus! \nStay with me and then I shall begin to shine as You shine, \nso to shine as to be a light to others; \nthe light, O Jesus, will be all from You; \nnone of it will be mine: \nit will be You shining on others through me. \nLet me thus praise You in the way You love best: \nby shining on those around me. \nLet me preach You without preaching, not by words, but by my example, \nby the catching force, \nthe sympathetic influence of what I do, \nthe evident fullness of the love my heart bears to You. \n"
    },
    {	"title": "The Anima Christi",
        "text": "Soul of Christ, sanctify me \nBody of Christ, save me \nBlood of Christ, inebriate me \nWater from Christ's side, wash me \nPassion of Christ, strengthen me \nO good Jesus, hear me \nWithin Thy wounds hide me \nSuffer me not to be separated from Thee \nFrom the malicious enemy defend me \nIn the hour of my death call me \nAnd bid me come unto Thee \nThat I may praise Thee with Thy saints \nand with Thy angels \nForever and ever. \nAmen."
    },
    {	"title": "Act of Contrition",
        "text": "O my God, \nI am heartily sorry for my sins. \nIn choosing to do wrong and failing to do good, \nI have sinned against you and your church.  \nI firmly intend, with help of your grace, \nto repent, to sin no more, and to avoid temptation. \nOur Savior Jesus Christ suffered and died for us. In his name, my God, have mercy. \nAmen."
    },
    {	"title": "Acceptance of God's Will",
        "text": "In all things may the most holy, the most just, and the most lovable will of God be done, praised, and exalted above all forever. \nYour will be done, O Lord, Your will be done. \nThe Lord has given, the Lord has taken away; \nblessed be the name of the Lord.\n"
    },
    {	"title": "The Divine Praises",
        "text": "Blessed be God.\nBlessed be His Holy Name.\nBlessed be Jesus Christ, true God and true man.\nBlessed be the name of Jesus.\nBlessed be His Most Sacred Heart.\nBlessed be Jesus in the Most Holy Sacrament of the Altar.\nBlessed be the Holy Spirit, the paraclete.\nBlessed be the great Mother of God, Mary most holy.\nBlessed be her holy and Immaculate Conception.\nBlessed be her glorious Assumption.\nBlessed be the name of Mary, Virgin and Mother.\nBlessed be Saint Joseph, her most chaste spouse.\nBlessed be God in His angels and in His Saints. \nMay the heart of Jesus, in the Most Blessed Sacrament, be praised, adored, and loved with grateful affection, at every moment, in all the tabernacles of the world, even to the end of time. \nAmen."
    },
    {	"title": "The Angelus",
        "text": "The Angel of the Lord declared unto Mary \nAnd she conceived of the Holy Spirit.\nHail Mary\nBehold the handmaid of the Lord, \nBe it done unto me according to Thy word.\nHail Mary\nAnd the Word was made flesh,\nAnd dwelt among us. \nHail Mary\nPray for us, O holy Mother of God, \nThat we may be made worthy promises of Christ\nPour forth, we beseech Thee, O Lord,\nThy grace into our hearts; \nthat we, to whom the Incarnation of your Son has been made known by the message of an Angel, \nmay, by His passion and cross, be brought to the glory of His resurrection. \nThrough Christ our Lord. \nAmen."
    },
    {	"title": "Chaplet of Divine Mercy",
        "text": "Eternal Father, \nI offer You the Body and Blood, \nSoul and Divinity of Your dearly beloved Son, our Lord Jesus Christ, \nin atonement for our sins and those of the whole world. \n (on each of the 'Our Father' beads of a rosary)\nFor the sake of Your sorrowful passion, have mercy on us and on the whole world. \n(on each of the 10 'Hail Mary' beads)\nHoly God, Holy Mighty One, Holy Immortal One, have mercy on us, and on the whole world. \nO Blood and Water which gushed forth from the Heart of Jesus as a fountain of Mercy for us, \nI trust in You.(3 times)\nJesus, I trust in you.\nIn the name of the Father, and of the Son, and of the Holy Spirit. \nAmen."
    },
    {	"title": "Prayer Before a Crucifix",
        "text": "Look down upon me, good and gentle Jesus, \nwhile before Your face I humbly kneel and, with burning soul, \npray and beseech You to fix deep in my heart lively sentiments of faith, hope and charity; \ntrue contrition for my sins, and a firm purpose of amendment. \nWhile I contemplate, with great love and tender pity, Your five most precious wounds, \npondering over them within me and calling to mind the words which David, Your prophet, said of You, my Jesus: \n'They have pierced My hands and My feet, \nthey have numbered all My bones.' \nAmen."
    },
    {	"title": "Morning Offering",
        "text": "O Jesus,\nthrough the Immaculate Heart of Mary,\nI offer You my prayers, works, joys and sufferings of this day \nfor all the intentions of Your Sacred Heart,\nin union with the Holy Sacrifice of the Mass throughout the world,\nin reparation for my sins,\nfor the intentions of all my relatives and friends,\nand for the intentions of the Holy Father. \nAmen."
    },
    {	"title": "Prayer of Uncertainty",
        "text": "My Lord God,\n I have no idea where I am going. \nI do not see the road ahead of me. \nI cannot know for certain where it will end. \nNor do I really know myself, and the fact that I think that I am following your will \ndoes not mean that I am actually doing so. \nBut I believe that the desire to please you does in fact please you. \nAnd I hope I have that desire in all that I am doing. \nI hope that I will never do anything apart from that desire. \nAnd I know that if I do this you will lead me by the right road \nthough I may know nothing about it. \nTherefore will I trust you always, \nthough I may seem to be lost and in the shadow of death. \nI will not fear, for you are ever with me, and you will never leave me to face my perils alone.\nAmen."
    },
    {	"title": "Petition to the Saints",
        "text": "St. Ann, teach me to love your daughter Mary\nHoly Mary, teach me to become more and more worthy of the promises of Christ\nSt. Joseph, teach me the virtue of silence\nSt. Daniel, teach me wisdom\nSt. Michael, teach me to conquer the devil\nSt. John the Baptist, teach me mortification\nSt. John the Beloved, teach me pure love of Jesus\nSt. Peter, teach me fidelity\nSt. Paul, teach me zeal for the salvation of souls\nSt. Thomas, teach me to overcome doubt\nSt. Stephen, teach me the spirit of martyrdom\nSt. Simon of Cyrene, teach me love of the Cross\nSt. Veronica, teach me concern for the afflicted\nSt. Mary Magdalene, teach me repentance\nSt. Dismas, teach me how to 'steal' Paradise\nSt. Agnes, teach me purity\nSt. Maria Goretti, teach me resistance to temptation\nSt. Jerome, teach me love of the Holy Scriptures\nSt. Monica, teach me steadfastness in prayer\nSt. Augustine, teach me respect for a mother's prayers\nSt. Francis Borgia, teach me to despise earthly vanities\nSt. Francis De Sales, teach me always to smile\nSt. Francis of Assisi, teach me humility\nSt. Francis Xavier, teach me zeal for the missions\nSt. Philip Neri, teach me cheerfulness\nSt. Thomas More, teach me to keep my head\nSt. Anthony, teach me to find sanctity\nSt. Pascal, teach me love of the Holy Mass\nSt. John Vianney, teach me respect for the holy priesthood\nSt. Thomas Aquinas, teach me love of divine contemplation\nSt. Albert the Great, teach me love of heavenly wisdom\nSt. Vincent de Paul, teach me love of the poor\nSt. Elizabeth, teach me to break bread for the downtrodden\nSt. Camillus, teach me to visit the sick\nSt. John Bosco, teach me love of the Youth\nSt. Margaret Mary, teach me love the Sacred Heart\nSt. Therese, teach me the value of little things and how to do all for the honor and glory of God.\nAll you holy men and woman, pray for us\nAmen."
    },
    {	"title": "The Memorare",
        "text": "Remember, O Most Gracious Virgin Mary,\nthat never was it known that anyone who fled to Thy protection,\nimplored Thy help or sought Thine intercession,\nwas left unaided.\nInspired by this confidence,\nI fly unto Thee, O Virgin of Virgins, my Mother;\nto Thee do I come, before thee I stand, sinful and sorrowful.\nO Mother of the Word Incarnate,\ndespise not my petitions,\nbut in Thy mercy, hear and answer me.\nAmen."
    },
    {	"title": "Prayer to St. Michael the Archangel",
        "text": "St. Michael the Archangel, defend us in battle.\nBe our protection against the wickedness and snares of the devil.\nMay God rebuke him, we humbly pray.\nAnd do you, O prince of the Heavenly Host,\nBy the power of God\nCast into Hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls.\nAmen."
    }
]

function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
};

function changeText(){
  var index = getRandomInt(0, prayerList.length);
  var prayer = prayerList[index]["text"].split("\n");
  $("#pray").text("");
  for (var i=0; i<prayer.length; i++){
    $("#pray").append("<p style='margin:5px; line-height: 160%;'>"+prayer[i]+"</p>");
    }
  
  
};

