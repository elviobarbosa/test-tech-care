import { Patient } from "@/types/patient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const USERNAME = process.env.NEXT_PUBLIC_API_USERNAME || "";
const PASSWORD = process.env.NEXT_PUBLIC_API_PASSWORD || "";

function encodeCredentials(username: string, password: string): string {
  const credentials = `${username}:${password}`;
  return btoa(credentials);
}

export async function fetchPatients(): Promise<Patient[]> {
  try {
    if (!API_URL || !USERNAME || !PASSWORD) {
      throw new Error("API credentials are not configured");
    }

    const encodedCredentials = encodeCredentials(USERNAME, PASSWORD);

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Patient[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw error;
  }
}

export async function fetchPatientByName(
  name: string
): Promise<Patient | null> {
  try {
    const patients = await fetchPatients();
    const patient = patients.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    return patient || null;
  } catch (error) {
    console.error("Error fetching patient by name:", error);
    throw error;
  }
}
