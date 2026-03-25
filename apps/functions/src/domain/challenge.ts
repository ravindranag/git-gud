import { FirestoreDataConverter, QueryDocumentSnapshot } from "firebase-admin/firestore";
import { firestore } from "../lib/firebase";

export interface Challenge {
  id: string
  title: string
  difficulty: string
  challenge: string
  requirements: string
  bonusConsiderations: string[]
  whyTakeThisChallenge: string[]
  createdAt: Date
}

export type CreateChallengeData = Omit<Challenge, 'id'>


const challengeConverter: FirestoreDataConverter<Challenge> = {
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    const data = snapshot.data()

    return {
      id: snapshot.id,
      title: data.title,
      challenge: data.challenge,
      difficulty: data.difficulty,
      requirements: data.requirements,
      bonusConsiderations: data.bonusConsiderations,
      whyTakeThisChallenge: data.whyTakeThisChallenge,
      createdAt: data.createdAt?.toDate()
    } as Challenge
  },

  toFirestore: (challenge: Challenge) => {
    return challenge
  }
}

const challengesCollection = firestore.collection("Challenges").withConverter(challengeConverter)

export const ChallengeService = {
  /** Create a new user */
  async createChallenge(data: CreateChallengeData): Promise<string> {
    const docRef = await challengesCollection.add(data as Challenge)
    return docRef.id;
  },

  async getPreviousChallenges(limit: number): Promise<Challenge[]> {
    const snapshot = await challengesCollection.orderBy('createdAt', 'desc').limit(limit).get()

    return snapshot.docs.map((doc) => doc.data())
  },

  async getChallengeForToday(): Promise<Challenge | null> {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const snapshot = await challengesCollection.where("createdAt", ">=", today).orderBy("createdAt", "desc").limit(1).get()

    if (snapshot.empty) {
      return null
    }

    return snapshot.docs[0].data()
  }
}