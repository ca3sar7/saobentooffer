import re
import json

with open('0nzqgxnmcrkgi.js', 'r', encoding='utf-8') as f:
    code = f.read()

# Look for image paths
images = re.findall(r'["\'](/images/[^"\']+)["\']', code)
print('Images found in JS:')
for img in sorted(set(images)):
    print(' ', img)

# Look for vturb / video links
vturb = re.findall(r'(converteai[^\'\"\s]*|vturb[^\'\"\s]*|smartplayer[^\'\"\s]*)', code)
print('\nVideo / Vturb mentions:')
for v in sorted(set(vturb)):
    print(' ', v)

# Look for links / checkout
links = re.findall(r'https?://[^\'\"\\<>]+', code)
print('\nLinks found:')
for l in sorted(set(links)):
    print(' ', l)

print(f'\nTotal JS length: {len(code)}')
