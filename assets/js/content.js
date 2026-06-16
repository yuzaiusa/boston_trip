/* ============================================================================
   Boston Trip — bilingual content (single source of truth)
   Every text field is { en, zh }. Edit text here; the app renders it.
   To add a photo: drop a file into assets/img/ and set its name in `img`.
   ========================================================================== */

const I18N = {
  en: {
    appTitle: "Boston Family Trip",
    appDates: "June 24 – 27, 2026",
    home: "Itinerary",
    back: "Back",
    day: "Day",
    overview: "Overview",
    transport: "Getting around",
    stops: "Stops & sights",
    openMaps: "Open in Apple Maps",
    mustSee: "Must-see highlights",
    intro: "About",
    story: "Background story",
    walk: "Walking",
    hours: "Hours",
    tips: "Good to know",
    practical: "Practical Info",
    practicalSub: "Hotel, parking, trains, tips",
    photoSoon: "Photo coming soon",
    langName: "中文",
  },
  zh: {
    appTitle: "波士顿家庭之旅",
    appDates: "2026年6月24日 – 27日",
    home: "行程总览",
    back: "返回",
    day: "第",
    overview: "今日概览",
    transport: "交通方式",
    stops: "景点安排",
    openMaps: "用 Apple 地图打开",
    mustSee: "必看亮点",
    intro: "景点简介",
    story: "背景故事",
    walk: "步行",
    hours: "开放时间",
    tips: "温馨提示",
    practical: "实用信息",
    practicalSub: "酒店、停车、火车、贴士",
    photoSoon: "照片待补充",
    langName: "EN",
  },
};

const TRIP = {
  title: { en: "Boston Family Trip", zh: "波士顿家庭之旅" },
  subtitle: {
    en: "A relaxed 4-day guide — June 24 to 27, 2026",
    zh: "轻松四日游 — 2026年6月24日至27日",
  },

  days: [
    {
      id: "wed",
      label: { en: "Wed · Jun 24", zh: "周三 · 6月24日" },
      title: { en: "Drive Up & New Haven Stop", zh: "驱车北上 · 纽黑文小憩" },
      summary: {
        en: "Leave Short Hills around 11am. Lunch and an easy stroll at Yale, then on to the hotel in Norwood — arriving comfortably before 5pm.",
        zh: "上午11点左右从 Short Hills 出发。在耶鲁大学吃午餐、轻松散步，之后前往诺伍德（Norwood）的酒店，5点前从容抵达。",
      },
      transport: {
        en: "By car the whole day. About 1h20 to New Haven, then about 2h to the hotel.",
        zh: "全天自驾。到纽黑文约1小时20分，再到酒店约2小时。",
      },
      sites: ["yale", "hotel"],
    },
    {
      id: "thu",
      label: { en: "Thu · Jun 25", zh: "周四 · 6月25日" },
      title: { en: "Harvard & MIT", zh: "哈佛与麻省理工" },
      summary: {
        en: "A relaxed day on two famous campuses. Easy, flat walking with plenty of benches. Lunch in Harvard Square; afternoon rest back at the hotel.",
        zh: "在两所名校度过轻松的一天。路面平坦、长椅众多，步行轻松。在哈佛广场吃午餐，下午回酒店休息。",
      },
      transport: {
        en: "Drive ~35–40 min and park near Harvard Square; MIT is a short 10-minute drive from Harvard.",
        zh: "自驾约35–40分钟，在哈佛广场附近停车；从哈佛到麻省理工只需约10分钟车程。",
      },
      sites: ["harvard", "mit"],
    },
    {
      id: "fri",
      label: { en: "Fri · Jun 26", zh: "周五 · 6月26日" },
      title: { en: "Downtown Boston", zh: "波士顿市区" },
      summary: {
        en: "Gardens, water and history. Swan Boats in the Public Garden, an optional Duck Tour river cruise, and the Freedom Trail by hop-on/hop-off trolley.",
        zh: "花园、水景与历史。在公共花园乘坐天鹅船，可选鸭子船河上游览，并乘坐随上随下观光车游览自由之路。",
      },
      transport: {
        en: "Two options (decide on the day): take the Norwood commuter rail into the city, or drive and park downtown. Both are described below.",
        zh: "两种方案（当天再定）：乘坐诺伍德通勤火车进城，或自驾在市区停车。两者说明见下。",
      },
      sites: ["public-garden", "duck-tour", "freedom-trail", "north-end"],
    },
    {
      id: "sat",
      label: { en: "Sat · Jun 27", zh: "周六 · 6月27日" },
      title: { en: "Chinatown Lunch & Drive Home", zh: "唐人街午餐 · 返程" },
      summary: {
        en: "Check out, drive into the city for an early lunch in Chinatown, then head home with one rest stop along the way.",
        zh: "退房后驱车进城，在唐人街吃一顿早午餐，然后启程回家，途中休息一次。",
      },
      transport: {
        en: "By car. ~25 min to Chinatown, then ~4h15 home with a rest stop in Connecticut.",
        zh: "自驾。到唐人街约25分钟，之后约4小时15分回家，途中在康涅狄格州休息。",
      },
      sites: ["chinatown"],
    },
  ],

  sites: {
    /* ---------------------------------------------------------------- WED */
    yale: {
      emoji: "🎓",
      name: { en: "Yale University & New Haven", zh: "耶鲁大学与纽黑文" },
      area: { en: "New Haven, Connecticut", zh: "康涅狄格州 纽黑文" },
      summary: {
        en: "A gentle stroll on a beautiful old campus, plus America's most famous pizza.",
        zh: "在美丽的古老校园轻松散步，再尝尝全美最有名的披萨。",
      },
      intro: {
        en: "Yale, founded in 1701, is one of the oldest universities in America. Old Campus is a flat, leafy quadrangle that's perfect for a short, easy walk before lunch.",
        zh: "耶鲁大学创立于1701年，是美国最古老的大学之一。老校区（Old Campus）是一片平坦、绿树成荫的四方庭院，非常适合午餐前轻松散步。",
      },
      story: {
        en: "Yale has educated five U.S. presidents and countless world leaders. Its Gothic stone towers and ivy walls feel like a film set. Nearby Wooster Street is the birthplace of New Haven-style coal-fired 'apizza' — a local legend since the 1920s.",
        zh: "耶鲁培养了五位美国总统和无数世界领袖。哥特式的石塔与爬满常春藤的墙壁宛如电影场景。附近的伍斯特街（Wooster Street）是纽黑文煤炉披萨（apizza）的发源地，自1920年代起便是当地传奇。",
      },
      walk: { en: "Short & flat (~15 min on Old Campus).", zh: "短而平坦（老校区约15分钟）。" },
      hours: { en: "Campus open daily; pizza spots open ~11am.", zh: "校园全天开放；披萨店约上午11点开门。" },
      tips: {
        en: "For lunch try Frank Pepe (the original, since 1925) or Sally's Apizza on Wooster Street. Expect a short wait — both have famous clam and tomato pies.",
        zh: "午餐推荐伍斯特街上的 Frank Pepe（创于1925年的元祖店）或 Sally's Apizza。可能需稍等片刻——两家的白蛤披萨和番茄披萨都久负盛名。",
      },
      coords: [41.3083, -72.9279],
      mapQuery: "Yale University Old Campus, New Haven CT",
      mustSee: [
        { emoji: "🏛️", img: "yale-oldcampus.jpg", caption: { en: "Old Campus quadrangle & Gothic towers", zh: "老校区庭院与哥特式石塔" } },
        { emoji: "📚", img: "yale-library.jpg", caption: { en: "Sterling Memorial Library (cathedral-like)", zh: "斯特林纪念图书馆（宛如教堂）" } },
        { emoji: "🍕", img: "yale-pizza.jpg", caption: { en: "New Haven coal-fired apizza on Wooster St", zh: "伍斯特街的纽黑文煤炉披萨" } },
      ],
    },
    hotel: {
      emoji: "🏨",
      name: { en: "Hampton Inn Boston-Norwood", zh: "波士顿诺伍德希尔顿欢朋酒店" },
      area: { en: "Norwood, Massachusetts", zh: "马萨诸塞州 诺伍德" },
      summary: {
        en: "Your home base for three nights, south of Boston.",
        zh: "三晚的落脚之处，位于波士顿南郊。",
      },
      intro: {
        en: "A comfortable, easy hotel about 30 minutes south of downtown Boston. Free parking and breakfast make mornings simple.",
        zh: "一家舒适便利的酒店，距波士顿市中心约30分钟车程。免费停车和早餐让早晨格外轻松。",
      },
      story: {
        en: "Norwood is a quiet suburb with easy highway access and its own commuter-rail station into Boston — a relaxed base away from city crowds.",
        zh: "诺伍德是一个安静的郊区，高速公路出入方便，还设有通往波士顿的通勤火车站——是远离市区喧嚣的舒适落脚点。",
      },
      walk: { en: "None — park at the door.", zh: "无需步行——车停门口。" },
      hours: { en: "Check-in from 3pm; aim to arrive before 5pm.", zh: "下午3点起可入住；建议5点前抵达。" },
      tips: {
        en: "Address: 434 Providence Hwy, Norwood, MA 02062. Note: the World Cup match at nearby Foxborough on Fri Jun 26 may bring extra traffic and crowds to this area in the afternoon/evening.",
        zh: "地址：434 Providence Hwy, Norwood, MA 02062。注意：6月26日（周五）附近福克斯堡的世界杯比赛可能在下午/傍晚为本区带来额外车流和人群。",
      },
      coords: [42.1935, -71.1960],
      mapQuery: "Hampton Inn Boston Norwood, 434 Providence Hwy Norwood MA",
      mustSee: [],
    },

    /* ---------------------------------------------------------------- THU */
    harvard: {
      emoji: "🎓",
      name: { en: "Harvard Yard & Square", zh: "哈佛园与哈佛广场" },
      area: { en: "Cambridge, Massachusetts", zh: "马萨诸塞州 剑桥市" },
      summary: {
        en: "America's oldest university — flat paths, grand halls, a lively square.",
        zh: "美国最古老的大学——平坦小径、宏伟楼宇、热闹广场。",
      },
      intro: {
        en: "Founded in 1636, Harvard is the oldest university in the United States. Harvard Yard is a flat, shaded green with benches everywhere — an easy and beautiful walk.",
        zh: "哈佛创立于1636年，是美国历史最悠久的大学。哈佛园（Harvard Yard）是一片平坦、绿荫遮蔽的草地，处处有长椅——散步轻松又惬意。",
      },
      story: {
        en: "Touching the shoe of the John Harvard statue is said to bring good luck (locals call it the 'Statue of Three Lies'). Widener Library holds over 3 million volumes. Eight U.S. presidents studied here.",
        zh: "据说摸一摸约翰·哈佛雕像的鞋子会带来好运（当地人戏称它为“三谎雕像”）。怀德纳图书馆藏书超过300万册。这里走出了八位美国总统。",
      },
      walk: { en: "Easy & flat (~1 mile, with rests).", zh: "轻松平坦（约1英里，可随时休息）。" },
      hours: { en: "Yard open daily; shops & cafés all day.", zh: "校园全天开放；商店与咖啡馆全天营业。" },
      tips: {
        en: "Lunch in Harvard Square has many sit-down options. Optional indoor add-on: the Harvard Museum of Natural History and its famous Glass Flowers (a short walk, great in heat or rain).",
        zh: "哈佛广场有许多可坐下用餐的选择。可选室内项目：哈佛自然历史博物馆及其著名的“玻璃花”（步行不远，炎热或下雨时尤为适合）。",
      },
      coords: [42.3744, -71.1169],
      mapQuery: "Harvard Yard, Cambridge MA",
      mustSee: [
        { emoji: "🗽", img: "harvard-statue.jpg", caption: { en: "John Harvard statue — rub the shoe!", zh: "约翰·哈佛雕像——摸摸鞋子！" } },
        { emoji: "📚", img: "harvard-widener.jpg", caption: { en: "Widener Library's grand steps", zh: "怀德纳图书馆的宏伟台阶" } },
        { emoji: "⛪", img: "harvard-church.jpg", caption: { en: "Memorial Church & the leafy Yard", zh: "纪念教堂与绿荫校园" } },
        { emoji: "🛍️", img: "harvard-square.jpg", caption: { en: "Lively Harvard Square shops & cafés", zh: "热闹的哈佛广场商店与咖啡馆" } },
      ],
    },
    mit: {
      emoji: "🔬",
      name: { en: "MIT & the Charles River", zh: "麻省理工与查尔斯河" },
      area: { en: "Cambridge, Massachusetts", zh: "马萨诸塞州 剑桥市" },
      summary: {
        en: "A famous science campus with a grand dome and a beautiful riverside skyline view.",
        zh: "著名的理工学府，拥有宏伟的圆顶和绝美的河畔天际线。",
      },
      intro: {
        en: "The Massachusetts Institute of Technology is one of the world's leading science and engineering schools. Killian Court frames the Great Dome and opens onto the Charles River with sweeping views of the Boston skyline.",
        zh: "麻省理工学院（MIT）是全球顶尖的理工学府之一。基利安庭院（Killian Court）正对宏伟的大圆顶，并向查尔斯河敞开，可饱览波士顿的天际线。",
      },
      story: {
        en: "MIT has produced more than 100 Nobel laureates. Its campus mixes a classical domed centerpiece with wildly modern buildings — like Frank Gehry's tilting, playful Stata Center.",
        zh: "MIT 培养了超过100位诺贝尔奖得主。校园将古典的圆顶主楼与极具未来感的建筑融为一体——例如弗兰克·盖里设计、歪斜俏皮的斯塔塔中心（Stata Center）。",
      },
      walk: { en: "Short & flat; benches by the river.", zh: "短而平坦；河边设有长椅。" },
      hours: { en: "Campus & riverside open daily.", zh: "校园与河畔全天开放。" },
      tips: {
        en: "The riverbank along Memorial Drive is the best spot for a photo of the Boston skyline across the water. Easy place to sit and rest.",
        zh: "纪念大道（Memorial Drive）旁的河岸是隔水拍摄波士顿天际线的最佳地点，也很适合坐下休息。",
      },
      coords: [42.3592, -71.0920],
      mapQuery: "MIT Great Dome Killian Court, Cambridge MA",
      mustSee: [
        { emoji: "🏛️", img: "mit-dome.jpg", caption: { en: "The Great Dome over Killian Court", zh: "基利安庭院上的大圆顶" } },
        { emoji: "🌀", img: "mit-stata.jpg", caption: { en: "Gehry's playful Stata Center", zh: "盖里设计的俏皮斯塔塔中心" } },
        { emoji: "🌊", img: "mit-river.jpg", caption: { en: "Boston skyline across the Charles River", zh: "隔查尔斯河远眺波士顿天际线" } },
      ],
    },

    /* ---------------------------------------------------------------- FRI */
    "public-garden": {
      emoji: "🦢",
      name: { en: "Public Garden & Swan Boats", zh: "公共花园与天鹅船" },
      area: { en: "Downtown Boston", zh: "波士顿市区" },
      summary: {
        en: "America's first public botanical garden, with the gentle, beloved Swan Boats.",
        zh: "美国第一座公共植物园，还有温柔可爱、深受喜爱的天鹅船。",
      },
      intro: {
        en: "The Boston Public Garden (1837) is a romantic Victorian garden of weeping willows, flower beds and a small lagoon. The seated, pedal-powered Swan Boats have glided across it since 1877.",
        zh: "波士顿公共花园（建于1837年）是一座浪漫的维多利亚式花园，垂柳、花圃与小湖相映成趣。可乘坐的脚踏式天鹅船自1877年起便在湖上轻轻滑行至今。",
      },
      story: {
        en: "The garden's bronze 'Make Way for Ducklings' statues honor a beloved children's book and are a favorite photo stop. The Swan Boats are a 4th-generation family tradition — a calm, 15-minute ride.",
        zh: "花园里的青铜雕塑《让路给小鸭子》取材于一本深受喜爱的童书，是热门拍照点。天鹅船由同一家族经营至第四代——是一段宁静的15分钟航程。",
      },
      walk: { en: "Very gentle; flat paths & lots of benches.", zh: "非常轻松；小径平坦，长椅众多。" },
      hours: { en: "Swan Boats daily 10am–5pm (late June).", zh: "天鹅船每日10:00–17:00（六月下旬）。" },
      tips: {
        en: "Swan Boat tickets (~$4.25 seniors) are bought at the dock — no reservation needed. Staff can help with boarding. Boats don't run in rain or high wind.",
        zh: "天鹅船船票（长者约$4.25）在码头现场购买，无需预订。工作人员可协助上船。雨天或大风时不开船。",
      },
      coords: [42.3541, -71.0699],
      mapQuery: "Swan Boats Boston Public Garden",
      mustSee: [
        { emoji: "🦢", img: "garden-swanboat.jpg", caption: { en: "Ride a gentle Swan Boat on the lagoon", zh: "在湖上乘坐悠然的天鹅船" } },
        { emoji: "🦆", img: "garden-ducklings.jpg", caption: { en: "'Make Way for Ducklings' bronze statues", zh: "《让路给小鸭子》青铜雕塑" } },
        { emoji: "🌷", img: "garden-flowers.jpg", caption: { en: "Victorian flower beds & weeping willows", zh: "维多利亚式花圃与垂柳" } },
      ],
    },
    "duck-tour": {
      emoji: "🦆",
      name: { en: "Boston Duck Tour", zh: "波士顿鸭子船游览" },
      area: { en: "Downtown Boston", zh: "波士顿市区" },
      summary: {
        en: "An 80-minute seated tour with no walking — and it splashes into the river!",
        zh: "全程坐着的80分钟游览，无需步行——还会“扑通”开进河里！",
      },
      intro: {
        en: "A fun, fully seated ride on a WWII-style amphibious vehicle. It rolls past the city's landmarks with a lively guide, then drives right into the Charles River for a smooth water cruise.",
        zh: "搭乘二战风格的水陆两栖车，全程舒适落座、轻松有趣。车辆在风趣导览员的讲解下驶过城市地标，随后直接开进查尔斯河，平稳地进行一段水上巡游。",
      },
      story: {
        en: "The 'ducks' are a Boston institution since 1994 and a favorite for visitors who want to see everything without walking. The moment it drives into the river always gets a cheer.",
        zh: "“鸭子船”自1994年起就是波士顿的招牌项目，深受不愿多走路又想饱览全城的游客喜爱。车辆开进河中的那一刻总会引来欢呼。",
      },
      walk: { en: "Zero walking — fully seated.", zh: "完全无需步行——全程坐着。" },
      hours: { en: "Departs hourly/half-hourly, 9am–dusk.", zh: "每小时或每半小时一班，9:00至黄昏。" },
      tips: {
        en: "Departs from the Prudential Center, Museum of Science, or the Aquarium. Wheelchair-accessible ducks are available — call 617-450-0068 in advance to arrange. Complements the trolley; you can do both.",
        zh: "从保诚中心、科学博物馆或水族馆出发。提供无障碍轮椅鸭子船——请提前致电 617-450-0068 安排。与观光车互补，二者可兼得。",
      },
      coords: [42.3473, -71.0821],
      mapQuery: "Boston Duck Tours Prudential Center",
      mustSee: [
        { emoji: "🦆", img: "duck-vehicle.jpg", caption: { en: "Board the amphibious 'duck'", zh: "登上水陆两栖“鸭子船”" } },
        { emoji: "🌊", img: "duck-river.jpg", caption: { en: "Splashing into the Charles River", zh: "“扑通”开进查尔斯河" } },
        { emoji: "🏙️", img: "duck-skyline.jpg", caption: { en: "Skyline views from the water", zh: "从水上欣赏天际线" } },
      ],
    },
    "freedom-trail": {
      emoji: "🛤️",
      name: { en: "Freedom Trail & Quincy Market", zh: "自由之路与昆西市场" },
      area: { en: "Downtown Boston", zh: "波士顿市区" },
      summary: {
        en: "Boston's historic heart — ride the trolley, hop off where you like.",
        zh: "波士顿的历史核心——乘坐观光车，想看哪站就在哪站下。",
      },
      intro: {
        en: "The Freedom Trail is a 2.5-mile route linking 16 Revolutionary War sites. Rather than walk it all, ride the hop-on/hop-off trolley and step off only at the stops you choose — perfect for an easy pace.",
        zh: "自由之路是一条长约2.5英里、串联16处独立战争史迹的路线。与其全程步行，不如乘坐随上随下的观光车，只在想看的站点下车——非常适合轻松的节奏。",
      },
      story: {
        en: "Marked by a red line on the ground, the trail passes the gold-domed State House, old burying grounds, and Faneuil Hall — the 'Cradle of Liberty' where revolutionaries once gave fiery speeches.",
        zh: "这条以地面红线标记的步道经过金顶州议会大厦、古老墓园以及法尼尔厅——被称为“自由的摇篮”，革命者曾在此慷慨陈词。",
      },
      walk: { en: "Your choice — trolley between stops keeps it short.", zh: "步行多少随您——站点间乘车，走得很少。" },
      hours: { en: "Trolley runs through the day; market 10am–9pm.", zh: "观光车全天运营；市场10:00–21:00。" },
      tips: {
        en: "Quincy Market is a covered food hall with dozens of stalls and lots of seating — an easy, sheltered lunch. The State House and Faneuil Hall are the gentlest, most rewarding stops.",
        zh: "昆西市场是一座有顶的美食大厅，数十个摊位、座位充足——是轻松又遮风避雨的午餐之选。州议会大厦和法尼尔厅是最省力、最值得的两站。",
      },
      coords: [42.3601, -71.0568],
      mapQuery: "Faneuil Hall Quincy Market Boston",
      mustSee: [
        { emoji: "🏛️", img: "freedom-statehouse.jpg", caption: { en: "Massachusetts State House gold dome", zh: "马萨诸塞州议会大厦金顶" } },
        { emoji: "🍽️", img: "freedom-quincy.jpg", caption: { en: "Quincy Market food hall (lunch & seating)", zh: "昆西市场美食大厅（午餐与座位）" } },
        { emoji: "🔔", img: "freedom-faneuil.jpg", caption: { en: "Faneuil Hall, the 'Cradle of Liberty'", zh: "法尼尔厅，“自由的摇篮”" } },
      ],
    },
    "north-end": {
      emoji: "🍝",
      name: { en: "North End (optional)", zh: "北角意大利区（可选）" },
      area: { en: "Downtown Boston", zh: "波士顿市区" },
      summary: {
        en: "Boston's Little Italy — historic lanes, cannoli, and the Paul Revere story.",
        zh: "波士顿的小意大利——历史小巷、奶油卷与保罗·里维尔的故事。",
      },
      intro: {
        en: "An optional add-on if energy allows. The North End is Boston's oldest neighborhood and its Italian quarter, full of narrow streets, cafés and bakeries.",
        zh: "如果体力允许，可作为加选项目。北角是波士顿最古老的街区，也是意大利人聚居区，遍布狭窄街巷、咖啡馆和糕点店。",
      },
      story: {
        en: "Here stand the Paul Revere House (c.1680, the city's oldest building) and the Old North Church, where in 1775 two lanterns signaled 'the British are coming' — sparking Revere's famous midnight ride.",
        zh: "这里坐落着保罗·里维尔故居（约1680年，全城最古老的建筑）和老北教堂——1775年，两盏灯笼在此发出“英军来了”的信号，引发了里维尔著名的午夜骑行。",
      },
      walk: { en: "Some narrow streets; go slow, the trolley stops nearby.", zh: "有些狭窄街巷；慢慢走，观光车在附近设站。" },
      hours: { en: "Cafés & bakeries open late.", zh: "咖啡馆与糕点店营业至深夜。" },
      tips: {
        en: "Don't miss a cannoli from Mike's Pastry or Modern Pastry. A lovely spot for an early dinner if you're staying out past the evening traffic.",
        zh: "别错过 Mike's Pastry 或 Modern Pastry 的奶油卷（cannoli）。若想等晚高峰过后再回去，这里也很适合吃顿早晚餐。",
      },
      coords: [42.3637, -71.0537],
      mapQuery: "Paul Revere House North End Boston",
      mustSee: [
        { emoji: "🏠", img: "northend-revere.jpg", caption: { en: "Paul Revere House — Boston's oldest home", zh: "保罗·里维尔故居——波士顿最古老的住宅" } },
        { emoji: "⛪", img: "northend-church.jpg", caption: { en: "Old North Church (1775 lantern signal)", zh: "老北教堂（1775年灯笼信号）" } },
        { emoji: "🍰", img: "northend-cannoli.jpg", caption: { en: "Fresh Italian cannoli", zh: "新鲜的意式奶油卷" } },
      ],
    },

    /* ---------------------------------------------------------------- SAT */
    chinatown: {
      emoji: "🏮",
      name: { en: "Boston Chinatown", zh: "波士顿唐人街" },
      area: { en: "Downtown Boston", zh: "波士顿市区" },
      summary: {
        en: "A warm, familiar lunch before the drive home, under the historic Chinatown Gate.",
        zh: "返程前在历史悠久的唐人街牌楼下，吃一顿熟悉又暖心的午餐。",
      },
      intro: {
        en: "Boston's Chinatown is the only historic Chinese quarter left in New England, and one of the largest in the U.S. — a few flat, easy blocks packed with restaurants and bakeries.",
        zh: "波士顿唐人街是新英格兰地区唯一留存的历史华埠，也是全美最大的华埠之一——几个街区平坦好走，餐馆和糕点店林立。",
      },
      story: {
        en: "The grand paifang Gate, a gift from Taiwan in 1982, marks the entrance. The neighborhood has been home to Chinese families since the late 1800s and is known for dim sum, roast meats and fresh seafood.",
        zh: "宏伟的牌楼（paifang）是1982年来自台湾的礼物，标示着唐人街的入口。自1800年代末以来，这里便是华人家庭的家园，以点心、烧腊和新鲜海鲜闻名。",
      },
      walk: { en: "A few flat, easy blocks.", zh: "几个平坦好走的街区。" },
      hours: { en: "Restaurants open late morning onward.", zh: "餐馆从上午晚些时候起营业。" },
      tips: {
        en: "Arrive early (~11:30am) to beat the lunch crowd before the long drive. Park in a garage near the Chinatown Gate / Tufts Medical area. Great for dim sum or a sit-down lunch.",
        zh: "建议早些到（约上午11:30），在长途驾驶前避开午餐人潮。可在唐人街牌楼／塔夫茨医疗中心附近的停车楼停车。很适合吃点心或坐下来好好吃顿午餐。",
      },
      coords: [42.3515, -71.0621],
      mapQuery: "Chinatown Gate Boston",
      mustSee: [
        { emoji: "🏮", img: "chinatown-gate.jpg", caption: { en: "The historic paifang Chinatown Gate", zh: "历史悠久的唐人街牌楼" } },
        { emoji: "🥟", img: "chinatown-dimsum.jpg", caption: { en: "Dim sum & roast meats", zh: "点心与烧腊" } },
        { emoji: "🥮", img: "chinatown-bakery.jpg", caption: { en: "Chinese bakeries for the road", zh: "中式糕点带上路" } },
      ],
    },
  },

  /* ------------------------------------------------------------- PRACTICAL */
  practical: {
    intro: {
      en: "Key addresses, transport options and senior-friendly tips for the trip.",
      zh: "本次旅行的重要地址、交通方案与适合长者的贴士。",
    },
    sections: [
      {
        title: { en: "🏨 Hotel", zh: "🏨 酒店" },
        body: {
          en: "Hampton Inn Boston-Norwood, 434 Providence Hwy, Norwood, MA 02062. Free parking and breakfast. Check-in from 3pm.",
          zh: "波士顿诺伍德希尔顿欢朋酒店，地址 434 Providence Hwy, Norwood, MA 02062。免费停车和早餐。下午3点起入住。",
        },
        mapQuery: "Hampton Inn Boston Norwood MA",
      },
      {
        title: { en: "🚆 Friday Option A — Commuter Rail", zh: "🚆 周五方案A — 通勤火车" },
        body: {
          en: "Take the MBTA Franklin/Foxboro Line from Norwood Central or Norwood Depot to Back Bay or South Station (~30 min). Buy tickets on the mTicket app or onboard. Go mid-morning; to avoid post-match crowds, return before ~4:30pm or after ~7:30pm.",
          zh: "乘坐 MBTA 富兰克林/福克斯堡线，从 Norwood Central 或 Norwood Depot 到 Back Bay 或 South Station（约30分钟）。可用 mTicket 手机应用或在车上购票。建议上午晚些出发；为避开赛后人潮，请在约16:30前或19:30后返回。",
        },
        mapQuery: "Norwood Central Station MBTA",
      },
      {
        title: { en: "🅿️ Friday Option B — Drive & Park", zh: "🅿️ 周五方案B — 自驾停车" },
        body: {
          en: "Drive ~25–30 min downtown and park at Boston Common Garage (entrance on Charles St, under the Public Garden): about $30 up to 10 hours, $38 for 24 hours. Most central for starting at the Swan Boats.",
          zh: "驱车约25–30分钟到市区，在波士顿公园停车楼停车（入口在 Charles 街，位于公共花园下方）：10小时内约$30，24小时约$38。从天鹅船开始游览最为便利。",
        },
        mapQuery: "Boston Common Garage Charles Street",
      },
      {
        title: { en: "⚽ World Cup Heads-up (Fri Jun 26)", zh: "⚽ 世界杯提醒（6月26日 周五）" },
        body: {
          en: "Norway vs. France plays at 3pm at Gillette Stadium in Foxborough, ~12 miles south of the hotel. Downtown sightseeing is unaffected, but expect extra traffic and crowds near the hotel/highway from about 2–7:30pm. Plan around that window.",
          zh: "挪威对法国的比赛于下午3点在福克斯堡的吉列体育场举行，距酒店以南约12英里。市区观光不受影响，但约14:00–19:30酒店附近及高速可能有额外车流和人群。请避开这个时段安排行程。",
        },
        mapQuery: "",
      },
      {
        title: { en: "👵 Senior-Friendly Tips", zh: "👵 长者贴士" },
        body: {
          en: "Walking each day stays under 3 miles, broken into short stretches with frequent benches. Carry water, wear comfortable shoes, and plan an afternoon rest at the hotel. Swan Boats, the Duck Tour and the trolley all let you sit. Emergency number in the U.S. is 911.",
          zh: "每天步行不超过3英里，分成多段短途，沿途长椅充足。请带水、穿舒适的鞋，并在下午安排回酒店休息。天鹅船、鸭子船和观光车都能坐着游览。美国紧急电话为911。",
        },
        mapQuery: "",
      },
    ],
  },
};
