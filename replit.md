# TCET EDIC - Entrepreneurship Development and Innovation Cell

## Overview

This is a React-based web application for the Entrepreneurship Development and Innovation Cell (EDIC) at Thakur College of Engineering & Technology (TCET). The application serves as a comprehensive platform to showcase the cell's mission, team, events, and resources for student entrepreneurs. It's built using modern web technologies with a focus on responsive design and user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with custom Shadcn/ui components
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with `/api` prefix routing
- **Middleware**: Express middleware for JSON parsing, URL encoding, and request logging

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **ORM**: Drizzle ORM with migrations support
- **Connection**: Neon Database serverless driver for cloud PostgreSQL
- **Schema**: Type-safe schema definitions in shared module
- **Fallback**: In-memory storage implementation for development/testing

## Key Components

### Core UI Components
- **Header**: Navigation with smooth scrolling and mobile menu
- **Hero**: Landing section with institution branding and call-to-action
- **QuickInfo**: Feature highlights with icons and descriptions
- **Footer**: Institution contact and copyright information

### Shared Infrastructure
- **Schema**: Drizzle-based database schema with Zod validation
- **Types**: Shared TypeScript types between client and server
- **Storage Interface**: Abstracted storage layer supporting multiple backends

### Design System
- **Component Library**: Complete Shadcn/ui component set (40+ components)
- **Theming**: CSS custom properties with light/dark mode support
- **Typography**: Inter font family for consistent branding
- **Icons**: Lucide React for consistent iconography

## Data Flow

### Client-Server Communication
1. **API Requests**: Client uses TanStack React Query for data fetching
2. **Request Handling**: Express server processes API requests with logging
3. **Data Validation**: Zod schemas validate input/output data
4. **Error Handling**: Centralized error handling with proper HTTP status codes

### State Management
1. **Server State**: TanStack React Query manages API data with caching
2. **Component State**: React hooks for local UI state
3. **Form State**: React Hook Form with Zod validation integration

### Development Workflow
1. **Development**: Vite dev server with HMR for frontend, tsx for backend
2. **Build**: Vite builds frontend, esbuild bundles backend
3. **Database**: Drizzle migrations with push command for schema updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Cloud PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **typescript**: Type checking and compilation
- **drizzle-kit**: Database migration tools

### Build Dependencies
- **vite**: Frontend build tool and dev server
- **esbuild**: Fast JavaScript bundler for backend
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Assets**: Static assets handled by Vite asset pipeline

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Session**: Express session storage with PostgreSQL backend
- **Static Files**: Express serves built frontend in production

### Development Setup
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Database**: Drizzle push for rapid schema development
- **Error Overlay**: Replit runtime error modal for debugging

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```