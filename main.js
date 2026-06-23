/* ============================================
   EDficient — main.js
   ============================================ */

/* ── Hamburger ─────────────────────────────── */
var togglebtn = document.querySelector(".togglebtn");
var navlinks  = document.querySelector(".navlinks");

if (togglebtn) {
    togglebtn.addEventListener("click", function () {
        this.classList.toggle("click");
        navlinks.classList.toggle("open");
    });

    document.querySelectorAll(".navlinks a").forEach(function (link) {
        link.addEventListener("click", function () {
            navlinks.classList.remove("open");
            togglebtn.classList.remove("click");
        });
    });
    document.addEventListener("click", function (e) {
        if (
            navlinks.classList.contains("open") &&
            !navlinks.contains(e.target) &&
            !togglebtn.contains(e.target)
        ) {
            navlinks.classList.remove("open");
            togglebtn.classList.remove("click");
        }
    });
}

/* ── Contact form popup ─────────────────────── */
var contactForm   = document.getElementById('contactForm');
var contactButton = document.getElementById('openContactForm');
var closeButton   = document.querySelector('.close-btn');

if (contactButton) {
    contactButton.addEventListener('click', function (e) {
        e.preventDefault();
        contactForm.style.display = 'flex';
    });
}
if (closeButton) {
    closeButton.addEventListener('click', function () {
        contactForm.style.display = 'none';
    });
}
window.addEventListener('click', function (e) {
    if (e.target === contactForm) contactForm.style.display = 'none';
});

/* ============================================
   Everything below runs after DOM is ready
   ============================================ */
document.addEventListener("DOMContentLoaded", function () {

    /* ── Language Toggle ────────────────────── */
    var translations = {
        en: {
            "nav-intro":     "Intro",
            "nav-carefree":  "Care-free",
            "nav-rewarding": "Rewarding",
            "nav-fun":       "Fun",
            "nav-contact":   "Contact",
            "index-hero": 'Hi, I\'m EDficient. Let me join your team to make your projects <a href="carefree.html" style="font-weight:600;color:#EC6502">care-free</a>, <a href="rewarding.html" style="font-weight:600;color:#EC6502">rewarding</a> and <a href="fun.html" style="font-weight:600;color:#EC6502">fun</a>! With a proven efficient and effective approach, I ensure that all your Marketing/Communication projects are delivered in time, within specifications and within budget.',
            "index-stories": "EDficient success stories:",
            "carefree-hero": "Peace of mind in the run up to a high profile event? No stress and no surprises when your project is finalized? EDficient is the way to go.<br><br>With 25+ years of experience, I know all the pitfalls and know how to avoid them. And I'm very adaptable and flexible; Plug-ED-Play, as so to say.<br><br>I'm happy to plug in other resources too. A broad network of marketing communication specialists and hands-on craftsmen and women to bring your ideas to life, from concept to execution, are at your disposal when you choose to work EDficient.",
            "rewarding-hero": '"Champagne on a beer budget" — are you familiar with that phrase? Well, it\'s my specialty; realizing that we\'re on a tight budget, but you want to make sure things don\'t look cheap, right?<br><br>Joining forces also means leveraging available experience and expertise in your organization and making sure we keep the end goal in mind. Measurable results that enable follow-up are a guarantee for a return-on-investment.<br><br>I keep a keen eye on that tight budget and report project progress frequently. Always. Whilst doing so, I make sure that we fuel the good ideas and have funds available for that champagne/beer toast at the end of a successful project.<br><br>Yes, even celebrating success can be done EDficient. Cheers!',
            "fun-hero": "The projects we will team up on are fun. Sure, they are challenging too, but we shouldn't wait to enjoy the work only when it's over and done. The process/project can be fun from the very start.<br><br>When your stakeholders are informed on a frequent basis and they know what we expect from them, they'll be engaged and very likely ambassadors for your project.<br><br>EDficient means you can look forward to regular well-organized, structured meetings, where people are held accountable and where we create a positive environment that allows all to develop and deploy their talents… and have fun!",
            "contact-hero": "I can't think of a reason not to connect. You too? You don't need a clear-cut, finalized and signed off project charter before connecting. The earlier in the project we get to connect, the more room to apply EDficient experience and expertise to realize your stated goals.<br><br>But if you already have everything clear-cut and signed off, then contact me too. Who knows, we might discover whole new levels of being EDficient together.<br><br>Let's connect:",
            "form-title":   "Let's <span>connect</span>",
            "form-name":    "Name",
            "form-email":   "Email",
            "form-message": "Message",
            "form-send":    "Send Message",
            "gallery-video":    "Video & Animation",
            "gallery-congress": "Congress",
            "gallery-trade":    "Trade shows",
            "gallery-customer": "Customer events",
            "gallery-internal": "Internal events",
            "gallery-sports":   "Sports events",
            "modal-hint": "← use arrow keys →"
        },
    nl: {
        "nav-intro":     "Intro",
        "nav-carefree":  "Zorgeloos",
        "nav-rewarding": "Resultaatgericht",
        "nav-fun":       "Plezier",
        "nav-contact":   "Contact",

        "index-hero": 'Hoi, ik ben EDficient. Ik sluit graag aan bij jouw team om projecten <a href="carefree.html" style="font-weight:600;color:#EC6502">zorgeloos</a>, <a href="rewarding.html" style="font-weight:600;color:#EC6502">resultaatgericht</a> en <a href="fun.html" style="font-weight:600;color:#EC6502">met plezier</a> te realiseren. Met een bewezen efficiënte en effectieve aanpak zorg ik ervoor dat jouw marketing- en communicatieprojecten op tijd, volgens afspraak en binnen budget worden opgeleverd.',

        "index-stories": "Succesverhalen van EDficient:",

        "carefree-hero": "Zorgeloos toewerken naar een belangrijk evenement? Geen stress en geen verrassingen bij de afronding van je project? Dan is EDficient de juiste keuze.<br><br>Met meer dan 25 jaar ervaring ken ik de valkuilen en weet ik hoe je ze voorkomt. Ik ben flexibel en schakel snel — Plug-ED-Play, om het zo te zeggen.<br><br>Daarnaast maak ik graag gebruik van mijn netwerk. Een breed scala aan marketing- en communicatiespecialisten en vakmensen staat klaar om jouw ideeën tot leven te brengen, van concept tot uitvoering.",

        "rewarding-hero": '"Champagne met een bierbudget" — ken je die uitdrukking? Dat is precies waar mijn kracht ligt: werken met een strak budget, zonder dat het resultaat er ook zo uitziet.<br><br>Samenwerken betekent ook optimaal gebruikmaken van de kennis en ervaring binnen jouw organisatie, met altijd het einddoel scherp in beeld. Meetbare resultaten die vervolgacties mogelijk maken, zorgen voor een duidelijke return on investment.<br><br>Ik bewaak het budget nauwkeurig en rapporteer regelmatig over de voortgang. Tegelijkertijd zorg ik dat er ruimte blijft voor sterke ideeën én voor een passende afsluiting van een succesvol project.<br><br>Succes vieren hoort er namelijk ook bij. Proost!',

        "fun-hero": "De projecten waar we samen aan werken zijn leuk. Natuurlijk zijn ze ook uitdagend, maar het werk mag onderweg al plezier geven — niet pas achteraf.<br><br>Wanneer stakeholders goed geïnformeerd zijn en weten wat er van hen verwacht wordt, raken ze betrokken en worden ze vaak zelfs ambassadeurs van het project.<br><br>EDficient betekent werken met structuur, duidelijke afspraken en een positieve sfeer waarin iedereen verantwoordelijkheid neemt en zijn talenten kan inzetten — en waarin samenwerken ook gewoon leuk is.",

        "contact-hero": "Ik zie eigenlijk geen reden om geen contact op te nemen. Jij wel? Je hoeft echt nog geen volledig uitgewerkt projectplan te hebben om kennis te maken.<br><br>Hoe eerder we in gesprek gaan, hoe meer ruimte er is om mijn ervaring en expertise in te zetten voor jouw doelen.<br><br>Maar ook als alles al helemaal helder is, kom ik graag met je in contact. Wie weet ontdekken we samen nieuwe manieren om nóg efficiënter te werken.<br><br>Laten we kennismaken:",

        "form-title":   "Laten we <span>kennismaken</span>",
        "form-name":    "Naam",
        "form-email":   "E-mail",
        "form-message": "Bericht",
        "form-send":    "Versturen",

        "gallery-video":    "Video & Animatie",
        "gallery-congress": "Congressen",
        "gallery-trade":    "Beurzen",
        "gallery-customer": "Klantenevenementen",
        "gallery-internal": "Interne evenementen",
        "gallery-sports":   "Sportevenementen",

        "modal-hint": "← gebruik de pijltjestoetsen →"
    }
    };

    var currentLang = localStorage.getItem('edficient-lang') || 'nl';

    function applyLang(lang) {
        currentLang = lang;
        localStorage.setItem('edficient-lang', lang);
        document.documentElement.lang = lang;
        var t = translations[lang];

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        document.querySelectorAll('[data-key]').forEach(function (el) {
            var key = el.dataset.key;
            if (t[key] !== undefined) el.innerHTML = t[key];
        });

        // update modal hint if open
        var hint = document.getElementById('modalHint');
        if (hint) hint.textContent = t['modal-hint'] || '';
    }

    /* Inject lang toggle into nav — always */
    document.querySelectorAll('nav').forEach(function (nav) {
        if (nav.querySelector('.lang-toggle')) return;
        var toggle = document.createElement('div');
        toggle.className = 'lang-toggle';
        toggle.innerHTML = '<button class="lang-btn" data-lang="en">EN</button><button class="lang-btn" data-lang="nl">NL</button>';
        var ul = nav.querySelector('ul');
        if (ul) ul.after(toggle);
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.addEventListener('click', function () { applyLang(this.dataset.lang); });
    });

    applyLang(currentLang); // ← always runs, on every page

    /* ── Carousel — only on pages that have the modal ── */
    var modal = document.getElementById("imageModal");
    if (!modal) return; // stops only carousel code; lang toggle already done above

    modal.innerHTML = [
        '<span class="close" id="modalClose">&#x2715;</span>',
        '<div class="modal-content">',
          '<div class="modal-frame">',
            '<div class="modal-progress" id="modalProgress"></div>',
            '<img id="carouselImage" src="" alt="Carousel Image">',
            '<video id="carouselVideo" controls>',
              '<source id="carouselVideoSource" src="" type="video/mp4">',
            '</video>',
            '<button class="modal-arrow prev" id="prevBtn">&#8592;</button>',
            '<button class="modal-arrow next" id="nextBtn">&#8594;</button>',
          '</div>',
          '<div class="modal-bar">',
            '<span class="modal-counter" id="modalCounter">1 / 1</span>',
            '<span class="modal-hint" id="modalHint"></span>',
          '</div>',
        '</div>'
    ].join('');

    var modalImage  = document.getElementById("carouselImage");
    var modalVideo  = document.getElementById("carouselVideo");
    var videoSource = document.getElementById("carouselVideoSource");
    var closeBtn    = document.getElementById("modalClose");
    var prevBtn     = document.getElementById("prevBtn");
    var nextBtn     = document.getElementById("nextBtn");
    var counter     = document.getElementById("modalCounter");
    var progress    = document.getElementById("modalProgress");
    var hint        = document.getElementById("modalHint");

    // Set hint text in current language
    hint.textContent = (translations[currentLang] || translations.en)['modal-hint'];

    var imageSets = {
        "Sports events": [
            'images/Slide 1 - homepage/Sports event/118.jpg',
            'images/Slide 1 - homepage/Sports event/43467118_1985951318118618_5887229767047970816_n-768x432.jpg',
            'images/Slide 1 - homepage/Sports event/83852481-c46a-3e03-8caa-ab6aba427911.jpg',
            'images/Slide 1 - homepage/Sports event/download.jpg'
        ],
        "Customer events": [
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (222).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (195).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (201).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (230).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (257).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (265).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (270).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (279).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (281).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (284).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (292).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Fi Europe 2023 (314).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Frankfurt (130).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Party FI 2019 (WEB (12).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Party FI 2019 (WEB (13).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Party FI 2019 (WEB (31).jpg',
            'images/Slide 1 - homepage/Customer event/Cargill Party FI 2019 (WEB (68).jpg'
        ],
        "Internal events": [
            'images/Slide 1 - homepage/Internal events/Cargill 20 jarig jubileum (101).jpg',
            'images/Slide 1 - homepage/Internal events/Cargill 20 jarig jubileum (106).jpg',
            'images/Slide 1 - homepage/Internal events/Cargill Mechelen 12-01-2023 (72).JPG',
            'images/Slide 1 - homepage/Internal events/Cargill Mechelen 12-01-2023 (93).JPG'
        ],
        "Congress events": [
            'images/Slide 1 - homepage/Congress/FIBI Leadership Summit 2017 (120).jpg',
            'images/Slide 1 - homepage/Congress/20170829_081717.jpg',
            'images/Slide 1 - homepage/Congress/FIBI Leadership Summit 2017 (87).jpg',
            'images/Slide 1 - homepage/Congress/FIBI Leadership Summit 2017 (200).jpg',
            'images/Slide 1 - homepage/Congress/FIBI Leadership Summit 2017 (202).jpg',
            'images/Slide 1 - homepage/Congress/FIBI Leadership Summit 2017 (206).jpg'
        ],
        "Tradeshows": [
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (149).jpg',
            'https://github.com/SennaHVA1/EDficient/raw/refs/heads/main/images/Slide%201%20-%20homepage/Tradeshow/Project%20IBA-a/2025849.%20Event%20Dawn%20Foods%20Dusseldorf%2019-05-2025%20copy.mp4',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (54).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (95).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (97).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (107).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (119).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (138).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (139).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (157).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (158).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (255).jpg',
            'images/Slide 1 - homepage/Tradeshow/Project IBA-a/Dawn iba Dusseldorf 19-05-2025 (256).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Fi Europe 2023 (24).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Fi Europe 2023 (70).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Fi Europe 2023 (122).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill FiE 2022 (195).JPG',
            'images/Slide 1 - homepage/Tradeshow/Cargill FiE 2022 (198).JPG',
            'images/Slide 1 - homepage/Tradeshow/Cargill FiE 2022 (240).JPG',
            'images/Slide 1 - homepage/Tradeshow/Cargill FiE 2022 (326).JPG',
            'images/Slide 1 - homepage/Tradeshow/Cargill Frankfurt (41).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Frankfurt (75).jpg',
            'images/Slide 1 - homepage/Tradeshow/NR6-FIPARIS-STAND-04523.jpg',
            'images/Slide 1 - homepage/Tradeshow/NR6-FIPARIS-STAND-04550.jpg',
            'images/Slide 1 - homepage/Tradeshow/NR6-FIPARIS-STAND-04754.jpg',
            'images/Slide 1 - homepage/Tradeshow/NR6-FIPARIS-STAND-04924.jpg',
            'images/Slide 1 - homepage/Tradeshow/20171123_124642.jpg',
            'images/Slide 1 - homepage/Tradeshow/20171123_124734.jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Fi Europe 2023 (21).jpg',
            'images/Slide 1 - homepage/Tradeshow/Cargill Fi Europe 2023 (131).jpg'
        ],
        "Carefree Content": [
            'images/Slide 2 - behind the scenes/IMG-20210128-WA0001.jpg',
            'images/Slide 2 - behind the scenes/FIBI Leadership Summit 2017 (268).jpg',
            'images/Slide 2 - behind the scenes/20180908_122047.jpg',
            'https://github.com/SennaHVA1/EDficient/raw/main/images/Slide%202%20-%20behind%20the%20scenes/timelapse_720p.mp4'
        ]
    };

    var currentIndex = 0;
    var currentSet   = [];

    function isVideo(src) {
        return src && (src.endsWith('.mp4') || src.endsWith('.mov'));
    }

    function updateCounter() {
        counter.textContent = (currentIndex + 1) + ' / ' + currentSet.length;
        progress.style.width = (((currentIndex + 1) / currentSet.length) * 100) + '%';
    }

    function showMedia(src) {
        if (isVideo(src)) {
            modalImage.style.display = 'none';
            modalVideo.style.display = 'block';
            videoSource.src = src;
            modalVideo.volume = 0.2;
            modalVideo.load();
        } else {
            modalVideo.style.display = 'none';
            modalImage.style.display = 'block';
            modalImage.src = src;
        }
        updateCounter();
    }
    

    function navigate(dir) {
        var el = isVideo(currentSet[currentIndex]) ? modalVideo : modalImage;
        el.classList.add('fading');
        setTimeout(function () {
            currentIndex = (currentIndex + dir + currentSet.length) % currentSet.length;
            showMedia(currentSet[currentIndex]);
            el.classList.remove('fading');
        }, 200);
    }

    function openModal(altText) {
        if (!imageSets[altText]) return;
        currentSet   = imageSets[altText];
        currentIndex = 0;
        showMedia(currentSet[0]);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // refresh hint in current lang
        hint.textContent = (translations[currentLang] || translations.en)['modal-hint'];
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        if (modalVideo.pause) modalVideo.pause();
    }

    document.querySelectorAll(".gallery-item img").forEach(function (img) {
        img.addEventListener("click", function () { openModal(this.dataset.set || this.alt); });
    });

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
    });
    prevBtn.addEventListener("click", function () { navigate(-1); });
    nextBtn.addEventListener("click", function () { navigate(1); });

    document.addEventListener("keydown", function (e) {
        if (modal.style.display !== 'block') return;
        if (e.key === 'ArrowLeft')  navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
        if (e.key === 'Escape')     closeModal();
    });

}); // end DOMContentLoaded