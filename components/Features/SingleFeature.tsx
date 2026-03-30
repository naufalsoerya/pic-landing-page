import React from "react";
import { Feature } from "@/types/feature";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, link } = feature;

  return (
    <Link href={link} className="group">
      <Card className="h-full border border-slate-100 hover:border-gojek-green/30 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-0">
          <div className="overflow-hidden rounded-t-2xl">
            <Image
              src={icon}
              alt={title}
              width={400}
              height={250}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-gojek-green transition-colors">
              {title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              {description}
            </p>
            <div className="flex items-center gap-1.5 text-gojek-green font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Selengkapnya <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SingleFeature;
