try:
    import jsbeautifier
    with open('0nzqgxnmcrkgi.js', 'r', encoding='utf-8') as f:
        code = f.read()
    opts = jsbeautifier.default_options()
    opts.indent_size = 2
    res = jsbeautifier.beautify(code, opts)
    with open('beautified_page.js', 'w', encoding='utf-8') as f:
        f.write(res)
    print('Beautified with jsbeautifier!')
except Exception as e:
    with open('0nzqgxnmcrkgi.js', 'r', encoding='utf-8') as f:
        code = f.read()
    # Basic indentation formatter
    formatted = []
    indent = 0
    in_string = False
    str_char = ''
    i = 0
    while i < len(code):
        c = code[i]
        if not in_string:
            if c in ('"', "'", '`'):
                in_string = True
                str_char = c
                formatted.append(c)
            elif c == '{':
                indent += 2
                formatted.append('{\n' + ' ' * indent)
            elif c == '}':
                indent = max(0, indent - 2)
                formatted.append('\n' + ' ' * indent + '}\n' + ' ' * indent)
            elif c == ';':
                formatted.append(';\n' + ' ' * indent)
            else:
                formatted.append(c)
        else:
            formatted.append(c)
            if c == '\\':
                i += 1
                if i < len(code):
                    formatted.append(code[i])
            elif c == str_char:
                in_string = False
        i += 1
    with open('beautified_page.js', 'w', encoding='utf-8') as f:
        f.write(''.join(formatted))
    print('Custom beautified_page.js written')
