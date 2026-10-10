(function () {
  'use strict';

  var EMAIL = 'kalishbakhan456@gmail.com';

  /* ---------- Assistant knowledge ----------
     Suggested questions (suggested: true) and a few extra answers that keep the
     assistant useful when the AI service is not reachable. Every answer comes from
     Alishba's resumes, certificates and project READMEs. */
  var ROLES = [
    { id: 'ai', label: 'AI Developer', hint: 'RAG, ML projects, model results' },
    { id: 'fs', label: 'Full Stack Developer', hint: 'React, Java, .NET, databases' },
    { id: 'qa', label: 'QA Tester', hint: 'Cypress, Postman, xUnit' }
  ];

  var BANK = [
    { role: 'ai', suggested: true, q: 'What is FinBot and how does it work?',
      a: 'FinBot is a chatbot that answers plain-English questions about the 10-K reports public companies file with the SEC. It pulls the filings from SEC EDGAR, stores them in ChromaDB and finds the passages that match a question. Then openai/gpt-oss-120b, running on Groq, writes the answer from those passages. It is built with LangChain and runs as a Streamlit app.',
      src: 'FinBot repository and AI resume', keys: ['finbot', '10-k', '10k', 'rag', 'edgar', 'retrieval', 'chroma', 'langchain', 'streamlit'] },
    { role: 'ai', suggested: true, q: 'What machine learning projects has she built?',
      a: 'Besides FinBot, three. A spam classifier that reached 98.2% accuracy with Logistic Regression. A K-Means project that split 200 mall customers into 5 segments. And a cats vs dogs image classifier built by fine-tuning ResNet18 with PyTorch.',
      src: 'AI resume and project READMEs', keys: ['machine learning', 'ml project', 'ai project', 'projects', 'models', 'built'] },
    { role: 'ai', suggested: true, q: 'Which AI and data tools does she use?',
      a: 'Python is her main language. For machine learning she uses scikit-learn and PyTorch, with pandas, NumPy, Matplotlib, Seaborn and Plotly for data work. For retrieval chatbots she uses LangChain, ChromaDB and Streamlit, with a language model on Groq. She also uses prompt engineering across her projects.',
      src: 'AI resume', keys: ['tools', 'tech stack', 'python', 'pytorch', 'scikit', 'libraries', 'skills', 'prompt'] },

    { role: 'fs', suggested: true, q: 'What full stack projects has she built?',
      a: 'A Foodpanda clone for ordering food online, built with Java Spring Boot, MySQL and React. Tutor Connect, a platform where students find and book tutors. A Library Management System in C# and SQL. And an online shopping website in PHP, HTML and CSS.',
      src: 'Resume', keys: ['full stack', 'fullstack', 'full-stack', 'foodpanda', 'tutor', 'web app', 'website', 'library', 'shopping'] },
    { role: 'fs', suggested: true, q: 'What did she build in the Commonwealth Bank simulation?',
      a: 'She worked on the CommBank Goal Tracker app. She modified an existing .NET backend and a React and Redux frontend, handled the client change requests, wrote tests for her code and submitted her work as a pull request. Both repositories are on her GitHub.',
      src: 'Forage certificate and GitHub', keys: ['commonwealth', 'commbank', 'commonwealth bank', '.net', 'dotnet', 'goal tracker'] },
    { role: 'fs', suggested: true, q: 'Which full stack technologies does she know?',
      a: 'On the frontend: React, Redux, TypeScript, JavaScript, HTML and CSS. On the backend: Java with Spring Boot, C# with .NET, and Node.js. For data she uses MySQL, SQL and MongoDB, and she also uses Docker and Git. She has built mobile apps with Flutter too.',
      src: 'Full stack resume', keys: ['technologies', 'frontend', 'backend', 'react', 'java', 'spring', 'node', 'database', 'mysql', 'mongodb', 'docker', 'stack'] },

    { role: 'qa', suggested: true, q: 'What testing experience does she have?',
      a: 'She wrote automated Cypress end-to-end tests for two of her own apps, covering flows like search, cart, checkout and booking. In the Commonwealth Bank simulation she wrote xUnit tests for a .NET backend and checked API endpoints with Postman. She also does manual and exploratory testing.',
      src: 'QA resume and older resume', keys: ['testing', 'tester', 'qa', 'quality', 'test experience', 'manual', 'exploratory', 'unit test'] },
    { role: 'qa', suggested: true, q: 'Which testing tools does she use?',
      a: 'Cypress for end-to-end tests, xUnit for unit tests, and Postman for API testing. She also writes test cases and reports bugs with clear steps to reproduce them.',
      src: 'QA resume', keys: ['testing tools', 'cypress', 'postman', 'xunit', 'automation', 'e2e', 'end-to-end', 'bug'] },
    { role: 'qa', suggested: true, q: 'Has she tested a chatbot?',
      a: 'Yes. In the BCG X simulation she tested the financial chatbot she built. She wrote test scenarios for different kinds of user questions and checked the answers against the data from the filings.',
      src: 'QA resume', keys: ['test a chatbot', 'tested a chatbot', 'chatbot test', 'validate', 'bcg'] },

    { q: 'Where did she study?',
      a: 'Alishba has a B.Sc. in Software Engineering from the University of Poonch Rawalakot (October 2020 to July 2025) with a CGPA of 3.5 out of 4.0.',
      src: 'Resume', keys: ['study', 'studied', 'education', 'degree', 'university', 'cgpa', 'graduate', 'college', 'gpa'] },
    { q: 'How can I contact her?',
      a: 'Email is best: ' + EMAIL + '. She is also on LinkedIn (linkedin.com/in/alishbashafiq332) and GitHub (github.com/Alishba-12).',
      src: 'Contact details', keys: ['contact', 'email', 'reach', 'linkedin', 'github', 'message', 'get in touch'] },
    { q: 'Where is she based?',
      a: 'Alishba is based in Islamabad, Pakistan.',
      src: 'Resume', keys: ['where is she', 'based', 'location', 'live', 'islamabad', 'pakistan', 'city'] },
    { q: 'What job simulations has she completed?',
      a: 'Five Forage job simulations in 2026: BCG X (GenAI), Wells Fargo, Skyscanner, Walmart Global Tech and Commonwealth Bank. They are self-paced virtual programs, not paid jobs, and each one has a certificate on this page.',
      src: 'Forage certificates', keys: ['simulation', 'forage', 'certificate', 'walmart', 'wells fargo', 'skyscanner', 'virtual'] },
    { q: 'Does she have work experience?',
      a: 'Alishba is a fresher. Her experience on this page comes from university projects, apps she built herself and five job simulations.',
      src: 'Resume', keys: ['experience', 'fresher', 'years', 'employed', 'internship', 'worked'] },
    { q: 'Has she built mobile apps?',
      a: 'Yes. She built two Flutter apps with Dart. The medication assistance app sends reminders for medicine timings and check-up dates, keeps a medicine list and shows the nearest pharmacy. The notepad clone saves, edits and deletes notes, and has tasks with notifications. In the Skyscanner simulation she also extended an Android flight itinerary app with the Backpack design components.',
      src: 'Alishba and GitHub', keys: ['mobile', 'flutter', 'dart', 'android', 'app', 'medication', 'medicine', 'notepad', 'notes'] },
    { q: 'What is the Library Management System?',
      a: 'It is a system for managing library records, built with C# and SQL. It keeps track of books and members and handles issuing and returning books. The librarian is the admin, who adds students and sends them an in-app message when a book is due back.',
      src: 'Alishba', keys: ['library', 'librarian', 'issuing', 'books', 'members'] },
    { q: 'What is the Online Shopping Website?',
      a: 'It is a shopping website for tech products, built with PHP, HTML and CSS. Visitors can browse products, add them to a cart, check out and pick a payment option.',
      src: 'Alishba', keys: ['shopping', 'online shop', 'cart', 'checkout', 'payment', 'php', 'tech products'] },
    { q: 'What is Tutor Connect?',
      a: 'It is a platform where students search and compare tutors by subject and book sessions with flexible timings. It uses Java Spring Boot, MySQL, React and Docker, and she wrote Cypress tests for sign-up, tutor search and booking.',
      src: 'Resume', keys: ['tutor', 'tutor connect', 'tutors', 'booking'] },
    { q: 'Does FinBot use a language model?',
      a: 'Yes. FinBot sends the passages it retrieves to openai/gpt-oss-120b running on Groq, and the model writes the answer.',
      src: 'Alishba', keys: ['llm', 'gpt', 'groq', 'language model', 'openai', 'generate'] },
    { q: 'How accurate is her spam classifier?',
      a: 'Logistic Regression reached 98.2% accuracy on the UCI SMS Spam Collection, with a spam F1-score of 0.97 and an AUC-ROC of 0.99.',
      src: 'Spam classifier README', keys: ['spam', 'accuracy', 'sms', 'f1', 'classifier'] },
    { q: 'What did the K-Means project find?',
      a: 'It split 200 mall customers into 5 segments using age, annual income and spending score. Two of the segments are high-value premium customers and budget shoppers.',
      src: 'K-Means README and resume', keys: ['kmeans', 'k-means', 'cluster', 'segment', 'customer', 'mall'] },
    { q: 'What is the cats vs dogs project?',
      a: 'It is an image classifier that tells cats from dogs. She fine-tuned a pretrained ResNet18 with transfer learning in PyTorch and trained it in Google Colab.',
      src: 'AI resume', keys: ['cats', 'dogs', 'image', 'resnet', 'cnn', 'vision', 'transfer'] },
    { q: 'Is she open to work?',
      a: 'Yes. She is looking for her first role in AI and machine learning, and she also applies for full stack and QA roles.',
      src: 'Alishba', keys: ['open to work', 'available', 'looking', 'hiring', 'opportunity', 'job search', 'role'] },
    { q: 'Can I get her CV?',
      a: 'Yes. There is a Download CV button at the top of this page. It opens her CV as a PDF. You can also email her at ' + EMAIL + '.',
      src: 'Contact details', keys: ['cv', 'resume', 'curriculum'] }
  ];

  /* ---------- Helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (text) { n.textContent = text; }
    return n;
  }
  function icon(id) {
    var ns = 'http://www.w3.org/2000/svg';
    var s = document.createElementNS(ns, 'svg');
    s.setAttribute('class', 'ico');
    s.setAttribute('aria-hidden', 'true');
    var u = document.createElementNS(ns, 'use');
    u.setAttribute('href', '#' + id);
    s.appendChild(u);
    return s;
  }
  function suggestedFor(role) {
    return BANK.filter(function (b) { return b.suggested && b.role === role; });
  }
  function match(text) {
    var low = text.toLowerCase();
    var best = null;
    BANK.forEach(function (b) {
      var score = 0;
      b.keys.forEach(function (k) { if (low.indexOf(k) !== -1) { score += 1; } });
      if (score > 0 && (!best || score > best.score)) { best = { entry: b, score: score }; }
    });
    return best;
  }

  /* ---------- Chat ---------- */
  var chat = $('chat');
  var form = $('askForm');
  var input = $('askInput');
  var panel = $('chatPanel');
  var body = $('panelBody');
  var statusEl = $('chatStatus');
  var micBtn = $('micBtn');
  var speaking = false;

  function setStatus(msg) { statusEl.textContent = msg || ''; }

  function openChat() {
    if (chat.getAttribute('data-open') === 'true') { return; }
    chat.setAttribute('data-open', 'true');
    panel.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    renderRoles();
  }
  function closeChat() {
    chat.setAttribute('data-open', 'false');
    panel.hidden = true;
    input.setAttribute('aria-expanded', 'false');
    stopSpeech();
    setStatus('');
  }

  function renderRoles() {
    stopSpeech();
    body.textContent = '';
    body.appendChild(el('p', 'step-label', 'Choose the role you are hiring for'));
    var ul = el('ul', 'opt-list');
    ROLES.forEach(function (r) {
      var li = el('li');
      var b = el('button', 'opt');
      b.type = 'button';
      var main = el('span', 'opt-main');
      main.appendChild(el('span', 'opt-title opt-title--serif', r.label));
      main.appendChild(el('span', 'opt-hint', r.hint));
      b.appendChild(main);
      b.appendChild(icon('i-arrow'));
      b.addEventListener('click', function () { renderQuestions(r.id); });
      li.appendChild(b);
      ul.appendChild(li);
    });
    body.appendChild(ul);
  }

  function backButton(label, fn) {
    var b = el('button', 'link-btn');
    b.type = 'button';
    b.appendChild(icon('i-back'));
    b.appendChild(document.createTextNode(label));
    b.addEventListener('click', fn);
    return b;
  }

  function questionList(items, onPick) {
    var ul = el('ul', 'opt-list');
    items.forEach(function (it) {
      var li = el('li');
      var b = el('button', 'opt');
      b.type = 'button';
      b.appendChild(el('span', 'opt-title', it.q));
      b.appendChild(icon('i-arrow'));
      b.addEventListener('click', function () { onPick(it); });
      li.appendChild(b);
      ul.appendChild(li);
    });
    return ul;
  }

  function roleLabel(id) {
    var r = ROLES.filter(function (x) { return x.id === id; })[0];
    return r ? r.label : '';
  }

  function renderQuestions(roleId) {
    stopSpeech();
    body.textContent = '';
    body.appendChild(backButton('All roles', renderRoles));
    body.appendChild(el('p', 'step-label', roleLabel(roleId) + ': pick a question'));
    body.appendChild(questionList(suggestedFor(roleId), function (it) {
      renderAnswer({ q: it.q, a: it.a, src: it.src, role: roleId });
    }));
  }

  function renderAnswer(o) {
    stopSpeech();
    body.textContent = '';
    body.appendChild(el('p', 'answer-q', o.q));
    var t = el('p', 'answer-text', o.a);
    body.appendChild(t);
    if (o.src) { body.appendChild(el('p', 'answer-src', 'Source: ' + o.src)); }

    var actions = el('div', 'answer-actions');
    if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
      var listen = el('button', 'link-btn');
      listen.type = 'button';
      listen.appendChild(icon('i-speaker'));
      var lt = document.createTextNode('Listen');
      listen.appendChild(lt);
      listen.addEventListener('click', function () {
        if (speaking) { stopSpeech(); lt.nodeValue = 'Listen'; return; }
        speak(o.a, function () { lt.nodeValue = 'Listen'; });
        lt.nodeValue = 'Stop';
      });
      actions.appendChild(listen);
    }
    if (o.role) {
      actions.appendChild(backButton('More ' + roleLabel(o.role) + ' questions', function () { renderQuestions(o.role); }));
    }
    actions.appendChild(backButton('All roles', renderRoles));
    body.appendChild(actions);

    if (o.role) {
      var rest = suggestedFor(o.role).filter(function (b) { return b.q !== o.q; });
      if (rest.length) {
        var more = el('div', 'more');
        more.appendChild(el('p', 'step-label', 'You might also ask'));
        more.appendChild(questionList(rest, function (it) {
          renderAnswer({ q: it.q, a: it.a, src: it.src, role: o.role });
        }));
        body.appendChild(more);
      }
    }
  }

  function renderLoading(q) {
    body.textContent = '';
    body.appendChild(el('p', 'answer-q', q));
    body.appendChild(el('p', 'answer-text', 'Thinking...'));
  }

  function askApi(q) {
    var ctl = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = ctl ? setTimeout(function () { ctl.abort(); }, 20000) : null;
    return fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: q }),
      signal: ctl ? ctl.signal : undefined
    }).then(function (r) {
      if (timer) { clearTimeout(timer); }
      if (!r.ok) { throw new Error('status ' + r.status); }
      return r.json();
    }).then(function (j) {
      if (!j || typeof j.answer !== 'string' || !j.answer.trim()) { throw new Error('empty'); }
      return j.answer.trim();
    });
  }

  function ask(text) {
    var q = (text || '').trim();
    if (!q) { return; }
    openChat();
    var m = match(q);
    if (m && m.score >= 2) {
      renderAnswer({ q: q, a: m.entry.a, src: m.entry.src });
      return;
    }
    renderLoading(q);
    askApi(q).then(function (a) {
      renderAnswer({ q: q, a: a, src: 'AI answer written from Alishba\'s facts file. Check anything important with her directly.' });
    }).catch(function () {
      if (m) {
        renderAnswer({ q: q, a: m.entry.a, src: m.entry.src });
      } else {
        renderAnswer({ q: q, a: 'I do not know that one yet. You can ask Alishba directly at ' + EMAIL + '.', src: 'Not in her facts file' });
      }
    });
  }

  /* Voice: speak answers and listen to questions, where the browser supports it */
  function speak(text, done) {
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.onend = function () { speaking = false; if (done) { done(); } };
      u.onerror = u.onend;
      speaking = true;
      window.speechSynthesis.speak(u);
    } catch (e) { speaking = false; }
  }
  function stopSpeech() {
    if (speaking && 'speechSynthesis' in window) { try { window.speechSynthesis.cancel(); } catch (e) { /* ignore */ } }
    speaking = false;
  }

  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR && micBtn) {
    micBtn.hidden = false;
    var rec = null;
    var listening = false;
    micBtn.addEventListener('click', function () {
      if (listening && rec) { rec.stop(); return; }
      try {
        rec = new SR();
        rec.lang = 'en-US';
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        rec.onstart = function () { listening = true; micBtn.setAttribute('aria-pressed', 'true'); setStatus('Listening. Ask your question.'); };
        rec.onresult = function (e) {
          var t = e.results[0][0].transcript;
          input.value = t;
          setStatus('');
          ask(t);
        };
        rec.onerror = function (e) {
          setStatus(e.error === 'not-allowed' ? 'Microphone access is blocked in this browser.' : 'Voice input did not work. You can type instead.');
        };
        rec.onend = function () { listening = false; micBtn.setAttribute('aria-pressed', 'false'); };
        rec.start();
      } catch (err) { setStatus('Voice input is not available here. You can type instead.'); }
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = input.value;
    input.value = '';
    ask(v);
  });
  form.addEventListener('click', openChat);
  input.addEventListener('focus', openChat);
  $('chatClose').addEventListener('click', function () { closeChat(); input.focus({ preventScroll: true }); });
  chat.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeChat(); } });

  Array.prototype.forEach.call(document.querySelectorAll('[data-open-chat]'), function (b) {
    b.addEventListener('click', function () {
      chat.scrollIntoView({ behavior: 'smooth', block: 'center' });
      input.focus({ preventScroll: true });
      openChat();
    });
  });

  /* ---------- Header menu ---------- */
  var top = document.querySelector('.top');
  var menuBtn = $('menuBtn');
  menuBtn.addEventListener('click', function () {
    var open = top.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  Array.prototype.forEach.call(document.querySelectorAll('.nav a'), function (a) {
    a.addEventListener('click', function () {
      top.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Certificates ---------- */
  var CERTS = {
    'bcg-x': { title: 'BCG X, GenAI Job Simulation', date: '27 February 2026' },
    'commonwealth-bank': { title: 'Commonwealth Bank, Software Engineering Job Simulation', date: '31 March 2026' },
    'skyscanner': { title: 'Skyscanner, Software Engineering Job Simulation', date: '26 March 2026' },
    'walmart': { title: 'Walmart Global Tech, Advanced Software Engineering Job Simulation', date: '31 March 2026' },
    'wells-fargo': { title: 'Wells Fargo, Software Engineering Job Simulation', date: '26 February 2026' }
  };
  var dlg = $('certDialog');
  var certImg = $('certImg');
  Array.prototype.forEach.call(document.querySelectorAll('[data-cert]'), function (b) {
    b.addEventListener('click', function () {
      var id = b.getAttribute('data-cert');
      var c = CERTS[id];
      if (!c) { return; }
      certImg.src = 'certificates/' + id + '.png';
      certImg.alt = 'Certificate of completion for Alishba Shafiq: ' + c.title + ', completed ' + c.date;
      $('certTitle').textContent = c.title;
      $('certPdf').href = 'certificates/' + id + '.pdf';
      if (typeof dlg.showModal === 'function') { dlg.showModal(); } else { dlg.setAttribute('open', ''); }
    });
  });
  $('certClose').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) { dlg.close(); } });

  /* ---------- Copy email ---------- */
  var copyBtn = $('copyEmail');
  var copyLabel = $('copyLabel');
  copyBtn.addEventListener('click', function () {
    function done() { copyLabel.textContent = 'Copied'; setTimeout(function () { copyLabel.textContent = 'Copy email address'; }, 2200); }
    function fallback() {
      var r = document.createRange();
      r.selectNodeContents($('emailLink'));
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      copyLabel.textContent = 'Press copy on your keyboard';
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(done, fallback);
    } else { fallback(); }
  });

  /* ---------- Scroll reveal ---------- */
  (function reveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.rv'));
    if (!items.length) { return; }
    items.forEach(function (n, i) {
      var sib = n.parentNode ? Array.prototype.indexOf.call(n.parentNode.children, n) : i;
      n.style.setProperty('--d', Math.min(sib, 5) * 90 + 'ms');
    });
    if (!('IntersectionObserver' in window)) { items.forEach(function (n) { n.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (n) { io.observe(n); });
  }());

  /* ---------- Floating launcher hides while the hero assistant is on screen ---------- */
  (function launcher() {
    var btn = document.querySelector('.launcher');
    if (!btn || !('IntersectionObserver' in window)) { return; }
    new IntersectionObserver(function (entries) {
      btn.classList.toggle('is-hidden', entries[0].isIntersecting);
    }, { threshold: 0.35 }).observe(chat);
  }());

  /* ---------- Highlight the current section in the menu ---------- */
  (function spy() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    if (!('IntersectionObserver' in window)) { return; }
    var order = ['home', 'work', 'simulations', 'more', 'about', 'contact'];
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) { return; }
        var id = e.target.id === 'more' ? 'work' : e.target.id;
        links.forEach(function (a) { a.classList.toggle('is-on', a === map[id]); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    order.forEach(function (id) { var n = document.getElementById(id); if (n) { io.observe(n); } });
  }());
}());
