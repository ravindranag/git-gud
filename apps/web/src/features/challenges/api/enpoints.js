import api from "@/lib/api";

export const API_ENDPOINTS = {
  challenges: {
    getChallengeForToday: () => api.get('/api/challenges/today')
  }
}

export const QUERY_KEYS = {
  challenges: {
    today: ["challenges:today"]
  }
}
