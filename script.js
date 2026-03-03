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
    { type: "mcq", question: "What does IP mainly handle?", options: ["Styling", "Addressing and routing", "Animations", "Storage"], answer: "Addressing and routing", explanation: "IP is responsible for identifying destination addresses and routing packets across networks.", topicId: "tcp-ip" },
    { type: "mcq", question: "What does TCP mainly ensure?", options: ["Visual display", "Reliable ordered delivery", "Data encryption", "Bandwidth control"], answer: "Reliable ordered delivery", explanation: "TCP guarantees data arrives in order and without loss.", topicId: "tcp-ip" },
    { type: "tf", question: "TCP/IP requires both protocols to work together.", answer: "True", explanation: "TCP handles transport; IP handles routing. Both are essential.", topicId: "tcp-ip" },
    { type: "fill", question: "A _____ is a unique number assigned to each device on a network.", answer: "IP address", explanation: "IP addresses identify devices; IPv4 uses 32-bit, IPv6 uses 128-bit addresses.", topicId: "ipv4-vs-ipv6" },
    { type: "mcq", question: "IPv4 addresses are limited to approximately:", options: ["4 billion", "1 trillion", "1 million", "No limit"], answer: "4 billion", explanation: "IPv4 has 2^32 addresses (~4.3 billion). IPv6 has 2^128 for far more devices.", topicId: "ipv4-vs-ipv6" },
    { type: "tf", question: "IPv6 was designed as a direct replacement for IPv4.", answer: "True", explanation: "IPv6 solves IPv4 address exhaustion but takes time to deploy worldwide.", topicId: "ipv4-vs-ipv6" },
    { type: "mcq", question: "Which correctly shows an IPv6 address format?", options: ["192.168.1.1", "2001:db8::1", "256.256.256.256", "192.168"], answer: "2001:db8::1", explanation: "IPv6 uses hexadecimal notation with colons; :: represents consecutive zeros.", topicId: "ipv4-vs-ipv6" },
    { type: "mcq", question: "The World Wide Web was invented to solve what problem?", options: ["Network speed", "Easy information sharing", "Device compatibility", "Password security"], answer: "Easy information sharing", explanation: "WWW provided a user-friendly hyperlinked interface to internet resources.", topicId: "www" },
    { type: "tf", question: "The internet and the World Wide Web are the same thing.", answer: "False", explanation: "The internet is the global network infrastructure; WWW is a service on top.", topicId: "www" },
    { type: "mcq", question: "What makes the WWW different from other internet services?", options: ["Uses hyperlinks", "Requires special hardware", "No server involved", "Text-only"], answer: "Uses hyperlinks", explanation: "Hyperlinks let users navigate between interconnected web pages.", topicId: "www" },
    { type: "fill", question: "HTTP stands for HyperText _____ Protocol.", answer: "Transfer", explanation: "HTTP defines how browsers request and servers deliver web content.", topicId: "http" },
    { type: "mcq", question: "What is the primary purpose of HTTP?", options: ["Encrypt data", "Request/deliver web resources", "Manage network cables", "Store files"], answer: "Request/deliver web resources", explanation: "HTTP is the request-response protocol used by web browsers and servers.", topicId: "http" },
    { type: "tf", question: "HTTP is a stateless protocol.", answer: "True", explanation: "Each HTTP request is independent; the server doesn't retain session memory by default.", topicId: "http" },
    { type: "mcq", question: "Which HTTP method is typically used to retrieve a webpage?", options: ["POST", "GET", "DELETE", "PUT"], answer: "GET", explanation: "GET requests data without modifying server state.", topicId: "http" },
    { type: "mcq", question: "A browser makes an HTTP request and receives a _____ back.", options: ["Packet", "Response", "Signal", "Frame"], answer: "Response", explanation: "HTTP responses contain status codes, headers, and a body (usually HTML).", topicId: "http" },
    { type: "fill", question: "An HTTP status code of 404 means _____.", answer: "Not Found", explanation: "404 indicates the requested resource does not exist on the server.", topicId: "http" },
    { type: "mcq", question: "What does TCP/IP model describe?", options: ["Website design", "Communication layers for networks", "Database structure", "Hardware only"], answer: "Communication layers for networks", explanation: "TCP/IP is a layered model defining how data is transmitted across networks.", topicId: "tcp-ip" },
    { type: "tf", question: "IPv4 and IPv6 can coexist on the same network.", answer: "True", explanation: "Dual-stack networks support both IPv4 and IPv6 simultaneously during transition.", topicId: "ipv4-vs-ipv6" },
    { type: "mcq", question: "Which device needs an IP address?", options: ["Only computers", "Any device connecting to a network", "Only servers", "Only routers"], answer: "Any device connecting to a network", explanation: "Every network device (phone, computer, printer, IoT device) needs a unique IP.", topicId: "ipv4-vs-ipv6" },
    { type: "mcq", question: "What happens when you click a hyperlink on a webpage?", options: ["Your browser makes an HTTP GET request", "Data is automatically downloaded", "The server shuts down", "Nothing technical"], answer: "Your browser makes an HTTP GET request", explanation: "Clicking a link triggers an HTTP request to fetch the linked resource.", topicId: "http" },
    { type: "fill", question: "The part of TCP/IP that handles reliable delivery is _____.", answer: "TCP", explanation: "TCP (Transmission Control Protocol) ensures all packets arrive in order.", topicId: "tcp-ip" },
    { type: "mcq", question: "Which layer delivers packets to the correct physical address?", options: ["Application", "Transport", "Internet", "Link"], answer: "Internet", explanation: "IP works at the Internet layer, handling destination addressing and routing.", topicId: "tcp-ip" },
    { type: "tf", question: "Routers use IP addresses to forward data packets.", answer: "True", explanation: "Routers examine IP headers to determine where packets should go next.", topicId: "ipv4-vs-ipv6" },
    { type: "mcq", question: "Why is HTTPS often preferred over HTTP?", options: ["Faster speed", "Encrypted connection", "Better design", "Fewer features"], answer: "Encrypted connection", explanation: "HTTPS adds SSL/TLS encryption to protect data in transit.", topicId: "http" },
    { type: "fill", question: "DNS converts human-readable _____ into IP addresses.", answer: "domain names", explanation: "Domain Name System (DNS) translates URLs like google.com to numeric IP addresses.", topicId: "tcp-ip" }
  ],
  ch2: [
    { type: "mcq", question: "HTML is primarily used to:", options: ["Style pages", "Structure content", "Handle security", "Optimize speed"], answer: "Structure content", explanation: "HTML provides semantic structure; CSS styles, JavaScript adds behavior.", topicId: "what-is-html" },
    { type: "tf", question: "HTML can make a webpage look beautiful on its own.", answer: "False", explanation: "HTML provides structure only. CSS is needed for styling and visual design.", topicId: "what-is-html" },
    { type: "mcq", question: "What is the main difference between semantic and non-semantic HTML?", options: ["Semantic is faster", "Semantic clearly describes content meaning", "Non-semantic is more stylish", "No real difference"], answer: "Semantic clearly describes content meaning", explanation: "Semantic tags like <header>, <nav>, <article> convey meaning to browsers and developers.", topicId: "what-is-html" },
    { type: "fill", question: "An HTML _____ is a container that indicates content type (heading, paragraph, etc).", answer: "tag", explanation: "Tags like <p>, <h1>, <div> define different types of content.", topicId: "tags-elements-attributes" },
    { type: "mcq", question: "A complete HTML tag + content is called an:", options: ["Attribute", "Element", "Property", "Node"], answer: "Element", explanation: "An element is a complete unit: opening tag + content + closing tag.", topicId: "tags-elements-attributes" },
    { type: "tf", question: "Attributes can only be added to certain HTML elements.", answer: "True", explanation: "Some attributes are global (apply to all), others are specific to certain elements.", topicId: "tags-elements-attributes" },
    { type: "mcq", question: "In <a href='page.html'>Link</a>, what is 'href'?", options: ["An element", "A tag", "An attribute", "Content"], answer: "An attribute", explanation: "href is an attribute providing extra info (the URL) for the <a> element.", topicId: "tags-elements-attributes" },
    { type: "fill", question: "The <h1> tag creates a _____ heading.", options: ["level 1", "first", "main", "primary"], answer: "level 1", explanation: "<h1> through <h6> define heading levels; <h1> is the most important.", topicId: "core-text-and-links" },
    { type: "mcq", question: "How many <h1> tags should typically appear on a webpage?", options: ["Zero", "One", "Multiple", "Depends on page"], answer: "One", explanation: "Best practice: one <h1> per page representing the main title for SEO and accessibility.", topicId: "core-text-and-links" },
    { type: "tf", question: "Paragraphs are created with the <p> tag.", answer: "True", explanation: "<p> wraps text in a paragraph with automatic spacing above and below.", topicId: "core-text-and-links" },
    { type: "fill", question: "The _____ tag creates a hyperlink to another page.", answer: "a", explanation: "The anchor tag <a> with href attribute links to other resources.", topicId: "core-text-and-links" },
    { type: "mcq", question: "Which attribute is required for a functional link?", options: ["title", "href", "class", "id"], answer: "href", explanation: "The href attribute specifies the link destination URL.", topicId: "core-text-and-links" },
    { type: "mcq", question: "The <img> tag requires which attribute to work properly?", options: ["title", "width", "src", "link"], answer: "src", explanation: "src specifies the image file path; alt provides accessible text description.", topicId: "images-lists-tables" },
    { type: "tf", question: "The alt attribute for images is optional.", answer: "False", explanation: "alt is essential for accessibility, SEO, and displays if image fails to load.", topicId: "images-lists-tables" },
    { type: "fill", question: "Use the <___> tag for an unordered (bulleted) list.", answer: "ul", explanation: "<ul> contains <li> items for bullet points; <ol> is for numbered lists.", topicId: "images-lists-tables" },
    { type: "mcq", question: "What is the purpose of <table> in HTML?", options: ["Page layout", "Data organization in rows/columns", "Styling", "Navigation"], answer: "Data organization in rows/columns", explanation: "Tables display structured data; <tr> for rows, <td> for cells.", topicId: "images-lists-tables" },
    { type: "tf", question: "Tables should be used for webpage layout design.", answer: "False", explanation: "Tables are for tabular data only. CSS Flexbox/Grid is better for layout.", topicId: "images-lists-tables" },
    { type: "mcq", question: "A form is used to:", options: ["Display images", "Collect user input", "Create links", "Apply colors"], answer: "Collect user input", explanation: "Forms gather user data via inputs, textareas, selects, etc.", topicId: "forms-and-comments" },
    { type: "fill", question: "A form sends data using a _____ attribute on the <form> tag.", answer: "action", explanation: "The action attribute specifies where form data is sent (a URL/endpoint).", topicId: "forms-and-comments" },
    { type: "mcq", question: "Which tag pairs input fields with descriptive text?", options: ["<span>", "<label>", "<div>", "<p>"], answer: "<label>", explanation: "<label> associates text with form inputs, improving usability and accessibility.", topicId: "forms-and-comments" },
    { type: "tf", question: "HTML comments are visible to website visitors.", answer: "False", explanation: "<!-- Comments --> are only visible in the HTML source code, not rendered.", topicId: "forms-and-comments" },
    { type: "mcq", question: "What makes an HTML document valid?", options: ["Uses many tags", "Proper DOCTYPE and structure", "Has a title", "No rules needed"], answer: "Proper DOCTYPE and structure", explanation: "Valid HTML includes <!DOCTYPE html>, <html>, <head>, <body> elements.", topicId: "what-is-html" },
    { type: "fill", question: "The <___> tag contains metadata and links to stylesheets.", answer: "head", explanation: "The <head> section includes <title>, <meta>, <link> for CSS, and <script> for JS.", topicId: "what-is-html" },
    { type: "mcq", question: "Which tag should wrap the visible page content?", options: ["<head>", "<body>", "<html>", "<main>"], answer: "<body>", explanation: "<body> contains all content visible to users (text, images, forms, etc).", topicId: "what-is-html" }
  ],
  ch3: [
    { type: "mcq", question: "For larger projects, which CSS method is most maintainable?", options: ["Inline", "External file", "Internal block", "Mixed"], answer: "External file", explanation: "External .css files keep styles organized and reusable across pages.", topicId: "inline-internal-external" },
    { type: "tf", question: "Inline CSS (style attribute) is the best approach for large websites.", answer: "False", explanation: "Inline CSS is hard to maintain, duplicates code, and violates separation of concerns.", topicId: "inline-internal-external" },
    { type: "mcq", question: "Internal CSS is defined in:", options: ["A separate .css file", "A <style> block in HTML", "HTML attributes", "JavaScript"], answer: "A <style> block in HTML", explanation: "Internal styles appear in the <head> section; useful for single-page styles.", topicId: "inline-internal-external" },
    { type: "fill", question: "A _____ selects elements to apply styles to them.", answer: "selector", explanation: "Selectors (element, class, id, etc) tell CSS which elements to style.", topicId: "selectors" },
    { type: "mcq", question: "Which selector targets elements by class name?", options: ["# symbol", ". symbol", ": symbol", "* symbol"], answer: ". symbol", explanation: ".classname targets all elements with that class; classes can be reused.", topicId: "selectors" },
    { type: "mcq", question: "Which selector targets a unique element by ID?", options: [".id-name", "#id-name", ":id-name", "id-name"], answer: "#id-name", explanation: "#idname targets one unique element; IDs should only appear once per page.", topicId: "selectors" },
    { type: "tf", question: "An ID can be used on multiple elements on the same page.", answer: "False", explanation: "IDs must be unique per page; use classes if you need to apply the same style to multiple elements.", topicId: "selectors" },
    { type: "mcq", question: "A group selector (h1, h2, p) applies styles to:", options: ["Only h1", "All three element types", "The first match", "Nothing"], answer: "All three element types", explanation: "Grouping selectors with commas applies the same style to multiple selectors.", topicId: "selectors" },
    { type: "fill", question: "The CSS box model consists of content, padding, _____, and margin.", answer: "border", explanation: "Order from inside: content → padding → border → margin.", topicId: "box-model" },
    { type: "mcq", question: "Which part of the box model is between content and border?", options: ["Margin", "Padding", "Border", "Outline"], answer: "Padding", explanation: "Padding is inside space; margin is outside space (beyond the border).", topicId: "box-model" },
    { type: "tf", question: "Margin and padding do the same thing.", answer: "False", explanation: "Padding is inside the border; margin is outside the border creating external space.", topicId: "box-model" },
    { type: "mcq", question: "What does width: 300px set in the box model?", options: ["Entire element including margin", "Content area only (by default)", "Content + padding", "Content + border"], answer: "Content area only (by default)", explanation: "By default, width sets content width. Use box-sizing: border-box to include padding/border.", topicId: "box-model" },
    { type: "fill", question: "The _____ property controls how an element participates in layout flow.", answer: "display", explanation: "display values (block, inline, inline-block, flex, grid) determine element behavior.", topicId: "display" },
    { type: "mcq", question: "A block element typically:", options: ["Shares a line with other elements", "Takes up full available width", "Cannot have width/height", "Is invisible"], answer: "Takes up full available width", explanation: "Block elements (p, div, h1) start on new lines and stretch horizontally.", topicId: "display" },
    { type: "tf", question: "Inline elements can have width and height properties applied.", answer: "False", explanation: "Inline elements ignore width/height; use inline-block or block for sizing control.", topicId: "display" },
    { type: "mcq", question: "Which display value allows width/height AND inline flow?", options: ["block", "inline", "inline-block", "hidden"], answer: "inline-block", explanation: "inline-block combines inline flow with block-level sizing capabilities.", topicId: "display" },
    { type: "fill", question: "The _____ property moves an element to screen edges and wraps text around it.", answer: "float", explanation: "float: left/right removes elements from normal flow; other elements wrap beside them.", topicId: "float-clear-position" },
    { type: "mcq", question: "What does the clear property do?", options: ["Deletes CSS rules", "Prevents wrapping around floats", "Hides elements", "Resets styles"], answer: "Prevents wrapping around floats", explanation: "clear: left/right/both prevents an element from sitting beside floated content.", topicId: "float-clear-position" },
    { type: "tf", question: "position: absolute removes an element from normal document flow.", answer: "True", explanation: "Absolute positioning takes elements out of flow; use relative/fixed/sticky for alternatives.", topicId: "float-clear-position" },
    { type: "mcq", question: "position: relative moves elements while keeping their space in flow.", options: ["True", "False"], answer: "True", explanation: "Relative positioning offset elements visually but reserves their original space.", topicId: "float-clear-position" },
    { type: "fill", question: "The property _____ controls layering depth when elements overlap.", answer: "z-index", explanation: "z-index: higher values appear on top; only works with positioned elements.", topicId: "float-clear-position" },
    { type: "mcq", question: "What does opacity: 0.5 do?", options: ["Hides element", "Makes element 50% transparent", "Removes element", "Disables interaction"], answer: "Makes element 50% transparent", explanation: "opacity: 0 is invisible; 1 is fully opaque; 0.5 is 50% transparency.", topicId: "float-clear-position" },
    { type: "tf", question: "CSS selectors are case-sensitive for class and id names.", answer: "True", explanation: ".MyClass and .myclass are different selectors in CSS.", topicId: "selectors" },
    { type: "mcq", question: "Specificity in CSS determines:", options: ["Color brightness", "Which rule wins when conflicts exist", "Page loading speed", "Font size"], answer: "Which rule wins when conflicts exist", explanation: "Higher specificity wins: !important > IDs > classes > elements.", topicId: "selectors" }
  ],
  ch4: [
    { type: "mcq", question: "Which keyword declares a variable that cannot be reassigned?", options: ["var", "let", "const", "static"], answer: "const", explanation: "const prevents reassignment, signaling intent and safer code.", topicId: "syntax-variables-comments" },
    { type: "tf", question: "var, let, and const work exactly the same.", answer: "False", explanation: "var is function-scoped; let/const are block-scoped. const prevents reassignment.", topicId: "syntax-variables-comments" },
    { type: "mcq", question: "A JavaScript comment starts with:", options: ["#", "//", "--", "/*"], answer: "//", explanation: "Single-line: // | Multi-line: /* */", topicId: "syntax-variables-comments" },
    { type: "fill", question: "A variable name cannot start with a _____.", answer: "number", explanation: "Variable names must start with letter, $, or _. 'let 1name' is invalid.", topicId: "syntax-variables-comments" },
    { type: "mcq", question: "What is an array in JavaScript?", options: ["A string of text", "An ordered list of values", "A single number", "A function"], answer: "An ordered list of values", explanation: "Arrays store multiple values: const arr = [1, 2, 3];", topicId: "arrays-methods" },
    { type: "tf", question: "Array indices start at 1.", answer: "False", explanation: "Arrays are zero-indexed: arr[0] is first element, arr[1] is second.", topicId: "arrays-methods" },
    { type: "mcq", question: "Which method adds an item to the end of an array?", options: ["unshift", "push", "pop", "shift"], answer: "push", explanation: "push() adds to end; unshift() adds to beginning.", topicId: "arrays-methods" },
    { type: "fill", question: "The _____ method removes and returns the last array element.", answer: "pop", explanation: "pop() removes and returns the last item; shift() does the same for first.", topicId: "arrays-methods" },
    { type: "mcq", question: "shift() does what to an array?", options: ["Adds to end", "Removes first item", "Sorts items", "Doubles length"], answer: "Removes first item", explanation: "shift() removes the first element; unshift() adds to the beginning.", topicId: "arrays-methods" },
    { type: "mcq", question: "To sort an array of numbers correctly, you need:", options: ["arr.sort()", "arr.sort((a, b) => a - b)", "arr.reverse()", "arr.shuffle()"], answer: "arr.sort((a, b) => a - b)", explanation: "sort() without compare function sorts as strings; use compare for numbers.", topicId: "arrays-methods" },
    { type: "tf", question: "For numeric sorting, arr.sort() works as expected.", answer: "False", explanation: "sort() sorts lexicographically (as text) by default; use compare function for numbers.", topicId: "arrays-methods" },
    { type: "mcq", question: "An object groups related:", options: ["Numbers only", "Strings only", "Data and functions", "Loops"], answer: "Data and functions", explanation: "Objects hold key-value pairs: const user = { name: 'Ali', age: 20 };", topicId: "objects-constructors-functions" },
    { type: "fill", question: "A _____ function creates similar objects from a template.", answer: "constructor", explanation: "Constructors (capitalized) initialize objects with shared structure.", topicId: "objects-constructors-functions" },
    { type: "mcq", question: "You create an instance of a constructor using the _____ keyword.", options: ["new", "create", "init", "make"], answer: "new", explanation: "const obj = new ConstructorName(); creates a new instance.", topicId: "objects-constructors-functions" },
    { type: "tf", question: "Functions can be stored in objects as properties.", answer: "True", explanation: "Functions as object properties are called methods, e.g., obj.method().", topicId: "objects-constructors-functions" },
    { type: "mcq", question: "A function returns a value using the _____ keyword.", options: ["send", "give", "return", "output"], answer: "return", explanation: "return stops execution and sends a value back to the caller.", topicId: "objects-constructors-functions" },
    { type: "fill", question: "An if/else statement executes code _____ (based on condition).", answer: "conditionally", explanation: "if (condition) { } runs when true; else { } runs when false.", topicId: "conditionals-loops" },
    { type: "mcq", question: "Which comparison operator checks equality AND type?", options: ["==", "!=", "===", "="], answer: "===", explanation: "=== checks both value and type; == only value (loose equality).", topicId: "conditionals-loops" },
    { type: "tf", question: "'5' === 5 evaluates to true.", answer: "False", explanation: "=== checks type: '5' (string) ≠ 5 (number), so result is false.", topicId: "conditionals-loops" },
    { type: "fill", question: "A _____ loop repeats until its condition becomes false.", answer: "for", explanation: "for (let i = 0; i < 10; i++) loops 10 times with i incrementing.", topicId: "conditionals-loops" },
    { type: "mcq", question: "forEach() is used to:", options: ["Find one item", "Run callback for each array element", "Sort items", "Delete items"], answer: "Run callback for each array element", explanation: "[1,2,3].forEach(n => console.log(n)); iterates and runs callback.", topicId: "conditionals-loops" },
    { type: "mcq", question: "An event listener responds to user actions like:", options: ["Loading page only", "Click, input, mouseover", "Syntax errors", "File size"], answer: "Click, input, mouseover", explanation: "addEventListener attaches handlers: click, input, mouseover, change, etc.", topicId: "events-dom" },
    { type: "fill", question: "The _____ property contains the entire page structure as a tree.", answer: "DOM", explanation: "The Document Object Model represents HTML as a navigable tree in JavaScript.", topicId: "events-dom" },
    { type: "mcq", question: "document.getElementById('id') returns:", options: ["An array", "One element with that id", "All ids", "undefined"], answer: "One element with that id", explanation: "getElementById targets one element by unique id; returns null if not found.", topicId: "events-dom" },
    { type: "fill", question: "The _____ method finds the first element matching a CSS selector.", answer: "querySelector", explanation: "querySelector('.class') or querySelector('#id') returns first match or null.", topicId: "events-dom" }
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
const quizStats = document.getElementById("quizStats");
const quizProgressBar = document.getElementById("quizProgressBar");
const quizProgressFill = document.getElementById("quizProgressFill");
const quizProgressText = document.getElementById("quizProgressText");
const quizStreak = document.getElementById("quizStreak");
const quizScoreDisplay = document.getElementById("quizScoreDisplay");
const quizArea = document.getElementById("quizArea");
const quizResults = document.getElementById("quizResults");
const finalScoreEl = document.getElementById("finalScore");
const scoreBreakdownEl = document.getElementById("scoreBreakdown");
const performanceMessageEl = document.getElementById("performanceMessage");
const restartQuizBtn = document.getElementById("restartQuiz");
const reviewMistakesBtn = document.getElementById("reviewMistakes");
const questionCategoryEl = document.getElementById("questionCategory");
const questionTypeEl = document.getElementById("questionType");

let activeQuizChapter = "";
let activeQuestions = [];
let activeQuestionIndex = 0;
let activeScore = 0;
let currentStreak = 0;
let wrongAnswers = [];
let isReviewMode = false;

function renderQuizChapterOptions() {
  chapters.forEach((ch) => {
    const option = document.createElement("option");
    option.value = ch.id;
    option.textContent = `${ch.title} (${quizzes[ch.id]?.length || 0} questions)`;
    quizChapterSelect.appendChild(option);
  });
}

function getTopicName(topicId) {
  const topic = chapters.flatMap((ch) => ch.topics).find((t) => t.id === topicId);
  return topic ? topic.term : topicId;
}

function getTypeLabel(type) {
  const labels = { mcq: "Multiple Choice", tf: "True / False", fill: "Fill in Blank" };
  return labels[type] || type.toUpperCase();
}

function getTypeIcon(type) {
  const icons = { mcq: "🔘", tf: "☑️", fill: "✏️" };
  return icons[type] || "❓";
}

function updateQuizProgress() {
  const total = activeQuestions.length;
  const progress = ((activeQuestionIndex + 1) / total) * 100;
  
  quizProgressText.textContent = `${activeQuestionIndex + 1} / ${total}`;
  quizScoreDisplay.textContent = `${activeScore} / ${total}`;
  quizStreak.textContent = currentStreak;
  quizProgressFill.style.width = `${progress}%`;
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
  currentStreak = 0;
  wrongAnswers = [];
  isReviewMode = false;

  // Show quiz UI, hide results
  quizStats.style.display = "flex";
  quizProgressBar.style.display = "block";
  quizArea.style.display = "block";
  quizResults.style.display = "none";
  quizChapterSelect.parentElement.style.display = "none";
  scoreHistoryEl.style.display = "none";
  
  nextQuestionBtn.style.display = "none";
  updateQuizProgress();
  renderQuizQuestion();
}

function renderQuizQuestion() {
  quizFeedbackEl.innerHTML = "";
  quizFeedbackEl.className = "quiz-feedback";
  quizOptionsEl.innerHTML = "";
  
  // Animate card entrance
  const quizCard = document.querySelector(".quiz-card");
  if (quizCard) {
    quizCard.style.animation = "none";
    quizCard.offsetHeight; // Trigger reflow
    quizCard.style.animation = "slideIn 0.3s ease-out";
  }

  if (activeQuestionIndex >= activeQuestions.length) {
    finishQuiz();
    return;
  }

  const q = activeQuestions[activeQuestionIndex];
  const topicName = getTopicName(q.topicId);
  
  // Update category and type badges
  questionCategoryEl.textContent = topicName;
  questionTypeEl.innerHTML = `${getTypeIcon(q.type)} ${getTypeLabel(q.type)}`;
  
  quizQuestionEl.textContent = q.question;

  if (q.type === "fill") {
    const wrapper = document.createElement("div");
    wrapper.className = "fill-blank-wrapper";
    
    const input = document.createElement("input");
    input.type = "text";
    input.className = "fill-blank-input";
    input.placeholder = "Type your answer here...";
    input.setAttribute("aria-label", "Fill in the blank answer");
    
    // Allow Enter key to submit
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const userAnswer = input.value.trim();
        checkAnswer(userAnswer, q.answer);
      }
    });

    const submit = document.createElement("button");
    submit.textContent = "Submit Answer";
    submit.className = "btn btn-primary btn-lg";

    submit.addEventListener("click", () => {
      const userAnswer = input.value.trim();
      checkAnswer(userAnswer, q.answer);
    });

    wrapper.appendChild(input);
    wrapper.appendChild(submit);
    quizOptionsEl.appendChild(wrapper);
    
    // Focus input
    setTimeout(() => input.focus(), 100);
    return;
  }

  const options = q.type === "tf" ? ["True", "False"] : q.options;
  const optionsGrid = document.createElement("div");
  optionsGrid.className = "quiz-options-grid";
  
  options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-text">${opt}</span>`;
    btn.addEventListener("click", () => checkAnswer(opt, q.answer));
    optionsGrid.appendChild(btn);
  });
  
  quizOptionsEl.appendChild(optionsGrid);
}

function normalizeAnswer(value) {
  return String(value).trim().toLowerCase();
}

function checkAnswer(userAnswer, correctAnswer) {
  const q = activeQuestions[activeQuestionIndex];
  const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer);

  // Disable all options
  const allButtons = quizOptionsEl.querySelectorAll("button");
  allButtons.forEach((btn) => btn.disabled = true);

  if (isCorrect) {
    activeScore += 1;
    currentStreak += 1;
    quizFeedbackEl.className = "quiz-feedback correct";
    quizFeedbackEl.innerHTML = `
      <div class="feedback-header">
        <span class="feedback-icon">🎉</span>
        <span class="feedback-title">Correct!</span>
        ${currentStreak > 2 ? `<span class="streak-badge">🔥 ${currentStreak} streak!</span>` : ""}
      </div>
      <p class="feedback-explanation">${q.explanation}</p>
    `;
    
    // Highlight correct option
    allButtons.forEach(btn => {
      if (btn.textContent.includes(userAnswer) || 
          (q.type === "fill" && btn.classList.contains("btn-primary"))) {
        btn.classList.add("correct-selected");
      }
    });
  } else {
    currentStreak = 0;
    wrongAnswers.push(q);
    bumpWeakTopic(q.topicId);
    
    quizFeedbackEl.className = "quiz-feedback incorrect";
    quizFeedbackEl.innerHTML = `
      <div class="feedback-header">
        <span class="feedback-icon">❌</span>
        <span class="feedback-title">Not quite</span>
      </div>
      <p class="correct-answer">Correct answer: <strong>${correctAnswer}</strong></p>
      <p class="feedback-explanation">${q.explanation}</p>
    `;
    
    // Highlight correct and wrong options
    allButtons.forEach(btn => {
      const btnText = btn.querySelector(".option-text")?.textContent || btn.textContent;
      if (normalizeAnswer(btnText) === normalizeAnswer(correctAnswer)) {
        btn.classList.add("correct-answer-highlight");
      } else if (normalizeAnswer(btnText) === normalizeAnswer(userAnswer)) {
        btn.classList.add("wrong-answer-highlight");
      }
    });
  }

  updateQuizProgress();
  nextQuestionBtn.style.display = "inline-flex";
  nextQuestionBtn.innerHTML = activeQuestionIndex < activeQuestions.length - 1 
    ? `Next Question →` 
    : `See Results 🎉`;
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

  // Hide quiz area, show results
  quizArea.style.display = "none";
  quizStats.style.display = "none";
  quizProgressBar.style.display = "none";
  nextQuestionBtn.style.display = "none";
  quizResults.style.display = "block";

  // Animate score
  finalScoreEl.textContent = "0%";
  let currentDisplay = 0;
  const increment = scorePercent / 50;
  const scoreAnimation = setInterval(() => {
    currentDisplay += increment;
    if (currentDisplay >= scorePercent) {
      currentDisplay = scorePercent;
      clearInterval(scoreAnimation);
    }
    finalScoreEl.textContent = `${Math.round(currentDisplay)}%`;
    
    // Color based on score
    if (currentDisplay >= 80) finalScoreEl.style.color = "#22c55e";
    else if (currentDisplay >= 60) finalScoreEl.style.color = "#f59e0b";
    else finalScoreEl.style.color = "#ef4444";
  }, 20);

  // Score breakdown
  scoreBreakdownEl.innerHTML = `
    <div class="breakdown-item">
      <span class="breakdown-label">Correct</span>
      <span class="breakdown-value correct">${activeScore}</span>
    </div>
    <div class="breakdown-item">
      <span class="breakdown-label">Incorrect</span>
      <span class="breakdown-value incorrect">${total - activeScore}</span>
    </div>
    <div class="breakdown-item">
      <span class="breakdown-label">Total</span>
      <span class="breakdown-value">${total}</span>
    </div>
  `;

  // Performance message
  let message = "";
  let emoji = "";
  if (scorePercent >= 90) {
    emoji = "🏆";
    message = "Outstanding! You're a Web Technologies master!";
  } else if (scorePercent >= 80) {
    emoji = "⭐";
    message = "Great job! You really know your stuff!";
  } else if (scorePercent >= 60) {
    emoji = "👍";
    message = "Good work! Keep studying to improve further.";
  } else {
    emoji = "📚";
    message = "Keep practicing! Review the topics and try again.";
  }
  performanceMessageEl.innerHTML = `${emoji} ${message}`;

  // Show review button only if there were mistakes
  reviewMistakesBtn.style.display = wrongAnswers.length > 0 ? "inline-flex" : "none";

  renderScoreHistory(activeQuizChapter);
  refreshDashboard();
}

function restartQuiz() {
  quizChapterSelect.parentElement.style.display = "flex";
  quizResults.style.display = "none";
  scoreHistoryEl.style.display = "block";
  quizStats.style.display = "none";
  quizProgressBar.style.display = "none";
  quizArea.style.display = "none";
}

function reviewMistakes() {
  if (wrongAnswers.length === 0) return;
  
  isReviewMode = true;
  activeQuestions = [...wrongAnswers];
  activeQuestionIndex = 0;
  activeScore = 0;
  currentStreak = 0;
  wrongAnswers = [];

  quizResults.style.display = "none";
  quizStats.style.display = "flex";
  quizProgressBar.style.display = "block";
  quizArea.style.display = "block";
  
  // Update progress for review mode
  quizProgressText.textContent = `Review 1 / ${activeQuestions.length}`;
  
  updateQuizProgress();
  renderQuizQuestion();
}

function renderScoreHistory(chapterId) {
  const history = studyState.quizHistory[chapterId] || [];
  if (!history.length) {
    scoreHistoryEl.innerHTML = "";
    return;
  }

  const items = history.slice(-5).reverse().map((attempt, index) => {
    const when = new Date(attempt.date).toLocaleDateString();
    const isLatest = index === 0;
    const scoreClass = attempt.percent >= 80 ? "high" : attempt.percent >= 60 ? "medium" : "low";
    return `
      <li class="score-item ${scoreClass} ${isLatest ? "latest" : ""}">
        <span class="score-date">${when}</span>
        <span class="score-value">${attempt.score}/${attempt.total}</span>
        <span class="score-percent">${attempt.percent}%</span>
        ${isLatest ? "<span class='latest-badge'>Latest</span>" : ""}
      </li>
    `;
  }).join("");

  scoreHistoryEl.innerHTML = `
    <h3>📈 Score History</h3>
    <ul class="score-list">${items}</ul>
  `;
}

startQuizBtn.addEventListener("click", startQuiz);
nextQuestionBtn.addEventListener("click", () => {
  activeQuestionIndex += 1;
  nextQuestionBtn.style.display = "none";
  renderQuizQuestion();
  updateQuizProgress();
});
restartQuizBtn.addEventListener("click", restartQuiz);
reviewMistakesBtn.addEventListener("click", reviewMistakes);

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
