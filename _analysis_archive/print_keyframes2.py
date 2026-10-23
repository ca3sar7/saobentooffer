with open('0~june731.6fa.css', 'r', encoding='utf-8') as f:
    css = f.read()

pos1 = css.find('@keyframes fadeIn')
print('fadeIn snippet:')
print(css[pos1:pos1+120])

pos2 = css.find('@keyframes fadeOut')
print('\nfadeOut snippet:')
print(css[pos2:pos2+120])
