# Dev Pilot

Devpilot is a passion project of mine which allows the control of developer workflow, independently controlling the scripts that run the backbone of your projects.

---

## ⚙️ Dev Setup

```bash
# Clone the repo
git clone https://github.com/TreltaSev/devpilot.git
cd devpilot

# Install Tools
bun i -g rust-just

# Install dependencies
cd devpilot
bun i

# Start the app
just
```

---

## 👷 Contribution Guide

### 🔀 Branch Naming
Use this format:

```php-template
feat/<feature-name>
fix/<bug-name>
chore/<misc>
```

Example PR title:
`Core: /events [List View]`

### 📝 Commit Messages
Follow this convention to keep history clean and readable:

```php-template
{type}({scope}): {short description}
```

If possible, you should add a description to the commit message.

Types you can use:
- `feat` – new feature
- `fix` – bug fix
- `chore` – non-functional change (docs, configs, etc)
- `refactor` – code improvements without changing functionality
- `style` – formatting, whitespace, etc
- `docs` – documentation changes


Thankfully it shouldn't be that hard to stick to these guidelines if you use the just commands
```bash
bash scripts/push.sh "feat(scope): Adding Things" "This is a very long description"
```

---