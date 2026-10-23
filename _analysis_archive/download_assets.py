import urllib.request
import os

assets = [
    '/images/kit-sao-bento.webp',
    '/images/kit-aguarde.webp',
    '/funnel/report-grid.svg',
    '/_next/static/media/797e433ab948586e-s.p.08e28id.o-okb.woff2',
    '/_next/static/media/caa3a2e1cccd8315-s.p.09~u27dqhyhd6.woff2',
]

direct_urls = [
    ('header-logo.png', 'https://cdn.xquiz.co/images/48da2adb-d8a2-4e76-abdf-417e0dd481e3')
]

base_url = 'https://saobentobr.vercel.app'

for asset in assets:
    url = base_url + asset
    local_path = asset.lstrip('/')
    dir_name = os.path.dirname(local_path)
    if dir_name:
        os.makedirs(dir_name, exist_ok=True)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            content = resp.read()
            with open(local_path, 'wb') as f:
                f.write(content)
            print(f'Downloaded {asset} -> {local_path} ({len(content)} bytes)')
    except Exception as e:
        print(f'Error downloading {asset}: {e}')

for fn, url in direct_urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            content = resp.read()
            with open(fn, 'wb') as f:
                f.write(content)
            print(f'Downloaded {url} -> {fn} ({len(content)} bytes)')
    except Exception as e:
        print(f'Error downloading {url}: {e}')
