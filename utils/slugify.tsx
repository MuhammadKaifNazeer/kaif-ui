// utils/slugify.ts
export function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, "") // Remove non-word characters
      .replace(/\-\-+/g, "-") // Replace multiple hyphens with a single hyphen
      .trim(); // Trim leading and trailing hyphens
  }