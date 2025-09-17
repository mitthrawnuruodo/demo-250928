# Demo: `window.location` — hands-on
Look out for: 
* `assign` vs `replace`: show how the Back button behaves differently.
* **Query params without reload**: `history.pushState` lets you update the URL bar.
* **Hash behavior**: `location.hash = "demo"` doesn’t reload; `hashchange` fires.
* **Force reload caveat**: `reload(true)` aims to bypass cache; behavior can vary.
* `URL` & `URLSearchParams`: modern, robust way to parse and build URLs.

## Getting Started

### 1. Install the tools (if you haven't)
- [Download GitHub Desktop](https://desktop.github.com/)
- [Download Visual Studio Code](https://code.visualstudio.com/)

### 2. Get the project
1. Go to this project’s GitHub page.  
2. Click the green **Code** button.  
3. Choose **Open with GitHub Desktop**.  
4. Pick a folder on your computer and click **Clone**.  

### 3. Open in VS Code
Once it’s cloned, GitHub Desktop shows an option:  
**Open in Visual Studio Code**. Click it, and the project will open.  

### 4. Start working
You can now edit files in VS Code. 

### FAQ: Can you make changes to your cloned repo?
* **Yes, but only locally.**
You can open the cloned repo in VS Code, edit files, and even commit your changes in GitHub Desktop.
* **But… you can’t push back to GitHub unless you have permission.**
If you cloned someone else’s repo and you don’t have write access, GitHub Desktop will block you when you try to push.

### Tip: Fork it
* **Fork** → Makes your own copy of the repo on *your GitHub account*.
* Then you clone your fork, and now you can change/push freely to your own fork.
* If you want to suggest your changes back to the original project, you open a **Pull Request** (please don't).