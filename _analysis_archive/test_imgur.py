import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

for post_id in ['186Bh01', 'GnmcWC0']:
    url = f'https://imgur.com/{post_id}'
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            print(f'=== Post {post_id} ===')
            mp4s = re.findall(r'https?://[^\'\"\s<>]+\.mp4', html)
            print('MP4s found:', set(mp4s))
            direct_test = f'https://i.imgur.com/{post_id}.mp4'
            print('Testing direct:', direct_test)
            try:
                req2 = urllib.request.Request(direct_test, headers=headers)
                with urllib.request.urlopen(req2) as resp2:
                    print(f'Direct {direct_test} status:', resp2.status, 'size:', len(resp2.read()))
            except Exception as e2:
                print('Direct test error:', e2)
    except Exception as e:
        print(f'Error fetching {url}: {e}')
