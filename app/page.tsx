"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Users, Calendar, CreditCard, ChevronRight, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed w-full bg-slate-950/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                BJJ Insight
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#comment-ca-marche" className="text-slate-300 hover:text-white transition">
                Comment ça marche
              </a>
              <a href="#athletes" className="text-slate-300 hover:text-white transition">
                Pour les athlètes
              </a>
              <a href="#eleves" className="text-slate-300 hover:text-white transition">
                Pour les élèves
              </a>
              <a href="#faq" className="text-slate-300 hover:text-white transition">
                FAQ
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-4 w-4" /> Télécharger l'app
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Trouvez votre coach BJJ idéal
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              La première plateforme qui connecte les athlètes de Jiu-Jitsu Brésilien avec les élèves pour des sessions privées personnalisées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-5 w-5" /> Télécharger l'application
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                En savoir plus <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Comment ça marche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Créez votre profil",
                description: "Inscrivez-vous en quelques clics et personnalisez votre profil avec vos spécialités et disponibilités."
              },
              {
                icon: Calendar,
                title: "Trouvez un coach",
                description: "Parcourez les profils des athlètes, comparez leurs spécialités et choisissez le coach qui vous correspond."
              },
              {
                icon: CreditCard,
                title: "Réservez & payez",
                description: "Réservez votre session en quelques secondes et payez en toute sécurité via notre plateforme."
              }
            ].map((step, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                <div className="mb-4">
                  <step.icon className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pour les athlètes */}
      <section id="athletes" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Pour les athlètes</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-500/10 p-3">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Augmentez votre visibilité</h3>
                    <p className="text-slate-300">Créez votre profil professionnel et atteignez plus d'élèves potentiels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-500/10 p-3">
                    <CreditCard className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Paiements sécurisés</h3>
                    <p className="text-slate-300">Recevez vos paiements directement sur votre compte via Stripe Connect.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-500/10 p-3">
                    <Calendar className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Gestion simplifiée</h3>
                    <p className="text-slate-300">Gérez vos réservations et votre planning en toute simplicité.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?auto=format&fit=crop&q=80"
                alt="Athlète BJJ"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pour les élèves */}
      <section id="eleves" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?auto=format&fit=crop&q=80"
                alt="Élève BJJ"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Pour les élèves</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-500/10 p-3">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Trouvez le coach parfait</h3>
                    <p className="text-slate-300">Accédez à une communauté d'athlètes qualifiés et expérimentés.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-500/10 p-3">
                    <Calendar className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Réservation rapide</h3>
                    <p className="text-slate-300">Réservez votre session en quelques clics selon vos disponibilités.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-500/10 p-3">
                    <CreditCard className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Paiement en ligne</h3>
                    <p className="text-slate-300">Payez de manière sécurisée directement depuis l'application.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Comment devenir coach sur BJJ Insight ?",
                answer: "Inscrivez-vous sur l'application, complétez votre profil avec vos certifications et expériences, et commencez à recevoir des demandes de réservation."
              },
              {
                question: "Comment sont gérés les paiements ?",
                answer: "Les paiements sont traités de manière sécurisée via Stripe. L'argent est directement versé sur votre compte bancaire."
              },
              {
                question: "Puis-je annuler une réservation ?",
                answer: "Oui, vous pouvez annuler une réservation jusqu'à 24h avant la session. Le remboursement sera traité automatiquement."
              },
              {
                question: "L'application est-elle gratuite ?",
                answer: "L'application est gratuite à télécharger. Nous prélevons une petite commission uniquement sur les transactions réalisées."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                BJJ Insight
              </span>
              <p className="mt-4 text-slate-300">
                Connectez-vous avec la communauté BJJ et progressez ensemble.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#comment-ca-marche" className="hover:text-white transition">Comment ça marche</a></li>
                <li><a href="#athletes" className="hover:text-white transition">Pour les athlètes</a></li>
                <li><a href="#eleves" className="hover:text-white transition">Pour les élèves</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition">CGU</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-300 hover:text-white transition">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-300">
            <p>&copy; {new Date().getFullYear()} BJJ Insight. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}