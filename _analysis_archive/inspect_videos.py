import urllib.request
import re

urls = [
    'https://scripts.converteai.net/c8a9a7ba-7f84-44ad-b1ed-27b61dce250c/players/6ac1d70dec818c746566dbdc/v4/player.js',
    'https://scripts.converteai.net/c8a9a7ba-7f84-44ad-b1ed-27b61dce250c/players/6ac1d7100c349e20d18a5150/v4/player.js',
]

for idx, url in enumerate(urls, 1):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            print(f'=== Video {idx} player.js ({len(content)} bytes) ===')
            # Look for video URLs (.m3u8, .mp4, cdn)
            m3u8s = re.findall(r'https?://[^\'\"\s]+\.m3u8[^\'\"\s]*', content)
            mp4s = re.findall(r'https?://[^\'\"\s]+\.mp4[^\'\"\s]*', content)
            converte = re.findall(r'https?://cdn\.converteai\.net[^\'\"\s]*', content)
            print('m3u8:', m3u8s)
            print('mp4:', mp4s)
            print('converte CDN:', converte[:5])
            # search for JSON or config inside
            configs = re.findall(r'\{[^{}]*"video"[^{}]*\}', content)
            print('configs sample:', configs[:3])
            # Save player script
            with open(f'player_{idx}.js', 'w', encoding='utf-8') as f:
                f.write(content)
    except Exception as e:
        print(f'Error fetching player {idx}: {e}')
