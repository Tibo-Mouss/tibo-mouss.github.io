var french_translations = {
    "about_me": "À propos",
    "Resume": "CV",
    "Portfolio": "Portfolio",
    "Associations": "Associations",


    "engineer_software_dev": "Ingénieur en développement logiciel",
    "Location": "Lieu",
    "Age": "Age",
    "Gender": "Genre",
    "gender_value": "Homme",
    "credits_sadee": `Merci à <a href="https://github.com/codewithsadee" target="_blank">&nbsp; Sadee &nbsp;</a>
    pour le template`,

    //A PROPOS PAGE
    "about_me_description": `
        Salut ! <br> <br>
        Moi c'est Thibault, un ingénieur en développement logiciel 🙃`,
    "what_im_doing": "Ce que je fais",
    "associations_involvement": `J'ai été et je continue d'être activement impliqué dans un certain nombre d'associations.
        <br>
        Cela me permet d'acquérir de l'expérience dans de nombreux domaines différents.`,
    "Software_development": "Développement Logiciel",
    "Software_development_description": `C#, C++, python ... Je maîtrise plus de 20 language de programmation.
        <br> <br>
        Je peux facilement m'adapter à de nouveaux environnements de projet.`,
    "game_development": "Développement de jeux",
    "game_development_description": `J'ai appris et utilisé Unity,
        Unreal Engine & d'autres moteurs de jeu au travers de différents projets, uniquement par moi-même.`,
    "Content_creation": "Création de contenu",
    "Content_creation_description": `Je fais des vidéos, streams, podcasts,
        des choses qui me plaisent et que j'espère plairont à d'autres.`,


    //CV PAGE
    "Experience": "Expérience",
    "Software_developer_Sopra_Steria": "Développeur logiciel à Sopra Steria",
    "Permanent_Contract": "CDI",
    "Internship": "Stage",
    "dates_sopra_work": "Avril 2024 - Sept. 2023",
    "sopra_work_description": `
        • Site Web d'évaluation d'entreprises pour le GIFAS | Django <br>
        • App interne pour Airbus | Android <br>
        • Simulation d'une ligne de production de drone pour le Paris Air show 2023 | Omniverse<br>
        • Extension Jetbrains pour FauxPilot | Kotlin <br>
        <a data-nav-link="sopra_steria">
        &nbsp; > Cliquez ici pour voir les projets en détail < &nbsp; </a>`,
    "feezless_quality_assurance": "Assurance qualité chez Feezless",
    "dates_feezless_work": "2021 (3 mois)",
    "feezless_work_description": "J'ai cherché les bugs sur leur site.",

    "Education": "Education",
    "ENSEEIHT_school": "Ecole d'Ingénieur ENSEEIHT [Toulouse]",
    "n7_description": "Spécialité développement logiciel. Délégué de filière les 3 années",
    "janson_de_sailly": "Janson de Sailly - Classes préparatoires [ Paris ]",
    "janson_description": "Maths, Physique et Ingénierie",

    "SGN_resume_description": `
        <i>Administrateur de Compétition Nationale Esport, développeur d'outils de streaming
            et créateur de contenu. </i> <br> <br>
        Le SGN est la fédération des associations esport étudiantes françaises. <br>
        Nous organisons un certain nombre de tournois nationaux et promouvons activement
            l'esport étudiant. <br>`,
    "More_about_what_i_do": "Mes actions dans cette association",
    "Association_website": "Site de l'Asso",
    "tvn7_resume_rescription": `
        J'ai participé à l'écriture / réalisation / tournage / montage d'une centaine
        de clips pour des événements, des entreprises
        privées, l'école et les étudiants de mon école d'ingénieur à Toulouse. 
        <br> <br>
        TVn7 est l'une des plus grosses association vidéo étudiante de France.
        <br> <br>
        J'ai retransmis des événements en direct, réalisé des vidéos de récap
        d'événements, mais aussi des vidéos humoristiques.
        Voici un aperçu de quelques projets que j'ai réalisés :`,
    "net_entraide_resume_description": `
        <i>Trésorier en 2017.</i> <br> <br>
        Nous donnions des cours sur la technologie à des personnes âgées
        chaque samedi.
        <br>
        L'association a cessé d'exister en 2022.`,

    "Skills": "Compétences",
    "Programming": "Programmation",
    "Programming_description": `
        J'ai utilisé une vingtaine de langages de programmation (Python, C#, C++, Java, HTML, TypeScript, ...)
        au cours de mes études et projets personnels.
        <br>
        Ma préférence revient au C#`,
    "Game_Engines": "Moteurs de Jeux",
    "Game_Engines_description": `Apprentissage en autodidacte et
        préférence pour Unity. <br>
        J'ai entre autres suivi les cours de GameDevTV pour apprendre UE et ai
        commencé avec Pygames, Stencyl et Intersect Engine.`,
    "GameDev_TV_Certificates": " &nbsp; > Certifications GameDev TV  < ",
    "Android_Studio_description": `Étudié dans mon école d'Ingénieur, utilisé dans mes
        <a onclick="goToPage('sopra_steria')"> &nbsp; Projets à Sopra Steria </a>.`,
    "Content_Creation": "Création de Contenu",
    "Content_Creation_description" : `J'ai participé à l'écriture / réalisation /
        tournage / montage d'une centaine de clips (humourstiques, récaps, interviews ...)
        <b>[Premiere pro, After Effects]</b>
        <br>
        J'ai une chaîne Twitch depuis 2017.`,

    "Languages": "Langues",
    "French": "🇫🇷 &nbsp; Français",
    "French_level": " - Langue maternelle",
    "English": "🇬🇧 &nbsp; Anglais",
    "English_level": " - Courant",
    "Portuguese": "🇧🇷 &nbsp; Portugais",
    "Portuguese_level": " - B2 Expérimenté (2.5 années au Brésil)",
    "Spanish": "🇪🇸 &nbsp; Espagnol",
    "Spanish_level": " - B2 Expérimenté",
    "German": "🇩🇪 &nbsp; Allemand",
    "German_level": " - B1 Intermédiaire",
};

var translations = {
    "FR": french_translations
};

const trad_url_param = getQueryParam('lang');

if (trad_url_param) {
    if (Object.keys(translations).includes(trad_url_param)) {
        translate(trad_url_param);
    }
}


function translate(language) {
    const translationLinks = document.querySelectorAll("[trad]");

    for (let i = 0; i < translationLinks.length; i++) {
        translationLinks[i].innerHTML = translations[language][translationLinks[i].getAttribute("trad")];
    }
}

