# Install k9s (CLI) — macOS, Windows, Linux

Prerequisite: kubectl configured and in PATH.

---

## macOS

### Option A — Homebrew (recommended)
1. brew update  
2. brew install k9s  
3. Verify:  
    ```
    k9s version
    ```

### Option B — Manual (GitHub release)
1. Find the correct asset for macOS on https://github.com/derailed/k9s/releases/latest (Darwin arm64 or x86_64).  
2. Download and extract, for example:
    ```
    curl -L -o k9s.tgz "<release-asset-url>"
    tar -xzf k9s.tgz
    ```
3. Move binary to PATH and make executable:
    ```
    sudo mv k9s /usr/local/bin/
    sudo chmod +x /usr/local/bin/k9s
    k9s version
    ```

---

## Windows

### Option A — Scoop (recommended)
1. Install scoop if needed:  
    ```
    iwr -useb get.scoop.sh | iex
    ```
2. Install k9s:
    ```
    scoop install k9s
    ```
3. Verify:
    ```
    k9s version
    ```

### Option B — Chocolatey
1. choco install k9s -y  
2. Verify: `k9s version`

### Option C — Manual (GitHub release)
1. Download the Windows asset from https://github.com/derailed/k9s/releases/latest (choose x86_64 or arm64).  
2. Unzip and place `k9s.exe` in a folder on PATH (e.g., C:\Program Files\k9s\ and add that folder to PATH).  
3. Open PowerShell and verify:
    ```
    k9s version
    ```

---

## Linux

### Option A — Snap (if available)
1. sudo snap install k9s --classic  
2. Verify: `k9s version`

### Option B — Package manager / manual
- Debian/Ubuntu (.deb):
  1. Download .deb from releases.  
  2. sudo dpkg -i k9s_*.deb  
  3. sudo apt-get -f install
- Generic tarball:
  1. Download correct Linux asset from https://github.com/derailed/k9s/releases/latest (linux amd64 or arm64).  
  2. Extract and move:
      ```
      tar -xzf k9s.tgz
      sudo mv k9s /usr/local/bin/
      sudo chmod +x /usr/local/bin/k9s
      ```
3. Verify:
    ```
    k9s version
    ```

---

Notes
- Use the matching architecture (amd64/x86_64 or arm64) for your machine.  
- If k9s does not start, ensure kubectl is configured (kubectl get pods works) and your KUBECONFIG is correct.
- For latest assets and exact filenames use the GitHub releases page: https://github.com/derailed/k9s/releases/latest
- To update, use your package manager (brew/scoop/choco/snap) or replace the binary with a newer release.
