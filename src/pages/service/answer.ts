import { post } from "./api";

export async function postAnswer(answer: any) {
  const res = await post("/answer", answer);
  return res;
}
