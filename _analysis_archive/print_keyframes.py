with open('0~june731.6fa.css', 'r', encoding='utf-8') as f:
    css = f.read()

import re
m1 = re.search(r'@keyframes fadeIn\{[^}]+\}', css)
if m1:
    print('fadeIn:', m1.group(0))

m2 = re.search(r'@keyframes fadeOut\{[^}]+\}', css)
if m2:
    print('fadeOut:', m2.group(0))
