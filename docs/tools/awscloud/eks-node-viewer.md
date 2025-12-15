# eks-node-viewer — Install (macOS / Linux / Windows)

Quick instructions to install the eks-node-viewer binary from GitHub releases or via common package managers. Replace OWNER/REPO and VERSION as needed (or open the project Releases page to get the correct binary URL).

## Notes
- Binaries are typically named by OS/arch, e.g. eks-node-viewer-darwin-amd64, eks-node-viewer-linux-amd64, eks-node-viewer-windows-amd64.exe.
- Choose the binary that matches your OS and CPU (amd64/x86_64, arm64).

---

## macOS

### Homebrew (if a formula/tap exists)
brew install <tap>/eks-node-viewer
(Replace <tap> with the project tap or use the project-provided install instructions.)

### Manual (curl)
1. Find the release asset URL (Releases -> "Download" for darwin-...).
2. Example (Intel macOS):
    curl -L -o /usr/local/bin/eks-node-viewer https://github.com/OWNER/REPO/releases/download/VERSION/eks-node-viewer-darwin-amd64
    sudo chmod +x /usr/local/bin/eks-node-viewer
3. Verify:
    eks-node-viewer --version

For Apple Silicon, use the darwin-arm64 build.

---

## Linux

### Manual (curl/wget)
1. Choose the linux-... asset from Releases.
2. Example:
    curl -L -o /usr/local/bin/eks-node-viewer https://github.com/OWNER/REPO/releases/download/VERSION/eks-node-viewer-linux-amd64
    sudo chmod +x /usr/local/bin/eks-node-viewer
3. Verify:
    eks-node-viewer --version

If you prefer user-local install:
    curl -L -o ~/bin/eks-node-viewer https://...
    chmod +x ~/bin/eks-node-viewer
    ensure ~/bin is in $PATH.

### Package managers
If the project provides a DEB/RPM or package repository, follow those instructions:
- Debian/Ubuntu: apt install <package-name>
- RHEL/CentOS: yum/dnf install <package-name>

---

## Windows

### Scoop (recommended if you use Scoop)
scoop install eks-node-viewer
(Requires a scoop bucket that contains the app.)

### Chocolatey
choco install eks-node-viewer
(Only if a choco package exists for the project.)

### Manual (PowerShell)
1. Download the exe:
    Invoke-WebRequest -Uri "https://github.com/OWNER/REPO/releases/download/VERSION/eks-node-viewer-windows-amd64.exe" -OutFile "$env:USERPROFILE\bin\eks-node-viewer.exe"
2. Add the folder to PATH (if not already).
3. Verify:
    eks-node-viewer.exe --version

---

## Verify and test
- Check version:
  eks-node-viewer --version
- Show help:
  eks-node-viewer --help

---

If you want, I can fill OWNER/REPO and example URLs if you tell me the GitHub repository for eks-node-viewer.