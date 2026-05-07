export interface Course {
    id: number;
    title: string;
    price: string;
    description: string;
    image: string;
    alt: string;
}

export const courses: Course[] = [
    {
        id: 1,
        title: "Inglés para Negocios",
        price: "$299",
        description: "Domine el lenguaje de los mercados internacionales. Comunicación ejecutiva, presentaciones de alto impacto y negociación estratégica.",
        image: "reunion 1.jpeg",
        alt: "Modern corporate skyscraper architecture"
    },
    {
        id: 2,
        title: "Preparación de Exámenes",
        price: "$350",
        description: "Estrategias avanzadas para certificaciones internacionales (IELTS, TOEFL, Cambridge). Resultados garantizados por expertos examinadores.",
        image: "books 1.jpeg",
        alt: "Person writing notes in a minimal desk environment"
    },
    // ... añade el resto de los cursos aquí
];