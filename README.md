# Character Counter

This is my solution to the Character Counter challenge from Frontend Mentor. You type or paste any text, and the app tells you right away how many characters, words and sentences it has, how long it takes to read, and which letters you used the most. I built it with React, TypeScript and Tailwind, and the main goal for me was to learn Zustand, because my mentor asked us to manage the state with it.

## What it does

While you type, the three colored cards update live with the character count, the word count and the sentence count. You can tick "Exclude Spaces" and the character count ignores all the spaces. You can also tick "Set Character Limit", write a number, and if your text gets longer than that number the box gets a red border and a warning message shows under it. Under the cards there is a letter density section. It shows the five letters you used the most with a bar and a percent, and a "See more" button shows all of them. There is also a dark and light mode button, and the app remembers which one you picked after you refresh the page. Everything works with only the keyboard, and the buttons and inputs have a visible focus outline when you move with the Tab key. The layout changes for phone, tablet and desktop.

## What I used

I made the project with Vite and pnpm, and I wrote it with React and TypeScript. All the styling is Tailwind classes, and I used a small theme in the CSS file so the light and dark colors have names like page, card and muted. I used Zustand for the state, and react-icons for the sun and moon icon.

## What I learned

The biggest thing was Zustand. Before this, I kept all the state in App and passed it down with props. With Zustand I made two stores, one for the text and its options and one for the theme, and every component takes only the piece it needs, so App became very small. I learned that a selector, like taking only state.text, means a component updates only when that piece changes, and that is the main reason people use Zustand instead of Context. I also learned that not every state belongs in a store. The "See more" button only matters to the letter density component, so I kept that one as a normal useState. The persist tool was my favorite part, because it saved the theme in localStorage with almost no code.

I also practiced regular expressions for the first time in a real project. For example, replacing every space to count without spaces, splitting words by any amount of spaces, and splitting sentences at dots, question marks and exclamation marks. Another small trick was padStart, which turns 4 into 04 like in the design.

## Problems I had

At first the app would not start because react-icons was not installed in the folder, so I had to add it again with pnpm. Then I noticed that the letter density numbers in the design did not match mine for the same text. I counted the letter E by hand and my app was right with 25, so the design just uses sample numbers for the bars. That taught me to check the result myself before changing working code.

## What I want to improve

I want to add more counters, like lines, and a word density graph next to the letter density one. I also want to add the small pattern images in the corners of the cards like the original design.

## Run it on your computer

Install the packages and start the dev server:

```bash
pnpm install
pnpm dev
```

## Links

Live site: 

Solution on Frontend Mentor: [add your link here](https://www.frontendmentor.io/challenges/character-counter-znSgeWs_i6)
