import os
import re

root_dir = r"C:\Users\USER\.gemini\antigravity\scratch\TzvikaJohnny"

# 1. Update pages subfolder files
pages_dir = os.path.join(root_dir, "pages")
pages_files = ["creative.html", "satire.html", "podcasts.html", "lessons.html", "songs.html", "posttrauma.html"]

responsive_page_header = """  <!-- Header -->
  <header class="fixed top-4 left-4 right-4 z-[100] px-6 py-3 flex justify-between items-center glass-header rounded-full shadow-2xl max-w-7xl mx-auto">
    <div class="flex items-center gap-4">
      <button onclick="toggleMenu()" class="text-cyber-cyan p-2 hover:scale-110 transition-transform">
        <span class="material-symbols-outlined text-3xl">menu</span>
      </button>
      <a href="../index.html" class="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold text-white/80 hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-all">
        <span class="material-symbols-outlined text-sm">arrow_forward</span>
        <span class="hidden sm:inline">
          <span class="he">חזרה לראשי</span>
          <span class="en">BACK HOME</span>
          <span class="ru">НА ГЛАВНУЮ</span>
          <span class="ar">الرجوع للرئيسية</span>
        </span>
      </a>
    </div>
    
    <button onclick="toggleLang()" class="px-3 sm:px-5 py-2 rounded-full border border-cyber-cyan/50 text-xs font-black text-cyber-cyan tracking-widest hover:bg-cyber-cyan hover:text-[#0a0f1a] transition-all flex items-center gap-1.5 sm:gap-2 uppercase">
      <span class="material-symbols-outlined text-base sm:text-lg">language</span>
      <span class="hidden sm:inline">
        <span class="he">עברית</span>
        <span class="en">ENGLISH</span>
        <span class="ru">РУССКИЙ</span>
        <span class="ar">العربية</span>
      </span>
      <span class="sm:hidden text-[10px] tracking-normal font-black">
        <span class="he">עב</span>
        <span class="en">EN</span>
        <span class="ru">RU</span>
        <span class="ar">AR</span>
      </span>
    </button>
  </header>"""

for fn in pages_files:
    fp = os.path.join(pages_dir, fn)
    if os.path.exists(fp):
        print(f"Patching header in {fn}...")
        with open(fp, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Replace the header block
        pattern = r"<!-- Header -->.*?<\/header>"
        new_content = re.sub(pattern, responsive_page_header, content, flags=re.DOTALL)
        
        with open(fp, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Patched {fn}")

# 2. Update index.html
index_fp = os.path.join(root_dir, "index.html")
if os.path.exists(index_fp):
    print("Patching header in index.html...")
    with open(index_fp, "r", encoding="utf-8") as f:
        content = f.read()
    
    responsive_index_header = """  <!-- Top Navigation Header -->
  <header class="fixed top-4 left-4 right-4 z-[100] px-6 py-3 flex justify-between items-center glass-header rounded-full shadow-2xl max-w-7xl mx-auto">
    <div class="flex items-center gap-4">
      <button onclick="toggleMenu()" class="text-cyber-cyan p-2 hover:scale-110 transition-transform">
        <span class="material-symbols-outlined text-3xl">menu</span>
      </button>
      <img src="https://drive.google.com/thumbnail?id=1VO1GyokRkNFjts6vH4Y9WDQJKuTYraWR&sz=w500" alt="Tzvika Johnny Peker Logo" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cyber-cyan/40 shadow-[0_0_10px_rgba(0,242,255,0.3)] object-cover">
    </div>
    
    <button onclick="toggleLang()" class="px-3 sm:px-5 py-2 rounded-full border border-cyber-cyan/50 text-xs font-black text-cyber-cyan tracking-widest hover:bg-cyber-cyan hover:text-[#0a0f1a] transition-all flex items-center gap-1.5 sm:gap-2 uppercase">
      <span class="material-symbols-outlined text-base sm:text-lg">language</span>
      <span class="hidden sm:inline">
        <span class="he">עברית</span>
        <span class="en">ENGLISH</span>
        <span class="ru">РУССКИЙ</span>
        <span class="ar">العربية</span>
      </span>
      <span class="sm:hidden text-[10px] tracking-normal font-black">
        <span class="he">עב</span>
        <span class="en">EN</span>
        <span class="ru">RU</span>
        <span class="ar">AR</span>
      </span>
    </button>
  </header>"""
  
    pattern = r"<!-- Top Navigation Header -->.*?<\/header>"
    new_content = re.sub(pattern, responsive_index_header, content, flags=re.DOTALL)
    
    with open(index_fp, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Patched index.html")
