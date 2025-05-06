import { get } from "./api";

export async function getQuestionList() {
  const res = await get(`/question/list`);
  return res.data;
}

export async function getQuestionById(id: string) {
  const res = await get(`/question/detail/${id}`);
  return res;
}
