
# Runs the development command
dev:
    bun run tauri dev

# Runs the build command
build:
    bun run tauri build

push MESSAGE:
    git add .
    git commit -m "{{MESSAGE}}"
    git push