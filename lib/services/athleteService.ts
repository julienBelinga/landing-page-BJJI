import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
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
      });
    });

    return athletes;
  } catch (error) {
    console.error("Erreur lors de la récupération des athlètes:", error);
    return [];
  }
}
