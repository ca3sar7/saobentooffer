import re

with open('0~june731.6fa.css', 'r', encoding='utf-8') as f:
    css = f.read()

for k in ['fadeIn', 'fadeOut']:
    match = re.search(r'@keyframes\s+' + k + r'\s*\{[^}]+\}', css)
    if match:
        print(match.group(0))

for c in ['animate-fadeIn', 'animate-fadeOut']:
    match = re.search(r'\.' + c + r'\b[^{]*\{[^}]+\}', css)
    if match:
        print(match.group(0))
