import React from 'react';

interface CourseCardProps {
    title: string;
    price: string;
    description: string;
    image: string;
    alt: string;
    isEven: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, price, description, image, alt, isEven }) => {
    return (
        <article className={`group border-r border-b border-outline-variant/30 p-8 transition-colors duration-500 hover:bg-primary/5 flex flex-col justify-between ${isEven ? 'bg-surface-container-low' : 'bg-surface-container-lowest'}`}>
            <div>
                <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                    <img src={image} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-0 right-0 bg-primary text-on-primary px-4 py-2 font-label font-bold text-lg">
                        {price}
                    </div>
                </div>
                <h3 className="font-headline font-bold text-2xl text-on-surface mb-4 uppercase tracking-tight">{title}</h3>
                <p className="text-on-surface-variant font-body mb-8 line-clamp-3 leading-relaxed">{description}</p>
            </div>
            <div className="flex justify-between items-center">
                <button className="border-2 border-primary text-primary px-6 py-3 font-label font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300">
                    Ver Detalles
                </button>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform duration-300">
                    arrow_forward
                </span>
            </div>
        </article>
    );
};

export default CourseCard;