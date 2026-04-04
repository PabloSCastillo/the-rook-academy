import CourseCard from '../../components/CourseCard';
import CourseCTA from '../../components/CourseCTA';
import { courses } from '../../data/courses';
import './Course.css';

const Courses = () => {
    return (
        <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] font-['Manrope'] selection:bg-[#a7efef] selection:text-[#002020]">
            <main className="pt-20 md:pt-32">

                {/* Hero Section - Consistente con Home/Blog */}
                <header className="px-8 py-20 bg-surface flex items-center justify-center">
                    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <span className="font-label text-[#944921] font-bold uppercase tracking-[0.3em] text-xs block mb-6">
                                The Intellectual Horizon
                            </span>
                            <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-[#005a5a] leading-[1.1] mb-8 uppercase tracking-tighter">
                                Elevando tu <span className="italic text-[#005a5a]/80">Potencial</span> Profesional.
                            </h1>
                            <p className="font-body text-xl text-[#3f4948] max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
                                Cursos de inglés diseñados exclusivamente para adultos. Desde la excelencia en los negocios hasta la maestría en exámenes internacionales.
                            </p>
                        </div>

                        {/* Imagen decorativa con marco - Estilo Home */}
                        <div className="relative order-1 lg:order-2 flex justify-center items-center">
                            <div className="absolute -inset-4 bg-[#005a5a]/5 transform -rotate-3"></div>
                            <div className="relative w-full aspect-[4/5] max-w-md overflow-hidden border-[12px] border-white shadow-xl">
                                <img
                                    src="/character 7.png"
                                    alt="Academic Excellence"
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 border border-outline-variant/20">
                                    <p className="text-[10px] font-bold text-[#005a5a] tracking-widest uppercase">The Rook Academy</p>
                                    <p className="text-sm font-headline font-bold">CURSOS DE ÉLITE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Filtros Académicos - Ajustado para móvil */}
                <section className="bg-[#f6f3f2] py-12 px-8 border-y border-outline-variant/15">
                    <div className="max-w-7xl mx-auto flex flex-wrap gap-6 md:gap-12 justify-center">
                        {['Todos los Cursos', 'Inglés de Negocios', 'Preparación de Exámenes', 'Clases Particulares'].map((cat) => (
                            <button key={cat} className="font-headline font-bold text-[10px] md:text-xs uppercase tracking-widest text-[#3f4948] hover:text-[#005a5a] transition-colors border-b-2 border-transparent hover:border-[#005a5a] pb-2">
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Course Grid - Rejilla Fina (Ajustada a max-w-7xl y px-8) */}
                <section className="px-8 py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-headline font-black text-[#005a5a] uppercase tracking-tight">Nuestros Programas</h2>
                            <div className="w-20 h-1 bg-[#005a5a] mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-outline-variant/20">
                            {courses.map((course: any, index: number) => (
                                <div key={course.id} className="border border-outline-variant/10">
                                    <CourseCard
                                        {...course}
                                        isEven={index % 2 !== 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CourseCTA />
            </main>
        </div>
    );
};

export default Courses;