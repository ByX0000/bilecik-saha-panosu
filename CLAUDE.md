# Repo notları — Claude için

## Commit author politikası (ZORUNLU)

Bu repoda yapılan **tüm commit'ler** repo sahibinin (ByX0000 / mesut akatay) adı,
soyadı ve avatarı altında görünmelidir. Claude kendi adıyla commit atmamalıdır.

Her commit oluştururken aşağıdaki author ve committer bilgisini kullan:

- **Name:** `mesut akatay`
- **Email:** `164541092+ByX0000@users.noreply.github.com`

### Nasıl uygulanır

`git commit` çağrısını her zaman şu şekilde sar:

```bash
GIT_COMMITTER_NAME="mesut akatay" \
GIT_COMMITTER_EMAIL="164541092+ByX0000@users.noreply.github.com" \
git commit --author="mesut akatay <164541092+ByX0000@users.noreply.github.com>" \
  -m "commit mesajı"
```

Bu sayede GitHub'da hem Author hem Committer alanında ByX0000 avatarı görünür.
Eğer yanlışlıkla Claude adıyla commit atıldıysa, kullanıcıya sormadan
`--amend` + force-push ile düzelt.

## Proje hakkında

Detaylar için bkz. `README.md`. Kısaca: 7 Bölge 7 Okul / Bilecik saha panosu
(Next.js 14 + Tailwind), 17–18 Mayıs 2026 Gölpazarı–Pazaryeri saha çalışması.
