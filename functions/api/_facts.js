// Everything the assistant is allowed to say about Alishba.
// Source: her resumes, her Forage certificates and her GitHub repositories.
// To change an answer, edit this file and redeploy.
export default `
WHO
- Alishba Shafiq, AI / machine learning developer, based in Islamabad, Pakistan.
- B.Sc. Software Engineering, University of Poonch Rawalakot, October 2020 to July 2025, CGPA 3.5 out of 4.0.
- She is a fresher looking for her first role in AI and machine learning. She also applies for full stack and QA roles.
- Her experience comes from university projects, apps she built herself and five Forage job simulations. The pictures on the project cards are concept illustrations made with AI chatbots, not screenshots of the real apps. The simulations are self-paced, unpaid virtual programs, not employment.

CONTACT
- Email: kalishbakhan456@gmail.com
- LinkedIn: linkedin.com/in/alishbashafiq332
- GitHub: github.com/Alishba-12

FEATURED PROJECTS
- RAG 10-K FinBot: a chatbot that answers plain-English questions about SEC 10-K filings. It pulls filings from SEC EDGAR, chunks and stores them in ChromaDB, and retrieves the passages that match a question. The answer is written by the language model openai/gpt-oss-120b running on Groq, from the retrieved passages. Built with Python, LangChain and Streamlit. GitHub: github.com/Alishba-12/finbot-10k-analyst
- K-Means Customer Segmentation: groups 200 mall customers into 5 segments using age, annual income and spending score. The number of clusters was chosen with the elbow method and the silhouette score. Each segment has a short business profile, for example high-value premium customers and budget shoppers. Python, scikit-learn, pandas, NumPy, Matplotlib, Seaborn, Plotly. Dataset: Kaggle Mall Customer Segmentation data. GitHub: github.com/Alishba-12/K-Means_Customer_Segmentation
- BCG X Financial Chatbot: built in the BCG X GenAI job simulation. She extracted key metrics from SEC 10-K and 10-Q filings with Python and pandas, and built a rule-based chatbot that interprets user questions and returns structured financial facts. The code is not on GitHub.

OTHER MACHINE LEARNING PROJECTS
- Spam SMS and Email Classifier: Logistic Regression reached 98.2% accuracy on the UCI SMS Spam Collection, spam F1-score 0.97, AUC-ROC 0.99. Evaluated with precision, recall and a confusion matrix. The trained model is saved for reuse. Python, scikit-learn, NLTK, pandas, Google Colab. GitHub: github.com/Alishba-12/AI-ML_02_SpamSMSClassifier_byte
- Cats vs Dogs Image Classifier: a CNN built by fine-tuning a pretrained ResNet18 with transfer learning in PyTorch, trained and evaluated in Google Colab. The code is not public. No accuracy figure is shared for it.

FULL STACK AND OTHER PROJECTS (no public code)
- Foodpanda Clone: a food delivery web app where customers browse restaurant menus, place orders and track them. Java Spring Boot and MySQL backend, React, HTML, CSS, JavaScript, Docker. She wrote Cypress end-to-end tests for restaurant search, cart, checkout and order tracking.
- Tutor Connect: a platform where students search and compare tutors by subject and book sessions with flexible scheduling. Java Spring Boot and MySQL backend, React, HTML, CSS, JavaScript, Docker. Cypress tests cover sign-up, tutor search and booking.
- Library Management System: manages library records with C# and SQL. It tracks books and members and handles issuing and returning books. The librarian is the admin, who adds students and sends them an in-app message when a book is due back.
- Online Shopping Website: a shopping website for tech products built with PHP, HTML and CSS. Visitors can browse products, add them to a cart, check out and pick a payment option.
- Personalized Medication Assistance app: a Flutter and Dart mobile app that helps a person look after their own medicines. It sends reminders for medicine timings and check-up dates, keeps a medicine list and shows the nearest pharmacy.
- Notepad clone: a Flutter and Dart notes app. It saves, edits and deletes notes, and has tasks with notifications when a task is due.

JOB SIMULATIONS (Forage, 2026, each has a certificate on the site)
- BCG X, GenAI Job Simulation, completed 27 February 2026. Tasks: data extraction and initial analysis; developing an AI-powered financial chatbot.
- Wells Fargo, Software Engineering Job Simulation, completed 26 February 2026. Tasks: creating a data model; implement a data model. She analysed requirements for a financial portfolio management system and produced an entity relationship diagram in IntelliJ, published on GitHub. Repo: github.com/Alishba-12/wells-fargo-task-2 (starter project for task 2).
- Skyscanner, Software Engineering Job Simulation, completed 26 March 2026. Tasks: create a Backpack React web app; create a microservice; create a mobile flight itinerary; build a user-friendly platform. She built a Dropwizard microservice for car rental and hotel search (routing, request parsing, JSON) and extended an Android flight itinerary app with the Backpack UI components. Repos: github.com/Alishba-12/flight-information-app (Android app) and github.com/Alishba-12/hoen-scanner (backend, a fork of the starter code).
- Walmart Global Tech, Advanced Software Engineering Job Simulation, completed 31 March 2026. Tasks: advanced data structures; software architecture; relational database design; data munging. She wrote a custom heap data structure in Java to prioritise shipments and designed a normalised relational database schema. Repo: github.com/Alishba-12/forage-walmart-task-4 (starter project for task 4).
- Commonwealth Bank, Software Engineering Job Simulation, completed 31 March 2026. Tasks: modify an existing .NET backend; modify an existing React/Redux frontend; modify the client's requests; cover your code; create a pull request. She worked on the CommBank Goal Tracker app: extended a C# .NET backend with MongoDB, built the matching React, Redux and TypeScript frontend, checked endpoints with Postman, wrote xUnit tests and submitted a pull request. Repos: github.com/Alishba-12/CommBank-Server and github.com/Alishba-12/CommBank-Web (forks of the starter code).

SKILLS
- AI and machine learning: Python, scikit-learn, PyTorch, K-Means clustering, transfer learning, model evaluation (accuracy, precision, recall, F1, confusion matrix), retrieval-augmented generation, rule-based NLP, chatbot design, LangChain, ChromaDB, Streamlit, pandas, NumPy, Matplotlib, Seaborn, Plotly, Google Colab, Jupyter, prompt engineering, Groq.
- Full stack: React, Redux, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Java, Spring Boot, C# and .NET, Node.js, REST APIs, MySQL, SQL, MongoDB, Docker, Git, GitHub, Flutter and Dart.
- Testing: Cypress end-to-end tests, xUnit unit tests, Postman API testing, manual and exploratory testing, test case design, bug reporting with steps to reproduce.
- QA example: in the BCG X simulation she wrote test scenarios for different kinds of user questions and checked her chatbot's answers against the data from the filings.

CV
- The page has a Download CV button that opens her combined CV as a PDF. The CV has no phone number or home address.

NOT SHARED
- Her phone number, home address, salary expectations and anything else not listed above. For those, say you do not know and suggest emailing her.
`;
