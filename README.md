# Jianchen Lyu — Personal Homepage

Academic personal website for Jianchen Lyu, a Computer Science undergraduate at Columbia University interested in multimodal learning, self-improving agents, continual learning, and reasoning in vision-language models.

**Live site:** [https://autumn-cyber-aka.github.io/personal-website/](https://autumn-cyber-aka.github.io/personal-website/)

## Overview

The website uses a two-column academic portfolio layout:

- A fixed profile sidebar with a portrait, contact links, and section navigation
- An About section describing current research interests
- An Experience section covering Columbia University and a UIUC research internship
- A Projects section featuring Reasoning-Aware Visual Representation for VLM Agents
- A responsive single-column layout for smaller screens

The site is built with plain HTML, CSS, and JavaScript. It has no framework, package manager, or build step.

## Research Project

### Reasoning-Aware Visual Representation for VLM Agents

The project explores reasoning-conditioned visual representations that allow vision-language model agents to re-encode images as their reasoning evolves. The current implementation includes zero-initialized Vision Transformer adapters and a distributed PPO training pipeline for iterative visual reasoning.

Technologies: Qwen2.5-VL, Vision Transformers, PPO, and PyTorch.

## Local Development

From the project directory, start a local server:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Project Structure

```text
personal-website/
├── assets/
│   ├── columbia-seal.png
│   ├── profile.png
│   └── uiuc-block-i.svg
├── index.html
├── styles.css
├── script.js
└── README.md
```

- `index.html` contains the page content and semantic structure.
- `styles.css` defines the fixed-sidebar layout, typography, and responsive behavior.
- `script.js` updates the active navigation item as the page scrolls.
- `assets/` contains the profile photo and university marks.

## Deployment

The site is deployed with GitHub Pages from the `main` branch and the repository root (`/`). Pushing changes to `main` automatically updates the public website after the Pages deployment finishes.
