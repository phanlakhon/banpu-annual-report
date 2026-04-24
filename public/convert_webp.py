from PIL import Image
import os

INPUT = "page-10"
OUTPUT = "page_10_webp"
os.makedirs(OUTPUT, exist_ok=True)

for filename in os.listdir(INPUT):
    if filename.endswith(".png") or filename.endswith(".jpg"):
        img = Image.open(f"{INPUT}/{filename}")
        new_name = filename.rsplit(".", 1)[0] + ".webp"
        img.save(f"{OUTPUT}/{new_name}", "WEBP", quality=85)
        print(f"แปลง {filename} → {new_name} เสร็จแล้ว")

print("เสร็จทั้งหมด!")