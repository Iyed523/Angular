export async function getPrerenderParams() {
  const response = await fetch('http://localhost:8010/api/assignments'); 
  const assignments = await response.json();
  return assignments.map((a: any) => ({ id: a.id.toString() }));
}
