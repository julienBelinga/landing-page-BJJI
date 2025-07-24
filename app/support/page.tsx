"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Support utilisateur</CardTitle>
          <CardDescription>
            Besoin d’aide ? Posez vos questions ici ou écrivez-nous directement à{" "}
            <a
              href="mailto:julienboinga.pro@gmail.com"
              className="text-blue-600 underline"
            >
              julienboinga.pro@gmail.com
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action="https://formsubmit.co/julienbelinga.pro@gmail.com"
            method="POST"
            className="space-y-4"
            onSubmit={() => setIsSubmitting(true)}
          >
            {/* Anti-spam honeypot */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Nouveau message de support" />
            <input type="hidden" name="_next" value="https://bjj-insight.vercel.app/support/success" />

            <Input
              type="email"
              name="email"
              placeholder="Votre adresse e-mail"
              required
            />
            <Textarea
              name="message"
              placeholder="Décrivez votre problème ou votre question"
              required
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}