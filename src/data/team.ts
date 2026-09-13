export interface TeamMember {
  name: string;
  role: string;
  image: string | null;
}

export const team: TeamMember[] = [
  { name: "Rustabh Chauhan", role: "Founder & CEO", image: "/assets/team/rustabh.png" },
  { name: "Akash Sharma", role: "General Manager", image: "/assets/team/akash.png" },
  { name: "Durgesh Tiwari", role: "Social Media Manager", image: "/assets/team/durgesh.png" },
  { name: "Simon Chaudhary", role: "Video Editor", image: null },
  { name: "Ansari Abdullah", role: "Graphic Designer", image: null },
  { name: "Raju Prasad", role: "Sr. Full Stack Developer", image: "/assets/team/raju.png" },
  { name: "Sagar Maurya", role: "Designer & Developer", image: "/assets/team/sagar.png" },
];
