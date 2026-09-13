"""Update reading estimates from the published Markdown sources."""
from pathlib import Path
import math
import re

root = Path(__file__).resolve().parents[1]
minutes = {}
for lang in ('zh', 'en'):
    source = (root / f'blogs/posts/personal-brand-ai-{lang}.md').read_text()
    han = len(re.findall(r'[\u4e00-\u9fff]', source))
    words = len(re.findall(r"[A-Za-z]+(?:['’-][A-Za-z]+)*", source))
    minutes[lang] = max(1, math.ceil(han / 300 + words / 200))
    page = root / f'blogs/personal-brand-ai-{lang}.html'
    text = page.read_text()
    text = re.sub(r' <span class="reading-time">.*?</span>', '', text)
    label = f'预计阅读 {minutes[lang]} 分钟' if lang == 'zh' else f'{minutes[lang]} min read'
    text = text.replace(' · Jianchen Lyu</p>', f' · Jianchen Lyu <span class="reading-time">· {label}</span></p>')
    page.write_text(text)

for name in ('index.html', 'blogs/index.html'):
    page = root / name
    text = re.sub(r' <span class="reading-time">.*?</span>', '', page.read_text())
    label = f'中文约 {minutes["zh"]} 分钟 · English {minutes["en"]} min'
    text = text.replace(' · Reflections</p>', f' · Reflections <span class="reading-time">· {label}</span></p>')
    page.write_text(text)
print(minutes)
