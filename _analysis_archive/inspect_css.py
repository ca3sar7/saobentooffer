with open('0ujso~lm7xnii.css', 'r', encoding='utf-8') as f:
    css1 = f.read()
print('CSS 1 length:', len(css1))
print('CSS 1 head:', css1[:500])

with open('0~june731.6fa.css', 'r', encoding='utf-8') as f:
    css2 = f.read()
print('\nCSS 2 length:', len(css2))

import re
# check fonts in CSS
fonts = re.findall(r'@font-face\s*\{[^}]+\}', css2)
print(f'Found {len(fonts)} @font-face rules')
for font in fonts:
    print(font)

# check keyframes in CSS
keyframes = re.findall(r'@keyframes\s+([a-zA-Z0-9_-]+)', css2)
print('Keyframes found:', set(keyframes))
