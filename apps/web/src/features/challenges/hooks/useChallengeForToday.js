import { API_ENDPOINTS, QUERY_KEYS } from "@/features/challenges/api/enpoints"
import { useQuery } from "@tanstack/react-query"

export const useChallengeForToday = () => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEYS.challenges.today,
    queryFn: () => API_ENDPOINTS.challenges.getChallengeForToday()
  })

  /**
   * @type {Challenge?}
   */
  const challenge = data?.data?.challenge

  return {
    challenge,
    isLoading
  }
}
