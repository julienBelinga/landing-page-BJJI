import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

export interface Athlete {
  id: string;
  name: string;
  bio?: string;
  chargesEnabled: boolean;
  createdAt: Date;
  currency: string;
  email: string;
  fcmToken: string;
  profileImageUrl: string;
  specialization: string;
  stripeAccountId: string;
  themes: string[];
  price: number;
  conversations?: number;
}

export async function fetchTopAthletes(count: number = 6): Promise<Athlete[]> {
  try {
    const athletesRef = collection(db, "Athletes");
    const q = query(athletesRef, orderBy("createdAt", "desc"), limit(count));

    const snapshot = await getDocs(q);
    const athletes: Athlete[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      athletes.push({
        id: doc.id,
        name: data.name,
        bio: data.bio,
        chargesEnabled: data.chargesEnabled,
        createdAt: data.createdAt.toDate(),
        currency: data.currency,
        email: data.email,
        fcmToken: data.fcmToken,
        profileImageUrl: data.profileImageUrl,
        specialization: data.specialization,
        stripeAccountId: data.stripeAccountId,
        themes: data.themes || [],
        price: data.price,
        conversations: data.conversations || 0,
      });
    });

    return athletes;
  } catch (error) {
    console.error("Erreur lors de la récupération des athlètes:", error);
    return [];
  }
}

export async function fetchAthletesWithProfileImage(
  count: number = 2
): Promise<Athlete[]> {
  try {
    const athletesRef = collection(db, "Athletes");
    // Utiliser un seul filtre != et récupérer plus d'athlètes pour filtrer côté code
    const q = query(
      athletesRef,
      orderBy("createdAt", "desc"),
      limit(20) // Récupérer plus d'athlètes pour avoir des options
    );

    const snapshot = await getDocs(q);
    const athletes: Athlete[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      // Vérifier que l'URL de l'image existe et n'est pas vide
      if (
        data.profileImageUrl &&
        data.profileImageUrl.trim() !== "" &&
        data.profileImageUrl !== null &&
        data.profileImageUrl !== undefined
      ) {
        athletes.push({
          id: doc.id,
          name: data.name,
          bio: data.bio,
          chargesEnabled: data.chargesEnabled,
          createdAt: data.createdAt.toDate(),
          currency: data.currency,
          email: data.email,
          fcmToken: data.fcmToken,
          profileImageUrl: data.profileImageUrl,
          specialization: data.specialization,
          stripeAccountId: data.stripeAccountId,
          themes: data.themes || [],
          price: data.price,
          conversations: data.conversations || 0,
        });
      }
    });

    // Retourner seulement le nombre demandé
    return athletes.slice(0, count);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des athlètes avec photo:",
      error
    );
    return [];
  }
}

export async function fetchTrendingAthletesWithPhoto(
  count: number = 2
): Promise<Athlete[]> {
  try {
    const athletesRef = collection(db, "Athletes");
    // Récupérer tous les athlètes triés par nombre de conversations
    const q = query(
      athletesRef,
      orderBy("conversations", "desc"),
      limit(20) // Plus large pour s'assurer d'avoir assez d'athlètes avec photos
    );

    const snapshot = await getDocs(q);
    const athletesWithPhotos: Athlete[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      // Filtrer pour garder seulement ceux avec des photos de profil valides
      if (
        data.profileImageUrl &&
        data.profileImageUrl.trim() !== "" &&
        data.profileImageUrl !== null &&
        data.profileImageUrl !== undefined &&
        data.conversations &&
        data.conversations > 0
      ) {
        athletesWithPhotos.push({
          id: doc.id,
          name: data.name,
          bio: data.bio,
          chargesEnabled: data.chargesEnabled,
          createdAt: data.createdAt.toDate(),
          currency: data.currency,
          email: data.email,
          fcmToken: data.fcmToken,
          profileImageUrl: data.profileImageUrl,
          specialization: data.specialization,
          stripeAccountId: data.stripeAccountId,
          themes: data.themes || [],
          price: data.price,
          conversations: data.conversations,
        });
      }
    });

    // Si on n'a pas assez d'athlètes trending avec photos, compléter avec les plus récents ayant des photos
    if (athletesWithPhotos.length < count) {
      const additionalQ = query(
        athletesRef,
        orderBy("createdAt", "desc"),
        limit(20)
      );

      const additionalSnapshot = await getDocs(additionalQ);
      const existingIds = new Set(athletesWithPhotos.map((a) => a.id));

      additionalSnapshot.forEach((doc) => {
        if (athletesWithPhotos.length >= count) return;

        const data = doc.data();
        if (
          !existingIds.has(doc.id) &&
          data.profileImageUrl &&
          data.profileImageUrl.trim() !== "" &&
          data.profileImageUrl !== null &&
          data.profileImageUrl !== undefined
        ) {
          athletesWithPhotos.push({
            id: doc.id,
            name: data.name,
            bio: data.bio,
            chargesEnabled: data.chargesEnabled,
            createdAt: data.createdAt.toDate(),
            currency: data.currency,
            email: data.email,
            fcmToken: data.fcmToken,
            profileImageUrl: data.profileImageUrl,
            specialization: data.specialization,
            stripeAccountId: data.stripeAccountId,
            themes: data.themes || [],
            price: data.price,
            conversations: data.conversations || 0,
          });
        }
      });
    }

    console.log(
      `Trouvé ${athletesWithPhotos.length} athlètes avec photos de profil`
    );
    return athletesWithPhotos.slice(0, count);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des athlètes trending avec photo:",
      error
    );
    return [];
  }
}

export async function fetchTopAthletesWithPhoto(
  count: number = 6
): Promise<Athlete[]> {
  try {
    const athletesRef = collection(db, "Athletes");
    // Récupérer plus d'athlètes pour s'assurer d'avoir assez avec des photos
    const q = query(
      athletesRef,
      orderBy("createdAt", "desc"),
      limit(count * 2) // Récupérer plus pour avoir de la marge
    );

    const snapshot = await getDocs(q);
    const athletesWithPhotos: Athlete[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      // Filtrer pour garder seulement ceux avec des photos de profil valides
      if (
        data.profileImageUrl &&
        data.profileImageUrl.trim() !== "" &&
        data.profileImageUrl !== null &&
        data.profileImageUrl !== undefined
      ) {
        athletesWithPhotos.push({
          id: doc.id,
          name: data.name,
          bio: data.bio,
          chargesEnabled: data.chargesEnabled,
          createdAt: data.createdAt.toDate(),
          currency: data.currency,
          email: data.email,
          fcmToken: data.fcmToken,
          profileImageUrl: data.profileImageUrl,
          specialization: data.specialization,
          stripeAccountId: data.stripeAccountId,
          themes: data.themes || [],
          price: data.price,
          conversations: data.conversations || 0,
        });
      }
    });

    console.log(
      `Trouvé ${athletesWithPhotos.length} athlètes avec photos pour la grille`
    );
    return athletesWithPhotos.slice(0, count);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des athlètes avec photo pour la grille:",
      error
    );
    return [];
  }
}
