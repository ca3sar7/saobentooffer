with open('beautified_page.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f'Total lines: {len(lines)}')

# Let's search for lines containing step or questions or quiz state
matches = []
for idx, line in enumerate(lines):
    if any(k in line.lower() for k in ['step', 'question', 'pergunta', 'quiz', 'vturb', 'checkout', 'progress', 'mosteiro']):
        matches.append((idx + 1, line.strip()[:100]))

print(f'Found {len(matches)} matching lines. Showing sample:')
for m in matches[:40]:
    print(f'Line {m[0]}: {m[1]}')
