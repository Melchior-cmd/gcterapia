"use client";

import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
}

export function ServiceCard({
  title,
  description,
  price,
  imageUrl,
  imageAlt,
}: ServiceCardProps) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          R$ {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
