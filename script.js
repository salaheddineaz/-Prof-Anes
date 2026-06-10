/* ═══════════════════════════════════════════
   script.js — Logique complète du site
═══════════════════════════════════════════ */

const PHONE = "213793259517";

/* ──────────────────────────────────────────
   TRADUCTIONS (FR / EN / AR)
────────────────────────────────────────── */
const translations = {
  /* ══ FRANÇAIS ══ */
  fr: {
    nav_about: "À propos",
    nav_courses: "Cours",
    nav_planning: "Planning",
    nav_pricing: "Tarifs",
    nav_reviews: "Témoignages",
    nav_contact: "Nous contacter",

    hero_badge: "Cours Particuliers – Tipazza, Hadjout",
    hero_title: "Excellence en<br><span>Mathématiques,</span><br>Électricité",
    hero_sub:
      "Accompagnement personnalisé pour les élèves de 4ème CEM, 1ère, 2ème et 3ème année lycée — toutes spécialités. Soutien spécialisé en électricité pour génie électricité.",
    hero_btn1: "Réserver un cours",
    hero_btn2: "Voir les programmes",

    stat1: "Années d'exp.",
    stat2: "Élèves suivis",
    stat3: "Taux de réussite",

    photo_placeholder: "Photo du professeur",
    about_badge_label: "ans d'expérience",
    about_label: "À propos",
    about_p1:
      "Enseignant passionné et dévoué, je propose des cours particuliers de mathématiques et d'électricité adaptés aux besoins individuels de chaque élève. Mon objectif est d'accompagner chaque étudiant vers la réussite scolaire.",
    about_p2:
      "Ma méthode est basée sur la compréhension profonde des concepts, des exercices ciblés et un suivi régulier pour mesurer les progrès. Chaque séance est préparée spécifiquement pour combler les lacunes de l'élève.",

    about_item1_title: "Mathématiques",
    about_item1_sub: "4ème CEM · Lycée toutes spécialités",
    about_item2_title: "Électricité",
    about_item2_sub: "2ème & 3ème lycée – Génie électricité",
    about_item3_title: "Cours à domicile",
    about_item3_sub: "Déplacement sur Oran",
    about_item4_title: "Cours en ligne",
    about_item4_sub: "Via Zoom / WhatsApp",

    courses_label: "Programmes",
    courses_title: "Cours Proposés",

    c1_title: "Mathématiques – CEM",
    c1_sub: "Collège (Moyen)",
    c1_level: "4ème AM",
    c1_desc:
      "Algèbre, géométrie, statistiques et probabilités. Préparation au BEM. Révisions complètes et entraînements aux examens.",

    c2_title: "Mathématiques – Lycée",
    c2_sub: "Toutes spécialités",
    c2_l1: "1ère Année",
    c2_l2: "2ème Année",
    c2_l3: "3ème Année",
    c2_desc:
      "Toutes filières : <strong>Sciences, Lettres, Technique, Gestion, Langues étrangères.</strong> Fonctions, analyse, suites, probabilités, géométrie dans l'espace. Préparation au BAC.",

    c3_title: "Électricité – Lycée",
    c3_sub: "Génie Électricité",
    c3_l1: "2ème Année",
    c3_l2: "3ème Année",
    c3_desc:
      "Spécialité <strong>Génie Électricité</strong>. Circuits électriques, électronique, électrotechnique, machines électriques. Préparation au BAC technique.",

    planning_label: "Organisation",
    planning_title: "Planning Hebdomadaire",
    legend_math: "Mathématiques",
    legend_elec: "Électricité",
    plan_day: "Jour",
    plan_morning: "Matin\n9h – 12h",
    plan_afternoon: "Après-midi\n14h – 17h",
    plan_evening: "Soir\n18h – 21h",
    days: [
      "Samedi",
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
    ],

    pricing_label: "Investissement",
    pricing_title: "Tarifs des Cours",

    t1_type: "Cours individuel",
    t1_unit: "DA / séance",
    t1_desc: "Séance de 1h30 en tête-à-tête",
    t1_items: [
      "1h30 par séance",
      "Programme personnalisé",
      "Exercices corrigés fournis",
      "Suivi des progrès",
    ],

    t2_badge: "Recommandé",
    t2_type: "Forfait mensuel",
    t2_unit: "DA / mois",
    t2_desc: "4 séances par mois",
    t2_items: [
      "4 séances × 1h30",
      "Fiches de révision offertes",
      "Suivi WhatsApp inclus",
      "Bilan mensuel des progrès",
    ],

    t3_type: "Petit groupe",
    t3_unit: "DA / pers.",
    t3_desc: "Groupes de 2 à 3 élèves",
    t3_items: [
      "2h par séance",
      "Ambiance collaborative",
      "Tarif réduit",
      "2 à 3 élèves max",
    ],

    reviews_label: "Avis",
    reviews_title: "Ce que disent les élèves",
    r1_text:
      "« Grâce aux cours du professeur Anes, j'ai réussi mon BAC avec mention ! Il explique avec une patience remarquable et sait toujours comment simplifier les notions complexes. »",
    r1_level: "3ème Lycée – Sciences",
    r2_text:
      "« Mon fils avait de grosses difficultés en électricité. Après 3 mois de cours particuliers, sa moyenne est passée de 6 à 15. Un professeur exceptionnel, très professionnel. »",
    r2_level: "2ème Lycée – Génie Électricité",
    r3_text:
      "« J'étais complètement perdu en maths avant de le rencontrer. Il adapte son enseignement à mon rythme et prend le temps de vérifier que j'ai tout compris avant de continuer. »",
    r3_level: "4ème AM",

    gallery_label: "Photos",
    gallery_title: "Galerie",
    gallery_add: "Ajoutez une photo",
    gallery_view: "Voir la photo",

    contact_label: "Inscription",
    contact_title: "Nous Contacter",
    contact_intro:
      "Prenez contact pour réserver une première séance d'évaluation gratuite. Je vous répondrai dans les plus brefs délais.",
    ci_phone_label: "Téléphone / WhatsApp",
    ci_addr_label: "Adresse",
    ci_addr_value:
      "Tipazza, Hadjout<br><span style='font-size:0.85rem;opacity:0.6;'>adresse bla bla bla...</span>",
    ci_online_label: "Cours en ligne",
    ci_online_value:
      "Google meet <br><span style='font-size:0.85rem;opacity:0.6;'>Contacter moi sur WhatsApp</span>",

    form_title: "Demande de cours",
    form_name: "Nom complet",
    form_name_ph: "Ex : AZZOUZI Salah",
    form_phone: "Numéro de téléphone",
    form_level: "Niveau scolaire",
    form_level_ph: "Choisir un niveau",
    lvl1: "4ème AM (CEM)",
    lvl2: "1ère Année Lycée",
    lvl3: "2ème Année Lycée",
    lvl4: "3ème Année Lycée",
    form_subject: "Matière",
    form_subject_ph: "Choisir une matière",
    subj1: "Mathématiques",
    subj2: "Électricité (Génie Électricité)",
    subj3: "Mathématiques + Électricité",
    form_msg: "Message (optionnel)",
    form_msg_ph:
      "Décrivez les difficultés ou besoins particuliers de l'élève...",
    form_send: "Envoyer la demande →",
    form_sent: "✓ Demande envoyée !",

    err_name: "Veuillez entrer votre nom.",
    err_phone: "Veuillez entrer votre numéro de téléphone.",
    wa_tooltip: "Écrire sur WhatsApp",
    wa_msg_hello: "Bonjour Prof. Anes, je souhaite réserver un cours.",
    wa_msg_name: "Nom",
    wa_msg_phone: "Téléphone",
    wa_msg_level: "Niveau",
    wa_msg_subject: "Matière",
    wa_msg_note: "Message",

    footer_sub: "Cours Particuliers",
    footer_info:
      "Mathématiques & Électricité · Tipazza, Hadjout · 07 93 25 95 17",
  },

  /* ══ ENGLISH ══ */
  en: {
    nav_about: "About",
    nav_courses: "Courses",
    nav_planning: "Schedule",
    nav_pricing: "Pricing",
    nav_reviews: "Reviews",
    nav_contact: "Contact us",

    hero_badge: "Private Tutoring – Tipazza",
    hero_title: "Excellence in<br><span>Mathematics,</span><br>Electricity",
    hero_sub:
      "Personalized support for students in 4th CEM, 1st, 2nd and 3rd year high school — all specialties. Specialized electricity coaching for electrical engineering students.",
    hero_btn1: "Book a lesson",
    hero_btn2: "View programs",

    stat1: "Years of exp.",
    stat2: "Students taught",
    stat3: "Success rate",

    photo_placeholder: "Teacher photo",
    about_badge_label: "years of experience",
    about_label: "About",
    about_p1:
      "A passionate and dedicated teacher, I offer private tutoring in mathematics and electricity tailored to each student's individual needs. My goal is to guide every student toward academic success.",
    about_p2:
      "My method is based on deep understanding of concepts, targeted exercises and regular progress tracking. Each session is specifically prepared to address the student's gaps.",

    about_item1_title: "Mathematics",
    about_item1_sub: "4th CEM · High school all specialties",
    about_item2_title: "Electricity",
    about_item2_sub: "2nd & 3rd year – Electrical engineering",
    about_item3_title: "Home tutoring",
    about_item3_sub: "Available across Oran",
    about_item4_title: "Online lessons",
    about_item4_sub: "Via Zoom / WhatsApp",

    courses_label: "Programs",
    courses_title: "Available Courses",

    c1_title: "Mathematics – CEM",
    c1_sub: "Middle school",
    c1_level: "4th Year",
    c1_desc:
      "Algebra, geometry, statistics and probability. BEM exam preparation. Full revision sessions and practice tests.",

    c2_title: "Mathematics – High school",
    c2_sub: "All specialties",
    c2_l1: "1st Year",
    c2_l2: "2nd Year",
    c2_l3: "3rd Year",
    c2_desc:
      "All streams: <strong>Sciences, Arts, Technical, Management, Languages.</strong> Functions, analysis, sequences, probability, 3D geometry. BAC preparation.",

    c3_title: "Electricity – High school",
    c3_sub: "Electrical Engineering",
    c3_l1: "2nd Year",
    c3_l2: "3rd Year",
    c3_desc:
      "Specialty: <strong>Electrical Engineering</strong>. Electric circuits, electronics, electrotechnics, electric machines. Technical BAC preparation.",

    planning_label: "Organization",
    planning_title: "Weekly Schedule",
    legend_math: "Mathematics",
    legend_elec: "Electricity",
    plan_day: "Day",
    plan_morning: "Morning\n9am – 12pm",
    plan_afternoon: "Afternoon\n2pm – 5pm",
    plan_evening: "Evening\n6pm – 9pm",
    days: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],

    pricing_label: "Investment",
    pricing_title: "Course Pricing",

    t1_type: "Individual lesson",
    t1_unit: "DA / session",
    t1_desc: "1.5-hour one-on-one session",
    t1_items: [
      "1.5h per session",
      "Personalized program",
      "Corrected exercises provided",
      "Progress tracking",
    ],

    t2_badge: "Recommended",
    t2_type: "Monthly package",
    t2_unit: "DA / month",
    t2_desc: "4 sessions per month",
    t2_items: [
      "4 sessions × 1.5h",
      "Revision sheets included",
      "WhatsApp follow-up included",
      "Monthly progress report",
    ],

    t3_type: "Small group",
    t3_unit: "DA / person",
    t3_desc: "Groups of 2 to 3 students",
    t3_items: [
      "2h per session",
      "Collaborative atmosphere",
      "Reduced rate",
      "2 to 3 students max",
    ],

    reviews_label: "Reviews",
    reviews_title: "What students say",
    r1_text:
      '"Thanks to Professor Anes\'s lessons, I passed my BAC with distinction! He explains with remarkable patience and always knows how to simplify complex concepts."',
    r1_level: "3rd Year High school – Sciences",
    r2_text:
      '"My son had major difficulties in electricity. After 3 months of private lessons, his grade went from 6 to 15. An exceptional, very professional teacher."',
    r2_level: "2nd Year High school – Electrical Engineering",
    r3_text:
      '"I was completely lost in maths before meeting him. He adapts his teaching to my pace and takes the time to make sure I\'ve understood everything before moving on."',
    r3_level: "4th Year CEM",

    gallery_label: "Photos",
    gallery_title: "Gallery",
    gallery_add: "Add a photo",
    gallery_view: "View photo",

    contact_label: "Registration",
    contact_title: "Contact Us",
    contact_intro:
      "Get in touch to book a free first assessment session. I will get back to you as soon as possible.",
    ci_phone_label: "Phone / WhatsApp",
    ci_addr_label: "Address",
    ci_addr_value:
      "Hadjout, Tipazza<br><span style='font-size:0.85rem;opacity:0.6;'>address.....</span>",
    ci_online_label: "Online lessons",
    ci_online_value:
      "Google Meet<br><span style='font-size:0.85rem;opacity:0.6;'>Send dm on WhatsApp</span>",

    form_title: "Course request",
    form_name: "Full name",
    form_name_ph: "Ex: Karima Bensalem",
    form_phone: "Phone number",
    form_level: "School level",
    form_level_ph: "Choose a level",
    lvl1: "4th Year CEM",
    lvl2: "1st Year High school",
    lvl3: "2nd Year High school",
    lvl4: "3rd Year High school",
    form_subject: "Subject",
    form_subject_ph: "Choose a subject",
    subj1: "Mathematics",
    subj2: "Electricity (Electrical Engineering)",
    subj3: "Mathematics + Electricity",
    form_msg: "Message (optional)",
    form_msg_ph: "Describe the student's difficulties or specific needs...",
    form_send: "Send request →",
    form_sent: "✓ Request sent!",

    err_name: "Please enter your name.",
    err_phone: "Please enter your phone number.",
    wa_tooltip: "Chat on WhatsApp",
    wa_msg_hello: "Hello Prof. Anes, I'd like to book a lesson.",
    wa_msg_name: "Name",
    wa_msg_phone: "Phone",
    wa_msg_level: "Level",
    wa_msg_subject: "Subject",
    wa_msg_note: "Message",

    footer_sub: "Private Tutoring",
    footer_info:
      "Mathematics & Electricity · Hadjout, Tipazza · 07 93 25 95 17",
  },

  /* ══ ARABIC ══ */
  ar: {
    nav_about: "حول",
    nav_courses: "الدروس",
    nav_planning: "الجدول",
    nav_pricing: "الأسعار",
    nav_reviews: "آراء",
    nav_contact: "تواصل معنا",

    hero_badge: "دروس خصوصية – وهران",
    hero_title: "التميّز في<br><span>الرياضيات</span><br>والكهرباء",
    hero_sub:
      "مرافقة فردية لتلاميذ السنة الرابعة متوسط والسنوات الأولى والثانية والثالثة ثانوي — جميع الشعب. دعم متخصص في الكهرباء لشعبة الهندسة الكهربائية.",
    hero_btn1: "احجز درساً",
    hero_btn2: "عرض البرامج",

    stat1: "سنوات خبرة",
    stat2: "تلميذ تم متابعتهم",
    stat3: "نسبة النجاح",

    photo_placeholder: "صورة الأستاذ",
    about_badge_label: "سنوات خبرة",
    about_label: "حول الأستاذ",
    about_p1:
      "أستاذ متحمس ومخلص، أقدم دروساً خصوصية في الرياضيات والكهرباء مكيّفة مع الاحتياجات الفردية لكل تلميذ. هدفي هو مرافقة كل طالب نحو النجاح الدراسي.",
    about_p2:
      "تعتمد طريقتي على الفهم العميق للمفاهيم وتمارين موجّهة ومتابعة منتظمة لقياس التقدم. تُعدّ كل حصة خصيصاً لسد الثغرات لدى الطالب.",

    about_item1_title: "الرياضيات",
    about_item1_sub: "السنة الرابعة متوسط · الثانوي جميع الشعب",
    about_item2_title: "الكهرباء",
    about_item2_sub: "السنة 2 و3 ثانوي – هندسة كهربائية",
    about_item3_title: "دروس في المنزل",
    about_item3_sub: "التنقل في وهران",
    about_item4_title: "دروس إلكترونية",
    about_item4_sub: "عبر Zoom / WhatsApp",

    courses_label: "البرامج",
    courses_title: "الدروس المقدَّمة",

    c1_title: "الرياضيات – متوسط",
    c1_sub: "التعليم المتوسط",
    c1_level: "السنة الرابعة",
    c1_desc:
      "الجبر والهندسة والإحصاء والاحتمالات. التحضير لشهادة التعليم المتوسط. مراجعات شاملة وتدريبات على الامتحانات.",

    c2_title: "الرياضيات – ثانوي",
    c2_sub: "جميع الشعب",
    c2_l1: "السنة الأولى",
    c2_l2: "السنة الثانية",
    c2_l3: "السنة الثالثة",
    c2_desc:
      "جميع الشعب: <strong>العلوم، الآداب، التقني، التسيير، اللغات الأجنبية.</strong> الدوال، التحليل، المتتاليات، الاحتمالات، هندسة الفضاء. التحضير للبكالوريا.",

    c3_title: "الكهرباء – ثانوي",
    c3_sub: "هندسة كهربائية",
    c3_l1: "السنة الثانية",
    c3_l2: "السنة الثالثة",
    c3_desc:
      "تخصص <strong>الهندسة الكهربائية</strong>. الدوائر الكهربائية، الإلكترونيات، الكهروتقنية، الآلات الكهربائية. التحضير لبكالوريا التقني.",

    planning_label: "التنظيم",
    planning_title: "الجدول الأسبوعي",
    legend_math: "الرياضيات",
    legend_elec: "الكهرباء",
    plan_day: "اليوم",
    plan_morning: "الصباح\n9ص – 12م",
    plan_afternoon: "بعد الظهر\n2م – 5م",
    plan_evening: "المساء\n6م – 9م",
    days: [
      "السبت",
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
    ],

    pricing_label: "الاستثمار",
    pricing_title: "أسعار الدروس",

    t1_type: "درس فردي",
    t1_unit: "دج / حصة",
    t1_desc: "حصة 1س30 وجهاً لوجه",
    t1_items: [
      "1س30 لكل حصة",
      "برنامج شخصي",
      "تمارين مصحّحة مرفقة",
      "متابعة التقدم",
    ],

    t2_badge: "موصى به",
    t2_type: "اشتراك شهري",
    t2_unit: "دج / شهر",
    t2_desc: "4 حصص في الشهر",
    t2_items: [
      "4 حصص × 1س30",
      "بطاقات المراجعة مجانية",
      "متابعة عبر WhatsApp",
      "تقرير تقدم شهري",
    ],

    t3_type: "مجموعة صغيرة",
    t3_unit: "دج / شخص",
    t3_desc: "مجموعات من 2 إلى 3 طلاب",
    t3_items: [
      "ساعتان في الحصة",
      "جو تعاوني",
      "سعر مخفض",
      "2 إلى 3 طلاب كحد أقصى",
    ],

    reviews_label: "الآراء",
    reviews_title: "ماذا يقول التلاميذ",
    r1_text:
      "«بفضل دروس الأستاذ بنعلي، نجحت في البكالوريا بميزة! يشرح بصبر رائع ويعرف دائماً كيف يُبسّط المفاهيم المعقدة.»",
    r1_level: "السنة الثالثة ثانوي – علوم",
    r2_text:
      "«كان ابني يعاني من صعوبات جمّة في الكهرباء. بعد 3 أشهر من الدروس الخصوصية، ارتفع معدله من 6 إلى 15. أستاذ استثنائي واحترافي.»",
    r2_level: "السنة الثانية ثانوي – هندسة كهربائية",
    r3_text:
      "«كنت ضائعاً تماماً في الرياضيات قبل أن أتعرف عليه. يكيّف طريقة تدريسه مع إيقاعي ويتأكد دائماً من فهمي قبل المتابعة.»",
    r3_level: "السنة الرابعة متوسط",

    gallery_label: "الصور",
    gallery_title: "معرض الصور",
    gallery_add: "أضف صورة",
    gallery_view: "عرض الصورة",

    contact_label: "التسجيل",
    contact_title: "تواصل معنا",
    contact_intro:
      "تواصل معنا لحجز حصة تقييم أولى مجانية. سأرد عليك في أقرب وقت ممكن.",
    ci_phone_label: "هاتف / واتساب",
    ci_addr_label: "العنوان",
    ci_addr_value:
      "تيبازة, الحجوط<br><span style='font-size:0.85rem;opacity:0.6;'> العنوان</span>",
    ci_online_label: "دروس عبر الإنترنت",
    ci_online_value:
      "Zoom · WhatsApp<br><span style='font-size:0.85rem;opacity:0.6;'>للطلب ابعث رسالة في WhatsApp</span>",

    form_title: "طلب دروس",
    form_name: "الاسم الكامل",
    form_name_ph: "مثال: كريمة بن سالم",
    form_phone: "رقم الهاتف",
    form_level: "المستوى الدراسي",
    form_level_ph: "اختر المستوى",
    lvl1: "السنة الرابعة متوسط",
    lvl2: "السنة الأولى ثانوي",
    lvl3: "السنة الثانية ثانوي",
    lvl4: "السنة الثالثة ثانوي",
    form_subject: "المادة",
    form_subject_ph: "اختر المادة",
    subj1: "الرياضيات",
    subj2: "الكهرباء (هندسة كهربائية)",
    subj3: "الرياضيات + الكهرباء",
    form_msg: "رسالة (اختياري)",
    form_msg_ph: "صف صعوبات التلميذ أو احتياجاته الخاصة...",
    form_send: "إرسال الطلب ←",
    form_sent: "✓ تم إرسال الطلب!",

    err_name: "يرجى إدخال اسمك.",
    err_phone: "يرجى إدخال رقم هاتفك.",
    wa_tooltip: "تواصل عبر واتساب",
    wa_msg_hello: "مرحباً أستاذ بن علي، أودّ حجز درس.",
    wa_msg_name: "الاسم",
    wa_msg_phone: "الهاتف",
    wa_msg_level: "المستوى",
    wa_msg_subject: "المادة",
    wa_msg_note: "ملاحظة",

    footer_sub: "دروس خصوصية",
    footer_info: "الرياضيات والكهرباء · تيبازة، الحجوط · 07 93 25 95 17",
  },
};

/* ──────────────────────────────────────────
   PLANNING — Créneaux (FR / EN / AR)
────────────────────────────────────────── */
const planningSlots = [
  /* Samedi */
  ["slot-math", "Math 4ème AM", "Math 4th Year", "رياضيات س4 م"],
  ["slot-math", "Math 1ère Lycée", "Math 1st Year", "رياضيات س1 ث"],
  ["slot-elec", "Élec. 2ème", "Elec. 2nd Year", "كهرباء س2"],
  /* Dimanche */
  ["slot-math", "Math 2ème Lycée", "Math 2nd Year", "رياضيات س2 ث"],
  ["slot-elec", "Élec. 3ème", "Elec. 3rd Year", "كهرباء س3"],
  ["slot-math", "Math 3ème Lycée", "Math 3rd Year", "رياضيات س3 ث"],
  /* Lundi */
  [null, "—", "—", "—"],
  ["slot-math", "Math 4ème AM", "Math 4th Year", "رياضيات س4 م"],
  ["slot-math", "Math 1ère Lycée", "Math 1st Year", "رياضيات س1 ث"],
  /* Mardi */
  [null, "—", "—", "—"],
  ["slot-elec", "Élec. 2ème", "Elec. 2nd Year", "كهرباء س2"],
  ["slot-math", "Math 2ème Lycée", "Math 2nd Year", "رياضيات س2 ث"],
  /* Mercredi */
  ["slot-math", "Math 3ème Lycée", "Math 3rd Year", "رياضيات س3 ث"],
  ["slot-elec", "Élec. 3ème", "Elec. 3rd Year", "كهرباء س3"],
  ["slot-math", "Math BAC", "Math BAC", "رياضيات بكالوريا"],
  /* Jeudi */
  [null, "—", "—", "—"],
  ["slot-math", "Math 4ème AM", "Math 4th Year", "رياضيات س4 م"],
  ["slot-elec", "Électricité", "Electricity", "كهرباء"],
  /* Vendredi */
  [null, "—", "—", "—"],
  [null, "—", "—", "—"],
  [null, "—", "—", "—"],
];

/* ──────────────────────────────────────────
   ÉTAT
────────────────────────────────────────── */
let currentLang = "fr";

/* ──────────────────────────────────────────
   FONCTIONS UTILITAIRES
────────────────────────────────────────── */

/** Rend une cellule du planning */
function renderSlot(cls, fr, en, ar, lang) {
  const text = lang === "fr" ? fr : lang === "en" ? en : ar;
  if (!cls) return `<span class="slot-free">${text}</span>`;
  return `<span class="slot ${cls}">${text}</span>`;
}

/** Reconstruit le tableau du planning */
function buildPlanning(lang) {
  const t = translations[lang];
  const tbody = document.getElementById("planning-body");
  if (!tbody) return;
  const s = planningSlots;
  let html = "";
  t.days.forEach((day, i) => {
    const base = i * 3;
    html += `<tr>
      <td>${day}</td>
      <td>${renderSlot(s[base][0], s[base][1], s[base][2], s[base][3], lang)}</td>
      <td>${renderSlot(s[base + 1][0], s[base + 1][1], s[base + 1][2], s[base + 1][3], lang)}</td>
      <td>${renderSlot(s[base + 2][0], s[base + 2][1], s[base + 2][2], s[base + 2][3], lang)}</td>
    </tr>`;
  });
  tbody.innerHTML = html;
}

/** Reconstruit une liste de tarifs */
function buildPricingList(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items
    .map((i) => `<li><span class="check-icon">✓</span>${i}</li>`)
    .join("");
}

/* ──────────────────────────────────────────
   CHANGEMENT DE LANGUE
────────────────────────────────────────── */
function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  const isRTL = lang === "ar";

  /* Direction + langue HTML */
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";

  /* Boutons actifs */
  document.querySelectorAll(".lang-btn").forEach((b) => {
    const map = { fr: "FR", en: "EN", ar: "ع" };
    b.classList.toggle("active", b.textContent.trim() === map[lang]);
  });

  /* Textes simples */
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* Textes HTML (balises internes) */
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Placeholders */
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Options des <select> */
  ["sel-level", "sel-subject"].forEach((id) => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.querySelectorAll("option[data-i18n]").forEach((opt) => {
      const key = opt.dataset.i18n;
      if (t[key]) opt.textContent = t[key];
    });
  });

  /* Sections dynamiques */
  buildPlanning(lang);
  buildPricingList("t1-list", t.t1_items);
  buildPricingList("t2-list", t.t2_items);
  buildPricingList("t3-list", t.t3_items);

  /* Titre de l'onglet */
  const titles = {
    fr: "Prof. Anes HABBOUCHE – Cours Particuliers",
    en: "Prof. Anes HABBOUCHE – Private Tutoring",
    ar: "أ. حبوش أنس – دروس خصوصية",
  };
  document.title = titles[lang];

  /* Liens WhatsApp */
  const waUrl = `https://wa.me/${PHONE}`;
  const waBtn = document.getElementById("wa-float-btn");
  const waInline = document.getElementById("wa-inline-link");
  const waTip = document.getElementById("wa-tooltip-text");
  if (waBtn) waBtn.href = waUrl;
  if (waInline) waInline.href = waUrl;
  if (waTip) waTip.textContent = t.wa_tooltip;

  /* Lien téléphone */
  const telLink = document.getElementById("tel-link");
  if (telLink) telLink.href = `tel:+${PHONE}`;
}

/* ──────────────────────────────────────────
   FORMULAIRE — VALIDATION + WHATSAPP
────────────────────────────────────────── */

function clearErrors() {
  ["fg-name", "fg-phone"].forEach((id) => {
    const fg = document.getElementById(id);
    if (fg) fg.classList.remove("has-error");
  });
}

function showError(fgId, errId, msg) {
  const fg = document.getElementById(fgId);
  const err = document.getElementById(errId);
  if (fg) fg.classList.add("has-error");
  if (err) err.textContent = msg;
}

function handleSubmit() {
  const t = translations[currentLang];
  clearErrors();

  const name = (document.getElementById("inp-name")?.value || "").trim();
  const phone = (document.getElementById("inp-phone")?.value || "").trim();
  const level = document.getElementById("sel-level");
  const subject = document.getElementById("sel-subject");
  const msg = (document.getElementById("inp-msg")?.value || "").trim();

  /* Validation */
  let valid = true;
  if (!name) {
    showError("fg-name", "err-name", t.err_name);
    valid = false;
  }
  if (!phone) {
    showError("fg-phone", "err-phone", t.err_phone);
    valid = false;
  }
  if (!valid) return;

  /* Construction du message WhatsApp */
  const levelVal =
    level?.selectedIndex > 0 ? level.options[level.selectedIndex].text : "";
  const subjectVal =
    subject?.selectedIndex > 0
      ? subject.options[subject.selectedIndex].text
      : "";

  let text = `${t.wa_msg_hello}\n\n`;
  text += `*${t.wa_msg_name}:* ${name}\n`;
  text += `*${t.wa_msg_phone}:* ${phone}\n`;
  if (levelVal) text += `*${t.wa_msg_level}:* ${levelVal}\n`;
  if (subjectVal) text += `*${t.wa_msg_subject}:* ${subjectVal}\n`;
  if (msg) text += `*${t.wa_msg_note}:* ${msg}`;

  window.open(
    `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`,
    "_blank",
  );

  /* Feedback visuel */
  const btn = document.querySelector(".btn-submit");
  if (!btn) return;
  btn.textContent = t.form_sent;
  btn.style.background = "#4caf82";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = t.form_send;
    btn.style.background = "";
    btn.disabled = false;
  }, 4000);
}

/* ──────────────────────────────────────────
   SCROLL — LIEN ACTIF DANS LA NAVBAR
────────────────────────────────────────── */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.style.color =
      a.getAttribute("href") === "#" + current ? "var(--gold)" : "";
  });
});

/* ──────────────────────────────────────────
   ANIMATION FADE-IN (Intersection Observer)
────────────────────────────────────────── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

/* ──────────────────────────────────────────
   INITIALISATION
────────────────────────────────────────── */
setLang("fr");
