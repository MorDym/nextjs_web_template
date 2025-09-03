# Webová šablona Nextjs



Tato šablona vznikla jako studijní projekt za účelem zlepšení se v oblasti webových technologií.  
Plánem je šablonu postupně rozvíjet a využít ji i jako ukázku při ucházení se o práci.

---

## Spuštení projektu

- Naklonovat repozitář
- V temrinálu následně
    - cd nextj_web_template
    - npm install
    - npm run dev
- Šablona následně poběží na localhost:3000/

Upozornění: Některé formuláře nebudou funkční z důvodu chybějících environment proměnných, které nejsou veřejně dostupné v repozitáři.

## Komponenty

Složka komponent obsahuje podsložku UI, která obsahuje drobnější prvky

#### Accordion
Komponenta pro vykreslení objektu, po kliknutí se rozroluje obsah.

Props:

- type AccordionProps
  - title: string;
  - content: string;
---

#### BasicContent
Komponenta vykreslí obsah

Props:
- type BasicContentProps
  - id: number
  - title: string
  - content?: string
  - img?: string
  - seznam?: SeznamItem[]

- type SeznamItem
  - id: number
  - name: string
  - content?: string
  ---

#### ContactCompontent
Základní komponenta pro vypsání kontaktů. Obsahuje switch, který hlídá a vykresluje typ kontaktu. V komponentě je importovaná komponenta Map a ContactType.

---

