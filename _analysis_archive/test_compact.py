with open('quiz.html', 'r', encoding='utf-8') as f:
    c = f.read()

assert 'min-height: 50px;' in c, 'Missing min-height 50px in quiz.html'
assert 'max-width: 195px;' in c, 'Missing hero-image max-width 195px in quiz.html'
assert 'max-width: 165px;' in c, 'Missing video-frame max-width 165px in quiz.html'
assert 'clamp(22px, 5.8vw, 26px)' in c, 'Missing clamp title in quiz.html'
assert 'max-height: 700px' in c, 'Missing max-height media query in quiz.html'
assert '186Bh01' in c, 'Missing 186Bh01 in quiz.html'
assert 'GnmcWC0' in c, 'Missing GnmcWC0 in quiz.html'
print('quiz.html compact assertions PASSED!')

with open('quiz-clone/index.html', 'r', encoding='utf-8') as f:
    c2 = f.read()

assert '186Bh01' in c2, 'Missing 186Bh01 in quiz-clone/index.html'
assert 'GnmcWC0' in c2, 'Missing GnmcWC0 in quiz-clone/index.html'
print('quiz-clone/index.html compact assertions PASSED!')
