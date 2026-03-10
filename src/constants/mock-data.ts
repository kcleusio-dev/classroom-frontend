import {Subject} from "@/types";

export const mockSubjects: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Foundational concepts of computer science including algorithms, data structures, and basic programming paradigms.",
        createdAt: new Date("2024-01-15")
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        department: "Mathematics",
        description: "Advanced calculus topics including integration techniques, differential equations, and series convergence.",
        createdAt: new Date("2024-01-20")
    },
    {
        id: 3,
        code: "PHY150",
        name: "General Physics",
        department: "Physics",
        description: "Comprehensive introduction to physics covering mechanics, thermodynamics, and wave phenomena.",
        createdAt: new Date("2024-02-01")
    }
];
