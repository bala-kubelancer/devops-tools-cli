<div style="
  background: linear-gradient(135deg, #171c3a, #3f2b96, #a14fdc);
  border-radius: 24px;
  padding: 40px 32px;
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  color: #fff;
">

  <div style="flex: 1 1 260px; min-width: 260px;">
    <h1 style="font-size: 2.6rem; margin-bottom: 12px;">
      🛠️ Install CLI Tools
    </h1>
    <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 18px;">
      Your single place to <strong>install, configure, and verify</strong> all essential
      <strong>Cloud &amp; DevOps CLI tools</strong> — kubectl, Helm, Terraform, AWS CLI, and more.
    </p>
    <p style="opacity: 0.95; margin-bottom: 18px;">
      Perfect for <strong>new laptops</strong>, <strong>new projects</strong>, and <strong>standardized team setups</strong>.
    </p>

    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
      <a href="tools/kubernetes/kubectl/" style="
        padding: 10px 18px;
        border-radius: 999px;
        background: #ffffff;
        color: #171c3a;
        font-weight: 600;
        text-decoration: none;
        font-size: 0.95rem;
      ">
        🚀 Get started with kubectl
      </a>

      <a href="#browse-by-category" style="
        padding: 10px 18px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.7);
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        font-size: 0.95rem;
      ">
        🔎 Browse all tool categories
      </a>
    </div>

    <p style="margin-top: 16px; font-size: 0.9rem; opacity: 0.85;">
      ⏱ Copy-paste ready. OS-specific. Maintained by <strong>Kubelancer</strong>.
    </p>
  </div>

  <div style="flex: 0 1 280px; min-width: 240px; text-align: center;">
    <img src="assets/devops-laptop.png"
         alt="DevOps CLI tools on a laptop"
         style="max-width: 100%; border-radius: 18px; box-shadow: 0 18px 40px rgba(0,0,0,0.35);">
  </div>
</div>

---

## ⭐ Popular right now

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">

<div style="border-radius: 16px; padding: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg,#ffffff,#f7f7ff);">
  <h3>☸️ Kubernetes essentials</h3>
  <ul>
    <li><a href="tools/kubernetes/kubectl/">kubectl – Kubernetes CLI</a></li>
    <li><a href="tools/kubernetes/kubectx-kubens/">kubectx &amp; kubens – context &amp; namespace switcher</a></li>
    <li><a href="tools/kubernetes/k9s/">k9s – terminal UI for Kubernetes</a></li>
  </ul>
</div>

<div style="border-radius: 16px; padding: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg,#ffffff,#f5fbff);">
  <h3>☁️ Cloud &amp; AWS tools</h3>
  <ul>
    <li><a href="tools/cloud/aws-cli/">AWS CLI – manage AWS from terminal</a></li>
    <li><a href="tools/cloud/eksctl/">eksctl – EKS cluster automation</a></li>
  </ul>
</div>

<div style="border-radius: 16px; padding: 16px; border: 1px solid #e2e8f0; background: linear-gradient(135deg,#ffffff,#fff7fd);">
  <h3>⚙️ DevOps &amp; IaC</h3>
  <ul>
    <li><a href="tools/devops/helm/">Helm – Kubernetes package manager</a></li>
    <li><a href="tools/devops/terraform/">Terraform – Infrastructure as Code</a></li>
  </ul>
</div>

</div>

---

## 🧩 One repo for all your tools

![CLI tools overview](assets/tools-grid.png)

This site standardizes how you install and upgrade your tools:

- ✅ <strong>OS-specific commands</strong> (macOS, Ubuntu, Windows)
- ✅ <strong>Verification steps</strong> after installation
- ✅ <strong>Minimal, copy-paste friendly snippets</strong>
- ✅ <strong>Cloud &amp; Kubernetes focused</strong> – built for DevOps &amp; SRE workflows

---

## <span id="browse-by-category"></span>📚 Browse by category

### ☸️ Kubernetes tools

- [`kubectl`](tools/kubernetes/kubectl.md) – core Kubernetes CLI  
- [`kubectx` &amp; `kubens`](tools/kubernetes/kubectx-kubens.md) – switch contexts & namespaces  
- [`k9s`](tools/kubernetes/k9s.md) – TUI for clusters  

---

### ☁️ Cloud tools

- [`aws cli`](tools/cloud/aws-cli.md) – interact with AWS services  
- [`eksctl`](tools/cloud/eksctl.md) – manage EKS clusters  

---

### ⚙️ DevOps tools

- [`helm`](tools/devops/helm.md) – charts & releases  
- [`terraform`](tools/devops/terraform.md) – reusable infra modules  

---

### 🔧 Utilities

- [`jq`](tools/utilities/jq.md) – JSON parsing in terminal  
- [`yq`](tools/utilities/yq.md) – YAML & JSON processing  

---

## 🧪 Perfect for new laptop setups

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 8px;">

<div style="border-radius: 16px; padding: 16px; border: 1px solid #e2e8f0;">
  <h3>👩‍💻 For individual engineers</h3>
  <ul>
    <li>New laptop? Go category by category.</li>
    <li>Use the same commands across all projects.</li>
    <li>Forget “which blog did I copy that from?”</li>
  </ul>
</div>

<div style="border-radius: 16px; padding: 16px; border: 1px solid #e2e8f0;">
  <h3>🏢 For teams &amp; companies</h3>
  <ul>
    <li>Share one link in onboarding docs.</li>
    <li>Keep installation steps in Git, with PR reviews.</li>
    <li>Extend with your own internal tools.</li>
  </ul>
</div>

</div>

---

## 🔁 How this site works

1. Pick your **tool** from the sidebar or categories above.  
2. Choose your **operating system** tab (macOS / Ubuntu / Windows).  
3. Copy the **install commands** into your terminal.  
4. Run the **verification commands** at the bottom of each page.  

If something changes (for example, a tool’s official install method):

- Update the commands in this repo  
- Commit + push to `main`  
- GitHub Actions rebuilds and deploys the site automatically ✅  

---

## 🤝 Maintained by Kubelancer

This project is maintained by **Kubelancer / Balasubramani** to support:

- Cloud, DevOps & SRE engineers  
- Startups standardizing their workstation setup  
- Teams migrating to **Kubernetes, GitOps & IaC**

👉 Learn more: [About this project](about.md)

<p style="margin-top: 16px; font-size: 0.9rem; opacity: 0.8;">
If this site saves you time, consider starring the repo on GitHub ⭐
</p>
