# Alishba Shafiq portfolio

A static site plus one small serverless function. Hosted on Vercel.

```
index.html        the page
style.css         all styles
app.js            the assistant, scroll animations, certificate viewer
favicon.svg
images/           the project pictures
logos/            company logos cropped from your certificates
cv/               the CV (PDF) behind the Download CV button
certificates/     five Forage certificates (PDF and PNG preview)
api/chat.js       sends typed questions to Groq (openai/gpt-oss-120b)
api/_facts.js     the only facts the assistant may use
```

## Deploy on Vercel

1. Create an empty GitHub repository and upload everything in this folder (keep the folders as they are).
2. On vercel.com choose **Add New, Project** and import that repository. Framework preset: **Other**. Leave the build settings empty.
3. Before the first deploy, open **Environment Variables** and add `GROQ_API_KEY` with a key from console.groq.com/keys.
4. Press **Deploy**. Open the site on your phone and on a laptop.

## How the assistant works

- The role buttons and the nine suggested questions use fixed answers written in `app.js`. They work even if Groq is down.
- A typed or spoken question is first matched against the saved answers. If nothing matches, it goes to `/api/chat`, which asks `openai/gpt-oss-120b` on Groq to answer only from `api/_facts.js`.
- If the AI service fails, the assistant uses the closest saved answer, or says it does not know and shows your email.
- The microphone uses the browser's built-in speech recognition. It works in Chrome and Edge over https, and it is hidden in browsers that do not support it. The Listen button uses the browser's built-in voice.

## Things to check after deploying

- Ask three typed questions that are not in the suggested list, and one question that is not about you. The answers should stay short and true.
- Click every GitHub button and every Show certificate button.
- Try the microphone in Chrome on your phone.

## Updating content

- Change a saved answer: edit the `BANK` list at the top of `app.js`.
- Change what the AI may say: edit `api/_facts.js`. Keep it true.
- Add a repository link: edit the buttons in `index.html`.
- Swap a project picture: replace the file in `images/` with the same name (keep it near 1200 px wide).
- Download CV button: it opens `cv/Alishba_Shafiq_CV.pdf`, the combined CV without phone number and address. To update the CV, replace that file and keep the name.
- The pictures on the project cards are concept illustrations, so each one carries a "Concept visual" label. Remove the label only if you replace a picture with a real screenshot.
- The rate limit in `api/chat.js` is 20 questions per visitor every 10 minutes. It resets when Vercel restarts the function.
