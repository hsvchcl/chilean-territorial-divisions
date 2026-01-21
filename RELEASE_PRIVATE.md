# 🔒 Release Instructions (PRIVATE)

> Este archivo está en `.gitignore` y NO se sincroniza con el repositorio.

## Flujo de Release

### 1️⃣ Desarrollar en `develop`
```bash
git checkout develop
# Haces tus cambios, commits, etc.
git push origin develop
```

### 2️⃣ Crear rama release
```bash
git checkout develop
git checkout -b release/v1.X.X
```

### 3️⃣ Bump version (en rama release)
```bash
npm version patch   # 1.0.0 → 1.0.1 (bug fixes)
npm version minor   # 1.0.0 → 1.1.0 (nuevas features)
npm version major   # 1.0.0 → 2.0.0 (breaking changes)
```

### 4️⃣ Merge a master y push
```bash
git checkout master
git merge release/v1.X.X
git push origin master --tags  # ← Dispara GitHub Action
```

### 5️⃣ Sincronizar develop
```bash
git checkout develop
git merge release/v1.X.X
git push origin develop
```

### 6️⃣ Limpiar (opcional)
```bash
git branch -d release/v1.X.X
```

---

## Ejemplo completo (v1.0.2)

```bash
git checkout develop
git checkout -b release/v1.0.2
npm version patch
git checkout master
git merge release/v1.0.2
git push origin master --tags
git checkout develop
git merge release/v1.0.2
git push origin develop
git branch -d release/v1.0.2
```

---

## NPM Token

Si necesitas regenerar el token:
1. https://www.npmjs.com/settings/~/tokens
2. Crear "Granular Access Token"
3. Actualizar en GitHub: Settings → Secrets → NPM_TOKEN
