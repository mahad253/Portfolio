// src/components/EducationSection.tsx

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { educationData } from "@/data/educationData";

const TimelineDot = () => (
    <div className="absolute left-0 w-3 h-3 bg-primary rounded-full mt-8 -ml-1.5 border border-white dark:border-gray-900" />
);

const EducationSection = () => {
    return (
        <section className="bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">⧉ Parcours académique</h2>
                <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
                    {educationData.map((edu, index) => (
                        <div key={index} className="mb-8 ml-6">
                            <TimelineDot />
                            <Card className="mb-4 bg-muted/30">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-xl font-semibold">{edu.degree}</CardTitle>
                                            <p className="text-muted-foreground">{edu.institution} — {edu.location}</p>
                                        </div>
                                        <Badge variant="secondary">{edu.period}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                                        {edu.details.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
