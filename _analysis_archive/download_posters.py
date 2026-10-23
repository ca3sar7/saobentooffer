import urllib.request

posters = [
    ('poster1.jpg', 'https://cdn.converteai.net/c8a9a7ba-7f84-44ad-b1ed-27b61dce250c/6ac1d7091507090c7e93ca1c/poster.jpg'),
    ('poster2.jpg', 'https://cdn.converteai.net/c8a9a7ba-7f84-44ad-b1ed-27b61dce250c/6ac1d70e0c349e20d18a514f/poster.jpg')
]

for fn, url in posters:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            with open(fn, 'wb') as f:
                f.write(data)
            print(f'Downloaded {fn} ({len(data)} bytes)')
    except Exception as e:
        print(f'Error downloading {fn}: {e}')
