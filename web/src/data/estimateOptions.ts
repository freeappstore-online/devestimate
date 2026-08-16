// web/src/data/estimateOptions.ts

import type {
    FeatureOption,
    ProjectBaseHours,
    ProjectType,
  } from "../types";
  
  export const projectBaseHours: Record<ProjectType, ProjectBaseHours> = {
    portfolio: {
      min: 10,
      max: 16,
    },
  
    business: {
      min: 14,
      max: 22,
    },
  
    ecommerce: {
      min: 20,
      max: 30,
    },
  
    saas: {
      min: 24,
      max: 36,
    },
  
    dashboard: {
      min: 18,
      max: 28,
    },
  
    landing: {
      min: 6,
      max: 10,
    },
  };
  
  export const featureOptions: FeatureOption[] = [
    {
      id: "authentication",
      name: "User Authentication",
      description: "Login, register and password reset",
      minHours: 8,
      maxHours: 12,
    },
  
    {
      id: "profiles",
      name: "User Profiles",
      description: "Profile pages and profile management",
      minHours: 4,
      maxHours: 6,
    },
  
    {
      id: "admin-panel",
      name: "Admin Panel",
      description: "Admin dashboard and management tools",
      minHours: 10,
      maxHours: 16,
    },
  
    {
      id: "payments",
      name: "Payments Integration",
      description: "Stripe, PayPal or another payment gateway",
      minHours: 10,
      maxHours: 14,
    },
  
    {
      id: "shopping-cart",
      name: "Shopping Cart",
      description: "Add to cart and cart management",
      minHours: 8,
      maxHours: 12,
    },
  
    {
      id: "product-management",
      name: "Product Management",
      description: "Manage products or services",
      minHours: 6,
      maxHours: 10,
    },
  
    {
      id: "order-management",
      name: "Order Management",
      description: "Order processing and tracking",
      minHours: 8,
      maxHours: 12,
    },
  
    {
      id: "api-integration",
      name: "API Integration",
      description: "Third-party API integration",
      minHours: 6,
      maxHours: 10,
    },
  
    {
      id: "blog-cms",
      name: "Blog / CMS",
      description: "Blog or content management",
      minHours: 6,
      maxHours: 10,
    },
  
    {
      id: "chat",
      name: "Real-time Chat",
      description: "Chat or real-time updates",
      minHours: 10,
      maxHours: 16,
    },
  
    {
      id: "file-upload",
      name: "File Upload",
      description: "Upload and manage files",
      minHours: 6,
      maxHours: 10,
    },
  
    {
      id: "notifications",
      name: "Notifications",
      description: "Email or in-app notifications",
      minHours: 4,
      maxHours: 6,
    },
  ];
  
  export const projectTypeOptions: {
    value: ProjectType;
    label: string;
    description: string;
  }[] = [
    {
      value: "portfolio",
      label: "Portfolio / Personal",
      description: "Personal portfolio or resume website",
    },
  
    {
      value: "business",
      label: "Business Website",
      description: "Company or business website",
    },
  
    {
      value: "ecommerce",
      label: "E-commerce",
      description: "Online store with products",
    },
  
    {
      value: "saas",
      label: "SaaS / Web App",
      description: "Software as a service application",
    },
  
    {
      value: "dashboard",
      label: "Dashboard / Admin",
      description: "Admin panel or dashboard",
    },
  
    {
      value: "landing",
      label: "Landing Page",
      description: "Marketing or product landing page",
    },
  ];