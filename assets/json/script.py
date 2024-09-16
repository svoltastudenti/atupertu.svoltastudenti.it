import json


# Funzione per ordinare il JSON in base al titolo
def ordina_json_per_titolo(data):
    if "categories" in data:
        for category in data["categories"]:
            data["categories"][category] = sorted(
                data["categories"][category], key=lambda x: x["title"]
            )
    return data


# Leggi il file sidebar.json
with open("assets/json/sidebar.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Ordina le associazioni e liste per titolo
data_ordinato = ordina_json_per_titolo(data)

# Salva il file JSON ordinato
with open("sidebar_ordinato.json", "w", encoding="utf-8") as f:
    json.dump(data_ordinato, f, ensure_ascii=False, indent=4)

print("File JSON ordinato salvato come 'sidebar_ordinato.json'.")
