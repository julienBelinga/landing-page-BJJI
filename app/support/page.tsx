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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact-support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage("Votre message a bien été envoyé.");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage(data.error || "Une erreur s’est produite.");
      }
    } catch (error) {
      setResponseMessage("Erreur lors de l’envoi du message.");
    } finally {
      setIsLoading(false);
    }
  };

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
              julienbelinga.pro@gmail.com
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Décrivez votre problème ou votre question"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Envoi en cours..." : "Envoyer"}
            </Button>
            {responseMessage && (
              <p
                className={`text-sm ${
                  responseMessage.includes("envoyé") ? "text-green-600" : "text-red-600"
                }`}
              >
                {responseMessage}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}