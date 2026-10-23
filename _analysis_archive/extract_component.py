import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('beautified_page.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f'Total lines: {len(lines)}')

# Let's write out lines 1100 onwards to a dedicated file
with open('component_code.js', 'w', encoding='utf-8') as f:
    f.writelines(lines[1000:])

print('Wrote component_code.js')
