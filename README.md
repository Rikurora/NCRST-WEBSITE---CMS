# NCRST Website + CMS

This is the official website and content management system for the National Commission on Research, Science and Technology (NCRST).

- **Backend** - PHP/Symfony API with API Platform (`http://localhost:8000`)
- **CMS** (`@ncrst/cms`) - Content Management System for internal content management
- **Website** (`@ncrst/website`) - Public-facing website
- **Shared** (`@ncrst/shared`) - Shared components, types, and utilities

The project is organized as a monorepo containing multiple packages:

- `Backend/` - Symfony-based backend API
- `packages/cms/` - React-based admin CMS interface
- `packages/website/` - React-based public website
- `packages/shared/` - Shared components and utilities

## Prerequisites

- PHP 8.0 or higher
- Composer
- Node.js 16 or higher
- npm or yarn
- MySQL/MariaDB

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Rikurora/NCRSTWEBSITE-.git
cd NCRSTWEBSITE-
```

2. Install backend dependencies:
```bash
cd Backend/website-backend
composer install
```

3. Configure the backend:
- Copy `.env` to `.env.local` and update database credentials
- Generate JWT keys:
```bash
php bin/console lexik:jwt:generate-keypair
```

4. Install frontend dependencies:
```bash
# Install root dependencies
npm install

# Install package dependencies
cd packages/cms && npm install
cd ../website && npm install
cd ../shared && npm install
```

## Development

1. Start the backend server:
```bash
cd Backend/website-backend
symfony server:start
```

2. Start the CMS development server:
```bash
cd packages/cms
npm run dev
```

3. Start the website development server:
```bash
cd packages/website
npm run dev
```

## Building for Production

1. Build the shared package:
```bash
cd packages/shared
npm run build
```

2. Build the CMS:
```bash
cd packages/cms
npm run build
```

3. Build the website:
```bash
cd packages/website
npm run build
```

4. Prepare the backend:
```bash
cd Backend/website-backend
composer install --no-dev --optimize-autoloader
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[Add your license information here] 