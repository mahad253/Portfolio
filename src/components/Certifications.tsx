import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { certificationsData } from '@/data/certificationsData';

const Certifications = () => {
    return (
        <section className="relative z-10 bg-background px-4 py-24">
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
                    ⧉ Certifications & attestations
                </h2>

                <div className="grid gap-6">
                    {certificationsData.map((certification, index) => (
                        <Card key={index} className="border-border/60 bg-muted/30 shadow-sm">
                            <CardHeader className="space-y-4">
                                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="h-5 w-5 text-primary" />
                                            <CardTitle className="text-2xl">{certification.issuer}</CardTitle>
                                        </div>

                                        <p className="text-base font-medium text-foreground">
                                            {certification.title}
                                        </p>

                                        <p className="text-sm text-muted-foreground">
                                            {certification.description}
                                        </p>
                                    </div>

                                    <Badge variant="secondary" className="w-fit text-sm">
                                        {certification.date}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-5">
                                <div>
                                    <p className="mb-3 text-sm font-medium text-foreground">
                                        Modules validés
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {certification.highlights.map((item) => (
                                            <Badge key={item} variant="outline" className="text-sm">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {certification.documentUrl && (
                                    <Button asChild className="rounded-full">
                                        <a
                                            href={certification.documentUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Voir l'attestation
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;