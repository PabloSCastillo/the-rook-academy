import CourseCard from '../../components/CourseCard';
import CourseCTA from '../../components/CourseCTA';
import { courses } from '../../data/courses';
import './Courses.css';

const Courses = () => {
    return (
        <div className="bg-[#fcf9f8] text-[#1b1c1c] font-['Manrope'] selection:bg-[#a7efef] selection:text-[#002020]">
            <main className="pt-20">

                <section className="relative h-[140px] flex items-center justify-center overflow-hidden bg-[#005a5a]">
                    <div className="absolute inset-0 z-0">

                        <div className="absolute inset-0 bg-gradient-to-br from-[#005a5a]/80 to-[#267373]/80"></div>
                    </div>
                    <div className="relative z-10 text-center px-6">
                        <h1 className="font-extrabold text-6xl md:text-5xl text-white tracking-tighter mb-4">
                            CURSOS
                        </h1>
                        <p className="font-['Work_Sans'] text-[#a7efef] uppercase tracking-[0.3em] text-sm">
                            El Horizonte Intelectual
                        </p>
                    </div>
                </section>

           

                {/* Filtros Académicos */}
                <section className="bg-[#f6f3f2] py-8 md:py-12 px-6 md:px-8 border-y border-outline-variant/15">
                    <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar">
                        <div className="flex flex-nowrap md:flex-wrap gap-6 md:gap-12 justify-start md:justify-center min-w-max md:min-w-0 pb-2 md:pb-0">
                            {['Todos los Cursos', 'Inglés de Negocios', 'Preparación de Exámenes', 'Clases Particulares'].map((cat) => (
                                <button key={cat} className="whitespace-nowrap font-headline font-bold text-[10px] md:text-xs uppercase tracking-widest text-[#3f4948] hover:text-[#005a5a] transition-colors border-b-2 border-transparent hover:border-[#005a5a] pb-2">
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Course Grid */}
                <section className="px-6 md:px-8 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl font-headline font-black text-[#005a5a] uppercase tracking-tight">Nuestros Programas</h2>
                            <div className="w-16 md:w-20 h-1 bg-[#005a5a] mx-auto mt-4 md:mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0 border-none md:border md:border-outline-variant/20">
                            {courses.map((course: any, index: number) => (
                                <div key={course.id} className="mx-1 md:border md:border-outline-variant/10 bg-white md:bg-transparent shadow-sm md:shadow-none rounded-lg md:rounded-none overflow-hidden">
                                    <CourseCard
                                        {...course}
                                        isEven={index % 2 !== 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NUEVA SECCIÓN: Video de Presentación */}
                <section className="px-6 md:px-8 py-12 md:py-20 bg-[#005a5a]/5">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="font-label text-[#944921] font-bold uppercase tracking-[0.2em] text-[10px] block mb-2">Conócenos</span>
                            <h2 className="text-2xl md:text-3xl font-headline font-bold text-[#005a5a] uppercase">Nuestra Metodología</h2>
                        </div>

                        <div className="relative group">
                            {/* Decoración de fondo */}
                            <div className="absolute -inset-3 bg-[#005a5a]/10 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>

                            {/* Contenedor del Video */}
                            <div className="relative group max-w-4xl mx-auto">
                                <div className="relative aspect-video w-full overflow-hidden shadow-2xl">
                                    {/* Overlay para efecto vintage */}
                                    <div className="absolute inset-0 pointer-events-none z-10 bg-[#fdfaf6]/10 mix-blend-overlay"></div>

                                    <video
                                        className="w-full h-full object-cover *:brightness-[1.1] contrast-[0.85] saturate-[0.9]"
                                        src="/video.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        controls={false} // Esto asegura que no haya controles
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <CourseCTA />
            </main>
        </div>
    );
};

export default Courses;