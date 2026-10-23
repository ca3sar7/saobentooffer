with open('quiz.html', 'r', encoding='utf-8') as f:
    c = f.read()

assert '186Bh01' in c, 'Missing 186Bh01 in quiz.html'
assert 'GnmcWC0' in c, 'Missing GnmcWC0 in quiz.html'
assert 'https://i.imgur.com/186Bh01.mp4' in c, 'Missing direct mp4 1 in quiz.html'
assert 'https://i.imgur.com/GnmcWC0.mp4' in c, 'Missing direct mp4 2 in quiz.html'
assert 'vturb-unmute-overlay' in c, 'Missing unmute overlay in quiz.html'
assert 'embed.js' in c, 'Missing embed.js in quiz.html'
print('quiz.html assertions PASSED 100%!')

with open('quiz-clone/index.html', 'r', encoding='utf-8') as f:
    c2 = f.read()

assert '186Bh01' in c2, 'Missing 186Bh01 in quiz-clone/index.html'
assert 'GnmcWC0' in c2, 'Missing GnmcWC0 in quiz-clone/index.html'
assert 'https://i.imgur.com/186Bh01.mp4' in c2, 'Missing direct mp4 1 in quiz-clone/index.html'
assert 'https://i.imgur.com/GnmcWC0.mp4' in c2, 'Missing direct mp4 2 in quiz-clone/index.html'
assert 'vturb-unmute-overlay' in c2, 'Missing unmute overlay in quiz-clone/index.html'
print('quiz-clone/index.html assertions PASSED 100%!')
