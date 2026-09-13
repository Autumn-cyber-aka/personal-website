# Jianchen Lyu — Personal Homepage

Academic personal website for Jianchen Lyu, a Computer Science undergraduate at Columbia University interested in multimodal learning, self-improving agents, continual learning, and reasoning in vision-language models.

**Live site:** [https://autumn-cyber-aka.github.io/personal-website/](https://autumn-cyber-aka.github.io/personal-website/)

## Overview

The website uses a two-column academic portfolio layout:

- A fixed profile sidebar with a portrait, contact links, and section navigation
- An About section describing current research interests
- An Experience section covering Columbia University and a UIUC research internship
- A Projects section featuring Reasoning-Aware Visual Representation for VLM Agents, PaperRank, and PaperTrail
- A responsive single-column layout for smaller screens

The site is built with plain HTML, CSS, and JavaScript. It has no framework, package manager, or build step.

## Research Project

### Reasoning-Aware Visual Representation for VLM Agents

The project explores reasoning-conditioned visual representations that allow vision-language model agents to re-encode images as their reasoning evolves. The current implementation includes zero-initialized Vision Transformer adapters and a distributed PPO training pipeline for iterative visual reasoning.

Technologies: Qwen2.5-VL, Vision Transformers, PPO, and PyTorch.

### PaperRank — Scientific Evidence Search

An AI-assisted independent learning project comparing BM25, MiniLM semantic retrieval, reciprocal rank fusion, and a trained pairwise reranker over 5,183 BEIR SciFact abstracts. The React/TypeScript interface runs search in the browser using exported model assets and ONNX Runtime. Evaluation uses held-out queries; the project does not claim that the trained reranker improves retrieval quality.

The homepage links to the owner-private Sites demo and private GitHub repository, with access restrictions explicitly labeled. Adding this portfolio entry does not change either project's sharing permissions.

### PaperTrail — Research Paper Search Platform

An AI-assisted learning project with Python/FastAPI, PostgreSQL, a C++17 BM25 engine, durable ingestion jobs, duplicate detection and crash-recovery tests. The public GitHub Pages demo uses JavaScript BM25 and browser-local storage with fictional sample papers; it does not run the full backend.

The project entry links to the [public demo](https://autumn-cyber-aka.github.io/papertrail-site/), [browser-demo code](https://github.com/Autumn-cyber-aka/papertrail-site), and [Chinese learning guide](https://github.com/Autumn-cyber-aka/papertrail-site/blob/main/LEARNING_MANUAL.md). The separate backend repository remains private.

## View the Website

Visit the published website at [autumn-cyber-aka.github.io/personal-website](https://autumn-cyber-aka.github.io/personal-website/).

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

## blogs

The sidebar links to `#blogs`, the bilingual writing section on the homepage. Article titles open their individual pages. The existing `blogs/` URL remains available as an archive.

### Published posts

- AI 时代，我为什么开始认真考虑做一个自己的账号 — [中文](blogs/personal-brand-ai-zh.html) / [English](blogs/personal-brand-ai-en.html)
- Editable Markdown sources: `blogs/posts/personal-brand-ai-zh.md` and `blogs/posts/personal-brand-ai-en.md`.

Each language has its own static HTML page and links to its translation. The articles share the homepage stylesheet and sidebar, with publication date, author, and a collapsible table of contents.

Markdown files are the editable sources. When changing a post, update its corresponding HTML page as well; this repository does not automatically convert Markdown to HTML. Add new article links to the homepage blogs section and `blogs/index.html` before publishing.
