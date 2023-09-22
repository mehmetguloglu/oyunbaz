const questions = [
  // 1. Seviye Soruları
  [
    {
      question:
        "Alexandre Dumas'nın 'Üç Silahşör' adlı romanında geçen ve 'Hepimiz birimiz' şeklinde başlayan sözün devamı nasıldır?",
      options: [
        "Birimiz birimiz için",
        "Birimiz hepimiz için",
        "Hepimiz birimiz için",
        "Hepimiz hepimiz için",
      ],
      answer: 1,
    },
    {
      question:
        '"Linyit", "antrasit" gibi türleri olan ve büyük ölçüde karbondan oluşan hangisidir?',
      options: ["Alüminyum", "Bor", "Kömür", "Obsidiyen"],
      answer: 2,
    },
    {
      question:
        "Afrika kıtasının Kilimanjaro'dan sonraki en yüksek dağı olan Kenya Dağı hangi ülkededir?",
      options: ["Kenya", "Güney Afrika", "Nijerya", "Fas"],
      answer: 0,
    },
    {
      question: 'Hangisi "havuç"a verilen bir addır?',
      options: ["Havayavaran", "Toprağagiren", "Yeregeçen", "Karakaçan"],
      answer: 2,
    },
    {
      question: '"Keşmekeş" ne demektir?',
      options: ["Dinginlik", "Karışıklık", "Durgunluk", "Sakinlik"],
      answer: 1,
    },
    {
      question: "Atasözüne göre hangisini 'yıkmak kolay, yapmak zordur'?",
      options: ["Aşil tendonunu", "Safra kesesini", "Apandisi", "Kalbi"],
      answer: 3,
    },
    {
      question: "Hangisi gevrek ve sulu bir tür ayvaya verilen addır?",
      options: [
        "Poğaça ayvası",
        "Kruvasan ayvası",
        "Simit ayvası",
        "Ekmek ayvası",
      ],
      answer: 3,
    },
    {
      question: "Dikkate şayan ne demektir?",
      options: ["Değerli", "Önemsiz", "Basit", "Özensiz"],
      answer: 0,
    },
    {
      question:
        "Bulunduğu yerde, orada yaşayanları rahatsız etme pahasına sürekli kalıp oraya yerleşen biri ne yapmış olur?",
      options: ["Kreplenmiş", "Pastalanmış", "Çöreklenmiş", "Böreklenmiş"],
      answer: 2,
    },
    {
      question:
        "5 makinenin 5 cihaz üretmesi 5 dakika sürüyorsa 100 makinenin 100 cihaz üretmesi ne kadar sürer?",
      options: ["5 dakika", "25 dakika", "1 saat", "1 saat 40 dakika"],
      answer: 0,
    },
    {
      question: "Tarık Akan hangisinde rol almamıştır?",
      options: [
        "Canım Kardeşim",
        "Mavi Boncuk",
        "Köyden İndim Şehire",
        "Ah Nerede",
      ],
      answer: 2,
    },
    {
      question: "Hangisi 'G.O.R.A.' adlı filmde geçen bir repliktir?",
      options: [
        "Zeki Müren de bizi görecek mi?",
        "Vurucam kırbacı!",
        "Araba nerde? Para nerde?",
        "Dünyalılardan tiskiniyorum!",
      ],
      answer: 3,
    },
    {
      question:
        "Hangisi, Iron Man adlı çizgi roman kahramanını beyaz perdede canlandırmıştır?",
      options: [
        "Jake Gyllenhaal",
        "Robert Downey Jr.",
        "Benedict Cumberbatch",
        "Chris Hemsworth",
      ],
      answer: 1,
    },
    {
      question: "Kimlere 'karıncaezmez' denir?",
      options: [
        "Çok esprili kişilere",
        "Çok merhametli kişilere",
        "Çok gösterişli kişilere",
        "Çok çalışkan kişilere",
      ],
      answer: 1,
    },
    {
      question: '"DUS"a girecek olan biri hangi fakülteden mezun olmuştur?',
      options: ["Hukuk", "Diş Hekimliği", "Spor Bilimleri", "Denizcilik"],
      answer: 1,
    },
    {
      question:
        "Stefan Zweing'ın 'Satranç' adlı eserinde, bir gemi yolculuğu sırasında geçen hikayede karakterler hangi oyunu oynar?",
      options: ["Çelik çomak", "Deve güreşi", "Satranç", "Uzuneşek"],
      answer: 2,
    },
    {
      question: "Fransa'nın başkenti neresidir?",
      options: ["Londra", "Paris", "Roma", "Madrid"],
      answer: 1,
    },
    {
      question:
        "Ölçüsü dik açıdan daha büyük ve doğru açıdan daha küçük olan açılara ne ad verilir?",
      options: ["Dar açı", "Geniş açı", "Düz açı", "Yuvarlak açı"],
      answer: 1,
    },
    {
      question:
        '"Boş, bomboş" anlamına gelen ve "kuru bakır" şeklinde biten sözün başında hangisi söylenir?',
      options: ["Takır tukur", "Tıkır tıkır", "Tamtakır", "Yaşbakır"],
      answer: 2,
    },
    {
      question:
        '"Biz 40 ve 45 yaşlarındayız, bizim ve ikiz çocuklarımızın yaşları toplamı ise 115" diyen bir çift kaç yaşlarında ebeveyn olmuştur?',
      options: ["20 ve 25", "25 ve 30", "30 ve 35", "35 ve 40"],
      answer: 1,
    },
    {
      question: "Aşkın Olayım adlı şarkıyı kim seslendirmektedir?",
      options: ["Simge Sağın", "Aşkın Nur Yengi", "Aleyna Tilki", "Gülşen"],
      answer: 0,
    },
    {
      question:
        "Lâmı cimi yok deyiminde geçen ve eski metinlerde kısaltma olarak kullanılan lâm ve cim, hangi anlama gelen Arapça kökenli iki kelimenin kısaltmasıdır?",
      options: [
        "Uygun değil ve uygun",
        "Komşu ve misafir",
        "Ucuz ve pahalı",
        "Geçmiş ve gelecek",
      ],
      answer: 0,
    },
    {
      question:
        "100'e, 100'ün yüzde 10'u eklendiğinde çıkan sonuç 100'ün yüzde kaçı olur?",
      options: ["Yüzde 10'u", "Yüzde 100'ü", "Yüzde 110'u", "Yüzde 1000'i"],
      answer: 2,
    },
    {
      question:
        "Eurovision ‘da Türkiye'ye birincilik getiren sanatçımız kimdir?",
      options: ["Sezen Aksu", "Tarkan", "Sertap Erener", "Ajda Pekkan"],
      answer: 2,
    },
    {
      question:
        "İnternet üzerinde en fazla kullanılan arama motoru hangisidir?",
      options: ["Yahoo", "Bing", "Google", "Yandex"],
      answer: 2,
    },
    {
      question:
        "Günümüze kalan, Amerika kıtasını gösteren en eski haritalardan birini çizen ünlü Türk denizcisi ve Osmanlı Kaptan-ı Deryası kimdir?",
      options: ["Piri Reis", "Barbaros Hayrettin", "Kemal Reis", "Oruç Reis"],
      answer: 0,
    },
    {
      question: "UEFA Kupasını alan ilk Türk takımı hangisidir?",
      options: ["Fenerbahçe", "Beşiktaş", "Galatasaray", "Trabzonspor"],
      answer: 2,
    },
    {
      question: "Gece gündüz eşitliği (ekinoks) bir yılda kaç kez gerçekleşir?",
      options: ["1", "2", "3", "4"],
      answer: 1,
    },
    {
      question:
        "Türkiye’nin uluslararası otomatik telefon kod numarası kaçtır?",
      options: ["88", "90", "91", "92"],
      answer: 1,
    },
    {
      question:
        "Türkiye’de Erozyonla mücadele amacıyla kurulan vakfın kısa adı nedir?",
      options: ["Yeşilay", "Akut", "Tema", "Teba"],
      answer: 2,
    },
    {
      question: "İnsanların yaptırdığı genel sağlık kontrolüne ne ad verilir?",
      options: ["Check out", "Check in", "Check point", "Check up"],
      answer: 3,
    },
    {
      question:
        "Yedi Ballon d'Or ve altı Altın Ayakkabı kazanarak iki ödülde de rekor kıran 2020 yılında Ballon d'Or Rüya Takımı'na seçilen Lionel Messi’nin doğum yeri neresidir?",
      options: ["Arjantin", "Portekiz", "İspanya", "Brezilya"],
      answer: 0,
    },
    {
      question:
        "Basketbolda topun iki el ile sektirilmesi, topu sürerken tutup ardından topun tekrar sektirilmesi, topu sektirmeden 3 adım atılması veya topun ayağa çarpması hangi oyun ihlali olarak adlandırılır?",
      options: ["Serbest atış", "Faul", "Dışarı çıkış", "Steps"],
      answer: 3,
    },
    {
      question:
        "Tiyatroda oyuncuların yaptığı uzun ve etkileyici konuşmaya ne ad verilir?",
      options: ["Replik", "Sufle", "Düblaj", "Tirad"],
      answer: 3,
    },
    {
      question: "Bir yılda kaç mevsim vardır?",
      options: ["1", "2", "3", "4"],
      answer: 3,
    },
    {
      question:
        "SpaceX uzay şirketinin kurucusu, CEO'su ve mühendislik ile tasarım ofisleri şefi, Tesla otomotiv şirketinin CEO'su ve ürün mimarı, The Boring Company şirketinin kurucusu, Neuralink, Starlink ile OpenAI'nin kurucu ortağı ve ayrıca ilk eş başkanı kimdir?",
      options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
      answer: 1,
    },
    {
      question: "IPhone cep telefonu hangi şirket tarafından yaratılmıştır?",
      options: ["Apple", "Intel", "Amazon", "Microsoft"],
      answer: 0,
    },
    {
      question: "Osmanlı Devleti'nin ilk başkenti neresidir?",
      options: ["Bilecik", "İstanbul", "Ankara", "Edirne"],
      answer: 0,
    },
    {
      question: "Türkiye Cumhuriyeti'nin kurucusu kimdir?",
      options: [
        "Mustafa Kemal Atatürk",
        "İsmet İnönü",
        "Adnan Menderes",
        "Celal Bayar",
      ],
      answer: 0,
    },
    {
      question:
        "Türkiye'nin nufus bakımından en büyük ikinci şehri hangisidir?",
      options: ["Ankara", "İstanbul", "İzmir", "Antalya"],
      answer: 0,
    },
    {
      question: "Hangi Osmanlı padişahı 'Kanuni' olarak bilinir?",
      options: ["I. Mehmed", "IV. Murad", "I. Süleyman", "II. Selim"],
      answer: 2,
    },
    {
      question: "Hangi enstrüman yaylı bir müzik aletidir?",
      options: ["Keman", "Flüt", "Trompet", "Davul"],
      answer: 0,
    },
    {
      question:
        "Hangi oyun türü, canlı performanslar aracılığıyla seyircilere sunulur?",
      options: ["Tiyatro", "Sinema", "Video Oyunu", "Televizyon Dizisi"],
      answer: 0,
    },
    {
      question: "Hangi tarihi yapı İstanbul'da bulunmaktadır?",
      options: ["Machu Picchu", "Kolezyum", "Ayasofya", "Selimiye"],
      answer: 2,
    },
    {
      question: "Hangi tarihi yapı İstanbul'da bulunmamaktadır?",
      options: ["Sultan Ahmet", "Süleymaniye", "Ayasofya", "Selimiye"],
      answer: 3,
    },
    {
      question: "Hangi hayvanın yavrusuna 'kuzu' denir?",
      options: ["Koyun", "Kaplan", "Tavuk", "Köpek"],
      answer: 0,
    },
    {
      question: "Hangi meyve turunçgil ailesindendir?",
      options: ["Elma", "Portakal", "Muz", "Kiraz"],
      answer: 1,
    },
    {
      question: "Hangi ülke Eiffel Kulesi'ne sahiptir?",
      options: ["Almanya", "Fransa", "İtalya", "İspanya"],
      answer: 1,
    },
    {
      question: "Türkiye'nin kaç bölgesi vardır?",
      options: ["5", "6", "7", "8"],
      answer: 2,
    },
    {
      question: "Hangi renk karışımıyla yeşil elde edilir?",
      options: [
        "Kırmızı + Mavi",
        "Mavi + Sarı",
        "Kırmızı + Sarı",
        "Mavi + Mor",
      ],
      answer: 1,
    },
    {
      question: "Hangi vitamin, güneş ışığı ile vücutta üretilir?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      answer: 3,
    },
    {
      question: "Hangi ülke Asya kıtasındadır?",
      options: ["Almanya", "Brezilya", "Çin", "Avustralya"],
      answer: 2,
    },
    {
      question: "Hangi elementin sembolü 'Au' dur?",
      options: ["Oksijen", "Altın", "Argon", "Alüminyum"],
      answer: 1,
    },
    {
      question: "Leonardo da Vinci'nin ünlü eseri hangisidir?",
      options: [
        "Starry Night",
        "Mona Lisa",
        "The Scream",
        "Girl with a Pearl Earring",
      ],
      answer: 1,
    },
    {
      question: "Hangi elementin kimyasal sembolü 'H' dir?",
      options: ["Helium", "Hidrojen", "Hafniyum", "Holmiyum"],
      answer: 1,
    },
    {
      question: "Türkiye'nin hangi şehri, lavanta bahçeleri ile ünlüdür?",
      options: ["Isparta", "Ankara", "Trabzon", "Eskişehir"],
      answer: 0,
    },
    {
      question: "Pi sayısı kaç basamaklıdır?",
      options: ["Sonsuz", "1", "3", "100"],
      answer: 0,
    },
    {
      question: "Hangi ülke piramitleriyle ünlüdür?",
      options: ["Meksika", "Mısır", "Hindistan", "Peru"],
      answer: 1,
    },
    {
      question: "Hangi yazar 'Suç ve Ceza' adlı eseri yazmıştır?",
      options: [
        "Leo Tolstoy",
        "Fyodor Dostoevsky",
        "Anton Chekhov",
        "Ivan Turgenev",
      ],
      answer: 1,
    },
    {
      question: "Hangi gezegen Güneş Sistemi'nde en büyüktür?",
      options: ["Mars", "Jüpiter", "Venüs", "Satürn"],
      answer: 1,
    },
    {
      question: "Hangi element suyun ana bileşenidir?",
      options: ["Oksijen", "Hidrojen", "Karbon", "Azot"],
      answer: 1,
    },
    {
      question: "Hangi hayvanın bir türü Komodo ejderi olarak bilinir?",
      options: ["Kertenkele", "Krokodil", "Yılan", "Kaplumbağa"],
      answer: 0,
    },
    {
      question:
        "Hangi Türk bilim insanı, fizik alanında Nobel Ödülü kazanmıştır?",
      options: [
        "Aziz Sancar",
        "Orhan Pamuk",
        "Ahmet Ümit",
        "Feridun M. Sinirlioğlu",
      ],
      answer: 0,
    },

    {
      question: "Hangi hayvan uçabilen bir memelidir?",
      options: ["Köpek", "Yarasa", "Kaplan", "Zebra"],
      answer: 1,
    },
    {
      question: "Hangi yazar 'Sefiller' adlı eseri yazmıştır?",
      options: [
        "Victor Hugo",
        "Charles Dickens",
        "Leo Tolstoy",
        "Fyodor Dostoevsky",
      ],
      answer: 0,
    },
    {
      question: "Hangi yazar '1984' adlı kitabın yazarıdır?",

      options: [
        "William Shakespeare",
        "George Orwell",
        "J.K. Rowling",
        "Mark Twain",
      ],

      answer: 1,
    },
    {
      question: "Dünyanın en büyük okyanusu hangisidir?",
      options: [
        "Atlas Okyanusu",
        "Hint Okyanusu",
        "Pasifik Okyanusu",
        "Arktik Okyanusu",
      ],
      answer: 2,
    },
    {
      question:
        "Türkiye sınırları içerisinde doğup güney sınırımızdan ülke dışına çıktıktan sonra Basra Körfezine dökülen, toplam uzunluğu 2800 km olan, Türkiye sınırlarından geçen en uzun nehir hangisidir?",
      options: ["Fırat", "Dicle", "Yeşilırmak", "Sakarya"],
      answer: 0,
    },
    {
      question:
        "Türkiye sınırları içerisinde bulunan en uzun nehir hangisidir?",
      options: ["Fırat", "Dicle", "Yeşilırmak", "Kızılırmak"],
      answer: 3,
    },
    {
      question: "Hangi yazar 'Savaş ve Barış' adlı eseri yazmıştır?",
      options: [
        "Leo Tolstoy",
        "Fyodor Dostoevsky",
        "Anton Chekhov",
        "Ivan Turgenev",
      ],
      answer: 0,
    },

    {
      question: "Anna Karenina' adlı eseri yazan ünlü Rus yazar hangisidir?",
      options: [
        "Leo Tolstoy",
        "Fyodor Dostoevsky",
        "Anton Chekhov",
        "Ivan Turgenev",
      ],
      answer: 0,
    },
    {
      question:
        "Türkiye Cumhuriyeti'nin kuruluşu hangi tarihde ilan edilmiştir?",
      options: [
        "23 Nisan 1920",
        "19 Mayıs 1919",
        "29 Ekim 1923",
        "10 Kasım 1938",
      ],
      answer: 2,
    },
    {
      question: "Fotosentez için hangi gaz gerekir?",

      options: ["Oksijen", "Karbon Dioksit", "Azot", "Hidrojen"],

      answer: 1,
    },
    {
      question: "Hangi hayvan memeli değildir?",

      options: ["Yunus", "Köpek", "Ördek", "Kertenkele"],

      answer: 3,
    },
    {
      question: "Hangi element periyodik tabloda 'Fe' sembolü ile gösterilir?",
      options: ["Hidrojen", "Oksijen", "Demir", "Gümüş"],
      answer: 2,
    },
    {
      question: "Hangi yıl İkinci Dünya Savaşı sona ermiştir?",
      options: ["1939", "1945", "1949", "1955"],
      answer: 1,
    },
    {
      question: "Hangi kan grubu evrensel kan vericisi olarak bilinir?",
      options: ["A", "B", "AB", "0"],
      answer: 3,
    },
    {
      question:
        "Hangi spor dalında 'vurush', 'ippon' gibi terimler kullanılır?",
      options: ["Karate", "Yüzme", "Futbol", "Basketbol"],
      answer: 0,
    },
    {
      question: "Hangi roman Orhan Pamuk'a Nobel Edebiyat Ödülü'nü kazandırdı?",
      options: [
        "Kara Kitap",
        "Masumiyet Müzesi",
        "Benim Adım Kırmızı",
        "Beyaz Kale",
      ],
      answer: 2,
    },
    {
      question: "Kim tarafından genel görelilik teorisi formüle edilmiştir?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Nikola Tesla",
      ],
      answer: 1,
    },
    {
      question: "Kim tarafından 'Evrim Teorisi' ortaya atılmıştır?",
      options: [
        "Charles Darwin",
        "Isaac Newton",
        "Albert Einstein",
        "Nikola Tesla",
      ],
      answer: 0,
    },
    {
      question: "Hangi yazar 'Dönüşüm' adlı eseri yazmıştır?",
      options: [
        "Franz Kafka",
        "Albert Camus",
        "Fyodor Dostoevsky",
        "Haruki Murakami",
      ],
      answer: 0,
    },
    {
      question: "Hangi yazar 'Yüzüklerin Efendisi' serisini yazmıştır?",
      options: [
        "J.K. Rowling",
        "George Orwell",
        "J.R.R. Tolkien",
        "Ernest Hemingway",
      ],
      answer: 2,
    },
    {
      question: "Hangi hayvan en büyük beyne sahiptir?",
      options: ["Balina", "Fil", "Orangutan", "Köpekbalığı"],
      answer: 0,
    },
    {
      question: "Hangi ünlü ressam 'Guernica'yı yapmıştır?",
      options: [
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      answer: 0,
    },
    {
      question: "Hangi ülkenin ulusal futbol takımının lakabı 'Samba Boys'tur?",
      options: ["Arjantin", "Brezilya", "Almanya", "İspanya"],

      answer: 1,
    },

    {
      question: "Hangi yazar 'Sineklerin Tanrısı' adlı eseri yazmıştır?",
      options: [
        "J.D. Salinger",
        "George Orwell",
        "William Golding",
        "J.R.R. Tolkien",
      ],

      answer: 2,
    },
    {
      question: "Türkiye'nin en yüksek dağı hangisidir?",
      options: ["Ağrı Dağı", "Toros Dağları", "Erciyes Dağı", "Kaz Dağı"],
      answer: 0,
    },
    {
      question: "Türkiye'nin en büyük gölü hangisidir?",
      options: ["Van Gölü", "Beyşehir Gölü", "Tuz Gölü", "Gölcük"],
      answer: 0,
    },
    {
      question: "Türkiye'nin başkenti hangi şehirdir?",
      options: ["İstanbul", "Ankara", "İzmir", "Bursa"],
      answer: 1,
    },
    {
      question: "Türkiye'nin en kalabalık şehri hangisidir?",
      options: ["İstanbul", "Ankara", "İzmir", "Bursa"],
      answer: 0,
    },
    {
      question:
        "Türkiye'deki Pamukkale traverten terasları hangi ilde bulunur?",
      options: ["Antalya", "Denizli", "Muğla", "Aydın"],
      answer: 1,
    },
    {
      question:
        "Türkiye'nin ilk milli elektrikli otomobili hangi marka tarafından üretilmektedir?",
      options: ["Tofaş", "Renault", "Anadolu Isuzu", "TOGG"],
      answer: 3,
    },
    {
      question: "Türkiye'nin en büyük teknoloji festivali hangisidir?",
      options: [
        "Teknofest",
        "Bilim Festivali",
        "İnovasyon Günleri",
        "Teknoloji Şenliği",
      ],
      answer: 0,
    },

    {
      question: "Türkiye'nin en eski üniversitesi hangisidir?",

      options: [
        "Boğaziçi Üniversitesi",
        "Ankara Üniversitesi",
        "İstanbul Üniversitesi",
        "Hacettepe Üniversitesi",
      ],
      answer: 2,
    },
    {
      question: "Türkiye'nin meclisine ne ad verilir?",
      options: [
        "Meclis-i Mebusan",
        "Temsilciler Meclisi",
        "TBMM",
        "Devlet Meclisi",
      ],
      answer: 2,
    },
    {
      question: "Türkiye'de en yüksek yargı organı hangisidir?",
      options: ["Yargıtay", "Danıştay", "AİHM", "Anayasa Mahkemesi"],

      answer: 3,
    },
  ],
  // 2. Seviye Soruları
  [
    {
      question: "Atlas Dağları'nı gezmekte olan biri hangi ülkede olabilir?",
      options: ["Arjantin", "Fas", "Arnavutluk", "Japonya"],
      answer: 1,
    },
    {
      question:
        "Yağışın oluşması için en son aşamada aşağıdakilerden hangisinin mutlaka gerçekleşmesi gerekir?",
      options: [
        "Havanın Soğuması",
        "Havanın Isınması",
        "Havanın Doyma Noktasına Ulaşması",
        "Yükselici Hava Hareketinin Olması",
      ],
      answer: 2,
    },
    {
      question: "Hangisi bir çeşit acı bala verilen addır?",
      options: ["Deli bal", "Mecnun bal", "Aşık bal", "Divane bal"],
      answer: 0,
    },
    {
      question: "Hangisi atomlarda bulunan temel parçacıklardan biri değildir?",
      options: ["Proton", "Nötron", "Elektron", "Megatron"],
      answer: 3,
    },
    {
      question: "Pazen nedir?",
      options: [
        "Bir tarım aleti",
        "Ara sıra anlamında bir kelime",
        "Bir kumaş türü",
        "Bir müzik aleti",
      ],
      answer: 2,
    },
    {
      question:
        "Geçtiğimiz günlerde vefat eden, Sovyetler Birliği'nin son lideri kimdir?",
      options: [
        "Kraliçe II. Elizabeth",
        "Mihail Gorbaçov",
        "Kral Julien",
        "Pablo Neruda",
      ],
      answer: 1,
    },
    {
      question: "Cebelitarık Boğazı hangi ikisini birbirinden ayırır?",
      options: [
        "Asya ve Amerika",
        "Afrika ve Avrupa",
        "Avrupa ve Asya",
        "Asya ve Afrika",
      ],
      answer: 1,
    },
    {
      question:
        "Sevr Antlaşması'nı gösteren ünlü haritada başka devletlerin kontrolüne bırakılan topraklar bugün eğer o devletlerin toprakları olarak kalmış olsaydı, Türkiye vatandaşlarının hangisini ziyaret etmesi için vize alması gerekmeyecekti?",
      options: [
        "Safranbolu Evleri",
        "Selimiye Camii",
        "Sümela Manastırı",
        "Halikarnas Mozolesi",
      ],
      answer: 0,
    },
    {
      question:
        "Bitkilerin sap ve dallarını öğütmek veya fındığın dış kabuğunu ayırmak için kullanılan, harman işini yapan makineye ne ad verilir?",
      options: ["Patoz", "Takoz", "Tonoz", "Moloz"],
      answer: 0,
    },
    {
      question: "Cebelitarık Boğazı hangi ikisini birleştirir?",
      options: [
        "Akdeniz ve Atlas Okyanusu",
        "Atlas Okyanusu ve Büyük Okyanus",
        "Hazar Denizi ve Aral Gölü",
        "Sarı Deniz ve Hint Okyanusu",
      ],
      answer: 0,
    },
    {
      question: "Sayfiye ne demektir?",
      options: [
        "Yazlık, yazlık ev",
        "Kışlık, kışlık ev",
        "İlkbahar, ilkbaharlık ev",
        "Sonbahar, sonbaharlık ev",
      ],
      answer: 0,
    },

    {
      question:
        "TDK'ye göre hangisi, 'yalnız bakmakla yetinilen aşk' anlamına gelir?",
      options: ["Kara sevda", "Göz sevdası", "Platonik aşk", "Uzak aşk"],
      answer: 1,
    },
    {
      question:
        "Orkestra şeflerinin sahnede mesleklerini icra ederken giydikleri genellikle hangisi olur?",
      options: ["Tütü", "Frak", "Ropdöşambır", "Peştamal"],
      answer: 1,
    },
    {
      question:
        '"Açlık Oyunları" adlı film serisinde Jennifer Lawrence\'ın canlandırdığı başkarakter hangisidir?',
      options: [
        "Ellen Ripley",
        "Clarice Starling",
        "Hunger Games",
        "Katniss Everdeen",
      ],
      answer: 3,
    },
    {
      question:
        "Hangi köprüden geçerken, yüzyıllar öncesinden kalma bir geleneğe uygun olarak cesaretlerini kanıtlamak için köprüden nehre atlayan gençlerle karşılaşabilirsiniz?",
      options: [
        "Golden Gate Köprüsü",
        "Malabadi Köprüsü",
        "Mostar Köprüsü",
        "Galata Köprüsü",
      ],
      answer: 2,
    },
    {
      question:
        "Hangisinden geçiyorsanız ABD'nin Kaliforniya eyaletindesinizdir?",
      options: [
        "Brandenburg Kapısı",
        "Hadrian Duvarı",
        "Golden Gate Köprüsü",
        "Valens Su Kemeri",
      ],
      answer: 2,
    },
    {
      question:
        "Karanlık ve ıssız yerlerde, insanın gördüğünü sandığı korkunç hayalet hangisinin sözlük tanımıdır?",
      options: ["Gulyabani", "Karabasan", "Vampir", "Ebegümeci"],
      answer: 0,
    },
    {
      question:
        "Hangisi esas olarak aruz ölçüsünün 'feilâtün, feilâtün, feilâtün, feilün' kalıbıyla yazılmıştır?",
      options: [
        "Orhun Kitabeleri",
        "İstiklal Marşı",
        "Dede Korkut Hikayeleri",
        "Kutadgu Bilig",
      ],
      answer: 1,
    },
    {
      question:
        "Hangisi mecazi anlamda 'aşırı kalabalıklaşmak' anlamına gelir?",
      options: ["Kız vermek", "Oğul vermek", "Dünür gitmek", "Yerden bitmek"],
      answer: 1,
    },
    {
      question:
        "Sosyal medyada paylaştığı videoda 'Manama'nın merkezinden herkese selamlar!' diyen biri hangi ülkenin başkentinden olduğunu belirtmiş olur?",
      options: ["Bahreyn", "Polonya", "Meksika", "Panama"],
      answer: 0,
    },
    {
      question: "Hangi ülkenin bayrağında beyaz renk yer almaz?",
      options: ["Fransa", "Almanya", "Türkiye", "Yunanistan"],
      answer: 1,
    },
    {
      question:
        "Şirinler adlı çizgi filmde hangi adla bilinen şirinin kolunda kırmızı bir kalp vardır?",
      options: ["Obur Şirin", "Şair Şirin", "Şirine", "Güçlü Şirin"],
      answer: 3,
    },
    {
      question:
        "Hangi gezegenin adı Roma mitolojisinde savaş tanrısıyla ilişkilidir?",
      options: ["Mars", "Venüs", "Jüpiter", "Neptün"],
      answer: 0,
    },
    {
      question: "Hangi yazar 'Madam Bovary' adlı eseri yazmıştır?",
      options: [
        "Gustave Flaubert",
        "Victor Hugo",
        "Émile Zola",
        "Albert Camus",
      ],
      answer: 0,
    },
    {
      question: "Hangi gezegen 'Kızıl Gezegen' olarak da adlandırılır?",
      options: ["Mars", "Jüpiter", "Venüs", "Plüton"],
      answer: 0,
    },
    {
      question: "Din kurallarına göre idare edilen yönetim biçimi hangisidir?",
      options: ["Demokrasi", "Monarşi", "Oligarşi", "Teokrasi"],
      answer: 3,
    },
    {
      question: "İstiklal Marşımızın bestecisi kimdir?",
      options: [
        "Zeki Müren",
        "Rıfat Şanlıel",
        "Ali Rıfat Çağatay",
        "Osman Zeki Üngör",
      ],
      answer: 3,
    },
    {
      question: "Telefonu kim icat etmiştir?",
      options: [
        "Thomas Edison",
        "Nikola Tesla",
        "Marie Curie",
        "Alexander Graham Bell",
      ],
      answer: 3,
    },
    {
      question: "Kadınlara seçme ve seçilme hakkı tanıyan ilk ülke hangisidir?",
      options: ["Fransa", "İngiltere", "Amerika", "Türkiye"],
      answer: 3,
    },
    {
      question: "Notada durak işareti hangisidir?",
      options: ["Mi", "Do", "Es", "La"],
      answer: 2,
    },
    {
      question: "Türkçe hangi dil grubuna girmektedir?",
      options: [
        "Hint – Avrupa",
        "Ural – Altay",
        "Samoit – Filogenetik",
        "Afro-Asyatik",
      ],
      answer: 1,
    },
    {
      question:
        "Müzik ezgileri yazılırken sesleri gösteren işaretlere ne ad verilir?",
      options: ["Akor", "Nota", "Arpej", "Solfedjo"],
      answer: 1,
    },
    {
      question:
        "Bir akarsuyun belirli bir sürede taşıdığı su miktarına ne ad verilir?",
      options: ["Akım", "Sel", "Hız", "Debi"],
      answer: 3,
    },
    {
      question:
        "Ticari yada sanayi bir kuruluşu tanıtmak veya herhangi bir malın satışını arttırmak amacıyla kullanılan çeşitli yolların genel adına ne denir?",
      options: ["Pazarlama", "Promosyon", "Reklam", "İndirim"],
      answer: 2,
    },
    {
      question: "Pusulada ( N ) harfi hangi yönü ifade eder?",
      options: ["Güney", "Kuzey", "Doğu", "Batı"],
      answer: 1,
    },
    {
      question: "Maddenin ölçülemeyen özelliği hangisidir?",
      options: ["Ağırlık", "Renk", "Ses", "Koku"],
      answer: 3,
    },
    {
      question:
        "Dinamiti icat eden ve her yıl adına çeşitli dallarda ödüller verilen ünlü bilim adamı kimdir?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Marie Curie",
        "Alfred Nobel",
      ],
      answer: 3,
    },
    {
      question: "Everest Tepesine tırmanan ilk Türk dağcı kimdir?",
      options: [
        "Nasuh MAHRUKİ",
        "Tunc FINDIK",
        "Ferit ACAR",
        "Bozkurt KARABEKİR",
      ],
      answer: 0,
    },
    {
      question:
        "Altın Palmiye sinema ödülü hangi film festivalinde verilmektedir?",
      options: ["Berlin", "Venedik", "Cannes", "Toronto"],
      answer: 2,
    },
    {
      question: "Altın Portakal Ödülleri hangi şehrimizde verilmektedir?",
      options: ["İstanbul", "Ankara", "İzmir", "Antalya"],
      answer: 3,
    },
    {
      question: "Amerika kıtasını 2’ye ayıran önemli su geçidinin adı nedir?",
      options: ["Suez", "Kanal", "Panama", "Gibraltar"],
      answer: 2,
    },
    {
      question: "Nobel ödülleri hangi ülkede verilmektedir?",
      options: ["İsveç", "Norveç", "Danimarka", "Finlandiya"],
      answer: 0,
    },
    {
      question:
        "Mimar Sinan'ın Ustalık Dönemi eseri sayılan Edirne'deki eserinin adı nedir?",
      options: ["Şehzadebaşı", "Süleymaniye", "Selimiye", "Mihrimah Sultan"],
      answer: 2,
    },
    {
      question: "Hangi Yunan Tanrısı savaş tanrısıdır?",
      options: ["Zeus", "Ares", "Apollon", "Poseidon"],
      answer: 1,
    },
    {
      question:
        "Nathalie Portman’ın 13 yaşında iken rol aldığı efsanevi filmin adı nedir?",
      options: ["Leon", "Fight Club", "Forrest Gump", "Shawshank Redemption"],
      answer: 0,
    },
    {
      question:
        "AMC yapımı olan “The walking dead” yabancı dizisinde olan salgın hangisidir?",
      options: ["Domuz gribi", "Zombi", "Kuduz", "Ebola"],
      answer: 1,
    },
    {
      question: "Hidrojen klorürün halk ağzındaki adı nedir?",
      options: ["Tuz ruhu", "Kezzap", "Sofra tuzu", "Ozon"],
      answer: 0,
    },
    {
      question:
        "Dünya üzerinde düşünülen “Başlangıç Meridyeni” hangi ülkenin hangi beldesinden geçmektedir?",
      options: [
        "İtalya-Monako",
        "İspanya-Madrid",
        "İngiltere-Greenwich",
        "Türkiye-Konya",
      ],
      answer: 2,
    },
    {
      question: "İnsanın sesini değiştiren gaz hangisidir?",
      options: ["Helyum", "Azot", "Nitro", "Ozon"],
      answer: 0,
    },
    {
      question:
        "Hangi padişah “Ve her kimseye evlâtlarımdan saltanat müyesser ola, Nizâm-ı Âlem için karındaşların katl eylemek münasiptir. Ekser ûlema dahi tecviz etmiştir. Anunla âmil olalar.” diyerek kardeş katlini yasallaştırmıştır?",
      options: ["2. Mehmed", "4. Murat", "1. Selim", "3. Murat"],
      answer: 0,
    },
    {
      question: "Ünlü uyuşturucu kaçakcısı Pablo Escobar’ın lakabı nedir?",
      options: [
        "Kolombiyalı Robin Hood",
        "Kokainin Babası",
        "Cennetten Gelen",
        "Medellin Torbacısı",
      ],
      answer: 0,
    },
    {
      question:
        "Türkiye Süper Liginde oynamış ilk “ordinaryus” lakabını alan futbolcu kimdir?",
      options: [
        "Lefter Küçükandonyadis",
        "Alex de Souza",
        "Ariel Ortega",
        "Robin van Persie",
      ],
      answer: 0,
    },
    {
      question:
        "Mutfakta kullanılan aşağıdaki ürünlerden hangisi antibakteriyel özelliktedir?",
      options: ["Sirke", "Bitkisel yağ", "Cam-sil", "Limon"],
      answer: 0,
    },
    {
      question: "Hangi hayvan çiğnemeden yutar?",
      options: ["Kurt", "Çakal", "Sırtlan", "Timsah"],
      answer: 3,
    },
    {
      question:
        "Hangisi eski zamanlarda deterjan yerine kullanılan temizleyici olarak kabul edilir?",
      options: ["Odun külü", "Arap sabunu", "Mintaks", "Fosforlu deterjan"],
      answer: 0,
    },
    {
      question:
        "Bilgisayarın gözle görülebilen elle tutulabilen tüm birimlerine ne ad verilir?",
      options: [
        "Dahili bellek",
        "Bilgisayar donanımı",
        "Bilgisayar yazılımı",
        "Merkezi işlem birimi",
      ],
      answer: 1,
    },
    {
      question: "Hangi ülkelerde kadınların askerlik yapma zorunluluğu vardır?",
      options: ["İsrail", "İngiltere", "Amerika", "Çin"],
      answer: 0,
    },
    {
      question:
        "“Eşitlik, özgürlük ve kardeşlik” sloganı hangi devrimden gelmektedir?",
      options: [
        "Sanayi Devrimi",
        "Amerikan Devrimi",
        "Fransız Devrimi",
        "Güney Amerika Devrimi",
      ],
      answer: 2,
    },
    {
      question: "Hangi sporda kendine özel bir saat kullanılır?",
      options: ["Yüzme", "Satranç", "Hokey", "Buz pateni"],
      answer: 1,
    },
    {
      question: "Hangisi bataklık çiçeğidir?",
      options: ["Nilüfer", "Yonca", "Sümbül", "Aslanağzı"],
      answer: 0,
    },
    {
      question: "Eski Ahit’e göre kim hayvanları gemiye yerleştirmiştir?",
      options: ["Abel", "Musa", "İbrahim", "Nuh"],
      answer: 3,
    },
    {
      question:
        "Mahlası Sagopa Kajmer olan rap müzik sanatçısının gerçek adı (ismi) nedir?",
      options: [
        "Yunus Özyavuz",
        "Bilgin Özçalkan",
        "Ekincan Arslan",
        "Basri Fırat Bayraktar",
      ],
      answer: 0,
    },
    {
      question:
        "Kanuni Sultan Süleyman’ın sakat olarak dünyaya gelen oğlu hangisidir?",
      options: [
        "Şehzade Cihangir",
        "Şehzade Osman",
        "Şehzade Orhan",
        "Şehzade Selim",
      ],
      answer: 0,
    },

    {
      question:
        "Hukuki bir uyuşmazlığın yargıya taşınması için kullanılan belgeye ne ad verilir?",
      options: ["Anayasa", "Kararname", "Dilekçe", "Bildiri"],

      answer: 2,
    },
    {
      question: "Türk hukukunda 'tahkim' nedir?",
      options: [
        "Bir suçu itiraf etmek",
        "Bir dava konusunu bilirkişiye inceletmek",
        "Uyuşmazlıkları arabulucu ile çözmek",
        "Tarafların anlaşmazlıkları için hakem kararı alma yöntemi",
      ],

      answer: 3,
    },
    {
      question: "Türkiye'de Anayasa Mahkemesi'nin kuruluş amacı nedir?",
      options: [
        "Yasaları çıkarmak",
        "Hukuk mahkemesi olarak görev yapmak",
        "Anayasaya aykırı yasaları denetlemek",
        "Ceza davalarını görüşmek",
      ],
      answer: 2,
    },
    {
      question: "Türkiye'nin en yüksek barajı hangi ilimizde bulunmaktadır?",
      options: ["Artvin", "Rize", "Ağrı", "Adana"],
      answer: 0,
    },
    {
      question: "Aşağıdaki şehirlerin hangisinde arkeoloji müzesi bulunmaz?",

      options: ["Konya", "Giresun", "İzmir", "Antalya"],
      answer: 1,
    },
    {
      question:
        "Türkiye'nin en büyük bilim ve teknoloji üssü olarak kabul edilen 'Teknopark İstanbul' hangi ilçemizdedir?",
      options: ["Pendik", "Ümraniye", "Tuzla", "Kadıköy"],
      answer: 0,
    },
    {
      question:
        "Türkiye'de yer alan 'İshak Paşa Sarayı' hangi ilimizde bulunur?",
      options: ["Van", "Erzurum", "Kars", "Ağrı"],

      answer: 3,
    },
    {
      question:
        "Hangi Türk müziği sanatçısı 'Kerkük Zindanı' ve 'Deniz Üstü Köpürür' gibi eserleriyle tanınmıştır?",
      options: ["Cem Karaca", "Belkıs Akkale", "Aşık Veysel", "Arif Sağ"],
      answer: 0,
    },
    {
      question:
        "Türk edebiyatının önde gelen şairlerinden olan, 'Üçüncü Şahsın Şiiri' ve 'Ben Sana Mecburum' gibi eserleri yazan şair kimdir?",
      options: [
        "Nâzım Hikmet",
        "Attila İlhan",
        "Cemal Süreya",
        "Orhan Veli Kanık",
      ],
      answer: 1,
    },
    {
      question:
        "Türk sinemasının önemli yönetmen ve senaristlerinden olan, 'Eşkıya', 'Muhsin Bey' ve 'Gönül Yarası' gibi eserleri yöneten yönetmen kimdir?",
      options: [
        "Atıf Yılmaz",
        "Yavuz Turgul",
        "Nuri Bilge Ceylan",
        "Yılmaz Güney",
      ],
      answer: 1,
    },
    {
      question:
        "Hangi ünlü bilim kurgu yazarı '1984' ve 'Hayvan Çiftliği' gibi eserlerle tanınmıştır?",
      options: [
        "Aldous Huxley",
        "Philip K. Dick",
        "Isaac Asimov",
        "George Orwell",
      ],
      answer: 3,
    },
    {
      question:
        "Bir dik üçgende, hipotenüsün karesi diğer iki kenarın karelerinin toplamına eşittir. Bu teoreme ne ad verilir?",
      options: [
        "Euler Teoremi",
        "Fermat Teoremi",
        "Pythagoras Teoremi",
        "Descartes Teoremi",
      ],
      answer: 2,
    },
    {
      question: "Hangi müzik türü Jamaika kökenlidir?",
      options: ["Reggae", "Jazz", "Pop", "Rock"],
      answer: 0,
    },
    {
      question:
        "Hangi gezegenin adı Roma mitolojisinde deniz tanrısıyla ilişkilidir?",
      options: ["Uranüs", "Venüs", "Jüpiter", "Neptün"],
      answer: 3,
    },
    {
      question: "Hangi gezegen 'Akşam Yıldızı' olarak da adlandırılır?",
      options: ["Mars", "Venüs", "Jüpiter", "Neptün"],
      answer: 1,
    },
    {
      question: "Hangi ülke Angkor Wat tapınak kompleksi ile ünlüdür?",
      options: ["Hindistan", "Kamboçya", "Vietnam", "Tayland"],
      answer: 1,
    },
    {
      question: "Hangi yıl Amerikan Bağımsızlık Bildirgesi kabul edilmiştir?",

      options: ["1492", "1776", "1812", "1945"],

      answer: 1,
    },
    {
      question:
        "Hangi gezegen Güneş Sistemi'nde en fazla uydusu olan gezegendir?",
      options: ["Jüpiter", "Mars", "Satürn", "Uranüs"],
      answer: 2,
    },
    {
      question: "Hangi gezegen en yüksek sıcaklık rekoruna sahiptir?",
      options: ["Venüs", "Mars", "Jüpiter", "Neptün"],
      answer: 0,
    },
    {
      question: "Hangi yazar 'Bülbülü Öldürmek' adlı eseri yazmıştır?",
      options: ["Albert Camus", "Franz Kafka", "Harper Lee", "Haruki Murakami"],
      answer: 2,
    },
    {
      question: "Küçük Prens kitabının yazarı kimdir?",
      options: [
        "Franz Kafka",
        "Victor Hugo",
        "Antoine de Saint-Exupéry",
        "Jules Verne",
      ],
      answer: 2,
    },
    {
      question: "Türkiye'nin en büyük adası hangisidir?",
      options: ["Gökçeada", "Bozcaada", "Büyükada", "Marmara Adası"],
      answer: 0,
    },
    {
      question: "Türkiye Cumhuriyeti'nin ilk kadın bakanı kimdir?",
      options: ["Tansu Çiller", "Türkan Akyol", "Meral Akşener", "Fatma Şahin"],
      answer: 1,
    },
    {
      question: "Hangi yazar 'Cesur Yeni Dünya' adlı distopyayı yazmıştır?",
      options: [
        "George Orwell",
        "Aldous Huxley",
        "Ray Bradbury",
        "Isaac Asimov",
      ],
      answer: 1,
    },
    {
      question: "Türkiye'nin en doğudaki ilçesi hangisidir?",
      options: ["Iğdır", "Kars", "Ağrı", "Hakkari"],
      answer: 3,
    },
    {
      question:
        "Türkiye'nin yüzölçümü bakımından en büyük ikinci şehri hangisidir?",
      options: ["Ankara", "Konya", "Sivas", "Antalya"],
      answer: 2,
    },
    {
      question: "Türkiye'nin yüzölçümü bakımından en küçük şehri hangisidir?",
      options: ["Kilis", "Yalova", "Bartın", "Düzce"],
      answer: 1,
    },
    {
      question: "Aşağıdaki şehirlerin hangisinde Ereğli adlı bir ilçe yoktur?",
      options: ["Tekirdağ", "Edirne", "Zonguldak", "Konya"],
      answer: 1,
    },
    {
      question: "Türkiye'nin en uzun kara sınırı hangi ülkeyledir?",
      options: ["Yunanistan", "Suriye", "Irak", "Gürcistan"],
      answer: 1,
    },
    {
      question: "Türkiye'nin en büyük gölü hangi bölgede yer alır?",
      options: [
        "Akdeniz Bölgesi",
        "İç Anadolu Bölgesi",
        "Doğu Anadolu Bölgesi",
        "Güneydoğu Bölgesi",
      ],
      answer: 2,
    },
    {
      question: "Türkiye'nin en uzun demiryolu hattı hangisidir?",
      options: [
        "Ankara-İstanbul YHT Hattı",
        "Ankara-Kars Demiryolu Hattı",
        "İzmir-İstanbul Demiryolu Hattı",
        "İstanbul-Adana Demiryolu Hattı",
      ],
      answer: 1,
    },
    {
      question: "Türkiye'nin en uzun sahil şeridi hangi denize kıyısı vardır?",
      options: ["Akdeniz", "Ege Denizi", "Karadeniz", "Marmara Denizi"],
      answer: 2,
    },
  ],
  // 3. Seviye Soruları
  [
    {
      question: "Trabzon hurmasının diğer adı hangisidir?",
      options: [
        "Acem hurması",
        "Hint hurması",
        "Japon hurması",
        "Balkan hurması",
      ],
      answer: 2,
    },
    {
      question: "Hangi meyvenin 'gemre' ve 'pembegemre' adında türleri vardır?",
      options: ["Erik", "Karpuz", "Elma", "Üzüm"],
      answer: 3,
    },
    {
      question:
        '"Mende sığar iki cihan, men bu cihana sığmazam" kimin eserinin ilk dizesidir?',
      options: ["Fuzuli", "Baki", "Nesimi", "Aşık Veysel"],
      answer: 2,
    },
    {
      question:
        "Shakespeare'in hangi oyunundaki başkarakter oyunun ilerleyen sahnelerinde İngiltere kralı olur?",
      options: ["Macbeth", "III. Richard", "Othello", "Hamlet"],
      answer: 1,
    },
    {
      question:
        '"Altın Aslan" kazanan bir yönetmen hangi film festivalinin jürisi tarafından "En İyi Yönetmen" seçilmiştir?',
      options: [
        "Venedik Uluslararası Film Festivali",
        "Berlin Uluslararası Film Festivali",
        "Cannes Film Festivali",
        "Antalya Altın Portakal Film Festivali",
      ],
      answer: 0,
    },
    {
      question: "Hangisi 'anlık' anlamına gelmez?",
      options: ["Entelekt", "Spontane", "Aktüel", "Enstantane"],
      answer: 2,
    },
    {
      question:
        "Çekimleri 46 hafta süren ve 'En uzun kesintisiz film çekimi' unvanıyla Guinness Dünya Rekorlarına giren film hangisidir?",
      options: [
        "Kış Uykusu",
        "Ucuz Roman",
        "Gözleri Tamamen Kapalı",
        "Ağır Roman",
      ],
      answer: 2,
    },
    {
      question:
        "Osmanlı tarihinde, hangi addaki padişahların toplam hükümdarlık süresi yaklaşık yüz yılla en uzundur?",
      options: ["Mehmed", "Selim", "Mahmud", "Süleyman"],
      answer: 0,
    },
    {
      question:
        "Sri Lanka, haritadaki şekli ve coğrafi konumundan ötürü hangi ülkenin 'gözyaşı' olarak adlandırılır?",
      options: ["Avustralya", "Japonya", "Meksika", "Hindistan"],
      answer: 3,
    },
    {
      question:
        "Kimin 'Devlet' adlı kitabında, 'idea' kavramı, mağarada bulunan insanlarla ilgili anlatılan bir hikayeyle açıklanır?",
      options: ["Cicero", "Diyojen", "Aristoteles", "Platon"],
      answer: 3,
    },
    {
      question:
        "Keanu Reeves'in Al Pacino'yla sohbet ettiği bir sahne varsa izlediğiniz film muhtemelen hangisidir?",
      options: ["Taksi Şoförü", "Kadın Kokusu", "Şeytanın Avukatı", "Matrix"],
      answer: 2,
    },
    {
      question: "Hangisinin zirvesine tırmanan bir dağcı, Asya kıtasındadır?",
      options: [
        "Rushmore Dağı",
        "Etna Dağı",
        "Everest Dağı",
        "Kilimanjaro Dağı",
      ],
      answer: 2,
    },
    {
      question: "Uruguay'ın resmi adı hangisidir?",
      options: [
        "Uruguay Kuzey Cumhuriyeti",
        "Uruguay Güney Cumhuriyeti",
        "Uruguay Doğu Cumhuriyeti",
        "Uruguay Batı Cumhuriyeti",
      ],
      answer: 2,
    },
    {
      question:
        "Güney Rusya'da yaşayan Kazakları anlattığı tarihi romanları ve hikayeleriyle 1965'te Nobel kazanan, 4 ciltlik 'Ve Durgun Akardı Don' romanının yazarı kimdir?",
      options: [
        "Boris Pasternak",
        "Lev Tolstoy",
        "Maksim Gorki",
        "Mihail Şolohov",
      ],
      answer: 3,
    },
    {
      question:
        "İtalya Serie A'da 2022-2023 sezonunda, 33 yıl aradan sonra tekrar şampiyon olan Napoli futbol takımının stadının adı nedir?",
      options: [
        "Roberto Baggio",
        "Diego Armando Maradona",
        "Zinedine Zidane",
        "Pele",
      ],
      answer: 1,
    },
    {
      question:
        "Hangisi ördekgillerden, tüyleri kiremit renginde bir kuş türünün adıdır?",
      options: ["Ebleh", "Sersem", "Angut", "Budala"],
      answer: 2,
    },
    {
      question: "Payanda nedir?",
      options: ["Takla", "Olta", "Çatı", "Destek"],
      answer: 3,
    },
    {
      question:
        "Güneş Sistemi'ndeki cisimlerden hangisi yüz ölçümü olarak daha büyüktür?",
      options: [
        "En küçük gezegen Merkür",
        "Dünya'nın uydusu Ay",
        "En büyük cüce gezegen Plüton",
        "Satürn'ün uydusu Titan",
      ],
      answer: 3,
    },
    {
      question:
        "Hangisi Uluslararası Uzay İstasyonu'nda bugüne kadar yapılmış sporlardan biri değildir?",
      options: ["Beyzbol", "Futbol", "Satranç", "Yağlı güreş"],
      answer: 3,
    },
    {
      question: "Hangi ünlü ressam 'Starry Night' adlı tabloyu yapmıştır?",
      options: [
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      answer: 1,
    },
    {
      question:
        "Dünyada özellikle felçli hastalar başta olmak üzere birçok rahatsızlığa umut ışığı olan, organların kendini yenileyebileceği yolunda önemli adımlar atılan, bilimsel çalışmaları halen devam eden bilimsel çalışma nedir?",
      options: [
        "Genetik mühendislik",
        "Klonlama",
        "Kök hücre çalışmaları",
        "Nanoteknoloji",
      ],
      answer: 2,
    },
    {
      question: "İlk yerli tiyatro eseri kime aittir?",
      options: ["Namık Kemal", "Şinasi", "Ahmet Mithat Efendi", "Ziya Paşa"],
      answer: 1,
    },
    {
      question:
        "Peygamberler, din büyükleri ve devlet adamları gibi önemli şahsiyetlerin hayatlarını anlatan kitaplara verilen genel ad nedir?",
      options: ["Siyer", "Biografi", "Tefsir", "Hagiografi"],
      answer: 0,
    },
    {
      question: "Telgrafta hangi alfabe kullanılır?",
      options: [
        "Latin Alfabesi",
        "Arap Alfabesi",
        "Mors Alfabesi",
        "Yunan Alfabesi",
      ],
      answer: 2,
    },
    {
      question: "Avrupa Birliğinin başkenti neresidir?",
      options: ["Berlin", "Paris", "Brüksel", "Amsterdam"],
      answer: 2,
    },
    {
      question:
        "Avrupa Birliğini iki kez halk oylamasıyla reddeden ülke hangisidir?",
      options: ["İsviçre", "Norveç", "İngiltere", "Danimarka"],
      answer: 1,
    },
    {
      question: "UNICEF nedir?",
      options: [
        "Uluslararası Barış ve Güvenlik Örgütü",
        "Uluslararası İnsan Hakları Komisyonu",
        "Birleşmiş Milletler Çocukları Koruma Vakfı",
        "Birleşmiş Milletler Gıda Programı",
      ],
      answer: 2,
    },
    {
      question: "2007 yılında Avrupa Birliğine giren ülkeler hangileridir?",
      options: [
        "Arnavutluk – Karadağ",
        "Karadağ – Bulgaristan",
        "Bulgaristan – Romanya",
        "Romanya – Arnavutluk",
      ],
      answer: 2,
    },
    {
      question:
        '"Labirentin Gölgesinde", "Sembollerin Gölgesinde" ve "Anahtarın Gölgesinde" adlı fantastik romanların yazarı kimdir?',
      options: [
        "Halit Ziya Uşaklıgil",
        "Orhan Pamuk",
        "Yahya Karakurt",
        "Umberto Eco",
      ],
      answer: 2,
    },
    {
      question:
        "Atatürk tarafından 4 Eylül 1919 tarihinde Sivas Kongresi'nde kurulmuş olan gazetenin adı nedir?",
      options: [
        "Hakimiyet-i Milliye",
        "Anadolu",
        "İrade-i Milliye",
        "Aydınlık",
      ],
      answer: 2,
    },
    {
      question:
        "Osmanlı Devleti'nde ilk nüfus sayımı hangi padişah zamanında yapılmıştır?",
      options: [
        "Yavuz Sultan Selim",
        "Kanuni Sultan Süleyman",
        "Fatih Sultan Mehmet",
        "2. Mahmut",
      ],
      answer: 3,
    },
    {
      question:
        "Dünya’nın çevresinde dönen, laboratuvar ve gözlem evi olarak kullanılan yaşanabilir uzay üssünün adı nedir?",
      options: [
        "Ay",
        "Yaşanabilir Uzay Üssü",
        "Uluslararası Uzay İstasyonu",
        "Ölüm Yıldızı",
      ],
      answer: 2,
    },
    {
      question: "Pearl Harbor ne tür bir askeri üstü?",
      options: [
        "Ordu",
        "Deniz Kuvvetleri",
        "Deniz Piyade Kolordusu",
        "Hava Kuvvetleri",
      ],
      answer: 1,
    },
    {
      question:
        "Hangi bilim insanı elektriği ücretsiz olarak tüm dünyaya ulaştırmak istemiş fakat elektrik şirketleri tarafından engellenmiştir?",
      options: ["Tomas Edison", "Isaac Newton", "Graham Bell", "Nicola Tesla"],
      answer: 3,
    },
    {
      question:
        "Hangi şehir II. Dünya Savaşı boyunca Almanya’nın merkezi olmuştur?",
      options: ["Frankfurt", "Münih", "Berlin", "Hamburg"],
      answer: 2,
    },
    {
      question:
        "Yüzüklerin Efendisi filmindeki Boromir karakterinin kardeşinin adı nedir?",
      options: ["Aragorn", "Faramir", "Eomer", "Denethor"],
      answer: 1,
    },
    {
      question:
        "Hangi futbolcu Polonya asıllı olmasına rağmen Almanya milli takımında oynamaktadır?",
      options: [
        "R. Lewandowski",
        "Mario Gomez",
        "Lukas Podolski",
        "Mario Götze",
      ],
      answer: 2,
    },
    {
      question: "Hangisi Araplara Türkçe öğretmek amacıyla yazılmıştır?",
      options: [
        "Divan-ı Lügat’tit Türk",
        "Lugat-ı Durub-i Türki",
        "Kutadgu Bilig",
        "Muhametül Lugateyn",
      ],
      answer: 0,
    },
    {
      question: "Evlerde kullanılan naftalin ne renk olur?",
      options: ["Yeşil", "Sarı", "Beyaz", "Mavi"],
      answer: 2,
    },
    {
      question:
        "Kendilerini efendi bulup ona hizmet etme amacı olan küçük, sarı renkli animasyon karakterlerinin adı nedir?",
      options: ["Şirinler", "Sincaplar", "Penguenler", "Minyonlar"],
      answer: 3,
    },
    {
      question: "Hangi hayvanın kuyruğu ile kavrayabilme yeteneği vardır?",
      options: ["Fare", "Kedi", "Kunduz", "Keseli sıçan"],
      answer: 3,
    },
    {
      question:
        "Hangi ünlü yazar geçirdiği ruh ve inanç buhranının ortasında diriliş adlı romanı yazmıştır?",
      options: [
        "Dostoyevski",
        "Lev Tolstoy",
        "Vladimir Nabokov",
        "Gustave Flaubert",
      ],
      answer: 1,
    },
    {
      question: "Hangisi odyologlarla ilgilidir?",
      options: ["Burun", "Diş", "Göz", "Kulak"],
      answer: 3,
    },
    {
      question:
        "Hangisi Thomas More’un kurgusal bir adada geçen ünlü eseridir?",
      options: ["Ütopya", "Savunma", "Devlet", "Bin dokuz yüz seksen dört"],
      answer: 0,
    },
    {
      question: "Asteriks ve Oburiks nerelilerdir?",
      options: ["Galyalı", "Romalı", "Mısırlı", "Viking"],
      answer: 0,
    },

    {
      question: "Geçiş ikliminin görüldüğü bölgemiz neresidir?",
      options: [
        "Akdeniz Bölgesi",
        "Ege Bölgesi",
        "İç Anadolu Bölgesi",
        "Marmara Bölgesi",
      ],
      answer: 3,
    },
    {
      question: "Hangi filozof Alman İdealizmi’nin kurucusudur?",
      options: [
        "Immanuel Kant",
        "Freidrich Hegel",
        "Arthur Schopenhauer",
        "Gottlieb Fichte",
      ],
      answer: 0,
    },
    {
      question: "Müşkülpesent kelimesinin anlamı nedir?",
      options: ["Zor beğenen", "Dik kafalı", "Şımarık", "Düşkün"],
      answer: 0,
    },
    {
      question: "Gaz veya sıvı akışlarının basıncını ne ölçer?",
      options: ["Avometre", "Manometre", "Termometre", "Potansiyometre"],
      answer: 1,
    },
    {
      question: "Giyotin hangi ülkede tanıtılmıştır?",
      options: ["Fransa", "İtalya", "Birleşik Devletler", "Brezilya"],
      answer: 0,
    },

    {
      question:
        "Türk edebiyatının önemli isimlerinden biri olan, 'Küçük Ağa' ve 'Osmancık' gibi eserleri yazan yazar kimdir?",
      options: [
        "Orhan Pamuk",
        "Necip Fazıl Kısakürek",
        "Halide Edip Adıvar",
        "Tarık Buğra",
      ],
      answer: 3,
    },
    {
      question:
        "Hangi müzik türü 'Piano Man' adlı şarkısıyla ünlü olan Billy Joel'e aittir?",
      options: ["Rock", "Blues", "Jazz", "Country"],
      answer: 0,
    },
    {
      question:
        "Hangi ünlü matematikçi 'Principia Mathematica' adlı eseriyle bilinir ve kütle çekim yasasını formüle etmiştir?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Euclid"],
      answer: 1,
    },
    {
      question:
        "Hangi bilim adamı 'İskoç Felsefesi'ni kurmuş ve 'Ulusların Zenginliği' adlı eseri ile tanınmıştır?",
      options: ["John Locke", "Adam Smith", "Thomas Hobbes", "David Hume"],
      answer: 1,
    },
    {
      question: "Türkiye Cumhuriyeti'nin ilk kadın milletvekili kimdir?",
      options: [
        "Halide Edip Adıvar",
        "Sabiha Gökçen",
        "Türkan Akyol",
        "Müfide İlhan",
      ],
      answer: 2,
    },
    {
      question: "Türkiye'nin en büyük platosu hangisidir?",
      options: [
        "Anadolu Platosu",
        "Doğu Anadolu Platosu",
        "İç Anadolu Platosu",
        "Çukurova",
      ],
      answer: 2,
    },
    {
      question: "Türkiye'nin en batıdaki ilçesi hangisidir?",
      options: ["Çeşme", "Datça", "Bodrum", "Fethiye"],
      answer: 1,
    },
    {
      question: "Hangi ünlü sanatçı 'Yaratılış' adlı freskini yapmıştır?",
      options: [
        "Leonardo da Vinci",
        "Michelangelo",
        "Raphael",
        "Sandro Botticelli",
      ],
      answer: 1,
    },
    {
      question: "Hangi ünlü ressam 'Büyük Dalga' adlı tabloyu yapmıştır?",
      options: ["Hokusai", "Pablo Picasso", "Vincent van Gogh", "Edvard Munch"],
      answer: 0,
    },
    {
      question: "Hangi ünlü filozof 'Tanrı öldü.' sözünü söylemiştir?",
      options: [
        "Friedrich Nietzsche",
        "Søren Kierkegaard",
        "Immanuel Kant",
        "Jean-Jacques Rousseau",
      ],
      answer: 0,
    },

    {
      question: "Hangi şehir 'Ebedi Şehir' olarak da adlandırılır?",
      options: ["Paris", "Roma", "Atina", "İstanbul"],
      answer: 1,
    },
    {
      question: "Klasik müzikte 'Fur Elise' kimin eseridir?",
      options: [
        "Johann Sebastian Bach",
        "Ludwig van Beethoven",
        "Wolfgang Amadeus Mozart",
        "Franz Schubert",
      ],
      answer: 1,
    },
    {
      question: "Hangi ülke 'Land of the Rising Sun' olarak bilinir?",

      options: ["Almanya", "Japonya", "Brezilya", "Mısır"],

      answer: 1,
    },
    {
      question: "Hangi element sembolü 'Br' ile gösterilir?",
      options: ["Brom", "Bor", "Berilyum", "Bakır"],
      answer: 0,
    },
    {
      question: "Hangi yazar 'Sis ve Gece' adlı eseri yazmıştır?",
      options: [
        "Leo Tolstoy",
        "Fyodor Dostoevsky",
        "Orhan Pamuk",
        "Halide Edip Adıvar",
      ],
      answer: 2,
    },
    {
      question: "Dünyanın en derin okyanus çukuru hangisidir?",
      options: [
        "Kermadec Çukuru",
        "Puerto Rico Çukuru",
        "Mariana Çukuru",
        "Filipin Çukuru",
      ],
      answer: 2,
    },
    {
      question: "Hangi yazar 'Cehennemlik Yürek' adlı eseri yazmıştır?",
      options: [
        "Edgar Allan Poe",
        "H.P. Lovecraft",
        "Bram Stoker",
        "Mary Shelley",
      ],

      answer: 0,
    },
    {
      question: "Hangi ünlü sanatçı 'David' heykelini yapmıştır?",
      options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
      answer: 0,
    },
    {
      question: "Hangi büyük İskoç yazar 'Robinson Crusoe' romanını yazmıştır?",
      options: [
        "Charles Dickens",
        "Jonathan Swift",
        "J.R.R. Tolkien",
        "Daniel Defoe",
      ],
      answer: 3,
    },
    {
      question: "Hangi kimyager 'Periodik Sistem'i oluşturmuştur?",
      options: [
        "Dmitri Mendeleev",
        "Marie Curie",
        "Robert Boyle",
        "Antoine Lavoisier",
      ],
      answer: 0,
    },
  ],
  // 4. Seviye Soruları
  [
    {
      question: '"Roland-Garros şampiyonu" olan biri hangi sporu yapıyordur?',
      options: ["Tenis", "Golf", "Bilardo", "Polo"],
      answer: 0,
    },
    {
      question:
        "ABD New York'taki Özgürlük Heykeli bir elinde meşale tutarken diğer elinde ne tutar?",
      options: ["Anayasa kitabı", "Kitabe", "Terazi", "Hiçbir şey"],
      answer: 1,
    },
    {
      question: "Ebu Şüca Muhammed bin Davud kimdir?",
      options: ["Timur", "Alparslan", "Selahaddin Eyyubi", "Cengiz Han"],
      answer: 1,
    },
    {
      question:
        '"Züğürt Ağa"da Abuzer, "Eşkıya"da Mustafa ve başrollerini Şener Şen ve Kenan İmirzalıoğlu\'nun paylaştığı "Kabadayı"da Beyto karakterini canlandıran oyuncu kimdir?',
      options: ["Hayati Hamzaoğlu", "Kemal İnci", "Kadir Savun", "Erol Taş"],
      answer: 1,
    },
    {
      question:
        "Hangisi yönetmenliği Woody Allen'ın yaptığı bir film değildir?",
      options: [
        "Roma'ya sevgilerle",
        "Paris'te Gece Yarısı",
        "Barselona, Barselona",
        "Büyük Budapeşte Oteli",
      ],
      answer: 3,
    },
    {
      question: "İlk programlama dilini kim yaratmıştır?",
      options: ["Steve Jobs", "Alan Turing", "Ada Lovelace", "Bill Gates"],

      answer: 2,
    },
    {
      question:
        "FIFA Dünya Kupası tarihinde yarı finale ulaşmayı başaran ve başkenti Afrika'da olan tek ülke hangisidir?",
      options: ["Nijerya", "Senegal", "Güney Afrika", "Fas"],
      answer: 3,
    },
    {
      question:
        "Eylül 2021'de nerede eski bir geleneği devam ettirmek için 1428 yunus öldürülmüştür?",
      options: [
        "Danimarka'ya bağlı Faroe Adaları'nda",
        "Japonya'ya bağlı Ryukyu Adaları'nda",
        "Birleşik Krallık'a bağlı Falkland Adaları'nda",
        "ABD'ye bağlı Hawaii Adaları'nda",
      ],
      answer: 0,
    },
    {
      question:
        "Manisa’nın Spil dağında bulunan “ağlayan kaya“ anlamına gelen kayanın mitolojik adı nedir?",
      options: ["Medusa", "Pandora", "Niobe", "Atalanta"],
      answer: 2,
    },
    {
      question:
        "Kurtuluş Savaşımızı doğrudan işleyen ilk roman aşağıdakilerden hangisidir?",
      options: [
        "Türk’ün Ateşle İmtihanı",
        "Ateşten Gömlek",
        "Yaban",
        "Vurun Kahpeye",
      ],
      answer: 1,
    },
    {
      question: "Ege’nin incisi İzmir’imizin eski adı nedir?",
      options: ["Ephesus", "Pergamon", "Myra", "Smyrna"],
      answer: 3,
    },
    {
      question: "Tarihi Aspendos Tiyatrosu hangi ilimizdedir?",
      options: ["İzmir", "Muğla", "Antalya", "Mersin"],
      answer: 2,
    },
    {
      question:
        "Fransa’da siyasal taşlama oyunu olarak bilinen oyunun adı nedir?",
      options: ["Soti", "Commedia dell'arte", "Kabuki", "Pantomim"],
      answer: 0,
    },
    {
      question:
        "Edebiyatımızda ilk çocuk şiirleri yazan ve bu şiirleri “Şermin” adlı şiir kitabında bir araya getiren şairimiz kimdir?",
      options: [
        "Cenap Şehabettin",
        "Yahya Kemal Beyatlı",
        "Tevfik Fikret",
        "Mehmet Emin Yurdakul",
      ],
      answer: 2,
    },
    {
      question:
        "Dünya Hayvanları Koruma Federasyonu, 1931 yılında Floransa'da toplanarak dünya üzerinde yok olma tehdidi altında bulunan hayvan türlerine dikkat çekmek amacıyla hangi günü Hayvanları Koruma Günü olarak ilan etmiştir?",
      options: ["20 Mayıs", "15 Temmuz", "4 Ekim", "10 Aralık"],
      answer: 2,
    },
    {
      question:
        "Çocuk Hakları Sözleşmesinin Birleşmiş Milletler Genel Kurulunda kabul edilmesi münasebetiyle her yıl hangi tarihte Çocuk Hakları Günü hangi kutlanmaktadır?",
      options: ["23 Nisan", "1 Haziran", "20 Kasım", "5 Aralık"],
      answer: 2,
    },
    {
      question:
        "Sinek kuşlarının ilgisini çoğunlukla ne renk çiçekler çekmektedir?",
      options: ["Kırmızı", "Sarı", "Mavi", "Beyaz"],
      answer: 0,
    },
    {
      question:
        "Selimiye Camisi’nde ters olarak konulmuş sütundaki kabartma hangi çiçeğe aittir?",
      options: ["Lale", "Gül", "Karanfil", "Papatya"],
      answer: 0,
    },
    {
      question: "Hangi ülkenin bayrağının üzerinde haç yoktur?",
      options: ["Norveç", "Finlandiya", "Polonya", "İzlanda"],
      answer: 2,
    },

    {
      question:
        "Aşağıdaki Disney dizilerinden hangisi 3 Emmy ödülü kazanmıştır?",
      options: [
        "Hannah Montana",
        "Waverly Büyücüleri",
        "Zil Çalınca",
        "Sony’in Yıldızı",
      ],
      answer: 1,
    },
    {
      question: "Akciğeri örten zara ne denir?",
      options: ["Pleura", "Femur", "Pelvis", "Humeri"],
      answer: 0,
    },
    {
      question:
        "Eyfel Kulesi’nden nefret etmesine rağmen her gün kulenin altındaki kafeye giden yazar kimdir?",
      options: [
        "Guy de Maupussant",
        "Victor Hugo",
        "Orhan Pamuk",
        "Henry Toulouse Lautrec",
      ],
      answer: 0,
    },
    {
      question:
        "Eskişehirspor’un formasında uzun yıllardır hiç değişmeyen forma önü reklamı hangi firmaya aittir?",
      options: ["Eti", "Turkish Airlines", "Türk Telekom", "Huawei"],
      answer: 0,
    },
    {
      question:
        "Rocky 1, 1976 Akademi Ödellerinde kaç dalda ödüle layık görülmüştür?",
      options: ["1", "3", "7", "11"],
      answer: 1,
    },
    {
      question: "Normal bir DNA’da Adenin nükleotiti hangisi ile eşleşir?",
      options: ["Adenin", "Guanin", "Timin", "Sitozin"],
      answer: 2,
    },
    {
      question: "Periyodik tablodaki en parlak element nedir?",
      options: ["Kalsiyum", "Lityum", "Sezyum", "Sodyum"],
      answer: 1,
    },
    {
      question:
        "Da Vinci Şifresi kitabının baş karakteri kimdir ve olay nerede geçmektedir?",
      options: [
        "David Gurney – Ohio",
        "Robert Langdon – Fransa",
        "Tim Miller – Londra",
        "Simon White – Kanada",
      ],
      answer: 1,
    },
    {
      question: "Hangi ülke Venezuela’nın sınır komşularından biridir?",
      options: ["Kolombiya", "Brezilya", "Guyana", "Kolombiya"],
      answer: 0,
    },

    {
      question:
        "Türk resim sanatının önde gelen isimlerinden olan, 'Oturan Adamlar' , 'Marsilya'da Fransız İşçileri Bir Kahvede' ve 'Baloncu' gibi eserleriyle tanınan ressam kimdir?",
      options: ["Fikret Mualla", "İbrahim Çallı", "Ömer Uluç", "Abidin Dino"],
      answer: 0,
    },
    {
      question: "Hangi ünlü yazar 'Carmen' adlı operanın kitabını yazmıştır?",
      options: [
        "Victor Hugo",
        "Leo Tolstoy",
        "Fyodor Dostoevsky",
        "Prosper Mérimée",
      ],
      answer: 3,
    },
    {
      question:
        "Türk tiyatrosunun önemli isimlerinden olan, 'Şişhane'ye Yağmur Yağıyordu' ve 'Keşanlı Ali Destanı' gibi eserleri yazan tiyatro yazarı kimdir?",
      options: [
        "Haldun Taner",
        "Cahit Sıtkı Tarancı",
        "Orhan Kemal",
        "Recaizade Mahmut Ekrem",
      ],
      answer: 0,
    },
    {
      question:
        "Hangi ünlü fizikçi 'Teorik Fizikte Kuantum Mekaniği' ile Nobel Fizik Ödülü kazanmıştır?",
      options: [
        "Werner Heisenberg",
        "Albert Einstein",
        "Richard Feynman",
        "Niels Bohr",
      ],
      answer: 0,
    },
    {
      question:
        "Hangi ünlü filozof 'Varlık, öz'den önce gelir.' sözünü söylemiştir?",
      options: [
        "Jean-Paul Sartre",
        "Platon",
        "Immanuel Kant",
        "Friedrich Nietzsche",
      ],
      answer: 0,
    },
    {
      question: "Kim tarafından 'Rölativite Teorisi' geliştirilmiştir?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Niels Bohr",
      ],
      answer: 1,
    },
    {
      question: "Hangi yazar 'Ulysses' adlı eseri yazmıştır?",
      options: [
        "James Joyce",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "Virginia Woolf",
      ],
      answer: 0,
    },
    {
      question: "Hangi ünlü ressam 'Gece Kahvesi' tablosunu yapmıştır?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Edvard Munch",
        "Salvador Dali",
      ],
      answer: 0,
    },
    {
      question: "Bir yıl kaç saniyeden oluşur?",
      options: ["3600", "86400", "31536000", "525600"],
      answer: 2,
    },
    {
      question: "Hangi gezegenin en büyük uydusu Titan'dır?",
      options: ["Mars", "Venüs", "Jüpiter", "Satürn"],
      answer: 3,
    },
    {
      question: "Hangi dili Sun Microsystems yaratmıştır?",
      options: ["Python", "Java", "C++", "Ruby"],
      answer: 1,
    },
    {
      question: "Hangi ünlü heykel 'Aşk Tanrıçası' olarak da bilinir?",

      options: ["Venus de Milo", "David", "Modesty", "Ecstasy of Saint Teresa"],
      answer: 0,
    },

    {
      question: "Hangi renkli taş 'Şubat' ayının doğum taşı olarak bilinir?",

      options: ["Zümrüt", "Safir", "Ametist", "Opal"],

      answer: 2,
    },
    {
      question: "Hangi kimyager 'Modern Atom Teorisi'ni ortaya atmıştır?",
      options: [
        "John Dalton",
        "Marie Curie",
        "Niels Bohr",
        "Erwin Schrödinger",
      ],
      answer: 0,
    },
    {
      question:
        "Floransada birçok katedral ve dini mabetler için yapmış olduğu heykellerle bilinen 'Arte di Cambio (Bankerler Loncası)' için Aziz Matta (Saint Matthew) heykelini yapmış olan 1455'te  77 yaşında öden sanatçı hangisidir?",

      options: [
        "Giorgio Vasari",
        "Leonardo da Vinci",
        "Michelangelo",
        "Lorenzo Ghiberti",
      ],
      answer: 3,
    },
  ],
  //DAĞITILACAK SORULAR
  // [],
];
// console.log(questions[0].length, "1. Seviye Soruları");
// console.log(questions[1].length, "2. Seviye Soruları");
// console.log(questions[2].length, "3. Seviye Soruları");
// console.log(questions[3].length, "4. Seviye Soruları");
// console.log(questions[4].length, "Dağıtılacak Sorular");

export default questions;
