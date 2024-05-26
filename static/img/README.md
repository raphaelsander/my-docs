# Adicionando Sombra às Imagens no Linux via Terminal

Primeiro instale o `imagemagick`:

```bash
sudo apt-get install imagemagick
```

Agora basta rodar esse comando dentro do diretório contendo as imagens no
formato PNG:

```bash
for img in *.png; do convert "$img" \
    \( +clone -background black -shadow 80x5+0+0 \) \
    +swap -background none -layers merge +repage \
    "${img%.png}_shadow.png"; done
```
