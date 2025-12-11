# kubectl – Kubernetes CLI

`kubectl` is the official command-line tool to interact with Kubernetes clusters.

https://kubernetes.io/docs/tasks/tools/

---

## 📦 Install kubectl

=== "macOS (Homebrew)"


brew install kubectl
# or
brew install kubernetes-cli

## Verify installation
kubectl version --client
kubectl get nodes

=== "Linux (X86-64)"


curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
mkdir -p ~/.local/bin
mv ./kubectl ~/.local/bin/kubectl

## Verify installation
kubectl version --client
kubectl get nodes
