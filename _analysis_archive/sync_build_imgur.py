with open('quiz-clone/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open('quiz-clone/js/quiz.js', 'r', encoding='utf-8') as f:
    js = f.read()

with open('quiz-clone/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace css link with inline style
html_single = html.replace('<link rel="stylesheet" href="css/style.css" />', f'<style>\n{css}\n</style>')

# Replace js script link with inline script
html_single = html_single.replace('<script src="js/quiz.js"></script>', f'<script>\n{js}\n</script>')

# Save as quiz.html
with open('quiz.html', 'w', encoding='utf-8') as f:
    f.write(html_single)

print('Generated standalone quiz.html!')

# Also save as root index.html
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_single)

print('Generated root index.html!')
