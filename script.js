/*
  CSCI 4410 Interactive Study Guide
  WHY this file exists:
  - index.html provides structure, but learning content and interactivity live here.
  - Keeping behavior in one JS file makes the site run by double-clicking index.html with no build tools.
  - Data is centralized at the top so content updates are easy for beginners.
*/

"use strict";

// ===== Checkpoint: Data Layer =====
// After this section, all course topics/questions are defined in one place.

const chapters = [
  {
    id: "ch1",
    title: "Chapter 1: Internet Basics",
    topics: [
      {
        id: "tcp-ip",
        term: "TCP/IP",
        definition: "TCP/IP is a set of communication rules that computers use to send data across networks.",
        why: "Without shared rules, devices would send data in incompatible ways and the internet would not work reliably.",
        analogy: "Think of it like a postal system: one part addresses the package (IP), another part ensures delivery and order (TCP).",
        example: "Browser asks a server for a webpage, and TCP/IP handles the path and delivery.",
        mistake: "Incorrect: 'TCP and IP are the same thing.'",
        fix: "Correct: IP handles addressing/routing, TCP handles reliable transport.",
        selfCheck: "What does IP mainly do: styling pages or addressing devices?",
        selfAnswer: "Addressing devices.",
        code: "// TCP/IP concept\n// IP: where to send\n// TCP: how to deliver reliably"
      },
      {
        id: "ipv4-vs-ipv6",
        term: "IPv4 vs IPv6",
        definition: "IPv4 and IPv6 are versions of Internet Protocol addresses. IPv4 is older and shorter; IPv6 is newer and much larger.",
        why: "IPv4 address space is limited, so IPv6 was created to provide many more unique addresses.",
        analogy: "IPv4 is like a small apartment complex with limited mailboxes; IPv6 is a massive city with huge mailbox capacity.",
        example: "IPv4: 192.168.0.10 | IPv6: 2001:0db8:85a3::8a2e:0370:7334",
        mistake: "Incorrect: 'IPv6 is faster in all cases by default.'",
        fix: "Correct: IPv6 mainly solves address exhaustion; speed depends on many factors.",
        selfCheck: "Which version was made to solve address shortage?",
        selfAnswer: "IPv6.",
        code: "// Address examples\nconst v4 = '192.168.1.1';\nconst v6 = '2001:db8::1';"
      },
      {
        id: "www",
        term: "World Wide Web (WWW)",
        definition: "The WWW is a system of linked web pages and resources accessed over the internet.",
        why: "It gives a user-friendly way to access information using hyperlinks instead of raw network commands.",
        analogy: "The internet is the road system; the web is the collection of stores/buildings you visit on those roads.",
        example: "Clicking a link from one webpage to another is WWW in action.",
        mistake: "Incorrect: 'Internet and WWW are exactly the same.'",
        fix: "Correct: The web is a service that runs on top of the internet.",
        selfCheck: "Is email part of WWW specifically, or a separate internet service?",
        selfAnswer: "A separate internet service.",
        code: "<a href='https://example.com'>Visit page</a>"
      },
      {
        id: "http",
        term: "HTTP",
        definition: "HTTP is a protocol for requesting and delivering web resources between client and server.",
        why: "Browsers and servers need a common request/response language to exchange web content.",
        analogy: "It is like ordering food: you send an order (request), restaurant sends food/status (response).",
        example: "GET /index.html sends a request for a page, server responds with content.",
        mistake: "Incorrect: 'HTTP stores pages permanently in browser.'",
        fix: "Correct: HTTP transfers resources; storage is handled by browser cache/local storage mechanisms.",
        selfCheck: "What does HTTP stand for?",
        selfAnswer: "HyperText Transfer Protocol.",
        code: "GET /api/users HTTP/1.1\nHost: example.com"
      }
    ]
  },
  {
    id: "ch2",
    title: "Chapter 2: HTML Basics",
    topics: [
      {
        id: "what-is-html",
        term: "What HTML Is",
        definition: "HTML is the language used to structure content on web pages.",
        why: "Browsers need structure to know what is a heading, paragraph, list, form, and more.",
        analogy: "HTML is the skeleton of a webpage; it gives shape before style and behavior are added.",
        example: "A heading and paragraph define basic content structure.",
        mistake: "Incorrect: 'HTML controls animations and app logic.'",
        fix: "Correct: HTML structures content; CSS styles it; JavaScript adds behavior.",
        selfCheck: "Which language mainly structures a webpage?",
        selfAnswer: "HTML.",
        code: "<h1>Welcome</h1>\n<p>This is a paragraph.</p>"
      },
      {
        id: "tags-elements-attributes",
        term: "Tags, Elements, Attributes",
        definition: "Tags define markup, elements are complete units, and attributes provide extra information.",
        why: "Attributes make elements flexible, such as links with destinations or images with alt text.",
        analogy: "Element is a gift box, tags are the wrapper edges, attributes are labels on the box.",
        example: "<a href='https://example.com'>Link</a> where href is an attribute.",
        mistake: "Incorrect: '<p class>' (missing value).",
        fix: "Correct: '<p class=\"intro\">Hello</p>'." ,
        selfCheck: "In <img src='a.png' alt='A'>, what is src?",
        selfAnswer: "An attribute.",
        code: "<img src='cat.jpg' alt='A cat'>"
      },
      {
        id: "core-text-and-links",
        term: "Headings, Paragraphs, Links",
        definition: "Headings organize content, paragraphs hold text, and links connect pages/resources.",
        why: "Clear structure helps both users and search engines understand content.",
        analogy: "Headings are chapter titles, paragraphs are body text, links are references to other pages.",
        example: "Use <h1> for main title, <p> for text, <a> for navigation.",
        mistake: "Incorrect: Using many <h1> tags as random style text.",
        fix: "Correct: Use heading levels to reflect document structure.",
        selfCheck: "Which tag creates a hyperlink?",
        selfAnswer: "<a>",
        code: "<h2>Section</h2>\n<p>Read more <a href='about.html'>here</a>.</p>"
      },
      {
        id: "images-lists-tables",
        term: "Images, Lists, Tables",
        definition: "Images show visuals, lists group items, and tables organize data in rows/columns.",
        why: "Different content types need semantic structures for readability and accessibility.",
        analogy: "Lists are bullet notes, tables are spreadsheets, images are illustrations.",
        example: "Use <ul> for bullets and <table> for tabular data.",
        mistake: "Incorrect: Using tables for page layout.",
        fix: "Correct: Use CSS layout for layout; tables only for real table data.",
        selfCheck: "Which list tag is ordered numbers?",
        selfAnswer: "<ol>",
        code: "<ul><li>Apple</li><li>Banana</li></ul>"
      },
      {
        id: "forms-and-comments",
        term: "Forms and Comments",
        definition: "Forms collect user input; comments are notes in HTML code not shown on the page.",
        why: "Forms allow interaction (login, search, feedback). Comments help humans understand code intent.",
        analogy: "Form is a paper form users fill out; comment is a sticky note for developers.",
        example: "A label + input + submit button is a basic form.",
        mistake: "Incorrect: Input without label.",
        fix: "Correct: Pair each input with a visible <label> for usability and accessibility.",
        selfCheck: "Does an HTML comment appear to users by default?",
        selfAnswer: "No.",
        code: "<!-- Developer note -->\n<form><label>Name</label><input><button>Submit</button></form>"
      }
    ]
  },
  {
    id: "ch3",
    title: "Chapter 3: CSS Basics",
    topics: [
      {
        id: "inline-internal-external",
        term: "Inline, Internal, External CSS",
        definition: "CSS can be added inline (style attribute), internal (<style> block), or external (.css file).",
        why: "Different methods support quick tests, page-specific styles, or reusable project-wide styles.",
        analogy: "Inline is sticky note on one item; internal is rules for one room; external is building-wide rulebook.",
        example: "Most projects prefer external CSS for organization and reuse.",
        mistake: "Incorrect: Mixing large styles inline everywhere.",
        fix: "Correct: Keep most styles in external stylesheet for maintainability.",
        selfCheck: "Which CSS method is best for large multi-page sites?",
        selfAnswer: "External CSS.",
        code: "/* style.css */\nbody { font-family: Arial, sans-serif; }"
      },
      {
        id: "selectors",
        term: "Selectors (element, id, class, group)",
        definition: "Selectors choose which HTML elements get styled.",
        why: "Without selectors, CSS would not know where to apply styles.",
        analogy: "Selectors are address labels telling styles exactly where to go.",
        example: "p for elements, #main for id, .card for class, h1, h2 for grouped selectors.",
        mistake: "Incorrect: Using same id on many elements.",
        fix: "Correct: IDs should be unique; classes can be reused.",
        selfCheck: "Which selector starts with a dot?",
        selfAnswer: "Class selector.",
        code: "p { color: #333; }\n#main { max-width: 700px; }\n.card { border: 1px solid #ddd; }"
      },
      {
        id: "box-model",
        term: "Box Model",
        definition: "Every element is a box made of content, padding, border, and margin.",
        why: "Understanding spacing avoids layout bugs and unexpected element sizes.",
        analogy: "Content is the item, padding is bubble wrap, border is the box wall, margin is space between boxes.",
        example: "Adding padding increases inner space around text.",
        mistake: "Incorrect: Confusing margin with padding.",
        fix: "Correct: Padding is inside border; margin is outside border.",
        selfCheck: "Which part adds space outside the border?",
        selfAnswer: "Margin.",
        code: ".box { margin: 10px; border: 2px solid; padding: 16px; }"
      },
      {
        id: "display",
        term: "Display",
        definition: "Display controls how elements behave in layout, like block, inline, or inline-block.",
        why: "It defines whether elements start new lines, share lines, or size like blocks.",
        analogy: "Block is a full row seat, inline is sharing a row with text.",
        example: "div is block by default, span is inline.",
        mistake: "Incorrect: Expecting inline element width/height to behave like block.",
        fix: "Correct: Use inline-block or block when width/height control is needed.",
        selfCheck: "Which display usually starts on a new line?",
        selfAnswer: "Block.",
        code: ".badge { display: inline-block; }"
      },
      {
        id: "float-clear-position",
        term: "Float/Clear and Position",
        definition: "Float moves elements to sides; clear controls wrapping; position sets placement rules (static, relative, absolute, fixed).",
        why: "They provide basic layout control and coordinate-based placement.",
        analogy: "Float is text wrapping around an image; position is pinning notes to a board.",
        example: "position: absolute places an element relative to positioned ancestor.",
        mistake: "Incorrect: Using absolute everywhere for full page layout.",
        fix: "Correct: Use normal flow first; apply position only where needed.",
        selfCheck: "Which property stops wrapping around floated elements?",
        selfAnswer: "clear.",
        code: ".note { position: relative; top: 10px; }"
      }
    ]
  },
  {
    id: "ch4",
    title: "Chapter 4: JavaScript Basics",
    topics: [
      {
        id: "syntax-variables-comments",
        term: "Syntax, Variables, Comments",
        definition: "JavaScript syntax is the writing rules; variables store values; comments explain code to humans.",
        why: "Clear syntax and naming reduce bugs; comments preserve intent for future readers.",
        analogy: "Syntax is grammar, variables are labeled boxes, comments are side notes.",
        example: "let score = 0; // start score",
        mistake: "Incorrect: Using undefined variables accidentally.",
        fix: "Correct: Declare variables with let/const before use.",
        selfCheck: "Which keyword is preferred for values that should not change?",
        selfAnswer: "const.",
        code: "const course = 'CSCI 4410';\n// This is a comment"
      },
      {
        id: "arrays-methods",
        term: "Arrays + push/pop/shift/unshift/sort",
        definition: "Arrays store ordered lists. These methods add/remove/sort items.",
        why: "Lists are common in apps, and methods make list updates simple.",
        analogy: "Array is a line of books; push adds to end, unshift adds to front.",
        example: "items.push('new'); items.pop();",
        mistake: "Incorrect: Expecting sort() to sort numbers naturally without compare function.",
        fix: "Correct: For numbers use arr.sort((a,b)=>a-b).",
        selfCheck: "Which method removes the first item?",
        selfAnswer: "shift().",
        code: "const nums = [3, 1, 2];\nnums.sort((a, b) => a - b);"
      },
      {
        id: "objects-constructors-functions",
        term: "Objects, Constructors, Functions",
        definition: "Objects group related data; constructors create similar objects; functions are reusable behavior blocks.",
        why: "They organize logic and avoid repeating code.",
        analogy: "Object is a profile card; constructor is a profile template; function is a reusable recipe.",
        example: "function User(name){ this.name = name; }",
        mistake: "Incorrect: Treating object properties as separate unrelated variables.",
        fix: "Correct: Keep related values together in objects.",
        selfCheck: "What does a constructor help you create repeatedly?",
        selfAnswer: "Objects with the same structure.",
        code: "function Student(name){ this.name = name; }\nconst s = new Student('Ava');"
      },
      {
        id: "conditionals-loops",
        term: "Conditionals and Loops",
        definition: "Conditionals choose between actions; loops repeat actions.",
        why: "Programs need decision-making and repetition to handle many inputs.",
        analogy: "Conditional is a fork in the road; loop is taking repeated laps.",
        example: "Use for loop for counted repetition; forEach for array items.",
        mistake: "Incorrect: Infinite loops from missing update step.",
        fix: "Correct: Ensure loop condition eventually becomes false.",
        selfCheck: "Which loop method runs a callback for each array item?",
        selfAnswer: "forEach().",
        code: "for (let i = 0; i < 3; i++) { console.log(i); }\n[1,2,3].forEach(n => console.log(n));"
      },
      {
        id: "events-dom",
        term: "Events and DOM Basics",
        definition: "Events are user/system actions; the DOM is the page structure JavaScript can read/change.",
        why: "Interactive webpages depend on reacting to clicks/typing and updating visible content.",
        analogy: "DOM is a tree of page parts; events are signals that tell code when to act.",
        example: "document.getElementById('btn').addEventListener('click', handler)",
        mistake: "Incorrect: Running DOM code before elements load.",
        fix: "Correct: Run script after HTML (or wait for DOMContentLoaded).",
        selfCheck: "Which method returns all matches for a CSS selector?",
        selfAnswer: "querySelectorAll().",
        code: "const el = document.querySelector('.item');\nel.textContent = 'Updated';"
      }
    ]
  }
];

const quizzes = {
  ch1: [
    { type: "mcq", question: "What does IP mainly handle?", options: ["Styling", "Addressing and routing", "Animations", "Storage"], answer: "Addressing and routing", explanation: "IP is responsible for identifying destination addresses and routing packets.", topicId: "tcp-ip" },
    { type: "tf", question: "IPv6 was introduced partly because IPv4 addresses are limited.", answer: "True", explanation: "True. IPv6 greatly expands available address space.", topicId: "ipv4-vs-ipv6" },
    { type: "fill", question: "HTTP stands for HyperText _____ Protocol.", answer: "Transfer", explanation: "The full term is HyperText Transfer Protocol.", topicId: "http" },
    { type: "mcq", question: "The WWW is best described as:", options: ["All electricity networks", "A system of linked web resources", "A programming language", "A database"], answer: "A system of linked web resources", explanation: "The web is a linked information system accessible through browsers.", topicId: "www" },
    { type: "mcq", question: "Which is a valid IPv4 style address?", options: ["2001:db8::1", "192.168.1.20", "site/home", "HTTP://"], answer: "192.168.1.20", explanation: "IPv4 uses dotted decimal format.", topicId: "ipv4-vs-ipv6" }
  ],
  ch2: [
    { type: "mcq", question: "HTML is primarily used to:", options: ["Style pages", "Structure content", "Handle server security", "Compress images"], answer: "Structure content", explanation: "HTML defines the structure and meaning of page content.", topicId: "what-is-html" },
    { type: "tf", question: "An attribute gives extra information about an element.", answer: "True", explanation: "True. Attributes add details such as href, src, class, and id.", topicId: "tags-elements-attributes" },
    { type: "fill", question: "The hyperlink tag is <___>.", answer: "a", explanation: "Anchor tag <a> creates links.", topicId: "core-text-and-links" },
    { type: "mcq", question: "Which tag is best for unordered bullets?", options: ["<ol>", "<ul>", "<table>", "<form>"], answer: "<ul>", explanation: "Use <ul> for unordered lists.", topicId: "images-lists-tables" },
    { type: "mcq", question: "Which form pairing is best practice?", options: ["Input only", "Label + input", "Button only", "Comment only"], answer: "Label + input", explanation: "Labels improve accessibility and clarity for users.", topicId: "forms-and-comments" }
  ],
  ch3: [
    { type: "mcq", question: "For larger projects, which CSS method is preferred?", options: ["Inline", "External", "Internal only", "No CSS"], answer: "External", explanation: "External stylesheets keep styling organized and reusable.", topicId: "inline-internal-external" },
    { type: "tf", question: "Class selectors start with #.", answer: "False", explanation: "Class selectors use ., while # is for ID selectors.", topicId: "selectors" },
    { type: "fill", question: "Space outside the border is called _____.", answer: "margin", explanation: "Margin is outside border; padding is inside border.", topicId: "box-model" },
    { type: "mcq", question: "Which display value usually starts on a new line?", options: ["inline", "block", "none", "initial"], answer: "block", explanation: "Block-level elements generally occupy a full line.", topicId: "display" },
    { type: "mcq", question: "Which property is used with floats to stop wrapping?", options: ["clear", "z-index", "opacity", "overflow-x"], answer: "clear", explanation: "clear controls how an element interacts with floated elements.", topicId: "float-clear-position" }
  ],
  ch4: [
    { type: "mcq", question: "Which keyword is best for a value that should not change?", options: ["var", "let", "const", "new"], answer: "const", explanation: "const prevents reassignment and clarifies intent.", topicId: "syntax-variables-comments" },
    { type: "mcq", question: "Which array method removes the last item?", options: ["push", "pop", "shift", "sort"], answer: "pop", explanation: "pop removes and returns the last element.", topicId: "arrays-methods" },
    { type: "tf", question: "forEach runs a callback for each array item.", answer: "True", explanation: "True. forEach is an array iteration method.", topicId: "conditionals-loops" },
    { type: "fill", question: "To select one element by id, use document.__________.", answer: "getElementById", explanation: "getElementById returns an element by unique id.", topicId: "events-dom" },
    { type: "mcq", question: "A constructor function is used to:", options: ["Delete arrays", "Create similar objects", "Style HTML", "Send HTTP only"], answer: "Create similar objects", explanation: "Constructors are templates for object creation.", topicId: "objects-constructors-functions" }
  ]
};

// ===== Checkpoint: Persistent State =====
// After this section, users keep their progress across page reloads.

const STORAGE_KEY = "csci4410-study-data";

const defaultState = {
  completedTopics: [],
  weakTopics: {},
  flashcardHistory: {},
  flashcardDueAt: {},
  quizHistory: { ch1: [], ch2: [], ch3: [], ch4: [] },
  streak: { lastStudyDate: null, count: 0 },
  darkMode: false
};

let studyState = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(defaultState);
    const parsed = JSON.parse(saved);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      quizHistory: {
        ...structuredClone(defaultState).quizHistory,
        ...(parsed.quizHistory || {})
      },
      weakTopics: parsed.weakTopics || {},
      flashcardHistory: parsed.flashcardHistory || {},
      flashcardDueAt: parsed.flashcardDueAt || {}
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(studyState));
}

function currentDateISO() {
  return new Date().toISOString().slice(0, 10);
}

function updateStreak() {
  const today = currentDateISO();
  const last = studyState.streak.lastStudyDate;

  if (!last) {
    studyState.streak.lastStudyDate = today;
    studyState.streak.count = 1;
    saveState();
    return;
  }

  if (last === today) return;

  const oneDayMs = 24 * 60 * 60 * 1000;
  const diffDays = Math.round((new Date(today) - new Date(last)) / oneDayMs);

  if (diffDays === 1) {
    studyState.streak.count += 1;
  } else {
    studyState.streak.count = 1;
  }

  studyState.streak.lastStudyDate = today;
  saveState();
}

// ===== Checkpoint: Rendering Study Topics =====
// After this section, users see beginner-friendly cards for every required topic.

const topicsContainer = document.getElementById("topicsContainer");
const navLinks = document.getElementById("navLinks");
const searchBox = document.getElementById("searchBox");

function renderNavigation() {
  navLinks.innerHTML = "";

  chapters.forEach((chapter) => {
    const chapterItem = document.createElement("li");
    chapterItem.className = "nav-chapter";

    const chapterLink = document.createElement("a");
    chapterLink.href = `#${chapter.id}`;
    chapterLink.textContent = chapter.title;
    chapterLink.className = "chapter-link";
    chapterItem.appendChild(chapterLink);

    const topicList = document.createElement("ul");
    topicList.className = "nav-topic-list";

    chapter.topics.forEach((topic) => {
      const tItem = document.createElement("li");
      const tLink = document.createElement("a");
      tLink.href = `#topic-${topic.id}`;
      tLink.textContent = topic.term;
      tLink.className = "topic-link";
      tItem.appendChild(tLink);
      topicList.appendChild(tItem);
    });

    chapterItem.appendChild(topicList);
    navLinks.appendChild(chapterItem);
  });
}

function createTopicCard(topic, chapterId) {
  const isCompleted = studyState.completedTopics.includes(topic.id);

  const article = document.createElement("article");
  article.className = "topic-card";
  article.dataset.topicId = topic.id;
  article.dataset.chapterId = chapterId;
  article.dataset.search = [topic.term, topic.definition, topic.why, topic.analogy].join(" ").toLowerCase();
  article.id = `topic-${topic.id}`;

  article.innerHTML = `
    <div class="topic-card-header">
      <h3>${topic.term}</h3>
      <div class="topic-actions">
        <button class="toggle-details" aria-expanded="false" aria-controls="details-${topic.id}">Open Topic</button>
        <button class="mark-complete ${isCompleted ? "done" : ""}" data-topic-id="${topic.id}">${isCompleted ? "✅ Studied" : "Mark Studied"}</button>
      </div>
    </div>
    <div id="details-${topic.id}" class="topic-details" hidden>
      <p><strong>📚 Definition:</strong> ${topic.definition}</p>
      <p><strong>💡 Why it exists:</strong> ${topic.why}</p>
      <p><strong>Think of it like...</strong> ${topic.analogy}</p>
      <p><strong>Tiny example:</strong> ${topic.example}</p>

      <div class="code-snippet" aria-label="Topic code example">
        <pre><code>${escapeHtml(topic.code)}</code></pre>
      </div>

      <div class="mistake-box">
        <p><strong>Common mistake:</strong> ${topic.mistake}</p>
        <p><strong>Fix:</strong> ${topic.fix}</p>
      </div>

      <div class="self-check">
        <p><strong>Self-check:</strong> ${topic.selfCheck}</p>
        <button class="reveal-answer" data-topic-id="${topic.id}">Reveal Answer</button>
        <p class="self-answer" id="answer-${topic.id}" hidden>${topic.selfAnswer}</p>
      </div>
    </div>
  `;

  return article;
}

function renderTopics() {
  topicsContainer.innerHTML = "";

  chapters.forEach((chapter) => {
    const section = document.createElement("section");
    section.className = "chapter-section";
    section.id = chapter.id;

    const heading = document.createElement("h2");
    heading.textContent = chapter.title;
    section.appendChild(heading);

    chapter.topics.forEach((topic) => {
      section.appendChild(createTopicCard(topic, chapter.id));
    });

    topicsContainer.appendChild(section);
  });
}

function attachTopicEvents() {
  topicsContainer.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("toggle-details")) {
      const card = target.closest(".topic-card");
      const details = card.querySelector(".topic-details");
      const isHidden = details.hasAttribute("hidden");

      if (isHidden) {
        details.removeAttribute("hidden");
        target.textContent = "Close Topic";
        target.setAttribute("aria-expanded", "true");
      } else {
        details.setAttribute("hidden", "");
        target.textContent = "Open Topic";
        target.setAttribute("aria-expanded", "false");
      }
    }

    if (target.classList.contains("mark-complete")) {
      const topicId = target.dataset.topicId;
      toggleTopicCompletion(topicId, target);
    }

    if (target.classList.contains("reveal-answer")) {
      const topicId = target.dataset.topicId;
      const answer = document.getElementById(`answer-${topicId}`);
      answer.hidden = !answer.hidden;
      target.textContent = answer.hidden ? "Reveal Answer" : "Hide Answer";
    }
  });
}

function toggleTopicCompletion(topicId, button) {
  const index = studyState.completedTopics.indexOf(topicId);
  if (index >= 0) {
    studyState.completedTopics.splice(index, 1);
    button.textContent = "Mark Studied";
    button.classList.remove("done");
  } else {
    studyState.completedTopics.push(topicId);
    button.textContent = "✅ Studied";
    button.classList.add("done");
  }

  saveState();
  refreshDashboard();
}

function attachSearch() {
  searchBox.addEventListener("input", () => {
    const q = searchBox.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".topic-card");

    cards.forEach((card) => {
      const matches = card.dataset.search.includes(q);
      card.style.display = matches ? "" : "none";
    });
  });
}

// ===== Checkpoint: Flashcards (Spaced-Repetition-ish) =====
// After this section, users can flip cards and delay known cards.

let flashcards = [];
let currentCardIndex = 0;
let isFlipped = false;

const flashcardEl = document.getElementById("flashcard");
const flashQuestion = document.getElementById("flashcardQuestion");
const flashAnswer = document.getElementById("flashcardAnswer");
const flashProgress = document.getElementById("flashcardProgress");
const flipBtn = document.getElementById("flipCard");
const knowItBtn = document.getElementById("knowIt");
const reviewAgainBtn = document.getElementById("reviewAgain");
const shuffleCardsBtn = document.getElementById("shuffleCards");

function buildFlashcards() {
  const allTopics = chapters.flatMap((ch) => ch.topics);
  const now = Date.now();

  flashcards = allTopics
    .filter((topic) => {
      const due = studyState.flashcardDueAt[topic.id] || 0;
      return due <= now;
    })
    .map((topic) => ({
      topicId: topic.id,
      front: topic.term,
      back: `${topic.definition} Example: ${topic.example}`
    }));

  if (flashcards.length === 0) {
    // WHY this fallback exists:
    // If all cards are delayed, user still needs something to study now.
    flashcards = allTopics.slice(0, 5).map((topic) => ({
      topicId: topic.id,
      front: topic.term,
      back: `${topic.definition} Example: ${topic.example}`
    }));
  }

  currentCardIndex = 0;
  isFlipped = false;
  renderCurrentFlashcard();
}

function renderCurrentFlashcard() {
  if (!flashcards.length) {
    flashQuestion.textContent = "No flashcards available.";
    flashAnswer.textContent = "";
    flashProgress.textContent = "Card 0 of 0";
    return;
  }

  const card = flashcards[currentCardIndex];
  flashQuestion.textContent = card.front;
  flashAnswer.textContent = card.back;
  flashProgress.textContent = `Card ${currentCardIndex + 1} of ${flashcards.length}`;
  flashcardEl.classList.toggle("flipped", isFlipped);
}

function moveToNextFlashcard() {
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  isFlipped = false;
  renderCurrentFlashcard();
}

function attachFlashcardEvents() {
  flipBtn.addEventListener("click", () => {
    isFlipped = !isFlipped;
    flashcardEl.classList.toggle("flipped", isFlipped);
  });

  flashcardEl.addEventListener("click", () => {
    isFlipped = !isFlipped;
    flashcardEl.classList.toggle("flipped", isFlipped);
  });

  knowItBtn.addEventListener("click", () => {
    const card = flashcards[currentCardIndex];
    const delayMs = 2 * 24 * 60 * 60 * 1000;
    studyState.flashcardDueAt[card.topicId] = Date.now() + delayMs;
    studyState.flashcardHistory[card.topicId] = "known";
    saveState();
    moveToNextFlashcard();
  });

  reviewAgainBtn.addEventListener("click", () => {
    const card = flashcards[currentCardIndex];
    studyState.flashcardHistory[card.topicId] = "review";
    bumpWeakTopic(card.topicId);
    saveState();
    moveToNextFlashcard();
  });

  shuffleCardsBtn.addEventListener("click", () => {
    for (let i = flashcards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
    }
    currentCardIndex = 0;
    isFlipped = false;
    renderCurrentFlashcard();
  });
}

// ===== Checkpoint: Quiz Mode =====
// After this section, chapter quizzes provide instant feedback and history tracking.

const quizChapterSelect = document.getElementById("quizChapter");
const startQuizBtn = document.getElementById("startQuiz");
const quizQuestionEl = document.getElementById("quizQuestion");
const quizOptionsEl = document.getElementById("quizOptions");
const quizFeedbackEl = document.getElementById("quizFeedback");
const nextQuestionBtn = document.getElementById("nextQuestion");
const scoreHistoryEl = document.getElementById("scoreHistory");

let activeQuizChapter = "";
let activeQuestions = [];
let activeQuestionIndex = 0;
let activeScore = 0;

function renderQuizChapterOptions() {
  chapters.forEach((ch) => {
    const option = document.createElement("option");
    option.value = ch.id;
    option.textContent = ch.title;
    quizChapterSelect.appendChild(option);
  });
}

function startQuiz() {
  const chapterId = quizChapterSelect.value;
  if (!chapterId || !quizzes[chapterId]) {
    quizQuestionEl.textContent = "Please choose a chapter first.";
    quizOptionsEl.innerHTML = "";
    quizFeedbackEl.textContent = "";
    return;
  }

  activeQuizChapter = chapterId;
  activeQuestions = [...quizzes[chapterId]];
  activeQuestionIndex = 0;
  activeScore = 0;
  nextQuestionBtn.style.display = "none";
  renderQuizQuestion();
}

function renderQuizQuestion() {
  quizFeedbackEl.textContent = "";
  quizOptionsEl.innerHTML = "";

  if (activeQuestionIndex >= activeQuestions.length) {
    finishQuiz();
    return;
  }

  const q = activeQuestions[activeQuestionIndex];
  quizQuestionEl.textContent = `Q${activeQuestionIndex + 1}: ${q.question}`;

  if (q.type === "fill") {
    const wrapper = document.createElement("div");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type your answer";
    input.setAttribute("aria-label", "Fill in the blank answer");

    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "btn btn-primary";

    submit.addEventListener("click", () => {
      const userAnswer = input.value.trim();
      checkAnswer(userAnswer, q.answer);
    });

    wrapper.appendChild(input);
    wrapper.appendChild(submit);
    quizOptionsEl.appendChild(wrapper);
    return;
  }

  const options = q.type === "tf" ? ["True", "False"] : q.options;
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => checkAnswer(opt, q.answer));
    quizOptionsEl.appendChild(btn);
  });
}

function normalizeAnswer(value) {
  return String(value).trim().toLowerCase();
}

function checkAnswer(userAnswer, correctAnswer) {
  const q = activeQuestions[activeQuestionIndex];
  const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);

  if (isCorrect) {
    activeScore += 1;
    quizFeedbackEl.innerHTML = `<p class="correct">✅ Correct!</p><p>${q.explanation}</p>`;
  } else {
    quizFeedbackEl.innerHTML = `<p class="incorrect">❌ Not quite.</p><p>Correct answer: <strong>${correctAnswer}</strong></p><p>${q.explanation}</p>`;
    bumpWeakTopic(q.topicId);
  }

  nextQuestionBtn.style.display = "inline-block";
  const allButtons = quizOptionsEl.querySelectorAll("button");
  allButtons.forEach((btn) => {
    btn.disabled = true;
  });
}

function finishQuiz() {
  const total = activeQuestions.length;
  const scorePercent = Math.round((activeScore / total) * 100);

  const attempt = {
    date: new Date().toISOString(),
    score: activeScore,
    total,
    percent: scorePercent
  };

  studyState.quizHistory[activeQuizChapter].push(attempt);
  saveState();

  quizQuestionEl.textContent = `Quiz Complete! Score: ${activeScore}/${total} (${scorePercent}%)`;
  quizOptionsEl.innerHTML = "";
  quizFeedbackEl.innerHTML = "Great job. Review weak topics in Study Mode for improvement.";
  nextQuestionBtn.style.display = "none";

  renderScoreHistory(activeQuizChapter);
  refreshDashboard();
}

function renderScoreHistory(chapterId) {
  const history = studyState.quizHistory[chapterId] || [];
  if (!history.length) {
    scoreHistoryEl.innerHTML = "";
    return;
  }

  const items = history.slice(-5).map((attempt) => {
    const when = new Date(attempt.date).toLocaleDateString();
    return `<li>${when}: ${attempt.score}/${attempt.total} (${attempt.percent}%)</li>`;
  }).join("");

  scoreHistoryEl.innerHTML = `
    <h3>Recent Scores</h3>
    <ul>${items}</ul>
  `;
}

startQuizBtn.addEventListener("click", startQuiz);
nextQuestionBtn.addEventListener("click", () => {
  activeQuestionIndex += 1;
  nextQuestionBtn.style.display = "none";
  renderQuizQuestion();
});

// ===== Checkpoint: Interactive Demos =====
// After this section, students can experiment visually with key concepts.

const sendRequestBtn = document.getElementById("sendRequest");
const httpMethodEl = document.getElementById("httpMethod");
const httpUrlEl = document.getElementById("httpUrl");
const httpResponseArea = document.getElementById("httpResponseArea");

sendRequestBtn.addEventListener("click", () => {
  const method = httpMethodEl.value;
  const url = httpUrlEl.value.trim() || "/";

  const fakeResponses = {
    GET: { status: 200, body: `{ "message": "Fetched data from ${url}" }` },
    POST: { status: 201, body: `{ "message": "Created resource at ${url}" }` },
    PUT: { status: 200, body: `{ "message": "Updated resource at ${url}" }` },
    DELETE: { status: 204, body: "No Content" }
  };

  const response = fakeResponses[method];
  httpResponseArea.innerHTML = `
    <p><strong>Request:</strong> ${method} ${escapeHtml(url)}</p>
    <p><strong>Status:</strong> ${response.status}</p>
    <pre><code>${escapeHtml(response.body)}</code></pre>
  `;
});

const renderHtmlBtn = document.getElementById("renderHtml");
const htmlInput = document.getElementById("htmlInput");
const htmlOutput = document.getElementById("htmlOutput");

// WHY this whitelist exists:
// Rendering arbitrary HTML directly can allow script injection.
// For beginner safety, we only allow common harmless learning tags.
const ALLOWED_TAGS = new Set(["h1", "h2", "h3", "p", "strong", "em", "ul", "ol", "li", "a", "span", "br"]);

function sanitizeAndRenderHtml(rawHtml) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, "text/html");

  const nodes = Array.from(doc.body.querySelectorAll("*"));
  nodes.forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) {
      const replacement = document.createElement("span");
      replacement.textContent = node.textContent;
      node.replaceWith(replacement);
      return;
    }

    // Strip all attributes except href on <a>.
    Array.from(node.attributes).forEach((attr) => {
      if (!(tag === "a" && attr.name.toLowerCase() === "href")) {
        node.removeAttribute(attr.name);
      }
    });

    if (tag === "a") {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
    }
  });

  return doc.body.innerHTML;
}

renderHtmlBtn.addEventListener("click", () => {
  const userHtml = htmlInput.value;
  const safeHtml = sanitizeAndRenderHtml(userHtml);
  htmlOutput.innerHTML = safeHtml || "<p>(Nothing rendered yet)</p>";
});

const marginSlider = document.getElementById("marginSlider");
const borderSlider = document.getElementById("borderSlider");
const paddingSlider = document.getElementById("paddingSlider");
const marginValue = document.getElementById("marginValue");
const borderValue = document.getElementById("borderValue");
const paddingValue = document.getElementById("paddingValue");
const boxVisual = document.getElementById("boxVisual");

function updateBoxModelDemo() {
  const margin = Number(marginSlider.value);
  const border = Number(borderSlider.value);
  const padding = Number(paddingSlider.value);

  marginValue.textContent = margin;
  borderValue.textContent = border;
  paddingValue.textContent = padding;

  const marginEl = boxVisual.querySelector(".box-margin");
  const borderEl = boxVisual.querySelector(".box-border");
  const paddingEl = boxVisual.querySelector(".box-padding");

  marginEl.style.padding = `${margin}px`;
  borderEl.style.borderWidth = `${border}px`;
  paddingEl.style.padding = `${padding}px`;
}

[marginSlider, borderSlider, paddingSlider].forEach((slider) => {
  slider.addEventListener("input", updateBoxModelDemo);
});

// DOM demo functions are attached to window because index.html calls them from inline onclick attributes.
function demoGetElementById() {
  const heading = document.getElementById("demoHeading");
  heading.textContent = "Updated via getElementById ✅";
  heading.style.color = "#16a34a";
}

function demoQuerySelector() {
  const paragraph = document.querySelector(".demo-text");
  if (paragraph) {
    paragraph.textContent = "First .demo-text changed via querySelector ✅";
    paragraph.style.background = "rgba(59,130,246,0.15)";
  }
}

function demoQuerySelectorAll() {
  const paragraphs = document.querySelectorAll(".demo-text");
  paragraphs.forEach((p, i) => {
    p.textContent = `Paragraph ${i + 1} changed via querySelectorAll ✅`;
    p.style.color = "#7c3aed";
  });
}

let listenerAttached = false;
function demoEventListener() {
  const demoElement = document.getElementById("demoElement");
  if (listenerAttached) return;

  demoElement.addEventListener("click", () => {
    demoElement.style.borderColor = "#f59e0b";
    demoElement.style.background = "rgba(245,158,11,0.1)";
  });

  listenerAttached = true;
  alert("Click inside the demo area to trigger the event listener.");
}

function resetDemoElement() {
  const heading = document.getElementById("demoHeading");
  const paragraphs = document.querySelectorAll(".demo-text");
  const demoElement = document.getElementById("demoElement");

  heading.textContent = "Hello DOM!";
  heading.style.color = "";

  paragraphs.forEach((p, i) => {
    p.textContent = i === 0 ? "I'm a paragraph." : "I'm another paragraph.";
    p.style.color = "";
    p.style.background = "";
  });

  demoElement.style.borderColor = "";
  demoElement.style.background = "";
}

window.demoGetElementById = demoGetElementById;
window.demoQuerySelector = demoQuerySelector;
window.demoQuerySelectorAll = demoQuerySelectorAll;
window.demoEventListener = demoEventListener;
window.resetDemoElement = resetDemoElement;

// ===== Checkpoint: Modes, Dashboard, Theme, Import/Export =====
// After this section, users can switch views and keep/restore progress.

const modeButtons = document.querySelectorAll(".mode-btn");
const sectionsByMode = {
  study: document.getElementById("studyMode"),
  flashcards: document.getElementById("flashcardMode"),
  quiz: document.getElementById("quizMode"),
  demos: document.getElementById("demosMode")
};

function switchMode(mode) {
  Object.entries(sectionsByMode).forEach(([key, section]) => {
    section.classList.toggle("active", key === mode);
  });

  modeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });

  if (mode === "flashcards") {
    buildFlashcards();
  }
}

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => switchMode(btn.dataset.mode));
});

const progressPercentEl = document.getElementById("progressPercent");
const streakCounterEl = document.getElementById("streakCounter");
const weakTopicsListEl = document.getElementById("weakTopicsList");

function bumpWeakTopic(topicId) {
  studyState.weakTopics[topicId] = (studyState.weakTopics[topicId] || 0) + 1;
}

function getTopicName(topicId) {
  const topic = chapters.flatMap((ch) => ch.topics).find((t) => t.id === topicId);
  return topic ? topic.term : topicId;
}

function refreshDashboard() {
  const totalTopics = chapters.reduce((sum, ch) => sum + ch.topics.length, 0);
  const completed = studyState.completedTopics.length;
  const percent = Math.round((completed / totalTopics) * 100);

  progressPercentEl.textContent = `${percent}%`;
  streakCounterEl.textContent = `${studyState.streak.count} day${studyState.streak.count === 1 ? "" : "s"}`;

  const topWeak = Object.entries(studyState.weakTopics)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  weakTopicsListEl.innerHTML = topWeak.length
    ? topWeak.map(([topicId, count]) => `<li>${getTopicName(topicId)} (${count})</li>`).join("")
    : "<li>None yet — great work!</li>";
}

const darkModeToggle = document.getElementById("darkModeToggle");

function applyTheme() {
  document.body.classList.toggle("dark-mode", studyState.darkMode);
  darkModeToggle.textContent = studyState.darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
}

darkModeToggle.addEventListener("click", () => {
  studyState.darkMode = !studyState.darkMode;
  saveState();
  applyTheme();
});

const exportBtn = document.getElementById("exportBtn");
const importBtn = document.getElementById("importBtn");
const importFile = document.getElementById("importFile");

exportBtn.addEventListener("click", () => {
  const data = JSON.stringify(studyState, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `csci4410-progress-${currentDateISO()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

importBtn.addEventListener("click", () => importFile.click());

importFile.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);

    studyState = {
      ...structuredClone(defaultState),
      ...parsed,
      quizHistory: {
        ...structuredClone(defaultState).quizHistory,
        ...(parsed.quizHistory || {})
      }
    };

    saveState();
    applyTheme();
    renderTopics();
    attachTopicEvents();
    refreshDashboard();
    alert("Progress imported successfully.");
  } catch {
    alert("Invalid JSON file. Please import a valid progress file.");
  } finally {
    importFile.value = "";
  }
});

function enableSmoothScroll() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLAnchorElement)) return;
    if (!target.getAttribute("href")?.startsWith("#")) return;

    const id = target.getAttribute("href");
    const section = document.querySelector(id);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function setupKeyboardFocusHelp() {
  // WHY this exists:
  // Strong focus cues improve keyboard accessibility and help users who do not use a mouse.
  document.body.addEventListener("keyup", (event) => {
    if (event.key === "Tab") {
      document.body.classList.add("show-focus-outlines");
    }
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function init() {
  updateStreak();
  applyTheme();
  renderNavigation();
  renderTopics();
  attachTopicEvents();
  attachSearch();
  attachFlashcardEvents();
  renderQuizChapterOptions();
  updateBoxModelDemo();
  refreshDashboard();
  enableSmoothScroll();
  setupKeyboardFocusHelp();
  switchMode("study");
}

init();
