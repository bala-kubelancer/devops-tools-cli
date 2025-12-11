# kubectl – Kubernetes CLI

`kubectl` is the official command-line tool to interact with Kubernetes clusters.

[Official Documentation](https://kubernetes.io/docs/tasks/tools/)

---

## 📦 Install kubectl

=== macOS (Homebrew)
```
brew install kubectl
```

=== macOS (Intel)
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
```

=== macOS (Apple Silicon)
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
```

### Verify installation
```
kubectl version --client
kubectl get nodes
```
=== Linux (X86-64)
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
mkdir -p ~/.local/bin
mv ./kubectl ~/.local/bin/kubectl
```
=== Linux (ARM64)
```
curl -LO https://dl.k8s.io/release/v1.34.0/bin/linux/arm64/kubectl
chmod +x kubectl
mkdir -p ~/.local/bin
mv ./kubectl ~/.local/bin/kubectl
```

### Verify installation
```
kubectl version --client
kubectl get nodes
```
