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
    tourTitle: "Suggested walking tour",
    website: "Website",
    listen: "Listen",
    pause: "Pause",
    readMore: "Read more",
    showLess: "Show less",
    source: "Source: Wikipedia",
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
    tourTitle: "建议步行路线",
    website: "官网",
    listen: "朗读",
    pause: "暂停",
    readMore: "展开全文",
    showLess: "收起",
    source: "资料来源：维基百科",
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
        en: "Yale University is a private Ivy League research university in New Haven, Connecticut. Founded in 1701, it is the third-oldest university in the United States and one of the nine colonial colleges chartered before the American Revolution.\n\nIt began as the Collegiate School, started by Congregationalist clergy and focused at first on theology and classical languages. Over time the curriculum widened to the humanities and sciences; Yale awarded the first PhD in the United States in 1861 and reorganized as a university in 1887.\n\nToday Yale is made up of fifteen schools, from the original undergraduate college to its famous law school. Its library holds more than 15 million volumes — the third-largest academic library in the country — and the downtown campus is known for striking Collegiate Gothic stone architecture.\n\nYale's graduates include five U.S. presidents, many U.S. Supreme Court justices, and dozens of Nobel laureates, along with heads of state, writers, and Olympic medalists from around the world.",
        zh: "耶鲁大学是一所位于康涅狄格州纽黑文的私立常春藤盟校研究型大学。它创立于1701年，是美国历史第三悠久的大学，也是独立战争前获特许设立的九所殖民地学院之一。\n\n耶鲁最初名为“学院学校”（Collegiate School），由公理会的牧师创办，起初以神学和古典语言为主。随着时间推移，课程逐渐扩展到人文与自然科学；1861年，耶鲁授予了全美第一个博士学位，并于1887年正式改组为大学。\n\n如今的耶鲁由十五所学院组成，从最初的本科学院到著名的法学院。其图书馆藏书超过1500万册，是全美第三大的大学图书馆；市中心校园以宏伟的哥特复兴式石砌建筑闻名。\n\n耶鲁的毕业生中有五位美国总统、多位美国最高法院大法官，以及数十位诺贝尔奖得主，还有来自世界各地的国家元首、作家和奥运奖牌得主。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Yale_University",
      walk: { en: "Short & flat (~15 min on Old Campus).", zh: "短而平坦（老校区约15分钟）。" },
      hours: { en: "Campus open daily; pizza spots open ~11am.", zh: "校园全天开放；披萨店约上午11点开门。" },
      tips: {
        en: "For lunch try Frank Pepe (the original, since 1925) or Sally's Apizza on Wooster Street. Expect a short wait — both have famous clam and tomato pies.",
        zh: "午餐推荐伍斯特街上的 Frank Pepe（创于1925年的元祖店）或 Sally's Apizza。可能需稍等片刻——两家的白蛤披萨和番茄披萨都久负盛名。",
      },
      coords: [41.3083, -72.9279],
      mapQuery: "Yale University Old Campus, New Haven CT",
      links: [
        { label: { en: "Searchable campus map", zh: "校园地图（可搜索）" }, url: "https://map.yale.edu/" },
        { label: { en: "Parking: Chapel-York Garage", zh: "停车：Chapel-York 停车楼" }, url: "https://maps.apple.com/?q=Chapel-York%20Garage%20150%20York%20St%20New%20Haven&ll=41.3076,-72.9307" },
        { label: { en: "Places to visit (Yale)", zh: "校园参观指南（耶鲁官网）" }, url: "https://onha.yale.edu/vibrant-downtown/places-to-visit-on-campus" },
      ],
      tour: {
        en: "Park at the Chapel-York Garage (150 York St, about $20 all day) — it sits right beside the two art museums, so this flat walking loop begins and ends at your car. Pick as many stops as your legs like. From the garage, walk over to Phelps Gate and Old Campus, north to Sterling Memorial Library and the glowing Beinecke, pause at the Schwarzman Center, then back south to the two free art museums and the car. The Peabody Museum is then a short drive north. Finish with lunch on Wooster Street.",
        zh: "把车停在 Chapel-York 停车楼（150 York St，全天约 $20）——它就在两座艺术博物馆旁边，因此这条平坦的步行环线从停车处出发、最后回到车上。体力允许就多看几处。从停车楼步行到 Phelps 校门和老校区，向北到斯特林纪念图书馆和通透发光的拜内克图书馆，在施瓦茨曼中心歇歇脚，再向南回到两座免费艺术博物馆和停车处。皮博迪博物馆在北面，开车几分钟即到。最后到伍斯特街吃午餐。",
      },
      tourMapSvg: `<svg viewBox="0 0 360 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yale walking tour map" font-family="-apple-system,Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="360" height="500" fill="#f4f1ea"/>
  <!-- blocks -->
  <rect x="232" y="217" width="88" height="128" rx="3" fill="#dfe8d8" stroke="#cdddc2"/>
  <rect x="142" y="217" width="88" height="128" rx="3" fill="#ece7d8" stroke="#ddd6c2"/>
  <!-- streets -->
  <g stroke="#d4ccba" stroke-width="7" stroke-linecap="round">
    <line x1="50" y1="92" x2="50" y2="398"/>
    <line x1="140" y1="44" x2="140" y2="408"/>
    <line x1="230" y1="44" x2="230" y2="398"/>
    <line x1="42" y1="75" x2="322" y2="75"/>
    <line x1="72" y1="125" x2="300" y2="125"/>
    <line x1="42" y1="215" x2="330" y2="215"/>
    <line x1="30" y1="345" x2="330" y2="345"/>
  </g>
  <!-- street + block labels -->
  <g font-size="10.5" fill="#8a8270">
    <text x="146" y="58">High St</text>
    <text x="236" y="58">College St</text>
    <text x="42" y="103">York St</text>
    <text x="46" y="71">Grove St</text>
    <text x="76" y="121">Wall St</text>
    <text x="46" y="211">Elm St</text>
    <text x="34" y="362">Chapel St</text>
  </g>
  <g font-size="11" text-anchor="middle">
    <text class="i18n-en" x="276" y="287" fill="#5f7a4f">New Haven Green</text>
    <text class="i18n-zh" x="276" y="287" fill="#5f7a4f">纽黑文中心绿地</text>
    <text class="i18n-en" x="188" y="332" fill="#9a8f73">Old Campus</text>
    <text class="i18n-zh" x="188" y="332" fill="#9a8f73">老校区</text>
  </g>
  <!-- walking loop: P -> 1 -> ... -> 7 -> P -->
  <path d="M52,362 L230,285 L185,270 L132,130 L182,116 L230,80 L150,210 L152,336 L118,353 L52,362" fill="none" stroke="#0b4f6c" stroke-width="7" stroke-opacity="0.45" stroke-linejoin="round" stroke-linecap="round"/>
  <!-- drive to Peabody (off-map, north-east) -->
  <path d="M320,50 L344,32" fill="none" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6" stroke-linecap="round"/>
  <path d="M349,28 L338,30 L342,39 Z" fill="#8a8270"/>
  <!-- numbered markers -->
  <g text-anchor="middle" font-size="14" font-weight="700" fill="#fff">
    <circle cx="230" cy="285" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="230" y="290">1</text>
    <circle cx="185" cy="270" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="185" y="275">2</text>
    <circle cx="132" cy="130" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="132" y="135">3</text>
    <circle cx="182" cy="116" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="182" y="121">4</text>
    <circle cx="230" cy="80" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="230" y="85">5</text>
    <circle cx="152" cy="336" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="152" y="341">6</text>
    <circle cx="118" cy="353" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="118" y="358">7</text>
    <circle cx="320" cy="50" r="13" fill="#6b7280" stroke="#fff" stroke-width="2.5"/><text x="320" y="55">8</text>
  </g>
  <!-- parking marker (start & end) -->
  <rect x="39" y="349" width="26" height="26" rx="5" fill="#11697f" stroke="#fff" stroke-width="2.5"/>
  <text x="52" y="368" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">P</text>
  <g text-anchor="middle" font-size="10">
    <text class="i18n-en" x="320" y="76" fill="#6b7280">Peabody &#8599;</text>
    <text class="i18n-zh" x="320" y="76" fill="#6b7280">皮博迪 &#8599;</text>
    <text class="i18n-en" x="56" y="390" fill="#11697f">Chapel-York Garage</text>
    <text class="i18n-zh" x="56" y="390" fill="#11697f">Chapel-York 停车楼</text>
  </g>
  <!-- north arrow -->
  <g><line x1="28" y1="55" x2="28" y2="36" stroke="#5a6776" stroke-width="2"/><path d="M28,32 L24,41 L32,41 Z" fill="#5a6776"/><text x="28" y="70" text-anchor="middle" font-size="11" fill="#5a6776">N</text></g>
  <!-- legend -->
  <g font-size="11" fill="#5a6776">
    <line x1="30" y1="418" x2="58" y2="418" stroke="#0b4f6c" stroke-width="6" stroke-opacity="0.5" stroke-linecap="round"/>
    <text class="i18n-en" x="64" y="422">Walking loop (under 1 mile)</text>
    <text class="i18n-zh" x="64" y="422">步行环线（不到1英里）</text>
    <line x1="30" y1="444" x2="58" y2="444" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6"/>
    <text class="i18n-en" x="64" y="448">Drive to ⑧ Peabody (optional)</text>
    <text class="i18n-zh" x="64" y="448">驾车前往⑧皮博迪（可选）</text>
    <rect x="30" y="462" width="16" height="16" rx="3" fill="#11697f"/><text x="38" y="474" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">P</text>
    <text class="i18n-en" x="54" y="474">Parking — start &amp; end of the walk</text>
    <text class="i18n-zh" x="54" y="474">停车场 — 步行起点与终点</text>
  </g>
</svg>`,
      mustSee: [
        { emoji: "🚪", img: "yale-visitorcenter.jpg", link: "https://visitorcenter.yale.edu/",
          caption: { en: "1. Phelps Gate & Visitor Center", zh: "1. Phelps 校门与访客中心" },
          desc: { en: "The grand archway into Old Campus, facing the Green. The Visitor Center nearby offers maps and free student-led tours.", zh: "通往老校区的宏伟拱门，正对中心绿地。附近的访客中心提供地图和免费的学生导览。" } },
        { emoji: "🏛️", img: "yale-oldcampus.jpg", link: "https://map.yale.edu/",
          caption: { en: "2. Old Campus quadrangle", zh: "2. 老校区庭院" },
          desc: { en: "A flat, leafy courtyard ringed by Gothic stone dormitories — the easiest and prettiest stroll on campus.", zh: "平坦、绿树成荫的庭院，四周环绕哥特式石砌宿舍——校园里最轻松、最美的一段散步。" } },
        { emoji: "📚", img: "yale-library.jpg", link: "https://web.library.yale.edu/building/sterling-memorial-library",
          caption: { en: "3. Sterling Memorial Library", zh: "3. 斯特林纪念图书馆" },
          desc: { en: "A Collegiate Gothic 'cathedral of books' with a soaring, hushed nave-like hall. Open to the public; just step inside.", zh: "一座哥特式的“书籍大教堂”，中庭高耸静谧，宛如教堂正厅。对公众开放，可直接入内参观。" } },
        { emoji: "💡", img: "yale-beinecke.jpg", link: "https://beinecke.library.yale.edu/",
          caption: { en: "4. Beinecke Rare Book Library", zh: "4. 拜内克珍本图书馆" },
          desc: { en: "Walls of translucent marble glow over a six-storey glass tower of rare books — home to a Gutenberg Bible. Free and open to the public.", zh: "半透明大理石外墙透出柔光，内部是六层高的玻璃书塔，珍藏一部《古腾堡圣经》。免费向公众开放。" } },
        { emoji: "🏛️", img: "yale-schwarzman.jpg", link: "https://schwarzman.yale.edu/",
          caption: { en: "5. Schwarzman Center (rotunda)", zh: "5. 施瓦茨曼中心（圆顶大厅）" },
          desc: { en: "Yale's social hub under a beautiful domed rotunda, with cafés and seating — a good place to rest and have a coffee. Free and open to all.", zh: "耶鲁的活动中心，坐落于华美的穹顶圆厅之下，设有咖啡馆与座位——歇脚、喝杯咖啡的好去处。免费向所有人开放。" } },
        { emoji: "🖼️", img: "yale-artgallery.jpg", link: "https://artgallery.yale.edu/",
          caption: { en: "6. Yale University Art Gallery", zh: "6. 耶鲁大学美术馆" },
          desc: { en: "The oldest university art museum in the Americas, with works from Van Gogh to ancient art. Admission is always free.", zh: "美洲历史最悠久的大学美术馆，藏品从梵高到古代艺术无所不包。常年免费入场。" } },
        { emoji: "🇬🇧", img: "yale-britishart.jpg", link: "https://britishart.yale.edu/",
          caption: { en: "7. Yale Center for British Art", zh: "7. 耶鲁英国艺术中心" },
          desc: { en: "A Louis Kahn-designed museum holding the largest collection of British art outside the UK. Across the street from the Art Gallery; free.", zh: "由建筑大师路易·康设计，藏有英国本土之外最大的英国艺术收藏。就在美术馆对街，免费参观。" } },
        { emoji: "🦕", img: "yale-peabody.jpg", link: "https://peabody.yale.edu/",
          caption: { en: "8. Peabody Museum (optional, drive north)", zh: "8. 皮博迪自然历史博物馆（可选，向北开车）" },
          desc: { en: "Famous for dinosaurs and 4.5 billion years of natural history. Newly renovated and now free. A short drive north of central campus.", zh: "以恐龙化石和45亿年的自然史闻名。近期翻新后现已免费开放。位于校园中心以北，开车几分钟即到。" } },
        { emoji: "🍕", img: "yale-pizza.jpg",
          caption: { en: "Lunch: New Haven apizza, Wooster St", zh: "午餐：伍斯特街的纽黑文披萨" },
          desc: { en: "Cap the visit with the city's legendary coal-fired pizza — Frank Pepe (since 1925) or Sally's, a short drive southeast.", zh: "用本城传奇的煤炉披萨为这趟参观收尾——Frank Pepe（创于1925年）或 Sally's，向东南开车一小段即到。" } },
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
        en: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636 and named for its first benefactor, the clergyman John Harvard, it is the oldest institution of higher learning in the United States.\n\nFor its first century Harvard mainly trained Congregational clergy, but its studies gradually became secular. After the Civil War, during the long presidency of Charles W. Eliot (1869–1909), it added professional schools and grew into a modern research university.\n\nThe main campus, centered on Harvard Yard, covers about 209 acres, with further campuses across the Charles River in Allston and in the Longwood medical area. Harvard Library, with more than 20 million volumes, is the largest academic library in the world.\n\nIts alumni and faculty include eight U.S. presidents, dozens of heads of state, and many Nobel laureates — and collectively scores of Olympic medals and Academy Awards. A local custom is to rub the shoe of the John Harvard statue for luck.",
        zh: "哈佛大学是一所位于马萨诸塞州剑桥市的私立常春藤盟校研究型大学。它创立于1636年，以首位捐助者、牧师约翰·哈佛之名命名，是美国历史最悠久的高等学府。\n\n在最初的一个世纪里，哈佛主要培养公理会的牧师，之后学业逐渐世俗化。南北战争之后，在校长查尔斯·W·埃利奥特的长期任内（1869–1909），哈佛增设了多所专业学院，发展为一所现代研究型大学。\n\n以哈佛园为核心的主校区占地约209英亩，此外在查尔斯河对岸的奥尔斯顿以及朗伍德医疗区还设有校区。哈佛图书馆藏书超过2000万册，是全球最大的大学图书馆。\n\n哈佛的校友与教职员中有八位美国总统、数十位国家元首和众多诺贝尔奖得主，并累计获得众多奥运奖牌和奥斯卡奖。当地有个习俗：摸一摸约翰·哈佛雕像的鞋子以求好运。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Harvard_University",
      walk: { en: "Easy & flat (~1 mile, with rests).", zh: "轻松平坦（约1英里，可随时休息）。" },
      hours: { en: "Yard open daily; shops & cafés all day.", zh: "校园全天开放；商店与咖啡馆全天营业。" },
      tips: {
        en: "Lunch in Harvard Square has many sit-down options. Optional indoor add-on: the Harvard Museum of Natural History and its famous Glass Flowers (a short walk, great in heat or rain).",
        zh: "哈佛广场有许多可坐下用餐的选择。可选室内项目：哈佛自然历史博物馆及其著名的“玻璃花”（步行不远，炎热或下雨时尤为适合）。",
      },
      coords: [42.3744, -71.1169],
      mapQuery: "Harvard Yard, Cambridge MA",
      links: [
        { label: { en: "Searchable campus map", zh: "校园地图（可搜索）" }, url: "https://map.harvard.edu/" },
        { label: { en: "Parking: Smith Center Garage", zh: "停车：史密斯中心停车楼" }, url: "https://maps.apple.com/?q=Smith%20Campus%20Center%20Garage%201350%20Massachusetts%20Ave%20Cambridge&ll=42.3725,-71.1185" },
      ],
      tour: {
        en: "Park at the Smith Campus Center Garage (1350 Massachusetts Ave), right on Harvard Square beside the Yard, and walk this flat loop. Browse the Square, then enter the Yard through the Johnston Gate to the John Harvard statue, Memorial Church, and grand Widener Library. Just east of the Yard are the free Harvard Art Museums and Victorian Memorial Hall. The Harvard Museum of Natural History and its famous Glass Flowers are a short, optional walk north. Plenty of lunch spots line Harvard Square.",
        zh: "把车停在史密斯校园中心停车楼（1350 Massachusetts Ave），就在哈佛广场、紧邻哈佛园，然后步行这条平坦的环线。先逛逛广场，再从约翰斯顿校门走进哈佛园，看约翰·哈佛雕像、纪念教堂和宏伟的怀德纳图书馆。哈佛园以东就是免费的哈佛艺术博物馆和维多利亚式的纪念厅。哈佛自然历史博物馆及其著名的“玻璃花”在北面，步行不远，可作为可选项目。哈佛广场上有许多午餐去处。",
      },
      tourMapSvg: `<svg viewBox="0 0 360 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Harvard walking tour map" font-family="-apple-system,Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="360" height="480" fill="#f4f1ea"/>
  <rect x="100" y="160" width="150" height="150" rx="3" fill="#ece7d8" stroke="#ddd6c2"/>
  <g stroke="#d4ccba" stroke-width="7" stroke-linecap="round">
    <polyline points="150,430 95,355 95,150" fill="none"/>
    <line x1="95" y1="148" x2="320" y2="148"/>
    <line x1="268" y1="150" x2="268" y2="330"/>
    <line x1="205" y1="148" x2="205" y2="55"/>
  </g>
  <g font-size="10.5" fill="#8a8270">
    <text x="55" y="300">Mass Ave</text>
    <text x="250" y="143">Cambridge St</text>
    <text x="272" y="300" transform="rotate(90 272,300)">Quincy St</text>
    <text x="209" y="70">Oxford St</text>
  </g>
  <g font-size="11" text-anchor="middle">
    <text class="i18n-en" x="175" y="240" fill="#9a8f73">Harvard Yard</text>
    <text class="i18n-zh" x="175" y="240" fill="#9a8f73">哈佛园</text>
  </g>
  <path d="M78,375 L118,360 L105,172 L150,225 L205,193 L208,265 L298,258 L298,165 L78,375" fill="none" stroke="#0b4f6c" stroke-width="7" stroke-opacity="0.4" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M298,165 L210,80" fill="none" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6" stroke-linecap="round"/>
  <g text-anchor="middle" font-size="14" font-weight="700" fill="#fff">
    <circle cx="118" cy="360" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="118" y="365">1</text>
    <circle cx="105" cy="172" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="105" y="177">2</text>
    <circle cx="150" cy="225" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="150" y="230">3</text>
    <circle cx="205" cy="193" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="205" y="198">4</text>
    <circle cx="208" cy="265" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="208" y="270">5</text>
    <circle cx="298" cy="258" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="298" y="263">6</text>
    <circle cx="298" cy="165" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="298" y="170">7</text>
    <circle cx="210" cy="72" r="13" fill="#6b7280" stroke="#fff" stroke-width="2.5"/><text x="210" y="77">8</text>
  </g>
  <rect x="65" y="362" width="26" height="26" rx="5" fill="#11697f" stroke="#fff" stroke-width="2.5"/>
  <text x="78" y="381" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">P</text>
  <g text-anchor="middle" font-size="10">
    <text class="i18n-en" x="210" y="98" fill="#6b7280">Nat. History</text>
    <text class="i18n-zh" x="210" y="98" fill="#6b7280">自然史馆</text>
    <text class="i18n-en" x="78" y="403" fill="#11697f">Smith Ctr Garage</text>
    <text class="i18n-zh" x="78" y="403" fill="#11697f">史密斯中心停车楼</text>
  </g>
  <g><line x1="28" y1="55" x2="28" y2="36" stroke="#5a6776" stroke-width="2"/><path d="M28,32 L24,41 L32,41 Z" fill="#5a6776"/><text x="28" y="70" text-anchor="middle" font-size="11" fill="#5a6776">N</text></g>
  <g font-size="11" fill="#5a6776">
    <line x1="30" y1="430" x2="58" y2="430" stroke="#0b4f6c" stroke-width="6" stroke-opacity="0.5" stroke-linecap="round"/>
    <text class="i18n-en" x="64" y="434">Walking loop (about 1 mile)</text>
    <text class="i18n-zh" x="64" y="434">步行环线（约1英里）</text>
    <line x1="30" y1="452" x2="58" y2="452" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6"/>
    <text class="i18n-en" x="64" y="456">Optional walk to ⑧ Natural History</text>
    <text class="i18n-zh" x="64" y="456">可选步行至⑧自然史博物馆</text>
    <rect x="30" y="466" width="15" height="15" rx="3" fill="#11697f"/><text x="37.5" y="478" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">P</text>
    <text class="i18n-en" x="52" y="478">Parking — start &amp; end</text>
    <text class="i18n-zh" x="52" y="478">停车场 — 起点与终点</text>
  </g>
</svg>`,
      mustSee: [
        { emoji: "🛍️", img: "harvard-square.jpg", link: "https://www.harvard.edu/visit/",
          caption: { en: "1. Harvard Square & the Coop", zh: "1. 哈佛广场与合作社书店" },
          desc: { en: "The lively heart of Cambridge, full of bookshops, cafés, and street life — and where you park. Good lunch options here.", zh: "剑桥市热闹的中心，书店、咖啡馆和街头风情云集——也是停车的地方，午餐选择很多。" } },
        { emoji: "🚪", img: "harvard-johnstongate.jpg", link: "https://map.harvard.edu/",
          caption: { en: "2. Johnston Gate", zh: "2. 约翰斯顿校门" },
          desc: { en: "The grand main gate into Harvard Yard (1889). By tradition, freshmen walk through it when they arrive and seniors when they graduate.", zh: "通往哈佛园的宏伟正门（1889年）。按传统，新生入学时由此门走入，毕业时再由此门走出。" } },
        { emoji: "🗽", img: "harvard-statue.jpg", link: "https://www.harvard.edu/visit/",
          caption: { en: "3. John Harvard Statue & Old Yard", zh: "3. 约翰·哈佛雕像与老校园" },
          desc: { en: "The famous statue in front of University Hall. Visitors rub its shoe for luck — locals call it the 'Statue of Three Lies.'", zh: "矗立在大学楼前的著名雕像。游客会摸它的鞋子求好运——当地人戏称它为“三谎雕像”。" } },
        { emoji: "⛪", img: "harvard-church.jpg", link: "https://memorialchurch.harvard.edu/",
          caption: { en: "4. Memorial Church", zh: "4. 纪念教堂" },
          desc: { en: "A graceful white-steepled church facing Widener across Tercentenary Theatre, honoring Harvard's war dead. Step inside for a quiet moment.", zh: "一座白色尖顶的优雅教堂，隔着三百周年广场与怀德纳图书馆相望，以纪念哈佛阵亡者。可入内静坐片刻。" } },
        { emoji: "📚", img: "harvard-widener.jpg", link: "https://library.harvard.edu/libraries/widener",
          caption: { en: "5. Widener Library", zh: "5. 怀德纳图书馆" },
          desc: { en: "The vast, columned centerpiece of Harvard Library — the largest academic library in the world. Admire the grand front steps.", zh: "哈佛图书馆系统的恢宏核心，列柱巍峨，是全球最大的大学图书馆。不妨欣赏其宏伟的正门台阶。" } },
        { emoji: "🖼️", img: "harvard-artmuseums.jpg", link: "https://harvardartmuseums.org/",
          caption: { en: "6. Harvard Art Museums", zh: "6. 哈佛艺术博物馆" },
          desc: { en: "Three museums under one roof (renovated by Renzo Piano), with art from Monet to Mark Rothko. Admission is now free for all.", zh: "三座博物馆同处一馆（由伦佐·皮亚诺翻新），藏品从莫奈到罗斯科。现已对所有人免费开放。" } },
        { emoji: "🏰", img: "harvard-memhall.jpg", link: "https://memorialhall.harvard.edu/",
          caption: { en: "7. Memorial Hall", zh: "7. 纪念厅" },
          desc: { en: "A soaring Victorian Gothic 'cathedral' (1878) honoring Harvard's Civil War dead, housing the grand Sanders Theatre. Worth a look inside.", zh: "一座高耸的维多利亚哥特式“大教堂”（1878年），纪念南北战争中的哈佛阵亡者，内设宏伟的桑德斯剧院。值得入内一看。" } },
        { emoji: "🦕", img: "harvard-mnh.jpg", link: "https://hmnh.harvard.edu/",
          caption: { en: "8. Museum of Natural History (optional)", zh: "8. 自然历史博物馆（可选）" },
          desc: { en: "Home of the world-famous Glass Flowers — 4,000 lifelike glass plant models — plus dinosaurs and gems. Indoor and a short walk north.", zh: "举世闻名的“玻璃花”所在地——4000件栩栩如生的玻璃植物模型，还有恐龙与宝石。室内参观，向北步行不远即到。" } },
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
        en: "The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts. Founded in 1861 to advance 'useful knowledge,' it has helped shape countless fields of science and technology.\n\nIts founder, William Barton Rogers, modeled MIT on the European polytechnic, stressing hands-on laboratory work in applied science and engineering. The school moved from Boston to its present campus along the Charles River in 1916.\n\nMIT's rise as a great research center began in World War II, when wartime laboratories made it a national leader. Since then it has been central to computing, artificial intelligence, biotechnology, and space exploration, including the Apollo guidance computer.\n\nMore than 100 Nobel laureates have been connected with MIT, and its graduates have founded many of the world's best-known technology companies. Campus life is also famous for inventive student 'hacks' — elaborate, good-natured pranks.",
        zh: "麻省理工学院（MIT）是一所位于马萨诸塞州剑桥市的私立研究型大学。它创立于1861年，宗旨是推进“有用的知识”，并深刻塑造了无数科学与技术领域。\n\n创办人威廉·巴顿·罗杰斯以欧洲理工学院为蓝本，强调应用科学与工程中的动手实验。1916年，学校从波士顿迁至如今坐落于查尔斯河畔的校区。\n\nMIT 作为顶尖研究中心的崛起始于第二次世界大战，当时的战时实验室使其成为全国的领军者。此后，它在计算机、人工智能、生物技术和太空探索（包括阿波罗导航计算机）等领域始终居于核心地位。\n\n与 MIT 有渊源的诺贝尔奖得主超过100位，其毕业生创办了许多世界知名的科技公司。校园生活也以富有创意的学生“恶作剧”（hacks）——精心设计、善意有趣——而闻名。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology",
      walk: { en: "Short & flat; benches by the river.", zh: "短而平坦；河边设有长椅。" },
      hours: { en: "Campus & riverside open daily.", zh: "校园与河畔全天开放。" },
      tips: {
        en: "The riverbank along Memorial Drive is the best spot for a photo of the Boston skyline across the water. Easy place to sit and rest.",
        zh: "纪念大道（Memorial Drive）旁的河岸是隔水拍摄波士顿天际线的最佳地点，也很适合坐下休息。",
      },
      coords: [42.3592, -71.0920],
      mapQuery: "MIT Great Dome Killian Court, Cambridge MA",
      links: [
        { label: { en: "Searchable campus map", zh: "校园地图（可搜索）" }, url: "https://whereis.mit.edu/" },
        { label: { en: "Parking: MIT Visitor Lot", zh: "停车：MIT 访客停车场" }, url: "https://maps.apple.com/?q=MIT%20Visitor%20Parking%20139%20Massachusetts%20Ave%20Cambridge&ll=42.3585,-71.0958" },
      ],
      tour: {
        en: "Drive about 10 minutes from Harvard and park at the MIT Visitor Lot (139 Massachusetts Ave) on the west edge of campus (MIT suggests the Red Line if traffic is heavy). See Saarinen's sweeping Kresge Auditorium and the round MIT Chapel, cross Mass Ave to the grand Lobby 7 entrance, and walk the famous Infinite Corridor to Killian Court and the Great Dome. Step out to the Charles River for the Boston skyline, then north to Frank Gehry's tilting Stata Center. The hands-on MIT Museum near Kendall Square is an optional indoor finish.",
        zh: "从哈佛开车约10分钟，把车停在校园西缘的 MIT 访客停车场（139 Massachusetts Ave）（若交通拥堵，MIT 建议改乘红线地铁）。先看沙里宁设计、屋顶舒展的克雷斯吉礼堂和圆形的 MIT 小教堂，穿过 Mass Ave 到宏伟的七号大堂入口，再沿著名的“无限长廊”走到基利安庭院和大圆顶。走到查尔斯河边欣赏波士顿天际线，然后向北去看弗兰克·盖里设计、歪斜俏皮的斯塔塔中心。肯德尔广场附近可动手体验的 MIT 博物馆，可作为室内收尾的可选项目。",
      },
      tourMapSvg: `<svg viewBox="0 0 360 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MIT walking tour map" font-family="-apple-system,Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="360" height="480" fill="#f4f1ea"/>
  <rect x="0" y="412" width="360" height="68" fill="#cfe0ea"/>
  <rect x="160" y="300" width="106" height="85" rx="3" fill="#dfe8d8" stroke="#cdddc2"/>
  <g stroke="#d4ccba" stroke-width="7" stroke-linecap="round">
    <line x1="108" y1="120" x2="88" y2="405"/>
    <line x1="0" y1="405" x2="360" y2="405"/>
    <line x1="150" y1="150" x2="330" y2="150"/>
  </g>
  <g font-size="10.5" fill="#8a8270">
    <text x="58" y="270" transform="rotate(-78 58,270)">Mass Ave</text>
    <text x="280" y="400">Memorial Dr</text>
    <text x="262" y="145">Vassar St</text>
  </g>
  <g font-size="11" text-anchor="middle">
    <text class="i18n-en" x="213" y="346" fill="#7a8a6a">Killian Court</text>
    <text class="i18n-zh" x="213" y="346" fill="#7a8a6a">基利安庭院</text>
    <text class="i18n-en" x="300" y="452" fill="#5b7d96">Charles River</text>
    <text class="i18n-zh" x="300" y="452" fill="#5b7d96">查尔斯河</text>
  </g>
  <path d="M76,200 L48,248 L110,250 L172,255 L212,320 L212,390 L300,150 L76,200" fill="none" stroke="#0b4f6c" stroke-width="7" stroke-opacity="0.4" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M300,150 L333,222" fill="none" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6" stroke-linecap="round"/>
  <g text-anchor="middle" font-size="14" font-weight="700" fill="#fff">
    <circle cx="48" cy="248" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="48" y="253">1</text>
    <circle cx="110" cy="250" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="110" y="255">2</text>
    <circle cx="172" cy="255" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="172" y="260">3</text>
    <circle cx="212" cy="320" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="212" y="325">4</text>
    <circle cx="212" cy="390" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="212" y="395">5</text>
    <circle cx="300" cy="150" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="300" y="155">6</text>
    <circle cx="333" cy="222" r="13" fill="#6b7280" stroke="#fff" stroke-width="2.5"/><text x="333" y="227">7</text>
  </g>
  <rect x="63" y="182" width="26" height="26" rx="5" fill="#11697f" stroke="#fff" stroke-width="2.5"/>
  <text x="76" y="201" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">P</text>
  <g text-anchor="middle" font-size="10">
    <text class="i18n-en" x="333" y="248" fill="#6b7280">MIT Museum</text>
    <text class="i18n-zh" x="333" y="248" fill="#6b7280">MIT 博物馆</text>
    <text class="i18n-en" x="76" y="174" fill="#11697f">MIT Visitor Lot</text>
    <text class="i18n-zh" x="76" y="174" fill="#11697f">MIT 访客停车场</text>
  </g>
  <g><line x1="28" y1="55" x2="28" y2="36" stroke="#5a6776" stroke-width="2"/><path d="M28,32 L24,41 L32,41 Z" fill="#5a6776"/><text x="28" y="70" text-anchor="middle" font-size="11" fill="#5a6776">N</text></g>
  <g font-size="11" fill="#5a6776">
    <line x1="30" y1="432" x2="58" y2="432" stroke="#0b4f6c" stroke-width="6" stroke-opacity="0.5" stroke-linecap="round"/>
    <text class="i18n-en" x="64" y="436">Walking loop (under 1 mile)</text>
    <text class="i18n-zh" x="64" y="436">步行环线（不到1英里）</text>
    <line x1="30" y1="454" x2="58" y2="454" stroke="#8a8270" stroke-width="4" stroke-dasharray="2 6"/>
    <text class="i18n-en" x="64" y="458">Optional to ⑦ MIT Museum</text>
    <text class="i18n-zh" x="64" y="458">可选前往⑦ MIT 博物馆</text>
    <rect x="30" y="468" width="15" height="15" rx="3" fill="#11697f"/><text x="37.5" y="480" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">P</text>
    <text class="i18n-en" x="52" y="480">Parking — start &amp; end</text>
    <text class="i18n-zh" x="52" y="480">停车场 — 起点与终点</text>
  </g>
</svg>`,
      mustSee: [
        { emoji: "⛪", img: "mit-kresge.jpg", link: "https://whereis.mit.edu/",
          caption: { en: "1. Kresge Auditorium & MIT Chapel", zh: "1. 克雷斯吉礼堂与 MIT 小教堂" },
          desc: { en: "Two 1955 landmarks by architect Eero Saarinen: an auditorium under a sweeping thin-shell roof, and a serene round brick chapel.", zh: "建筑师埃罗·沙里宁1955年的两座地标：屋顶舒展轻盈的礼堂，以及静谧的圆形砖砌小教堂。" } },
        { emoji: "🏛️", img: "mit-lobby7.jpg", link: "https://www.mit.edu/visitmit/",
          caption: { en: "2. Lobby 7 (77 Mass Ave)", zh: "2. 七号大堂（77 Mass Ave）" },
          desc: { en: "MIT's grand 'front door' on Massachusetts Avenue — a columned entrance and domed rotunda that opens onto the Infinite Corridor.", zh: "MIT 在马萨诸塞大道上宏伟的“正门”——列柱入口与圆顶大厅，由此通向“无限长廊”。" } },
        { emoji: "📏", img: "mit-corridor.jpg", link: "https://whereis.mit.edu/",
          caption: { en: "3. The Infinite Corridor", zh: "3. 无限长廊" },
          desc: { en: "A famous 250-metre straight hallway running through the main buildings. Twice a year the sun lines up down its length ('MIThenge').", zh: "一条贯穿主楼群、长约250米的笔直走廊，十分有名。每年两次，落日会沿走廊方向正对成线（“MIT 日落奇景”）。" } },
        { emoji: "🏛️", img: "mit-dome.jpg", link: "https://www.mit.edu/visitmit/",
          caption: { en: "4. Killian Court & the Great Dome", zh: "4. 基利安庭院与大圆顶" },
          desc: { en: "The classic open lawn framing the domed Maclaurin Building — MIT's signature view, and where graduation is held each spring.", zh: "经典的开阔草坪正对圆顶的麦克劳林主楼——MIT 的标志性景观，也是每年春季毕业典礼的举办地。" } },
        { emoji: "🌊", img: "mit-river.jpg", link: "https://www.mit.edu/visitmit/",
          caption: { en: "5. Charles River skyline view", zh: "5. 查尔斯河天际线" },
          desc: { en: "Just south of Killian Court, the riverbank gives the best photo of the Boston skyline across the water — with benches to rest.", zh: "就在基利安庭院南侧，河岸是隔水拍摄波士顿天际线的最佳地点，还有长椅可供休息。" } },
        { emoji: "🌀", img: "mit-stata.jpg", link: "https://whereis.mit.edu/",
          caption: { en: "6. Stata Center", zh: "6. 斯塔塔中心" },
          desc: { en: "Frank Gehry's playful, tilting, brightly-colored building (2004), home to computer science and AI labs. Like nothing else on campus.", zh: "弗兰克·盖里设计、歪斜俏皮、色彩明快的建筑（2004年），是计算机科学与人工智能实验室的所在地，与校园其他建筑迥然不同。" } },
        { emoji: "🤖", img: "mit-museum.jpg", link: "https://mitmuseum.mit.edu/",
          caption: { en: "7. MIT Museum (optional)", zh: "7. MIT 博物馆（可选）" },
          desc: { en: "A hands-on museum near Kendall Square with robots, holograms, and clever inventions — a fun, indoor way to end the visit.", zh: "肯德尔广场附近一座可动手体验的博物馆，有机器人、全息影像和各种巧妙发明——是室内收尾的有趣之选。" } },
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
        en: "The Boston Public Garden, next to Boston Common in the heart of the city, was the first public botanical garden in America, established in 1837. It forms part of Boston's 'Emerald Necklace' chain of parks.\n\nLaid out in the Victorian style, it is famous for its formal flower beds, weeping willows, and a small lagoon crossed by a miniature suspension bridge. Since 1877 the beloved, foot-pedaled Swan Boats have glided across the water — still run by the same family today.\n\nNear the Charles Street corner stand the bronze 'Make Way for Ducklings' statues, honoring Robert McCloskey's classic children's book and a favorite photo stop for families.",
        zh: "波士顿公共花园紧邻波士顿公园（Boston Common），坐落于城市中心，建于1837年，是美国第一座公共植物园，也是波士顿“翡翠项链”公园链的一部分。\n\n花园以维多利亚风格布置，以规整的花圃、垂柳和一座由微型吊桥横跨的小湖而闻名。自1877年起，深受喜爱的脚踏式天鹅船便在湖面上轻轻滑行，至今仍由同一家族经营。\n\n在查尔斯街一角矗立着青铜雕塑《让路给小鸭子》，取材于罗伯特·麦克洛斯基的经典童书，是家庭游客最爱的拍照点。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Boston_Public_Garden",
      walk: { en: "Very gentle; flat paths & lots of benches.", zh: "非常轻松；小径平坦，长椅众多。" },
      hours: { en: "Swan Boats daily 10am–5pm (late June).", zh: "天鹅船每日10:00–17:00（六月下旬）。" },
      tips: {
        en: "Swan Boat tickets (~$4.25 seniors) are bought at the dock — no reservation needed. Staff can help with boarding. Boats don't run in rain or high wind.",
        zh: "天鹅船船票（长者约$4.25）在码头现场购买，无需预订。工作人员可协助上船。雨天或大风时不开船。",
      },
      coords: [42.3541, -71.0699],
      mapQuery: "Swan Boats Boston Public Garden",
      links: [
        { label: { en: "Swan Boats info & hours", zh: "天鹅船信息与时间" }, url: "https://swanboats.com/" },
        { label: { en: "About the Public Garden", zh: "公共花园介绍" }, url: "https://friendsofthepublicgarden.org/" },
      ],
      mustSee: [
        { emoji: "🦢", img: "garden-swanboat.jpg", link: "https://swanboats.com/",
          caption: { en: "1. Ride a Swan Boat", zh: "1. 乘坐天鹅船" },
          desc: { en: "A calm, 15-minute foot-pedaled ride around the lagoon, running since 1877. Seniors about $4.25; buy at the dock, staff help you board.", zh: "环湖一圈、约15分钟的脚踏船，宁静悠然，自1877年运营至今。长者约$4.25，码头现场购票，工作人员协助上船。" } },
        { emoji: "🦆", img: "garden-ducklings.jpg", link: "https://friendsofthepublicgarden.org/",
          caption: { en: "2. 'Make Way for Ducklings'", zh: "2.《让路给小鸭子》" },
          desc: { en: "The famous bronze mother duck and ducklings, honoring the classic children's book. A favorite photo and a hit with grandchildren.", zh: "著名的青铜鸭妈妈与小鸭子，取材于经典童书。热门拍照点，孩子们尤其喜欢。" } },
        { emoji: "🌳", img: "garden-flowers.jpg", link: "https://friendsofthepublicgarden.org/",
          caption: { en: "3. Lagoon, bridge & willows", zh: "3. 湖泊、小桥与垂柳" },
          desc: { en: "Stroll the Victorian flower beds and weeping willows and cross the dainty little suspension bridge over the lagoon.", zh: "漫步于维多利亚式花圃与垂柳之间，走过横跨湖面的精巧小吊桥。" } },
        { emoji: "🐴", img: "garden-washington.jpg", link: "https://friendsofthepublicgarden.org/",
          caption: { en: "4. George Washington statue", zh: "4. 华盛顿骑马像" },
          desc: { en: "The grand equestrian statue of George Washington at the Arlington Street gate — the garden's stately centerpiece.", zh: "矗立在 Arlington 街入口的华盛顿骑马铜像，是花园气派的标志性中心。" } },
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
        en: "Boston Duck Tours is a sightseeing company that has carried visitors around the city since 1994 aboard replica World War II amphibious vehicles called 'DUKWs,' or simply 'ducks.'\n\nEach roughly 80-minute tour rolls past Boston's landmarks with a lively 'ConDUCKtor,' then drives straight down a ramp into the Charles River for a smooth cruise on the water — the splash-in is always a crowd favorite.\n\nThe ducks depart from three points around the city: the Prudential Center, the Museum of Science, and the New England Aquarium. It's a fun way to see a lot of Boston with no walking at all.",
        zh: "波士顿鸭子船游览是一家观光公司，自1994年起便用二战时期的水陆两栖车（称为 DUKW，俗称“鸭子船”）的复刻车辆载着游客畅游全城。\n\n每趟约80分钟的行程由风趣的“鸭长”（ConDUCKtor）讲解，驶过波士顿的各处地标，随后沿坡道直接开进查尔斯河，平稳地巡游水面——“扑通”入水的一刻总是最受欢迎。\n\n鸭子船从城中三处出发：保诚中心、科学博物馆和新英格兰水族馆。这是一种无需步行就能饱览波士顿的有趣方式。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Boston_Duck_Tours",
      walk: { en: "Zero walking — fully seated.", zh: "完全无需步行——全程坐着。" },
      hours: { en: "Departs hourly/half-hourly, 9am–dusk.", zh: "每小时或每半小时一班，9:00至黄昏。" },
      tips: {
        en: "Departs from the Prudential Center, Museum of Science, or the Aquarium. Wheelchair-accessible ducks are available — call 617-450-0068 in advance to arrange. Complements the trolley; you can do both.",
        zh: "从保诚中心、科学博物馆或水族馆出发。提供无障碍轮椅鸭子船——请提前致电 617-450-0068 安排。与观光车互补，二者可兼得。",
      },
      coords: [42.3473, -71.0821],
      mapQuery: "Boston Duck Tours Prudential Center",
      links: [
        { label: { en: "Tickets, times & departure points", zh: "购票、班次与出发点" }, url: "https://bostonducktours.com/" },
      ],
      mustSee: [
        { emoji: "🦆", img: "duck-vehicle.jpg", link: "https://bostonducktours.com/the-tour/",
          caption: { en: "Board the amphibious 'duck'", zh: "登上水陆两栖“鸭子船”" },
          desc: { en: "A colorful WWII-style DUKW. Step up once and stay seated the whole 80 minutes; wheelchair-accessible ducks can be arranged by phone.", zh: "色彩鲜明的二战风格 DUKW 两栖车。登车一次，全程80分钟舒适落座；可电话预约无障碍轮椅车。" } },
        { emoji: "🌊", img: "duck-river.jpg", link: "https://bostonducktours.com/the-tour/",
          caption: { en: "Splash into the Charles River", zh: "“扑通”开进查尔斯河" },
          desc: { en: "Halfway through, the duck rolls down a ramp and floats — a gentle cruise on the Charles with skyline views all around.", zh: "行程过半时，鸭子船沿坡道驶入水中漂浮——在查尔斯河上平稳巡游，四周天际线尽收眼底。" } },
        { emoji: "🏙️", img: "duck-skyline.jpg", link: "https://bostonducktours.com/the-tour/",
          caption: { en: "Landmarks & skyline views", zh: "地标与天际线" },
          desc: { en: "On land the guide points out Boston Common, Beacon Hill, the gold-domed State House, Quincy Market and more — a great overview.", zh: "在陆地上，导览员会一路指点波士顿公园、灯塔山、金顶州议会大厦、昆西市场等——是绝佳的全城概览。" } },
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
        en: "The Freedom Trail is a 2.5-mile (4 km) route through Boston that links 16 places important to the founding of the United States. Marked by a line on the ground, it runs from Boston Common to the Old North Church and on to the Bunker Hill Monument in Charlestown.\n\nAlong the way are meeting houses, old burying grounds, churches, historic buildings, and a naval frigate. Most sites are free; a few, such as the Old State House and the Paul Revere House, charge a small admission.\n\nThe trail was the idea of journalist William Schofield in 1951; the city soon made it real, and within a couple of years tens of thousands of people were walking it each year. A National Park Service visitor center in Faneuil Hall offers free maps and tours.",
        zh: "自由之路是一条贯穿波士顿、长约2.5英里（4公里）的路线，串联起16处对美国建国具有重要意义的地点。它以地面上的标线为记，从波士顿公园一直延伸到北角的老北教堂，再到查尔斯顿的邦克山纪念碑。\n\n沿途有会堂、古老墓园、教堂、历史建筑，还有一艘海军护卫舰。大多数景点免费；少数几处，如旧州议会厅和保罗·里维尔故居，会收取少量门票。\n\n这条步道由记者威廉·斯科菲尔德于1951年提议；市政府很快将其付诸实施，几年之内每年便有数万人沿路漫步。法尼尔厅内设有国家公园管理局的访客中心，提供免费地图和导览。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Freedom_Trail",
      walk: { en: "Your choice — trolley between stops keeps it short.", zh: "步行多少随您——站点间乘车，走得很少。" },
      hours: { en: "Trolley runs through the day; market 10am–9pm.", zh: "观光车全天运营；市场10:00–21:00。" },
      tips: {
        en: "Quincy Market is a covered food hall with dozens of stalls and lots of seating — an easy, sheltered lunch. The State House and Faneuil Hall are the gentlest, most rewarding stops.",
        zh: "昆西市场是一座有顶的美食大厅，数十个摊位、座位充足——是轻松又遮风避雨的午餐之选。州议会大厦和法尼尔厅是最省力、最值得的两站。",
      },
      coords: [42.3601, -71.0568],
      mapQuery: "Faneuil Hall Quincy Market Boston",
      links: [
        { label: { en: "Official Freedom Trail map", zh: "自由之路官方地图" }, url: "https://www.thefreedomtrail.org/trail-map" },
        { label: { en: "Parking: Boston Common Garage", zh: "停车：波士顿公园停车楼" }, url: "https://maps.apple.com/?q=Boston%20Common%20Garage&ll=42.3554,-71.0664" },
      ],
      tour: {
        en: "Arrive by commuter rail (Back Bay or South Station) or drive and park at the Boston Common Garage. Start among the Swan Boats in the Public Garden, then follow the red line of the Freedom Trail east through Boston Common — past the gold-domed State House, Park Street Church, the Granary Burying Ground, and King's Chapel — to the Old State House, Faneuil Hall, and Quincy Market for lunch. From there the trail continues into the North End. To save your legs, hop the trolley between stops and step off only where you like; it loops you back.",
        zh: "可乘通勤火车到 Back Bay 或 South Station，或自驾停在波士顿公园停车楼。先在公共花园的天鹅船边出发，再沿自由之路的红线向东穿过波士顿公园——经过金顶州议会大厦、公园街教堂、谷仓墓园和国王礼拜堂——到旧州议会厅、法尼尔厅，并在昆西市场吃午餐。由此自由之路继续通向北角。为了省力，可在各站之间乘坐随上随下观光车，想看哪站就在哪站下，它会载你绕回。",
      },
      tourMapSvg: `<svg viewBox="0 0 360 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Downtown Boston Freedom Trail map" font-family="-apple-system,Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="360" height="470" fill="#f4f1ea"/>
  <rect x="18" y="300" width="80" height="95" rx="3" fill="#dfe8d8" stroke="#cdddc2"/>
  <rect x="102" y="248" width="100" height="132" rx="3" fill="#dfe8d8" stroke="#cdddc2"/>
  <rect x="270" y="44" width="84" height="78" rx="3" fill="#ece7d8" stroke="#ddd6c2"/>
  <line x1="99" y1="248" x2="99" y2="382" stroke="#d4ccba" stroke-width="7" stroke-linecap="round"/>
  <g font-size="11" text-anchor="middle">
    <text class="i18n-en" x="58" y="350" fill="#5f7a4f">Public Garden</text>
    <text class="i18n-zh" x="58" y="350" fill="#5f7a4f">公共花园</text>
    <text class="i18n-en" x="152" y="364" fill="#5f7a4f">Boston Common</text>
    <text class="i18n-zh" x="152" y="364" fill="#5f7a4f">波士顿公园</text>
    <text class="i18n-en" x="312" y="110" fill="#9a8f73">North End</text>
    <text class="i18n-zh" x="312" y="110" fill="#9a8f73">北角</text>
  </g>
  <path d="M54,340 L150,298 L192,246 L226,232 L262,198 L286,166 L300,148" fill="none" stroke="#c8102e" stroke-width="6" stroke-opacity="0.55" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M300,148 L310,90" fill="none" stroke="#c8102e" stroke-width="4" stroke-opacity="0.55" stroke-dasharray="2 6" stroke-linecap="round"/>
  <circle cx="54" cy="340" r="11" fill="#11697f" stroke="#fff" stroke-width="2.5"/>
  <g text-anchor="middle" font-size="14" font-weight="700" fill="#fff">
    <circle cx="150" cy="298" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="150" y="303">1</text>
    <circle cx="192" cy="246" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="192" y="251">2</text>
    <circle cx="226" cy="232" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="226" y="237">3</text>
    <circle cx="262" cy="198" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="262" y="203">4</text>
    <circle cx="286" cy="166" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="286" y="171">5</text>
    <circle cx="300" cy="148" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="300" y="153">6</text>
    <circle cx="310" cy="84" r="12" fill="#6b7280" stroke="#fff" stroke-width="2.5"/><text x="310" y="89" font-size="11">★</text>
  </g>
  <rect x="116" y="346" width="24" height="24" rx="5" fill="#11697f" stroke="#fff" stroke-width="2.5"/>
  <text x="128" y="364" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">P</text>
  <g fill="#1f4b73"><circle cx="200" cy="258" r="9" stroke="#fff" stroke-width="2"/><circle cx="96" cy="316" r="9" stroke="#fff" stroke-width="2"/></g>
  <g text-anchor="middle" font-size="11" font-weight="700" fill="#fff"><text x="200" y="262">T</text><text x="96" y="320">T</text></g>
  <g text-anchor="middle" font-size="10">
    <text class="i18n-en" x="54" y="318" fill="#11697f">Swan Boats</text>
    <text class="i18n-zh" x="54" y="318" fill="#11697f">天鹅船</text>
    <text class="i18n-en" x="318" y="68" fill="#6b7280">Paul Revere / Old North</text>
    <text class="i18n-zh" x="318" y="68" fill="#6b7280">里维尔故居 / 老北教堂</text>
  </g>
  <g><line x1="28" y1="430" x2="28" y2="411" stroke="#5a6776" stroke-width="2"/><path d="M28,407 L24,416 L32,416 Z" fill="#5a6776"/><text x="40" y="430" font-size="11" fill="#5a6776">N</text></g>
  <g font-size="10.5" fill="#5a6776">
    <line x1="120" y1="412" x2="146" y2="412" stroke="#c8102e" stroke-width="6" stroke-opacity="0.55" stroke-linecap="round"/>
    <text class="i18n-en" x="152" y="416">Freedom Trail — walk or trolley</text>
    <text class="i18n-zh" x="152" y="416">自由之路 — 步行或观光车</text>
    <line x1="120" y1="430" x2="146" y2="430" stroke="#c8102e" stroke-width="4" stroke-opacity="0.55" stroke-dasharray="2 6"/>
    <text class="i18n-en" x="152" y="434">Continue to North End (optional)</text>
    <text class="i18n-zh" x="152" y="434">继续前往北角（可选）</text>
    <rect x="118" y="442" width="14" height="14" rx="3" fill="#11697f"/><text x="125" y="453" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">P</text>
    <text class="i18n-en" x="152" y="453">Parking (Boston Common Garage)</text>
    <text class="i18n-zh" x="152" y="453">停车（波士顿公园停车楼）</text>
    <circle cx="125" cy="463" r="7" fill="#1f4b73"/><text x="125" y="466" text-anchor="middle" font-size="9" font-weight="700" fill="#fff">T</text>
    <text class="i18n-en" x="152" y="466">Subway (Green / Red Line)</text>
    <text class="i18n-zh" x="152" y="466">地铁（绿线 / 红线）</text>
  </g>
</svg>`,
      mustSee: [
        { emoji: "🌳", img: "boston-common.jpg", link: "https://www.boston.gov/parks/boston-common",
          caption: { en: "1. Boston Common", zh: "1. 波士顿公园" },
          desc: { en: "America's oldest public park (1634) and the start of the Freedom Trail — wide paths, shade, and benches, with the Frog Pond at its heart.", zh: "美国最古老的公共公园（1634年），也是自由之路的起点——宽阔小径、绿荫和长椅，中心是“蛙塘”。" } },
        { emoji: "🏛️", img: "freedom-statehouse.jpg", link: "https://www.thefreedomtrail.org/trail-sites/massachusetts-state-house",
          caption: { en: "2. Massachusetts State House", zh: "2. 马萨诸塞州议会大厦" },
          desc: { en: "The 1798 state capitol crowned by a shining gold dome, designed by Charles Bulfinch. A grand photo from the top of the Common.", zh: "建于1798年的州议会大厦，顶着金光闪闪的圆顶，由查尔斯·布尔芬奇设计。在公园高处拍照气派十足。" } },
        { emoji: "⚰️", img: "freedom-granary.jpg", link: "https://www.thefreedomtrail.org/trail-sites/granary-burying-ground",
          caption: { en: "3. Granary Burying Ground", zh: "3. 谷仓墓园" },
          desc: { en: "An atmospheric 1660 graveyard and resting place of Paul Revere, John Hancock, Samuel Adams, and Benjamin Franklin's family.", zh: "气氛肃穆的1660年墓园，长眠着保罗·里维尔、约翰·汉考克、塞缪尔·亚当斯，以及本杰明·富兰克林的家人。" } },
        { emoji: "🏦", img: "freedom-oldstatehouse.jpg", link: "https://revolutionaryspaces.org/",
          caption: { en: "4. Old State House", zh: "4. 旧州议会厅" },
          desc: { en: "Boston's oldest public building (1713). The Declaration of Independence was first read to the city from its balcony; the Boston Massacre happened just outside.", zh: "波士顿最古老的公共建筑（1713年）。《独立宣言》最初就是从它的阳台向全城宣读；波士顿惨案就发生在楼外。" } },
        { emoji: "🔔", img: "freedom-faneuil.jpg", link: "https://www.nps.gov/bost/",
          caption: { en: "5. Faneuil Hall", zh: "5. 法尼尔厅" },
          desc: { en: "The 'Cradle of Liberty,' a public meeting hall since 1743 where colonists debated independence. A National Park visitor center is on the ground floor.", zh: "“自由的摇篮”，自1743年起便是公共集会场所，殖民者曾在此辩论独立。底层设有国家公园访客中心。" } },
        { emoji: "🍽️", img: "freedom-quincy.jpg", link: "https://faneuilhallmarketplace.com/",
          caption: { en: "6. Quincy Market (lunch)", zh: "6. 昆西市场（午餐）" },
          desc: { en: "A grand 1826 market hall, now a covered food court with dozens of stalls and plenty of seating — the easy, sheltered lunch stop.", zh: "建于1826年的宏伟市场大厅，如今是有顶的美食广场，数十个摊位、座位充足——轻松又遮风避雨的午餐之选。" } },
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
        en: "The North End is Boston's oldest residential neighborhood, settled in the 1630s. Though it covers barely a third of a square mile, it is packed with history and with nearly a hundred shops, cafés, and restaurants.\n\nSince the early 20th century it has been the city's Italian quarter, famous for its Italian American community, narrow lanes, and food — from fresh pasta to the cannoli everyone lines up for.\n\nIt is also home to two Freedom Trail landmarks: the Paul Revere House (c. 1680, the city's oldest building) and the Old North Church, where in 1775 two lanterns signaled that the British were coming — sparking Revere's famous midnight ride.",
        zh: "北角是波士顿最古老的居住区，早在1630年代便有人定居。它面积仅约三分之一平方英里，却充满历史，云集近百家商店、咖啡馆和餐厅。\n\n自20世纪初以来，这里一直是波士顿的意大利人聚居区，以意大利裔社区、狭窄的小巷和美食而闻名——从新鲜手工面食到人人排队的奶油卷（cannoli）。\n\n这里还坐落着自由之路上的两处地标：保罗·里维尔故居（约1680年，全城最古老的建筑）和老北教堂——1775年，两盏灯笼在此发出英军来袭的信号，引发了里维尔著名的午夜骑行。",
      },
      storySrc: "https://en.wikipedia.org/wiki/North_End,_Boston",
      walk: { en: "Some narrow streets; go slow, the trolley stops nearby.", zh: "有些狭窄街巷；慢慢走，观光车在附近设站。" },
      hours: { en: "Cafés & bakeries open late.", zh: "咖啡馆与糕点店营业至深夜。" },
      tips: {
        en: "Don't miss a cannoli from Mike's Pastry or Modern Pastry. A lovely spot for an early dinner if you're staying out past the evening traffic.",
        zh: "别错过 Mike's Pastry 或 Modern Pastry 的奶油卷（cannoli）。若想等晚高峰过后再回去，这里也很适合吃顿早晚餐。",
      },
      coords: [42.3637, -71.0537],
      mapQuery: "Paul Revere House North End Boston",
      links: [
        { label: { en: "Paul Revere House", zh: "保罗·里维尔故居" }, url: "https://www.paulreverehouse.org/" },
        { label: { en: "Old North Church", zh: "老北教堂" }, url: "https://oldnorth.com/" },
      ],
      mustSee: [
        { emoji: "🏠", img: "northend-revere.jpg", link: "https://www.paulreverehouse.org/",
          caption: { en: "1. Paul Revere House", zh: "1. 保罗·里维尔故居" },
          desc: { en: "Built around 1680, this is downtown Boston's oldest building and the home of patriot Paul Revere. A small admission lets you step inside.", zh: "建于约1680年，是波士顿市区最古老的建筑，也是爱国者保罗·里维尔的故居。购少量门票即可入内参观。" } },
        { emoji: "🐴", img: "northend-mall.jpg", link: "https://oldnorth.com/",
          caption: { en: "2. Paul Revere Mall (the Prado)", zh: "2. 保罗·里维尔广场" },
          desc: { en: "A peaceful brick courtyard with the famous equestrian statue of Paul Revere, framing a view of the Old North Church steeple behind.", zh: "一处静谧的红砖庭院，立着著名的保罗·里维尔骑马像，背后正好衬出老北教堂的尖塔。" } },
        { emoji: "⛪", img: "northend-church.jpg", link: "https://oldnorth.com/",
          caption: { en: "3. Old North Church", zh: "3. 老北教堂" },
          desc: { en: "Boston's oldest standing church (1723). From its steeple in 1775 hung the two lanterns — 'one if by land, two if by sea' — that began Revere's ride.", zh: "波士顿现存最古老的教堂（1723年）。1775年，正是从它的塔楼挂出两盏灯笼——“陆路挂一盏，海路挂两盏”——拉开了里维尔骑行的序幕。" } },
        { emoji: "🍰", img: "northend-cannoli.jpg",
          caption: { en: "4. Cannoli on Hanover Street", zh: "4. 汉诺威街的奶油卷" },
          desc: { en: "Cap the visit with a fresh cannoli from Mike's Pastry or Modern Pastry — the North End's beloved, much-debated rivalry.", zh: "用一只新鲜的奶油卷为这趟参观收尾——来自 Mike's Pastry 或 Modern Pastry，是北角广受喜爱、各有拥趸的“甜点之争”。" } },
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
        en: "Boston's Chinatown, in the downtown core, is the only historic Chinese neighborhood still surviving in New England, after those in Providence and Portland faded in the 1950s. It is one of the largest Chinatowns outside New York City.\n\nDensely populated and lively, it is the center of East and Southeast Asian cultural life in the city, with an abundance of Chinese and Vietnamese restaurants, bakeries, and shops.\n\nA grand paifang gate — a gift related to Taiwan — marks the entrance, and the neighborhood borders Boston Common and the downtown theater district. It has been home to Chinese families since the late 1800s and is loved for dim sum, roast meats, and fresh seafood.",
        zh: "波士顿唐人街位于市中心核心地带，是新英格兰地区唯一留存至今的历史华埠——普罗维登斯和波特兰的华埠在1950年代相继消失。它也是纽约市以外最大的唐人街之一。\n\n这里人口稠密、热闹非凡，是全城东亚与东南亚文化生活的中心，中餐馆、越南餐馆、糕点店和商铺林立。\n\n一座宏伟的牌楼（与台湾相关的赠礼）标示着入口，街区紧邻波士顿公园和市中心剧院区。自1800年代末以来，这里便是华人家庭的家园，以点心、烧腊和新鲜海鲜深受喜爱。",
      },
      storySrc: "https://en.wikipedia.org/wiki/Chinatown,_Boston",
      walk: { en: "A few flat, easy blocks.", zh: "几个平坦好走的街区。" },
      hours: { en: "Restaurants open late morning onward.", zh: "餐馆从上午晚些时候起营业。" },
      tips: {
        en: "Arrive early (~11:30am) to beat the lunch crowd before the long drive. Park in a garage near the Chinatown Gate / Tufts Medical area. Great for dim sum or a sit-down lunch.",
        zh: "建议早些到（约上午11:30），在长途驾驶前避开午餐人潮。可在唐人街牌楼／塔夫茨医疗中心附近的停车楼停车。很适合吃点心或坐下来好好吃顿午餐。",
      },
      coords: [42.3515, -71.0621],
      mapQuery: "Chinatown Gate Boston",
      links: [
        { label: { en: "Parking: 40 Beach St Garage", zh: "停车：40 Beach St 停车楼" }, url: "https://maps.apple.com/?q=40%20Beach%20Street%20Garage%20Boston&ll=42.3517,-71.0612" },
        { label: { en: "Chinatown Park (Greenway)", zh: "唐人街公园（绿道）" }, url: "https://www.rosekennedygreenway.org/parks/chinatown-park" },
      ],
      tour: {
        en: "Park at the 40 Beach Street Garage (a flat-rate lot right in Chinatown), then enjoy a few flat, easy blocks. Start at the grand Chinatown Gate, peek at the small Chinatown Park on the Greenway just behind it, then stroll the lantern-lined streets to an early dim-sum or sit-down lunch. Pick up sweets at a Chinese bakery for the road, and you're a short walk back to the car for the drive home.",
        zh: "把车停在 40 Beach Street 停车楼（就在唐人街内的统一价停车场），然后悠闲地逛几个平坦好走的街区。先到宏伟的唐人街牌楼，再看看牌楼后方绿道上的小型唐人街公园，接着沿挂满灯笼的街道散步，去吃一顿早点心或坐下来好好用午餐。在中式糕点店买些点心带上路，之后步行不远即可回到车上启程返家。",
      },
      tourMapSvg: `<svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boston Chinatown walking map" font-family="-apple-system,Helvetica,Arial,sans-serif">
  <rect x="0" y="0" width="360" height="320" fill="#f4f1ea"/>
  <rect x="296" y="150" width="50" height="95" rx="3" fill="#dfe8d8" stroke="#cdddc2"/>
  <g stroke="#d4ccba" stroke-width="7" stroke-linecap="round">
    <line x1="40" y1="210" x2="300" y2="210"/>
    <line x1="288" y1="70" x2="288" y2="280"/>
    <line x1="120" y1="110" x2="120" y2="280"/>
    <line x1="190" y1="120" x2="190" y2="280"/>
  </g>
  <g font-size="10.5" fill="#8a8270">
    <text x="46" y="228">Beach St</text>
    <text x="300" y="150" transform="rotate(90 300,150)">Greenway</text>
    <text x="92" y="104">Harrison Ave</text>
    <text x="194" y="116">Tyler St</text>
  </g>
  <g font-size="11" text-anchor="middle">
    <text class="i18n-en" x="320" y="200" fill="#5f7a4f">Chinatown</text>
    <text class="i18n-en" x="320" y="214" fill="#5f7a4f">Park</text>
    <text class="i18n-zh" x="320" y="205" fill="#5f7a4f">唐人街公园</text>
  </g>
  <path d="M170,210 L278,212 L320,200 L210,200 L145,186 L92,196 L170,210" fill="none" stroke="#c8102e" stroke-width="6" stroke-opacity="0.5" stroke-linejoin="round" stroke-linecap="round"/>
  <g text-anchor="middle" font-size="14" font-weight="700" fill="#fff">
    <circle cx="278" cy="212" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="278" y="217">1</text>
    <circle cx="320" cy="200" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="320" y="205">2</text>
    <circle cx="210" cy="200" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="210" y="205">3</text>
    <circle cx="145" cy="186" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="145" y="191">4</text>
    <circle cx="92" cy="196" r="13" fill="#c8102e" stroke="#fff" stroke-width="2.5"/><text x="92" y="201">5</text>
  </g>
  <rect x="158" y="198" width="24" height="24" rx="5" fill="#11697f" stroke="#fff" stroke-width="2.5"/>
  <text x="170" y="216" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">P</text>
  <g text-anchor="middle" font-size="10">
    <text class="i18n-en" x="262" y="240" fill="#c8102e">Gate</text>
    <text class="i18n-zh" x="262" y="240" fill="#c8102e">牌楼</text>
    <text class="i18n-en" x="170" y="246" fill="#11697f">40 Beach St Garage</text>
    <text class="i18n-zh" x="170" y="246" fill="#11697f">40 Beach St 停车楼</text>
  </g>
  <g><line x1="28" y1="58" x2="28" y2="39" stroke="#5a6776" stroke-width="2"/><path d="M28,35 L24,44 L32,44 Z" fill="#5a6776"/><text x="28" y="73" text-anchor="middle" font-size="11" fill="#5a6776">N</text></g>
  <g font-size="10.5" fill="#5a6776">
    <line x1="30" y1="284" x2="56" y2="284" stroke="#c8102e" stroke-width="6" stroke-opacity="0.5" stroke-linecap="round"/>
    <text class="i18n-en" x="62" y="288">Walking loop (a few flat blocks)</text>
    <text class="i18n-zh" x="62" y="288">步行环线（几个平坦街区）</text>
    <rect x="30" y="300" width="15" height="15" rx="3" fill="#11697f"/><text x="37.5" y="312" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">P</text>
    <text class="i18n-en" x="52" y="312">Parking — start &amp; end of the walk</text>
    <text class="i18n-zh" x="52" y="312">停车场 — 步行起点与终点</text>
  </g>
</svg>`,
      mustSee: [
        { emoji: "🏮", img: "chinatown-gate.jpg", link: "https://www.rosekennedygreenway.org/parks/chinatown-park",
          caption: { en: "1. The Chinatown Gate (paifang)", zh: "1. 唐人街牌楼" },
          desc: { en: "The grand four-pillar gate marks the entrance to Chinatown, guarded by two stone lions (foo dogs). A favourite first photo.", zh: "这座宏伟的四柱牌楼标示着唐人街的入口，两侧由石狮把守，是绝佳的第一张合影。" } },
        { emoji: "🌿", img: "chinatown-park.jpg", link: "https://www.rosekennedygreenway.org/parks/chinatown-park",
          caption: { en: "2. Chinatown Park", zh: "2. 唐人街公园" },
          desc: { en: "A small, pretty park on the Rose Kennedy Greenway just behind the gate, with a winding red path and a bamboo grove — a quiet place to sit.", zh: "牌楼后方、罗丝·肯尼迪绿道上的一处小巧雅致的公园，有蜿蜒的红色步道和竹林——是坐下小憩的清静之地。" } },
        { emoji: "🏮", img: "chinatown-street.jpg",
          caption: { en: "3. Lantern-lined streets", zh: "3. 挂满灯笼的街道" },
          desc: { en: "Beach Street and Tyler Street form the lively heart of Chinatown — red lanterns, bilingual signs, herbal shops, and bustling restaurants.", zh: "Beach 街与 Tyler 街是唐人街热闹的核心——红灯笼、双语招牌、中药铺和熙攘的餐馆。" } },
        { emoji: "🥟", img: "chinatown-dimsum.jpg",
          caption: { en: "4. Dim sum or a sit-down lunch", zh: "4. 点心或坐下来用午餐" },
          desc: { en: "The reason for the stop: roast meats, fresh seafood, and carts of dim sum. Arrive around 11:30am to beat the crowd before the long drive.", zh: "此行的重头戏：烧腊、新鲜海鲜和一笼笼的点心。建议约上午11:30到，在长途驾驶前避开人潮。" } },
        { emoji: "🥮", img: "chinatown-bakery.jpg",
          caption: { en: "5. Chinese bakery for the road", zh: "5. 带上路的中式糕点" },
          desc: { en: "Before heading back to the car, pick up egg tarts, mooncakes, or buns from a Chinese bakery to enjoy on the drive home.", zh: "回到车上之前，到中式糕点店买些蛋挞、月饼或包点，留在返程路上享用。" } },
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
