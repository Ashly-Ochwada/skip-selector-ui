# Skip Selector UI

A responsive React-based UI component for selecting skip sizes, built with accessibility, responsiveness, and clarity in mind. Users can select a skip size, view pricing dynamically, and proceed using a fixed footer.

---

## 💡 Approach

### 1. **Component Structure**

* **`ChooseSkip.jsx`**: Main container that renders the heading, grid layout of `SkipCard` components, and a footer once a skip is selected.
* **`SkipCard.jsx`**: Stateless component representing each skip size card. It shows size, image, price (computed), and a selectable badge.
* **`skips.js`**: Mock dataset containing skip sizes, durations, and optional image paths.

### 2. **Design & Layout**

* CSS Grid is used to display the cards responsively.
* Cards are styled using Flexbox for vertical content distribution.
* A `.skip-wrapper` div ensures the grid remains centered even with fewer columns.
* Hover states, selection highlight, and shadow animations are included for visual feedback.


### 3. **Accessibility**

* Cards are implemented as `<button>` elements for built-in keyboard navigation and focus.
* The `aria-pressed` attribute is applied based on selection state.
* Alt text for images is descriptive and fallback-safe.

### 4. **Footer Behavior**

* Once a skip is selected, a fixed footer appears at the bottom.
* It shows the selected size and price, and provides a "Continue" call-to-action.


## 🦪 Running the App

### Locally:

```bash
npm install
npm dev start
```

### Live Demo (CodeSandbox):

👉 [View Live Demo](#) ← *(replace this with your actual sandbox link)*

---

## 🗁 Folder Structure

```
.
├── public/
│   └── container.png             # Default skip image
│
├── src/
│   ├── assets/
│   │   └── react.svg             # Default Vite asset
│   │
│   ├── components/
│   │   └── SkipCard.jsx          # Reusable skip card component
│   │
│   ├── pages/
│   │   ├── ChooseSkip.jsx        # Main page for choosing a skip
│   │   └── ChooseSkip.css        # Styles for ChooseSkip layout
│   │
│   ├── services/
│   │   └── skipsApi.js           # (Optional) for future backend integration
│   │
│   ├── App.jsx                   # App entry
│   ├── main.jsx                  # Vite main render file
│   ├── index.css                 # Global styles
│
├── .gitignore
├── index.html                   # Vite HTML entry
├── vite.config.js               # Vite configuration
├── package.json
├── package-lock.json
└── README.md

```
## 🚀 Future Improvements

* Integrate real-time pricing from backend
* Add multi-step form integration after selection
* Enhance accessibility with keyboard toggling
* Add tests (unit + interaction)


