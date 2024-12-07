# P£rsona Vault

Welcome to the P£rsona Vault repository. This project is designed to provide a dynamic, gamified card carousel for showcasing professional personality profiles with stunning visuals and interactive storytelling. Perfect for resumes, branding, and self-expression, P£rsona Vault turns profiles into an immersive digital experience.

## Table of Contents

- [P£rsona Vault](#prsona-vault)
  - [Table of Contents](#table-of-contents)
  - [Product Overview](#product-overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Customization](#customization)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Product Overview

P£rsona Vault is a dynamic, gamified card carousel designed to showcase professional personality profiles with stunning visuals and interactive storytelling. It reimagines how personalities are presented by merging professional storytelling with interactive, visually rich designs.

## Features

- **Carousel Display**: Three-card layout with smooth transitions and circular navigation.
- **Card Structure**: High-resolution visuals with expandable cards for detailed backstories.
- **Interaction Features**: Hover effects, lightbox view, and progress indicators for enhanced user engagement.
- **Customization Options**: Themes, color palettes, and background effects for personalized storytelling.

## Installation

To set up the project locally using Hatch, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dev3l/persona-vault.git
   cd persona-vault
   ```

2. **Create and activate a virtual environment**:
   Use Hatch to create and activate a virtual environment:

   ```bash
   hatch env create
   hatch shell
   ```

3. **Navigate to the contents directory**:

   ```bash
   cd contents
   ```

## Usage

To preview the site locally, use the following command:

```bash
mkdocs serve
```

Access the site at `http://127.0.0.1:8000`.

## Customization

- **Theme Configuration**: Modify `mkdocs.yml` to change the theme settings, including colors and fonts. The theme is designed to be sleek and modern, with a focus on readability and aesthetics.
- **CSS Styling**: Add custom styles in `stylesheets/extra.css` to enhance the site's appearance, including the carousel and card interactions.

## Deployment

To deploy the site to GitHub Pages, run:

```bash
mkdocs gh-deploy
```

Ensure your repository is linked to a GitHub account and has GitHub Pages enabled.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
