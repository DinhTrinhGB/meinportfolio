export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Link1",
    year: 2025,
    description: "der erste Link",
    url: "https://github.com",
  },
  {
    title: "Link2",
    year: 2025,
    description: "der zweite Link",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Link4",
    year: 2025,
    description: "der vierte Link",
    url: "https://nextjs.org/docs/app/api-reference/components/link",
  }
];
