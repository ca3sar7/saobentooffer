with open('quiz.html', 'r', encoding='utf-8') as f:
    c = f.read()

assert '<div class="screen-kicker">Olá, Devoto!</div>' in c, 'Missing kicker in quiz.html'
assert '<h1 class="screen-title">Preparamos algo especial para fortalecer sua fé.</h1>' in c, 'Missing title in quiz.html'
assert 'ornamental-divider' in c, 'Missing ornamental divider in quiz.html'
assert 'highlight-lead' in c, 'Missing highlight-lead in quiz.html'
assert 'clamp(30px, 8vw, 36px)' in c, 'Missing clamp in quiz.html'
assert 'Cormorant+Garamond:ital,wght@0,600;0,700;1,500;1,600' in c, 'Missing font weights in quiz.html'
assert 'display=swap' in c, 'Missing display=swap in quiz.html'
assert 'rel="preload" as="style"' in c, 'Missing preload style in quiz.html'
print('Verification passed 100% on quiz.html!')

with open('quiz-clone/index.html', 'r', encoding='utf-8') as f:
    c2 = f.read()

assert '<div class="screen-kicker">Olá, Devoto!</div>' in c2, 'Missing kicker in quiz-clone/index.html'
assert '<h1 class="screen-title">Preparamos algo especial para fortalecer sua fé.</h1>' in c2, 'Missing title in quiz-clone/index.html'
assert 'ornamental-divider' in c2, 'Missing ornamental divider in quiz-clone/index.html'
assert 'highlight-lead' in c2, 'Missing highlight-lead in quiz-clone/index.html'
print('Verification passed 100% on quiz-clone/index.html!')
