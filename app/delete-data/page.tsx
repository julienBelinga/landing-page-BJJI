"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DeleteDataPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Suppression de données</CardTitle>
          <CardDescription>
            Demandez la suppression de vos données personnelles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action="https://formsubmit.co/julienbelinga.pro@gmail.com"
            method="POST"
            className="space-y-4"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Anti-spam / configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Demande de suppression de données" />
            <input type="hidden" name="_next" value="https://bjj-insight.vercel.app/delete-data/success" />

            <Input
              type="email"
              name="email"
              placeholder="Votre adresse e-mail"
              required
            />

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Envoi en cours..." : "Demander la suppression"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}