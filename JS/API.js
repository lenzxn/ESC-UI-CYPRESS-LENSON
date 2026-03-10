const API_URL = "https://lernia-sjj-assignments.vercel.app/api/challenges";

export async function fetchChallenges() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Network response failed");
  }

  const data = await response.json();
  return data.challenges;
}
